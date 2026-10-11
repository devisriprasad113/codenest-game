let activeLanguage = 'java';
let hintCount = 0;
const hintCost = 10;

function animateHUD(element) {
    if (element) {
        element.classList.remove("bounce-up");
        // Trigger reflow
        void element.offsetWidth;
        element.classList.add("bounce-up");
    }
}

// Initialize editor templates on load
document.addEventListener("DOMContentLoaded", () => {
    resetEditor();
    updateHintLabel();
});

function setLanguage(lang) {
    activeLanguage = lang;
    
    // Toggle active classes on tabs
    const tabs = document.querySelectorAll(".lang-tab");
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase() === lang) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    resetEditor();
}

function resetEditor() {
    const editor = document.getElementById("code-editor");
    if (activeLanguage === 'java') {
        editor.value = javaBoilerplate;
    } else if (activeLanguage === 'python') {
        editor.value = pythonBoilerplate;
    } else if (activeLanguage === 'c') {
        editor.value = cBoilerplate;
    }
}

function updateHintLabel() {
    const totalHints = hintsList ? hintsList.length : 0;
    const remaining = totalHints - hintCount;
    document.getElementById("hints-left-label").textContent = `Hints: ${remaining} remaining`;
}

function buyHint() {
    const totalHints = hintsList ? hintsList.length : 0;
    if (hintCount >= totalHints) {
        alert("All hints for this level have already been unlocked!");
        return;
    }

    fetch("/api/game/buy-hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            levelId: LEVEL_ID,
            hintIndex: hintCount,
            cost: hintCost
        })
    })
    .then(async response => {
        if (response.ok) {
            const data = await response.json();
            // Display the purchased hint inside the mentor speech bubble
            document.getElementById("mentor-text").innerHTML = `<strong>Oracle Hint #${hintCount+1}:</strong><br/>${data.hint}`;
            
            // Deduct mana dynamically in the top navigation bar HUD
            const manaElem = document.querySelector(".currency-item.mana");
            if (manaElem) {
                const spanElem = manaElem.querySelector("span:last-child");
                if (spanElem) spanElem.textContent = data.user.mana;
                animateHUD(manaElem);
            }
            
            hintCount++;
            updateHintLabel();
        } else {
            const errText = await response.text();
            alert(errText || "Insufficient Mana to buy hints!");
        }
    })
    .catch(error => {
        console.error("Error purchasing hint:", error);
        alert("Could not buy hint. Verify connection.");
    });
}

function runChallengeCode() {
    const codeValue = document.getElementById("code-editor").value;
    const consoleLog = document.getElementById("console-log-text");
    
    consoleLog.textContent = "> Compiling code...\n> Initiating algorithm test-runner...";

    // Validate that elements have actually been collected in Phaser first!
    if (typeof window.collectedRelicsCount === 'number' && window.collectedRelicsCount < 3) {
        const concept = window.LEVEL_CONCEPT || 'Stack';
        let elementText = 'elements';
        if (concept === 'Arrays' || concept === 'String') elementText = 'array blocks';
        if (concept === 'LinkedList') elementText = 'nodes';
        if (concept === 'Stack' || concept === 'Queue') elementText = 'relics';

        consoleLog.textContent += `\n\n[WARNING] Quest Elements Missing!\nYou must walk around and collect all 3 ${elementText} inside the room before running your algorithm script!`;
        document.getElementById("mentor-text").textContent = `You don't have the ${elementText} yet! Explore the level, jump over spikes, and collect all three ${elementText} before attempting to run your code.`;
        return;
    }

    fetch("/api/game/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            levelId: LEVEL_ID,
            language: activeLanguage,
            code: codeValue
        })
    })
    .then(response => response.json())
    .then(data => {
        // Output compile & run feedback inside the console log
        consoleLog.textContent = data.output;
        
        // Render dynamic visualization
        renderStackVisualization(data.stackTrace);

        if (data.success) {
            document.getElementById("mentor-text").textContent = data.mentorMessage || "The alchemical code compilation succeeded! The exit door has been unlocked - walk into it to complete the quest!";
            // Trigger door unlock state in the active Phaser game
            if (window.phaserGameInstance && window.phaserGameInstance.scene && window.phaserGameInstance.scene.scenes[0]) {
                window.phaserGameInstance.scene.scenes[0].unlockExitDoor();
            }
        } else {
            document.getElementById("mentor-text").textContent = data.mentorMessage || "Close, but the lock did not open. Verify your logic and try again!";
        }
    })
    .catch(error => {
        console.error("Error executing challenge code:", error);
        consoleLog.textContent += "\n\nError: Could not connect to validation backend.";
    });
}

function renderStackVisualization(stackTrace) {
    const concept = window.LEVEL_CONCEPT || 'Stack';
    const stackBox = document.getElementById("visual-stack-box");
    if (!stackBox) return;
    
    stackBox.innerHTML = ""; // Clear existing visual elements

    if (concept === 'Arrays' || concept === 'String') {
        stackBox.className = "visual-array-container";
    } else if (concept === 'LinkedList') {
        stackBox.className = "visual-list-container";
    } else if (concept === 'Queue') {
        stackBox.className = "visual-queue-container";
    } else if (concept === 'Searching') {
        stackBox.className = "visual-search-container";
    } else {
        stackBox.className = "visual-stack-box";
    }

    if (!stackTrace || stackTrace.length === 0) {
        document.getElementById("visual-stack-top-label").textContent = "TOP: --";
        return;
    }

    if (concept === 'Arrays' || concept === 'String') {
        document.getElementById("visual-stack-top-label").textContent = "ARRAY SIZE: " + stackTrace.length;
        stackTrace.forEach((val, idx) => {
            const cell = document.createElement("div");
            cell.className = "visual-array-cell";
            cell.textContent = val;
            
            const idxLabel = document.createElement("div");
            idxLabel.className = "visual-array-index";
            idxLabel.textContent = `[${idx}]`;
            
            cell.appendChild(idxLabel);
            stackBox.appendChild(cell);
        });
    } else if (concept === 'LinkedList') {
        document.getElementById("visual-stack-top-label").textContent = "NODES: " + stackTrace.length;
        stackTrace.forEach((val, idx) => {
            const node = document.createElement("div");
            node.className = "visual-list-node";
            node.textContent = val;
            stackBox.appendChild(node);
            
            if (idx < stackTrace.length - 1) {
                const arrow = document.createElement("div");
                arrow.className = "visual-list-arrow";
                arrow.innerHTML = "➔";
                stackBox.appendChild(arrow);
            }
        });
    } else if (concept === 'Queue') {
        document.getElementById("visual-stack-top-label").textContent = stackTrace[0] ? `FRONT: ${stackTrace[0].toUpperCase()}` : "FRONT: --";
        stackTrace.forEach(val => {
            const qItem = document.createElement("div");
            qItem.className = "visual-queue-item";
            qItem.textContent = val;
            stackBox.appendChild(qItem);
        });
    } else if (concept === 'Searching') {
        const ptrs = {};
        const elements = [];
        let foundIdx = -1;
        let target = '';

        stackTrace.forEach(item => {
            if (item.startsWith("ptr:low:")) {
                ptrs.low = parseInt(item.substring(8));
            } else if (item.startsWith("ptr:high:")) {
                ptrs.high = parseInt(item.substring(9));
            } else if (item.startsWith("ptr:mid:")) {
                ptrs.mid = parseInt(item.substring(8));
            } else if (item.startsWith("ptr:found:")) {
                foundIdx = parseInt(item.substring(10));
            } else if (item.startsWith("ptr:target:")) {
                target = item.substring(11);
            } else {
                elements.push(item);
            }
        });

        document.getElementById("visual-stack-top-label").textContent = target ? `TARGET: ${target}` : "BINARY SEARCH";

        const row = document.createElement("div");
        row.className = "visual-search-row";
        
        elements.forEach((val, idx) => {
            const cell = document.createElement("div");
            cell.className = "visual-search-cell";
            cell.textContent = val;

            if (ptrs.low !== undefined && ptrs.high !== undefined && idx >= ptrs.low && idx <= ptrs.high) {
                cell.classList.add("active-range");
            }
            if (foundIdx === idx) {
                cell.classList.add("found");
            }
            
            let pointerText = "";
            if (ptrs.low === idx) pointerText += "L ";
            if (ptrs.mid === idx) pointerText += "M ";
            if (ptrs.high === idx) pointerText += "H ";
            if (foundIdx === idx) pointerText += "🎯 ";

            if (pointerText) {
                const ptrElem = document.createElement("div");
                ptrElem.className = "visual-search-pointer";
                ptrElem.style.position = "absolute";
                ptrElem.style.top = "-24px";
                ptrElem.style.left = "50%";
                ptrElem.style.transform = "translateX(-50%)";
                ptrElem.textContent = pointerText.trim();
                cell.appendChild(ptrElem);
            }

            row.appendChild(cell);
        });
        stackBox.appendChild(row);
    } else {
        // Default stack behavior
        document.getElementById("visual-stack-top-label").textContent = stackTrace[stackTrace.length - 1] ? `TOP: ${stackTrace[stackTrace.length - 1].toUpperCase()}` : "TOP: --";
        stackTrace.forEach(relic => {
            const relicDiv = document.createElement("div");
            relicDiv.className = `visual-relic ${relic}`;
            
            let relicIcon = "💎";
            if (relic === "gold_idol") relicIcon = "🏆";
            if (relic === "scroll") relicIcon = "📜";
            
            relicDiv.textContent = `${relicIcon} ${relic.replace("_", " ")}`;
            stackBox.appendChild(relicDiv);
        });
    }
}

function saveChallengeCompletion() {
    // Determine stars depending on hints used
    let stars = 3;
    if (hintCount === 1) stars = 2;
    if (hintCount >= 2) stars = 1;

    fetch("/api/game/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            levelId: LEVEL_ID,
            stars: stars
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update currencies in Top HUD dynamically
            const goldHUD = document.querySelector(".currency-item.gold");
            const manaHUD = document.querySelector(".currency-item.mana");
            const gemHUD = document.querySelector(".currency-item.gems");
            
            if (goldHUD) {
                const span = goldHUD.querySelector("span:last-child");
                if (span) span.textContent = data.user.gold;
                animateHUD(goldHUD);
            }
            if (manaHUD) {
                const span = manaHUD.querySelector("span:last-child");
                if (span) span.textContent = data.user.mana;
                animateHUD(manaHUD);
            }
            if (gemHUD) {
                const span = gemHUD.querySelector("span:last-child");
                if (span) span.textContent = data.user.gems;
                animateHUD(gemHUD);
            }
            
            // Display level complete popup modal
            const successModal = document.getElementById("success-modal");
            if (successModal) {
                // Update text details in popups
                successModal.querySelector(".modal-content div div:nth-child(3)").textContent = `🌟 Stars Earned: ${stars} / 3`;
                successModal.querySelector(".modal-content div div:nth-child(4)").textContent = `+${data.goldReward} Gold, +${data.xpReward} XP rewarded!`;
                successModal.style.display = "flex";
            }
        }
    })
    .catch(error => {
        console.error("Error saving game progress:", error);
        alert("Progress could not be saved to server database. Game will allow navigation.");
        document.getElementById("success-modal").style.display = "flex";
    });
}
