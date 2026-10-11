var Ec=Object.defineProperty;var Pc=(t,e,n)=>e in t?Ec(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var vo=(t,e,n)=>Pc(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Ac=[{id:1,worldId:"arrays-strings",title:"The First Harvest",difficulty:"easy",concepts:["Array","Indexing"],story:{scenario:"Welcome to the Grid Kingdom. The crops are stored in a linear plot. The player must access the first crop from the array and harvest it.",objective:"Access the first element of the `crops` array and store it in a variable called `firstCrop`. Print it.",controls:["array[index]"]},relics:[{name:"WHEAT",x:20},{name:"CORN",x:50},{name:"CARROT",x:80}],hints:[{text:"In Java, array indices start at 0. So the first element is crops[0].",cost:0},{text:'Use crops[0] and print it: System.out.println("Harvested: " + firstCrop);',cost:10}],starterCode:`String[] crops = {"WHEAT", "CORN", "CARROT"};

// Access the first element of the array:
String firstCrop = ""; // replace "" with correct array access

System.out.println("Harvested: " + firstCrop);
`,hazards:[{id:"thorn_wrong_crop",type:"spikes",x:40},{id:"mud_out_of_bounds",type:"poison",x:80}],validate:(t,e,n)=>{if(n.error&&n.error.includes("IndexOutOfBounds"))return{passed:!1,message:"Index must be inside array length. Warning trap triggered!",testsRun:1,testsPassed:0,commands:[{type:"TAKE_DAMAGE",amount:1}]};const i=n.logs||[];return i.some(s=>s.includes("WHEAT"))?{passed:!0,message:"✨ Harvest successful!",testsRun:1,testsPassed:1}:i.some(s=>s.includes("CORN")||s.includes("CARROT"))?{passed:!1,message:"Arrays start at index 0. Scarecrow trap activates!",testsRun:1,testsPassed:0,commands:[{type:"SPAWN_HAZARD",hazardType:"enemy",x:50},{type:"TAKE_DAMAGE",amount:1}]}:{passed:!1,message:"The output should be: Harvested: WHEAT",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to the crop field. Crops are stored like an array, starting from index zero.",objectiveHelp:"Your goal is to access the first crop using crops[0].",codeHint:"Arrays start at index zero, so the first crop is crops[0]. Store it in firstCrop.",gameplayHint:"When your code is correct, your character will walk to the wheat crop and harvest it.",errorHint:"Check your index. If you used crops[1], that means you selected the second crop, not the first.",successMessage:"Great! You harvested the first crop using array indexing."},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"sunny_farm",levelActionConfig:{requiredTool:"sickle",actionAnimation:"swing",successEffect:"harvest_particles"}},{id:2,worldId:"arrays-strings",title:"Two Sum Runes",difficulty:"medium",concepts:["Array","Two Pointers","Nested Loops"],story:{scenario:"Four rune stones are placed on platforms. To open the gates, find the pair that sums to the target.",objective:"Find two numbers in the array that add up to `target`. Print their indices like `0 2`.",controls:["Nested for loop","if statement"]},relics:[{id:"Rune_2",name:"2",emoji:"💎",x:20,y:40},{id:"Rune_7",name:"7",emoji:"💎",x:40,y:60},{id:"Rune_8",name:"8",emoji:"💎",x:60,y:40},{id:"Rune_5",name:"5",emoji:"💎",x:80,y:60}],hints:[{text:"Target is 10. We have 2 and 8 at indices 0 and 2.",cost:10}],starterCode:`int[] runes = {2, 7, 8, 5};
int target = 10;
// Your code here:
// Expected output: 0 2

`,hazards:[{type:"fire",x:30},{type:"fire",x:70}],validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("0")&&s.includes("2"))?{passed:!0,message:"✨ Portal opened!",testsRun:1,testsPassed:1}:{passed:!1,message:"Check pairs until sum equals target. Portal shock hits!",testsRun:1,testsPassed:0,commands:[{type:"TAKE_DAMAGE",amount:1}]},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"portal_chamber",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:3,worldId:"arrays-strings",title:"Sliding Window",difficulty:"medium",concepts:["Array","Sliding Window","Subarray"],story:{scenario:"Chests are placed on a mine rail. A glowing 3-slot frame slides across the chests. Find the window with the most gold.",objective:"Find the maximum sum of a contiguous subarray of size 3. Print the max sum.",controls:["for loop","Math.max"]},relics:[{id:"Gold_0",name:"Gold_0",emoji:"🪙",x:10},{id:"Gold_1",name:"Gold_1",emoji:"🪙",x:25},{id:"Gold_2",name:"Gold_2",emoji:"🪙",x:40},{id:"Gold_3",name:"Gold_3",emoji:"🪙",x:55},{id:"Gold_4",name:"Gold_4",emoji:"🪙",x:70}],hints:[{text:"Calculate the sum of the first 3 elements. Then slide the window by subtracting the first element and adding the next.",cost:10}],starterCode:`int[] chests = {1, 5, 2, 8, 3};
int k = 3;
int maxSum = 0;
// Your code here:

System.out.println("Max sum: " + maxSum);
`,hazards:[{type:"spikes",x:20},{type:"spikes",x:60}],validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("15"))?{passed:!0,message:"✨ Maximum gold window found!",testsRun:1,testsPassed:1}:{passed:!1,message:"Sliding window means continuous chests only. Mimic chest activates!",testsRun:1,testsPassed:0,commands:[{type:"SPAWN_HAZARD",hazardType:"enemy",x:40},{type:"TAKE_DAMAGE",amount:1}]},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"treasure_hall",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:4,worldId:"arrays-strings",title:"Mirror Shield Palindrome",difficulty:"easy",concepts:["String","Palindrome"],story:{scenario:"A magic beam attacks! The mirror shield reflects magic only if the spell is a palindrome.",objective:"Check if the string `spell` is a palindrome. Print 'YES' or 'NO'.",controls:["String.length()","charAt()","for loop"]},relics:[{name:"R",emoji:"🔤",x:10,y:30},{name:"A",emoji:"🔤",x:25,y:45},{name:"D",emoji:"🔤",x:40,y:60},{name:"A",emoji:"🔤",x:55,y:45},{name:"R",emoji:"🔤",x:70,y:30}],hints:[{text:"Compare characters from the beginning and the end of the string.",cost:0},{text:"Use spell.charAt(i) to check individual letters.",cost:10}],starterCode:`String spell = "RADAR";
// Your code here:

`,validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("YES"))?{passed:!0,message:"✨ Shield activated!",testsRun:1,testsPassed:1}:{passed:!1,message:"RADAR is a palindrome. Print YES.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"mirror_hall",levelActionConfig:{requiredTool:"sword",actionAnimation:"swing",successEffect:"slash"}},{id:5,worldId:"arrays-strings",title:"Anagram Runes",difficulty:"medium",concepts:["String","Anagram","Sorting"],story:{scenario:"Two rune towers show LISTEN and SILENT. Prove they are anagrams to unlock the spell door.",objective:"Check if `s1` and `s2` are anagrams. Print 'TRUE' or 'FALSE'.",controls:["Arrays.sort()","equals()","char[]"]},relics:[{name:"LISTEN",emoji:"📜",x:25,y:50},{name:"SILENT",emoji:"📜",x:65,y:35}],hints:[{text:"Convert strings to char arrays, sort them, and check if they are equal.",cost:10}],starterCode:`String s1 = "LISTEN";
String s2 = "SILENT";
// Your code here:

`,hazards:[{type:"poison",x:45}],validate:(t,e,n)=>(n.logs||[]).some(s=>s.toUpperCase().includes("TRUE"))?{passed:!0,message:"✨ The scripts match!",testsRun:1,testsPassed:1}:{passed:!1,message:"Anagrams must have the same letters with the same frequency. Cursed rune flashes!",testsRun:1,testsPassed:0,commands:[{type:"TAKE_DAMAGE",amount:1}]},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"rune_archive",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:6,worldId:"arrays-strings",title:"Purging the Duplicates",difficulty:"medium",concepts:["Array","Duplicates","HashSet"],story:{scenario:"The royal ledger archive has duplicate tiles. Clear the duplicates so the unique tiles become stepping stones.",objective:"Print the unique values from the `ledger` array. (Order does not matter).",controls:["HashSet","for loop"]},relics:[{name:"1",emoji:"📄",x:20,y:60},{name:"2",emoji:"📄",x:40,y:50},{name:"2",emoji:"📄",x:60,y:40},{name:"3",emoji:"📄",x:80,y:30}],hints:[{text:"A HashSet automatically removes duplicates.",cost:0},{text:"Add all elements to a HashSet and print them.",cost:10}],starterCode:`int[] ledger = {1, 2, 2, 3, 4, 4, 5};
// Your code here:

`,validate:(t,e,n)=>{const s=(n.logs||[]).join(" ");return s.includes("1")&&s.includes("2")&&s.includes("3")&&s.includes("4")&&s.includes("5")?{passed:!0,message:"✨ Ledger cleaned!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print the unique values: 1 2 3 4 5",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"royal_ledger",levelActionConfig:{requiredTool:"sword",actionAnimation:"swing",successEffect:"slash"}},{id:7,worldId:"arrays-strings",title:"The Heaviest Stone",difficulty:"easy",concepts:["Array","Max","Comparison"],story:{scenario:"Find the heaviest stone in the quarry to build the castle wall.",objective:"Find the maximum value in the `stones` array and print it.",controls:["for loop","if statement"]},relics:[{id:"Boulder_15",name:"15",emoji:"🪨",x:20,y:50},{id:"Boulder_42",name:"42",emoji:"🪨",x:50,y:30},{id:"Boulder_7",name:"7",emoji:"🪨",x:80,y:60}],hints:[{text:"Initialize max to the first element, then compare each subsequent element.",cost:0},{text:"if (stones[i] > max) max = stones[i];",cost:10}],starterCode:`int[] stones = {15, 42, 7, 25};
int maxStone = stones[0];
// Your code here:

System.out.println("Heaviest: " + maxStone);
`,hazards:[{type:"spikes",x:30},{type:"spikes",x:70}],validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("42"))?{passed:!0,message:"✨ You found the heaviest stone!",testsRun:1,testsPassed:1}:{passed:!1,message:"Compare every value before choosing max. Falling rocks hazard damages player!",testsRun:1,testsPassed:0,commands:[{type:"SPAWN_HAZARD",hazardType:"fire",x:50},{type:"TAKE_DAMAGE",amount:1}]},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"quarry",levelActionConfig:{requiredTool:"hammer",actionAnimation:"swing",successEffect:"harvest_particles"}},{id:8,worldId:"arrays-strings",title:"Reversing the Row",difficulty:"medium",concepts:["Array","Reverse","In-place"],story:{scenario:"The garden was planted backwards! Reverse the array of flowers.",objective:"Print the elements of the `flowers` array in reverse order.",controls:["for loop","array.length"]},relics:[{name:"ROSE",emoji:"🌹",x:20},{name:"LILY",emoji:"🪷",x:50},{name:"TULIP",emoji:"🌷",x:80}],hints:[{text:"Loop through the array starting from the last index down to 0.",cost:0}],starterCode:`String[] flowers = {"ROSE", "LILY", "TULIP"};
// Your code here:

`,hazards:[{type:"poison",x:35},{type:"poison",x:65}],validate:(t,e,n)=>{const s=(n.logs||[]).join(" ");return s.includes("TULIP")&&s.indexOf("TULIP")<s.indexOf("ROSE")?{passed:!0,message:"✨ Garden sorted!",testsRun:1,testsPassed:1}:{passed:!1,message:"Swap first and last using two pointers. Bee swarm attacks!",testsRun:1,testsPassed:0,commands:[{type:"SPAWN_HAZARD",hazardType:"enemy",x:50},{type:"TAKE_DAMAGE",amount:1}]}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"garden",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:9,worldId:"arrays-strings",title:"The Missing Number",difficulty:"medium",concepts:["Array","Math"],story:{scenario:"A magical artifact is missing from the sequence.",objective:"Find the missing number in the array containing 1 to 5.",controls:["for loop","Sum formula"]},relics:[{id:"Artifact_1",name:"1",emoji:"🪨",x:20,y:40},{id:"Artifact_2",name:"2",emoji:"🪨",x:50,y:40}],hints:[{text:"Calculate the expected sum using n*(n+1)/2 and subtract the actual sum.",cost:0}],starterCode:`int[] arr = {1, 2, 4, 5};
// Your code here:

`,validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("3"))?{passed:!0,message:"✨ Found the missing artifact!",testsRun:1,testsPassed:1}:{passed:!1,message:"The missing number is 3.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"quarry",levelActionConfig:{requiredTool:"hammer",actionAnimation:"swing",successEffect:"harvest_particles"}},{id:10,worldId:"arrays-strings",title:"The Longest Substring",difficulty:"hard",concepts:["String","Sliding Window","HashSet"],story:{scenario:"Find the longest sequence of unique magical symbols in the inscription.",objective:"Find the length of the longest substring without repeating characters in `str`. Print the length.",controls:["HashSet","for loop","Math.max"]},relics:[{name:"A",emoji:"🔮",x:20,y:50},{name:"B",emoji:"🔮",x:40,y:35},{name:"C",emoji:"🔮",x:60,y:50},{name:"A",emoji:"🔮",x:80,y:35}],hints:[{text:"Use a sliding window. Expand the right side, and if you see a duplicate, shrink from the left.",cost:15}],starterCode:`String str = "abcabcbb";
int maxLength = 0;
// Your code here:

System.out.println("Max length: " + maxLength);
`,validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("3"))?{passed:!0,message:"✨ You found the longest sequence! (abc)",testsRun:1,testsPassed:1}:{passed:!1,message:'The longest substring is "abc" with length 3.',testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"enchanted_cave",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}}],Cc=[{id:1,worldId:"stacks-queues",title:"The Relic Vault",difficulty:"easy",concepts:["Stack","Push","LIFO"],story:{scenario:"Ancient magic in this golden castle requires you to secure the sacred jewels using the Stack Tower.",objective:"Collect the Ruby, Emerald, and Sapphire relics and store them in the stack. The Golden Vault Door will open only if the most recently stored relic is Sapphire.",controls:["push(item)","pop()","peek()"]},relics:[{name:"Ruby",emoji:"♦️",x:20},{name:"Emerald",emoji:"❇️",x:45},{name:"Sapphire",emoji:"💎",x:70}],hints:[{text:"Try pushing the relics into the stack in any order.",cost:0},{text:"Remember: Last In, First Out! The last item you push will be on top.",cost:10}],starterCode:`// Use stack.push(item) to add relics to the Stack Tower
// Available relics: "Ruby", "Emerald", "Sapphire"
// Make sure "Sapphire" is pushed last so it sits on top!

// Write your code here:

`,validate:(t,e,n)=>{const i=t.getItems();return!i.includes("Ruby")||!i.includes("Emerald")||!i.includes("Sapphire")?{passed:!1,message:"Push all 3 relics!",testsRun:1,testsPassed:0}:t.peek()!=="Sapphire"?{passed:!1,message:"Sapphire must be on top! A trap was triggered!",testsRun:2,testsPassed:1,commands:[{type:"SPAWN_HAZARD",hazardType:"spikes",x:75},{type:"TAKE_DAMAGE",amount:1}]}:{passed:!0,message:"✨ The vault door opens!",testsRun:2,testsPassed:2}},guideText:`Use push() to store relics.
Last In, First Out!`,sceneType:"temple",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:2,worldId:"stacks-queues",title:"The Reverse Spell",difficulty:"easy",concepts:["Stack","Push","Pop","Reversal"],story:{scenario:"A magical inscription reads backwards. Use the stack to reverse the word and break the spell.",objective:"Push each letter of 'HELLO' onto the stack, then pop all letters to spell 'OLLEH'.",controls:["push(item)","pop()","peek()","isEmpty()"]},relics:[{id:"H_1",name:"H",emoji:"🪨",x:10},{id:"E_1",name:"E",emoji:"🪨",x:30},{id:"L_1",name:"L",emoji:"🪨",x:50},{id:"L_2",name:"L",emoji:"🪨",x:70},{id:"O_1",name:"O",emoji:"🪨",x:90}],hints:[{text:'Iterate over the word "HELLO". Push each char to the stack. Then pop them all to get the reversed string.',cost:10}],starterCode:`const word = "HELLO";
let reversed = "";

// 1. Push each character of "HELLO" into the stack:
// Write your code here:


// 2. Pop all characters from the stack into 'reversed':
// Write your code here:


console.log("Reversed: ", reversed);
`,validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("OLLEH"))?{passed:!0,message:"✨ Spell broken!",testsRun:1,testsPassed:1}:{passed:!1,message:"The reversed word should be exactly OLLEH.",testsRun:1,testsPassed:0},guideText:`Push chars one by one,
then pop to reverse!`,sceneType:"library",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:3,worldId:"stacks-queues",title:"Balanced Runes",difficulty:"medium",concepts:["Stack","Matching","Brackets"],story:{scenario:"Ancient runes on the wall must be balanced to open the passage.",objective:"Check if the bracket string '({[]})' is balanced using a stack. Print 'BALANCED'.",controls:["push(item)","pop()","peek()","isEmpty()"]},relics:[{id:"bracket_1",name:"(",emoji:"☀️",x:10},{id:"bracket_2",name:"{",emoji:"☀️",x:25},{id:"bracket_3",name:"[",emoji:"☀️",x:40},{id:"bracket_4",name:"]",emoji:"🌙",x:55},{id:"bracket_5",name:"}",emoji:"🌙",x:70},{id:"bracket_6",name:")",emoji:"🌙",x:85}],hints:[{text:"For each opening bracket, push it. For each closing bracket, pop and check if it matches.",cost:15}],starterCode:`const brackets = "({[]})";
const matchMap = { ')': '(', '}': '{', ']': '[' };

// Write your code here:
// Loop through each character in 'brackets'.
// If it is an opening bracket ( ( { [ ), push it onto the stack.
// If it is a closing bracket ( ) } ] ), pop from the stack and check if it matches.


if (stack.isEmpty()) console.log("BALANCED");
else console.log("UNBALANCED");
`,validate:(t,e,n)=>(n.logs||[]).some(s=>s.includes("BALANCED")&&!s.includes("UNBALANCED"))?{passed:!0,message:"✨ Passage opens!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print BALANCED for valid brackets.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"dungeon_scale",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:4,worldId:"stacks-queues",title:"The Undo Potion",difficulty:"medium",concepts:["Stack","Undo"],story:{scenario:"The alchemist's potion recipe requires precise steps. Undo mistakes using pop.",objective:"Push Water, Herb, Poison. Undo the Poison (pop it), then add Honey. The final stack should have [Water, Herb, Honey].",controls:["push(item)","pop()"]},relics:[{name:"Water",emoji:"💧",x:15},{name:"Herb",emoji:"🌿",x:35},{name:"Poison",emoji:"☠️",x:60},{name:"Honey",emoji:"🍯",x:85}],hints:[{text:'Push "Water", "Herb", "Poison". Then call pop() to remove Poison. Then push "Honey".',cost:0}],starterCode:`// Brew the potion!
// Push ingredients in order: "Water", "Herb", "Poison"
// Undo the mistake (pop the Poison), then add "Honey"

// Write your code here:

`,validate:t=>{const e=t.getItems();return e.includes("Poison")?{passed:!1,message:"Poison is still in the cauldron! It exploded!",testsRun:1,testsPassed:0,commands:[{type:"SPAWN_HAZARD",hazardType:"poison",x:60},{type:"TAKE_DAMAGE",amount:2}]}:e.includes("Herb")?e.includes("Water")?t.peek()==="Honey"?{passed:!0,message:"✨ Perfect potion!",testsRun:3,testsPassed:3}:{passed:!1,message:"Stack should have [Water, Herb, Honey] with Honey on top.",testsRun:3,testsPassed:2}:{passed:!1,message:"You forgot the Water!",testsRun:2,testsPassed:1}:{passed:!1,message:"You forgot the Herb!",testsRun:2,testsPassed:1}},guideText:`Pour ingredients, undo with pop(),
then pour the right one!`,sceneType:"laboratory",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:5,worldId:"stacks-queues",title:"The Twin Stack Bridge",difficulty:"medium",concepts:["Stack","Queue"],story:{scenario:"To cross the bridge, you need a queue — but you only have two stacks!",objective:"Enqueue 1, 2, 3 using two stacks (stack and stack2). Then dequeue and print them in FIFO order: 1, 2, 3.",controls:["push(item)","pop()"]},relics:[{name:"1",emoji:"🪵",x:20},{name:"2",emoji:"🪵",x:50},{name:"3",emoji:"🪵",x:80}],hints:[{text:"Push 1, 2, 3 onto stack. Then transfer all to stack2 by popping from stack and pushing to stack2. Then pop from stack2 to get FIFO order.",cost:10}],starterCode:`// Simulate a Queue using two Stacks!
// Enqueue: push items onto stack
stack.push("1");
stack.push("2");
stack.push("3");

// Dequeue: transfer to stack2, then pop from stack2 for FIFO order
// Write your code here:


// Print each dequeued item:

`,validate:(t,e,n)=>{const s=(n.logs||[]).join(" "),a=s.includes("1"),r=s.includes("2"),f=s.includes("3");if(a&&r&&f){const c=s.indexOf("1"),o=s.indexOf("2"),l=s.indexOf("3");if(c<o&&o<l)return{passed:!0,message:"✨ Bridge built!",testsRun:1,testsPassed:1}}return{passed:!1,message:"Print items in FIFO order: 1, 2, 3",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"chasm",levelActionConfig:{requiredTool:"hammer",actionAnimation:"swing",successEffect:"magic_sparkles"}},{id:6,worldId:"stacks-queues",title:"The Palindrome Gate",difficulty:"medium",concepts:["Stack","Palindrome"],story:{scenario:"The gate will only open for palindromic words.",objective:"Check if 'RACECAR' is a palindrome using the stack. Print 'PALINDROME' if it is.",controls:["push(item)","pop()"]},relics:[{name:"R",emoji:"🛡️",x:10},{name:"A",emoji:"🛡️",x:22},{name:"C",emoji:"🛡️",x:34},{name:"E",emoji:"🛡️",x:46},{name:"C",emoji:"🛡️",x:58},{name:"A",emoji:"🛡️",x:70},{name:"R",emoji:"🛡️",x:82}],hints:[{text:'Push all chars of "RACECAR", pop all to get reversed, compare strings.',cost:10}],starterCode:`const word = "RACECAR";

// 1. Push all characters of "RACECAR" into the stack:
// Write your code here:


let reversed = "";
// 2. Pop all characters from the stack into 'reversed':
// Write your code here:


// 3. Compare and print result:
// Write your code here:

`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.toUpperCase().includes("PALINDROME"))?{passed:!0,message:"✨ Gate opens!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print PALINDROME if the word matches its reverse.",testsRun:1,testsPassed:0},guideText:`Reverse with stack,
compare with original!`,sceneType:"castle_gate",levelActionConfig:{requiredTool:"hammer",actionAnimation:"swing",successEffect:"magic_sparkles"}},{id:7,worldId:"stacks-queues",title:"The Expression Altar",difficulty:"hard",concepts:["Stack","Postfix"],story:{scenario:"The altar requires you to evaluate a sacred expression written in postfix notation.",objective:"Evaluate the postfix expression '3 4 + 2 *' = 14. Print the result.",controls:["push(item)","pop()"]},relics:[{name:"3",emoji:"💀",x:15},{name:"4",emoji:"💀",x:30},{name:"+",emoji:"➕",x:45},{name:"2",emoji:"💀",x:60},{name:"*",emoji:"✖️",x:80}],hints:[{text:"For numbers: push. For operators: pop two operands, compute, push result.",cost:10}],starterCode:`const expression = ["3", "4", "+", "2", "*"];

// Evaluate the postfix expression:
// Write your code here:
// For each token:
//   If it is a number, push it onto the stack.
//   If it is an operator (+, -, *, /):
//     Pop two operands, compute the result, push it back.

// Print the final result:

`,validate:(t,e,n)=>(n.logs||[]).some(s=>/\b14\b/.test(s))?{passed:!0,message:"✨ Altar activated!",testsRun:1,testsPassed:1}:{passed:!1,message:"The postfix expression 3 4 + 2 * should evaluate to 14.",testsRun:1,testsPassed:0},guideText:`Push numbers, pop and
compute for operators.`,sceneType:"ritual_temple",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:8,worldId:"stacks-queues",title:"Next Greater Element",difficulty:"hard",concepts:["Monotonic Stack"],story:{scenario:"The towering golems only yield to someone taller than them to their right.",objective:"For array [4, 1, 2, 5], find the next greater element for each. Print the result array [5, 2, 5, -1].",controls:["Monotonic Stack"]},relics:[{name:"4",emoji:"🪨",x:20},{name:"1",emoji:"🪨",x:40},{name:"2",emoji:"🪨",x:60},{name:"5",emoji:"🪨",x:80}],hints:[{text:"Iterate backwards. Maintain a stack of elements. Pop smaller elements. The top of the stack is the next greater element.",cost:15}],starterCode:`const arr = [4, 1, 2, 5];
const result = new Array(arr.length).fill(-1);

// Find the Next Greater Element for each position:
// Write your code here:
// Hint: Iterate from right to left.
// For each element, pop smaller elements from the stack.
// If the stack is not empty, the top is the next greater element.
// Push the current element onto the stack.


console.log(result);
`,validate:(t,e,n)=>(n.logs||[]).some(s=>{const a=s.replace(/\s/g,"");return a.includes("5,2,5,-1")||a.includes("[5,2,5,-1]")})?{passed:!0,message:"✨ Golems yield!",testsRun:1,testsPassed:1}:{passed:!1,message:"Result should be [5, 2, 5, -1]",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"mine",levelActionConfig:{requiredTool:"pickaxe",actionAnimation:"swing",successEffect:"magic_sparkles"}},{id:9,worldId:"stacks-queues",title:"The Min Stack",difficulty:"medium",concepts:["Stack","Minimum"],story:{scenario:"The vault requires you to always know the smallest treasure you've stored in O(1) time.",objective:"Implement a Min Stack. Push values [5, 2, 7, 1]. Print the minimum value at the end (should be 1).",controls:["Two Stacks"]},relics:[{name:"5",emoji:"📦",x:10},{name:"2",emoji:"📦",x:30},{name:"7",emoji:"📦",x:50},{name:"1",emoji:"📦",x:70}],hints:[{text:"Use stack for values, and stack2 to keep track of the minimums. Push to stack2 only if the value is <= the current min.",cost:10}],starterCode:`const values = [5, 2, 7, 1];

// Implement Min Stack:
// Use 'stack' for values, 'stack2' for tracking minimums.
// Write your code here:
// For each value:
//   Push it onto stack.
//   If stack2 is empty OR value <= stack2.peek(), push onto stack2.
//   Otherwise, push stack2.peek() again onto stack2.


// Print the minimum value:
console.log("Min is:", stack2.peek());
`,validate:(t,e,n)=>{if((n.logs||[]).some(s=>s.toLowerCase().includes("min")&&s.includes("1")))return{passed:!0,message:"✨ Vault secured!",testsRun:1,testsPassed:1};if(n.stack2&&n.stack2.peek&&n.stack2.peek()!==void 0){const s=String(n.stack2.peek());if(s==="1"||s.endsWith("_1"))return{passed:!0,message:"✨ Vault secured!",testsRun:1,testsPassed:1}}return{passed:!1,message:"The minimum value should be 1.",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"treasure_vault",levelActionConfig:{requiredTool:"key",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:10,worldId:"stacks-queues",title:"Daily Temperatures",difficulty:"hard",concepts:["Monotonic Stack"],story:{scenario:"The climate here is chaotic. Find out how many days you must wait for a warmer temperature.",objective:"For temps [73, 74, 75, 71, 69, 72, 76, 73], print the array of wait days: [1,1,4,2,1,1,0,0].",controls:["Monotonic Stack"]},relics:[{name:"73",emoji:"🌡️",x:10},{name:"74",emoji:"🌡️",x:20},{name:"75",emoji:"🌡️",x:30},{name:"71",emoji:"🌡️",x:40},{name:"69",emoji:"🌡️",x:50},{name:"72",emoji:"🌡️",x:60},{name:"76",emoji:"❄️",x:70},{name:"73",emoji:"🌡️",x:80}],hints:[{text:"Store indices in the stack. If current temp > temps[stack.peek()], pop and calculate the index difference.",cost:20}],starterCode:`const temps = [73, 74, 75, 71, 69, 72, 76, 73];
const wait = new Array(temps.length).fill(0);

// Find how many days until a warmer temperature:
// Write your code here:
// Use the stack to store indices.
// For each day, while the stack is not empty AND
// the current temp > temps[stack.peek()]:
//   Pop the index and set wait[poppedIndex] = currentIndex - poppedIndex.
// Push the current index onto the stack.


console.log(wait);
`,validate:(t,e,n)=>(n.logs||[]).some(s=>{const a=s.replace(/\s/g,"");return a.includes("1,1,4,2,1,1,0,0")||a.includes("[1,1,4,2,1,1,0,0]")})?{passed:!0,message:"✨ Weather predicted!",testsRun:1,testsPassed:1}:{passed:!1,message:"Output should be [1,1,4,2,1,1,0,0]",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"snowy_peak",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}}],wc=[{id:1,worldId:"linked-lists",title:"Create a Chain",difficulty:"easy",concepts:["Linked List","Node","Pointer"],story:{scenario:"In the desert, each ruin points to the next. Create your first chain of nodes.",objective:"Create 3 nodes with values 1 → 2 → 3. Traverse and print each value.",controls:["{ val, next }","while loop"]},relics:[{name:"1",emoji:"1️⃣",x:20},{name:"2",emoji:"2️⃣",x:50},{name:"3",emoji:"3️⃣",x:80}],hints:[{text:"Create node objects: { val: 1, next: null }. Link them with n1.next = n2.",cost:0},{text:"let head={val:1,next:{val:2,next:{val:3,next:null}}}; let c=head; while(c){console.log(c.val);c=c.next;}",cost:15}],starterCode:`// Create a linked list: 1 → 2 → 3
// Each node: { val: value, next: pointer }
const head = { val: 1, next: null };

// Link the nodes:

// Traverse and print:
let current = head;
while (current) {
  console.log(current.val);
  current = current.next;
}
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=3&&s[0]===1&&s[1]===2&&s[2]===3?{passed:!0,message:"✨ Chain forged! 1 → 2 → 3!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print 1, 2, 3 in order by traversing the list!",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"desert_ruins",levelActionConfig:{requiredTool:"hammer",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:2,worldId:"linked-lists",title:"Count the Links",difficulty:"easy",concepts:["Linked List","Traversal","Count"],story:{scenario:"Count every ruin in the chain to know its total length.",objective:"Given a linked list, count the number of nodes. Print the count.",controls:["while loop","counter"]},relics:[{name:"A",emoji:"🏛️",x:20},{name:"B",emoji:"🏛️",x:40},{name:"C",emoji:"🏛️",x:60},{name:"D",emoji:"🏛️",x:80}],hints:[{text:"Traverse the list, incrementing a counter for each node.",cost:0}],starterCode:`const head = { val: 'A', next: { val: 'B', next: { val: 'C', next: { val: 'D', next: null } } } };
let count = 0;
// Your code here:

console.log("Length:", count);
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("4"))?{passed:!0,message:"✨ 4 ruins counted!",testsRun:1,testsPassed:1}:{passed:!1,message:"The list has 4 nodes!",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"ruin_counting",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:3,worldId:"linked-lists",title:"Search the Sands",difficulty:"easy",concepts:["Linked List","Search"],story:{scenario:"An ancient artifact is hidden in one of the ruins. Search for 'RUBY' in the chain.",objective:"Traverse the list and check if 'RUBY' exists. Print 'FOUND' or 'NOT FOUND'.",controls:["while loop","comparison"]},relics:[{name:"EMERALD",emoji:"💚",x:20},{name:"RUBY",emoji:"❤️",x:50},{name:"TOPAZ",emoji:"💛",x:80}],hints:[{text:"Loop through, compare each val to 'RUBY'.",cost:0}],starterCode:`const head = { val: 'EMERALD', next: { val: 'RUBY', next: { val: 'TOPAZ', next: null } } };
// Search for "RUBY":

`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("FOUND")&&!i.includes("NOT"))?{passed:!0,message:"✨ RUBY discovered!",testsRun:1,testsPassed:1}:{passed:!1,message:"RUBY exists in the list. Print FOUND.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"desert_oasis",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:4,worldId:"linked-lists",title:"Append to the End",difficulty:"easy",concepts:["Linked List","Append"],story:{scenario:"A new ruin has been discovered! Append it to the end of the chain.",objective:"Given a list 10 → 20, append a node with value 30 at the end. Print all values.",controls:["traversal","node creation"]},relics:[{name:"10",emoji:"🏛️",x:20},{name:"20",emoji:"🏛️",x:50},{name:"30",emoji:"🆕",x:80}],hints:[{text:"Traverse to the last node (where next is null), then set its next to the new node.",cost:0}],starterCode:`const head = { val: 10, next: { val: 20, next: null } };
const newNode = { val: 30, next: null };
// Append newNode to the end:

// Print all:
let c = head;
while (c) { console.log(c.val); c = c.next; }
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=3&&s[2]===30?{passed:!0,message:"✨ New ruin appended!",testsRun:1,testsPassed:1}:{passed:!1,message:"The list should be 10 → 20 → 30.",testsRun:1,testsPassed:0}},guideText:`Find the tail node,
then link the new one!`,sceneType:"desert_ruins",levelActionConfig:{requiredTool:"hammer",actionAnimation:"swing",successEffect:"magic_sparkles"}},{id:5,worldId:"linked-lists",title:"Delete the Cursed Node",difficulty:"medium",concepts:["Linked List","Deletion"],story:{scenario:"One of the ruins is cursed! Remove the node with value 'CURSED' from the chain.",objective:"Delete the node containing 'CURSED' from the list. Print the remaining nodes.",controls:["previous pointer","relinking"]},relics:[{name:"SAFE",emoji:"✅",x:20},{name:"CURSED",emoji:"☠️",x:50},{name:"SAFE",emoji:"✅",x:80}],hints:[{text:"Keep track of the previous node. When you find 'CURSED', set prev.next = current.next.",cost:10}],starterCode:`let head = { val: 'ALPHA', next: { val: 'CURSED', next: { val: 'OMEGA', next: null } } };
// Delete the node with val "CURSED":

// Print remaining:
let c = head;
while (c) { console.log(c.val); c = c.next; }
`,validate:(t,e,n)=>{const i=n.logs||[];return i.some(s=>s.includes("ALPHA"))&&i.some(s=>s.includes("OMEGA"))&&!i.some(s=>s.includes("CURSED"))?{passed:!0,message:"✨ Curse removed!",testsRun:1,testsPassed:1}:{passed:!1,message:"Remove CURSED. Print ALPHA and OMEGA.",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"cursed_ruins",levelActionConfig:{requiredTool:"sword",actionAnimation:"swing",successEffect:"slash"}},{id:6,worldId:"linked-lists",title:"Reverse the Chain",difficulty:"medium",concepts:["Linked List","Reversal"],story:{scenario:"The chain must be reversed to decode the hidden message.",objective:"Reverse the linked list 1 → 2 → 3 to become 3 → 2 → 1. Print the reversed list.",controls:["prev, current, next pointers"]},relics:[{name:"1",emoji:"🔗",x:20},{name:"2",emoji:"🔗",x:50},{name:"3",emoji:"🔗",x:80}],hints:[{text:"Use three pointers: prev=null, current=head, next. Flip current.next to prev each step.",cost:15}],starterCode:`let head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
// Reverse the list:
let prev = null;
let current = head;
// Your code here:

// Print reversed:
let c = prev; // prev becomes the new head
while (c) { console.log(c.val); c = c.next; }
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=3&&s[0]===3&&s[1]===2&&s[2]===1?{passed:!0,message:"✨ Chain reversed!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print 3, 2, 1 in order.",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"mystic_ruins",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:7,worldId:"linked-lists",title:"The Middle Ruin",difficulty:"medium",concepts:["Linked List","Fast-Slow"],story:{scenario:"Find the exact middle ruin in the chain using the slow-fast pointer technique.",objective:"Find the middle node of 1→2→3→4→5. Print the middle value (3).",controls:["slow pointer","fast pointer"]},relics:[{name:"1",emoji:"🏛️",x:10},{name:"3",emoji:"📍",x:50},{name:"5",emoji:"🏛️",x:90}],hints:[{text:"slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at middle.",cost:10}],starterCode:`let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let slow = head;
let fast = head;
// Your code here:

console.log("Middle:", slow.val);
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("3"))?{passed:!0,message:"✨ Middle found!",testsRun:1,testsPassed:1}:{passed:!1,message:"The middle of 1→2→3→4→5 is 3.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"mystic_ruins",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:8,worldId:"linked-lists",title:"Detect the Loop",difficulty:"hard",concepts:["Linked List","Cycle Detection"],story:{scenario:"A deadly loop traps travelers forever. Detect if the chain has a cycle.",objective:"Use Floyd's algorithm (slow/fast pointers). Print 'CYCLE' or 'NO CYCLE'.",controls:["Floyd's Algorithm"]},relics:[{name:"START",emoji:"🟢",x:20},{name:"LOOP",emoji:"🔄",x:60}],hints:[{text:"If slow and fast ever meet (point to same node), there's a cycle.",cost:15}],starterCode:`// Create a list with a cycle: 1→2→3→4→(back to 2)
let n1 = { val: 1, next: null };
let n2 = { val: 2, next: null };
let n3 = { val: 3, next: null };
let n4 = { val: 4, next: null };
n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2; // cycle!

let slow = n1, fast = n1;
let hasCycle = false;
// Your code here:

console.log(hasCycle ? "CYCLE" : "NO CYCLE");
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("CYCLE")&&!i.includes("NO"))?{passed:!0,message:"✨ Cycle detected!",testsRun:1,testsPassed:1}:{passed:!1,message:"This list HAS a cycle. Print CYCLE.",testsRun:1,testsPassed:0},guideText:`If slow meets fast,
there is a cycle!`,sceneType:"deadly_loop",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:9,worldId:"linked-lists",title:"Merge Two Chains",difficulty:"hard",concepts:["Linked List","Merge"],story:{scenario:"Two sorted chains must merge into one sorted chain.",objective:"Merge two sorted lists (1→3→5) and (2→4→6) into one sorted list. Print all values.",controls:["comparison","pointer manipulation"]},relics:[{name:"1",emoji:"🔗",x:10},{name:"3",emoji:"🔗",x:30},{name:"6",emoji:"🔗",x:90}],hints:[{text:"Compare heads of both lists. Take the smaller one and advance that pointer.",cost:15}],starterCode:`let l1 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };
let l2 = { val: 2, next: { val: 4, next: { val: 6, next: null } } };
// Merge into sorted list:
let dummy = { val: 0, next: null };
let tail = dummy;
// Your code here:

// Print merged:
let c = dummy.next;
while (c) { console.log(c.val); c = c.next; }
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=6&&s[0]===1&&s[1]===2&&s[5]===6?{passed:!0,message:"✨ Chains merged!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print 1 2 3 4 5 6 in sorted order.",testsRun:1,testsPassed:0}},guideText:`Compare heads,
take the smaller one!`,sceneType:"mystic_ruins",levelActionConfig:{requiredTool:"hammer",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:10,worldId:"linked-lists",title:"Nth From the End",difficulty:"medium",concepts:["Linked List","Two Pointers"],story:{scenario:"Find the treasure buried N steps from the end of the chain.",objective:"Find the 2nd node from the end of list 10→20→30→40→50. Print its value (40).",controls:["two pointers","offset"]},relics:[{name:"10",emoji:"🏛️",x:10},{name:"40",emoji:"💰",x:70},{name:"50",emoji:"🏛️",x:90}],hints:[{text:"Move the fast pointer N steps ahead first. Then move both. When fast reaches end, slow is at the answer.",cost:10}],starterCode:`let head = { val: 10, next: { val: 20, next: { val: 30, next: { val: 40, next: { val: 50, next: null } } } } };
const n = 2; // 2nd from the end
let slow = head, fast = head;
// Move fast n steps ahead:

// Move both until fast reaches end:

console.log("Nth from end:", slow.val);
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("40"))?{passed:!0,message:"✨ Treasure found at node 40!",testsRun:1,testsPassed:1}:{passed:!1,message:"The 2nd from end is 40.",testsRun:1,testsPassed:0},guide:{intro:"Welcome to this challenge! Listen carefully to the instructions.",objectiveHelp:"Your goal is to solve the problem described in the instructions.",codeHint:"Check the hints panel if you need more help with the code.",gameplayHint:"Remember to watch the character animation for clues.",errorHint:"Your code has an error or didn't produce the correct result. Check the console.",successMessage:"Excellent work! You solved it!"},sceneType:"desert_oasis",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}}],Bc=[{id:1,worldId:"trees-graphs",title:"Count the Leaves",difficulty:"easy",concepts:["Binary Tree","Leaf Nodes"],story:{scenario:"Count the number of leaf nodes (nodes with no children) in the forest.",objective:"Count all leaf nodes in the tree and print the count.",controls:["Recursion"]},relics:[{name:"LEAF",emoji:"🍃",x:20},{name:"LEAF",emoji:"🍃",x:50},{name:"LEAF",emoji:"🍃",x:80}],hints:[{text:"A leaf has no left and no right child. Count recursively.",cost:0}],starterCode:`const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } },
  right: { val: 3, left: null, right: { val: 6, left: null, right: null } }
};

function countLeaves(node) {
  if (!node) return 0;
  // Your code here:

}
console.log("Leaves:", countLeaves(root));
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("3"))?{passed:!0,message:"✨ 3 leaves counted!",testsRun:1,testsPassed:1}:{passed:!1,message:"There are 3 leaf nodes (4, 5, 6).",testsRun:1,testsPassed:0},guide:{intro:"Welcome to the autumn forest. The wind is blowing hard!",objectiveHelp:"Your task is to count every single leaf node in this tree.",codeHint:"A leaf node is a node with no left or right children. Use recursion!",gameplayHint:"Watch the golden leaves fall as you count them.",errorHint:"Your count is off. Make sure you only count nodes where both left and right are null.",successMessage:"Perfect! You've counted all the leaves before they blew away!"},sceneType:"autumn_leaf_fall",levelActionConfig:{requiredTool:"sickle",actionAnimation:"swing",successEffect:"harvest_particles"}},{id:2,worldId:"trees-graphs",title:"Shortest Path",difficulty:"hard",concepts:["Graph","BFS","Shortest Path"],story:{scenario:"Find the shortest path through the enchanted maze from START to END.",objective:"Use BFS to find the shortest path from 'S' to 'E'. Print the distance.",controls:["BFS","Distance Map"]},relics:[{name:"S",emoji:"🟢",x:20},{name:"E",emoji:"🏁",x:80}],hints:[{text:"BFS naturally finds shortest paths in unweighted graphs. Track distance for each node.",cost:15}],starterCode:`const graph = {
  'S': ['A', 'B'],
  'A': ['S', 'C'],
  'B': ['S', 'C', 'E'],
  'C': ['A', 'B', 'E'],
  'E': ['B', 'C']
};
const dist = { 'S': 0 };
const queue = ['S'];
// BFS to find shortest distance to 'E':

console.log("Shortest distance:", dist['E']);
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("2"))?{passed:!0,message:"✨ Shortest path found!",testsRun:1,testsPassed:1}:{passed:!1,message:"Shortest path S→B→E = 2.",testsRun:1,testsPassed:0},guide:{intro:"You are trapped in the Enchanted Hedge Maze! You must find the quickest way out.",objectiveHelp:"Find the shortest path from 'S' (Start) to 'E' (End).",codeHint:"Breadth-First Search (BFS) is perfect for finding the shortest path in unweighted graphs.",gameplayHint:"Follow the floating fairy dust to see the shortest route.",errorHint:"That's not the shortest path. Are you keeping track of distances correctly?",successMessage:"You escaped the maze in record time!"},sceneType:"enchanted_hedge_maze",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:3,worldId:"trees-graphs",title:"Graph Explorer",difficulty:"medium",concepts:["Graph","BFS","Adjacency List"],story:{scenario:"The forest paths form a graph. Explore all reachable clearings from the start.",objective:"Given an adjacency list, perform BFS from node 0. Print all visited nodes.",controls:["Queue","Visited Set"]},relics:[{name:"0",emoji:"🟢",x:20},{name:"3",emoji:"🏁",x:80}],hints:[{text:"Use a queue and a visited set. Enqueue start, then process neighbors.",cost:10}],starterCode:`const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1]
};
const visited = {};
const queue = [0];
visited[0] = true;
// BFS:

`,validate:(t,e,n)=>{const i=n.logs||[];return i.some(s=>s.includes("0"))&&i.some(s=>s.includes("3"))?{passed:!0,message:"✨ All clearings explored!",testsRun:1,testsPassed:1}:{passed:!1,message:"Visit all nodes: 0, 1, 2, 3.",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to the dense jungle ruins. Ancient shrines are hidden here.",objectiveHelp:"You need to explore all reachable shrines from your starting point.",codeHint:"Use a queue for BFS and keep track of visited nodes so you don't go in circles.",gameplayHint:"The mossy stone idols will light up as you discover them.",errorHint:"You missed some shrines! Make sure your queue processes every neighbor.",successMessage:"Incredible! You've mapped out the entire ruins!"},sceneType:"overgrown_ruins_graph",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:4,worldId:"trees-graphs",title:"Level Order Signal",difficulty:"medium",concepts:["Binary Tree","BFS","Queue"],story:{scenario:"Send a signal to each level of the forest, top to bottom, left to right.",objective:"Perform a level-order (BFS) traversal. Print values level by level.",controls:["Queue (array)","shift/push"]},relics:[{name:"1",emoji:"🌳",x:50},{name:"2",emoji:"🌿",x:25},{name:"3",emoji:"🌿",x:75}],hints:[{text:"Use an array as a queue. Start with root. Dequeue, print, enqueue children.",cost:10}],starterCode:`const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } },
  right: { val: 3, left: null, right: null }
};
const queue = [root];
// Your code here:

`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=5&&s[0]===1&&s[1]===2&&s[2]===3?{passed:!0,message:"✨ Signal sent level by level!",testsRun:1,testsPassed:1}:{passed:!1,message:"BFS order: 1, 2, 3, 4, 5",testsRun:1,testsPassed:0}},guide:{intro:"You've reached the Great Watchtower. We need to send a signal across the forest.",objectiveHelp:"Send the signal level by level, from the top of the tower to the bottom.",codeHint:"This requires a Level-Order Traversal (BFS). Use an array as a queue.",gameplayHint:"Watch the signal fires light up on each floor of the tower.",errorHint:"The signal order is wrong. Make sure you dequeue, print, and then enqueue children.",successMessage:"The signal has been seen across the entire forest!"},sceneType:"signal_tower_forest",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"poke",successEffect:"magic_sparkles"}},{id:5,worldId:"trees-graphs",title:"Plant the First Tree",difficulty:"easy",concepts:["Binary Tree","Node"],story:{scenario:"In the Enchanted Forest, data grows on trees. Create your first binary tree node.",objective:"Create a tree with root 1, left child 2, right child 3. Print the root value.",controls:["{ val, left, right }"]},relics:[{name:"1",emoji:"🌳",x:50},{name:"2",emoji:"🌿",x:25},{name:"3",emoji:"🌿",x:75}],hints:[{text:"A tree node has val, left, and right. Set left and right to child nodes or null.",cost:0}],starterCode:`// Create a binary tree:
//       1
//      / \\
//     2   3
const root = { val: 1, left: null, right: null };
// Add children:

console.log("Root:", root.val);
console.log("Left:", root.left?.val);
console.log("Right:", root.right?.val);
`,validate:(t,e,n)=>{const i=n.logs||[];return i.some(s=>s.includes("1"))&&i.some(s=>s.includes("2"))&&i.some(s=>s.includes("3"))?{passed:!0,message:"✨ Tree planted!",testsRun:1,testsPassed:1}:{passed:!1,message:"Print root (1), left (2), and right (3).",testsRun:1,testsPassed:0}},guide:{intro:"Welcome to the Enchanted Forest, where data grows on trees!",objectiveHelp:"You must plant the very first binary tree by creating a root and two children.",codeHint:"Create a javascript object with 'val', 'left', and 'right' properties.",gameplayHint:"Watch the magical saplings sprout as you link your nodes.",errorHint:"The tree didn't grow right. Did you link the left and right children to the root?",successMessage:"A beautiful new tree has blossomed!"},levelActionConfig:{requiredTool:"sickle",actionAnimation:"poke",successEffect:"harvest_particles"}},{id:6,worldId:"trees-graphs",title:"Mirror the Forest",difficulty:"medium",concepts:["Binary Tree","Mirror","Inversion"],story:{scenario:"The enchanted mirror flips the entire forest. Invert the binary tree.",objective:"Invert (mirror) the tree. Print an inorder traversal of the result.",controls:["Recursion","swap left/right"]},relics:[{name:"MIRROR",emoji:"🪞",x:50}],hints:[{text:"At each node, swap left and right children, then recurse.",cost:10}],starterCode:`const root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
};

function invert(node) {
  if (!node) return;
  // Swap left and right:

  // Recurse:

}
invert(root);

// Print inorder to verify (should be 3, 1, 2):
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}
inorder(root);
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=3&&s[0]===3&&s[1]===1&&s[2]===2?{passed:!0,message:"✨ Forest mirrored!",testsRun:1,testsPassed:1}:{passed:!1,message:"After inversion, inorder should be 3, 1, 2.",testsRun:1,testsPassed:0}},guide:{intro:"You stand before the Mirror Lake. Everything here is perfectly reflected.",objectiveHelp:"You must invert the binary tree so it becomes its own mirror image.",codeHint:"Swap the left and right pointers of every single node recursively.",gameplayHint:"The mirror shards will glow as the forest flips around you.",errorHint:"The reflection is broken. Make sure you are swapping left and right at every level.",successMessage:"The forest is perfectly mirrored!"},sceneType:"mirror_forest",levelActionConfig:{requiredTool:"magic_device",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:7,worldId:"trees-graphs",title:"Path Sum Quest",difficulty:"medium",concepts:["Binary Tree","Path Sum","DFS"],story:{scenario:"Find if there's a root-to-leaf path that sums to the magic number.",objective:"Check if there's a root-to-leaf path summing to 7. Print 'YES' or 'NO'.",controls:["DFS","Recursion"]},relics:[{name:"1",emoji:"🌳",x:50},{name:"3",emoji:"🍃",x:25},{name:"3",emoji:"🍃",x:75}],hints:[{text:"Subtract node val from target at each step. At leaf, check if remaining is 0.",cost:10}],starterCode:`const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: { val: 3, left: null, right: { val: 3, left: null, right: null } }
};
const target = 7;

function hasPathSum(node, remaining) {
  if (!node) return false;
  // Your code here:

}
console.log(hasPathSum(root, target) ? "YES" : "NO");
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("YES"))?{passed:!0,message:"✨ Path found! (1→2→4=7)",testsRun:1,testsPassed:1}:{passed:!1,message:"Path 1→2→4 = 7 exists. Print YES.",testsRun:1,testsPassed:0},guide:{intro:"You are deep inside the Crystal Caverns. The crystals hum with numerical energy.",objectiveHelp:"Find a path from the top of the cave to the bottom that sums exactly to the target.",codeHint:"Use DFS. Subtract the current node's value from the target as you go down.",gameplayHint:"The massive crystals will glow as you trace the correct sum.",errorHint:"That path doesn't equal the magic number. Keep searching the caves!",successMessage:"You found the magic path and unlocked the crystal's power!"},sceneType:"crystal_cave_path",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:8,worldId:"trees-graphs",title:"The Tree's Height",difficulty:"easy",concepts:["Binary Tree","Height","Recursion"],story:{scenario:"Measure the height of the Great Tree to plan the expedition.",objective:"Calculate the height (max depth) of the binary tree and print it.",controls:["Recursion","Math.max"]},relics:[{name:"ROOT",emoji:"🌳",x:50},{name:"LEAF",emoji:"🍃",x:25}],hints:[{text:"Height = 1 + max(height(left), height(right)). Base case: null returns 0.",cost:0}],starterCode:`const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: { val: 3, left: null, right: null }
};

function height(node) {
  if (!node) return 0;
  // Your code here:

}
console.log("Height:", height(root));
`,validate:(t,e,n)=>(n.logs||[]).some(i=>i.includes("3"))?{passed:!0,message:"✨ Height measured!",testsRun:1,testsPassed:1}:{passed:!1,message:"The height is 3 (root→2→4).",testsRun:1,testsPassed:0},guide:{intro:"You stand before the Great Tree, towering high into the canopy.",objectiveHelp:"Determine the height of the tree by recursively calculating its deepest branch.",codeHint:"The height is 1 plus the maximum height of the left and right subtrees.",gameplayHint:"Look up as the branches light up to show the tree's depth.",errorHint:"The measurement is inaccurate. Ensure your base case returns 0 for null nodes.",successMessage:"The Great Tree's height has been recorded!"},sceneType:"great_tree",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:9,worldId:"trees-graphs",title:"DFS Depths",difficulty:"medium",concepts:["Graph","DFS","Recursion"],story:{scenario:"Explore as deep as possible before backtracking. That is the way of DFS.",objective:"Perform DFS on the graph from node 'A'. Print visited nodes.",controls:["Recursion","Visited Set"]},relics:[{name:"A",emoji:"🟢",x:20},{name:"D",emoji:"🏁",x:80}],hints:[{text:"Mark current as visited, print it, then recurse on unvisited neighbors.",cost:10}],starterCode:`const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A'],
  'D': ['B']
};
const visited = {};

function dfs(node) {
  if (visited[node]) return;
  visited[node] = true;
  console.log(node);
  // Visit neighbors:

}
dfs('A');
`,validate:(t,e,n)=>{const i=n.logs||[];return i.some(s=>s.includes("A"))&&i.some(s=>s.includes("D"))?{passed:!0,message:"✨ Depths explored!",testsRun:1,testsPassed:1}:{passed:!1,message:"Visit all nodes: A, B, C, D.",testsRun:1,testsPassed:0}},guide:{intro:"You are peering into the terrifying Abyssal Chasm. How deep does it go?",objectiveHelp:"Plunge as deep as possible into the graph before backtracking.",codeHint:"Depth-First Search (DFS) uses recursion (or a stack) to go deep fast.",gameplayHint:"Avoid the toxic spores as you descend into the darkness.",errorHint:"You didn't go deep enough! Make sure you visit unvisited neighbors recursively.",successMessage:"You survived the depths of the abyss!"},levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}},{id:10,worldId:"trees-graphs",title:"Inorder Walk",difficulty:"easy",concepts:["Binary Tree","Inorder","Recursion"],story:{scenario:"Walk through the forest in 'inorder' — left, root, right — to read the ancient message.",objective:"Perform an inorder traversal of the tree and print the values.",controls:["Recursion","left → root → right"]},relics:[{name:"2",emoji:"🍃",x:25},{name:"1",emoji:"🌳",x:50},{name:"3",emoji:"🍃",x:75}],hints:[{text:"Inorder: visit left subtree, then print current, then visit right subtree.",cost:0}],starterCode:`const root = {
  val: 4,
  left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } },
  right: { val: 6, left: { val: 5, left: null, right: null }, right: { val: 7, left: null, right: null } }
};

function inorder(node) {
  if (!node) return;
  // Your code here:

}
inorder(root);
`,validate:(t,e,n)=>{const s=(n.logs||[]).map(a=>parseInt(a)).filter(a=>!isNaN(a));return s.length>=7&&s[0]===1&&s[3]===4&&s[6]===7?{passed:!0,message:"✨ Inorder traversal complete!",testsRun:1,testsPassed:1}:{passed:!1,message:"Inorder should print: 1 2 3 4 5 6 7",testsRun:1,testsPassed:0}},guide:{intro:"You have arrived at the ancient Grove of Whispers.",objectiveHelp:"Traverse the nodes in 'inorder' to translate the ancient message.",codeHint:"An inorder walk visits the left child, then the current node, then the right child.",gameplayHint:"The ancient stones will light up in sequence as you walk.",errorHint:"The message is garbled. Are you visiting the nodes in the correct order?",successMessage:"The full message has been revealed!"},sceneType:"ancient_message_forest",levelActionConfig:{requiredTool:"scanner",actionAnimation:"scan",successEffect:"magic_sparkles"}}],_o="codeNest_gameState",cs={player:{name:"Adventurer",selectedHeroId:"anya",gold:1250,mana:45,gems:8,xp:350,level:5,streak:3,lastPlayed:null,hintsUsed:0,maxHp:5,currentHp:5},progress:{"arrays-strings":{unlocked:!0,levels:{1:{completed:!1,stars:0},2:{completed:!1,stars:0},3:{completed:!1,stars:0},4:{completed:!1,stars:0},5:{completed:!1,stars:0},6:{completed:!1,stars:0},7:{completed:!1,stars:0},8:{completed:!1,stars:0},9:{completed:!1,stars:0},10:{completed:!1,stars:0}}},"stacks-queues":{unlocked:!0,levels:{1:{completed:!1,stars:0},2:{completed:!1,stars:0},3:{completed:!1,stars:0},4:{completed:!1,stars:0},5:{completed:!1,stars:0},6:{completed:!1,stars:0},7:{completed:!1,stars:0},8:{completed:!1,stars:0},9:{completed:!1,stars:0},10:{completed:!1,stars:0}}},"linked-lists":{unlocked:!0,levels:{1:{completed:!1,stars:0},2:{completed:!1,stars:0},3:{completed:!1,stars:0},4:{completed:!1,stars:0},5:{completed:!1,stars:0},6:{completed:!1,stars:0},7:{completed:!1,stars:0},8:{completed:!1,stars:0},9:{completed:!1,stars:0},10:{completed:!1,stars:0}}},"trees-graphs":{unlocked:!0,levels:{1:{completed:!1,stars:0},2:{completed:!1,stars:0},3:{completed:!1,stars:0},4:{completed:!1,stars:0},5:{completed:!1,stars:0},6:{completed:!1,stars:0},7:{completed:!1,stars:0},8:{completed:!1,stars:0},9:{completed:!1,stars:0},10:{completed:!1,stars:0}}}},achievements:["first_steps"],settings:{mapTheme:"night"}};class Lc{constructor(){this.state=this.load(),this.listeners=[]}load(){try{if(typeof localStorage<"u"&&typeof localStorage.getItem=="function"){const e=localStorage.getItem(_o);if(e){const n=JSON.parse(e);for(const i of Object.keys(cs.progress))n.progress[i]||(n.progress[i]=JSON.parse(JSON.stringify(cs.progress[i])));return n}}}catch(e){console.warn("Failed to load game state:",e)}return JSON.parse(JSON.stringify(cs))}setMapTheme(e){this.state.settings||(this.state.settings={mapTheme:"night"}),this.state.settings.mapTheme=e,this.save()}save(){try{typeof localStorage<"u"&&typeof localStorage.setItem=="function"&&localStorage.setItem(_o,JSON.stringify(this.state))}catch(e){console.warn("Failed to save game state:",e)}this.listeners.forEach(e=>e(this.state))}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(n=>n!==e)}}get player(){return this.state.player}get progress(){return this.state.progress}getWorldProgress(e){return this.state.progress[e]||{unlocked:!1,levels:{}}}getLevelProgress(e,n){return this.getWorldProgress(e).levels[n]||{completed:!1,stars:0}}getWorldCompletion(e){const n=this.getWorldProgress(e);if(!n.unlocked)return 0;const i=Object.values(n.levels);if(i.length===0)return 0;const s=i.filter(a=>a.completed).length;return Math.round(s/i.length*100)}getCurrentLevel(e){const n=this.getWorldProgress(e);if(!n.unlocked)return null;for(let i=1;i<=10;i++)if(!n.levels[i]||!n.levels[i].completed)return i;return 10}completeLevel(e,n,i){if(!this.state.progress[e])return;const s=this.state.progress[e].levels[n];(!s||!s.completed||i>s.stars)&&(this.state.progress[e].levels[n]={completed:!0,stars:Math.max(i,(s==null?void 0:s.stars)||0)});const a=n+1;a<=10&&!this.state.progress[e].levels[a]&&(this.state.progress[e].levels[a]={completed:!1,stars:0}),this.save()}addGold(e){this.state.player.gold+=e,this.save()}addMana(e){this.state.player.mana+=e,this.save()}addGems(e){this.state.player.gems+=e,this.save()}spendMana(e){return this.state.player.mana>=e?(this.state.player.mana-=e,this.save(),!0):!1}takeDamage(e){return this.state.player.currentHp=Math.max(0,this.state.player.currentHp-e),this.save(),this.state.player.currentHp}heal(e){return this.state.player.currentHp=Math.min(this.state.player.maxHp,this.state.player.currentHp+e),this.save(),this.state.player.currentHp}resetHp(){this.state.player.currentHp=this.state.player.maxHp,this.save()}resetState(){this.state=JSON.parse(JSON.stringify(cs)),this.save()}}const Ye=new Lc,Qt=[{id:"arrays-strings",name:"Arrays & Strings",subtitle:"The Grid Kingdom",theme:"arrays",description:"Master the fundamentals of arrays and strings in the ancient Grid Kingdom.",lore:"Long ago, the Grid Kingdom was built by the First Programmers who organized data into perfect rows. Now corrupted, only a true coder can restore order.",colors:{primary:"#2ecc71",secondary:"#27ae60"},position:{x:12,y:45},decorations:["🌾","🏡","🌲","🗺️"]},{id:"stacks-queues",name:"Stacks & Queues",subtitle:"The Cursed Vault",theme:"stacks",description:"Explore the mysterious Cursed Vault where LIFO and FIFO rule supreme.",lore:"Deep beneath the ocean lies the Cursed Vault, where ancient relics are stacked in magical order.",colors:{primary:"#3498db",secondary:"#8b5cf6"},position:{x:38,y:35},decorations:["🌊","🐚","🪸","🔮"]},{id:"linked-lists",name:"Linked Lists",subtitle:"The Desert Chains",theme:"linked",description:"Traverse the Desert Chains where nodes are linked across ancient ruins.",lore:"In the scorching Desert of Chains, each ruin points to the next. Break a link and the path is lost forever.",colors:{primary:"#f39c12",secondary:"#e67e22"},position:{x:65,y:45},decorations:["🏜️","🏛️","⛓️","🐪"]},{id:"trees-graphs",name:"Trees & Graphs",subtitle:"The Enchanted Forest",theme:"trees",description:"Navigate the Enchanted Forest where data grows on branching trees and tangled graphs.",lore:"The ancient Forest of Branches hides secrets in its roots. Master traversal to find the path to enlightenment.",colors:{primary:"#10b981",secondary:"#059669"},position:{x:85,y:30},decorations:["🌳","🌲","🍃","🦉"]}],Ic={"arrays-strings":Ac,"stacks-queues":Cc,"linked-lists":wc,"trees-graphs":Bc};function Dc(t,e){const n=Ic[t];return n&&n.find(i=>i.id===e)||null}const Rn=[{id:"anya",name:"Anya the Explorer",description:"A seasoned adventurer wearing a white shirt and red vest suspenders.",stats:{difficulty:"Medium",type:"Warrior",weapons:"Sword & Shield",damage:80,health:95,speed:50},archetype:"warrior",skinUrl:"/assets/warrior.png",outfits:["/assets/warrior.png"],abilities:["fastMining"],palette:{S:"#ffe0c2",H:"#2c3e50",W:"#ffffff",R:"#ff5252",B:"#34ace0",T:"#8b5a2b",E:"#ffffff",D:"#1e272e"},avatarStyle:{skin:"#ffe0c2",hair:"#2c3e50",shirt:"#ffffff",pants:"#34ace0",shoes:"#1e272e",design:"suspenders",eyes:"#3d7a46"}},{id:"leo",name:"Leo the Trailblazer",description:"A curious young explorer wearing a bright green hoodie.",stats:{difficulty:"Easy",type:"Ranger",weapons:"Scanner & Bow",damage:70,health:80,speed:90},archetype:"ranger",skinUrl:"/assets/ranger.png",outfits:["/assets/ranger.png"],abilities:["doubleJump"],palette:{S:"#ffe0c2",H:"#5c4033",G:"#32ff7e",L:"#1b75bb",W:"#ffffff",P:"#2a2b2d",B:"#8b5a2b",T:"#1b75bb",E:"#ffffff",D:"#2a2b2d"},avatarStyle:{skin:"#ffe0c2",hair:"#5c4033",shirt:"#32ff7e",pants:"#8b5a2b",shoes:"#2a2b2d",design:"hoodie",eyes:"#5c3317"}},{id:"alex",name:"Alex the Swift",description:"A confident rogue in a bright red puffy jacket.",stats:{difficulty:"Hard",type:"Rogue",weapons:"Twin Daggers",damage:95,health:50,speed:100},archetype:"rogue",skinUrl:"/assets/rogue.png",outfits:["/assets/rogue.png"],abilities:[],palette:{S:"#ffe0c2",H:"#42281d",R:"#ff3838",W:"#dfe6e9",J:"#34ace0",Y:"#fff200",B:"#8b5a2b",E:"#ffffff",D:"#2c3e50"},avatarStyle:{skin:"#ffe0c2",hair:"#e67e22",shirt:"#ff3838",pants:"#2c3e50",shoes:"#42281d",design:"jacket",eyes:"#8b6914"}},{id:"maya",name:"Maya Starborn",description:"A brilliant mage with a bright yellow beanie.",stats:{difficulty:"Medium",type:"Mage",weapons:"Arcane Staff",damage:100,health:40,speed:70},archetype:"mage",skinUrl:"/assets/mage.png",outfits:["/assets/mage.png"],abilities:[],palette:{S:"#ffe0c2",H:"#784212",Y:"#fff200",B:"#17c0eb",O:"#ff9f1a",K:"#2d3436",T:"#ff9f1a",E:"#ffffff",D:"#2c3e50"},avatarStyle:{skin:"#ffe0c2",hair:"#fff200",shirt:"#17c0eb",pants:"#2c3e50",shoes:"#1e272e",design:"robe",eyes:"#1a73b5"}},{id:"kai",name:"Kai the Zephyr",description:"A swift wind-walker in a bright cyan hoodie.",stats:{difficulty:"Hard",type:"Ranger",weapons:"Gale Bow",damage:85,health:60,speed:100},archetype:"ranger",skinUrl:"/assets/ranger.png",outfits:["/assets/ranger.png"],abilities:["doubleJump"],palette:{S:"#ffeaa7",H:"#2d3436",G:"#00d8d6",L:"#0984e3",W:"#ffffff",P:"#2d3436",B:"#2d3436",T:"#0984e3",E:"#ffffff",D:"#2d3436"},avatarStyle:{skin:"#ffeaa7",hair:"#2d3436",shirt:"#00d8d6",pants:"#2d3436",shoes:"#2d3436",design:"hoodie",eyes:"#00d8d6"}},{id:"lyra",name:"Lyra Moonshadow",description:"An enigmatic spellcaster wearing a vivid purple robe.",stats:{difficulty:"Hard",type:"Mage",weapons:"Lunar Staff",damage:95,health:45,speed:75},archetype:"mage",skinUrl:"/assets/mage.png",outfits:["/assets/mage.png"],abilities:[],palette:{S:"#ffdfc4",H:"#192a56",Y:"#9c88ff",B:"#cd84f1",O:"#9c88ff",K:"#192a56",T:"#c56cf0",E:"#ffffff",D:"#192a56"},avatarStyle:{skin:"#ffdfc4",hair:"#9c88ff",shirt:"#cd84f1",pants:"#192a56",shoes:"#192a56",design:"robe",eyes:"#cd84f1"}},{id:"jax",name:"Jax Ironheart",description:"A sturdy brawler with striking yellow suspenders.",stats:{difficulty:"Easy",type:"Warrior",weapons:"Heavy Hammer",damage:90,health:100,speed:40},archetype:"warrior",skinUrl:"/assets/warrior.png",outfits:["/assets/warrior.png"],abilities:["fastMining"],palette:{S:"#ffdac1",H:"#d35400",W:"#f1f2f6",R:"#fffa65",B:"#747d8c",T:"#2f3542",E:"#ffffff",D:"#2f3542"},avatarStyle:{skin:"#ffdac1",hair:"#d35400",shirt:"#f1f2f6",pants:"#747d8c",shoes:"#2f3542",design:"suspenders",eyes:"#c23616"}},{id:"nova",name:"Nova Sunstrike",description:"A flashy duelist in a neon pink jacket.",stats:{difficulty:"Medium",type:"Rogue",weapons:"Energy Blades",damage:90,health:60,speed:95},archetype:"rogue",skinUrl:"/assets/rogue.png",outfits:["/assets/rogue.png"],abilities:[],palette:{S:"#ffb8b8",H:"#ffffff",R:"#ff9ff3",W:"#ffffff",J:"#f368e0",Y:"#00d2d3",B:"#222f3e",E:"#ffffff",D:"#222f3e"},avatarStyle:{skin:"#ffb8b8",hair:"#ffffff",shirt:"#ff9ff3",pants:"#222f3e",shoes:"#222f3e",design:"jacket",eyes:"#f368e0"}},{id:"finn",name:"Finn Riverbrook",description:"An energetic gatherer with a bright lime green shirt.",stats:{difficulty:"Easy",type:"Warrior",weapons:"Wooden Mallet",damage:75,health:90,speed:60},archetype:"warrior",skinUrl:"/assets/warrior.png",outfits:["/assets/warrior.png"],abilities:["fastMining"],palette:{S:"#f8efd4",H:"#e1b12c",W:"#32ff7e",R:"#17c0eb",B:"#4b4b4b",T:"#2d3436",E:"#ffffff",D:"#2d3436"},avatarStyle:{skin:"#f8efd4",hair:"#e1b12c",shirt:"#32ff7e",pants:"#4b4b4b",shoes:"#2d3436",design:"suspenders",eyes:"#44bd32"}},{id:"aria",name:"Aria Stormcaller",description:"A fierce elementalist in a glowing orange robe.",stats:{difficulty:"Medium",type:"Mage",weapons:"Storm Wand",damage:90,health:55,speed:80},archetype:"mage",skinUrl:"/assets/mage.png",outfits:["/assets/mage.png"],abilities:[],palette:{S:"#ffeedb",H:"#ff3838",Y:"#ffaf40",B:"#ff9f1a",O:"#ff3838",K:"#3d3d3d",T:"#ff3838",E:"#ffffff",D:"#3d3d3d"},avatarStyle:{skin:"#ffeedb",hair:"#ff3838",shirt:"#ff9f1a",pants:"#3d3d3d",shoes:"#3d3d3d",design:"robe",eyes:"#ff3838"}}];let Ns=null;function kr(t){ui();const e=Qt.find(f=>f.id===t);if(!e)return;const n=Ye.getWorldProgress(t),i=Ye.getCurrentLevel(t),s=document.createElement("div");s.className="parchment-modal-overlay",s.id="levelSelectOverlay";let a="";for(let f=1;f<=10;f++){const c=n.levels[f]||{completed:!1,stars:0},o=c.completed,l=f===i&&!o;let u=!o&&f>i,d=!1,h="";o?h="parchment-card--completed":l?h="parchment-card--current":u&&(h="parchment-card--locked");const p=c.stars||0,g=Array(3).fill(0).map((y,R)=>`<span class="parchment-star ${R<p?"parchment-star--filled":"parchment-star--empty"}">★</span>`).join("");let m="";o&&(m='<div class="parchment-card-badge"></div>');const S=l||d?`<button class="parchment-card-start" data-level="${f}">START</button>`:"";a+=`
      <div class="parchment-card ${h}" data-level="${f}">
        ${m}
        <div class="parchment-card-number">${f}</div>
        <div class="parchment-card-stars">${g}</div>
        ${S}
      </div>
    `}s.innerHTML=`
    <div class="parchment-modal">
      <button class="parchment-modal-close" id="closeLevelSelect">✕</button>
      
      <div class="parchment-modal-header">
        <div class="parchment-modal-title">${e.name.toUpperCase()}: ${e.subtitle?e.subtitle.toUpperCase():"THE ASCENSION LEVELS"}</div>
        <div class="parchment-modal-subtitle">10 ASCENSION LEVELS</div>
      </div>
      
      <div class="parchment-grid">
        ${a}
      </div>
      
      <div class="parchment-modal-footer">
        Complete a level to unlock the next.
      </div>
    </div>
  `,document.body.appendChild(s),Ns=s,s.querySelector("#closeLevelSelect").addEventListener("click",ui),s.addEventListener("click",f=>{f.target===s&&ui()}),s.querySelectorAll(".parchment-card").forEach(f=>{f.addEventListener("click",()=>{const c=parseInt(f.dataset.level);if(f.classList.contains("parchment-card--locked")){En("🔒 Complete the previous level first!","warning");return}ui(),window.location.hash=`#/problem/${t}/${c}`})}),s.querySelectorAll(".parchment-card-start").forEach(f=>{f.addEventListener("click",c=>{c.stopPropagation();const o=parseInt(f.dataset.level);ui(),window.location.hash=`#/problem/${t}/${o}`})});const r=f=>{f.key==="Escape"&&(ui(),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r)}function ui(){Ns&&(Ns.remove(),Ns=null)}function En(t,e="info"){let n=document.querySelector(".toast-container");n||(n=document.createElement("div"),n.className="toast-container",document.body.appendChild(n));const i={success:"✅",error:"❌",info:"ℹ️",warning:"⚠️"},s=document.createElement("div");s.className=`toast toast--${e}`,s.innerHTML=`<span class="toast-icon">${i[e]||""}</span> ${t}`,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-20px)",setTimeout(()=>s.remove(),300)},3e3)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wr="184",xc=0,yo=1,Uc=2,Os=1,Nc=2,Ki=3,Vn=0,Wt=1,Tn=2,Pn=0,Ai=1,bo=2,Mo=3,To=4,Oc=5,ei=100,Fc=101,kc=102,Wc=103,Gc=104,zc=200,Xc=201,Vc=202,Yc=203,Xa=204,Va=205,qc=206,Kc=207,$c=208,Jc=209,jc=210,Zc=211,Qc=212,ef=213,tf=214,Ya=0,qa=1,Ka=2,Bi=3,$a=4,Ja=5,ja=6,Za=7,Al=0,nf=1,sf=2,un=0,Cl=1,wl=2,Bl=3,Ll=4,Il=5,Dl=6,xl=7,Ul=300,oi=301,Li=302,aa=303,ra=304,Qs=306,Qa=1e3,Hn=1001,er=1002,ft=1003,af=1004,fs=1005,It=1006,oa=1007,si=1008,Vt=1009,Nl=1010,Ol=1011,ji=1012,Gr=1013,mn=1014,fn=1015,Cn=1016,zr=1017,Xr=1018,Zi=1020,Fl=35902,kl=35899,Wl=1021,Gl=1022,tn=1023,wn=1026,ai=1027,zl=1028,Vr=1029,li=1030,Yr=1031,qr=1033,Fs=33776,ks=33777,Ws=33778,Gs=33779,tr=35840,nr=35841,ir=35842,sr=35843,ar=36196,rr=37492,or=37496,lr=37488,cr=37489,Vs=37490,fr=37491,dr=37808,ur=37809,hr=37810,pr=37811,mr=37812,Sr=37813,gr=37814,vr=37815,_r=37816,yr=37817,br=37818,Mr=37819,Tr=37820,Hr=37821,Rr=36492,Er=36494,Pr=36495,Ar=36283,Cr=36284,Ys=36285,wr=36286,rf=3200,Br=0,of=1,Wn="",Kt="srgb",qs="srgb-linear",Ks="linear",et="srgb",hi=7680,Ho=519,lf=512,cf=513,ff=514,Kr=515,df=516,uf=517,$r=518,hf=519,Ro=35044,Eo="300 es",dn=2e3,Qi=2001;function pf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $s(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mf(){const t=$s("canvas");return t.style.display="block",t}const Po={};function Ao(...t){const e="THREE."+t.shift();console.log(e,...t)}function Xl(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=Xl(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=Xl(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Lr(...t){const e=t.join(" ");e in Po||(Po[e]=!0,Be(...t))}function Sf(t,e,n){return new Promise(function(i,s){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const gf={[Ya]:qa,[Ka]:ja,[$a]:Za,[Bi]:Ja,[qa]:Ya,[ja]:Ka,[Za]:$a,[Ja]:Bi};class ci{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Ir=180/Math.PI;function is(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ve(t,e,n){return Math.max(e,Math.min(n,t))}function vf(t,e){return(t%e+e)%e}function ca(t,e,n){return(1-n)*t+n*e}function Fi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const so=class so{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};so.prototype.isVector2=!0;let je=so;class Ni{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,a,r,f){let c=i[s+0],o=i[s+1],l=i[s+2],u=i[s+3],d=a[r+0],h=a[r+1],p=a[r+2],g=a[r+3];if(u!==g||c!==d||o!==h||l!==p){let m=c*d+o*h+l*p+u*g;m<0&&(d=-d,h=-h,p=-p,g=-g,m=-m);let S=1-f;if(m<.9995){const y=Math.acos(m),R=Math.sin(y);S=Math.sin(S*y)/R,f=Math.sin(f*y)/R,c=c*S+d*f,o=o*S+h*f,l=l*S+p*f,u=u*S+g*f}else{c=c*S+d*f,o=o*S+h*f,l=l*S+p*f,u=u*S+g*f;const y=1/Math.sqrt(c*c+o*o+l*l+u*u);c*=y,o*=y,l*=y,u*=y}}e[n]=c,e[n+1]=o,e[n+2]=l,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,a,r){const f=i[s],c=i[s+1],o=i[s+2],l=i[s+3],u=a[r],d=a[r+1],h=a[r+2],p=a[r+3];return e[n]=f*p+l*u+c*h-o*d,e[n+1]=c*p+l*d+o*u-f*h,e[n+2]=o*p+l*h+f*d-c*u,e[n+3]=l*p-f*u-c*d-o*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,a=e._z,r=e._order,f=Math.cos,c=Math.sin,o=f(i/2),l=f(s/2),u=f(a/2),d=c(i/2),h=c(s/2),p=c(a/2);switch(r){case"XYZ":this._x=d*l*u+o*h*p,this._y=o*h*u-d*l*p,this._z=o*l*p+d*h*u,this._w=o*l*u-d*h*p;break;case"YXZ":this._x=d*l*u+o*h*p,this._y=o*h*u-d*l*p,this._z=o*l*p-d*h*u,this._w=o*l*u+d*h*p;break;case"ZXY":this._x=d*l*u-o*h*p,this._y=o*h*u+d*l*p,this._z=o*l*p+d*h*u,this._w=o*l*u-d*h*p;break;case"ZYX":this._x=d*l*u-o*h*p,this._y=o*h*u+d*l*p,this._z=o*l*p-d*h*u,this._w=o*l*u+d*h*p;break;case"YZX":this._x=d*l*u+o*h*p,this._y=o*h*u+d*l*p,this._z=o*l*p-d*h*u,this._w=o*l*u-d*h*p;break;case"XZY":this._x=d*l*u-o*h*p,this._y=o*h*u-d*l*p,this._z=o*l*p+d*h*u,this._w=o*l*u+d*h*p;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],a=n[8],r=n[1],f=n[5],c=n[9],o=n[2],l=n[6],u=n[10],d=i+f+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(l-c)*h,this._y=(a-o)*h,this._z=(r-s)*h}else if(i>f&&i>u){const h=2*Math.sqrt(1+i-f-u);this._w=(l-c)/h,this._x=.25*h,this._y=(s+r)/h,this._z=(a+o)/h}else if(f>u){const h=2*Math.sqrt(1+f-i-u);this._w=(a-o)/h,this._x=(s+r)/h,this._y=.25*h,this._z=(c+l)/h}else{const h=2*Math.sqrt(1+u-i-f);this._w=(r-s)/h,this._x=(a+o)/h,this._y=(c+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,a=e._z,r=e._w,f=n._x,c=n._y,o=n._z,l=n._w;return this._x=i*l+r*f+s*o-a*c,this._y=s*l+r*c+a*f-i*o,this._z=a*l+r*o+i*c-s*f,this._w=r*l-i*f-s*c-a*o,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,a=e._z,r=e._w,f=this.dot(e);f<0&&(i=-i,s=-s,a=-a,r=-r,f=-f);let c=1-n;if(f<.9995){const o=Math.acos(f),l=Math.sin(o);c=Math.sin(c*o)/l,n=Math.sin(n*o)/l,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+a*n,this._w=this._w*c+r*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+a*n,this._w=this._w*c+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ao=class ao{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Co.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,a=e.x,r=e.y,f=e.z,c=e.w,o=2*(r*s-f*i),l=2*(f*n-a*s),u=2*(a*i-r*n);return this.x=n+c*o+r*u-f*l,this.y=i+c*l+f*o-a*u,this.z=s+c*u+a*l-r*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,a=e.z,r=n.x,f=n.y,c=n.z;return this.x=s*c-a*f,this.y=a*r-i*c,this.z=i*f-s*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ao.prototype.isVector3=!0;let F=ao;const fa=new F,Co=new Ni,ro=class ro{constructor(e,n,i,s,a,r,f,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,f,c,o)}set(e,n,i,s,a,r,f,c,o){const l=this.elements;return l[0]=e,l[1]=s,l[2]=f,l[3]=n,l[4]=a,l[5]=c,l[6]=i,l[7]=r,l[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,a=this.elements,r=i[0],f=i[3],c=i[6],o=i[1],l=i[4],u=i[7],d=i[2],h=i[5],p=i[8],g=s[0],m=s[3],S=s[6],y=s[1],R=s[4],H=s[7],C=s[2],E=s[5],w=s[8];return a[0]=r*g+f*y+c*C,a[3]=r*m+f*R+c*E,a[6]=r*S+f*H+c*w,a[1]=o*g+l*y+u*C,a[4]=o*m+l*R+u*E,a[7]=o*S+l*H+u*w,a[2]=d*g+h*y+p*C,a[5]=d*m+h*R+p*E,a[8]=d*S+h*H+p*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],f=e[5],c=e[6],o=e[7],l=e[8];return n*r*l-n*f*o-i*a*l+i*f*c+s*a*o-s*r*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],f=e[5],c=e[6],o=e[7],l=e[8],u=l*r-f*o,d=f*c-l*a,h=o*a-r*c,p=n*u+i*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=u*g,e[1]=(s*o-l*i)*g,e[2]=(f*i-s*r)*g,e[3]=d*g,e[4]=(l*n-s*c)*g,e[5]=(s*a-f*n)*g,e[6]=h*g,e[7]=(i*c-o*n)*g,e[8]=(r*n-i*a)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,a,r,f){const c=Math.cos(a),o=Math.sin(a);return this.set(i*c,i*o,-i*(c*r+o*f)+r+e,-s*o,s*c,-s*(-o*r+c*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(da.makeScale(e,n)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,n){return this.premultiply(da.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ro.prototype.isMatrix3=!0;let xe=ro;const da=new xe,wo=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const t={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===et&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===et&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qs]:{primaries:e,whitePoint:i,transfer:Ks,toXYZ:wo,fromXYZ:Bo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:wo,fromXYZ:Bo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}const Xe=_f();function An(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ci(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pi;class yf{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pi===void 0&&(pi=$s("canvas")),pi.width=e.width,pi.height=e.height;const s=pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pi}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$s("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=An(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(An(n[i]/255)*255):n[i]=An(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bf=0;class Jr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,f=s.length;r<f;r++)s[r].isDataTexture?a.push(ua(s[r].image)):a.push(ua(s[r]))}else a=ua(s);i.url=a}return n||(e.images[this.uuid]=i),i}}function ua(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Mf=0;const ha=new F;class Dt extends ci{constructor(e=Dt.DEFAULT_IMAGE,n=Dt.DEFAULT_MAPPING,i=Hn,s=Hn,a=It,r=si,f=tn,c=Vt,o=Dt.DEFAULT_ANISOTROPY,l=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=is(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=o,this.format=f,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ul;Dt.DEFAULT_ANISOTROPY=1;const oo=class oo{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,a;const c=e.elements,o=c[0],l=c[4],u=c[8],d=c[1],h=c[5],p=c[9],g=c[2],m=c[6],S=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(o+h+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(o+1)/2,H=(h+1)/2,C=(S+1)/2,E=(l+d)/4,w=(u+g)/4,_=(p+m)/4;return R>H&&R>C?R<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(R),s=E/i,a=w/i):H>C?H<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(H),i=E/s,a=_/s):C<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),i=w/a,s=_/a),this.set(i,s,a,n),this}let y=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-l)*(d-l));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-g)/y,this.z=(d-l)/y,this.w=Math.acos((o+h+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this.w=Ve(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this.w=Ve(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oo.prototype.isVector4=!0;let mt=oo;class Tf extends ci{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},a=new Dt(s),r=i.count;for(let f=0;f<r;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Jr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends Tf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vl extends Dt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hf extends Dt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zs=class Zs{constructor(e,n,i,s,a,r,f,c,o,l,u,d,h,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,a,r,f,c,o,l,u,d,h,p,g,m)}set(e,n,i,s,a,r,f,c,o,l,u,d,h,p,g,m){const S=this.elements;return S[0]=e,S[4]=n,S[8]=i,S[12]=s,S[1]=a,S[5]=r,S[9]=f,S[13]=c,S[2]=o,S[6]=l,S[10]=u,S[14]=d,S[3]=h,S[7]=p,S[11]=g,S[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zs().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/mi.setFromMatrixColumn(e,0).length(),a=1/mi.setFromMatrixColumn(e,1).length(),r=1/mi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),f=Math.sin(i),c=Math.cos(s),o=Math.sin(s),l=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=r*l,h=r*u,p=f*l,g=f*u;n[0]=c*l,n[4]=-c*u,n[8]=o,n[1]=h+p*o,n[5]=d-g*o,n[9]=-f*c,n[2]=g-d*o,n[6]=p+h*o,n[10]=r*c}else if(e.order==="YXZ"){const d=c*l,h=c*u,p=o*l,g=o*u;n[0]=d+g*f,n[4]=p*f-h,n[8]=r*o,n[1]=r*u,n[5]=r*l,n[9]=-f,n[2]=h*f-p,n[6]=g+d*f,n[10]=r*c}else if(e.order==="ZXY"){const d=c*l,h=c*u,p=o*l,g=o*u;n[0]=d-g*f,n[4]=-r*u,n[8]=p+h*f,n[1]=h+p*f,n[5]=r*l,n[9]=g-d*f,n[2]=-r*o,n[6]=f,n[10]=r*c}else if(e.order==="ZYX"){const d=r*l,h=r*u,p=f*l,g=f*u;n[0]=c*l,n[4]=p*o-h,n[8]=d*o+g,n[1]=c*u,n[5]=g*o+d,n[9]=h*o-p,n[2]=-o,n[6]=f*c,n[10]=r*c}else if(e.order==="YZX"){const d=r*c,h=r*o,p=f*c,g=f*o;n[0]=c*l,n[4]=g-d*u,n[8]=p*u+h,n[1]=u,n[5]=r*l,n[9]=-f*l,n[2]=-o*l,n[6]=h*u+p,n[10]=d-g*u}else if(e.order==="XZY"){const d=r*c,h=r*o,p=f*c,g=f*o;n[0]=c*l,n[4]=-u,n[8]=o*l,n[1]=d*u+g,n[5]=r*l,n[9]=h*u-p,n[2]=p*u-h,n[6]=f*l,n[10]=g*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Ef)}lookAt(e,n,i){const s=this.elements;return zt.subVectors(e,n),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),xn.crossVectors(i,zt),xn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),xn.crossVectors(i,zt)),xn.normalize(),ds.crossVectors(zt,xn),s[0]=xn.x,s[4]=ds.x,s[8]=zt.x,s[1]=xn.y,s[5]=ds.y,s[9]=zt.y,s[2]=xn.z,s[6]=ds.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,a=this.elements,r=i[0],f=i[4],c=i[8],o=i[12],l=i[1],u=i[5],d=i[9],h=i[13],p=i[2],g=i[6],m=i[10],S=i[14],y=i[3],R=i[7],H=i[11],C=i[15],E=s[0],w=s[4],_=s[8],M=s[12],B=s[1],P=s[5],I=s[9],G=s[13],q=s[2],D=s[6],X=s[10],O=s[14],ne=s[3],ie=s[7],ue=s[11],be=s[15];return a[0]=r*E+f*B+c*q+o*ne,a[4]=r*w+f*P+c*D+o*ie,a[8]=r*_+f*I+c*X+o*ue,a[12]=r*M+f*G+c*O+o*be,a[1]=l*E+u*B+d*q+h*ne,a[5]=l*w+u*P+d*D+h*ie,a[9]=l*_+u*I+d*X+h*ue,a[13]=l*M+u*G+d*O+h*be,a[2]=p*E+g*B+m*q+S*ne,a[6]=p*w+g*P+m*D+S*ie,a[10]=p*_+g*I+m*X+S*ue,a[14]=p*M+g*G+m*O+S*be,a[3]=y*E+R*B+H*q+C*ne,a[7]=y*w+R*P+H*D+C*ie,a[11]=y*_+R*I+H*X+C*ue,a[15]=y*M+R*G+H*O+C*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],a=e[12],r=e[1],f=e[5],c=e[9],o=e[13],l=e[2],u=e[6],d=e[10],h=e[14],p=e[3],g=e[7],m=e[11],S=e[15],y=c*h-o*d,R=f*h-o*u,H=f*d-c*u,C=r*h-o*l,E=r*d-c*l,w=r*u-f*l;return n*(g*y-m*R+S*H)-i*(p*y-m*C+S*E)+s*(p*R-g*C+S*w)-a*(p*H-g*E+m*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],a=e[3],r=e[4],f=e[5],c=e[6],o=e[7],l=e[8],u=e[9],d=e[10],h=e[11],p=e[12],g=e[13],m=e[14],S=e[15],y=n*f-i*r,R=n*c-s*r,H=n*o-a*r,C=i*c-s*f,E=i*o-a*f,w=s*o-a*c,_=l*g-u*p,M=l*m-d*p,B=l*S-h*p,P=u*m-d*g,I=u*S-h*g,G=d*S-h*m,q=y*G-R*I+H*P+C*B-E*M+w*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/q;return e[0]=(f*G-c*I+o*P)*D,e[1]=(s*I-i*G-a*P)*D,e[2]=(g*w-m*E+S*C)*D,e[3]=(d*E-u*w-h*C)*D,e[4]=(c*B-r*G-o*M)*D,e[5]=(n*G-s*B+a*M)*D,e[6]=(m*H-p*w-S*R)*D,e[7]=(l*w-d*H+h*R)*D,e[8]=(r*I-f*B+o*_)*D,e[9]=(i*B-n*I-a*_)*D,e[10]=(p*E-g*H+S*y)*D,e[11]=(u*H-l*E-h*y)*D,e[12]=(f*M-r*P-c*_)*D,e[13]=(n*P-i*M+s*_)*D,e[14]=(g*R-p*C-m*y)*D,e[15]=(l*C-u*R+d*y)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,a=e.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),a=1-i,r=e.x,f=e.y,c=e.z,o=a*r,l=a*f;return this.set(o*r+i,o*f-s*c,o*c+s*f,0,o*f+s*c,l*f+i,l*c-s*r,0,o*c-s*f,l*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,a=n._x,r=n._y,f=n._z,c=n._w,o=a+a,l=r+r,u=f+f,d=a*o,h=a*l,p=a*u,g=r*l,m=r*u,S=f*u,y=c*o,R=c*l,H=c*u,C=i.x,E=i.y,w=i.z;return s[0]=(1-(g+S))*C,s[1]=(h+H)*C,s[2]=(p-R)*C,s[3]=0,s[4]=(h-H)*E,s[5]=(1-(d+S))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+R)*w,s[9]=(m-y)*w,s[10]=(1-(d+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),n.identity(),this;let r=mi.set(s[0],s[1],s[2]).length();const f=mi.set(s[4],s[5],s[6]).length(),c=mi.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Jt.copy(this);const o=1/r,l=1/f,u=1/c;return Jt.elements[0]*=o,Jt.elements[1]*=o,Jt.elements[2]*=o,Jt.elements[4]*=l,Jt.elements[5]*=l,Jt.elements[6]*=l,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,n.setFromRotationMatrix(Jt),i.x=r,i.y=f,i.z=c,this}makePerspective(e,n,i,s,a,r,f=dn,c=!1){const o=this.elements,l=2*a/(n-e),u=2*a/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let p,g;if(c)p=a/(r-a),g=r*a/(r-a);else if(f===dn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(f===Qi)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return o[0]=l,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=u,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,s,a,r,f=dn,c=!1){const o=this.elements,l=2/(n-e),u=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let p,g;if(c)p=1/(r-a),g=r/(r-a);else if(f===dn)p=-2/(r-a),g=-(r+a)/(r-a);else if(f===Qi)p=-1/(r-a),g=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return o[0]=l,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=u,o[9]=0,o[13]=h,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Zs.prototype.isMatrix4=!0;let yt=Zs;const mi=new F,Jt=new yt,Rf=new F(0,0,0),Ef=new F(1,1,1),xn=new F,ds=new F,zt=new F,Lo=new yt,Io=new Ni;class Yn{constructor(e=0,n=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,a=s[0],r=s[4],f=s[8],c=s[1],o=s[5],l=s[9],u=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(f,h),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,o)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,o));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,o),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(f,h));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-l,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pf=0;const Do=new F,Si=new Ni,vn=new yt,us=new F,ki=new F,Af=new F,Cf=new Ni,xo=new F(1,0,0),Uo=new F(0,1,0),No=new F(0,0,1),Oo={type:"added"},wf={type:"removed"},gi={type:"childadded",child:null},pa={type:"childremoved",child:null};class At extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,n=new Yn,i=new Ni,s=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Si.setFromAxisAngle(e,n),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,n){return Si.setFromAxisAngle(e,n),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(xo,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,n){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xo,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?us.copy(e):us.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ki,us,this.up):vn.lookAt(us,ki,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(vn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),gi.child=e,this.dispatchEvent(gi),gi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wf),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(f,c){return f[c.uuid]===void 0&&(f[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const c=f.shapes;if(Array.isArray(c))for(let o=0,l=c.length;o<l;o++){const u=c[o];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let c=0,o=this.material.length;c<o;c++)f.push(a(e.materials,this.material[c]));s.material=f}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const c=this.animations[f];s.animations.push(a(e.animations,c))}}if(n){const f=r(e.geometries),c=r(e.materials),o=r(e.textures),l=r(e.images),u=r(e.shapes),d=r(e.skeletons),h=r(e.animations),p=r(e.nodes);f.length>0&&(i.geometries=f),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(f){const c=[];for(const o in f){const l=f[o];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ft extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,a=null,r=null;const f=this._targetRay,c=this._grip,o=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(o&&e.hand){r=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),S=this._getHandJoint(o,g);m!==null&&(S.matrix.fromArray(m.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=m.radius),S.visible=m!==null}const l=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],d=l.position.distanceTo(u.position),h=.02,p=.005;o.inputState.pinching&&d>h+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=h-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return f!==null&&(f.visible=s!==null),c!==null&&(c.visible=a!==null),o!==null&&(o.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Sa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Xe.workingColorSpace){if(e=vf(e,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Sa(r,a,e+1/3),this.g=Sa(r,a,e),this.b=Sa(r,a,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,n=Kt){function i(a){a!==void 0&&parseFloat(a)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],f=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=ql[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Xe.workingToColorSpace(Bt.copy(this),e),Math.round(Ve(Bt.r*255,0,255))*65536+Math.round(Ve(Bt.g*255,0,255))*256+Math.round(Ve(Bt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Bt.copy(this),n);const i=Bt.r,s=Bt.g,a=Bt.b,r=Math.max(i,s,a),f=Math.min(i,s,a);let c,o;const l=(f+r)/2;if(f===r)c=0,o=0;else{const u=r-f;switch(o=l<=.5?u/(r+f):u/(2-r-f),r){case i:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-i)/u+2;break;case a:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=o,e.l=l,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Kt){Xe.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,s=Bt.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+n,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Un),e.getHSL(hs);const i=ca(Un.h,hs.h,n),s=ca(Un.s,hs.s,n),a=ca(Un.l,hs.l,n);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Je;Je.NAMES=ql;class Lf extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jt=new F,_n=new F,ga=new F,yn=new F,vi=new F,_i=new F,Fo=new F,va=new F,_a=new F,ya=new F,ba=new mt,Ma=new mt,Ta=new mt;class en{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),jt.subVectors(e,n),s.cross(jt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,n,i,s,a){jt.subVectors(s,n),_n.subVectors(i,n),ga.subVectors(e,n);const r=jt.dot(jt),f=jt.dot(_n),c=jt.dot(ga),o=_n.dot(_n),l=_n.dot(ga),u=r*o-f*f;if(u===0)return a.set(0,0,0),null;const d=1/u,h=(o*c-f*l)*d,p=(r*l-f*c)*d;return a.set(1-h-p,p,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,n,i,s,a,r,f,c){return this.getBarycoord(e,n,i,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,yn.x),c.addScaledVector(r,yn.y),c.addScaledVector(f,yn.z),c)}static getInterpolatedAttribute(e,n,i,s,a,r){return ba.setScalar(0),Ma.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ba,a.x),r.addScaledVector(Ma,a.y),r.addScaledVector(Ta,a.z),r}static isFrontFacing(e,n,i,s){return jt.subVectors(i,n),_n.subVectors(e,n),jt.cross(_n).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),jt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return en.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,a){return en.getInterpolation(e,this.a,this.b,this.c,n,i,s,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,a=this.c;let r,f;vi.subVectors(s,i),_i.subVectors(a,i),va.subVectors(e,i);const c=vi.dot(va),o=_i.dot(va);if(c<=0&&o<=0)return n.copy(i);_a.subVectors(e,s);const l=vi.dot(_a),u=_i.dot(_a);if(l>=0&&u<=l)return n.copy(s);const d=c*u-l*o;if(d<=0&&c>=0&&l<=0)return r=c/(c-l),n.copy(i).addScaledVector(vi,r);ya.subVectors(e,a);const h=vi.dot(ya),p=_i.dot(ya);if(p>=0&&h<=p)return n.copy(a);const g=h*o-c*p;if(g<=0&&o>=0&&p<=0)return f=o/(o-p),n.copy(i).addScaledVector(_i,f);const m=l*p-h*u;if(m<=0&&u-l>=0&&h-p>=0)return Fo.subVectors(a,s),f=(u-l)/(u-l+(h-p)),n.copy(s).addScaledVector(Fo,f);const S=1/(m+g+d);return r=g*S,f=d*S,n.copy(i).addScaledVector(vi,r).addScaledVector(_i,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ss{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,f=a.count;r<f;r++)e.isMesh===!0?e.getVertexPosition(r,Zt):Zt.fromBufferAttribute(a,r),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),ms.subVectors(this.max,Wi),yi.subVectors(e.a,Wi),bi.subVectors(e.b,Wi),Mi.subVectors(e.c,Wi),Nn.subVectors(bi,yi),On.subVectors(Mi,bi),Kn.subVectors(yi,Mi);let n=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,On.z,0,-On.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-Kn.y,Kn.x,0];return!Ha(n,yi,bi,Mi,ms)||(n=[1,0,0,0,1,0,0,0,1],!Ha(n,yi,bi,Mi,ms))?!1:(Ss.crossVectors(Nn,On),n=[Ss.x,Ss.y,Ss.z],Ha(n,yi,bi,Mi,ms))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new F,new F,new F,new F,new F,new F,new F,new F],Zt=new F,ps=new ss,yi=new F,bi=new F,Mi=new F,Nn=new F,On=new F,Kn=new F,Wi=new F,ms=new F,Ss=new F,$n=new F;function Ha(t,e,n,i,s){for(let a=0,r=t.length-3;a<=r;a+=3){$n.fromArray(t,a);const f=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=e.dot($n),o=n.dot($n),l=i.dot($n);if(Math.max(-Math.max(c,o,l),Math.min(c,o,l))>f)return!1}return!0}const bt=new F,gs=new je;let If=0;class pn extends ci{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ro,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gs.fromBufferAttribute(this,n),gs.applyMatrix3(e),this.setXY(n,gs.x,gs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,a){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ro&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kl extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $l extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nt extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Df=new ss,Gi=new F,Ra=new F;class jr{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Df.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const n=Gi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Ra)),this.expandByPoint(Gi.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xf=0;const qt=new yt,Ea=new At,Ti=new F,Xt=new ss,zi=new ss,Pt=new F;class nn extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pf(e)?$l:Kl)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new xe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,n,i){return qt.makeTranslation(e,n,i),this.applyMatrix4(qt),this}scale(e,n,i){return qt.makeScale(e,n,i),this.applyMatrix4(qt),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Nt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const a=e[s];n.setXYZ(s,a.x,a.y,a.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const a=n[i];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const f=n[a];zi.setFromBufferAttribute(f),this.morphTargetsRelative?(Pt.addVectors(Xt.min,zi.min),Xt.expandByPoint(Pt),Pt.addVectors(Xt.max,zi.max),Xt.expandByPoint(Pt)):(Xt.expandByPoint(zi.min),Xt.expandByPoint(zi.max))}Xt.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Pt.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Pt));if(n)for(let a=0,r=n.length;a<r;a++){const f=n[a],c=this.morphTargetsRelative;for(let o=0,l=f.count;o<l;o++)Pt.fromBufferAttribute(f,o),c&&(Ti.fromBufferAttribute(e,o),Pt.add(Ti)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),f=[],c=[];for(let _=0;_<i.count;_++)f[_]=new F,c[_]=new F;const o=new F,l=new F,u=new F,d=new je,h=new je,p=new je,g=new F,m=new F;function S(_,M,B){o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,B),d.fromBufferAttribute(a,_),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,B),l.sub(o),u.sub(o),h.sub(d),p.sub(d);const P=1/(h.x*p.y-p.x*h.y);isFinite(P)&&(g.copy(l).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(P),m.copy(u).multiplyScalar(h.x).addScaledVector(l,-p.x).multiplyScalar(P),f[_].add(g),f[M].add(g),f[B].add(g),c[_].add(m),c[M].add(m),c[B].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,M=y.length;_<M;++_){const B=y[_],P=B.start,I=B.count;for(let G=P,q=P+I;G<q;G+=3)S(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const R=new F,H=new F,C=new F,E=new F;function w(_){C.fromBufferAttribute(s,_),E.copy(C);const M=f[_];R.copy(M),R.sub(C.multiplyScalar(C.dot(M))).normalize(),H.crossVectors(E,M);const P=H.dot(c[_])<0?-1:1;r.setXYZW(_,R.x,R.y,R.z,P)}for(let _=0,M=y.length;_<M;++_){const B=y[_],P=B.start,I=B.count;for(let G=P,q=P+I;G<q;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new F,a=new F,r=new F,f=new F,c=new F,o=new F,l=new F,u=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),r.fromBufferAttribute(n,m),l.subVectors(r,a),u.subVectors(s,a),l.cross(u),f.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),o.fromBufferAttribute(i,m),f.add(l),c.add(l),o.add(l),i.setXYZ(p,f.x,f.y,f.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),l.subVectors(r,a),u.subVectors(s,a),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(f,c){const o=f.array,l=f.itemSize,u=f.normalized,d=new o.constructor(c.length*l);let h=0,p=0;for(let g=0,m=c.length;g<m;g++){f.isInterleavedBufferAttribute?h=c[g]*f.data.stride+f.offset:h=c[g]*l;for(let S=0;S<l;S++)d[p++]=o[h++]}return new pn(d,l,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,s=this.attributes;for(const f in s){const c=s[f],o=e(c,i);n.setAttribute(f,o)}const a=this.morphAttributes;for(const f in a){const c=[],o=a[f];for(let l=0,u=o.length;l<u;l++){const d=o[l],h=e(d,i);c.push(h)}n.morphAttributes[f]=c}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let f=0,c=r.length;f<c;f++){const o=r[f];n.addGroup(o.start,o.count,o.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const o=i[c];e.data.attributes[c]=o.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],l=[];for(let u=0,d=o.length;u<d;u++){const h=o[u];l.push(h.toJSON(e.data))}l.length>0&&(s[c]=l,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const o in s){const l=s[o];this.setAttribute(o,l.clone(n))}const a=e.morphAttributes;for(const o in a){const l=[],u=a[o];for(let d=0,h=u.length;d<h;d++)l.push(u[d].clone(n));this.morphAttributes[o]=l}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let o=0,l=r.length;o<l;o++){const u=r[o];this.addGroup(u.start,u.count,u.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Uf=0;class as extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ai,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Va,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const f in a){const c=a[f];delete c.metadata,r.push(c)}return r}if(n){const a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mn=new F,Pa=new F,vs=new F,Fn=new F,Aa=new F,_s=new F,Ca=new F;class Nf{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,n),Mn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Pa.copy(e).add(n).multiplyScalar(.5),vs.copy(n).sub(e).normalize(),Fn.copy(this.origin).sub(Pa);const a=e.distanceTo(n)*.5,r=-this.direction.dot(vs),f=Fn.dot(this.direction),c=-Fn.dot(vs),o=Fn.lengthSq(),l=Math.abs(1-r*r);let u,d,h,p;if(l>0)if(u=r*c-f,d=r*f-c,p=a*l,u>=0)if(d>=-p)if(d<=p){const g=1/l;u*=g,d*=g,h=u*(u+r*d+2*f)+d*(r*u+d+2*c)+o}else d=a,u=Math.max(0,-(r*d+f)),h=-u*u+d*(d+2*c)+o;else d=-a,u=Math.max(0,-(r*d+f)),h=-u*u+d*(d+2*c)+o;else d<=-p?(u=Math.max(0,-(-r*a+f)),d=u>0?-a:Math.min(Math.max(-a,-c),a),h=-u*u+d*(d+2*c)+o):d<=p?(u=0,d=Math.min(Math.max(-a,-c),a),h=d*(d+2*c)+o):(u=Math.max(0,-(r*a+f)),d=u>0?a:Math.min(Math.max(-a,-c),a),h=-u*u+d*(d+2*c)+o);else d=r>0?-a:a,u=Math.max(0,-(r*d+f)),h=-u*u+d*(d+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pa).addScaledVector(vs,d),h}intersectSphere(e,n){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),f=i-r,c=i+r;return c<0?null:f<0?this.at(c,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,a,r,f,c;const o=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return o>=0?(i=(e.min.x-d.x)*o,s=(e.max.x-d.x)*o):(i=(e.max.x-d.x)*o,s=(e.min.x-d.x)*o),l>=0?(a=(e.min.y-d.y)*l,r=(e.max.y-d.y)*l):(a=(e.max.y-d.y)*l,r=(e.min.y-d.y)*l),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),u>=0?(f=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(f=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||f>s)||((f>i||i!==i)&&(i=f),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,n,i,s,a){Aa.subVectors(n,e),_s.subVectors(i,e),Ca.crossVectors(Aa,_s);let r=this.direction.dot(Ca),f;if(r>0){if(s)return null;f=1}else if(r<0)f=-1,r=-r;else return null;Fn.subVectors(this.origin,e);const c=f*this.direction.dot(_s.crossVectors(Fn,_s));if(c<0)return null;const o=f*this.direction.dot(Aa.cross(Fn));if(o<0||c+o>r)return null;const l=-f*Fn.dot(Ca);return l<0?null:this.at(l/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jl extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ko=new yt,Jn=new Nf,ys=new jr,Wo=new F,bs=new F,Ms=new F,Ts=new F,wa=new F,Hs=new F,Go=new F,Rs=new F;class pt extends At{constructor(e=new nn,n=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(a&&f){Hs.set(0,0,0);for(let c=0,o=a.length;c<o;c++){const l=f[c],u=a[c];l!==0&&(wa.fromBufferAttribute(u,e),r?Hs.addScaledVector(wa,l):Hs.addScaledVector(wa.sub(n),l))}n.add(Hs)}return n}raycast(e,n){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(a),Jn.copy(e.ray).recast(e.near),!(ys.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ys,Wo)===null||Jn.origin.distanceToSquared(Wo)>(e.far-e.near)**2))&&(ko.copy(a).invert(),Jn.copy(e.ray).applyMatrix4(ko),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jn)))}_computeIntersections(e,n,i){let s;const a=this.geometry,r=this.material,f=a.index,c=a.attributes.position,o=a.attributes.uv,l=a.attributes.uv1,u=a.attributes.normal,d=a.groups,h=a.drawRange;if(f!==null)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const m=d[p],S=r[m.materialIndex],y=Math.max(m.start,h.start),R=Math.min(f.count,Math.min(m.start+m.count,h.start+h.count));for(let H=y,C=R;H<C;H+=3){const E=f.getX(H),w=f.getX(H+1),_=f.getX(H+2);s=Es(this,S,e,i,o,l,u,E,w,_),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(f.count,h.start+h.count);for(let m=p,S=g;m<S;m+=3){const y=f.getX(m),R=f.getX(m+1),H=f.getX(m+2);s=Es(this,r,e,i,o,l,u,y,R,H),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const m=d[p],S=r[m.materialIndex],y=Math.max(m.start,h.start),R=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let H=y,C=R;H<C;H+=3){const E=H,w=H+1,_=H+2;s=Es(this,S,e,i,o,l,u,E,w,_),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let m=p,S=g;m<S;m+=3){const y=m,R=m+1,H=m+2;s=Es(this,r,e,i,o,l,u,y,R,H),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Of(t,e,n,i,s,a,r,f){let c;if(e.side===Wt?c=i.intersectTriangle(r,a,s,!0,f):c=i.intersectTriangle(s,a,r,e.side===Vn,f),c===null)return null;Rs.copy(f),Rs.applyMatrix4(t.matrixWorld);const o=n.ray.origin.distanceTo(Rs);return o<n.near||o>n.far?null:{distance:o,point:Rs.clone(),object:t}}function Es(t,e,n,i,s,a,r,f,c,o){t.getVertexPosition(f,bs),t.getVertexPosition(c,Ms),t.getVertexPosition(o,Ts);const l=Of(t,e,n,i,bs,Ms,Ts,Go);if(l){const u=new F;en.getBarycoord(Go,bs,Ms,Ts,u),s&&(l.uv=en.getInterpolatedAttribute(s,f,c,o,u,new je)),a&&(l.uv1=en.getInterpolatedAttribute(a,f,c,o,u,new je)),r&&(l.normal=en.getInterpolatedAttribute(r,f,c,o,u,new F),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:f,b:c,c:o,normal:new F,materialIndex:0};en.getNormal(bs,Ms,Ts,d.normal),l.face=d,l.barycoord=u}return l}class Ff extends Dt{constructor(e=null,n=1,i=1,s,a,r,f,c,o=ft,l=ft,u,d){super(null,r,f,c,o,l,s,a,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new F,kf=new F,Wf=new xe;class Qn{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Ba.subVectors(i,n).cross(kf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(Ba),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wf.getNormalMatrix(e),s=this.coplanarPoint(Ba).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new jr,Gf=new je(.5,.5),Ps=new F;class Zr{constructor(e=new Qn,n=new Qn,i=new Qn,s=new Qn,a=new Qn,r=new Qn){this.planes=[e,n,i,s,a,r]}set(e,n,i,s,a,r){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(i),f[3].copy(s),f[4].copy(a),f[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=dn,i=!1){const s=this.planes,a=e.elements,r=a[0],f=a[1],c=a[2],o=a[3],l=a[4],u=a[5],d=a[6],h=a[7],p=a[8],g=a[9],m=a[10],S=a[11],y=a[12],R=a[13],H=a[14],C=a[15];if(s[0].setComponents(o-r,h-l,S-p,C-y).normalize(),s[1].setComponents(o+r,h+l,S+p,C+y).normalize(),s[2].setComponents(o+f,h+u,S+g,C+R).normalize(),s[3].setComponents(o-f,h-u,S-g,C-R).normalize(),i)s[4].setComponents(c,d,m,H).normalize(),s[5].setComponents(o-c,h-d,S-m,C-H).normalize();else if(s[4].setComponents(o-c,h-d,S-m,C-H).normalize(),n===dn)s[5].setComponents(o+c,h+d,S+m,C+H).normalize();else if(n===Qi)s[5].setComponents(c,d,m,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const n=Gf.distanceTo(e.center);return jn.radius=.7071067811865476+n,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ps.x=s.normal.x>0?e.max.x:e.min.x,Ps.y=s.normal.y>0?e.max.y:e.min.y,Ps.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends Dt{constructor(e=[],n=oi,i,s,a,r,f,c,o,l){super(e,n,i,s,a,r,f,c,o,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class As extends Dt{constructor(e,n,i,s,a,r,f,c,o){super(e,n,i,s,a,r,f,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii extends Dt{constructor(e,n,i=mn,s,a,r,f=ft,c=ft,o,l=wn,u=1){if(l!==wn&&l!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:u};super(d,s,a,r,f,c,l,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zf extends Ii{constructor(e,n=mn,i=oi,s,a,r=ft,f=ft,c,o=wn){const l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,n,i,s,a,r,f,c,o),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zl extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ht extends nn{constructor(e=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const f=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],o=[],l=[],u=[];let d=0,h=0;p("z","y","x",-1,-1,i,n,e,r,a,0),p("z","y","x",1,-1,i,n,-e,r,a,1),p("x","z","y",1,1,e,i,n,s,r,2),p("x","z","y",1,-1,e,i,-n,s,r,3),p("x","y","z",1,-1,e,n,i,s,a,4),p("x","y","z",-1,-1,e,n,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(u,2));function p(g,m,S,y,R,H,C,E,w,_,M){const B=H/w,P=C/_,I=H/2,G=C/2,q=E/2,D=w+1,X=_+1;let O=0,ne=0;const ie=new F;for(let ue=0;ue<X;ue++){const be=ue*P-G;for(let Te=0;Te<D;Te++){const ze=Te*B-I;ie[g]=ze*y,ie[m]=be*R,ie[S]=q,o.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[S]=E>0?1:-1,l.push(ie.x,ie.y,ie.z),u.push(Te/w),u.push(1-ue/_),O+=1}}for(let ue=0;ue<_;ue++)for(let be=0;be<w;be++){const Te=d+be+D*ue,ze=d+be+D*(ue+1),Ze=d+(be+1)+D*(ue+1),Ie=d+(be+1)+D*ue;c.push(Te,ze,Ie),c.push(ze,Ze,Ie),ne+=6}f.addGroup(h,ne,M),h+=ne,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ti extends nn{constructor(e=1,n=1,i=1,s=32,a=1,r=!1,f=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:f,thetaLength:c};const o=this;s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let p=0;const g=[],m=i/2;let S=0;y(),r===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(l),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(h,2));function y(){const H=new F,C=new F;let E=0;const w=(n-e)/i;for(let _=0;_<=a;_++){const M=[],B=_/a,P=B*(n-e)+e;for(let I=0;I<=s;I++){const G=I/s,q=G*c+f,D=Math.sin(q),X=Math.cos(q);C.x=P*D,C.y=-B*i+m,C.z=P*X,u.push(C.x,C.y,C.z),H.set(D,w,X).normalize(),d.push(H.x,H.y,H.z),h.push(G,1-B),M.push(p++)}g.push(M)}for(let _=0;_<s;_++)for(let M=0;M<a;M++){const B=g[M][_],P=g[M+1][_],I=g[M+1][_+1],G=g[M][_+1];(e>0||M!==0)&&(l.push(B,P,G),E+=3),(n>0||M!==a-1)&&(l.push(P,I,G),E+=3)}o.addGroup(S,E,0),S+=E}function R(H){const C=p,E=new je,w=new F;let _=0;const M=H===!0?e:n,B=H===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*B,0),d.push(0,B,0),h.push(.5,.5),p++;const P=p;for(let I=0;I<=s;I++){const q=I/s*c+f,D=Math.cos(q),X=Math.sin(q);w.x=M*X,w.y=m*B,w.z=M*D,u.push(w.x,w.y,w.z),d.push(0,B,0),E.x=D*.5+.5,E.y=X*.5*B+.5,h.push(E.x,E.y),p++}for(let I=0;I<s;I++){const G=C+I,q=P+I;H===!0?l.push(q,q+1,G):l.push(q+1,q,G),_+=3}o.addGroup(S,_,H===!0?1:2),S+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ea extends nn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const a=e/2,r=n/2,f=Math.floor(i),c=Math.floor(s),o=f+1,l=c+1,u=e/f,d=n/c,h=[],p=[],g=[],m=[];for(let S=0;S<l;S++){const y=S*d-r;for(let R=0;R<o;R++){const H=R*u-a;p.push(H,-y,0),g.push(0,0,1),m.push(R/f),m.push(1-S/c)}}for(let S=0;S<c;S++)for(let y=0;y<f;y++){const R=y+o*S,H=y+o*(S+1),C=y+1+o*(S+1),E=y+1+o*S;h.push(R,H,E),h.push(H,C,E)}this.setIndex(h),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qr extends nn{constructor(e=1,n=32,i=16,s=0,a=Math.PI*2,r=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:f},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(r+f,Math.PI);let o=0;const l=[],u=new F,d=new F,h=[],p=[],g=[],m=[];for(let S=0;S<=i;S++){const y=[],R=S/i;let H=0;S===0&&r===0?H=.5/n:S===i&&c===Math.PI&&(H=-.5/n);for(let C=0;C<=n;C++){const E=C/n;u.x=-e*Math.cos(s+E*a)*Math.sin(r+R*f),u.y=e*Math.cos(r+R*f),u.z=e*Math.sin(s+E*a)*Math.sin(r+R*f),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+H,1-R),y.push(o++)}l.push(y)}for(let S=0;S<i;S++)for(let y=0;y<n;y++){const R=l[S][y+1],H=l[S][y],C=l[S+1][y],E=l[S+1][y+1];(S!==0||r>0)&&h.push(R,H,E),(S!==i-1||c<Math.PI)&&h.push(H,C,E)}this.setIndex(h),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Di(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(zo(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(zo(s[0])){const a=[];for(let r=0,f=s.length;r<f;r++)a[r]=s[r].clone();e[n][i]=a}else e[n][i]=s.slice();else e[n][i]=s}}return e}function xt(t){const e={};for(let n=0;n<t.length;n++){const i=Di(t[n]);for(const s in i)e[s]=i[s]}return e}function zo(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Xf(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ql(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Vf={clone:Di,merge:xt};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kf extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $f extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jf extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ec extends At{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class jf extends ec{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const La=new yt,Xo=new F,Vo=new F;class Zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xo),Vo.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vo),n.updateMatrixWorld(),La.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Qi||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cs=new F,ws=new Ni,rn=new F;class tc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cs,ws,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,ws,rn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Cs,ws,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,ws,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new F,Yo=new je,qo=new je;class $t extends tc{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,n){return this.getViewBounds(e,Yo,qo),n.subVectors(qo,Yo)}setViewOffset(e,n,i,s,a,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,o=r.fullHeight;a+=r.offsetX*s/c,n-=r.offsetY*i/o,s*=r.width/c,i*=r.height/o}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eo extends tc{constructor(e=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,r=i+e,f=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=o*this.view.offsetX,r=a+o*this.view.width,f-=l*this.view.offsetY,c=f-l*this.view.height}this.projectionMatrix.makeOrthographic(a,r,f,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Qf extends Zf{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ed extends ec{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Qf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Hi=-90,Ri=1;class td extends At{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(Hi,Ri,e,n);s.layers=this.layers,this.add(s);const a=new $t(Hi,Ri,e,n);a.layers=this.layers,this.add(a);const r=new $t(Hi,Ri,e,n);r.layers=this.layers,this.add(r);const f=new $t(Hi,Ri,e,n);f.layers=this.layers,this.add(f);const c=new $t(Hi,Ri,e,n);c.layers=this.layers,this.add(c);const o=new $t(Hi,Ri,e,n);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,f,c]=n;for(const o of n)this.remove(o);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qi)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of n)this.add(o),o.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,f,c,o,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(u,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class nd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lo=class lo{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const a=this.elements;return a[0]=e,a[2]=n,a[1]=i,a[3]=s,this}};lo.prototype.isMatrix2=!0;let Ko=lo;function $o(t,e,n,i){const s=id(i);switch(n){case Wl:return t*e;case zl:return t*e/s.components*s.byteLength;case Vr:return t*e/s.components*s.byteLength;case li:return t*e*2/s.components*s.byteLength;case Yr:return t*e*2/s.components*s.byteLength;case Gl:return t*e*3/s.components*s.byteLength;case tn:return t*e*4/s.components*s.byteLength;case qr:return t*e*4/s.components*s.byteLength;case Fs:case ks:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Gs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nr:case sr:return Math.max(t,16)*Math.max(e,8)/4;case tr:case ir:return Math.max(t,8)*Math.max(e,8)/2;case ar:case rr:case lr:case cr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case or:case Vs:case fr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ur:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hr:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pr:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mr:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gr:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vr:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _r:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yr:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case br:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mr:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tr:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hr:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rr:case Er:case Pr:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ar:case Cr:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ys:case wr:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function id(t){switch(t){case Vt:case Nl:return{byteLength:1,components:1};case ji:case Ol:case Cn:return{byteLength:2,components:1};case zr:case Xr:return{byteLength:2,components:4};case mn:case Gr:case fn:return{byteLength:4,components:1};case Fl:case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wr}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nc(){let t=null,e=!1,n=null,i=null;function s(a,r){n(a,r),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function sd(t){const e=new WeakMap;function n(f,c){const o=f.array,l=f.usage,u=o.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,o,l),f.onUploadCallback();let h;if(o instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)h=t.HALF_FLOAT;else if(o instanceof Uint16Array)f.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(o instanceof Int16Array)h=t.SHORT;else if(o instanceof Uint32Array)h=t.UNSIGNED_INT;else if(o instanceof Int32Array)h=t.INT;else if(o instanceof Int8Array)h=t.BYTE;else if(o instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:d,type:h,bytesPerElement:o.BYTES_PER_ELEMENT,version:f.version,size:u}}function i(f,c,o){const l=c.array,u=c.updateRanges;if(t.bindBuffer(o,f),u.length===0)t.bufferSubData(o,0,l);else{u.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<u.length;h++){const p=u[d],g=u[h];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let h=0,p=u.length;h<p;h++){const g=u[h];t.bufferSubData(o,g.start*l.BYTES_PER_ELEMENT,l,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const c=e.get(f);c&&(t.deleteBuffer(c.buffer),e.delete(f))}function r(f,c){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const l=e.get(f);(!l||l.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const o=e.get(f);if(o===void 0)e.set(f,n(f,c));else if(o.version<f.version){if(o.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,f,c),o.version=f.version}}return{get:s,remove:a,update:r}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ou=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ph=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ph=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:ad,alphahash_pars_fragment:rd,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:fd,aomap_fragment:dd,aomap_pars_fragment:ud,batching_pars_vertex:hd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:Sd,bsdfs:gd,iridescence_fragment:vd,bumpmap_pars_fragment:_d,clipping_planes_fragment:yd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Td,color_fragment:Hd,color_pars_fragment:Rd,color_pars_vertex:Ed,color_vertex:Pd,common:Ad,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Bd,displacementmap_vertex:Ld,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,colorspace_fragment:xd,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Fd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:jd,envmap_vertex:Wd,fog_vertex:Gd,fog_pars_vertex:zd,fog_fragment:Xd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:qd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:$d,lights_pars_begin:Jd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Qd,lights_phong_fragment:eu,lights_phong_pars_fragment:tu,lights_physical_fragment:nu,lights_physical_pars_fragment:iu,lights_fragment_begin:su,lights_fragment_maps:au,lights_fragment_end:ru,lightprobes_pars_fragment:ou,logdepthbuf_fragment:lu,logdepthbuf_pars_fragment:cu,logdepthbuf_pars_vertex:fu,logdepthbuf_vertex:du,map_fragment:uu,map_pars_fragment:hu,map_particle_fragment:pu,map_particle_pars_fragment:mu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:gu,morphinstance_vertex:vu,morphcolor_vertex:_u,morphnormal_vertex:yu,morphtarget_pars_vertex:bu,morphtarget_vertex:Mu,normal_fragment_begin:Tu,normal_fragment_maps:Hu,normal_pars_fragment:Ru,normal_pars_vertex:Eu,normal_vertex:Pu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Cu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:Lu,opaque_fragment:Iu,packing:Du,premultiplied_alpha_fragment:xu,project_vertex:Uu,dithering_fragment:Nu,dithering_pars_fragment:Ou,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:ku,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:Gu,shadowmap_vertex:zu,shadowmask_pars_fragment:Xu,skinbase_vertex:Vu,skinning_pars_vertex:Yu,skinning_vertex:qu,skinnormal_vertex:Ku,specularmap_fragment:$u,specularmap_pars_fragment:Ju,tonemapping_fragment:ju,tonemapping_pars_fragment:Zu,transmission_fragment:Qu,transmission_pars_fragment:eh,uv_pars_fragment:th,uv_pars_vertex:nh,uv_vertex:ih,worldpos_vertex:sh,background_vert:ah,background_frag:rh,backgroundCube_vert:oh,backgroundCube_frag:lh,cube_vert:ch,cube_frag:fh,depth_vert:dh,depth_frag:uh,distance_vert:hh,distance_frag:ph,equirect_vert:mh,equirect_frag:Sh,linedashed_vert:gh,linedashed_frag:vh,meshbasic_vert:_h,meshbasic_frag:yh,meshlambert_vert:bh,meshlambert_frag:Mh,meshmatcap_vert:Th,meshmatcap_frag:Hh,meshnormal_vert:Rh,meshnormal_frag:Eh,meshphong_vert:Ph,meshphong_frag:Ah,meshphysical_vert:Ch,meshphysical_frag:wh,meshtoon_vert:Bh,meshtoon_frag:Lh,points_vert:Ih,points_frag:Dh,shadow_vert:xh,shadow_frag:Uh,sprite_vert:Nh,sprite_frag:Oh},Se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ln={basic:{uniforms:xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:xt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:xt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:xt([Se.points,Se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:xt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:xt([Se.common,Se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:xt([Se.sprite,Se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:xt([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:xt([Se.lights,Se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ln.physical={uniforms:xt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Bs={r:0,b:0,g:0},Fh=new yt,ic=new xe;ic.set(-1,0,0,0,1,0,0,0,1);function kh(t,e,n,i,s,a){const r=new Je(0);let f=s===!0?0:1,c,o,l=null,u=0,d=null;function h(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const H=y.backgroundBlurriness>0;R=e.get(R,H)}return R}function p(y){let R=!1;const H=h(y);H===null?m(r,f):H&&H.isColor&&(m(H,1),R=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,R){const H=h(R);H&&(H.isCubeTexture||H.mapping===Qs)?(o===void 0&&(o=new pt(new Ht(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Di(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=H,o.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Fh.makeRotationFromEuler(R.backgroundRotation)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(ic),o.material.toneMapped=Xe.getTransfer(H.colorSpace)!==et,(l!==H||u!==H.version||d!==t.toneMapping)&&(o.material.needsUpdate=!0,l=H,u=H.version,d=t.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null)):H&&H.isTexture&&(c===void 0&&(c=new pt(new ea(2,2),new Sn({name:"BackgroundMaterial",uniforms:Di(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=H,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(H.colorSpace)!==et,H.matrixAutoUpdate===!0&&H.updateMatrix(),c.material.uniforms.uvTransform.value.copy(H.matrix),(l!==H||u!==H.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,l=H,u=H.version,d=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,R){y.getRGB(Bs,Ql(t)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,R,a)}function S(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,R=1){r.set(y),f=R,m(r,f)},getClearAlpha:function(){return f},setClearAlpha:function(y){f=y,m(r,f)},render:p,addToRenderList:g,dispose:S}}function Wh(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let a=s,r=!1;function f(P,I,G,q,D){let X=!1;const O=u(P,q,G,I);a!==O&&(a=O,o(a.object)),X=h(P,q,G,D),X&&p(P,q,G,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,H(P,I,G,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return t.createVertexArray()}function o(P){return t.bindVertexArray(P)}function l(P){return t.deleteVertexArray(P)}function u(P,I,G,q){const D=q.wireframe===!0;let X=i[I.id];X===void 0&&(X={},i[I.id]=X);const O=P.isInstancedMesh===!0?P.id:0;let ne=X[O];ne===void 0&&(ne={},X[O]=ne);let ie=ne[G.id];ie===void 0&&(ie={},ne[G.id]=ie);let ue=ie[D];return ue===void 0&&(ue=d(c()),ie[D]=ue),ue}function d(P){const I=[],G=[],q=[];for(let D=0;D<n;D++)I[D]=0,G[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:q,object:P,attributes:{},index:null}}function h(P,I,G,q){const D=a.attributes,X=I.attributes;let O=0;const ne=G.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const be=D[ie];let Te=X[ie];if(Te===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),be===void 0||be.attribute!==Te||Te&&be.data!==Te.data)return!0;O++}return a.attributesNum!==O||a.index!==q}function p(P,I,G,q){const D={},X=I.attributes;let O=0;const ne=G.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let be=X[ie];be===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(be=P.instanceColor));const Te={};Te.attribute=be,be&&be.data&&(Te.data=be.data),D[ie]=Te,O++}a.attributes=D,a.attributesNum=O,a.index=q}function g(){const P=a.newAttributes;for(let I=0,G=P.length;I<G;I++)P[I]=0}function m(P){S(P,0)}function S(P,I){const G=a.newAttributes,q=a.enabledAttributes,D=a.attributeDivisors;G[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),D[P]!==I&&(t.vertexAttribDivisor(P,I),D[P]=I)}function y(){const P=a.newAttributes,I=a.enabledAttributes;for(let G=0,q=I.length;G<q;G++)I[G]!==P[G]&&(t.disableVertexAttribArray(G),I[G]=0)}function R(P,I,G,q,D,X,O){O===!0?t.vertexAttribIPointer(P,I,G,D,X):t.vertexAttribPointer(P,I,G,q,D,X)}function H(P,I,G,q){g();const D=q.attributes,X=G.getAttributes(),O=I.defaultAttributeValues;for(const ne in X){const ie=X[ne];if(ie.location>=0){let ue=D[ne];if(ue===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const be=ue.normalized,Te=ue.itemSize,ze=e.get(ue);if(ze===void 0)continue;const Ze=ze.buffer,Ie=ze.type,K=ze.bytesPerElement,he=Ie===t.INT||Ie===t.UNSIGNED_INT||ue.gpuType===Gr;if(ue.isInterleavedBufferAttribute){const de=ue.data,Ae=de.stride,Le=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ie.locationSize;Ce++)S(ie.location+Ce,de.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ce=0;Ce<ie.locationSize;Ce++)m(ie.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Ce=0;Ce<ie.locationSize;Ce++)R(ie.location+Ce,Te/ie.locationSize,Ie,be,Ae*K,(Le+Te/ie.locationSize*Ce)*K,he)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<ie.locationSize;de++)S(ie.location+de,ue.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<ie.locationSize;de++)m(ie.location+de);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let de=0;de<ie.locationSize;de++)R(ie.location+de,Te/ie.locationSize,Ie,be,Te*K,Te/ie.locationSize*de*K,he)}}else if(O!==void 0){const be=O[ne];if(be!==void 0)switch(be.length){case 2:t.vertexAttrib2fv(ie.location,be);break;case 3:t.vertexAttrib3fv(ie.location,be);break;case 4:t.vertexAttrib4fv(ie.location,be);break;default:t.vertexAttrib1fv(ie.location,be)}}}}y()}function C(){M();for(const P in i){const I=i[P];for(const G in I){const q=I[G];for(const D in q){const X=q[D];for(const O in X)l(X[O].object),delete X[O];delete q[D]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const G in I){const q=I[G];for(const D in q){const X=q[D];for(const O in X)l(X[O].object),delete X[O];delete q[D]}}delete i[P.id]}function w(P){for(const I in i){const G=i[I];for(const q in G){const D=G[q];if(D[P.id]===void 0)continue;const X=D[P.id];for(const O in X)l(X[O].object),delete X[O];delete D[P.id]}}}function _(P){for(const I in i){const G=i[I],q=P.isInstancedMesh===!0?P.id:0,D=G[q];if(D!==void 0){for(const X in D){const O=D[X];for(const ne in O)l(O[ne].object),delete O[ne];delete D[X]}delete G[q],Object.keys(G).length===0&&delete i[I]}}}function M(){B(),r=!0,a!==s&&(a=s,o(a.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:M,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Gh(t,e,n){let i;function s(c){i=c}function a(c,o){t.drawArrays(i,c,o),n.update(o,i,1)}function r(c,o,l){l!==0&&(t.drawArraysInstanced(i,c,o,l),n.update(o,i,l))}function f(c,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,l);let d=0;for(let h=0;h<l;h++)d+=o[h];n.update(d,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=f}function zh(t,e,n,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==tn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(w){const _=w===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Vt&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!_)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const l=c(o);l!==o&&(Be("WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),H=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:f,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:S,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:H,maxSamples:C,samples:E}}function Xh(t){const e=this;let n=null,i=0,s=!1,a=!1;const r=new Qn,f=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||i!==0||s;return s=d,i=u.length,h},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){n=l(u,d,0)},this.setState=function(u,d,h){const p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,S=t.get(u);if(!s||p===null||p.length===0||a&&!m)a?l(null):o();else{const y=a?0:i,R=y*4;let H=S.clippingState||null;c.value=H,H=l(p,d,R,h);for(let C=0;C!==R;++C)H[C]=n[C];S.clippingState=H,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function o(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(u,d,h,p){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,p!==!0||m===null){const S=h+g*4,y=d.matrixWorldInverse;f.getNormalMatrix(y),(m===null||m.length<S)&&(m=new Float32Array(S));for(let R=0,H=h;R!==g;++R,H+=4)r.copy(u[R]).applyMatrix4(y,f),r.normal.toArray(m,H),m[H+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const zn=4,Jo=[.125,.215,.35,.446,.526,.582],ni=20,Vh=256,Xi=new eo,jo=new Je;let Ia=null,Da=0,xa=0,Ua=!1;const Yh=new F;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,a={}){const{size:r=256,position:f=Yh}=a;Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,f),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,xa),this._renderer.xr.enabled=Ua,e.scissorTest=!1,Ei(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Cn,format:tn,colorSpace:qs,depthBuffer:!1},s=Qo(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,n,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qh(a)),this._blurMaterial=$h(a,e,n),this._ggxMaterial=Kh(a,e,n)}return s}_compileMaterial(e){const n=new pt(new nn,e);this._renderer.compile(n,Xi)}_sceneToCubeUV(e,n,i,s,a){const c=new $t(90,1,n,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(jo),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Ht,new Jl({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let S=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,S=!0):(m.color.copy(jo),S=!0);for(let R=0;R<6;R++){const H=R%3;H===0?(c.up.set(0,o[R],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+l[R],a.y,a.z)):H===1?(c.up.set(0,0,o[R]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+l[R],a.z)):(c.up.set(0,o[R],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+l[R]));const C=this._cubeSize;Ei(s,H*C,R>2?C:0,C,C),u.setRenderTarget(s),S&&u.render(g,c),u.render(e,c)}u.toneMapping=h,u.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===oi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const f=a.uniforms;f.envMap.value=e;const c=this._cubeSize;Ei(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(r,Xi)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,f=this._lodMeshes[i];f.material=r;const c=r.uniforms,o=i/(this._lodMeshes.length-1),l=n/(this._lodMeshes.length-1),u=Math.sqrt(o*o-l*l),d=0+o*1.25,h=u*d,{_lodMax:p}=this,g=this._sizeLods[i],m=3*g*(i>p-zn?i-p+zn:0),S=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-n,Ei(a,m,S,3*g,2*g),s.setRenderTarget(a),s.render(f,Xi),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=p-i,Ei(e,m,S,3*g,2*g),s.setRenderTarget(e),s.render(f,Xi)}_blur(e,n,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,n,i,s,a,r,f){const c=this._renderer,o=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const l=3,u=this._lodMeshes[s];u.material=o;const d=o.uniforms,h=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*ni-1),g=a/p,m=isFinite(a)?1+Math.floor(l*g):ni;m>ni&&Be(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const S=[];let y=0;for(let w=0;w<ni;++w){const _=w/g,M=Math.exp(-_*_/2);S.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<S.length;w++)S[w]=S[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=S,d.latitudinal.value=r==="latitudinal",f&&(d.poleAxis.value=f);const{_lodMax:R}=this;d.dTheta.value=p,d.mipInt.value=R-i;const H=this._sizeLods[s],C=3*H*(s>R-zn?s-R+zn:0),E=4*(this._cubeSize-H);Ei(n,C,E,3*H,2*H),c.setRenderTarget(n),c.render(u,Xi)}}function qh(t){const e=[],n=[],i=[];let s=t;const a=t-zn+1+Jo.length;for(let r=0;r<a;r++){const f=Math.pow(2,s);e.push(f);let c=1/f;r>t-zn?c=Jo[r-t+zn-1]:r===0&&(c=0),n.push(c);const o=1/(f-2),l=-o,u=1+o,d=[l,l,u,l,u,u,l,l,u,u,l,u],h=6,p=6,g=3,m=2,S=1,y=new Float32Array(g*p*h),R=new Float32Array(m*p*h),H=new Float32Array(S*p*h);for(let E=0;E<h;E++){const w=E%3*2/3-1,_=E>2?0:-1,M=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];y.set(M,g*p*E),R.set(d,m*p*E);const B=[E,E,E,E,E,E];H.set(B,S*p*E)}const C=new nn;C.setAttribute("position",new pn(y,g)),C.setAttribute("uv",new pn(R,m)),C.setAttribute("faceIndex",new pn(H,S)),i.push(new pt(C,null)),s>zn&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Qo(t,e,n){const i=new hn(t,e,n);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ei(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Kh(t,e,n){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function $h(t,e,n){const i=new Float32Array(ni),s=new F(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function el(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function tl(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class sc extends hn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ht(5,5,5),a=new Sn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Pn});a.uniforms.tEquirect.value=n;const r=new pt(s,a),f=n.minFilter;return n.minFilter===si&&(n.minFilter=It),new td(1,10,this).update(e,r),n.minFilter=f,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,s);e.setRenderTarget(a)}}function Jh(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?r(d):a(d)}function a(d){if(d&&d.isTexture){const h=d.mapping;if(h===aa||h===ra)if(e.has(d)){const p=e.get(d).texture;return f(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new sc(p.height);return g.fromEquirectangularTexture(t,d),e.set(d,g),d.addEventListener("dispose",o),f(g.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===aa||h===ra,g=h===oi||h===Li;if(p||g){let m=n.get(d);const S=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Zo(t)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&c(y)?(i===null&&(i=new Zo(t)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",l),m.texture):null}}}return d}function f(d,h){return h===aa?d.mapping=oi:h===ra&&(d.mapping=Li),d}function c(d){let h=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&h++;return h===p}function o(d){const h=d.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function u(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function jh(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Lr("WebGLRenderer: "+i+" extension not supported."),s}}}function Zh(t,e,n,i){const s={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",r),delete s[d.id];const h=a.get(d);h&&(e.remove(h),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function f(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,n.memory.geometries++),d}function c(u){const d=u.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function o(u){const d=[],h=u.index,p=u.attributes.position;let g=0;if(p===void 0)return;if(h!==null){const y=h.array;g=h.version;for(let R=0,H=y.length;R<H;R+=3){const C=y[R+0],E=y[R+1],w=y[R+2];d.push(C,E,E,w,w,C)}}else{const y=p.array;g=p.version;for(let R=0,H=y.length/3-1;R<H;R+=3){const C=R+0,E=R+1,w=R+2;d.push(C,E,E,w,w,C)}}const m=new(p.count>=65535?$l:Kl)(d,1);m.version=g;const S=a.get(u);S&&e.remove(S),a.set(u,m)}function l(u){const d=a.get(u);if(d){const h=u.index;h!==null&&d.version<h.version&&o(u)}else o(u);return a.get(u)}return{get:f,update:c,getWireframeAttribute:l}}function Qh(t,e,n){let i;function s(u){i=u}let a,r;function f(u){a=u.type,r=u.bytesPerElement}function c(u,d){t.drawElements(i,d,a,u*r),n.update(d,i,1)}function o(u,d,h){h!==0&&(t.drawElementsInstanced(i,d,a,u*r,h),n.update(d,i,h))}function l(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,u,0,h);let g=0;for(let m=0;m<h;m++)g+=d[m];n.update(g,i,1)}this.setMode=s,this.setIndex=f,this.render=c,this.renderInstances=o,this.renderMultiDraw=l}function ep(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,f){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=f*(a/3);break;case t.LINES:n.lines+=f*(a/2);break;case t.LINE_STRIP:n.lines+=f*(a-1);break;case t.LINE_LOOP:n.lines+=f*a;break;case t.POINTS:n.points+=f*a;break;default:$e("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function tp(t,e,n){const i=new WeakMap,s=new mt;function a(r,f,c){const o=r.morphTargetInfluences,l=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,u=l!==void 0?l.length:0;let d=i.get(f);if(d===void 0||d.count!==u){let B=function(){_.dispose(),i.delete(f),f.removeEventListener("dispose",B)};var h=B;d!==void 0&&d.texture.dispose();const p=f.morphAttributes.position!==void 0,g=f.morphAttributes.normal!==void 0,m=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let H=0;p===!0&&(H=1),g===!0&&(H=2),m===!0&&(H=3);let C=f.attributes.position.count*H,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*E*4*u),_=new Vl(w,C,E,u);_.type=fn,_.needsUpdate=!0;const M=H*4;for(let P=0;P<u;P++){const I=S[P],G=y[P],q=R[P],D=C*E*4*P;for(let X=0;X<I.count;X++){const O=X*M;p===!0&&(s.fromBufferAttribute(I,X),w[D+O+0]=s.x,w[D+O+1]=s.y,w[D+O+2]=s.z,w[D+O+3]=0),g===!0&&(s.fromBufferAttribute(G,X),w[D+O+4]=s.x,w[D+O+5]=s.y,w[D+O+6]=s.z,w[D+O+7]=0),m===!0&&(s.fromBufferAttribute(q,X),w[D+O+8]=s.x,w[D+O+9]=s.y,w[D+O+10]=s.z,w[D+O+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new je(C,E)},i.set(f,d),f.addEventListener("dispose",B)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let p=0;for(let m=0;m<o.length;m++)p+=o[m];const g=f.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",o)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:a}}function np(t,e,n,i,s){let a=new WeakMap;function r(o){const l=s.render.frame,u=o.geometry,d=e.get(o,u);if(a.get(d)!==l&&(e.update(d),a.set(d,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),a.get(o)!==l&&(n.update(o.instanceMatrix,t.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,t.ARRAY_BUFFER),a.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;a.get(h)!==l&&(h.update(),a.set(h,l))}return d}function f(){a=new WeakMap}function c(o){const l=o.target;l.removeEventListener("dispose",c),i.releaseStatesOfObject(l),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:f}}const ip={[Cl]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Dl]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[Il]:"CUSTOM_TONE_MAPPING"};function sp(t,e,n,i,s){const a=new hn(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ii(e,n):void 0}),r=new hn(e,n,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),f=new nn;f.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const c=new Kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),o=new pt(f,c),l=new eo(-1,1,1,-1,0,1);let u=null,d=null,h=!1,p,g=null,m=[],S=!1;this.setSize=function(y,R){a.setSize(y,R),r.setSize(y,R);for(let H=0;H<m.length;H++){const C=m[H];C.setSize&&C.setSize(y,R)}},this.setEffects=function(y){m=y,S=m.length>0&&m[0].isRenderPass===!0;const R=a.width,H=a.height;for(let C=0;C<m.length;C++){const E=m[C];E.setSize&&E.setSize(R,H)}},this.begin=function(y,R){if(h||y.toneMapping===un&&m.length===0)return!1;if(g=R,R!==null){const H=R.width,C=R.height;(a.width!==H||a.height!==C)&&this.setSize(H,C)}return S===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=un,!0},this.hasRenderPass=function(){return S},this.end=function(y,R){y.toneMapping=p,h=!0;let H=a,C=r;for(let E=0;E<m.length;E++){const w=m[E];if(w.enabled!==!1&&(w.render(y,C,H,R),w.needsSwap!==!1)){const _=H;H=C,C=_}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,c.defines={},Xe.getTransfer(u)===et&&(c.defines.SRGB_TRANSFER="");const E=ip[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=H.texture,y.setRenderTarget(g),y.render(o,l),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),r.dispose(),f.dispose(),c.dispose()}}const ac=new Dt,Dr=new Ii(1,1),rc=new Vl,oc=new Hf,lc=new jl,nl=[],il=[],sl=new Float32Array(16),al=new Float32Array(9),rl=new Float32Array(4);function Oi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let a=nl[s];if(a===void 0&&(a=new Float32Array(s),nl[s]=a),e!==0){i.toArray(a,0);for(let r=1,f=0;r!==e;++r)f+=n,t[r].toArray(a,f)}return a}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function na(t,e){let n=il[e];n===void 0&&(n=new Int32Array(e),il[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ap(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function op(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function lp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function cp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Rt(n,i))return;rl.set(i),t.uniformMatrix2fv(this.addr,!1,rl),Et(n,i)}}function fp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Rt(n,i))return;al.set(i),t.uniformMatrix3fv(this.addr,!1,al),Et(n,i)}}function dp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Rt(n,i))return;sl.set(i),t.uniformMatrix4fv(this.addr,!1,sl),Et(n,i)}}function up(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function pp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function mp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Sp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function vp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function _p(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function yp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let a;this.type===t.SAMPLER_2D_SHADOW?(Dr.compareFunction=n.isReversedDepthBuffer()?$r:Kr,a=Dr):a=ac,n.setTexture2D(e||a,s)}function bp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||oc,s)}function Mp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||lc,s)}function Tp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||rc,s)}function Hp(t){switch(t){case 5126:return ap;case 35664:return rp;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return up;case 35667:case 35671:return hp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return Sp;case 36294:return gp;case 36295:return vp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Rp(t,e){t.uniform1fv(this.addr,e)}function Ep(t,e){const n=Oi(e,this.size,2);t.uniform2fv(this.addr,n)}function Pp(t,e){const n=Oi(e,this.size,3);t.uniform3fv(this.addr,n)}function Ap(t,e){const n=Oi(e,this.size,4);t.uniform4fv(this.addr,n)}function Cp(t,e){const n=Oi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wp(t,e){const n=Oi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bp(t,e){const n=Oi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lp(t,e){t.uniform1iv(this.addr,e)}function Ip(t,e){t.uniform2iv(this.addr,e)}function Dp(t,e){t.uniform3iv(this.addr,e)}function xp(t,e){t.uniform4iv(this.addr,e)}function Up(t,e){t.uniform1uiv(this.addr,e)}function Np(t,e){t.uniform2uiv(this.addr,e)}function Op(t,e){t.uniform3uiv(this.addr,e)}function Fp(t,e){t.uniform4uiv(this.addr,e)}function kp(t,e,n){const i=this.cache,s=e.length,a=na(n,s);Rt(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));let r;this.type===t.SAMPLER_2D_SHADOW?r=Dr:r=ac;for(let f=0;f!==s;++f)n.setTexture2D(e[f]||r,a[f])}function Wp(t,e,n){const i=this.cache,s=e.length,a=na(n,s);Rt(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)n.setTexture3D(e[r]||oc,a[r])}function Gp(t,e,n){const i=this.cache,s=e.length,a=na(n,s);Rt(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)n.setTextureCube(e[r]||lc,a[r])}function zp(t,e,n){const i=this.cache,s=e.length,a=na(n,s);Rt(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(e[r]||rc,a[r])}function Xp(t){switch(t){case 5126:return Rp;case 35664:return Ep;case 35665:return Pp;case 35666:return Ap;case 35674:return Cp;case 35675:return wp;case 35676:return Bp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Dp;case 35669:case 35673:return xp;case 5125:return Up;case 36294:return Np;case 36295:return Op;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return zp}}class Vp{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Hp(n.type)}}class Yp{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xp(n.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const f=s[a];f.setValue(e,n[f.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function ol(t,e){t.seq.push(e),t.map[e.id]=e}function Kp(t,e,n){const i=t.name,s=i.length;for(Na.lastIndex=0;;){const a=Na.exec(i),r=Na.lastIndex;let f=a[1];const c=a[2]==="]",o=a[3];if(c&&(f=f|0),o===void 0||o==="["&&r+2===s){ol(n,o===void 0?new Vp(f,t,e):new Yp(f,t,e));break}else{let u=n.map[f];u===void 0&&(u=new qp(f),ol(n,u)),n=u}}}class zs{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const f=e.getActiveUniform(n,r),c=e.getUniformLocation(n,f.name);Kp(f,c,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,n,i,s){const a=this.map[n];a!==void 0&&a.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let a=0,r=n.length;a!==r;++a){const f=n[a],c=i[f.id];c.needsUpdate!==!1&&f.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in n&&i.push(r)}return i}}function ll(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $p=37297;let Jp=0;function jp(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let r=s;r<a;r++){const f=r+1;i.push(`${f===e?">":" "} ${f}: ${n[r]}`)}return i.join(`
`)}const cl=new xe;function Zp(t){Xe._getMatrix(cl,Xe.workingColorSpace,t);const e=`mat3( ${cl.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Ks:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function fl(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const f=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+jp(t.getShaderSource(e),f)}else return a}function Qp(t,e){const n=Zp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const e0={[Cl]:"Linear",[wl]:"Reinhard",[Bl]:"Cineon",[Ll]:"ACESFilmic",[Dl]:"AgX",[xl]:"Neutral",[Il]:"Custom"};function t0(t,e){const n=e0[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ls=new F;function n0(){Xe.getLuminanceCoefficients(Ls);const t=Ls.x.toFixed(4),e=Ls.y.toFixed(4),n=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function s0(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function a0(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=t.getActiveAttrib(e,s),r=a.name;let f=1;a.type===t.FLOAT_MAT2&&(f=2),a.type===t.FLOAT_MAT3&&(f=3),a.type===t.FLOAT_MAT4&&(f=4),n[r]={type:a.type,location:t.getAttribLocation(e,r),locationSize:f}}return n}function $i(t){return t!==""}function dl(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xr(t){return t.replace(r0,l0)}const o0=new Map;function l0(t,e){let n=Oe[e];if(n===void 0){const i=o0.get(e);if(i!==void 0)n=Oe[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xr(n)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(t){return t.replace(c0,f0)}function f0(t,e,n,i){let s="";for(let a=parseInt(e);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function pl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const d0={[Os]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function u0(t){return d0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h0={[oi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function p0(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":h0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const m0={[Li]:"ENVMAP_MODE_REFRACTION"};function S0(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":m0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g0={[Al]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function v0(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":g0[t.combine]||"ENVMAP_BLENDING_NONE"}function _0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function y0(t,e,n,i){const s=t.getContext(),a=n.defines;let r=n.vertexShader,f=n.fragmentShader;const c=u0(n),o=p0(n),l=S0(n),u=v0(n),d=_0(n),h=i0(n),p=s0(a),g=s.createProgram();let m,S,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter($i).join(`
`),m.length>0&&(m+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter($i).join(`
`),S.length>0&&(S+=`
`)):(m=[pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),S=[pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+o:"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==un?"#define TONE_MAPPING":"",n.toneMapping!==un?Oe.tonemapping_pars_fragment:"",n.toneMapping!==un?t0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Qp("linearToOutputTexel",n.outputColorSpace),n0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($i).join(`
`)),r=xr(r),r=dl(r,n),r=ul(r,n),f=xr(f),f=dl(f,n),f=ul(f,n),r=hl(r),f=hl(f),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["#define varying in",n.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const R=y+m+r,H=y+S+f,C=ll(s,s.VERTEX_SHADER,R),E=ll(s,s.FRAGMENT_SHADER,H);s.attachShader(g,C),s.attachShader(g,E),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(t.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(E)||"",D=I.trim(),X=G.trim(),O=q.trim();let ne=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,C,E);else{const ue=fl(s,C,"vertex"),be=fl(s,E,"fragment");$e("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+ue+`
`+be)}else D!==""?Be("WebGLProgram: Program Info Log:",D):(X===""||O==="")&&(ie=!1);ie&&(P.diagnostics={runnable:ne,programLog:D,vertexShader:{log:X,prefix:m},fragmentShader:{log:O,prefix:S}})}s.deleteShader(C),s.deleteShader(E),_=new zs(s,g),M=a0(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,$p)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=E,this}let b0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new T0(e),n.set(e,i)),i}}class T0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function H0(t){return t===li||t===Vs||t===Ys}function R0(t,e,n,i,s,a){const r=new Yl,f=new M0,c=new Set,o=[],l=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,B,P,I,G){const q=P.fog,D=I.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||X,O),ie=ne&&ne.mapping===Qs?ne.image.height:null,ue=h[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const be=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Te=be!==void 0?be.length:0;let ze=0;D.morphAttributes.position!==void 0&&(ze=1),D.morphAttributes.normal!==void 0&&(ze=2),D.morphAttributes.color!==void 0&&(ze=3);let Ze,Ie,K,he;if(ue){const Ue=ln[ue];Ze=Ue.vertexShader,Ie=Ue.fragmentShader}else Ze=_.vertexShader,Ie=_.fragmentShader,f.update(_),K=f.getVertexShaderID(_),he=f.getFragmentShaderID(_);const de=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,rt=!!_.map,ke=!!_.matcap,Qe=!!ne,it=!!_.aoMap,We=!!_.lightMap,dt=!!_.bumpMap,ot=!!_.normalMap,ct=!!_.displacementMap,L=!!_.emissiveMap,ut=!!_.metalnessMap,we=!!_.roughnessMap,Ge=_.anisotropy>0,re=_.clearcoat>0,qe=_.dispersion>0,T=_.iridescence>0,v=_.sheen>0,N=_.transmission>0,Z=Ge&&!!_.anisotropyMap,te=re&&!!_.clearcoatMap,le=re&&!!_.clearcoatNormalMap,ce=re&&!!_.clearcoatRoughnessMap,$=T&&!!_.iridescenceMap,Q=T&&!!_.iridescenceThicknessMap,me=v&&!!_.sheenColorMap,J=v&&!!_.sheenRoughnessMap,Y=!!_.specularMap,j=!!_.specularColorMap,ae=!!_.specularIntensityMap,x=N&&!!_.transmissionMap,oe=N&&!!_.thicknessMap,A=!!_.gradientMap,ee=!!_.alphaMap,z=_.alphaTest>0,pe=!!_.alphaHash,fe=!!_.extensions;let se=un;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(se=t.toneMapping);const He={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:Ze,fragmentShader:Ie,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:ke,envMap:Qe,envMapMode:Qe&&ne.mapping,envMapCubeUVHeight:ie,aoMap:it,lightMap:We,bumpMap:dt,normalMap:ot,displacementMap:ct,emissiveMap:L,normalMapObjectSpace:ot&&_.normalMapType===of,normalMapTangentSpace:ot&&_.normalMapType===Br,packedNormalMap:ot&&_.normalMapType===Br&&H0(_.normalMap.format),metalnessMap:ut,roughnessMap:we,anisotropy:Ge,anisotropyMap:Z,clearcoat:re,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:ce,dispersion:qe,iridescence:T,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:me,sheenRoughnessMap:J,specularMap:Y,specularColorMap:j,specularIntensityMap:ae,transmission:N,transmissionMap:x,thicknessMap:oe,gradientMap:A,opaque:_.transparent===!1&&_.blending===Ai&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:z,alphaHash:pe,combine:_.combine,mapUv:rt&&p(_.map.channel),aoMapUv:it&&p(_.aoMap.channel),lightMapUv:We&&p(_.lightMap.channel),bumpMapUv:dt&&p(_.bumpMap.channel),normalMapUv:ot&&p(_.normalMap.channel),displacementMapUv:ct&&p(_.displacementMap.channel),emissiveMapUv:L&&p(_.emissiveMap.channel),metalnessMapUv:ut&&p(_.metalnessMap.channel),roughnessMapUv:we&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:te&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(_.sheenRoughnessMap.channel),specularMapUv:Y&&p(_.specularMap.channel),specularColorMapUv:j&&p(_.specularColorMap.channel),specularIntensityMapUv:ae&&p(_.specularIntensityMap.channel),transmissionMapUv:x&&p(_.transmissionMap.channel),thicknessMapUv:oe&&p(_.thicknessMap.channel),alphaMapUv:ee&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ot||Ge),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(rt||ee),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:L&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function m(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)M.push(B),M.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(S(M,_),y(M,_),M.push(t.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),_.push(r.mask)}function R(_){const M=h[_.type];let B;if(M){const P=ln[M];B=Vf.clone(P.uniforms)}else B=_.uniforms;return B}function H(_,M){let B=l.get(M);return B!==void 0?++B.usedTimes:(B=new y0(t,M,_,s),o.push(B),l.set(M,B)),B}function C(_){if(--_.usedTimes===0){const M=o.indexOf(_);o[M]=o[o.length-1],o.pop(),l.delete(_.cacheKey),_.destroy()}}function E(_){f.remove(_)}function w(){f.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:R,acquireProgram:H,releaseProgram:C,releaseShaderCache:E,programs:o,dispose:w}}function E0(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let f=t.get(r);return f===void 0&&(f={},t.set(r,f)),f}function i(r){t.delete(r)}function s(r,f,c){t.get(r)[f]=c}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:a}}function P0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ml(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sl(){const t=[];let e=0;const n=[],i=[],s=[];function a(){e=0,n.length=0,i.length=0,s.length=0}function r(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function f(d,h,p,g,m,S){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:p,materialVariant:r(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:S},t[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=p,y.materialVariant=r(d),y.groupOrder=g,y.renderOrder=d.renderOrder,y.z=m,y.group=S),e++,y}function c(d,h,p,g,m,S){const y=f(d,h,p,g,m,S);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):n.push(y)}function o(d,h,p,g,m,S){const y=f(d,h,p,g,m,S);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):n.unshift(y)}function l(d,h){n.length>1&&n.sort(d||P0),i.length>1&&i.sort(h||ml),s.length>1&&s.sort(h||ml)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:c,unshift:o,finish:u,sort:l}}function A0(){let t=new WeakMap;function e(i,s){const a=t.get(i);let r;return a===void 0?(r=new Sl,t.set(i,[r])):s>=a.length?(r=new Sl,a.push(r)):r=a[s],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function C0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Je};break;case"SpotLight":n={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function w0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B0=0;function L0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function I0(t){const e=new C0,n=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new F);const s=new F,a=new yt,r=new yt;function f(o){let l=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,p=0,g=0,m=0,S=0,y=0,R=0,H=0,C=0,E=0,w=0;o.sort(L0);for(let M=0,B=o.length;M<B;M++){const P=o[M],I=P.color,G=P.intensity,q=P.distance;let D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===li?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=I.r*G,u+=I.g*G,d+=I.b*G;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],G);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,ne=n.get(P);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=D,i.directionalShadowMatrix[h]=P.shadow.matrix,y++}i.directional[h]=X,h++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(G),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[g]=X;const O=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,O.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[g]=O.matrix,P.castShadow){const ne=n.get(P);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.spotShadow[g]=ne,i.spotShadowMap[g]=D,H++}g++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(I).multiplyScalar(G),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const O=P.shadow,ne=n.get(P);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,ne.shadowCameraNear=O.camera.near,ne.shadowCameraFar=O.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=P.shadow.matrix,R++}i.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(G),X.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[S]=X,S++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==h||_.pointLength!==p||_.spotLength!==g||_.rectAreaLength!==m||_.hemiLength!==S||_.numDirectionalShadows!==y||_.numPointShadows!==R||_.numSpotShadows!==H||_.numSpotMaps!==C||_.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=H,i.spotShadowMap.length=H,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=H+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,_.directionalLength=h,_.pointLength=p,_.spotLength=g,_.rectAreaLength=m,_.hemiLength=S,_.numDirectionalShadows=y,_.numPointShadows=R,_.numSpotShadows=H,_.numSpotMaps=C,_.numLightProbes=w,i.version=B0++)}function c(o,l){let u=0,d=0,h=0,p=0,g=0;const m=l.matrixWorldInverse;for(let S=0,y=o.length;S<y;S++){const R=o[S];if(R.isDirectionalLight){const H=i.directional[u];H.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(m),u++}else if(R.isSpotLight){const H=i.spot[h];H.position.setFromMatrixPosition(R.matrixWorld),H.position.applyMatrix4(m),H.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(m),h++}else if(R.isRectAreaLight){const H=i.rectArea[p];H.position.setFromMatrixPosition(R.matrixWorld),H.position.applyMatrix4(m),r.identity(),a.copy(R.matrixWorld),a.premultiply(m),r.extractRotation(a),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),H.halfWidth.applyMatrix4(r),H.halfHeight.applyMatrix4(r),p++}else if(R.isPointLight){const H=i.point[d];H.position.setFromMatrixPosition(R.matrixWorld),H.position.applyMatrix4(m),d++}else if(R.isHemisphereLight){const H=i.hemi[g];H.direction.setFromMatrixPosition(R.matrixWorld),H.direction.transformDirection(m),g++}}}return{setup:f,setupView:c,state:i}}function gl(t){const e=new I0(t),n=[],i=[],s=[];function a(d){u.camera=d,n.length=0,i.length=0,s.length=0}function r(d){n.push(d)}function f(d){i.push(d)}function c(d){s.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:f,pushLightProbeGrid:c}}function D0(t){let e=new WeakMap;function n(s,a=0){const r=e.get(s);let f;return r===void 0?(f=new gl(t),e.set(s,[f])):a>=r.length?(f=new gl(t),r.push(f)):f=r[a],f}function i(){e=new WeakMap}return{get:n,dispose:i}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],O0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],vl=new yt,Vi=new F,Oa=new F;function F0(t,e,n){let i=new Zr;const s=new je,a=new je,r=new mt,f=new $f,c=new Jf,o={},l=n.maxTextureSize,u={[Vn]:Wt,[Wt]:Vn,[Tn]:Tn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:x0,fragmentShader:U0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new nn;p.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let S=this.type;this.render=function(E,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Nc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Os);const M=t.getRenderTarget(),B=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Pn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=S!==this.type;G&&w.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(D=>D.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,D=E.length;q<D;q++){const X=E[q],O=X.shadow;if(O===void 0){Be("WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ne=O.getFrameExtents();s.multiply(ne),a.copy(O.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(a.x=Math.floor(l/ne.x),s.x=a.x*ne.x,O.mapSize.x=a.x),s.y>l&&(a.y=Math.floor(l/ne.y),s.y=a.y*ne.y,O.mapSize.y=a.y));const ie=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ie,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ki){if(X.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hn(s.x,s.y,{format:li,type:Cn,minFilter:It,magFilter:It,generateMipmaps:!1}),O.map.texture.name=X.name+".shadowMap",O.map.depthTexture=new Ii(s.x,s.y,fn),O.map.depthTexture.name=X.name+".shadowMapDepth",O.map.depthTexture.format=wn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ft,O.map.depthTexture.magFilter=ft}else X.isPointLight?(O.map=new sc(s.x),O.map.depthTexture=new zf(s.x,mn)):(O.map=new hn(s.x,s.y),O.map.depthTexture=new Ii(s.x,s.y,mn)),O.map.depthTexture.name=X.name+".shadowMap",O.map.depthTexture.format=wn,this.type===Os?(O.map.depthTexture.compareFunction=ie?$r:Kr,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ft,O.map.depthTexture.magFilter=ft);O.camera.updateProjectionMatrix()}const ue=O.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<ue;be++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,be),t.clear();else{be===0&&(t.setRenderTarget(O.map),t.clear());const Te=O.getViewport(be);r.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),I.viewport(r)}if(X.isPointLight){const Te=O.camera,ze=O.matrix,Ze=X.distance||Te.far;Ze!==Te.far&&(Te.far=Ze,Te.updateProjectionMatrix()),Vi.setFromMatrixPosition(X.matrixWorld),Te.position.copy(Vi),Oa.copy(Te.position),Oa.add(N0[be]),Te.up.copy(O0[be]),Te.lookAt(Oa),Te.updateMatrixWorld(),ze.makeTranslation(-Vi.x,-Vi.y,-Vi.z),vl.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vl,Te.coordinateSystem,Te.reversedDepth)}else O.updateMatrices(X);i=O.getFrustum(),H(w,_,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===Ki&&y(O,_),O.needsUpdate=!1}S=this.type,m.needsUpdate=!1,t.setRenderTarget(M,B,P)};function y(E,w){const _=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hn(s.x,s.y,{format:li,type:Cn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,_,d,g,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,_,h,g,null)}function R(E,w,_,M){let B=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)B=P;else if(B=_.isPointLight===!0?c:f,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=B.uuid,G=w.uuid;let q=o[I];q===void 0&&(q={},o[I]=q);let D=q[G];D===void 0&&(D=B.clone(),q[G]=D,w.addEventListener("dispose",C)),B=D}if(B.visible=w.visible,B.wireframe=w.wireframe,M===Ki?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:u[w.side],B.alphaMap=w.alphaMap,B.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,B.map=w.map,B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.displacementMap=w.displacementMap,B.displacementScale=w.displacementScale,B.displacementBias=w.displacementBias,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,_.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const I=t.properties.get(B);I.light=_}return B}function H(E,w,_,M,B){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===Ki)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=e.update(E),q=E.material;if(Array.isArray(q)){const D=G.groups;for(let X=0,O=D.length;X<O;X++){const ne=D[X],ie=q[ne.materialIndex];if(ie&&ie.visible){const ue=R(E,ie,M,B);E.onBeforeShadow(t,E,w,_,G,ue,ne),t.renderBufferDirect(_,null,G,ue,E,ne),E.onAfterShadow(t,E,w,_,G,ue,ne)}}}else if(q.visible){const D=R(E,q,M,B);E.onBeforeShadow(t,E,w,_,G,D,null),t.renderBufferDirect(_,null,G,D,E,null),E.onAfterShadow(t,E,w,_,G,D,null)}}const I=E.children;for(let G=0,q=I.length;G<q;G++)H(I[G],w,_,M,B)}function C(E){E.target.removeEventListener("dispose",C);for(const _ in o){const M=o[_],B=E.target.uuid;B in M&&(M[B].dispose(),delete M[B])}}}function k0(t,e){function n(){let A=!1;const ee=new mt;let z=null;const pe=new mt(0,0,0,0);return{setMask:function(fe){z!==fe&&!A&&(t.colorMask(fe,fe,fe,fe),z=fe)},setLocked:function(fe){A=fe},setClear:function(fe,se,He,Ue,St){St===!0&&(fe*=Ue,se*=Ue,He*=Ue),ee.set(fe,se,He,Ue),pe.equals(ee)===!1&&(t.clearColor(fe,se,He,Ue),pe.copy(ee))},reset:function(){A=!1,z=null,pe.set(-1,0,0,0)}}}function i(){let A=!1,ee=!1,z=null,pe=null,fe=null;return{setReversed:function(se){if(ee!==se){const He=e.get("EXT_clip_control");se?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ee=se;const Ue=fe;fe=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(se){se?de(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(se){z!==se&&!A&&(t.depthMask(se),z=se)},setFunc:function(se){if(ee&&(se=gf[se]),pe!==se){switch(se){case Ya:t.depthFunc(t.NEVER);break;case qa:t.depthFunc(t.ALWAYS);break;case Ka:t.depthFunc(t.LESS);break;case Bi:t.depthFunc(t.LEQUAL);break;case $a:t.depthFunc(t.EQUAL);break;case Ja:t.depthFunc(t.GEQUAL);break;case ja:t.depthFunc(t.GREATER);break;case Za:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=se}},setLocked:function(se){A=se},setClear:function(se){fe!==se&&(fe=se,ee&&(se=1-se),t.clearDepth(se))},reset:function(){A=!1,z=null,pe=null,fe=null,ee=!1}}}function s(){let A=!1,ee=null,z=null,pe=null,fe=null,se=null,He=null,Ue=null,St=null;return{setTest:function(tt){A||(tt?de(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!A&&(t.stencilMask(tt),ee=tt)},setFunc:function(tt,gn,sn){(z!==tt||pe!==gn||fe!==sn)&&(t.stencilFunc(tt,gn,sn),z=tt,pe=gn,fe=sn)},setOp:function(tt,gn,sn){(se!==tt||He!==gn||Ue!==sn)&&(t.stencilOp(tt,gn,sn),se=tt,He=gn,Ue=sn)},setLocked:function(tt){A=tt},setClear:function(tt){St!==tt&&(t.clearStencil(tt),St=tt)},reset:function(){A=!1,ee=null,z=null,pe=null,fe=null,se=null,He=null,Ue=null,St=null}}}const a=new n,r=new i,f=new s,c=new WeakMap,o=new WeakMap;let l={},u={},d={},h=new WeakMap,p=[],g=null,m=!1,S=null,y=null,R=null,H=null,C=null,E=null,w=null,_=new Je(0,0,0),M=0,B=!1,P=null,I=null,G=null,q=null,D=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,ne=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),O=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),O=ne>=2);let ue=null,be={};const Te=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ze=new mt().fromArray(Te),Ie=new mt().fromArray(ze);function K(A,ee,z,pe){const fe=new Uint8Array(4),se=t.createTexture();t.bindTexture(A,se),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<z;He++)A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ee+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return se}const he={};he[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),f.setClear(0),de(t.DEPTH_TEST),r.setFunc(Bi),dt(!1),ot(yo),de(t.CULL_FACE),it(Pn);function de(A){l[A]!==!0&&(t.enable(A),l[A]=!0)}function Ae(A){l[A]!==!1&&(t.disable(A),l[A]=!1)}function Le(A,ee){return d[A]!==ee?(t.bindFramebuffer(A,ee),d[A]=ee,A===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ee),A===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ce(A,ee){let z=p,pe=!1;if(A){z=h.get(ee),z===void 0&&(z=[],h.set(ee,z));const fe=A.textures;if(z.length!==fe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let se=0,He=fe.length;se<He;se++)z[se]=t.COLOR_ATTACHMENT0+se;z.length=fe.length,pe=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,pe=!0);pe&&t.drawBuffers(z)}function rt(A){return g!==A?(t.useProgram(A),g=A,!0):!1}const ke={[ei]:t.FUNC_ADD,[Fc]:t.FUNC_SUBTRACT,[kc]:t.FUNC_REVERSE_SUBTRACT};ke[Wc]=t.MIN,ke[Gc]=t.MAX;const Qe={[zc]:t.ZERO,[Xc]:t.ONE,[Vc]:t.SRC_COLOR,[Xa]:t.SRC_ALPHA,[jc]:t.SRC_ALPHA_SATURATE,[$c]:t.DST_COLOR,[qc]:t.DST_ALPHA,[Yc]:t.ONE_MINUS_SRC_COLOR,[Va]:t.ONE_MINUS_SRC_ALPHA,[Jc]:t.ONE_MINUS_DST_COLOR,[Kc]:t.ONE_MINUS_DST_ALPHA,[Zc]:t.CONSTANT_COLOR,[Qc]:t.ONE_MINUS_CONSTANT_COLOR,[ef]:t.CONSTANT_ALPHA,[tf]:t.ONE_MINUS_CONSTANT_ALPHA};function it(A,ee,z,pe,fe,se,He,Ue,St,tt){if(A===Pn){m===!0&&(Ae(t.BLEND),m=!1);return}if(m===!1&&(de(t.BLEND),m=!0),A!==Oc){if(A!==S||tt!==B){if((y!==ei||C!==ei)&&(t.blendEquation(t.FUNC_ADD),y=ei,C=ei),tt)switch(A){case Ai:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bo:t.blendFunc(t.ONE,t.ONE);break;case Mo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case To:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",A);break}else switch(A){case Ai:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Mo:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case To:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",A);break}R=null,H=null,E=null,w=null,_.set(0,0,0),M=0,S=A,B=tt}return}fe=fe||ee,se=se||z,He=He||pe,(ee!==y||fe!==C)&&(t.blendEquationSeparate(ke[ee],ke[fe]),y=ee,C=fe),(z!==R||pe!==H||se!==E||He!==w)&&(t.blendFuncSeparate(Qe[z],Qe[pe],Qe[se],Qe[He]),R=z,H=pe,E=se,w=He),(Ue.equals(_)===!1||St!==M)&&(t.blendColor(Ue.r,Ue.g,Ue.b,St),_.copy(Ue),M=St),S=A,B=!1}function We(A,ee){A.side===Tn?Ae(t.CULL_FACE):de(t.CULL_FACE);let z=A.side===Wt;ee&&(z=!z),dt(z),A.blending===Ai&&A.transparent===!1?it(Pn):it(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),a.setMask(A.colorWrite);const pe=A.stencilWrite;f.setTest(pe),pe&&(f.setMask(A.stencilWriteMask),f.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),f.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),L(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function dt(A){P!==A&&(A?t.frontFace(t.CW):t.frontFace(t.CCW),P=A)}function ot(A){A!==xc?(de(t.CULL_FACE),A!==I&&(A===yo?t.cullFace(t.BACK):A===Uc?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),I=A}function ct(A){A!==G&&(O&&t.lineWidth(A),G=A)}function L(A,ee,z){A?(de(t.POLYGON_OFFSET_FILL),(q!==ee||D!==z)&&(q=ee,D=z,r.getReversed()&&(ee=-ee),t.polygonOffset(ee,z))):Ae(t.POLYGON_OFFSET_FILL)}function ut(A){A?de(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function we(A){A===void 0&&(A=t.TEXTURE0+X-1),ue!==A&&(t.activeTexture(A),ue=A)}function Ge(A,ee,z){z===void 0&&(ue===null?z=t.TEXTURE0+X-1:z=ue);let pe=be[z];pe===void 0&&(pe={type:void 0,texture:void 0},be[z]=pe),(pe.type!==A||pe.texture!==ee)&&(ue!==z&&(t.activeTexture(z),ue=z),t.bindTexture(A,ee||he[A]),pe.type=A,pe.texture=ee)}function re(){const A=be[ue];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function qe(){try{t.compressedTexImage2D(...arguments)}catch(A){$e("WebGLState:",A)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(A){$e("WebGLState:",A)}}function v(){try{t.texSubImage2D(...arguments)}catch(A){$e("WebGLState:",A)}}function N(){try{t.texSubImage3D(...arguments)}catch(A){$e("WebGLState:",A)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(A){$e("WebGLState:",A)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(A){$e("WebGLState:",A)}}function le(){try{t.texStorage2D(...arguments)}catch(A){$e("WebGLState:",A)}}function ce(){try{t.texStorage3D(...arguments)}catch(A){$e("WebGLState:",A)}}function $(){try{t.texImage2D(...arguments)}catch(A){$e("WebGLState:",A)}}function Q(){try{t.texImage3D(...arguments)}catch(A){$e("WebGLState:",A)}}function me(A){return u[A]!==void 0?u[A]:t.getParameter(A)}function J(A,ee){u[A]!==ee&&(t.pixelStorei(A,ee),u[A]=ee)}function Y(A){Ze.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),Ze.copy(A))}function j(A){Ie.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),Ie.copy(A))}function ae(A,ee){let z=o.get(ee);z===void 0&&(z=new WeakMap,o.set(ee,z));let pe=z.get(A);pe===void 0&&(pe=t.getUniformBlockIndex(ee,A.name),z.set(A,pe))}function x(A,ee){const pe=o.get(ee).get(A);c.get(ee)!==pe&&(t.uniformBlockBinding(ee,pe,A.__bindingPointIndex),c.set(ee,pe))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),l={},u={},ue=null,be={},d={},h=new WeakMap,p=[],g=null,m=!1,S=null,y=null,R=null,H=null,C=null,E=null,w=null,_=new Je(0,0,0),M=0,B=!1,P=null,I=null,G=null,q=null,D=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),r.reset(),f.reset()}return{buffers:{color:a,depth:r,stencil:f},enable:de,disable:Ae,bindFramebuffer:Le,drawBuffers:Ce,useProgram:rt,setBlending:it,setMaterial:We,setFlipSided:dt,setCullFace:ot,setLineWidth:ct,setPolygonOffset:L,setScissorTest:ut,activeTexture:we,bindTexture:Ge,unbindTexture:re,compressedTexImage2D:qe,compressedTexImage3D:T,texImage2D:$,texImage3D:Q,pixelStorei:J,getParameter:me,updateUBOMapping:ae,uniformBlockBinding:x,texStorage2D:le,texStorage3D:ce,texSubImage2D:v,texSubImage3D:N,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Y,viewport:j,reset:oe}}function W0(t,e,n,i,s,a,r){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new je,l=new WeakMap,u=new Set;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):$s("canvas")}function m(T,v,N){let Z=1;const te=qe(T);if((te.width>N||te.height>N)&&(Z=N/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const le=Math.floor(Z*te.width),ce=Math.floor(Z*te.height);d===void 0&&(d=g(le,ce));const $=v?g(le,ce):d;return $.width=le,$.height=ce,$.getContext("2d").drawImage(T,0,0,le,ce),Be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+le+"x"+ce+")."),$}else return"data"in T&&Be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function S(T){return T.generateMipmaps}function y(T){t.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function H(T,v,N,Z,te,le=!1){if(T!==null){if(t[T]!==void 0)return t[T];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce;Z&&(ce=e.get("EXT_texture_norm16"),ce||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===t.RED&&(N===t.FLOAT&&($=t.R32F),N===t.HALF_FLOAT&&($=t.R16F),N===t.UNSIGNED_BYTE&&($=t.R8),N===t.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),N===t.SHORT&&ce&&($=ce.R16_SNORM_EXT)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.R8UI),N===t.UNSIGNED_SHORT&&($=t.R16UI),N===t.UNSIGNED_INT&&($=t.R32UI),N===t.BYTE&&($=t.R8I),N===t.SHORT&&($=t.R16I),N===t.INT&&($=t.R32I)),v===t.RG&&(N===t.FLOAT&&($=t.RG32F),N===t.HALF_FLOAT&&($=t.RG16F),N===t.UNSIGNED_BYTE&&($=t.RG8),N===t.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),N===t.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RG8UI),N===t.UNSIGNED_SHORT&&($=t.RG16UI),N===t.UNSIGNED_INT&&($=t.RG32UI),N===t.BYTE&&($=t.RG8I),N===t.SHORT&&($=t.RG16I),N===t.INT&&($=t.RG32I)),v===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGB8UI),N===t.UNSIGNED_SHORT&&($=t.RGB16UI),N===t.UNSIGNED_INT&&($=t.RGB32UI),N===t.BYTE&&($=t.RGB8I),N===t.SHORT&&($=t.RGB16I),N===t.INT&&($=t.RGB32I)),v===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGBA8UI),N===t.UNSIGNED_SHORT&&($=t.RGBA16UI),N===t.UNSIGNED_INT&&($=t.RGBA32UI),N===t.BYTE&&($=t.RGBA8I),N===t.SHORT&&($=t.RGBA16I),N===t.INT&&($=t.RGBA32I)),v===t.RGB&&(N===t.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),N===t.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),v===t.RGBA){const Q=le?Ks:Xe.getTransfer(te);N===t.FLOAT&&($=t.RGBA32F),N===t.HALF_FLOAT&&($=t.RGBA16F),N===t.UNSIGNED_BYTE&&($=Q===et?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),N===t.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(T,v){let N;return T?v===null||v===mn||v===Zi?N=t.DEPTH24_STENCIL8:v===fn?N=t.DEPTH32F_STENCIL8:v===ji&&(N=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mn||v===Zi?N=t.DEPTH_COMPONENT24:v===fn?N=t.DEPTH_COMPONENT32F:v===ji&&(N=t.DEPTH_COMPONENT16),N}function E(T,v){return S(T)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&l.delete(v),v.isHTMLTexture&&u.delete(v)}function _(T){const v=T.target;v.removeEventListener("dispose",_),P(v)}function M(T){const v=i.get(T);if(v.__webglInit===void 0)return;const N=T.source,Z=h.get(N);if(Z){const te=Z[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&B(T),Object.keys(Z).length===0&&h.delete(N)}i.remove(T)}function B(T){const v=i.get(T);t.deleteTexture(v.__webglTexture);const N=T.source,Z=h.get(N);delete Z[v.__cacheKey],r.memory.textures--}function P(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let te=0;te<v.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[Z]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let Z=0,te=N.length;Z<te;Z++){const le=i.get(N[Z]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),r.memory.textures--),i.remove(N[Z])}i.remove(T)}let I=0;function G(){I=0}function q(){return I}function D(T){I=T}function X(){const T=I;return T>=s.maxTextures&&Be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function O(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ne(T,v){const N=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(N,T,v);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function ie(T,v){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ae(N,T,v);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function ue(T,v){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ae(N,T,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function be(T,v){const N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Le(N,T,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const Te={[Qa]:t.REPEAT,[Hn]:t.CLAMP_TO_EDGE,[er]:t.MIRRORED_REPEAT},ze={[ft]:t.NEAREST,[af]:t.NEAREST_MIPMAP_NEAREST,[fs]:t.NEAREST_MIPMAP_LINEAR,[It]:t.LINEAR,[oa]:t.LINEAR_MIPMAP_NEAREST,[si]:t.LINEAR_MIPMAP_LINEAR},Ze={[lf]:t.NEVER,[hf]:t.ALWAYS,[cf]:t.LESS,[Kr]:t.LEQUAL,[ff]:t.EQUAL,[$r]:t.GEQUAL,[df]:t.GREATER,[uf]:t.NOTEQUAL};function Ie(T,v){if(v.type===fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===oa||v.magFilter===fs||v.magFilter===si||v.minFilter===It||v.minFilter===oa||v.minFilter===fs||v.minFilter===si)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Te[v.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Te[v.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Te[v.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ze[v.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ze[v.minFilter]),v.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ft||v.minFilter!==fs&&v.minFilter!==si||v.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let te=h.get(Z);te===void 0&&(te={},h.set(Z,te));const le=O(v);if(le!==T.__cacheKey){te[le]===void 0&&(te[le]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),te[le].usedTimes++;const ce=te[T.__cacheKey];ce!==void 0&&(te[T.__cacheKey].usedTimes--,ce.usedTimes===0&&B(v)),T.__cacheKey=le,T.__webglTexture=te[le].texture}return N}function he(T,v,N){return Math.floor(Math.floor(T/N)/v)}function de(T,v,N,Z){const le=T.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,N,Z,v.data);else{le.sort((J,Y)=>J.start-Y.start);let ce=0;for(let J=1;J<le.length;J++){const Y=le[ce],j=le[J],ae=Y.start+Y.count,x=he(j.start,v.width,4),oe=he(Y.start,v.width,4);j.start<=ae+1&&x===oe&&he(j.start+j.count-1,v.width,4)===x?Y.count=Math.max(Y.count,j.start+j.count-Y.start):(++ce,le[ce]=j)}le.length=ce+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let J=0,Y=le.length;J<Y;J++){const j=le[J],ae=Math.floor(j.start/4),x=Math.ceil(j.count/4),oe=ae%v.width,A=Math.floor(ae/v.width),ee=x,z=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,A),n.texSubImage2D(t.TEXTURE_2D,0,oe,A,ee,z,N,Z,v.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ae(T,v,N){let Z=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=t.TEXTURE_3D);const te=K(T,v),le=v.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+N);const ce=i.get(le);if(le.version!==ce.__version||te===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const z=Xe.getPrimaries(Xe.workingColorSpace),pe=v.colorSpace===Wn?null:Xe.getPrimaries(v.colorSpace),fe=v.colorSpace===Wn||z===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=re(v,Q);const me=a.convert(v.format,v.colorSpace),J=a.convert(v.type);let Y=H(v.internalFormat,me,J,v.normalized,v.colorSpace,v.isVideoTexture);Ie(Z,v);let j;const ae=v.mipmaps,x=v.isVideoTexture!==!0,oe=ce.__version===void 0||te===!0,A=le.dataReady,ee=E(v,Q);if(v.isDepthTexture)Y=C(v.format===ai,v.type),oe&&(x?n.texStorage2D(t.TEXTURE_2D,1,Y,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Y,Q.width,Q.height,0,me,J,null));else if(v.isDataTexture)if(ae.length>0){x&&oe&&n.texStorage2D(t.TEXTURE_2D,ee,Y,ae[0].width,ae[0].height);for(let z=0,pe=ae.length;z<pe;z++)j=ae[z],x?A&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,j.width,j.height,me,J,j.data):n.texImage2D(t.TEXTURE_2D,z,Y,j.width,j.height,0,me,J,j.data);v.generateMipmaps=!1}else x?(oe&&n.texStorage2D(t.TEXTURE_2D,ee,Y,Q.width,Q.height),A&&de(v,Q,me,J)):n.texImage2D(t.TEXTURE_2D,0,Y,Q.width,Q.height,0,me,J,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){x&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,Y,ae[0].width,ae[0].height,Q.depth);for(let z=0,pe=ae.length;z<pe;z++)if(j=ae[z],v.format!==tn)if(me!==null)if(x){if(A)if(v.layerUpdates.size>0){const fe=$o(j.width,j.height,v.format,v.type);for(const se of v.layerUpdates){const He=j.data.subarray(se*fe/j.data.BYTES_PER_ELEMENT,(se+1)*fe/j.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,se,j.width,j.height,1,me,He)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,j.width,j.height,Q.depth,me,j.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Y,j.width,j.height,Q.depth,0,j.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else x?A&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,j.width,j.height,Q.depth,me,J,j.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Y,j.width,j.height,Q.depth,0,me,J,j.data)}else{x&&oe&&n.texStorage2D(t.TEXTURE_2D,ee,Y,ae[0].width,ae[0].height);for(let z=0,pe=ae.length;z<pe;z++)j=ae[z],v.format!==tn?me!==null?x?A&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,j.width,j.height,me,j.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Y,j.width,j.height,0,j.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?A&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,j.width,j.height,me,J,j.data):n.texImage2D(t.TEXTURE_2D,z,Y,j.width,j.height,0,me,J,j.data)}else if(v.isDataArrayTexture)if(x){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,Y,Q.width,Q.height,Q.depth),A)if(v.layerUpdates.size>0){const z=$o(Q.width,Q.height,v.format,v.type);for(const pe of v.layerUpdates){const fe=Q.data.subarray(pe*z/Q.data.BYTES_PER_ELEMENT,(pe+1)*z/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,me,J,fe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,J,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Y,Q.width,Q.height,Q.depth,0,me,J,Q.data);else if(v.isData3DTexture)x?(oe&&n.texStorage3D(t.TEXTURE_3D,ee,Y,Q.width,Q.height,Q.depth),A&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,J,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Y,Q.width,Q.height,Q.depth,0,me,J,Q.data);else if(v.isFramebufferTexture){if(oe)if(x)n.texStorage2D(t.TEXTURE_2D,ee,Y,Q.width,Q.height);else{let z=Q.width,pe=Q.height;for(let fe=0;fe<ee;fe++)n.texImage2D(t.TEXTURE_2D,fe,Y,z,pe,0,me,J,null),z>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const z=t.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),Q.parentNode!==z){z.appendChild(Q),u.add(v),z.onpaint=Ue=>{const St=Ue.changedElements;for(const tt of u)St.includes(tt.image)&&(tt.needsUpdate=!0)},z.requestPaint();return}const pe=0,fe=t.RGBA,se=t.RGBA,He=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,pe,fe,se,He,Q),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ae.length>0){if(x&&oe){const z=qe(ae[0]);n.texStorage2D(t.TEXTURE_2D,ee,Y,z.width,z.height)}for(let z=0,pe=ae.length;z<pe;z++)j=ae[z],x?A&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,me,J,j):n.texImage2D(t.TEXTURE_2D,z,Y,me,J,j);v.generateMipmaps=!1}else if(x){if(oe){const z=qe(Q);n.texStorage2D(t.TEXTURE_2D,ee,Y,z.width,z.height)}A&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,J,Q)}else n.texImage2D(t.TEXTURE_2D,0,Y,me,J,Q);S(v)&&y(Z),ce.__version=le.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Le(T,v,N){if(v.image.length!==6)return;const Z=K(T,v),te=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);const le=i.get(te);if(te.version!==le.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);const ce=Xe.getPrimaries(Xe.workingColorSpace),$=v.colorSpace===Wn?null:Xe.getPrimaries(v.colorSpace),Q=v.colorSpace===Wn||ce===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let se=0;se<6;se++)!me&&!J?Y[se]=m(v.image[se],!0,s.maxCubemapSize):Y[se]=J?v.image[se].image:v.image[se],Y[se]=re(v,Y[se]);const j=Y[0],ae=a.convert(v.format,v.colorSpace),x=a.convert(v.type),oe=H(v.internalFormat,ae,x,v.normalized,v.colorSpace),A=v.isVideoTexture!==!0,ee=le.__version===void 0||Z===!0,z=te.dataReady;let pe=E(v,j);Ie(t.TEXTURE_CUBE_MAP,v);let fe;if(me){A&&ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,oe,j.width,j.height);for(let se=0;se<6;se++){fe=Y[se].mipmaps;for(let He=0;He<fe.length;He++){const Ue=fe[He];v.format!==tn?ae!==null?A?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,0,0,Ue.width,Ue.height,ae,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,oe,Ue.width,Ue.height,0,Ue.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,0,0,Ue.width,Ue.height,ae,x,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,oe,Ue.width,Ue.height,0,ae,x,Ue.data)}}}else{if(fe=v.mipmaps,A&&ee){fe.length>0&&pe++;const se=qe(Y[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,oe,se.width,se.height)}for(let se=0;se<6;se++)if(J){A?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Y[se].width,Y[se].height,ae,x,Y[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,oe,Y[se].width,Y[se].height,0,ae,x,Y[se].data);for(let He=0;He<fe.length;He++){const St=fe[He].image[se].image;A?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,0,0,St.width,St.height,ae,x,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,oe,St.width,St.height,0,ae,x,St.data)}}else{A?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae,x,Y[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,oe,ae,x,Y[se]);for(let He=0;He<fe.length;He++){const Ue=fe[He];A?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,0,0,ae,x,Ue.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,oe,ae,x,Ue.image[se])}}}S(v)&&y(t.TEXTURE_CUBE_MAP),le.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ce(T,v,N,Z,te,le){const ce=a.convert(N.format,N.colorSpace),$=a.convert(N.type),Q=H(N.internalFormat,ce,$,N.normalized,N.colorSpace),me=i.get(v),J=i.get(N);if(J.__renderTarget=v,!me.__hasExternalTextures){const Y=Math.max(1,v.width>>le),j=Math.max(1,v.height>>le);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,le,Q,Y,j,v.depth,0,ce,$,null):n.texImage2D(te,le,Q,Y,j,0,ce,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),we(v)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,J.__webglTexture,0,ut(v)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,J.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(T,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),v.depthBuffer){const Z=v.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,le=C(v.stencilBuffer,te),ce=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;we(v)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(v),le,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(v),le,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,le,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,T)}else{const Z=v.textures;for(let te=0;te<Z.length;te++){const le=Z[te],ce=a.convert(le.format,le.colorSpace),$=a.convert(le.type),Q=H(le.internalFormat,ce,$,le.normalized,le.colorSpace);we(v)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(v),Q,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(v),Q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Q,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(T,v,N){const Z=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,v.depthTexture);const me=a.convert(v.depthTexture.format),J=a.convert(v.depthTexture.type);let Y;v.depthTexture.format===wn?Y=t.DEPTH_COMPONENT24:v.depthTexture.format===ai&&(Y=t.DEPTH24_STENCIL8);for(let j=0;j<6;j++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Y,v.width,v.height,0,me,J,null)}}else ne(v.depthTexture,0);const le=te.__webglTexture,ce=ut(v),$=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Q=v.depthTexture.format===ai?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===wn)we(v)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,$,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,$,le,0);else if(v.depthTexture.format===ai)we(v)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,$,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,$,le,0);else throw new Error("Unknown depthTexture format")}function Qe(T){const v=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)ke(v.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?ke(v.__webglFramebuffer[0],T,0):ke(v.__webglFramebuffer,T,0)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=t.createRenderbuffer(),rt(v.__webglDepthbuffer[Z],T,!1);else{const te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,le)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(T,v,N){const Z=i.get(T);v!==void 0&&Ce(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Qe(T)}function We(T){const v=T.texture,N=i.get(T),Z=i.get(v);T.addEventListener("dispose",_);const te=T.textures,le=T.isWebGLCubeRenderTarget===!0,ce=te.length>1;if(ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=v.version,r.memory.textures++),le){N.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[$]=[];for(let Q=0;Q<v.mipmaps.length;Q++)N.__webglFramebuffer[$][Q]=t.createFramebuffer()}else N.__webglFramebuffer[$]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)N.__webglFramebuffer[$]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ce)for(let $=0,Q=te.length;$<Q;$++){const me=i.get(te[$]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),r.memory.textures++)}if(T.samples>0&&we(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let $=0;$<te.length;$++){const Q=te[$];N.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[$]);const me=a.convert(Q.format,Q.colorSpace),J=a.convert(Q.type),Y=H(Q.internalFormat,me,J,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),j=ut(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,j,Y,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,N.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ce(N.__webglFramebuffer[$][Q],T,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Ce(N.__webglFramebuffer[$],T,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(v)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let $=0,Q=te.length;$<Q;$++){const me=te[$],J=i.get(me);let Y=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,J.__webglTexture),Ie(Y,me),Ce(N.__webglFramebuffer,T,me,t.COLOR_ATTACHMENT0+$,Y,0),S(me)&&y(Y)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Z.__webglTexture),Ie($,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ce(N.__webglFramebuffer[Q],T,v,t.COLOR_ATTACHMENT0,$,Q);else Ce(N.__webglFramebuffer,T,v,t.COLOR_ATTACHMENT0,$,0);S(v)&&y($),n.unbindTexture()}T.depthBuffer&&Qe(T)}function dt(T){const v=T.textures;for(let N=0,Z=v.length;N<Z;N++){const te=v[N];if(S(te)){const le=R(T),ce=i.get(te).__webglTexture;n.bindTexture(le,ce),y(le),n.unbindTexture()}}}const ot=[],ct=[];function L(T){if(T.samples>0){if(we(T)===!1){const v=T.textures,N=T.width,Z=T.height;let te=t.COLOR_BUFFER_BIT;const le=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(T),$=v.length>1;if($)for(let me=0;me<v.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Q=T.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<v.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const J=i.get(v[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,N,Z,0,0,N,Z,te,t.NEAREST),c===!0&&(ot.length=0,ct.length=0,ot.push(t.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ot.push(le),ct.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ct)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<v.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const J=i.get(v[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ut(T){return Math.min(s.maxSamples,T.samples)}function we(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(T){const v=r.render.frame;l.get(T)!==v&&(l.set(T,v),T.update())}function re(T,v){const N=T.colorSpace,Z=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==qs&&N!==Wn&&(Xe.getTransfer(N)===et?(Z!==tn||te!==Vt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",N)),v}function qe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(o.width=T.naturalWidth||T.width,o.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(o.width=T.displayWidth,o.height=T.displayHeight):(o.width=T.width,o.height=T.height),o}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=q,this.setTextureUnits=D,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=be,this.rebindTextures=it,this.setupRenderTarget=We,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function G0(t,e){function n(i,s=Wn){let a;const r=Xe.getTransfer(s);if(i===Vt)return t.UNSIGNED_BYTE;if(i===zr)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xr)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fl)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===kl)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nl)return t.BYTE;if(i===Ol)return t.SHORT;if(i===ji)return t.UNSIGNED_SHORT;if(i===Gr)return t.INT;if(i===mn)return t.UNSIGNED_INT;if(i===fn)return t.FLOAT;if(i===Cn)return t.HALF_FLOAT;if(i===Wl)return t.ALPHA;if(i===Gl)return t.RGB;if(i===tn)return t.RGBA;if(i===wn)return t.DEPTH_COMPONENT;if(i===ai)return t.DEPTH_STENCIL;if(i===zl)return t.RED;if(i===Vr)return t.RED_INTEGER;if(i===li)return t.RG;if(i===Yr)return t.RG_INTEGER;if(i===qr)return t.RGBA_INTEGER;if(i===Fs||i===ks||i===Ws||i===Gs)if(r===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tr||i===nr||i===ir||i===sr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===rr||i===or||i===lr||i===cr||i===Vs||i===fr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ar||i===rr)return r===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===or)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===lr)return a.COMPRESSED_R11_EAC;if(i===cr)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Vs)return a.COMPRESSED_RG11_EAC;if(i===fr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dr||i===ur||i===hr||i===pr||i===mr||i===Sr||i===gr||i===vr||i===_r||i===yr||i===br||i===Mr||i===Tr||i===Hr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===dr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ur)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_r)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===br)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hr)return r===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rr||i===Er||i===Pr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Rr)return r===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Er)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ar||i===Cr||i===Ys||i===wr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ar)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ys)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Zl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Sn({vertexShader:z0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pt(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends ci{constructor(e,n){super();const i=this;let s=null,a=1,r=null,f="local-floor",c=1,o=null,l=null,u=null,d=null,h=null,p=null;const g=typeof XRWebGLBinding<"u",m=new V0,S={},y=n.getContextAttributes();let R=null,H=null;const C=[],E=[],w=new je;let _=null;const M=new $t;M.viewport=new mt;const B=new $t;B.viewport=new mt;const P=[M,B],I=new nd;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=C[K];return he===void 0&&(he=new ma,C[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=C[K];return he===void 0&&(he=new ma,C[K]=he),he.getGripSpace()},this.getHand=function(K){let he=C[K];return he===void 0&&(he=new ma,C[K]=he),he.getHandSpace()};function D(K){const he=E.indexOf(K.inputSource);if(he===-1)return;const de=C[he];de!==void 0&&(de.update(K.inputSource,K.frame,o||r),de.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",O);for(let K=0;K<C.length;K++){const he=E[K];he!==null&&(E[K]=null,C[K].disconnect(he))}G=null,q=null,m.reset();for(const K in S)delete S[K];e.setRenderTarget(R),h=null,d=null,u=null,s=null,H=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||r},this.setReferenceSpace=function(K){o=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",X),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ae=null,Le=null;y.depth&&(Le=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?ai:wn,Ae=y.stencil?Zi:mn);const Ce={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),H=new hn(d.textureWidth,d.textureHeight,{format:tn,type:Vt,depthTexture:new Ii(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,n,de),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),H=new hn(h.framebufferWidth,h.framebufferHeight,{format:tn,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(c),o=null,r=await s.requestReferenceSpace(f),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let he=0;he<K.removed.length;he++){const de=K.removed[he],Ae=E.indexOf(de);Ae>=0&&(E[Ae]=null,C[Ae].disconnect(de))}for(let he=0;he<K.added.length;he++){const de=K.added[he];let Ae=E.indexOf(de);if(Ae===-1){for(let Ce=0;Ce<C.length;Ce++)if(Ce>=E.length){E.push(de),Ae=Ce;break}else if(E[Ce]===null){E[Ce]=de,Ae=Ce;break}if(Ae===-1)break}const Le=C[Ae];Le&&Le.connect(de)}}const ne=new F,ie=new F;function ue(K,he,de){ne.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(de.matrixWorld);const Ae=ne.distanceTo(ie),Le=he.projectionMatrix.elements,Ce=de.projectionMatrix.elements,rt=Le[14]/(Le[10]-1),ke=Le[14]/(Le[10]+1),Qe=(Le[9]+1)/Le[5],it=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],dt=(Ce[8]+1)/Ce[0],ot=rt*We,ct=rt*dt,L=Ae/(-We+dt),ut=L*-We;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const we=rt+L,Ge=ke+L,re=ot-ut,qe=ct+(Ae-ut),T=Qe*ke/Ge*we,v=it*ke/Ge*we;K.projectionMatrix.makePerspective(re,qe,T,v,we,Ge),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function be(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let he=K.near,de=K.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(de=m.depthFar)),I.near=B.near=M.near=he,I.far=B.far=M.far=de,(G!==I.near||q!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,q=I.far),I.layers.mask=K.layers.mask|6,M.layers.mask=I.layers.mask&-5,B.layers.mask=I.layers.mask&-3;const Ae=K.parent,Le=I.cameras;be(I,Ae);for(let Ce=0;Ce<Le.length;Ce++)be(Le[Ce],Ae);Le.length===2?ue(I,M,B):I.projectionMatrix.copy(M.projectionMatrix),Te(K,I,Ae)};function Te(K,he,de){de===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return S[K]};let ze=null;function Ze(K,he){if(l=he.getViewerPose(o||r),p=he,l!==null){const de=l.views;h!==null&&(e.setRenderTargetFramebuffer(H,h.framebuffer),e.setRenderTarget(H));let Ae=!1;de.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let ke=0;ke<de.length;ke++){const Qe=de[ke];let it=null;if(h!==null)it=h.getViewport(Qe);else{const dt=u.getViewSubImage(d,Qe);it=dt.viewport,ke===0&&(e.setRenderTargetTextures(H,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(H))}let We=P[ke];We===void 0&&(We=new $t,We.layers.enable(ke),We.viewport=new mt,P[ke]=We),We.matrix.fromArray(Qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(it.x,it.y,it.width,it.height),ke===0&&(I.matrix.copy(We.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(We)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const ke=u.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,s.renderState)}if(Le&&Le.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let ke=0;ke<de.length;ke++){const Qe=de[ke].camera;if(Qe){let it=S[Qe];it||(it=new Zl,S[Qe]=it);const We=u.getCameraImage(Qe);it.sourceTexture=We}}}}for(let de=0;de<C.length;de++){const Ae=E[de],Le=C[de];Ae!==null&&Le!==void 0&&Le.update(Ae,he,o||r)}ze&&ze(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}const Ie=new nc;Ie.setAnimationLoop(Ze),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}}const q0=new yt,cc=new xe;cc.set(-1,0,0,0,1,0,0,0,1);function K0(t,e){function n(m,S){m.matrixAutoUpdate===!0&&m.updateMatrix(),S.value.copy(m.matrix)}function i(m,S){S.color.getRGB(m.fogColor.value,Ql(t)),S.isFog?(m.fogNear.value=S.near,m.fogFar.value=S.far):S.isFogExp2&&(m.fogDensity.value=S.density)}function s(m,S,y,R,H){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(m,S):S.isMeshLambertMaterial?(a(m,S),S.envMap&&(m.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(m,S),u(m,S)):S.isMeshPhongMaterial?(a(m,S),l(m,S),S.envMap&&(m.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(m,S),d(m,S),S.isMeshPhysicalMaterial&&h(m,S,H)):S.isMeshMatcapMaterial?(a(m,S),p(m,S)):S.isMeshDepthMaterial?a(m,S):S.isMeshDistanceMaterial?(a(m,S),g(m,S)):S.isMeshNormalMaterial?a(m,S):S.isLineBasicMaterial?(r(m,S),S.isLineDashedMaterial&&f(m,S)):S.isPointsMaterial?c(m,S,y,R):S.isSpriteMaterial?o(m,S):S.isShadowMaterial?(m.color.value.copy(S.color),m.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(m,S){m.opacity.value=S.opacity,S.color&&m.diffuse.value.copy(S.color),S.emissive&&m.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(m.map.value=S.map,n(S.map,m.mapTransform)),S.alphaMap&&(m.alphaMap.value=S.alphaMap,n(S.alphaMap,m.alphaMapTransform)),S.bumpMap&&(m.bumpMap.value=S.bumpMap,n(S.bumpMap,m.bumpMapTransform),m.bumpScale.value=S.bumpScale,S.side===Wt&&(m.bumpScale.value*=-1)),S.normalMap&&(m.normalMap.value=S.normalMap,n(S.normalMap,m.normalMapTransform),m.normalScale.value.copy(S.normalScale),S.side===Wt&&m.normalScale.value.negate()),S.displacementMap&&(m.displacementMap.value=S.displacementMap,n(S.displacementMap,m.displacementMapTransform),m.displacementScale.value=S.displacementScale,m.displacementBias.value=S.displacementBias),S.emissiveMap&&(m.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,m.emissiveMapTransform)),S.specularMap&&(m.specularMap.value=S.specularMap,n(S.specularMap,m.specularMapTransform)),S.alphaTest>0&&(m.alphaTest.value=S.alphaTest);const y=e.get(S),R=y.envMap,H=y.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(H)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cc),m.reflectivity.value=S.reflectivity,m.ior.value=S.ior,m.refractionRatio.value=S.refractionRatio),S.lightMap&&(m.lightMap.value=S.lightMap,m.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,m.lightMapTransform)),S.aoMap&&(m.aoMap.value=S.aoMap,m.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,m.aoMapTransform))}function r(m,S){m.diffuse.value.copy(S.color),m.opacity.value=S.opacity,S.map&&(m.map.value=S.map,n(S.map,m.mapTransform))}function f(m,S){m.dashSize.value=S.dashSize,m.totalSize.value=S.dashSize+S.gapSize,m.scale.value=S.scale}function c(m,S,y,R){m.diffuse.value.copy(S.color),m.opacity.value=S.opacity,m.size.value=S.size*y,m.scale.value=R*.5,S.map&&(m.map.value=S.map,n(S.map,m.uvTransform)),S.alphaMap&&(m.alphaMap.value=S.alphaMap,n(S.alphaMap,m.alphaMapTransform)),S.alphaTest>0&&(m.alphaTest.value=S.alphaTest)}function o(m,S){m.diffuse.value.copy(S.color),m.opacity.value=S.opacity,m.rotation.value=S.rotation,S.map&&(m.map.value=S.map,n(S.map,m.mapTransform)),S.alphaMap&&(m.alphaMap.value=S.alphaMap,n(S.alphaMap,m.alphaMapTransform)),S.alphaTest>0&&(m.alphaTest.value=S.alphaTest)}function l(m,S){m.specular.value.copy(S.specular),m.shininess.value=Math.max(S.shininess,1e-4)}function u(m,S){S.gradientMap&&(m.gradientMap.value=S.gradientMap)}function d(m,S){m.metalness.value=S.metalness,S.metalnessMap&&(m.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,m.metalnessMapTransform)),m.roughness.value=S.roughness,S.roughnessMap&&(m.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,m.roughnessMapTransform)),S.envMap&&(m.envMapIntensity.value=S.envMapIntensity)}function h(m,S,y){m.ior.value=S.ior,S.sheen>0&&(m.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),m.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(m.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,m.sheenColorMapTransform)),S.sheenRoughnessMap&&(m.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,m.sheenRoughnessMapTransform))),S.clearcoat>0&&(m.clearcoat.value=S.clearcoat,m.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(m.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,m.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(m.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wt&&m.clearcoatNormalScale.value.negate())),S.dispersion>0&&(m.dispersion.value=S.dispersion),S.iridescence>0&&(m.iridescence.value=S.iridescence,m.iridescenceIOR.value=S.iridescenceIOR,m.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(m.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,m.iridescenceMapTransform)),S.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),S.transmission>0&&(m.transmission.value=S.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),S.transmissionMap&&(m.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,m.transmissionMapTransform)),m.thickness.value=S.thickness,S.thicknessMap&&(m.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=S.attenuationDistance,m.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(m.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(m.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=S.specularIntensity,m.specularColor.value.copy(S.specularColor),S.specularColorMap&&(m.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,m.specularColorMapTransform)),S.specularIntensityMap&&(m.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,S){S.matcap&&(m.matcap.value=S.matcap)}function g(m,S){const y=e.get(S).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $0(t,e,n,i){let s={},a={},r=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,R){const H=R.program;i.uniformBlockBinding(y,H)}function o(y,R){let H=s[y.id];H===void 0&&(p(y),H=l(y),s[y.id]=H,y.addEventListener("dispose",m));const C=R.program;i.updateUBOMapping(y,C);const E=e.render.frame;a[y.id]!==E&&(d(y),a[y.id]=E)}function l(y){const R=u();y.__bindingPointIndex=R;const H=t.createBuffer(),C=y.__size,E=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,H),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,H),H}function u(){for(let y=0;y<f;y++)if(r.indexOf(y)===-1)return r.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const R=s[y.id],H=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let E=0,w=H.length;E<w;E++){const _=Array.isArray(H[E])?H[E]:[H[E]];for(let M=0,B=_.length;M<B;M++){const P=_[M];if(h(P,E,M,C)===!0){const I=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let D=0;D<G.length;D++){const X=G[D],O=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,I+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):ArrayBuffer.isView(X)?P.__data.set(new X.constructor(X.buffer,X.byteOffset,P.__data.length)):(X.toArray(P.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,R,H,C){const E=y.value,w=R+"_"+H;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:ArrayBuffer.isView(E)?C[w]=E.slice():C[w]=E.clone(),!0;{const _=C[w];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return C[w]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function p(y){const R=y.uniforms;let H=0;const C=16;for(let w=0,_=R.length;w<_;w++){const M=Array.isArray(R[w])?R[w]:[R[w]];for(let B=0,P=M.length;B<P;B++){const I=M[B],G=Array.isArray(I.value)?I.value:[I.value];for(let q=0,D=G.length;q<D;q++){const X=G[q],O=g(X),ne=H%C,ie=ne%O.boundary,ue=ne+ie;H+=ie,ue!==0&&C-ue<O.storage&&(H+=C-ue),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=H,H+=O.storage}}}const E=H%C;return E>0&&(H+=C-E),y.__size=H,y.__cache={},this}function g(y){const R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(R.boundary=16,R.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),R}function m(y){const R=y.target;R.removeEventListener("dispose",m);const H=r.indexOf(R.__bindingPointIndex);r.splice(H,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete a[R.id]}function S(){for(const y in s)t.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:c,update:o,dispose:S}}const J0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function j0(){return on===null&&(on=new Ff(J0,16,16,li,Cn),on.name="DFG_LUT",on.minFilter=It,on.magFilter=It,on.wrapS=Hn,on.wrapT=Hn,on.generateMipmaps=!1,on.needsUpdate=!0),on}class Z0{constructor(e={}){const{canvas:n=mf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:f=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Vt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=h,m=new Set([qr,Yr,Vr]),S=new Set([Vt,mn,ji,Zi,zr,Xr]),y=new Uint32Array(4),R=new Int32Array(4),H=new F;let C=null,E=null;const w=[],_=[];let M=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let P=!1,I=null;this._outputColorSpace=Kt;let G=0,q=0,D=null,X=-1,O=null;const ne=new mt,ie=new mt;let ue=null;const be=new Je(0);let Te=0,ze=n.width,Ze=n.height,Ie=1,K=null,he=null;const de=new mt(0,0,ze,Ze),Ae=new mt(0,0,ze,Ze);let Le=!1;const Ce=new Zr;let rt=!1,ke=!1;const Qe=new yt,it=new F,We=new mt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ct(){return D===null?Ie:1}let L=i;function ut(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:a,antialias:f,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wr}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),L===null){const U="webgl2";if(L=ut(U,b),L===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw $e("WebGLRenderer: "+b.message),b}let we,Ge,re,qe,T,v,N,Z,te,le,ce,$,Q,me,J,Y,j,ae,x,oe,A,ee,z;function pe(){we=new jh(L),we.init(),A=new G0(L,we),Ge=new zh(L,we,e,A),re=new k0(L,we),Ge.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),qe=new ep(L),T=new E0,v=new W0(L,we,re,T,Ge,A,qe),N=new Jh(B),Z=new sd(L),ee=new Wh(L,Z),te=new Zh(L,Z,qe,ee),le=new np(L,te,Z,ee,qe),ae=new tp(L,Ge,v),J=new Xh(T),ce=new R0(B,N,we,Ge,ee,J),$=new K0(B,T),Q=new A0,me=new D0(we),j=new kh(B,N,re,le,p,c),Y=new F0(B,le,Ge),z=new $0(L,qe,Ge,re),x=new Gh(L,we,qe),oe=new Qh(L,we,qe),qe.programs=ce.programs,B.capabilities=Ge,B.extensions=we,B.properties=T,B.renderLists=Q,B.shadowMap=Y,B.state=re,B.info=qe}pe(),g!==Vt&&(M=new sp(g,n.width,n.height,s,a));const fe=new Y0(B,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(b){b!==void 0&&(Ie=b,this.setSize(ze,Ze,!1))},this.getSize=function(b){return b.set(ze,Ze)},this.setSize=function(b,U,V=!0){if(fe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=b,Ze=U,n.width=Math.floor(b*Ie),n.height=Math.floor(U*Ie),V===!0&&(n.style.width=b+"px",n.style.height=U+"px"),M!==null&&M.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ze*Ie,Ze*Ie).floor()},this.setDrawingBufferSize=function(b,U,V){ze=b,Ze=U,Ie=V,n.width=Math.floor(b*V),n.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(g===Vt){$e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,U,V,k){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,U,V,k),re.viewport(ne.copy(de).multiplyScalar(Ie).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,U,V,k){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,U,V,k),re.scissor(ie.copy(Ae).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){re.setScissorTest(Le=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,V=!0){let k=0;if(b){let W=!1;if(D!==null){const ve=D.texture.format;W=m.has(ve)}if(W){const ve=D.texture.type,ye=S.has(ve),ge=j.getClearColor(),Me=j.getClearAlpha(),Re=ge.r,Ne=ge.g,Fe=ge.b;ye?(y[0]=Re,y[1]=Ne,y[2]=Fe,y[3]=Me,L.clearBufferuiv(L.COLOR,0,y)):(R[0]=Re,R[1]=Ne,R[2]=Fe,R[3]=Me,L.clearBufferiv(L.COLOR,0,R))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),j.dispose(),Q.dispose(),me.dispose(),T.dispose(),N.dispose(),le.dispose(),ee.dispose(),z.dispose(),ce.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",co),fe.removeEventListener("sessionend",fo),qn.stop()};function se(b){b.preventDefault(),Ao("WebGLRenderer: Context Lost."),P=!0}function He(){Ao("WebGLRenderer: Context Restored."),P=!1;const b=qe.autoReset,U=Y.enabled,V=Y.autoUpdate,k=Y.needsUpdate,W=Y.type;pe(),qe.autoReset=b,Y.enabled=U,Y.autoUpdate=V,Y.needsUpdate=k,Y.type=W}function Ue(b){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function St(b){const U=b.target;U.removeEventListener("dispose",St),tt(U)}function tt(b){gn(b),T.remove(b)}function gn(b){const U=T.get(b).programs;U!==void 0&&(U.forEach(function(V){ce.releaseProgram(V)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,k,W,ve){U===null&&(U=dt);const ye=W.isMesh&&W.matrixWorld.determinant()<0,ge=yc(b,U,V,k,W);re.setMaterial(k,ye);let Me=V.index,Re=1;if(k.wireframe===!0){if(Me=te.getWireframeAttribute(V),Me===void 0)return;Re=2}const Ne=V.drawRange,Fe=V.attributes.position;let Pe=Ne.start*Re,nt=(Ne.start+Ne.count)*Re;ve!==null&&(Pe=Math.max(Pe,ve.start*Re),nt=Math.min(nt,(ve.start+ve.count)*Re)),Me!==null?(Pe=Math.max(Pe,0),nt=Math.min(nt,Me.count)):Fe!=null&&(Pe=Math.max(Pe,0),nt=Math.min(nt,Fe.count));const gt=nt-Pe;if(gt<0||gt===1/0)return;ee.setup(W,k,ge,V,Me);let ht,st=x;if(Me!==null&&(ht=Z.get(Me),st=oe,st.setIndex(ht)),W.isMesh)k.wireframe===!0?(re.setLineWidth(k.wireframeLinewidth*ct()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(W.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),re.setLineWidth(Ct*ct()),W.isLineSegments?st.setMode(L.LINES):W.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else W.isPoints?st.setMode(L.POINTS):W.isSprite&&st.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(we.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ct=W._multiDrawStarts,_e=W._multiDrawCounts,Gt=W._multiDrawCount,Ke=Me?Z.get(Me).bytesPerElement:1,Yt=T.get(k).currentProgram.getUniforms();for(let an=0;an<Gt;an++)Yt.setValue(L,"_gl_DrawID",an),st.render(Ct[an]/Ke,_e[an])}else if(W.isInstancedMesh)st.renderInstances(Pe,gt,W.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_e=Math.min(V.instanceCount,Ct);st.renderInstances(Pe,gt,_e)}else st.render(Pe,gt)};function sn(b,U,V){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,ls(b,U,V),b.side=Vn,b.needsUpdate=!0,ls(b,U,V),b.side=Tn):ls(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),E=me.get(V),E.init(U),_.push(E),V.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),b!==V&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights();const k=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ve=W.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];sn(ge,V,W),k.add(ge)}else sn(ve,V,W),k.add(ve)}),E=_.pop(),k},this.compileAsync=function(b,U,V=null){const k=this.compile(b,U,V);return new Promise(W=>{function ve(){if(k.forEach(function(ye){T.get(ye).currentProgram.isReady()&&k.delete(ye)}),k.size===0){W(b);return}setTimeout(ve,10)}we.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ia=null;function vc(b){ia&&ia(b)}function co(){qn.stop()}function fo(){qn.start()}const qn=new nc;qn.setAnimationLoop(vc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){ia=b,fe.setAnimationLoop(b),b===null?qn.stop():qn.start()},fe.addEventListener("sessionstart",co),fe.addEventListener("sessionend",fo),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(b,U);const V=fe.enabled===!0&&fe.isPresenting===!0,k=M!==null&&(D===null||V)&&M.begin(B,D);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,U,D),E=me.get(b,_.length),E.init(U),E.state.textureUnits=v.getTextureUnits(),_.push(E),Qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(Qe,dn,U.reversedDepth),ke=this.localClippingEnabled,rt=J.init(this.clippingPlanes,ke),C=Q.get(b,w.length),C.init(),w.push(C),fe.enabled===!0&&fe.isPresenting===!0){const ye=B.xr.getDepthSensingMesh();ye!==null&&sa(ye,U,-1/0,B.sortObjects)}sa(b,U,0,B.sortObjects),C.finish(),B.sortObjects===!0&&C.sort(K,he),ot=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ot&&j.addToRenderList(C,b),this.info.render.frame++,rt===!0&&J.beginShadows();const W=E.state.shadowsArray;if(Y.render(W,b,U),rt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&M.hasRenderPass())===!1){const ye=C.opaque,ge=C.transmissive;if(E.setupLights(),U.isArrayCamera){const Me=U.cameras;if(ge.length>0)for(let Re=0,Ne=Me.length;Re<Ne;Re++){const Fe=Me[Re];ho(ye,ge,b,Fe)}ot&&j.render(b);for(let Re=0,Ne=Me.length;Re<Ne;Re++){const Fe=Me[Re];uo(C,b,Fe,Fe.viewport)}}else ge.length>0&&ho(ye,ge,b,U),ot&&j.render(b),uo(C,b,U)}D!==null&&q===0&&(v.updateMultisampleRenderTarget(D),v.updateRenderTargetMipmap(D)),k&&M.end(B),b.isScene===!0&&b.onAfterRender(B,b,U),ee.resetDefaultState(),X=-1,O=null,_.pop(),_.length>0?(E=_[_.length-1],v.setTextureUnits(E.state.textureUnits),rt===!0&&J.setGlobalState(B.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?C=w[w.length-1]:C=null,I!==null&&I.renderEnd()};function sa(b,U,V,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ce.intersectsSprite(b)){k&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qe);const ye=le.update(b),ge=b.material;ge.visible&&C.push(b,ye,ge,V,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ce.intersectsObject(b))){const ye=le.update(b),ge=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),We.copy(ye.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(Qe)),Array.isArray(ge)){const Me=ye.groups;for(let Re=0,Ne=Me.length;Re<Ne;Re++){const Fe=Me[Re],Pe=ge[Fe.materialIndex];Pe&&Pe.visible&&C.push(b,ye,Pe,V,We.z,Fe)}}else ge.visible&&C.push(b,ye,ge,V,We.z,null)}}const ve=b.children;for(let ye=0,ge=ve.length;ye<ge;ye++)sa(ve[ye],U,V,k)}function uo(b,U,V,k){const{opaque:W,transmissive:ve,transparent:ye}=b;E.setupLightsView(V),rt===!0&&J.setGlobalState(B.clippingPlanes,V),k&&re.viewport(ne.copy(k)),W.length>0&&os(W,U,V),ve.length>0&&os(ve,U,V),ye.length>0&&os(ye,U,V),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function ho(b,U,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Pe=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new hn(1,1,{generateMipmaps:!0,type:Pe?Cn:Vt,minFilter:si,samples:Math.max(4,Ge.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ve=E.state.transmissionRenderTarget[k.id],ye=k.viewport||ne;ve.setSize(ye.z*B.transmissionResolutionScale,ye.w*B.transmissionResolutionScale);const ge=B.getRenderTarget(),Me=B.getActiveCubeFace(),Re=B.getActiveMipmapLevel();B.setRenderTarget(ve),B.getClearColor(be),Te=B.getClearAlpha(),Te<1&&B.setClearColor(16777215,.5),B.clear(),ot&&j.render(V);const Ne=B.toneMapping;B.toneMapping=un;const Fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),rt===!0&&J.setGlobalState(B.clippingPlanes,k),os(b,V,k),v.updateMultisampleRenderTarget(ve),v.updateRenderTargetMipmap(ve),we.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let nt=0,gt=U.length;nt<gt;nt++){const ht=U[nt],{object:st,geometry:Ct,material:_e,group:Gt}=ht;if(_e.side===Tn&&st.layers.test(k.layers)){const Ke=_e.side;_e.side=Wt,_e.needsUpdate=!0,po(st,V,k,Ct,_e,Gt),_e.side=Ke,_e.needsUpdate=!0,Pe=!0}}Pe===!0&&(v.updateMultisampleRenderTarget(ve),v.updateRenderTargetMipmap(ve))}B.setRenderTarget(ge,Me,Re),B.setClearColor(be,Te),Fe!==void 0&&(k.viewport=Fe),B.toneMapping=Ne}function os(b,U,V){const k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ve=b.length;W<ve;W++){const ye=b[W],{object:ge,geometry:Me,group:Re}=ye;let Ne=ye.material;Ne.allowOverride===!0&&k!==null&&(Ne=k),ge.layers.test(V.layers)&&po(ge,U,V,Me,Ne,Re)}}function po(b,U,V,k,W,ve){b.onBeforeRender(B,U,V,k,W,ve),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(B,U,V,k,b,ve),W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=Wt,W.needsUpdate=!0,B.renderBufferDirect(V,U,k,W,b,ve),W.side=Vn,W.needsUpdate=!0,B.renderBufferDirect(V,U,k,W,b,ve),W.side=Tn):B.renderBufferDirect(V,U,k,W,b,ve),b.onAfterRender(B,U,V,k,W,ve)}function ls(b,U,V){U.isScene!==!0&&(U=dt);const k=T.get(b),W=E.state.lights,ve=E.state.shadowsArray,ye=W.state.version,ge=ce.getParameters(b,W.state,ve,U,V,E.state.lightProbeGridArray),Me=ce.getProgramCacheKey(ge);let Re=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=N.get(b.envMap||k.environment,Ne),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",St),Re=new Map,k.programs=Re);let Fe=Re.get(Me);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===ye)return So(b,ge),Fe}else ge.uniforms=ce.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,V,ge),b.onBeforeCompile(ge,B),Fe=ce.acquireProgram(ge,Me),Re.set(Me,Fe),k.uniforms=ge.uniforms;const Pe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=J.uniform),So(b,ge),k.needsLights=Mc(b),k.lightsStateVersion=ye,k.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Fe,k.uniformsList=null,Fe}function mo(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=zs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function So(b,U){const V=T.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function _c(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;H.setFromMatrixPosition(U.matrixWorld);for(let V=0,k=b.length;V<k;V++){const W=b[V];if(W.texture!==null&&W.boundingBox.containsPoint(H))return W}return null}function yc(b,U,V,k,W){U.isScene!==!0&&(U=dt),v.resetTextureUnits();const ve=U.fog,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ge=D===null?B.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xe.workingColorSpace,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=N.get(k.envMap||ye,Me),Ne=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let ht=un;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ht=B.toneMapping);const st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ct=st!==void 0?st.length:0,_e=T.get(k),Gt=E.state.lights;if(rt===!0&&(ke===!0||b!==O)){const lt=b===O&&k.id===X;J.setState(k,b,lt)}let Ke=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Gt.state.version||_e.outputColorSpace!==ge||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Re||k.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==J.numPlanes||_e.numIntersection!==J.numIntersection)||_e.vertexAlphas!==Ne||_e.vertexTangents!==Fe||_e.morphTargets!==Pe||_e.morphNormals!==nt||_e.morphColors!==gt||_e.toneMapping!==ht||_e.morphTargetsCount!==Ct||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,_e.__version=k.version);let Yt=_e.currentProgram;Ke===!0&&(Yt=ls(k,U,W),I&&k.isNodeMaterial&&I.onUpdateProgram(k,Yt,_e));let an=!1,Ln=!1,fi=!1;const at=Yt.getUniforms(),vt=_e.uniforms;if(re.useProgram(Yt.program)&&(an=!0,Ln=!0,fi=!0),k.id!==X&&(X=k.id,Ln=!0),_e.needsLights){const lt=_c(E.state.lightProbeGridArray,W);_e.lightProbeGrid!==lt&&(_e.lightProbeGrid=lt,Ln=!0)}if(an||O!==b){re.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",b.projectionMatrix),at.setValue(L,"viewMatrix",b.matrixWorldInverse);const Dn=at.map.cameraPosition;Dn!==void 0&&Dn.setValue(L,it.setFromMatrixPosition(b.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Ln=!0,fi=!0)}if(_e.needsLights&&(Gt.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",Gt.state.directionalShadowMap,v),Gt.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",Gt.state.spotShadowMap,v),Gt.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",Gt.state.pointShadowMap,v)),W.isSkinnedMesh){at.setOptional(L,W,"bindMatrix"),at.setOptional(L,W,"bindMatrixInverse");const lt=W.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(L,"boneTexture",lt.boneTexture,v))}W.isBatchedMesh&&(at.setOptional(L,W,"batchingTexture"),at.setValue(L,"batchingTexture",W._matricesTexture,v),at.setOptional(L,W,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",W._indirectTexture,v),at.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",W._colorsTexture,v));const In=V.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ae.update(W,V,Yt),(Ln||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,at.setValue(L,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=j0()),Ln){if(at.setValue(L,"toneMappingExposure",B.toneMappingExposure),_e.needsLights&&bc(vt,fi),ve&&k.fog===!0&&$.refreshFogUniforms(vt,ve),$.refreshMaterialUniforms(vt,k,Ie,Ze,E.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){const lt=_e.lightProbeGrid;vt.probesSH.value=lt.texture,vt.probesMin.value.copy(lt.boundingBox.min),vt.probesMax.value.copy(lt.boundingBox.max),vt.probesResolution.value.copy(lt.resolution)}zs.upload(L,mo(_e),vt,v)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zs.upload(L,mo(_e),vt,v),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(L,"center",W.center),at.setValue(L,"modelViewMatrix",W.modelViewMatrix),at.setValue(L,"normalMatrix",W.normalMatrix),at.setValue(L,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const lt=k.uniformsGroups;for(let Dn=0,di=lt.length;Dn<di;Dn++){const go=lt[Dn];z.update(go,Yt),z.bind(go,Yt)}}return Yt}function bc(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Mc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,V){const k=T.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=U,T.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const V=T.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Tc=L.createFramebuffer();this.setRenderTarget=function(b,U=0,V=0){D=b,G=U,q=V;let k=null,W=!1,ve=!1;if(b){const ge=T.get(b);if(ge.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(b.viewport),ie.copy(b.scissor),ue=b.scissorTest,re.viewport(ne),re.scissor(ie),re.setScissorTest(ue),X=-1;return}else if(ge.__webglFramebuffer===void 0)v.setupRenderTarget(b);else if(ge.__hasExternalTextures)v.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(ge.__boundDepthTexture!==Ne){if(Ne!==null&&T.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(b)}}const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ve=!0);const Re=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?k=Re[U][V]:k=Re[U],W=!0):b.samples>0&&v.useMultisampledRTT(b)===!1?k=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[V]:k=Re,ne.copy(b.viewport),ie.copy(b.scissor),ue=b.scissorTest}else ne.copy(de).multiplyScalar(Ie).floor(),ie.copy(Ae).multiplyScalar(Ie).floor(),ue=Le;if(V!==0&&(k=Tc),re.bindFramebuffer(L.FRAMEBUFFER,k)&&re.drawBuffers(b,k),re.viewport(ne),re.scissor(ie),re.setScissorTest(ue),W){const ge=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,V)}else if(ve){const ge=U;for(let Me=0;Me<b.textures.length;Me++){const Re=T.get(b.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Re.__webglTexture,V,ge)}}else if(b!==null&&V!==0){const ge=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,V)}X=-1},this.readRenderTargetPixels=function(b,U,V,k,W,ve,ye,ge=0){if(!(b&&b.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){re.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Re=b.textures[ge],Ne=Re.format,Fe=Re.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!Ge.textureFormatReadable(Ne)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Fe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&V>=0&&V<=b.height-W&&L.readPixels(U,V,k,W,A.convert(Ne),A.convert(Fe),ve)}finally{const Re=D!==null?T.get(D).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,k,W,ve,ye,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me)if(U>=0&&U<=b.width-k&&V>=0&&V<=b.height-W){re.bindFramebuffer(L.FRAMEBUFFER,Me);const Re=b.textures[ge],Ne=Re.format,Fe=Re.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!Ge.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(U,V,k,W,A.convert(Ne),A.convert(Fe),0);const nt=D!==null?T.get(D).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,nt);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Sf(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(Pe),L.deleteSync(gt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,V=0){const k=Math.pow(2,-V),W=Math.floor(b.image.width*k),ve=Math.floor(b.image.height*k),ye=U!==null?U.x:0,ge=U!==null?U.y:0;v.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ye,ge,W,ve),re.unbindTexture()};const Hc=L.createFramebuffer(),Rc=L.createFramebuffer();this.copyTextureToTexture=function(b,U,V=null,k=null,W=0,ve=0){let ye,ge,Me,Re,Ne,Fe,Pe,nt,gt;const ht=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(V!==null)ye=V.max.x-V.min.x,ge=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,Ne=V.min.y,Fe=V.isBox3?V.min.z:0;else{const vt=Math.pow(2,-W);ye=Math.floor(ht.width*vt),ge=Math.floor(ht.height*vt),b.isDataArrayTexture?Me=ht.depth:b.isData3DTexture?Me=Math.floor(ht.depth*vt):Me=1,Re=0,Ne=0,Fe=0}k!==null?(Pe=k.x,nt=k.y,gt=k.z):(Pe=0,nt=0,gt=0);const st=A.convert(U.format),Ct=A.convert(U.type);let _e;U.isData3DTexture?(v.setTexture3D(U,0),_e=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),_e=L.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),_e=L.TEXTURE_2D),re.activeTexture(L.TEXTURE0),re.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),re.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),re.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Gt=re.getParameter(L.UNPACK_ROW_LENGTH),Ke=re.getParameter(L.UNPACK_IMAGE_HEIGHT),Yt=re.getParameter(L.UNPACK_SKIP_PIXELS),an=re.getParameter(L.UNPACK_SKIP_ROWS),Ln=re.getParameter(L.UNPACK_SKIP_IMAGES);re.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),re.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),re.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);const fi=b.isDataArrayTexture||b.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const vt=T.get(b),In=T.get(U),lt=T.get(vt.__renderTarget),Dn=T.get(In.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,lt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let di=0;di<Me;di++)fi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(b).__webglTexture,W,Fe+di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(U).__webglTexture,ve,gt+di)),L.blitFramebuffer(Re,Ne,ye,ge,Pe,nt,ye,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||T.has(b)){const vt=T.get(b),In=T.get(U);re.bindFramebuffer(L.READ_FRAMEBUFFER,Hc),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rc);for(let lt=0;lt<Me;lt++)fi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.__webglTexture,W,Fe+lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vt.__webglTexture,W),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,In.__webglTexture,ve,gt+lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,In.__webglTexture,ve),W!==0?L.blitFramebuffer(Re,Ne,ye,ge,Pe,nt,ye,ge,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(_e,ve,Pe,nt,gt+lt,Re,Ne,ye,ge):L.copyTexSubImage2D(_e,ve,Pe,nt,Re,Ne,ye,ge);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(_e,ve,Pe,nt,gt,ye,ge,Me,st,Ct,ht.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,ve,Pe,nt,gt,ye,ge,Me,st,ht.data):L.texSubImage3D(_e,ve,Pe,nt,gt,ye,ge,Me,st,Ct,ht):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,Pe,nt,ye,ge,st,Ct,ht.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,Pe,nt,ht.width,ht.height,st,ht.data):L.texSubImage2D(L.TEXTURE_2D,ve,Pe,nt,ye,ge,st,Ct,ht);re.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),re.pixelStorei(L.UNPACK_SKIP_ROWS,an),re.pixelStorei(L.UNPACK_SKIP_IMAGES,Ln),ve===0&&U.generateMipmaps&&L.generateMipmap(_e),re.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&v.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?v.setTextureCube(b,0):b.isData3DTexture?v.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?v.setTexture2DArray(b,0):v.setTexture2D(b,0),re.unbindTexture()},this.resetState=function(){G=0,q=0,D=null,re.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}function Js(t,e,n=200,i={}){const s=i.mode||"portrait";let a;t instanceof HTMLCanvasElement?a=t:(a=document.createElement("canvas"),a.width=n,a.height=n,t.appendChild(a));const r=new Z0({canvas:a,antialias:!0,alpha:!0});r.setSize(a.width,a.height,!1);const f=new Lf,c=a.width/a.height,o=new $t(45,c,.1,100);o.position.set(0,1.2,3.5),o.lookAt(0,.8,0);const l=new jf(16777215,4473924,1.5);f.add(l);const u=new ed(16777215,1);u.position.set(2,5,3),f.add(u);let d="#f5c29d",h="#2c3e50",p="#2980b9",g="#16a085",m="#2d3436";function S(J,Y=.7){const j=parseInt(J.replace("#",""),16),ae=Math.max(0,Math.floor((j>>16&255)*Y)),x=Math.max(0,Math.floor((j>>8&255)*Y)),oe=Math.max(0,Math.floor((j&255)*Y));return`rgb(${ae},${x},${oe})`}function y(J,Y=1.3){const j=parseInt(J.replace("#",""),16),ae=Math.min(255,Math.floor((j>>16&255)*Y)),x=Math.min(255,Math.floor((j>>8&255)*Y)),oe=Math.min(255,Math.floor((j&255)*Y));return`rgb(${ae},${x},${oe})`}function R(J,Y,j){const x=document.createElement("canvas");x.width=16,x.height=16;const oe=x.getContext("2d");oe.fillStyle=J,oe.fillRect(0,0,16,16),oe.fillStyle="#ffffff",oe.fillRect(3,5,3,2),oe.fillRect(10,5,3,2),oe.fillStyle=j||"#4a6741",oe.fillRect(4,5,2,2),oe.fillRect(10,5,2,2),oe.fillStyle="#000000",oe.fillRect(5,5,1,1),oe.fillRect(11,5,1,1),oe.fillStyle=S(J,.82),oe.fillRect(7,8,2,1),oe.fillStyle=S(J,.6),oe.fillRect(5,10,6,1),oe.fillStyle="#c4785a",oe.fillRect(6,10,4,1);const A=new As(x);return A.magFilter=ft,A.minFilter=ft,A}function H(J,Y){const ae=document.createElement("canvas");ae.width=32,ae.height=32;const x=ae.getContext("2d");x.fillStyle=J,x.fillRect(0,0,32,32);const oe=S(J,.7),A=y(J,1.2);if(Y==="suspenders"){x.fillStyle=S(J,.85),x.fillRect(12,0,8,1);for(let z=0;z<4;z++)x.fillRect(13+z,z,1,1),x.fillRect(18-z,z,1,1);x.fillStyle="#c0392b",x.fillRect(6,0,3,32),x.fillRect(23,0,3,32),x.fillStyle="#e74c3c",x.fillRect(7,0,1,32),x.fillRect(24,0,1,32),x.fillStyle="#bdc3c7",x.fillRect(6,8,3,2),x.fillRect(23,8,3,2),x.fillStyle="#7f8c8d",x.fillRect(7,8,1,2),x.fillRect(24,8,1,2),x.fillStyle="#bdc3c7",x.fillRect(15,6,2,2),x.fillRect(15,12,2,2),x.fillRect(15,18,2,2),x.fillRect(15,24,2,2),x.fillStyle=oe,x.fillRect(16,7,1,1),x.fillRect(16,13,1,1),x.fillRect(16,19,1,1),x.fillRect(16,25,1,1)}else if(Y==="hoodie"){x.fillStyle=oe,x.fillRect(10,0,12,2),x.fillStyle=y(J,1.1),x.fillRect(11,0,10,1),x.fillStyle="#555555",x.fillRect(15,2,2,30),x.fillStyle="#888888";for(let z=3;z<30;z+=2)x.fillRect(15,z,1,1),x.fillRect(16,z+1,1,1);x.fillStyle="#aaaaaa",x.fillRect(14,3,1,2),x.fillStyle="#ffffff",x.fillRect(12,1,1,6),x.fillRect(19,1,1,6),x.fillStyle="#dddddd",x.fillRect(12,6,1,2),x.fillRect(19,6,1,2),x.fillStyle=oe,x.fillRect(5,20,22,1),x.fillRect(5,20,1,10),x.fillRect(26,20,1,10),x.fillRect(5,29,22,1),x.fillStyle="rgba(0,0,0,0.12)",x.fillRect(6,21,20,8)}else if(Y==="jacket"){x.fillStyle=oe;for(let z=5;z<32;z+=6)x.fillRect(0,z,32,1);x.fillStyle="#f1c40f",x.fillRect(15,0,2,32),x.fillStyle="#d4ac0d";for(let z=1;z<32;z+=2)x.fillRect(14,z,1,1),x.fillRect(17,z,1,1);x.fillStyle=S(J,.6),x.fillRect(9,0,14,3),x.fillStyle=A,x.fillRect(10,0,12,1),x.fillStyle=oe,x.fillRect(3,6,10,1),x.fillRect(3,6,1,8),x.fillRect(12,6,1,8),x.fillRect(3,13,10,1),x.fillStyle=S(J,.55),x.fillRect(3,6,10,2),x.fillStyle=oe,x.fillRect(19,6,10,1),x.fillRect(19,6,1,8),x.fillRect(28,6,1,8),x.fillRect(19,13,10,1),x.fillStyle=S(J,.55),x.fillRect(19,6,10,2)}else if(Y==="robe"){x.fillStyle="#f1c40f",x.fillRect(15,0,2,32),x.fillRect(8,0,16,2),x.fillStyle="#d4ac0d",x.fillRect(9,0,14,1),x.fillStyle="#f1c40f",x.fillRect(0,29,32,3),x.fillStyle="#d4ac0d",x.fillRect(0,30,32,1),x.fillStyle="#f1c40f",x.fillRect(0,14,32,3),x.fillStyle="#d4ac0d",x.fillRect(0,15,32,1),x.fillStyle="#e67e22";const z=16,pe=8;x.fillRect(z-1,pe-3,2,1),x.fillRect(z-2,pe-2,4,1),x.fillRect(z-3,pe-1,6,1),x.fillRect(z-3,pe,6,1),x.fillRect(z-2,pe+1,4,1),x.fillRect(z-1,pe+2,2,1),x.fillStyle="#f39c12",x.fillRect(5,5,1,1),x.fillRect(26,7,1,1),x.fillRect(8,22,1,1),x.fillRect(24,24,1,1)}const ee=new As(ae);return ee.magFilter=ft,ee.minFilter=ft,ee}let C=null,E="#4a6741";typeof e=="string"?p=e:e&&(d=e.skin||d,h=e.hair||h,p=e.shirt||p,g=e.pants||g,m=e.shoes||m,C=e.design||null,E=e.eyes||E);const w=new _t({color:d}),_=new _t({color:h}),M=new _t({color:p}),B=new _t({color:g}),P=new _t({color:m}),I=R(d,h,E),G=new _t({map:I}),q=H(p,C),D=new _t({map:q}),X=[],O=[w,_,M,B,P,G,D],ne=[I,q],ie=(J,Y)=>(X.push(J),new pt(J,Y));function ue(J){const j=document.createElement("canvas");j.width=32,j.height=32;const ae=j.getContext("2d");ae.fillStyle=J,ae.fillRect(0,0,32,32),ae.fillStyle=S(J,.85),ae.fillRect(13,12,6,8),ae.fillStyle=J,ae.fillRect(14,13,4,6),ae.fillStyle=S(J,.75),ae.fillRect(15,14,2,4);const x=new As(j);return x.magFilter=ft,x.minFilter=ft,x}function be(J,Y){const ae=document.createElement("canvas");ae.width=32,ae.height=32;const x=ae.getContext("2d");x.fillStyle=Y,x.fillRect(0,0,32,32),x.fillStyle=J,x.fillRect(0,0,32,24),x.fillStyle=S(J,.8);for(let A=2;A<22;A+=4)x.fillRect(0,A,32,1);x.fillStyle=S(J,.6),x.fillRect(4,22,24,2),x.fillRect(8,24,16,1);const oe=new As(ae);return oe.magFilter=ft,oe.minFilter=ft,oe}const Te=ue(d),ze=new _t({map:Te}),Ze=be(h,d),Ie=new _t({map:Ze});O.push(ze,Ie),ne.push(Te,Ze);const K=new Ft,he=new Ft,de=new Ht(.8,.8,.8),Le=ie(de,[ze,ze,w,w,G,Ie]);he.add(Le);const Ce=new Ht(.84,.3,.84),rt=ie(Ce,_);rt.position.y=.32,he.add(rt);const ke=new Ht(.84,.15,.1),Qe=ie(ke,_);Qe.position.set(0,.28,.4),he.add(Qe),he.position.set(0,1.9,0),K.add(he);const it=new Ht(1,1.5,.5),dt=ie(it,[M,M,M,M,D,D]);dt.position.y=.75,K.add(dt);const ot=J=>{const Y=new Ft,j=new Ht(.3,.5,.3),ae=ie(j,M);ae.position.y=-.25,Y.add(ae);const x=new Ht(.28,.5,.28),oe=ie(x,w);return oe.position.y=-.75,Y.add(oe),Y.position.set(J,1.3,0),{pivot:Y}},ct=ot(-.65),L=ot(.65);K.add(ct.pivot),K.add(L.pivot);const ut=J=>{const Y=new Ft,j=new Ht(.35,.9,.35),ae=ie(j,B);ae.position.y=-.45,Y.add(ae);const x=new Ht(.36,.3,.36),oe=ie(x,P);return oe.position.y=-1.05,Y.add(oe),Y.position.set(J,0,0),{pivot:Y}},we=ut(-.2),Ge=ut(.2);K.add(we.pivot),K.add(Ge.pivot),f.add(K);let re=null;const qe=new Ft;qe.position.set(0,-1,.2),qe.rotation.x=Math.PI/2,L.pivot.add(qe);const T=J=>{if(re&&(qe.remove(re),re=null),!!J){if(J==="scythe"||J==="hoe"||J==="sickle"){const Y=new Ft,j=new ti(.05,.05,1.4),ae=new _t({color:9127187}),x=new pt(j,ae);x.position.y=.2,Y.add(x);const oe=new Ht(.05,.4,.6),A=new _t({color:14540253}),ee=new pt(oe,A);ee.position.set(0,.8,-.2),Y.add(ee),re=Y,qe.add(re)}else if(J==="hammer"){const Y=new Ft,j=new ti(.05,.05,1),ae=new _t({color:9127187}),x=new pt(j,ae);x.position.y=.3,Y.add(x);const oe=new Ht(.4,.2,.2),A=new _t({color:7829367}),ee=new pt(oe,A);ee.position.set(0,.8,0),Y.add(ee),re=Y,qe.add(re)}else if(J==="sword"){const Y=new Ft,j=new ti(.04,.04,.4),ae=new _t({color:9127187}),x=new pt(j,ae);x.position.y=.2,Y.add(x);const oe=new Ht(.3,.05,.1),A=new _t({color:16766720}),ee=new pt(oe,A);ee.position.set(0,.4,0),Y.add(ee);const z=new Ht(.1,.8,.02),pe=new _t({color:15658734}),fe=new pt(z,pe);fe.position.set(0,.8,0),Y.add(fe),re=Y,qe.add(re)}else if(J==="pickaxe"){const Y=new Ft,j=new ti(.05,.05,1.2),ae=new _t({color:9127187}),x=new pt(j,ae);x.position.y=.3,Y.add(x);const oe=new Ht(.05,.1,.8),A=new _t({color:7829367}),ee=new pt(oe,A);ee.position.set(0,.8,0),Y.add(ee),re=Y,qe.add(re)}else if(J==="magic_device"||J==="wand"){const Y=new Ft,j=new ti(.05,.05,.8),ae=new _t({color:4473924}),x=new pt(j,ae);x.position.y=.2,Y.add(x);const oe=new Qr(.15),A=new _t({color:65535,emissive:35071}),ee=new pt(oe,A);ee.position.set(0,.6,0),Y.add(ee),re=Y,qe.add(re)}else if(J==="key"||J==="scanner"){const Y=new Ht(.15,.4,.15),j=new _t({color:16766720}),ae=new pt(Y,j);ae.position.y=.1,re=ae,qe.add(re)}}};let v,N=0,Z=!1,te=!0,le=null,ce=null,$=0,Q=!1;const me=()=>{if(N+=.05,s==="portrait"){K.rotation.y+=.005;const J=Math.sin(N)*.5;ct.pivot.rotation.x=J,L.pivot.rotation.x=-J,we.pivot.rotation.x=-J,Ge.pivot.rotation.x=J}else if(s==="static_portrait")K.rotation.y=Math.PI/6,ct.pivot.rotation.x=0,L.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.position.y=0,K.rotation.x=0;else{const J=ce&&$>0&&$<1;(Z||J)&&(Q=!0);let Y;Q?Y=te?Math.PI/2:-Math.PI/2:Y=0;const j=K.rotation.y;let ae=Y-j;for(;ae>Math.PI;)ae-=Math.PI*2;for(;ae<-Math.PI;)ae+=Math.PI*2;K.rotation.y+=ae*.15;const x=1-Math.abs(ae*.85)/(Math.PI/2);if(!Q)L.pivot.position.z=0,K.rotation.x=0,ct.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,L.pivot.rotation.x=-Math.PI*.55,L.pivot.rotation.z=Math.sin(N*2.5)*.35-.6;else if(x<.8)L.pivot.position.z=0,K.rotation.x=0,L.pivot.rotation.z=0,ct.pivot.rotation.x=0,L.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0;else if(J){const oe=$;if(ce==="swing"){const A=Math.sin(oe*Math.PI)*Math.PI*1.2;L.pivot.rotation.x=-A+Math.PI/4,ct.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.rotation.x=Math.sin(oe*Math.PI)*.2}else ce==="scan"?(L.pivot.rotation.x=-Math.PI/2,L.pivot.rotation.z=Math.sin(oe*Math.PI*4)*.3,ct.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.rotation.x=0):ce==="poke"?(L.pivot.rotation.x=-Math.PI/2,L.pivot.position.z=Math.sin(oe*Math.PI)*-.4,ct.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.rotation.x=0):(L.pivot.rotation.x=-Math.PI/4,ct.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.rotation.x=0)}else if(L.pivot.position.z=0,K.rotation.x=0,L.pivot.rotation.z=0,Z){const oe=Math.sin(N*3)*.8;ct.pivot.rotation.x=oe,L.pivot.rotation.x=-oe,we.pivot.rotation.x=-oe,Ge.pivot.rotation.x=oe;const A=Math.abs(Math.cos(N*3))*.15;K.position.y=A}else ct.pivot.rotation.x=0,L.pivot.rotation.x=0,we.pivot.rotation.x=0,Ge.pivot.rotation.x=0,K.position.y=0}r.render(f,o),v=requestAnimationFrame(me)};return me(),t&&(t._viewer={updateState:(J,Y,j,ae,x)=>{Z=J,te=Y,j!==le&&(le=j,T(j)),ce=ae,$=x||0},resetIdle:()=>{Q=!1}}),()=>{cancelAnimationFrame(v),t&&delete t._viewer,X.forEach(J=>J.dispose()),O.forEach(J=>J.dispose()),ne.forEach(J=>J.dispose()),r.dispose()}}function Bn(t,e,n,i,s){const a=t.createRadialGradient(e/2,n/2,e*.3,e/2,n/2,e*.8);a.addColorStop(0,i),a.addColorStop(1,s),t.fillStyle=a,t.fillRect(0,0,e,n)}function Q0(t,e,n,i,s){Bn(t,e,n,"#2b1d14","#0f0a06");const a=n*.65,r=e*.3,f=n*.25,c=Math.sin(i*.05)*.2+.8,o=t.createRadialGradient(r,f,0,r,f,100);o.addColorStop(0,`rgba(100, 200, 255, ${.4*c})`),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,e,n),t.fillStyle="#111",t.beginPath(),t.arc(r,f,40,0,Math.PI,!0),t.fill(),t.fillRect(r-40,f,80,50),t.fillStyle="rgba(100, 150, 255, 0.4)",t.beginPath(),t.arc(r,f,35,0,Math.PI,!0),t.fill(),t.fillRect(r-35,f,70,45),t.strokeStyle="#111",t.lineWidth=4,t.beginPath(),t.moveTo(r,f-35),t.lineTo(r,f+45),t.stroke(),t.beginPath(),t.moveTo(r-35,f+10),t.lineTo(r+35,f+10),t.stroke(),t.fillStyle="#1f130b",t.fillRect(e*.6,n*.1,120,a-n*.1);for(let p=0;p<5;p++){t.fillStyle="#110a05",t.fillRect(e*.6,n*.1+p*30,120,5);for(let g=0;g<8;g++)t.fillStyle=`hsl(${Math.random()*360}, 50%, 30%)`,t.fillRect(e*.62+g*13,n*.1+p*30-20,10,20)}t.fillStyle="#1c1005",t.fillRect(0,a,e,n-a),t.strokeStyle="#2b1d14",t.lineWidth=2;for(let p=0;p<10;p++)t.strokeRect(p*50,a+10,48,20),t.strokeRect(p*50-25,a+32,48,20);t.fillStyle="rgba(150, 200, 255, 0.6)";for(let p=0;p<20;p++){const g=(i*.02+p*40)%e,m=n*.8-(i*.01+p*20)%(n*.6);t.fillRect(g,m+Math.sin(i*.05+p)*5,2,2)}const l=e*.5;t.fillStyle="#3d2611",t.fillRect(l-45,n*.15,90,a-n*.15),t.strokeStyle="#1c1005",t.lineWidth=6,t.strokeRect(l-45,n*.15,90,a-n*.15);const u=t.createRadialGradient(l,a-20,0,l,a-20,50);if(u.addColorStop(0,"rgba(255, 200, 50, 0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(l-40,a-40,80,40),s&&s.stackData)for(let p=0;p<s.stackData.length;p++){const g=s.stackData[p],m=a-(p+1)*35-5;t.fillStyle="#5c5c5c",t.fillRect(l-25,m,50,30),t.fillStyle="#a0a0a0",t.fillRect(l-22,m+3,44,24),t.fillStyle="#0ff",t.shadowColor="#0ff",t.shadowBlur=10,t.font="bold 16px 'Cinzel', monospace",t.textAlign="center",t.fillText(String(g).replace("_Rune",""),l,m+22),t.shadowBlur=0}const d=e*.85,h=n*.35;t.fillStyle="#2b1d14",t.fillRect(d-15,h-15,90,160),t.fillStyle=s.isExitOpen?"#6ab04c":"#8b2a2a",t.fillRect(d,h,60,140),t.fillStyle="#daa520",t.fillRect(d-5,h-5,70,10),t.fillRect(d-5,h+135,70,10),t.beginPath(),t.arc(d+45,h+70,5,0,Math.PI*2),t.fill()}function em(t,e,n,i,s){Bn(t,e,n,"#1a1a2e","#05050f");const a=n*.65;t.strokeStyle="#11111a",t.lineWidth=3;for(let l=0;l<n;l+=30)for(let u=0;u<e;u+=60){let d=l/30%2===0?0:30;t.strokeRect(u-d,l,60,30)}[{x:e*.2,y:n*.3},{x:e*.8,y:n*.3}].forEach(l=>{t.fillStyle="#444",t.fillRect(l.x-5,l.y,10,20);const u=Math.sin(i*.2+l.x)*5;t.fillStyle="#ff6b6b",t.beginPath(),t.arc(l.x,l.y-10-u/2,10+u,0,Math.PI*2),t.fill(),t.fillStyle="#feca57",t.beginPath(),t.arc(l.x,l.y-5-u/2,6+u/2,0,Math.PI*2),t.fill();const d=t.createRadialGradient(l.x,l.y,0,l.x,l.y,60);d.addColorStop(0,"rgba(255, 100, 50, 0.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(l.x,l.y,60,0,Math.PI*2),t.fill()}),t.strokeStyle="#2d3436",t.lineWidth=3;for(let l=0;l<10;l++)t.beginPath(),t.ellipse(e*.35,l*15,6,10,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.ellipse(e*.65,l*15,6,10,0,0,Math.PI*2),t.stroke();t.fillStyle="#0f0f1a",t.fillRect(0,a,e,n-a),t.fillStyle="#22223b",t.fillRect(0,a,e,5);const f=e*.5;t.fillStyle="#4a4e69",t.fillRect(f-15,n*.2,30,a-n*.2),t.fillStyle="#9a8c98";for(let l=0;l<5;l++)t.fillRect(f-20,n*.3+l*30,40,10);if(t.fillStyle="#c9b037",t.fillRect(f-40,a-15,80,10),s&&s.stackData)for(let l=0;l<s.stackData.length;l++){const u=s.stackData[l],d=a-(l+1)*35-5,h=u.includes("Sun");t.fillStyle=h?"#e1b12c":"#273c75",t.fillRect(f-25,d,50,30),t.fillStyle=h?"#fbc531":"#192a56",t.fillRect(f-20,d+5,40,20),t.fillStyle=h?"#fff":"#00a8ff",t.beginPath(),t.arc(f,d+15,8,0,Math.PI*2),t.fill()}const c=e*.85,o=n*.35;t.fillStyle="#22223b",t.fillRect(c-15,o-15,90,160),t.fillStyle=s.isExitOpen?"#20bf6b":"#111",t.fillRect(c,o,60,140),t.strokeStyle="#4a4e69",t.lineWidth=4;for(let l=0;l<4;l++)t.beginPath(),t.moveTo(c+15*l,o),t.lineTo(c+15*l,o+140),t.stroke()}function tm(t,e,n,i,s){Bn(t,e,n,"#201624","#0d0810");const a=n*.65,r=e*.3;t.fillStyle="#2f3542",t.fillRect(r-40,n*.2,80,150);const f=t.createLinearGradient(0,n*.2,0,n*.2+150);f.addColorStop(0,"#10ac84"),f.addColorStop(1,"#013220"),t.fillStyle=f,t.fillRect(r-35,n*.25,70,140),t.fillStyle="#1dd1a1";for(let d=0;d<10;d++){const h=n*.25+140-(i*.05+d*20)%140;t.beginPath(),t.arc(r-25+d*5,h,3+d%3,0,Math.PI*2),t.fill()}const c=t.createRadialGradient(r,n*.4,0,r,n*.4,150);c.addColorStop(0,"rgba(29, 209, 161, 0.2)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,e,n),t.fillStyle="#161019",t.fillRect(0,a,e,n-a),t.fillStyle="#303952",t.fillRect(0,a,e,4);const o=e*.5;if(t.fillStyle="#111",t.fillRect(o-45,a-15,10,15),t.fillRect(o+35,a-15,10,15),t.fillStyle="#2f3542",t.beginPath(),t.arc(o,a-30,50,0,Math.PI),t.fill(),t.fillRect(o-50,a-50,100,20),t.fillStyle="#1e272e",t.beginPath(),t.arc(o,a-50,50,0,Math.PI,!0),t.fill(),s&&s.stackData)for(let d=0;d<s.stackData.length;d++){const h=s.stackData[d],p=a-60-d*35;let g="#2ed573",m="rgba(46, 213, 115, 0.4)";h.includes("Water")&&(g="#1e90ff",m="rgba(30, 144, 255, 0.4)"),h.includes("Poison")&&(g="#ff4757",m="rgba(255, 71, 87, 0.4)"),h.includes("Honey")&&(g="#ffa502",m="rgba(255, 165, 2, 0.4)"),t.fillStyle="rgba(255,255,255,0.2)",t.beginPath(),t.arc(o,p,15,0,Math.PI*2),t.fill(),t.fillStyle=g,t.beginPath(),t.arc(o,p+3,12,0,Math.PI),t.fill(),t.fillStyle="rgba(255,255,255,0.5)",t.fillRect(o-4,p-20,8,10);const S=t.createRadialGradient(o,p,0,o,p,30);S.addColorStop(0,m),S.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=S,t.beginPath(),t.arc(o,p,30,0,Math.PI*2),t.fill()}const l=e*.85,u=n*.35;t.fillStyle="#57606f",t.fillRect(l-15,u-15,90,160),t.fillStyle=s.isExitOpen?"#7bed9f":"#2f3542",t.fillRect(l,u,60,140),t.fillStyle="#1e272e",t.beginPath(),t.arc(l+30,u+70,20,0,Math.PI*2),t.fill()}function nm(t,e,n,i,s){Bn(t,e,n,"#0d1f14","#050a06");const a=n*.65;t.fillStyle="#140c08",t.fillRect(e*.2,0,40,n),t.fillRect(e*.75,0,60,n),t.fillStyle="#1f130b",t.fillRect(e*.25,0,10,n),t.fillRect(e*.75,0,15,n),[e*.25,e*.8].forEach(u=>{const d=Math.sin(i*.05+u)*2;t.fillStyle="#81ecec",t.beginPath(),t.arc(u,a-10,6+d/2,Math.PI,0),t.fill(),t.fillRect(u-2,a-10,4,10);const h=t.createRadialGradient(u,a-10,0,u,a-10,40);h.addColorStop(0,"rgba(129, 236, 236, 0.3)"),h.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=h,t.beginPath(),t.arc(u,a-10,40,0,Math.PI*2),t.fill()});const f=t.createLinearGradient(0,a,0,n);f.addColorStop(0,"rgba(85, 239, 196, 0.1)"),f.addColorStop(1,"rgba(0, 0, 0, 0.9)"),t.fillStyle=f,t.fillRect(0,a,e,n-a),t.fillStyle="#1e272e",t.fillRect(0,a,e*.35,n-a),t.fillRect(e*.65,a,e*.35,n-a),t.fillStyle="#006266",t.fillRect(0,a,e*.35,10),t.fillRect(e*.65,a,e*.35,10),t.fillStyle="rgba(0, 148, 50, 0.6)";for(let u=0;u<30;u++){const d=(i*.03+u*30)%e,h=(i*.04+u*20)%n;t.fillRect(d+Math.sin(i*.02+u)*10,h,4,3)}const c=e*.5;if(t.fillStyle="#2f3542",t.fillRect(c-35,n*.3,70,n),t.fillStyle="#57606f",t.fillRect(c-30,n*.3,60,n),s&&s.stackData)for(let u=0;u<s.stackData.length;u++){s.stackData[u];const d=a-(u+1)*20;t.fillStyle="#5c3a21",t.fillRect(c-55,d,110,18),t.fillStyle="#8b5a2b",t.fillRect(c-50,d+2,100,14),t.fillStyle="#bdc3c7",t.fillRect(c-45,d,4,18),t.fillRect(c+41,d,4,18)}const o=e*.85,l=n*.35;t.fillStyle="#1e272e",t.fillRect(o-10,l-10,80,150),t.fillStyle=s.isExitOpen?"#badc58":"#140c08",t.fillRect(o,l,60,140),s.isExitOpen||(t.strokeStyle="#006266",t.lineWidth=4,t.beginPath(),t.moveTo(o,l),t.lineTo(o+60,l+140),t.stroke(),t.beginPath(),t.moveTo(o+60,l),t.lineTo(o,l+140),t.stroke())}function im(t,e,n,i,s){Bn(t,e,n,"#2f3542","#121418");const a=n*.65;t.fillStyle="#57606f",t.fillRect(e*.2,n*.1,80,a-n*.1),t.fillRect(e*.7,n*.1,80,a-n*.1),t.beginPath(),t.arc(e*.5,n*.2,e*.4,Math.PI,0),t.fill(),t.fillStyle="#eb2f06";const r=Math.sin(i*.1)*5;t.beginPath(),t.moveTo(e*.25,n*.2),t.lineTo(e*.35,n*.2),t.lineTo(e*.35+r,a-40),t.lineTo(e*.3,a-60),t.lineTo(e*.25+r,a-40),t.fill(),t.fillStyle="rgba(116, 185, 255, 0.3)";for(let l=0;l<60;l++){const u=(i*.3+l*20)%e,d=(i*.8+l*30)%n;t.fillRect(u,d,2,10)}Math.random()>.98&&(t.fillStyle="rgba(255, 255, 255, 0.2)",t.fillRect(0,0,e,n)),t.fillStyle="#1e272e",t.fillRect(0,a,e,n-a),t.fillStyle="#0f1418",t.fillRect(0,a,e,10);const f=e*.5;if(t.fillStyle="#1e272e",t.fillRect(f-45,n*.1,90,a-n*.1),t.fillStyle="#2f3542",t.fillRect(f-35,n*.1,70,a-n*.1),s&&s.stackData)for(let l=0;l<s.stackData.length;l++){const u=s.stackData[l],d=a-(l+1)*45-10;t.fillStyle="#1e272e",t.fillRect(f-30,d,60,40),t.fillStyle="#747d8c",t.fillRect(f-26,d+4,52,32),t.fillStyle="#ff7f50",t.shadowColor="#ff7f50",t.shadowBlur=10,t.font="bold 20px monospace",t.textAlign="center";const h=String(u).split("_")[1]||u;t.fillText(h,f,d+28),t.shadowBlur=0}const c=e*.85,o=n*.35;t.fillStyle="#2f3542",t.fillRect(c-10,o-10,80,150),t.fillStyle=s.isExitOpen?"#f6e58d":"#111",t.fillRect(c,o,60,140)}function sm(t,e,n,i,s){Bn(t,e,n,"#1a0b12","#050002");const a=n*.65;t.fillStyle="#11050a",t.fillRect(e*.2,n*.1,50,a-n*.1),t.fillRect(e*.75,n*.1,50,a-n*.1);const r=e*.3,f=t.createRadialGradient(r,a,0,r,a,100);f.addColorStop(0,"rgba(232, 65, 24, 0.4)"),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.beginPath(),t.arc(r,a,100,0,Math.PI*2),t.fill(),t.fillStyle="#e84118",t.beginPath(),t.arc(r,a,30,Math.PI,0),t.fill(),t.fillStyle="rgba(255, 71, 87, 0.8)";for(let u=0;u<40;u++){const d=(i*.01+u*20)%e,h=a-(i*.05+u*15)%a;t.beginPath(),t.arc(d+Math.sin(i*.03+u)*20,h,1.5,0,Math.PI*2),t.fill()}t.fillStyle="#0a0306",t.fillRect(0,a,e,n-a),t.fillStyle="#c23616",t.fillRect(e*.4,a,e*.2,n-a);const c=e*.5;if(t.fillStyle="#2b1a20",t.fillRect(c-35,a-40,70,40),t.fillStyle="#11050a",t.fillRect(c-45,a-10,90,10),t.fillStyle="#e84118",t.beginPath(),t.arc(c,a-40,30,Math.PI,0),t.fill(),s&&s.stackData)for(let u=0;u<s.stackData.length;u++){const d=s.stackData[u],h=a-50-u*35,p=String(d).includes("Skull");t.shadowColor=p?"#f5f6fa":"#e84118",t.shadowBlur=15,p?(t.fillStyle="#f5f6fa",t.fillRect(c-15,h-15,30,24),t.fillStyle="#111",t.fillRect(c-8,h-5,6,6),t.fillRect(c+2,h-5,6,6)):(t.fillStyle="#2b1a20",t.beginPath(),t.arc(c,h-5,20,0,Math.PI*2),t.fill(),t.fillStyle="#e84118",t.font="bold 20px monospace",t.textAlign="center",t.fillText(String(d).replace("Rune_",""),c,h)),t.shadowBlur=0}const o=e*.85,l=n*.35;t.fillStyle="#11050a",t.fillRect(o-10,l-10,80,150),t.fillStyle=s.isExitOpen?"#e84118":"#2f3640",t.fillRect(o,l,60,140)}function am(t,e,n,i,s){Bn(t,e,n,"#2d3436","#121415");const a=n*.65;t.fillStyle="#5c3a21",t.fillRect(e*.15,n*.1,15,a-n*.1),t.fillRect(e*.85,n*.1,15,a-n*.1),t.fillRect(0,n*.15,e,15);const r=e*.25,f=n*.4;t.fillStyle="#00cec9",t.beginPath(),t.moveTo(r,f),t.lineTo(r+20,f-40),t.lineTo(r+40,f),t.fill();const c=t.createRadialGradient(r+20,f-20,0,r+20,f-20,80);c.addColorStop(0,"rgba(0, 206, 201, 0.4)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.beginPath(),t.arc(r+20,f-20,80,0,Math.PI*2),t.fill(),t.fillStyle="rgba(129, 236, 236, 0.8)";for(let d=0;d<30;d++){const h=(i*.02+d*25)%e,p=n*.8-(i*.015+d*15)%n;t.beginPath(),t.arc(h,p,1+Math.random(),0,Math.PI*2),t.fill()}t.fillStyle="#181b1c",t.fillRect(0,a,e,n-a),t.fillStyle="#636e72",t.fillRect(0,a+15,e,4),t.fillRect(0,a+35,e,4),t.fillStyle="#2d3436";for(let d=0;d<e;d+=40)t.fillRect(d,a+10,8,35);const o=e*.5;if(t.fillStyle="#2d3436",t.fillRect(o-40,n*.2,80,a-n*.2),t.fillStyle="#636e72",t.fillRect(o-35,n*.25,70,a-n*.25),t.fillStyle="#00cec9",t.shadowColor="#00cec9",t.shadowBlur=10,t.fillRect(o-15,n*.3,10,5),t.fillRect(o+5,n*.3,10,5),t.shadowBlur=0,s&&s.stackData)for(let d=0;d<s.stackData.length;d++){const h=s.stackData[d],p=a-(d+1)*35-5;t.fillStyle="#b2bec3",t.beginPath(),t.arc(o,p+15,16,0,Math.PI*2),t.fill(),t.fillStyle="#00cec9",t.font="bold 14px monospace",t.textAlign="center",t.fillText(String(h).split("_")[1]||h,o,p+20)}const l=e*.85,u=n*.35;t.fillStyle="#181b1c",t.beginPath(),t.arc(l+30,u+40,40,Math.PI,0),t.fill(),t.fillRect(l-10,u+40,80,110),t.fillStyle=s.isExitOpen?"#00cec9":"#111",t.fillRect(l,u+40,60,100)}function rm(t,e,n,i,s){Bn(t,e,n,"#3a240c","#140c02");const a=n*.65;t.fillStyle="#6c5ce7",t.fillRect(0,0,e,n*.2),t.beginPath(),t.arc(e*.2,n*.2,50,Math.PI,0),t.fill(),t.beginPath(),t.arc(e*.8,n*.2,50,Math.PI,0),t.fill();const r=(l,u,d)=>{t.fillStyle="#f1c40f",t.beginPath(),t.arc(l,u,d,Math.PI,0),t.fill(),t.fillStyle="#f39c12";for(let h=0;h<d;h+=5)t.fillRect(l-d/2+Math.random()*d,u-Math.random()*d,3,3)};r(e*.2,a,60),r(e*.8,a,80),r(e*.35,a,40),t.fillStyle="#ffeaa7";for(let l=0;l<25;l++){const u=(i*.01+l*35)%e,d=n*.9-(i*.02+l*20)%(n*.7);t.beginPath(),t.arc(u,d,1.5,0,Math.PI*2),t.fill()}t.fillStyle="#170f05",t.fillRect(0,a,e,n-a),t.fillStyle="#2c1e0b";for(let l=0;l<e;l+=40)t.fillRect(l,a,20,n-a);const f=e*.5;if(t.fillStyle="#f1c40f",t.fillRect(f-10,n*.2,20,a-n*.2),t.fillStyle="#d35400",t.fillRect(f-60,n*.3,120,8),s&&s.stackData)for(let l=0;l<s.stackData.length;l++){const u=s.stackData[l],d=a-(l+1)*28-5;t.fillStyle="#8b5a2b",t.fillRect(f-30,d,60,24),t.fillStyle="#f1c40f",t.fillRect(f-30,d+4,60,4),t.fillRect(f-6,d+8,12,10),t.fillStyle="#111",t.font="bold 12px monospace",t.textAlign="center",t.fillText(String(u).split("_")[1]||u,f,d+18)}const c=e*.85,o=n*.35;t.fillStyle="#d35400",t.fillRect(c-15,o-15,90,160),t.fillStyle=s.isExitOpen?"#f1c40f":"#8e44ad",t.fillRect(c,o,60,140)}function om(t,e,n,i,s){Bn(t,e,n,"#2c3e50","#131e29");const a=n*.65;t.globalCompositeOperation="screen";for(let o=0;o<3;o++){const l=Math.sin(i*.02+o)*30,u=t.createLinearGradient(0,n*.1,0,n*.4);u.addColorStop(0,`rgba(29, 209, 161, ${.3-o*.1})`),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.moveTo(0,n*.3+l),t.quadraticCurveTo(e/2,n*.1-l,e,n*.3+l),t.lineTo(e,0),t.lineTo(0,0),t.fill()}t.globalCompositeOperation="source-over",t.fillStyle="#34495e",t.beginPath(),t.moveTo(0,a),t.lineTo(e*.3,n*.2),t.lineTo(e*.6,a),t.fill(),t.fillStyle="#ecf0f1",t.beginPath(),t.moveTo(e*.3,n*.2),t.lineTo(e*.2,n*.35),t.lineTo(e*.4,n*.35),t.fill(),t.fillStyle="rgba(255, 255, 255, 0.8)";for(let o=0;o<80;o++){const l=(i*.05+o*15)%e,u=(i*.1+o*25)%n;t.beginPath(),t.arc(l+Math.sin(i*.02+o)*10,u,1.5+o%2,0,Math.PI*2),t.fill()}t.fillStyle="#ecf0f1",t.fillRect(0,a,e,n-a),t.fillStyle="#bdc3c7",t.fillRect(0,a+10,e,n-a);const r=e*.5;if(t.fillStyle="#535c68",t.fillRect(r-25,n*.15,50,a-n*.15),t.fillStyle="#95a5a6",t.fillRect(r-22,n*.15,10,a-n*.15),s&&s.stackData)for(let o=0;o<s.stackData.length;o++){const l=s.stackData[o],u=a-(o+1)*35-5,d=String(l).includes("76"),h=d?"#ff4757":"#7ed6df",p=d?"rgba(255, 71, 87, 0.5)":"rgba(126, 214, 223, 0.5)";t.fillStyle=h,t.shadowColor=h,t.shadowBlur=15,t.beginPath(),t.moveTo(r,u),t.lineTo(r+15,u+15),t.lineTo(r,u+30),t.lineTo(r-15,u+15),t.fill(),t.shadowBlur=0;const g=t.createRadialGradient(r,u+15,0,r,u+15,40);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=g,t.beginPath(),t.arc(r,u+15,40,0,Math.PI*2),t.fill()}const f=e*.85,c=n*.35;t.fillStyle="#2c3e50",t.beginPath(),t.arc(f+30,c+40,40,Math.PI,0),t.fill(),t.fillRect(f-10,c+40,80,110),t.fillStyle=s.isExitOpen?"#7ed6df":"#111",t.fillRect(f,c+40,60,100)}function Tt(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function rs(t,e,n,i,s){const a=t.createRadialGradient(e/2,n/2,e*.3,e/2,n/2,e*.8);a.addColorStop(0,i),a.addColorStop(1,s),t.fillStyle=a,t.fillRect(0,0,e,n)}function _l(t,e,n,i,s){const a=n*.65;t.fillStyle="#87CEEB",t.fillRect(0,0,e,a),t.fillStyle="rgba(255, 255, 255, 0.8)";for(let o=0;o<4;o++){const l=(i*.2+o*200)%(e+100)-50,u=n*.15+o%2*40;t.beginPath(),t.arc(l,u,30,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(l+25,u-10,40,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(l+50,u,30,0,Math.PI*2),t.fill()}t.fillStyle="#FFD700",t.beginPath(),t.arc(e*.85,n*.15,40,0,Math.PI*2),t.fill(),t.globalAlpha=.3+Math.sin(i*.05)*.1,t.beginPath(),t.arc(e*.85,n*.15,60,0,Math.PI*2),t.fill(),t.globalAlpha=1;const r=(o,l,u)=>{t.fillStyle="#4B3621",t.fillRect(o-10*u,l,20*u,40*u),t.fillStyle="#0f5132",t.beginPath(),t.moveTo(o-50*u,l+10*u),t.lineTo(o,l-60*u),t.lineTo(o+50*u,l+10*u),t.fill(),t.beginPath(),t.moveTo(o-40*u,l-30*u),t.lineTo(o,l-90*u),t.lineTo(o+40*u,l-30*u),t.fill(),t.beginPath(),t.moveTo(o-30*u,l-70*u),t.lineTo(o,l-120*u),t.lineTo(o+30*u,l-70*u),t.fill()};r(e*.2,a-40,1.2),r(e*.35,a-40,.8),r(e*.75,a-40,1.5),r(e*.9,a-40,1),t.fillStyle="#2d6a4f",t.fillRect(0,a-60,e,60),t.fillStyle="#1b4332";for(let o=0;o<e;o+=40)t.beginPath(),t.arc(o+20,a-60,25,0,Math.PI*2),t.fill();for(let o=0;o<e;o+=30){const l=o+Math.sin(o*123)*10,u=a-50+Math.cos(o*321)*20;t.fillStyle=o%3===0?"#ffb703":o%2===0?"#ff4d6d":"#ffffff",t.beginPath();for(let d=0;d<5;d++)t.arc(l+Math.cos(d*Math.PI*2/5)*4,u+Math.sin(d*Math.PI*2/5)*4,4,0,Math.PI*2);t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(l,u,2,0,Math.PI*2),t.fill()}s.platforms=[],s.charHomeYNorm=.65,t.fillStyle="#8B4513",t.fillRect(0,a,e,n-a),t.fillStyle="#5C4033";for(let o=0;o<n-a;o+=20)t.fillRect(0,a+o,e,5);t.fillStyle="#8B5A2B",t.fillRect(0,a-40,e,10),t.fillRect(0,a-20,e,10);for(let o=0;o<=e;o+=80)t.fillRect(o,a-60,15,60);const f=e*.85,c=a-120;t.fillStyle="#5C4033",t.fillRect(f-10,c-10,80,140),t.fillStyle=s.isExitOpen?"#7CFC00":"#3E2723",t.fillRect(f,c,60,130),t.fillStyle="#111",t.beginPath(),t.arc(f+15,c+65,5,0,Math.PI*2),t.fill()}function lm(t,e,n,i,s){const a=t.createLinearGradient(0,0,0,n*.5);a.addColorStop(0,"#FF7E5F"),a.addColorStop(1,"#FEB47B"),t.fillStyle=a,t.fillRect(0,0,e,n*.5);const r=n*.85,f=(h,p,g)=>{t.fillStyle="#5C4033",t.fillRect(h-15*g,p-100*g,30*g,100*g),t.fillStyle="#228B22",t.beginPath(),t.arc(h,p-120*g,60*g,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(h-40*g,p-90*g,50*g,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(h+40*g,p-90*g,50*g,0,Math.PI*2),t.fill()};f(e*.25,r,1.2),f(e*.55,r,1.4),t.fillStyle="#32CD32",t.fillRect(0,r,e,n-r),t.fillStyle="#228B22";for(let h=0;h<e;h+=30)t.fillRect(h,r,5,Tt(h)*15+5);const c=e*.7,o=r-40;t.fillStyle="#8B4513",t.fillRect(c,o,80,30),t.beginPath(),t.arc(c+20,o+30,15,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(c+60,o+30,15,0,Math.PI*2),t.fill(),t.fillStyle="#D2691E",t.beginPath(),t.arc(c+20,o+30,10,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(c+60,o+30,10,0,Math.PI*2),t.fill();const l=(h,p,g)=>{const m=h*e,S=p*n,y=g*e;t.fillStyle="#5C4033",t.fillRect(m,S,y,10),t.fillStyle="#228B22",t.fillRect(m-5,S-5,y+10,5)};s.platforms=[{x:.15,y:.65,w:.15,h:.05},{x:.45,y:.55,w:.15,h:.05}],s.charHomeYNorm=.85,s.platforms.forEach(h=>l(h.x,h.y,h.w));const u=e*.85,d=r-120;t.fillStyle="#8B5A2B",t.fillRect(u-10,d-10,80,140),t.fillStyle=s.isExitOpen?"#98FB98":"#A0522D",t.fillRect(u,d,60,130)}function cm(t,e,n,i,s){rs(t,e,n,"#708090","#2F4F4F");const a=n*.65;s._platformsInitialized||(s.platforms=s.relics.map(o=>({x:o.x/100-.05,y:o.y/100,w:.1,h:.05})),s._platformsInitialized=!0),s.charHomeYNorm=.65,t.fillStyle="#535c68";for(let o=0;o<5;o++)t.beginPath(),t.moveTo(0,n*.5+o*20),t.lineTo(e*.3,n*.2+o*40),t.lineTo(e*.7,n*.3+o*10),t.lineTo(e,n*.4+o*30),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.fillStyle=o%2===0?"#636e72":"#2d3436";s.platforms.forEach((o,l)=>{const u=o.x*e,d=o.y*n,h=o.w*e;t.fillStyle="#7F8C8D",t.fillRect(u,d,h,a-d),t.fillStyle="#95A5A6",t.fillRect(u+5,d,10,a-d),t.fillStyle="#2C3E50",t.fillRect(u+h-15,d,15,a-d),t.fillStyle="#BDC3C7",t.fillRect(u-5,d,h+10,15),t.fillStyle="#7F8C8D",t.fillRect(u-5,d+15,h+10,5)});const r=e*.75;t.fillStyle="#5C4033",t.fillRect(r,n*.1,15,a-n*.1),t.fillRect(r-60,n*.1,80,10),t.strokeStyle="#BDC3C7",t.lineWidth=2,t.beginPath(),t.moveTo(r-50,n*.1),t.lineTo(r-50,a-50),t.stroke(),t.fillStyle="#7F8C8D",t.fillRect(r-65,a-50,30,20),t.strokeStyle="#34495e",t.lineWidth=3;for(let o=0;o<4;o++){const l=e*.2+o*(e*.2),u=Math.sin(i*.02+o)*15;t.beginPath(),t.moveTo(l,0);for(let d=0;d<150;d+=10){const h=l+u*(d/150);t.lineTo(h,d),t.strokeRect(h-2,d,4,8)}t.stroke()}t.fillStyle="rgba(236, 240, 241, 0.2)";for(let o=0;o<40;o++){const l=(i*.5+o*30+Math.sin(i*.01+o)*20)%e,u=a-(i*.4+o*20)%a,d=5+o%10+Math.sin(i*.05+o)*5;t.beginPath(),t.arc(l,u,d,0,Math.PI*2),t.fill()}t.fillStyle="#2d3436",t.fillRect(0,a,e,n-a),t.strokeStyle=`rgba(255, 69, 0, ${.6+Math.sin(i*.05)*.4})`,t.lineWidth=2;for(let o=0;o<15;o++){const l=Tt(o*3+1)*e,u=a+Tt(o*3+2)*(n-a);t.beginPath(),t.moveTo(l,u),t.lineTo(l+20,u+10),t.lineTo(l+50,u+5),t.stroke()}t.fillStyle="#636e72";for(let o=0;o<100;o++){const l=Tt(o*3+1)*e,u=a+Tt(o*3+2)*(n-a),d=Tt(o*3+3)*10+5;t.fillRect(l,u,d,4)}const f=e*.85,c=a-140;t.fillStyle="#2F3542",t.beginPath(),t.arc(f+30,c,40,Math.PI,0),t.fill(),t.fillRect(f-10,c,80,150),t.fillStyle=s.isExitOpen?"#F1C40F":"#111",t.fillRect(f,c,60,140),t.strokeStyle="#747D8C",t.lineWidth=4;for(let o=0;o<4;o++)t.beginPath(),t.moveTo(f+15*o,c),t.lineTo(f+15*o,c+140),t.stroke()}function fm(t,e,n,i,s){t.fillStyle="#E0F7FA",t.fillRect(0,0,e,n*.5);const a=[[255,0,0],[255,127,0],[255,255,0],[0,255,0],[0,0,255],[75,0,130],[148,0,211]];for(let l=0;l<a.length;l++){const u=.2+Math.sin(i*.05+l)*.05;t.strokeStyle=`rgba(${a[l][0]}, ${a[l][1]}, ${a[l][2]}, ${u})`,t.lineWidth=15,t.beginPath(),t.arc(e*.5,n*.65,300-l*15,Math.PI,0),t.stroke()}const r=n*.65;s.platforms=[],s.charHomeYNorm=.65,t.fillStyle="#228B22",t.fillRect(0,r-60,e,60),t.fillStyle="#006400";for(let l=0;l<e;l+=40)t.beginPath(),t.arc(l,r-60,25,Math.PI,0),t.fill();const f=[e*.2,e*.8];t.fillStyle="#BDC3C7",f.forEach(l=>{t.fillRect(l,r-10,6,10),t.fillStyle="rgba(0, 191, 255, 0.4)";const u=Math.sin(i*.1)*.5;t.beginPath(),t.moveTo(l+3,r-10),t.lineTo(l+3-30*Math.cos(u),r-40-30*Math.sin(u)),t.lineTo(l+3+30*Math.cos(u),r-40-30*Math.sin(u)),t.fill(),t.fillStyle="#BDC3C7"}),t.fillStyle="#7F8C8D",t.fillRect(0,r,e,n-r),t.strokeStyle="#95A5A6",t.lineWidth=3;for(let l=0;l<e;l+=50)for(let u=r;u<n;u+=30)t.strokeRect(l+(u%60===0?25:0),u,50,30);const c=e*.85,o=r-140;t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(c-10,o-10,80,150),t.strokeStyle="#2ECC71",t.lineWidth=4,t.strokeRect(c-10,o-10,80,150),t.fillStyle=s.isExitOpen?"#FF69B4":"rgba(0,0,0,0.5)",t.fillRect(c,o,60,140)}function dm(t,e,n,i,s){rs(t,e,n,"#1a0b2e","#05010f"),t.fillStyle="rgba(0, 255, 255, 0.4)";for(let d=0;d<50;d++){const h=Tt(d)*e,p=(Tt(d+100)*n+i*(.2+Tt(d)*.5))%n,g=Tt(d+200)*3;t.beginPath(),t.arc(h,n-p,g,0,Math.PI*2),t.fill()}const a=n*.7;s.platforms=[{x:.15,y:.4,w:.1,h:.3},{x:.35,y:.6,w:.1,h:.1},{x:.55,y:.4,w:.1,h:.3},{x:.75,y:.6,w:.1,h:.1}],s.charHomeYNorm=.7,s.platforms.forEach((d,h)=>{const p=d.x*e,g=d.y*n,m=d.w*e,S=d.h*n,y=t.createLinearGradient(p,g,p,g+S);y.addColorStop(0,"#4a235a"),y.addColorStop(1,"#11051f"),t.fillStyle=y,t.fillRect(p,g,m,S),t.fillStyle="rgba(0, 255, 255, 0.3)",t.fillRect(p-5,g,m+10,10),t.fillStyle="#0ff",t.font='16px "Press Start 2P", monospace',t.textAlign="center",t.globalAlpha=.5+Math.sin(i*.05+h)*.3;const R=["Δ","Φ","Ψ","Ω"];t.fillText(R[h],p+m/2,g+S/2+5),t.globalAlpha=1});const r=e*.5,f=n*.35;t.save(),t.translate(r,f+60),t.rotate(i*.02),t.strokeStyle="rgba(138, 43, 226, 0.8)",t.lineWidth=15,t.beginPath(),t.arc(0,0,140,0,Math.PI*2),t.stroke(),t.rotate(-i*.04),t.strokeStyle="rgba(0, 255, 255, 0.5)",t.lineWidth=5,t.setLineDash([20,15]),t.beginPath(),t.arc(0,0,160,0,Math.PI*2),t.stroke(),t.restore(),t.strokeStyle="#2c1044",t.lineWidth=30,t.setLineDash([]),t.beginPath(),t.arc(r,f+60,140,Math.PI,0),t.stroke(),t.strokeStyle="#b8860b",t.lineWidth=4,t.beginPath(),t.arc(r,f+60,125,Math.PI,0),t.stroke(),t.beginPath(),t.arc(r,f+60,155,Math.PI,0),t.stroke();const c=Math.sin(i*.1)*15,o=t.createRadialGradient(r,f+60,0,r,f+60,120+c);o.addColorStop(0,"rgba(0, 255, 255, 0.9)"),o.addColorStop(.3,"rgba(138, 43, 226, 0.7)"),o.addColorStop(.8,"rgba(75, 0, 130, 0.4)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.beginPath(),t.arc(r,f+60,125,Math.PI,0),t.fill(),t.save(),t.translate(r,f+60),t.rotate(i*.05),t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=2;for(let d=0;d<8;d++)t.rotate(Math.PI/4),t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(50,50,100+Math.sin(i*.1)*20,0),t.stroke();if(t.restore(),i%200<20){const d=i*15%(e+500)-200,h=n*.1+i*5%100,p=t.createLinearGradient(d,h,d-100,h-50);p.addColorStop(0,"#FFF"),p.addColorStop(1,"rgba(0,255,255,0)"),t.strokeStyle=p,t.lineWidth=3,t.beginPath(),t.moveTo(d,h),t.lineTo(d-100,h-50),t.stroke(),t.fillStyle="#FFF",t.beginPath(),t.arc(d,h,3,0,Math.PI*2),t.fill()}t.fillStyle="#0ff",t.shadowColor="#0ff",t.shadowBlur=20,t.font='bold 36px "Press Start 2P", monospace',t.textAlign="center",t.fillText("TARGET: 10",r,f-110+Math.sin(i*.1)*8),t.shadowBlur=0,t.fillStyle="#0d041a",t.fillRect(0,a,e,n-a),t.save(),t.translate(r,a+60),t.scale(1,.3),t.rotate(i*.01),t.strokeStyle="#0ff",t.lineWidth=4,t.globalAlpha=.4+Math.sin(i*.05)*.2,t.beginPath(),t.arc(0,0,250,0,Math.PI*2),t.stroke(),t.beginPath();for(let d=0;d<5;d++){const h=Math.PI*2/5*d*2,p=Math.cos(h)*250,g=Math.sin(h)*250;d===0?t.moveTo(p,g):t.lineTo(p,g)}t.closePath(),t.stroke(),t.beginPath(),t.arc(0,0,150,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(0,0,80,0,Math.PI*2),t.stroke(),t.restore();const l=e*.85,u=a-140;if(t.fillStyle="#111",t.fillRect(l-10,u-10,80,160),t.strokeStyle="#b8860b",t.lineWidth=4,t.strokeRect(l-10,u-10,80,160),s.isExitOpen){const d=t.createLinearGradient(l,u,l,u+140);d.addColorStop(0,"#0ff"),d.addColorStop(1,"#fff"),t.fillStyle=d,t.shadowColor="#0ff",t.shadowBlur=20,t.fillRect(l,u,60,140),t.shadowBlur=0}else t.fillStyle="#222",t.fillRect(l,u,60,140),t.fillStyle="#666",t.fillRect(l+20,u+60,20,20),t.beginPath(),t.arc(l+30,u+60,10,Math.PI,0),t.strokeStyle="#666",t.lineWidth=4,t.stroke()}function um(t,e,n,i,s){rs(t,e,n,"#4a2511","#1a0d06");const a=n*.65;s.platforms=[{x:.1,y:.5,w:.15,h:.05},{x:.35,y:.4,w:.15,h:.05}],s.charHomeYNorm=.65,t.fillStyle="#b8860b";for(let l=0;l<=e;l+=150)t.fillRect(l,0,40,a),t.fillStyle="#daa520",t.fillRect(l+5,0,10,a),t.fillRect(l+25,0,10,a),t.fillStyle="#b8860b",t.fillRect(l-10,0,60,20),t.fillRect(l-10,a-20,60,20);t.fillStyle="#2c1e0b",t.fillRect(0,a,e,n-a),t.fillStyle="#f1c40f",t.fillRect(0,a+5,e,2);for(let l=0;l<e;l+=60)t.fillRect(l,a,2,n-a);const r=3*150,f=i*1.5%(e+r)-r;t.fillStyle="rgba(255, 215, 0, 0.15)",t.fillRect(f,a-80,r,80),t.strokeStyle="#FFD700",t.lineWidth=4,t.strokeRect(f,a-80,r,80);const c=e*.85,o=a-140;t.fillStyle="#8B4513",t.fillRect(c-10,o-10,80,160),t.fillStyle=s.isExitOpen?"#FFF":"#FFD700",t.fillRect(c,o,60,150),t.fillStyle="#111",t.beginPath(),t.arc(c+10,o+75,8,0,Math.PI*2),t.fill()}function hm(t,e,n,i,s){const a=t.createLinearGradient(0,0,e,n);a.addColorStop(0,"#0a0b10"),a.addColorStop(.3,`rgba(0, 255, 128, ${.1+Math.sin(i*.02)*.05})`),a.addColorStop(.7,`rgba(0, 128, 255, ${.1+Math.cos(i*.015)*.05})`),a.addColorStop(1,"#535c68"),t.fillStyle=a,t.fillRect(0,0,e,n),t.beginPath();for(let h=0;h<e;h+=20){const p=n*.2+Math.sin(i*.01+h*.01)*50+Math.cos(i*.005+h*.02)*30;h===0?t.moveTo(h,p):t.lineTo(h,p)}t.strokeStyle="rgba(0, 255, 200, 0.3)",t.lineWidth=40,t.stroke();const r=n*.65;s._platformsInitialized||(s.platforms=s.relics.map(h=>({x:h.x/100-.04,y:h.y/100,w:.08,h:.05})),s._platformsInitialized=!0),s.charHomeYNorm=.65,s.platforms.forEach((h,p)=>{const g=h.x*e,m=h.y*n,S=h.w*e,y=t.createLinearGradient(g,m,g,r);y.addColorStop(0,"rgba(223, 249, 251, 0.8)"),y.addColorStop(1,"rgba(149, 165, 166, 0.4)"),t.fillStyle=y,t.fillRect(g,m,S,r-m),t.strokeStyle="#ecf0f1",t.lineWidth=2,t.strokeRect(g,m,S,r-m),t.fillStyle="rgba(255, 255, 255, 0.5)",t.fillRect(g+5,m+5,5,r-m-10)});const f=e*.5,c=n*.35,o=Math.sin(i*.05)*5+5;t.fillStyle=`rgba(189, 195, 199, ${.5+Math.sin(i*.05)*.2})`,t.beginPath(),t.ellipse(f,c,220+o,120+o,0,0,Math.PI*2),t.fill(),t.fillStyle="#bdc3c7",t.beginPath(),t.ellipse(f,c,220,120,0,0,Math.PI*2),t.fill(),t.fillStyle="#ecf0f1",t.beginPath(),t.ellipse(f,c,200,100,0,0,Math.PI*2),t.fill();const l=t.createLinearGradient(f-200,c-100,f+200,c+100);l.addColorStop(0,"rgba(255,255,255,0.8)"),l.addColorStop(.5,"rgba(129, 236, 236, 0.3)"),l.addColorStop(1,"rgba(255,255,255,0.1)"),t.fillStyle=l,t.beginPath(),t.ellipse(f,c,200,100,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0, 0, 0, 0.2)",t.font="bold 60px monospace",t.textAlign="center",t.save(),t.translate(f,c+20),t.scale(-1,1),t.fillText("RADAR",0,0),t.restore(),t.fillStyle="rgba(255, 255, 255, 0.7)";for(let h=0;h<15;h++){const p=(i*.5+h*50)%e,g=n*.2+Math.sin(i*.02+h)*50;t.save(),t.translate(p+5,g+5),t.rotate(i*.01+h),t.beginPath(),t.moveTo(-5,-5),t.lineTo(5,0),t.lineTo(0,10),t.fill(),t.restore()}t.fillStyle="#95a5a6",t.fillRect(0,r,e,n-r),t.fillStyle="rgba(223, 249, 251, 0.5)",t.fillRect(0,r,e,Math.sin(i*.05)*10+20),t.fillStyle="rgba(255, 255, 255, 0.2)";for(let h=0;h<5;h++){const g=(i*2+h*300)%(e+100)-100;t.fillRect(g,r,100,n-r)}const u=e*.85,d=r-140;t.fillStyle="#7f8fa6",t.beginPath(),t.moveTo(u-10,d+150),t.lineTo(u+30,d-30),t.lineTo(u+70,d+150),t.fill(),t.fillStyle=s.isExitOpen?"#00a8ff":"#353b48",t.beginPath(),t.moveTo(u,d+150),t.lineTo(u+30,d),t.lineTo(u+60,d+150),t.fill()}function pm(t,e,n,i,s){const a=t.createLinearGradient(0,0,0,n*.65);a.addColorStop(0,"#87CEEB"),a.addColorStop(1,"#E0F7FA"),t.fillStyle=a,t.fillRect(0,0,e,n);const r=n*.65;t.save(),t.globalCompositeOperation="screen";for(let u=0;u<5;u++){const d=(i*.01+u*.5)%Math.PI,h=t.createLinearGradient(e*.5,0,e*.5+Math.cos(d)*e,Math.sin(d)*n);h.addColorStop(0,"rgba(255, 255, 200, 0.3)"),h.addColorStop(1,"rgba(255, 255, 200, 0)"),t.fillStyle=h,t.beginPath(),t.moveTo(e*.5,-50),t.lineTo(e*.5+Math.cos(d-.2)*e*1.5,Math.sin(d-.2)*n*1.5),t.lineTo(e*.5+Math.cos(d+.2)*e*1.5,Math.sin(d+.2)*n*1.5),t.fill()}t.restore(),s._platformsInitialized||(s.platforms=s.relics.map(u=>({x:u.x/100-.06,y:u.y/100,w:.12,h:.05})),s._platformsInitialized=!0),s.charHomeYNorm=.65,s.platforms.forEach((u,d)=>{const h=u.x*e,p=u.y*n,g=u.w*e,m=p+Math.sin(i*.05+d)*5,S=t.createRadialGradient(h+g/2,m+5,0,h+g/2,m+5,g);S.addColorStop(0,"rgba(255, 215, 0, 0.4)"),S.addColorStop(1,"rgba(255, 215, 0, 0)"),t.fillStyle=S,t.beginPath(),t.ellipse(h+g/2,m+5,g,15,0,0,Math.PI*2),t.fill(),t.strokeStyle="#FFD700",t.lineWidth=4,t.beginPath(),t.ellipse(h+g/2,m,g/2,10,0,0,Math.PI*2),t.stroke(),t.strokeStyle="#FFF",t.lineWidth=2,t.beginPath(),t.ellipse(h+g/2,m,g/2-4,8,0,0,Math.PI*2),t.stroke()});const f="LISTENSILENT".split("");t.font="bold 32px monospace";for(let u=0;u<f.length;u++){const d=(i*.4+u*(e/f.length)+Math.sin(i*.02+u)*60)%e,h=n-(i*.6+u*70)%n;t.save(),t.translate(d,h),t.rotate(i*.02+u),t.fillStyle=`rgba(255, 215, 0, ${.5+Math.sin(i*.05+u)*.4})`,t.fillText(f[u],0,0),t.restore()}const c=e*.5;if(t.fillStyle="#ECF0F1",t.beginPath(),t.moveTo(c-80,n*.2),t.lineTo(c+80,n*.2),t.lineTo(c+40,r),t.lineTo(c-40,r),t.fill(),t.fillStyle="#FFD700",t.fillRect(c-60,n*.25,120,40),t.fillStyle="#2C3E50",t.textAlign="center",t.font="bold 16px monospace",s.collectedRelics&&s.collectedRelics.size===2){t.fillText("MATCH FOUND!",c,n*.25+25);const u="LISTEN".split(""),d="SILENT".split(""),h="EILNST".split(""),p=i%300/300;t.font="bold 36px monospace";let g=u,m=d,S=!1;p>.4&&p<.8?(g=h,m=h):p>=.8&&(g=h,m=h,S=!0);const y=25,R=c-g.length*y/2+10,H=c-m.length*y/2+10;for(let C=0;C<g.length;C++){t.fillStyle=S?"#2ECC71":"#34495E";const E=n*.15-(S?Math.sin(i*.2+C)*5:0);t.fillText(g[C],R+C*y,E),t.fillStyle=S?"#2ECC71":"#7F8C8D";const w=n*.15-40+(S?Math.sin(i*.2+C)*5:0);t.fillText(m[C],H+C*y,w)}S&&(t.fillStyle="rgba(46, 204, 113, 0.4)",t.beginPath(),t.ellipse(c,n*.15-20,100,40,0,0,Math.PI*2),t.fill())}else t.fillText("ANAGRAM MATCH",c,n*.25+25);s.platforms.length===2&&(t.strokeStyle=`rgba(255, 215, 0, ${.3+Math.sin(i*.1)*.2})`,t.lineWidth=4,t.beginPath(),t.moveTo(s.platforms[0].x*e+s.platforms[0].w*e/2,s.platforms[0].y*n),t.lineTo(c-40,n*.25+20),t.stroke(),t.beginPath(),t.moveTo(s.platforms[1].x*e+s.platforms[1].w*e/2,s.platforms[1].y*n),t.lineTo(c+40,n*.25+20),t.stroke()),t.fillStyle="#FDFEFE",t.fillRect(0,r,e,n-r),t.fillStyle="#E5E8E8";for(let u=0;u<e;u+=60)for(let d=r;d<n;d+=40)t.strokeRect(u,d,60,40);const o=e*.85,l=r-140;t.fillStyle="#BDC3C7",t.beginPath(),t.arc(o+30,l,40,Math.PI,0),t.fill(),t.fillRect(o-10,l,80,150),t.fillStyle=s.isExitOpen?"#F1C40F":"#7F8C8D",t.beginPath(),t.arc(o+30,l+10,30,Math.PI,0),t.fill(),t.fillRect(o,l+10,60,140)}function mm(t,e,n,i,s){rs(t,e,n,"#3e2723","#1b0000");const a=n*.65;s._platformsInitialized||(s.platforms=s.relics.map(h=>({x:h.x/100-.05,y:h.y/100,w:.1,h:.05})),s._platformsInitialized=!0),s.charHomeYNorm=.65,s.platforms.forEach((h,p)=>{const g=h.x*e,m=h.y*n,S=h.w*e;t.fillStyle="#3E2723",t.fillRect(g,m,S,a-m),t.fillStyle="#2d1e11",t.fillRect(g+5,m,S-10,a-m),t.fillStyle="#4E342E";for(let y=m+20;y<a;y+=25){t.fillRect(g,y,S,5);for(let R=g+5;R<g+S-15;R+=10+Tt(R)*5)Tt(y+R)>.3&&(t.fillStyle=`hsl(${Tt(R)*360}, 50%, 40%)`,t.fillRect(R,y-15,8+Tt(R)*5,15))}t.fillStyle="#5D4037",t.fillRect(g-5,m,S+10,10)}),t.fillStyle="#2d1e11",t.fillRect(e*.1,n*.1,150,a-n*.1),t.fillRect(e*.7,n*.1,150,a-n*.1),t.fillStyle="#1a0d05";for(let h=n*.2;h<a;h+=30)t.fillRect(e*.1,h,150,5),t.fillRect(e*.7,h,150,5);for(let h=0;h<50;h++){const p=e*.1+Tt(h*4+300)*130,g=n*.2+Math.floor(Tt(h*4+301)*5)*30-20,m=Tt(h*4+302)*360,S=10+Tt(h*4+303)*10;t.fillStyle=`hsl(${m}, 50%, 30%)`,t.fillRect(p,g,S,20)}const r=.5+Math.sin(i*.05)*.1,f=t.createLinearGradient(e*.2,0,e*.4,a);f.addColorStop(0,`rgba(255, 235, 180, ${r*.4})`),f.addColorStop(1,"rgba(255, 235, 180, 0)"),t.fillStyle=f,t.beginPath(),t.moveTo(e*.1,0),t.lineTo(e*.3,0),t.lineTo(e*.5,a),t.lineTo(e*.3,a),t.fill();const c=t.createLinearGradient(e*.8,0,e*.6,a);c.addColorStop(0,`rgba(255, 235, 180, ${r*.3})`),c.addColorStop(1,"rgba(255, 235, 180, 0)"),t.fillStyle=c,t.beginPath(),t.moveTo(e*.7,0),t.lineTo(e*.9,0),t.lineTo(e*.7,a),t.lineTo(e*.5,a),t.fill(),t.fillStyle="rgba(255, 240, 200, 0.6)";for(let h=0;h<30;h++){const p=(i*.2+h*40)%e,g=n*.1+(i*.1+h*20)%(a-n*.1);t.fillRect(p+Math.sin(i*.02+h)*10,g,2,2)}const o=e*.5,l=.7+Math.random()*.3;t.fillStyle=`rgba(255, 82, 82, ${l})`,t.beginPath(),t.arc(o,n*.2,30,0,Math.PI*2),t.fill(),t.fillStyle="#b71c1c",t.beginPath(),t.moveTo(o-60,n*.2),t.lineTo(o+60,n*.2),t.lineTo(o+20,a),t.lineTo(o-20,a),t.fill(),t.fillStyle="#ff5252",t.fillRect(o-50,n*.2,100,10),t.fillStyle="#fff";for(let h=0;h<5;h++){const p=n*.2+(i+h*40)%150,g=o-20+Math.sin(p*.05)*10;p<a&&t.fillRect(g,p,10,15)}t.fillStyle="#212121",t.fillRect(0,a,e,n-a),t.fillStyle="#c62828",t.fillRect(e*.2,a,e*.6,n-a),t.fillStyle="#ffc107",t.fillRect(e*.2-5,a,5,n-a),t.fillRect(e*.8,a,5,n-a);const u=e*.85,d=a-140;t.fillStyle="#3e2723",t.beginPath(),t.arc(u+30,d,40,Math.PI,0),t.fill(),t.fillRect(u-10,d,80,150),t.fillStyle=s.isExitOpen?"#ffeb3b":"#111",t.fillRect(u,d,60,140)}function Sm(t,e,n,i,s){rs(t,e,n,"#192a56","#090a0f");const a=n*.65;s._platformsInitialized||(s.platforms=s.relics.map(d=>({x:d.x/100-.05,y:d.y/100,w:.1,h:.05})),s._platformsInitialized=!0),s.charHomeYNorm=.65,s.platforms.forEach((d,h)=>{const p=d.x*e,g=d.y*n,m=d.w*e,S=Math.sin(i*.1+h)*.5+.5,y=.5+S*.5,R=t.createLinearGradient(p,g,p+m,a);R.addColorStop(0,`rgba(142, 68, 173, ${y})`),R.addColorStop(1,"#2c3e50"),t.fillStyle=R,t.beginPath(),t.moveTo(p,g),t.lineTo(p+m,g),t.lineTo(p+m+15,a),t.lineTo(p-15,a),t.closePath(),t.fill(),t.fillStyle=`rgba(155, 89, 182, ${.4+S*.4})`,t.beginPath(),t.moveTo(p+m*.2,g),t.lineTo(p+m*.5,g),t.lineTo(p+m*.5+5,a),t.lineTo(p+m*.2-5,a),t.fill(),t.fillStyle="#9b59b6",t.fillRect(p-2,g,m+4,10),t.fillStyle="#ecf0f1",t.fillRect(p+m*.8,g+2,4,4);const H=t.createRadialGradient(p+m/2,g,0,p+m/2,g,m*1.5);H.addColorStop(0,`rgba(155, 89, 182, ${.3*S})`),H.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=H,t.beginPath(),t.arc(p+m/2,g,m*1.5,0,Math.PI*2),t.fill()}),t.fillStyle="#273c75";for(let d=0;d<20;d++){const h=d*(e/20)+Tt(d+400)*20,p=Tt(d+401)*100+50;t.beginPath(),t.moveTo(h,0),t.lineTo(h+15,p),t.lineTo(h+30,0),t.fill()}const r="ABCABCBB";t.font="bold 30px monospace";const f=e*.2;for(let d=0;d<r.length;d++){const h=r[d],p=d<3;t.fillStyle=p?`rgba(156, 136, 255, ${.5+Math.sin(i*.1)*.5})`:"rgba(113, 128, 147, 0.5)",t.fillText(h,f+d*50,n*.4)}t.fillStyle="#141e30",t.fillRect(0,a,e,n-a);const c=t.createLinearGradient(0,a,0,n);c.addColorStop(0,"rgba(0, 168, 255, 0.4)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=c,t.fillRect(e*.2,a+20,e*.6,n-a-20),t.strokeStyle="rgba(0, 255, 255, 0.3)",t.lineWidth=2;for(let d=0;d<4;d++){const h=a+30+d*20,p=e*.5+Math.sin(i*.05+d)*50,g=e*.3+Math.sin(i*.02+d)*100;t.beginPath(),t.ellipse(p,h,g,5,0,0,Math.PI*2),t.stroke()}for(let d=0;d<30;d++){const h=(i*.4+d*40+Math.sin(i*.02+d)*20)%e,p=n-(i*.5+d*30)%(n-n*.4),g=.3+Math.sin(i*.1+d)*.5;t.fillStyle=`rgba(0, 255, 255, ${g})`,t.beginPath(),t.arc(h,p,2+d%2*2,0,Math.PI*2),t.fill()}[e*.1,e*.9].forEach(d=>{t.fillStyle="#00a8ff",t.beginPath(),t.arc(d,a-10,10,Math.PI,0),t.fill(),t.fillStyle="#353b48",t.fillRect(d-3,a-10,6,15)});const l=e*.85,u=a-140;t.fillStyle="#273c75",t.beginPath(),t.arc(l+30,u+40,40,Math.PI,0),t.fill(),t.fillRect(l-10,u+40,80,110),t.fillStyle=s.isExitOpen?"#00a8ff":"#111",t.fillRect(l,u+40,60,100)}const xi={farmer:{S:"#f4c29f",H:"#8b5a2b",O:"#3b2f2f",B:"#3c6e47",P:"#5c4033",E:"#ffffff",D:"#000000"},alchemist:{S:"#f4c29f",H:"#4b0082",O:"#222222",B:"#800080",P:"#4b0082",E:"#ffffff",D:"#000000"},explorer:{S:"#d2a679",H:"#000000",O:"#5c4033",B:"#b8860b",P:"#8b4513",E:"#ffffff",D:"#000000"},ranger:{S:"#f4c29f",H:"#228b22",O:"#2e8b57",B:"#006400",P:"#000000",E:"#ffffff",D:"#000000"},apple:{R:"#ff0000",G:"#008000",D:"#8b0000",S:"#8b4513"},potion:{B:"#4169e1",G:"#aaccff",C:"#8b4513",W:"#ffffff"},scroll:{P:"#f5deb3",R:"#8b0000",D:"#d2b48c",L:"#000000"},leaf:{G:"#228b22",L:"#32cd32",D:"#006400",S:"#000000"},wheat:{Y:"#facc15",O:"#ca8a04",G:"#65a30d",D:"#854d0e"},corn:{Y:"#fef08a",G:"#22c55e",D:"#166534",O:"#eab308"},carrot:{O:"#f97316",G:"#22c55e",D:"#ea580c",L:"#16a34a"},crystal:{C:"#4488ff",L:"#88bbff",D:"#2255aa",G:"#aaddff",W:"#ffffff"},pedestal:{T:"#5a6a7a",M:"#4a5a6a",D:"#3a4a5a",B:"#2a3a4a",H:"#6a7a8a"},sickle:{S:"#c0c0c0",W:"#8b4513"},sword:{S:"#d3d3d3",G:"#ffd700",B:"#8b4513"},scanner:{G:"#808080",L:"#00ffff",B:"#333333"},key:{G:"#ffd700",B:"#b8860b"},hammer:{S:"#a0a0a0",W:"#8b4513"},magic_device:{P:"#ff00ff",B:"#333333",G:"#00ff00"}},Ut={character:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSPPPPPPPPPPPPPPPPPSSS   ","       SSOOOOOOOOOOOOOOOOOS     ","         OOOOOOOOOOOOOOOOOO     ","         OOOOOOOOOOOOOOOOOO     ","          OOOOOOOOOOOOOOOO      "],characterWalk1:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSOOOOOOOOOOOOOOOOOSSS   ","       SSOOOOOOOOOOOOOOOO       ","         OOOOOOOOOOOOOOOO       ","         OOOOOOOOOOOOOOOO       ","          OOOOOOOOOOOOOO        "],characterWalk2:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSOOOOOOOOOOOOOOOOOSSS   ","       SSOOOOOOOOOOOOOOOO       ","         OOOOOOOOOOOOOOOO       ","         OOOOOOOOOOOOOOOO       "],char_leo:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   LLLLSSSSSSSSSHHHHHHHHHHLLL   ","  LLLLLLSSSSSSSSLLLLLLLLLLLLLL  "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSSSSSGGGGGGGGGGGGGGGGGGSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSPPPPPPPPPPPPPPPPPSSS   ","       SSPPPPPPPPPPPPPPPPP      ","         PPPPPPPPPPPPPPPPPP     ","         PPPPPPPPPPPPPPPPPP     ","          TTTTTTTTTTTTTTTT      ","          BBBBBBBBBBBBBBBB      ","           BBBBBB  BBBBBB       "],char_leoWalk1:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   LLLLSSSSSSSSSHHHHHHHHHHLLL   ","  LLLLLLSSSSSSSSLLLLLLLLLLLLLL  "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSSSSSGGGGGGGGGGGGGGGGGGSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSPPPPPPPPPPPPPPPPPSSS   ","       SSPPPPPPPPPPPPPPPPP      ","         PPPPPP      PPPPPP     ","        PPPPPP        PPPPPP    ","       TTTTTT          TTTTTT   ","      BBBBBB            BBBBBB  ","      BBBBB              BBBBB  "],char_leoWalk2:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   LLLLSSSSSSSSSHHHHHHHHHHLLL   ","  LLLLLLSSSSSSSSLLLLLLLLLLLLLL  "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," GGGGGGGGGSSSSSGGGGGGGGGGGGGGGG "," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSLLLLGGGGGGGGGGGGGGGGLLLLSSSS"," SSSSSSSGGGGGGGGGGGGGGGGGGSSSSSS"," SSSSSSSPPPPPPPPPPPPPPPPPPSSSSSS","  SSSSSSSPPPPPPPPPPPPPPPPPSSSSS ","   SSSSSSPPPPPPPPPPPPPPPPPSSSS  ","     SSSSPPPPPPPPPPPPPPPPPSSS   ","       SSPPPPPPPPPPPPPPPPP      ","         PPPPPP      PPPPPP     ","          PPPPPP    PPPPPP      ","           TTTTTT  TTTTTT       ","           BBBBBB  BBBBBB       ","            BBBB    BBBB        "],char_alex:["             H   H  H           ","            HHHHHHHHH           ","           HHHHHHHHHHH          ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   RRRRSSSSSSSSSHHHHHHHHHHRRR   ","  RRRRRRSSSSSSSSRRRRRRRRRRRRRR  "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSSSSSRRRRRRRRRRRRRRRRRRSSSSSS"," SSSSSSSJJJJJJJJJJJJJJJJJJSSSSSS","  SSSSSSJJJJJJJJJJJJJJJJJJSSSSS ","   SSSSSJJJJJJJJJJJJJJJJJJSSSS  ","     SSSJJJJJYYYYYYJJJJJJJSSS   ","       SSJJJJYYYYYYJJJJJJJ      ","         JJJJJJJJJJJJJJJJJJ     ","         JJJJJJJJJJJJJJJJJJ     ","          YYYYYYYYYYYYYYYY      ","          BBBBBBBBBBBBBBBB      ","           BBBBBB  BBBBBB       "],char_alexWalk1:["             H   H  H           ","            HHHHHHHHH           ","           HHHHHHHHHHH          ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   RRRRSSSSSSSSSHHHHHHHHHHRRR   ","  RRRRRRSSSSSSSSRRRRRRRRRRRRRR  "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSSSSSRRRRRRRRRRRRRRRRRRSSSSSS"," SSSSSSSJJJJJJJJJJJJJJJJJJSSSSSS","  SSSSSSJJJJJJJJJJJJJJJJJJSSSSS ","   SSSSSJJJJJJJJJJJJJJJJJJSSSS  ","     SSSJJJJJYYYYYYJJJJJJJSSS   ","       SSJJJJYYYYYYJJJJJJJ      ","         JJJJJJ      JJJJJJ     ","        JJJJJJ        JJJJJJ    ","       YYYYYY          YYYYYY   ","      BBBBBB            BBBBBB  ","      BBBBB              BBBBB  "],char_alexWalk2:["             H   H  H           ","            HHHHHHHHH           ","           HHHHHHHHHHH          ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   RRRRSSSSSSSSSHHHHHHHHHHRRR   ","  RRRRRRSSSSSSSSRRRRRRRRRRRRRR  "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," RRRRRRRRWWWWSSSRRRRRRRRRRRRRRR "," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSWWWWRRRRRRRRRRRRRRRRWWWWSSSS"," SSSSSSSRRRRRRRRRRRRRRRRRRSSSSSS"," SSSSSSSJJJJJJJJJJJJJJJJJJSSSSSS","  SSSSSSJJJJJJJJJJJJJJJJJJSSSSS ","   SSSSSJJJJJJJJJJJJJJJJJJSSSS  ","     SSSJJJJJYYYYYYJJJJJJJSSS   ","       SSJJJJYYYYYYJJJJJJJ      ","         JJJJJJ      JJJJJJ     ","          JJJJJJ    JJJJJJ      ","           YYYYYY  YYYYYY       ","           BBBBBB  BBBBBB       ","            BBBB    BBBB        "],char_maya:["             YYYYYY             ","           YYYYYYYYYY           ","         YYYYYYYYYYYYYY         ","       YYYYYYYYYYYYYYYYHH       ","     YYYYYYYYYYYYYYYYHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSOOOOOOOOOOOOOOOOOOSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS","  SSSSSSKKKKKKKKKKKKKKKKKKSSSSS ","   SSSSSHHHHHHHHHHHHHHHHHHSSSS  ","     SSSHHHHHHHHHHHHHHHHHHSSS   ","       SSKKKKKKKKKKKKKKKKK      ","         KKKKKKKKKKKKKKKK       ","         KKKKKKKKKKKKKKKK       ","          TTTTTTTTTTTTTT        ","          TTTTTTTTTTTTTT        ","           TTTTTT  TTTTTT       "],char_mayaWalk1:["             YYYYYY             ","           YYYYYYYYYY           ","         YYYYYYYYYYYYYY         ","       YYYYYYYYYYYYYYYYHH       ","     YYYYYYYYYYYYYYYYHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSOOOOOOOOOOOOOOOOOOSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS","  SSSSSSKKKKKKKKKKKKKKKKKKSSSSS ","   SSSSSHHHHHHHHHHHHHHHHHHSSSS  ","     SSSHHHHHHHHHHHHHHHHHHSSS   ","       SSKKKKKKKKKKKKKKKKK      ","         KKKKKK      KKKKKK     ","        KKKKKK        KKKKKK    ","       TTTTTT          TTTTTT   ","      TTTTTT            TTTTTT  ","      TTTTT              TTTTT  "],char_mayaWalk2:["             YYYYYY             ","           YYYYYYYYYY           ","         YYYYYYYYYYYYYY         ","       YYYYYYYYYYYYYYYYHH       ","     YYYYYYYYYYYYYYYYHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   BBBBSSSSSSSSSHHHHHHHHHHBBB   ","  BBBBBBSSSSSSSSBBBBBBBBBBBBBB  "," BBBBBBBBSSSSSSSBBBBBBBBBBBBBBB "," BBBBBBBBBSSSSSBBBBBBBBBBBBBBBB "," SSSSSSSOOOOOOOOOOOOOOOOOOSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS"," SSSSSSSKKKKKKKKKKKKKKKKKKSSSSSS","  SSSSSSKKKKKKKKKKKKKKKKKKSSSSS ","   SSSSSHHHHHHHHHHHHHHHHHHSSSS  ","     SSSHHHHHHHHHHHHHHHHHHSSS   ","       SSKKKKKKKKKKKKKKKKK      ","         KKKKKK      KKKKKK     ","          KKKKKK    KKKKKK      ","           TTTTTT  TTTTTT       ","           TTTTTT  TTTTTT       ","            TTTT    TTTT        "],char_anya:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   WWWWSSSSSSSSSHHHHHHHHHHWWW   ","  WWWWWWSSSSSSSSWWWWWWWWWWWWWW  "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS","  SSSSSSSBBBBBBBBBBBBBBBBBBSSSSS ","   SSSSSSBBBBBBBBBBBBBBBBBSSSS  ","     SSSSBBBBBBBBBBBBBBBBBSSS   ","       SSBBBBBBBBBBBBBBBBB      ","         BBBBBBBBBBBBBBBBBB     ","         BBBBBBBBBBBBBBBBBB     ","          TTTTTTTTTTTTTTTT      ","          TTTTTTTTTTTTTTTT      ","           TTTTTT  TTTTTT       "],char_anyaWalk1:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   WWWWSSSSSSSSSHHHHHHHHHHWWW   ","  WWWWWWSSSSSSSSWWWWWWWWWWWWWW  "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS","  SSSSSSSBBBBBBBBBBBBBBBBBBSSSSS ","   SSSSSSBBBBBBBBBBBBBBBBBSSSS  ","     SSSSBBBBBBBBBBBBBBBBBSSS   ","       SSBBBBBBBBBBBBBBBBB      ","         BBBBBB      BBBBBB     ","        BBBBBB        BBBBBB    ","       TTTTTT          TTTTTT   ","      TTTTTT            TTTTTT  ","      TTTTT              TTTTT  "],char_anyaWalk2:["               HH               ","             HHHHHH             ","           HHHHHHHHHH           ","         HHHHHHHHHHHHHH         ","       HHHHHHHHHHHHHHHHHH       ","     HHHHHHHHHHHHHHHHHHHHHH     ","    HHHHHHHHHHHHHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SEESSSSSSSSSHHHHHHHHHHHH    ","    SDDSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","    SSSSSSSSSSSSHHHHHHHHHHHH    ","     SSSSSSSSSSSHHHHHHHHHHH     ","   WWWWSSSSSSSSSHHHHHHHHHHWWW   ","  WWWWWWSSSSSSSSWWWWWWWWWWWWWW  "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," WWWWWWWWRRRRSSSWWWWWWWWWWWWWWW "," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSWWWWWWWWWWWWWWWWWWSSSSSS"," SSSSSSSBBBBBBBBBBBBBBBBBBSSSSSS","  SSSSSSSBBBBBBBBBBBBBBBBBBSSSSS ","   SSSSSSBBBBBBBBBBBBBBBBBSSSS  ","     SSSSBBBBBBBBBBBBBBBBBSSS   ","       SSBBBBBBBBBBBBBBBBB      ","         BBBBBB      BBBBBB     ","          BBBBBB    BBBBBB      ","           TTTTTT  TTTTTT       ","           TTTTTT  TTTTTT       ","            TTTT    TTTT        "],characterLighting:["               XX               ","             XXWWXX             ","           XXWWWWWWXX           ","         XXWWWWWWWWWWXX         ","       XXWWWWWWWWWWWWWWXX       ","     XXWWWWWWWWWWWWWWWWWWXX     ","    XWWWWWWWWWWWWWWWWWWWWWWX    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","     X         X@@@@@@@@@@X     ","   X X X       X@@@@@@@@ X  X X ","  X W X XX     X@@@@@  XX  X @ X"," X W W X  XX   X@@@  XX   X @ @ "," XW W W X   XX X@  XX     X@ @ @"," X      X    XX  XX       X    @"," X      X      XX         X    @"," X      X      XX         X    @"," X      X      X@@@@@@@@@@X    @","  X      X     X@@@@@@@@@@X   @ ","   X     X     X@@@@@@@@@@X  @  ","     X   X     X@@@@@@@@@@X @   ","       X X     X@@@@@@@@@@X     ","         X     X@@@@@@@@@@X     ","         X     X@@@@@@@@@@X     ","          XX    XXXXXX    XX    "],characterWalk1Lighting:["               XX               ","             XXWWXX             ","           XXWWWWWWXX           ","         XXWWWWWWWWWWXX         ","       XXWWWWWWWWWWWWWWXX       ","     XXWWWWWWWWWWWWWWWWWWXX     ","    XWWWWWWWWWWWWWWWWWWWWWWX    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","     X         X@@@@@@@@@@X     ","   X X X       X@@@@@@@@ X  X X ","  X W X XX     X@@@@@  XX  X @ X"," X W W X  XX   X@@@  XX   X @ @ "," XW W W X   XX X@  XX     X@ @ @"," X      X    XX  XX       X    @"," X      X      XX         X    @"," X      X      XX         X    @"," X      X      X@@@@@@@@@@X    @","  X      X     X@@@@@@@@@@X   @ ","   X     X     X@@@@@@@@@@X  @  ","     X   X      XXXX@@@@@@X @   ","       X X          X@@@@@X     ","         X           X@@@@X     ","         X           X@@@@X     ","          XX          XXXX      "],characterWalk2Lighting:["               XX               ","             XXWWXX             ","           XXWWWWWWXX           ","         XXWWWWWWWWWWXX         ","       XXWWWWWWWWWWWWWWXX       ","     XXWWWWWWWWWWWWWWWWWWXX     ","    XWWWWWWWWWWWWWWWWWWWWWWX    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","    X           X@@@@@@@@@@X    ","     X         X@@@@@@@@@@X     ","   X X X       X@@@@@@@@ X  X X ","  X W X XX     X@@@@@  XX  X @ X"," X W W X  XX   X@@@  XX   X @ @ "," XW W W X   XX X@  XX     X@ @ @"," X      X    XX  XX       X    @"," X      X      XX         X    @"," X      X      XX         X    @"," X      X      X@@@@@@@@@@X    @","  X      X     X@@@@@@@@@@X   @ ","   X     X     X@@@@@@@@@@X  @  ","     X   X@@@@@@X  XXXXXXX  @   ","       X X@@@@@X        X       ","         X@@@@X         X       ","         X@@@@X         X       ","          XXXX           XX     "],relics:{apple:["                ","       SS       ","      S G       ","     RRRRR      ","    RRRRRRR     ","   RRRRRRRRR    ","   RRRRRRRRR    ","   DDRRRRRDD    ","   DDRRRRRDD    ","    DDRRRDD     ","     DDRDD      ","                ","                ","                ","                ","                "],potion:["                ","      CCCC      ","      CCCC      ","      WWWW      ","      WWWW      ","     WWBWWW     ","    WWBGGBWW    ","   WWBGGGGBWW   ","   WBBBBBGBBW   ","  WWBBBBBBBBWW  ","  WBBBBBBBBBBW  ","  WWBBBBBBBBWW  ","   WWBBBBBBWW   ","    WWWWWWWW    ","                ","                "],scroll:["                ","     RRRRRR     ","   PPRRRRRRPP   ","  PPPPPPPPPPPP  ","  PPPPLLLLPPPP  ","  PPPLLLLLLPPP  ","  PPPLLLLLLPPP  ","  PPPPLLLLPPPP  ","  PPPPPPPPPPPP  ","   PPRRRRRRPP   ","     RRRRRR     ","                ","                ","                ","                ","                "],leaf:["                ","        L       ","       LLG      ","      LLLGG     ","      LLGGGG    ","     LLLGGGGG   ","    LLLLGDGGGG  ","   LLLLGDDGGGG  ","   LLLGDDGGGGG  ","    LGGDDGGGG   ","     GGDDGGG    ","      GDDGG     ","       DSG      ","      S         ","                ","                "],wheat:["                ","     OYO Y      ","    YYOYYYO     ","    OYO YOY     ","     Y YYY      ","    OYO YOY     ","     Y YYY      ","    OYO YOY     ","     Y YYY      ","      G G       ","     G G G      ","      G G       ","       G        ","       G        ","       G        ","                "],corn:["                ","      G G       ","     G Y G      ","    G YOY G     ","    G YYY G     ","    G YOY G     ","    G YYY G     ","    D YOY D     ","    D YYY D     ","    D G G D     ","     D G D      ","      DGD       ","       D        ","       D        ","       D        ","                "],carrot:["                ","                ","      L L       ","       G        ","      LGL       ","       G        ","      OOO       ","     OOOOO      ","     ODODO      ","     OOOOO      ","      ODO       ","      OOO       ","       O        ","       O        ","                ","                "]},crystal:["      WW      ","     GLLG     ","    GLLLLG    ","   CLLLLLLC   ","  CCLLLLLLCC  ","  CCLLWLLLCC  ","   CCLLLLCC   ","    CCLLCC    ","     CCCC     ","      DD      "],pedestal:["  HHHHHHHHHH  "," HTTTTTTTTTH  "," TMMMMMMMMMT  ","TMMMMMMMMMMT  ","TDDDDDDDDDT  ","BBBBBBBBBBBB  "],tools:{sickle:["  SSS "," S  S "," S    ","  S W ","    W ","    W "],sword:["  S  "," SSS "," SSS ","  S  "," G G ","  B  ","  B  "],scanner:[" GGG ","GLLG "," GGG ","  B  ","  B  "],key:[" GG  ","G  G "," GG  ","  G  "," GG  ","  G  "," GG  "],hammer:["SSSS ","SSSS "," WW  "," WW  "," WW  "],magic_device:[" PP  ","P  P "," PP  "," BB  ","GBBG "," BB  "]}};function ri(t,e,n,i,s,a=4){for(let r=0;r<i.length;r++)for(let f=0;f<i[r].length;f++){const c=i[r][f];c!==" "&&s[c]&&(t.fillStyle=s[c],t.fillRect(e+f*a,n+r*a,a,a))}}const yl={island:{arrays:{base:"#5a9e3e",mid:"#7bc25e",top:"#9ee080",outline:"#3a6e28",water:"#2b7ab8"},stacks:{base:"#b8860b",mid:"#daa520",top:"#ffd700",outline:"#8b6508",accent:"#ff8c00"},linked:{base:"#c89440",mid:"#e0b060",top:"#f0cc80",outline:"#8a6428",sand:"#f0e0b0"},locked:{base:"#8898a8",mid:"#a8b8c8",top:"#c8d8e8",outline:"#607080",cloud:"#e0e8f0"},trees:{base:"#1a6e3a",mid:"#2a8e4e",top:"#3aae68",outline:"#0a4e2a",bark:"#5c3d1e"}}};function gm(t){let e={skinColor:"#f5c29d",shirtColor:"#bdc3c7",pantsColor:"#7f8c8d",sleeveColor:"#bdc3c7",shoeColor:"#34495e",eyeColor:"#2c3e50",hairColor:"#34495e"};return t==="anya"?e={skinColor:"#8d5524",shirtColor:"#1e272e",pantsColor:"#2f3640",sleeveColor:"#1e272e",shoeColor:"#111111",eyeColor:"#e74c3c",hairColor:"#8e44ad",hat:"crown",vest:"#c0392b"}:t==="leo"?e={skinColor:"#f5c29d",shirtColor:"#306e43",pantsColor:"#1b75bb",sleeveColor:"#306e43",shoeColor:"#2a2b2d",eyeColor:"#5c4033",hairColor:"#5c4033",hat:"hoodie"}:t==="alex"?e={skinColor:"#f5c29d",shirtColor:"#d63031",pantsColor:"#2980b9",sleeveColor:"#d63031",shoeColor:"#2c3e50",eyeColor:"#42281d",hairColor:"#42281d",jacket:!0}:t==="maya"&&(e={skinColor:"#f5c29d",shirtColor:"#0984e3",pantsColor:"#2d3436",sleeveColor:"#0984e3",shoeColor:"#2c3e50",eyeColor:"#784212",hairColor:"#784212",hat:"beanie"}),e}function Is(t,e,n,i,s,a){t.fillStyle=n,t.beginPath(),t.roundRect?t.roundRect(-2*s,0,4*s,8*s,2*s):t.rect(-2*s,0,4*s,8*s),t.fill(),t.fillStyle=e,t.beginPath(),t.roundRect?t.roundRect(-1.5*s,7*s,3*s,6*s,1.5*s):t.rect(-1.5*s,7*s,3*s,6*s),t.fill(),t.fillStyle=a?i:e,t.beginPath(),a?t.roundRect?t.roundRect(-2*s,12*s,5*s,3*s,1*s):t.rect(-2*s,12*s,5*s,3*s):t.arc(0,13*s,2*s,0,Math.PI*2),t.fill()}function bl(t,e){t.fillStyle="#2c3e50",t.fillRect(-1*e,10*e,2*e,18*e),t.fillStyle="#ecf0f1",t.beginPath(),t.moveTo(-1*e,10*e),t.quadraticCurveTo(-14*e,5*e,-12*e,18*e),t.lineTo(-7*e,15*e),t.quadraticCurveTo(-10*e,10*e,1*e,10*e),t.fill()}function vm(t,e,n,i,s=4,a=0,r=!1,f=!0){t.save();const c=s*.9;t.translate(e+16*s,n+26*s),f||t.scale(-1,1);const o=r?a*.2%(Math.PI*2):0,l=Math.sin(a*.05)*1,u=r?Math.abs(Math.sin(o))*2:l,d=r?Math.sin(o)*.8:0,h=r?Math.sin(o)*.9:0,p=gm(i);t.save(),t.translate(-2*c,(-12-u)*c),t.rotate(-d),Is(t,p.skinColor,p.sleeveColor,p.shoeColor,c,!1),i==="anya"&&bl(t,c),t.restore(),t.save(),t.translate(-2*c,-6*c),t.rotate(-h),Is(t,p.skinColor,p.pantsColor,p.shoeColor,c,!0),t.restore(),t.fillStyle=p.shirtColor,t.beginPath(),t.roundRect?t.roundRect(-5*c,(-14-u)*c,10*c,12*c,4*c):t.rect(-5*c,(-14-u)*c,10*c,12*c),t.fill(),p.vest?(t.fillStyle=p.vest,t.beginPath(),t.roundRect&&t.roundRect(-5*c,(-14-u)*c,4*c,12*c,2*c),t.fill(),t.beginPath(),t.roundRect&&t.roundRect(1*c,(-14-u)*c,4*c,12*c,2*c),t.fill()):p.jacket&&(t.fillStyle="#b71540",t.beginPath(),t.roundRect&&t.roundRect(-6*c,(-14-u)*c,4*c,13*c,2*c),t.fill()),t.save(),t.translate(0,(-17-u)*c),t.fillStyle=p.skinColor,t.beginPath(),t.arc(0,0,7*c,0,Math.PI*2),t.fill(),t.fillStyle="white",t.beginPath(),t.arc(2*c,-1*c,2*c,0,Math.PI*2),t.fill(),t.fillStyle=p.eyeColor,t.beginPath(),t.arc(3*c,-1*c,1*c,0,Math.PI*2),t.fill(),p.hat==="beanie"?(t.fillStyle="#f1c40f",t.beginPath(),t.arc(0,-2*c,7*c,Math.PI,0),t.fill(),t.beginPath(),t.arc(0,-9*c,2*c,0,Math.PI*2),t.fill()):p.hat==="hoodie"?(t.fillStyle=p.shirtColor,t.beginPath(),t.arc(0,-1*c,8*c,Math.PI,0),t.fill(),t.fillStyle=p.hairColor,t.beginPath(),t.arc(4*c,-5*c,2*c,0,Math.PI*2),t.fill()):p.hat==="crown"?(t.fillStyle=p.hairColor,t.beginPath(),t.arc(0,-2*c,8*c,Math.PI*1.1,Math.PI*-.1),t.fill(),t.fillStyle="#c0392b",t.beginPath(),t.roundRect&&t.roundRect(-6*c,-8*c,12*c,3*c,1),t.fill(),t.fillStyle="#f5f6fa",t.beginPath(),t.moveTo(-5*c,-8*c),t.lineTo(-7*c,-12*c),t.lineTo(-3*c,-8*c),t.fill(),t.beginPath(),t.moveTo(5*c,-8*c),t.lineTo(7*c,-12*c),t.lineTo(3*c,-8*c),t.fill()):(t.fillStyle=p.hairColor,t.beginPath(),t.arc(0,-3*c,7.5*c,Math.PI*1.1,Math.PI*-.1),t.fill(),t.beginPath(),t.moveTo(0,-7*c),t.quadraticCurveTo(6*c,-7*c,4*c,-2*c),t.lineTo(0,-4*c),t.fill()),t.restore(),t.save(),t.translate(2*c,-6*c),t.rotate(h),Is(t,p.skinColor,p.pantsColor,p.shoeColor,c,!0),t.restore(),t.save(),t.translate(2*c,(-12-u)*c),t.rotate(d),Is(t,p.skinColor,p.sleeveColor,p.shoeColor,c,!1),i==="anya"&&bl(t,c),t.restore(),t.restore()}const Fa={};function _m(t){if(Fa[t])return Fa[t];const e=new Image;return e.src=t,Fa[t]=e,e}function fc(t){return Rn.find(e=>e.id===t)}function ym(t,e,n,i,s=4,a=0,r=!1,f=!0){const c=fc(i);if(!c||!c.skinUrl)return;const o=_m(c.skinUrl),l=32*s,u=e+(l-o.width)/2,d=n+(l-o.height)/2;t.save(),f?t.drawImage(o,0,0,o.width,o.height,u,d,l,l):(t.translate(u+l,d),t.scale(-1,1),t.drawImage(o,0,0,o.width,o.height,0,0,l,l)),t.restore()}function bm(t,e,n,i="farmer",s=4,a=0,r=!1,f=!0){const c=Ye.player.selectedHeroId,o=fc(c);if(o&&o.skinUrl){ym(t,e,n,c,s,a,r,f);return}let l=xi[i]||xi.farmer;if(i==="farmer"||i==="alchemist"||i==="explorer"||i==="ranger")return vm(t,e,n,c,s,a,r,f);let u,d=0;r?(d=Math.floor(a/8)%2,u=Ut["character"+(d===0?"Walk1":"Walk2")]||(d===0?Ut.characterWalk1:Ut.characterWalk2)):(u=Ut.character||Ut.character,n=a%32<16?n:n+1);const p=(()=>{let g=r?d===0?"Walk1":"Walk2":"";return Ut[i+g+"Lighting"]?Ut[i+g+"Lighting"]:Ut["character"+g+"Lighting"]?Ut["character"+g+"Lighting"]:null})();if(t.save(),f)ri(t,e,n,u,l,s),p&&ri(t,e,n,p,l,s);else{const g=32*s;t.translate(e+g,0),t.scale(-1,1),ri(t,0,n,u,l,s),p&&ri(t,0,n,p,l,s)}t.restore()}function Mm(t,e,n,i,s){t.fillStyle="#3a4a5a",t.fillRect(e,n,i,s),t.fillStyle="#5a6a7a",t.fillRect(e,n,i,3),t.fillStyle="#2a3a4a",t.fillRect(e,n+s-3,i,3),t.strokeStyle="#2a3a4a",t.lineWidth=1;const a=Math.max(8,s/2);for(let r=n+4;r<n+s-3;r+=a){const f=(r-n)/a%2===0?0:i/4;for(let c=e+f;c<e+i;c+=i/2)t.strokeRect(c,r,i/2,a)}}function Tm(t,e,n,i,s){t.fillStyle="#2a3a4a",t.fillRect(e-4,n+s-10,i+8,10),t.fillStyle="#3a4a5a",t.fillRect(e,n,i,s-10),t.fillStyle="#5a6a7a",t.fillRect(e-6,n-4,i+12,8),t.fillStyle="#6a7a8a",t.fillRect(e-6,n-4,i+12,2),t.fillStyle="rgba(0,0,0,0.3)",t.fillRect(e+i-4,n,4,s-10)}function Hm(t,e,n,i,s){const a=xi.crystal,r=Ut.crystal,f=Math.sin(s*.005)*.3+.5,c=t.createRadialGradient(e+7*i,n+5*i,0,e+7*i,n+5*i,15*i);c.addColorStop(0,`rgba(68,136,255,${f*.4})`),c.addColorStop(.5,`rgba(68,136,255,${f*.15})`),c.addColorStop(1,"rgba(68,136,255,0)"),t.fillStyle=c,t.beginPath(),t.arc(e+7*i,n+5*i,15*i,0,Math.PI*2),t.fill(),ri(t,e,n,r,a,i)}function Rm(t,e,n,i){t.fillStyle="#87CEEB",t.fillRect(0,0,e,n*.4),t.fillStyle="#556B2F",t.beginPath(),t.arc(e*.2,n*.4,150,Math.PI,0),t.fill(),t.fillStyle="#6B8E23",t.beginPath(),t.arc(e*.8,n*.4,200,Math.PI,0),t.fill(),t.fillStyle="#8B4513",t.fillRect(0,n*.4,e,n*.6),t.fillStyle="#DAA520";for(let s=0;s<e;s+=40)t.fillRect(s,n*.45,20,n*.55)}function Em(t,e,n,i,s){t.fillStyle="#2b1a0a",t.fillRect(0,0,e,n),t.fillStyle="#3d2611";for(let M=0;M<4;M++){const B=e*.15+M*200;t.fillRect(B,n*.05,60,n),t.fillStyle="#4a3015",t.fillRect(B+5,n*.05,10,n),t.fillRect(B+45,n*.05,10,n),t.fillStyle="#3d2611"}const a=60,r=30;for(let M=0;M*r<n;M++){const B=M%2===0?0:-a/2;for(let P=-1;P*a<e+a;P++){const I=P*a+B,G=M*r,q=(M*7+P*13)%4,D=["#5c3a21","#4e301b","#684326","#442815"];t.fillStyle=D[q],t.fillRect(I+2,G+2,a-4,r-4),t.fillStyle="#1c1005",t.fillRect(I,G,a,2),t.fillRect(I,G,2,r),q===0&&Math.random()<.1&&(t.fillStyle="#8b6508",t.fillRect(I+20,G+10,20,10))}}t.font="bold 20px 'Press Start 2P'",t.fillStyle=`rgba(255, 215, 0, ${Math.abs(Math.sin(i*.03))*.4+.3})`,t.fillText("⍙",e*.25,n*.25),t.fillText("⎍",e*.75,n*.3),t.fillText("⍾",e*.55,n*.45),t.fillText("⚙",e*.15,n*.55);for(let M=0;M<3;M++){const B=e*.2+M*.3*e;t.fillStyle="#8b0000",t.fillRect(B,0,40,120),t.fillStyle="#ffd700",t.fillRect(B+4,0,4,116),t.fillRect(B+32,0,4,116),t.fillRect(B,116,40,4),t.beginPath(),t.arc(B+20,60,8,0,Math.PI*2),t.fill(),t.fillStyle="#2b1a0a",t.beginPath(),t.moveTo(B,120),t.lineTo(B+20,100),t.lineTo(B+40,120),t.fill()}const f=e*.85,c=n*.35;t.fillStyle="#2b1a0a",t.fillRect(f-25,c-25,130,190),t.fillStyle="#3d2611",t.fillRect(f-15,c-15,110,170),t.fillStyle="#daa520",t.fillRect(f,c,80,150),t.fillStyle="#b8860b";for(let M=0;M<4;M++)t.fillRect(f+10,c+15+M*35,60,10),t.fillStyle="#4a3015",t.fillRect(f+15,c+18+M*35,4,4),t.fillRect(f+61,c+18+M*35,4,4),t.fillStyle="#b8860b";t.strokeStyle="#8b6508",t.lineWidth=6,t.beginPath(),t.arc(f+40,c+75,25,0,Math.PI*2),t.stroke(),t.save(),t.translate(f+40,c+75);for(let M=0;M<6;M++)t.rotate(Math.PI/3),t.fillRect(0,-4,35,8);t.restore(),t.fillStyle="#ff4500",t.beginPath(),t.arc(f+40,c+75,10,0,Math.PI*2),t.fill();const o=e*.1,l=n*.45;t.fillStyle="#1c1005",t.beginPath(),t.arc(o,l,40,Math.PI,0),t.fillRect(o-40,l,80,80),t.fill(),t.fillStyle="#ffd700";for(let M=-3;M<=3;M++)t.fillRect(o+M*10-2,l-20,4,100);const u=Math.sin(i*.05)*.2+.8,d=t.createRadialGradient(o,l+40,0,o,l+40,40*u);d.addColorStop(0,"rgba(255, 215, 0, 0.6)"),d.addColorStop(1,"rgba(255, 215, 0, 0)"),t.fillStyle=d,t.fillRect(o-50,l-10,100,100),[{x:e*.25,y:n*.35},{x:e*.75,y:n*.35}].forEach(M=>{t.fillStyle="#8b6508",t.fillRect(M.x-5,M.y,10,15),t.fillRect(M.x-2,M.y+15,4,10);const B=15+Math.random()*5;t.fillStyle="#ff4500",t.beginPath(),t.moveTo(M.x-8,M.y),t.lineTo(M.x,M.y-B-5),t.lineTo(M.x+8,M.y),t.fill(),t.fillStyle="#ffa500",t.beginPath(),t.moveTo(M.x-4,M.y),t.lineTo(M.x,M.y-B),t.lineTo(M.x+4,M.y),t.fill(),t.fillStyle="#ffff00",t.beginPath(),t.moveTo(M.x-2,M.y),t.lineTo(M.x,M.y-B/2),t.lineTo(M.x+2,M.y),t.fill(),t.fillStyle=`rgba(255, 140, 0, ${.15+Math.random()*.05})`,t.beginPath(),t.arc(M.x,M.y-10,40,0,Math.PI*2),t.fill()});const p=n*.65;t.fillStyle="#4a3015",t.fillRect(0,p,e,20),t.fillStyle="#8b6508",t.fillRect(0,p,e,4),t.fillStyle="#3d2611",t.fillRect(0,p+20,e,n-p-20),t.fillStyle="#ffd700",t.beginPath(),t.arc(e*.2,p+25,15,Math.PI,0),t.fill(),t.beginPath(),t.arc(e*.8,p+25,20,Math.PI,0),t.fill(),t.fillStyle="#ff8c00",t.fillRect(e*.18,p+15,4,4),t.fillRect(e*.82,p+10,5,5);const g=e*.35;t.fillStyle="#4a3015",t.beginPath(),t.moveTo(g-30,p),t.lineTo(g-20,p-30),t.lineTo(g+20,p-30),t.lineTo(g+30,p),t.fill(),t.fillStyle="#daa520",t.fillRect(g-25,p-35,50,5),t.fillStyle="#b8860b",t.fillRect(g-22,p-40,44,5);const m=Math.sin(i*.08)*2,S=p-60-m;t.strokeStyle="#ffd700",t.lineWidth=3,t.beginPath(),t.arc(g,S,15,0,Math.PI*2),t.stroke();const y=t.createRadialGradient(g,S,0,g,S,15);y.addColorStop(0,"rgba(255, 255, 255, 0.9)"),y.addColorStop(1,"rgba(100, 200, 255, 0.4)"),t.fillStyle=y,t.beginPath(),t.arc(g,S,12,0,Math.PI*2),t.fill(),t.fillStyle=`rgba(100, 200, 255, ${.1+Math.abs(Math.sin(i*.05))*.15})`,t.beginPath(),t.moveTo(g,S-12),t.lineTo(g-20,S-100),t.lineTo(g+20,S-100),t.fill();const R=e*.65;t.fillStyle="#3d2611",t.fillRect(R-20,p-40,40,40),t.fillStyle="#8b6508",t.fillRect(R-22,p-10,44,5),t.fillRect(R-22,p-30,44,5),t.save(),t.translate(R,p-20),t.rotate(i*.05),t.fillStyle="#daa520";for(let M=0;M<8;M++)t.rotate(Math.PI/4),t.fillRect(8,-2,6,4);t.beginPath(),t.arc(0,0,10,0,Math.PI*2),t.fill(),t.fillStyle="#4a3015",t.beginPath(),t.arc(0,0,4,0,Math.PI*2),t.fill(),t.restore(),t.strokeStyle="#b8860b",t.lineWidth=6,t.beginPath(),t.moveTo(R,p-40),t.lineTo(R,p-80),t.lineTo(R-30,p-100),t.stroke(),t.strokeStyle="#8b6508",t.lineWidth=3,t.beginPath(),t.moveTo(R-30,p-100),t.lineTo(R-40,p-90),t.moveTo(R-30,p-100),t.lineTo(R-20,p-90),t.stroke();const H=e*.5,C=30,E=60;t.fillStyle="#3d2611",t.fillRect(H-60,p-10,120,10),t.fillRect(H-50,p-20,100,10),t.fillStyle="#daa520",t.fillRect(H-40,p-40,80,20),t.fillStyle="#1c1005",t.fillRect(H-25,p-40,50,8);const w=Math.sin(i*.1)*.5+.5;if(t.fillStyle=`rgba(255, 100, 50, ${w*.8})`,t.fillRect(H-20,p-38,40,4),t.fillStyle="rgba(20, 10, 5, 0.8)",t.fillRect(H-35,n*.15,70,p-n*.15-40),t.strokeStyle="#8b6508",t.lineWidth=4,t.strokeRect(H-38,n*.15,76,p-n*.15-40),t.fillStyle="#b8860b",t.beginPath(),t.moveTo(H-45,n*.15),t.lineTo(H-20,n*.08),t.lineTo(H+20,n*.08),t.lineTo(H+45,n*.15),t.fill(),t.fillStyle="#ff4500",t.beginPath(),t.arc(H,n*.12,10,0,Math.PI*2),t.fill(),s&&s.stackData)for(let M=0;M<s.stackData.length;M++){const B=s.stackData[M],P=p-40-(M+1)*C-5;let I="#d4af37",G="#8b6508",q="#ffffff";B==="Ruby"?(I="#e61919",G="#800000",q="#ff6666"):B==="Emerald"?(I="#19e65e",G="#006622",q="#66ff99"):B==="Sapphire"&&(I="#1966e6",G="#002280",q="#66a3ff"),t.fillStyle=G,t.fillRect(H-E/2,P,E,C-2),t.fillStyle=I,t.fillRect(H-E/2+2,P+2,E-4,C-6),t.fillStyle=q,t.beginPath(),t.moveTo(H-E/2+2,P+2),t.lineTo(H+E/2-2,P+2),t.lineTo(H,P+10),t.fill(),t.fillStyle="#daa520",t.fillRect(H-E/2-5,P+10,10,10),t.fillRect(H+E/2-5,P+10,10,10),M===s.stackData.length-1&&(t.fillStyle=`rgba(255, 255, 255, ${.2+Math.sin(i*.1)*.2})`,t.fillRect(H-E/2,P,E,C))}t.fillStyle="#696969";for(let M=0;M<2;M++){let B=M===0?e*.3:e*.7;for(let P=0;P<15;P++)t.beginPath(),t.arc(B,P*12,4,0,Math.PI*2),t.stroke()}t.fillStyle="rgba(255, 215, 0, 0.6)";for(let M=0;M<15;M++){const B=(i*.02+M*40)%e,P=n*.8-(i*.015+M*20)%(n*.6);t.fillRect(B,P,2,2)}const _=t.createRadialGradient(e/2,n/2,e*.4,e/2,n/2,e*.9);_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(1,"rgba(43, 26, 10, 0.8)"),t.fillStyle=_,t.fillRect(0,0,e,n)}function Pm(t,e,n,i){t.fillStyle="#FFDAB9",t.fillRect(0,0,e,n*.3),t.fillStyle="#F4A460",t.beginPath(),t.quadraticCurveTo(e/2,n*.1,e,n*.4),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.fillStyle="#D2B48C",t.beginPath(),t.moveTo(0,n*.4),t.quadraticCurveTo(e/2,n*.2,e,n*.5),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function Am(t,e,n,i){t.fillStyle="#0a1c12",t.fillRect(0,0,e,n),t.fillStyle="#1e3323";for(let s=20;s<e;s+=120)t.fillRect(s,0,40,n);t.fillStyle="#11291b",t.fillRect(0,n*.6,e,n*.4);for(let s=0;s<20;s++){const a=(s*73+i)%e,r=n*.6+s*31%(n*.4);t.fillStyle="#00ffaa",t.fillRect(a,r,4,4),t.fillStyle="rgba(0, 255, 170, 0.3)",t.beginPath(),t.arc(a+2,r+2,8+Math.sin(i*.1+s)*2,0,Math.PI*2),t.fill()}}function Cm(t,e,n,i,s,a=!1,r=0){if(t.fillStyle="#3a2b1c",t.fillRect(e-4,n-4,i+8,s+4),t.fillStyle="#4a3b2c",t.beginPath(),t.moveTo(e,n+s),t.lineTo(e,n+s*.3),t.quadraticCurveTo(e+i/2,n-s*.1,e+i,n+s*.3),t.lineTo(e+i,n+s),t.fill(),t.fillStyle=a?"#1a3060":"#1a1008",t.beginPath(),t.moveTo(e+4,n+s),t.lineTo(e+4,n+s*.35),t.quadraticCurveTo(e+i/2,n+s*.05,e+i-4,n+s*.35),t.lineTo(e+i-4,n+s),t.fill(),a){const f=t.createRadialGradient(e+i/2,n+s*.5,0,e+i/2,n+s*.5,i),c=Math.sin(r*.005)*.3+.5;f.addColorStop(0,`rgba(55,199,127,${c})`),f.addColorStop(.5,`rgba(55,199,127,${c*.3})`),f.addColorStop(1,"rgba(55,199,127,0)"),t.fillStyle=f,t.beginPath(),t.arc(e+i/2,n+s*.5,i,0,Math.PI*2),t.fill()}t.fillStyle=a?"#37c77f":"#8590b0",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText("EXIT",e+i/2,n-10),t.textAlign="start"}function wm(t,e,n,i="apple",s=!1,a=0,r="",f="",c=""){s&&(t.globalAlpha=.15);const o=n+Math.sin(a*.1)*4;if(i==="Ruby"||i==="Emerald"||i==="Sapphire"||i==="RUBY"||i==="EMERALD"||i==="TOPAZ"){t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3),t.save(),t.translate(e+16,o+10);let l,u,d,h;i==="Ruby"||i==="RUBY"?(l="rgba(255, 30, 30, 0.4)",u="#e61919",d="#ff6666",h="#800000"):i==="Emerald"||i==="EMERALD"?(l="rgba(30, 255, 100, 0.4)",u="#19e65e",d="#66ff99",h="#006622"):i==="TOPAZ"?(l="rgba(255, 215, 0, 0.4)",u="#ffaa00",d="#ffdd66",h="#996600"):(l="rgba(30, 100, 255, 0.4)",u="#1966e6",d="#66a3ff",h="#002280");const p=Math.sin(a*.08)*.2+.8,g=t.createRadialGradient(0,0,0,0,0,40*p);g.addColorStop(0,l),g.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=g,t.beginPath(),t.arc(0,0,40,0,Math.PI*2),t.fill(),t.fillStyle=u,t.beginPath(),t.moveTo(0,-15),t.lineTo(12,0),t.lineTo(0,15),t.lineTo(-12,0),t.fill(),t.fillStyle=d,t.beginPath(),t.moveTo(0,-15),t.lineTo(-12,0),t.lineTo(0,0),t.fill(),t.fillStyle=h,t.beginPath(),t.moveTo(0,15),t.lineTo(12,0),t.lineTo(0,0),t.fill(),t.restore(),t.fillStyle=d;for(let m=0;m<3;m++){const S=e+16+Math.sin(a*.05+m*2)*15,y=o+10-(a*.04+m*10)%25;t.globalAlpha=1-(a*.04+m*10)%25/25,t.fillRect(S,y,2,2)}t.globalAlpha=1}else if(i==="WHEAT"){t.fillStyle="#5c3d1e",t.fillRect(e-10,n+22,52,13),t.fillStyle="#8b4513",t.fillRect(e-7,n+20,46,2),t.strokeStyle="#daa520",t.lineWidth=3,t.fillStyle="#ffd700";const l=Math.sin(a*.1)*2;t.beginPath(),t.moveTo(e+16,n+22),t.quadraticCurveTo(e+16+l,n+10,e+16+l,n-5),t.stroke(),t.beginPath(),t.moveTo(e+6,n+22),t.quadraticCurveTo(e+4+l,n+12,e+3+l,n-1),t.stroke(),t.beginPath(),t.moveTo(e+26,n+22),t.quadraticCurveTo(e+28+l,n+12,e+29+l,n-1),t.stroke();const u=(d,h)=>{t.fillStyle="#ffd700",t.fillRect(d-3,h-4,6,8),t.fillRect(d-5,h-2,10,4),t.strokeStyle="#daa520",t.lineWidth=1,t.beginPath(),t.moveTo(d,h-4),t.lineTo(d-3,h-12),t.moveTo(d,h-4),t.lineTo(d+3,h-12),t.stroke()};u(e+16+l,n-5),u(e+3+l,n-1),u(e+29+l,n-1)}else if(i==="CARROT"){t.fillStyle="#5c3d1e",t.fillRect(e-10,n+22,52,13),t.fillStyle="#8b4513",t.fillRect(e-7,n+20,46,2),t.strokeStyle="#228b22",t.lineWidth=4;const l=Math.sin(a*.1)*3;t.beginPath(),t.moveTo(e+16,n+15),t.quadraticCurveTo(e+10+l,n+2,e+8+l,n-5),t.moveTo(e+16,n+15),t.quadraticCurveTo(e+16+l,n,e+16+l,n-8),t.moveTo(e+16,n+15),t.quadraticCurveTo(e+22+l,n+2,e+24+l,n-5),t.stroke(),t.fillStyle="#ff7f50",t.beginPath(),t.moveTo(e+10,n+14),t.quadraticCurveTo(e+16,n+12,e+22,n+14),t.lineTo(e+18,n+24),t.lineTo(e+14,n+24),t.closePath(),t.fill(),t.fillStyle="#d2691e",t.fillRect(e+12,n+17,8,2)}else if(i==="CORN")t.fillStyle="#5c3d1e",t.fillRect(e-10,n+22,52,13),t.fillStyle="#8b4513",t.fillRect(e-7,n+20,46,2),t.fillStyle="#228b22",t.fillRect(e+13,n-8,6,30),t.fillStyle="#ffd700",t.fillRect(e+11,n-2,10,14),t.fillStyle="#ffea00",t.fillRect(e+13,n-2,4,14),t.strokeStyle="#2e8b57",t.lineWidth=3,t.beginPath(),t.moveTo(e+10,n+12),t.quadraticCurveTo(e+8,n+4,e+11,n-4),t.moveTo(e+22,n+12),t.quadraticCurveTo(e+24,n+4,e+21,n-4),t.stroke(),t.strokeStyle="#8b6508",t.lineWidth=2,t.beginPath(),t.moveTo(e+16,n-2),t.lineTo(e+14,n-6),t.moveTo(e+16,n-2),t.lineTo(e+18,n-6),t.stroke();else if(i==="ROSE"||i==="LILY"||i==="TULIP"){t.fillStyle="#5c3d1e",t.fillRect(e-10,n+22,52,13),t.fillStyle="#8b4513",t.fillRect(e-7,n+20,46,2);const l=Math.sin(a*.08)*3,u="#2e8b57";t.strokeStyle=u,t.lineWidth=3,t.beginPath(),t.moveTo(e+16,n+22),t.quadraticCurveTo(e+16+l*.5,n+12,e+16+l,n+2),t.stroke(),t.fillStyle=u,t.fillRect(e+12+l*.7,n+14,4,3),t.fillRect(e+17+l*.7,n+9,4,3),t.save(),t.translate(e+16+l,n+2),i==="ROSE"?(t.fillStyle="#ff3333",t.beginPath(),t.arc(0,-5,6,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(-4,-2,5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(4,-2,5,0,Math.PI*2),t.fill(),t.fillStyle="#b30000",t.beginPath(),t.arc(0,-3,3,0,Math.PI*2),t.fill()):i==="LILY"?(t.fillStyle="#ffffff",t.beginPath(),t.moveTo(0,-12),t.lineTo(-6,-2),t.lineTo(0,2),t.lineTo(6,-2),t.closePath(),t.fill(),t.fillStyle="#ffb6c1",t.beginPath(),t.arc(0,-3,3,0,Math.PI*2),t.fill(),t.fillStyle="#ffd700",t.fillRect(-1,-4,2,2)):(t.fillStyle="#9370db",t.beginPath(),t.moveTo(-6,-10),t.lineTo(-6,0),t.quadraticCurveTo(0,4,6,0),t.lineTo(6,-10),t.lineTo(3,-5),t.lineTo(0,-10),t.lineTo(-3,-5),t.closePath(),t.fill(),t.fillStyle="#4b0082",t.fillRect(-3,-2,6,3)),t.restore()}else if(f==="arrays-strings"&&(i==="5"||i==="10"||i==="3"))t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3),t.fillStyle="#ff0000",t.beginPath(),t.arc(e+12,o+14,8,0,Math.PI*2),t.arc(e+20,o+14,8,0,Math.PI*2),t.fill(),t.fillStyle="#8b0000",t.fillRect(e+14,o+20,4,3),t.strokeStyle="#8b4513",t.lineWidth=2,t.beginPath(),t.moveTo(e+16,o+10),t.quadraticCurveTo(e+14,o+4,e+12,o+2),t.stroke(),t.fillStyle="#228b22",t.beginPath(),t.ellipse(e+19,o+5,4,2,Math.PI/4,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i,e+16,o+17),t.textAlign="start";else if(f==="arrays-strings"&&(i==="15"||i==="42"||i==="7"||i==="25"))t.fillStyle="#475569",t.fillRect(e-2,n+22,36,6),t.fillStyle="#64748b",t.beginPath(),t.moveTo(e+4,o+24),t.lineTo(e+10,o+10),t.lineTo(e+22,o+8),t.lineTo(e+28,o+24),t.closePath(),t.fill(),t.fillStyle="#94a3b8",t.beginPath(),t.moveTo(e+10,o+10),t.lineTo(e+22,o+8),t.lineTo(e+16,o+16),t.closePath(),t.fill(),t.fillStyle="#334155",t.beginPath(),t.moveTo(e+4,o+24),t.lineTo(e+16,o+16),t.lineTo(e+14,o+24),t.closePath(),t.fill(),t.strokeStyle="#1e293b",t.lineWidth=1.5,t.beginPath(),t.moveTo(e+12,o+12),t.lineTo(e+15,o+18),t.stroke(),t.fillStyle="#f8fafc",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i,e+16,o+20),t.textAlign="start";else if(i==="Gold"||i.includes("Gold")||i.includes("Chest")){if(t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3),t.fillStyle="#8b5a2b",t.fillRect(e+2,o+10,28,16),t.fillStyle="#daa520",t.fillRect(e+2,o+10,4,16),t.fillRect(e+26,o+10,4,16),t.fillRect(e+2,o+10,28,3),t.fillStyle="#ffd700",t.fillRect(e+13,o+12,6,6),t.fillStyle="#3d2611",t.fillRect(e+15,o+15,2,3),!s){t.fillStyle="#ffd700";for(let l=0;l<2;l++){const u=e+16+Math.sin(a*.1+l*3)*12,d=o+8-(a*.05+l*8)%18;t.fillRect(u,d,2,2)}}}else if(f==="arrays-strings"&&(i==="LISTEN"||i==="SILENT"||["1","2","2_1","2_2","3"].includes(i)&&r===""))t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3),["1","2","2_1","2_2","3"].includes(i)?(t.fillStyle="#8b0000",t.fillRect(e+4,o+6,24,20),t.fillStyle="#f5f5dc",t.fillRect(e+7,o+7,20,18),t.fillStyle="#8b5a2b",t.fillRect(e+10,o+10,10,1.5),t.fillRect(e+10,o+14,12,1.5),t.fillRect(e+10,o+18,8,1.5),t.fillStyle="#ffd700",t.fillRect(e+4,o+6,3,20)):(t.fillStyle="#f5deb3",t.fillRect(e+2,o+4,28,22),t.fillStyle="#8b4513",t.fillRect(e,o+2,32,2),t.fillRect(e,o+26,32,2),t.strokeStyle="#8b5a2b",t.lineWidth=1.5,t.beginPath(),t.moveTo(e+6,o+8),t.lineTo(e+26,o+8),t.moveTo(e+6,o+13),t.lineTo(e+24,o+13),t.moveTo(e+6,o+18),t.lineTo(e+26,o+18),t.moveTo(e+6,o+23),t.lineTo(e+20,o+23),t.stroke());else if(f==="arrays-strings"&&i.length===1&&(i==="A"||i==="B"||i==="C")){t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3);let l="#7ed6df";i==="B"&&(l="#ff7675"),i==="C"&&(l="#a29bfe"),t.save(),t.translate(e+16,o+12);const u=Math.sin(a*.1)*.2+.8,d=t.createRadialGradient(0,0,0,0,0,20*u);d.addColorStop(0,l),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(0,0,20,0,Math.PI*2),t.fill(),t.strokeStyle="#ffd700",t.lineWidth=2,t.beginPath(),t.moveTo(0,-10),t.lineTo(8,0),t.lineTo(0,10),t.lineTo(-8,0),t.closePath(),t.stroke(),t.fillStyle=l,t.beginPath(),t.moveTo(0,-7),t.lineTo(5,0),t.lineTo(0,7),t.lineTo(-5,0),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.font="bold 8px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i,0,3),t.restore(),t.textAlign="start"}else if(f==="linked-lists"){t.fillStyle="#8b6e43",t.fillRect(e-5,n+25,42,10),t.fillStyle="#e0b060",t.fillRect(e-2,n+22,36,3);const l=o-5,u=i.replace(/_\d+$/,"");if(u==="40")t.fillStyle="#8b5a2b",t.fillRect(e+2,l+4,28,20),t.fillStyle="#daa520",t.fillRect(e+2,l+4,28,3),t.fillRect(e+13,l+12,6,6),t.fillStyle="#ffea00",t.beginPath(),t.arc(e+16,l+2,4,0,Math.PI*2),t.fill();else if(u==="CURSED"){t.fillStyle="#2d1e2f",t.fillRect(e+2,l+2,28,26),t.strokeStyle="#1a0d1a",t.strokeRect(e+2,l+2,28,26);const d=Math.sin(a*.1)*.2+.8,h=t.createRadialGradient(e+16,l+15,0,e+16,l+15,20*d);h.addColorStop(0,"rgba(128, 0, 128, 0.5)"),h.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=h,t.beginPath(),t.arc(e+16,l+15,20,0,Math.PI*2),t.fill(),t.fillStyle="#ff3333",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText("☠️",e+16,l+20),t.textAlign="start"}else if(u==="SAFE"){t.fillStyle="#1e3f20",t.fillRect(e+2,l+2,28,26),t.strokeStyle="#0f2010",t.strokeRect(e+2,l+2,28,26);const d=Math.sin(a*.08)*.15+.85,h=t.createRadialGradient(e+16,l+15,0,e+16,l+15,18*d);h.addColorStop(0,"rgba(34, 197, 94, 0.4)"),h.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=h,t.beginPath(),t.arc(e+16,l+15,18,0,Math.PI*2),t.fill(),t.fillStyle="#4ade80",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText("SAFE",e+16,l+19),t.textAlign="start"}else t.fillStyle="#c89440",t.fillRect(e+4,l+2,24,26),t.fillStyle="#8a6428",t.fillRect(e+4,l+10,24,2),t.fillRect(e+14,l+2,2,8),t.fillRect(e+10,l+12,2,16),s||(t.fillStyle="rgba(0, 240, 255, 0.2)",t.fillRect(e+1,l+1,30,28)),t.fillStyle="#3d2611",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+19),t.textAlign="start"}else if(f==="trees-graphs"){const l=o-5,u=i.replace(/_\d+$/,"");if(c==="autumn_leaf_fall")t.fillStyle="#E67E22",t.beginPath(),t.ellipse(e+16,l+16,12,6,-Math.PI/4,0,Math.PI*2),t.fill(),t.strokeStyle="#D35400",t.beginPath(),t.moveTo(e+8,l+24),t.lineTo(e+24,l+8),t.stroke(),t.fillStyle="#ffffff",t.font="bold 8px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+22,l+6),t.textAlign="start";else if(c==="enchanted_hedge_maze"){const d=Math.sin(a*.1)*.2+.8,h=t.createRadialGradient(e+16,l+16,0,e+16,l+16,20*d);h.addColorStop(0,"rgba(241, 196, 15, 0.6)"),h.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=h,t.beginPath(),t.arc(e+16,l+16,20,0,Math.PI*2),t.fill(),t.fillStyle="#FFF59D",t.beginPath(),t.arc(e+16,l+16,8,0,Math.PI*2),t.fill(),t.fillStyle="#D35400",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+20),t.textAlign="start"}else if(c==="overgrown_ruins_graph")t.fillStyle="#5A6E63",t.fillRect(e+4,l+4,24,24),t.fillStyle="#1D8348",t.fillRect(e+4,l+4,10,8),t.fillStyle="#00FFFF",t.fillRect(e+14,l+14,4,4),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l-2),t.textAlign="start";else if(c==="signal_tower_forest"){t.fillStyle="#5D4037",t.fillRect(e+6,l+20,20,6);const d=Math.sin(a*.15)*.2+.8;t.fillStyle=`rgba(231, 76, 60, ${d})`,t.beginPath(),t.moveTo(e+16,l),t.lineTo(e+24,l+20),t.lineTo(e+8,l+20),t.fill(),t.fillStyle="#F1C40F",t.beginPath(),t.moveTo(e+16,l+6),t.lineTo(e+20,l+20),t.lineTo(e+12,l+20),t.fill(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l-2),t.textAlign="start"}else c==="enchanted_forest"?(t.fillStyle="#8B4513",t.fillRect(e+14,l+16,4,12),t.fillStyle="#2ECC71",t.beginPath(),t.arc(e+16,l+10,8,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+14),t.textAlign="start"):c==="mirror_forest"?(t.fillStyle="#81D4FA",t.beginPath(),t.moveTo(e+16,l),t.lineTo(e+24,l+16),t.lineTo(e+16,l+28),t.lineTo(e+8,l+16),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(e+16,l),t.lineTo(e+20,l+16),t.lineTo(e+16,l+28),t.fill(),t.fillStyle="#01579B",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+20),t.textAlign="start"):c==="crystal_cave_path"?(t.fillStyle="#E040FB",t.beginPath(),t.moveTo(e+16,l+4),t.lineTo(e+24,l+24),t.lineTo(e+8,l+24),t.fill(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l-2),t.textAlign="start"):c==="great_tree"?(t.fillStyle="#F5B041",t.beginPath(),t.arc(e+16,l+18,8,0,Math.PI*2),t.fill(),t.fillStyle="#873600",t.beginPath(),t.arc(e+16,l+12,10,Math.PI,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l-2),t.textAlign="start"):c==="abyssal_chasm"?(t.fillStyle="#8E44AD",t.beginPath(),t.arc(e+16,l+14,10,Math.PI,Math.PI*2),t.fill(),t.fillStyle="#2ECC71",t.beginPath(),t.arc(e+12,l+10,2,0,Math.PI*2),t.arc(e+20,l+12,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l-2),t.textAlign="start"):c==="ancient_message_forest"?(t.fillStyle="#34495E",t.fillRect(e+6,l+4,20,24),t.fillStyle="#F1C40F",t.font="bold 14px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+22),t.textAlign="start"):(t.fillStyle="#8B4513",t.fillRect(e+13,l+16,6,12),t.fillStyle="#228B22",t.beginPath(),t.arc(e+16,l+10,10,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="bold 8px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+14),t.textAlign="start")}else if(f==="stacks-queues"&&c==="chasm"&&["1","2","3"].includes(i.replace(/_\d+$/,"")))t.fillStyle="#3a4a5a",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b5a2b",t.fillRect(e,o+10,32,12),t.fillStyle="#cd853f",t.beginPath(),t.ellipse(e+2,o+16,3,6,0,0,Math.PI*2),t.ellipse(e+30,o+16,3,6,0,0,Math.PI*2),t.fill(),t.strokeStyle="#5c3a21",t.lineWidth=1,t.beginPath(),t.moveTo(e+5,o+13),t.lineTo(e+27,o+13),t.moveTo(e+8,o+18),t.lineTo(e+25,o+18),t.stroke(),t.fillStyle="#ffffff",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i.replace(/_\d+$/,""),e+16,o+20),t.textAlign="start";else if(f==="stacks-queues"&&c==="castle_gate"&&["R","A","C","E"].includes(i.replace(/_\d+$/,"")))t.fillStyle="#3a4a5a",t.fillRect(e-5,n+25,42,10),t.fillStyle="#747d8c",t.beginPath(),t.moveTo(e+6,o+4),t.lineTo(e+26,o+4),t.lineTo(e+26,o+16),t.quadraticCurveTo(e+26,o+26,e+16,o+30),t.quadraticCurveTo(e+6,o+26,e+6,o+16),t.closePath(),t.fill(),t.strokeStyle="#ffd700",t.lineWidth=2,t.stroke(),t.fillStyle="#ffffff",t.font="bold 10px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i.replace(/_\d+$/,""),e+16,o+19),t.textAlign="start";else if(f==="stacks-queues"&&c==="ritual_temple"){t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10);const l=i.replace(/_\d+$/,"");["+","*","-","/"].includes(l)?(t.fillStyle="#2f3542",t.fillRect(e+4,o+6,24,20),t.strokeStyle="#ff4757",t.lineWidth=1.5,t.strokeRect(e+4,o+6,24,20),t.fillStyle="#ff4757",t.font="bold 14px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+21),t.textAlign="start"):(t.fillStyle="#f5f6fa",t.beginPath(),t.arc(e+16,o+12,10,0,Math.PI*2),t.fill(),t.fillRect(e+11,o+16,10,8),t.fillStyle="#2f3542",t.fillRect(e+11,o+10,3,3),t.fillRect(e+18,o+10,3,3),t.fillRect(e+15,o+14,2,2),t.fillStyle="#ff4757",t.font="bold 8px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+8),t.textAlign="start")}else if(f==="stacks-queues"&&c==="mine"&&["4","1","2","5"].includes(i.replace(/_\d+$/,""))){t.fillStyle="#2f3542",t.fillRect(e-5,n+25,42,10);const u=8+parseInt(i.replace(/_\d+$/,""))*3.5;t.fillStyle="#747d8c",t.beginPath(),t.arc(e+16,o+22-u/2,u/2,0,Math.PI*2),t.fill(),t.fillStyle="#54a0ff",t.fillRect(e+13,o+20-u/2,2,2),t.fillRect(e+17,o+20-u/2,2,2),t.strokeStyle="#2f3542",t.lineWidth=1.5,t.beginPath(),t.moveTo(e+16,o+22-u),t.lineTo(e+16,o+18-u/2),t.stroke(),t.fillStyle="#ffffff",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i.replace(/_\d+$/,""),e+16,o+25),t.textAlign="start"}else if(f==="stacks-queues"&&c==="treasure_vault"&&["5","2","7","1"].includes(i.replace(/_\d+$/,""))){t.fillStyle="#b8860b",t.fillRect(e-5,n+25,42,10);const u=16+parseInt(i.replace(/_\d+$/,""))*2.5;t.fillStyle="#8b5a2b",t.fillRect(e+16-u/2,o+10,u,16),t.fillStyle="#ffd700",t.fillRect(e+16-u/2,o+10,3,16),t.fillRect(e+13+u/2,o+10,3,16),t.fillRect(e+14,o+14,4,6),t.fillStyle="#ffffff",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i.replace(/_\d+$/,""),e+16,o+24),t.textAlign="start"}else if(f==="stacks-queues"&&c==="snowy_peak"){t.fillStyle="#a5b1c2",t.fillRect(e-5,n+25,42,10),t.fillStyle="#d1d8e0",t.fillRect(e-2,n+22,36,3);const l=i.replace(/_\d+$/,""),d=parseInt(l)>=74,h=d?"#fc5c65":"#45aaf2",p=d?"rgba(252, 92, 101, 0.4)":"rgba(69, 170, 242, 0.4)";t.save(),t.translate(e+16,o+12);const g=Math.sin(a*.1)*.2+.8,m=t.createRadialGradient(0,0,0,0,0,20*g);m.addColorStop(0,p),m.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=m,t.beginPath(),t.arc(0,0,20,0,Math.PI*2),t.fill(),t.fillStyle=h,t.beginPath(),t.moveTo(0,-12),t.lineTo(8,0),t.lineTo(0,12),t.lineTo(-8,0),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.globalAlpha=.35,t.beginPath(),t.moveTo(0,-12),t.lineTo(-8,0),t.lineTo(0,0),t.closePath(),t.fill(),t.restore(),t.globalAlpha=1,t.fillStyle="#ffffff",t.font="bold 8px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+23),t.textAlign="start"}else if(i.length===1||i.startsWith("bracket_")||["(",")","{","}","[","]"].includes(i)||i.match(/^[A-Z]$/)){if(c==="mirror_hall"){const m=Math.sin(a*.05)*.2+.8,S="rgba(129, 236, 236, 0.4)",y=t.createRadialGradient(e+16,o+16,0,e+16,o+16,25*m);y.addColorStop(0,S),y.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=y,t.beginPath(),t.arc(e+16,o+16,25,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(e+16,o+16,8,0,Math.PI*2),t.fill(),t.fillStyle="#0984e3",t.font="bold 18px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(i,e+16,o+23),t.textAlign="start";return}t.fillStyle="#1e293b",t.fillRect(e-5,n+25,42,10),t.fillStyle="#475569",t.fillRect(e-2,n+22,36,3);const l=o-5;t.fillStyle="#334155",t.fillRect(e+2,l+2,28,26),t.fillStyle="#1e293b",t.fillRect(e+2,l+26,28,2),t.fillRect(e+28,l+2,2,26),t.fillStyle="#64748b",t.fillRect(e+2,l+2,28,2),t.fillRect(e+2,l+2,2,26),t.fillStyle="#475569",t.fillRect(e+6,l+8,2,2),t.fillRect(e+20,l+18,4,2),t.fillRect(e+22,l+12,2,4);let u=i;i.startsWith("bracket_")&&(u={bracket_1:"(",bracket_2:"{",bracket_3:"[",bracket_4:"]",bracket_5:"}",bracket_6:")"}[i]||"(");let d="rgba(56, 189, 248, 0.4)",h="#38bdf8";["(","{","["].includes(u)?(d="rgba(34, 197, 94, 0.4)",h="#4ade80"):[")","}","]"].includes(u)?(d="rgba(239, 68, 68, 0.4)",h="#f87171"):u.match(/^[A-Z0-9]$/)&&(d="rgba(245, 158, 11, 0.4)",h="#fbbf24");const p=Math.sin(a*.08)*.15+.85,g=t.createRadialGradient(e+16,l+15,0,e+16,l+15,18*p);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=g,t.beginPath(),t.arc(e+16,l+15,18,0,Math.PI*2),t.fill(),t.fillStyle=h,t.shadowColor=h,t.shadowBlur=6,t.font="bold 16px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(u,e+16,l+23),t.textAlign="start",t.shadowBlur=0}else if(i.includes("Flask")||i==="Water"||i==="Herb"||i==="Poison"||i==="Honey"){let l="#2ed573";(i.includes("Water")||i==="Water")&&(l="#1e90ff"),(i.includes("Poison")||i==="Poison")&&(l="#ff4757"),(i.includes("Honey")||i==="Honey")&&(l="#ffa502"),t.fillStyle="rgba(255,255,255,0.2)",t.beginPath(),t.arc(e+16,o+20,12,0,Math.PI*2),t.fill(),t.fillStyle=l,t.beginPath(),t.arc(e+16,o+22,10,0,Math.PI),t.fill(),t.fillStyle="rgba(255,255,255,0.4)",t.fillRect(e+12,o+2,8,10),t.fillStyle="#8b5a2b",t.fillRect(e+11,o,10,4)}else if(i.includes("Plank"))t.fillStyle="#8b5a2b",t.fillRect(e,o+10,32,12),t.fillStyle="#5c3a21",t.fillRect(e,o+14,32,2);else if(i.includes("Iron_"))t.fillStyle="#747d8c",t.beginPath(),t.arc(e+16,o+16,15,0,Math.PI*2),t.fill(),t.fillStyle="#1e272e",t.font="bold 14px monospace",t.textAlign="center",t.fillText(i.split("_")[1],e+16,o+21),t.textAlign="start";else if(i.includes("Rune_")){const l=i.split("_")[1],u=Math.sin(a*.05)*.2+.8,d=t.createRadialGradient(e+16,o+16,0,e+16,o+16,25*u);d.addColorStop(0,"rgba(0, 255, 255, 0.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(e+16,o+16,25,0,Math.PI*2),t.fill(),t.fillStyle="#1e293b",t.beginPath(),t.moveTo(e+16,o+4),t.lineTo(e+28,o+12),t.lineTo(e+24,o+28),t.lineTo(e+8,o+28),t.lineTo(e+4,o+12),t.fill(),t.fillStyle="#334155",t.beginPath(),t.moveTo(e+16,o+4),t.lineTo(e+8,o+12),t.lineTo(e+16,o+16),t.fill(),t.fillStyle="#00ffff",t.shadowColor="#00ffff",t.shadowBlur=10,t.font="bold 12px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+22),t.textAlign="start",t.shadowBlur=0}else if(i.includes("Skull"))t.fillStyle="#f5f6fa",t.fillRect(e+6,o+8,20,16),t.fillRect(e+10,o+24,12,6),t.fillStyle="#1e272e",t.fillRect(e+10,o+14,4,4),t.fillRect(e+18,o+14,4,4);else if(i.includes("Boulder")){const l=i.split("_")[1]||"",u=l?parseInt(l)%10:0;t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.ellipse(e+16,o+32,20+u,8,0,0,Math.PI*2),t.fill(),t.fillStyle="#636e72",t.beginPath(),t.moveTo(e+4-u,o+30),t.lineTo(e+16,o+4-u*2),t.lineTo(e+28+u,o+24),t.lineTo(e+20+u/2,o+34),t.fill(),t.fillStyle="#b2bec3",t.beginPath(),t.moveTo(e+10,o+26),t.lineTo(e+16,o+4-u*2),t.lineTo(e+24,o+20),t.fill(),l&&(t.fillStyle="#2d3436",t.font="bold 12px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+26),t.textAlign="start")}else if(i.includes("Artifact_")){const l=i.split("_")[1],u=Math.sin(a*.05)*.2+.8,d=t.createRadialGradient(e+16,o+16,0,e+16,o+16,30*u);d.addColorStop(0,"rgba(155, 89, 182, 0.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(e+16,o+16,30,0,Math.PI*2),t.fill(),t.fillStyle="rgba(241, 196, 15, 0.8)",t.beginPath(),t.moveTo(e+16,o+2),t.lineTo(e+26,o+16),t.lineTo(e+16,o+30),t.lineTo(e+6,o+16),t.fill(),t.fillStyle="#ffffff",t.font="bold 14px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(l,e+16,o+21),t.textAlign="start"}else if(i.includes("Crystal_")){let l=i.includes("76")?"#ff4757":"#7ed6df";t.fillStyle=l,t.beginPath(),t.moveTo(e+16,o+2),t.lineTo(e+24,o+16),t.lineTo(e+16,o+30),t.lineTo(e+8,o+16),t.fill()}else if(c==="rune_archive"){const l=Math.sin(a*.1)*.1+.9;t.fillStyle="#34495e",t.fillRect(e-4,o+30,40,6),t.fillStyle="#1abc9c",t.fillRect(e+10,o+28,12,4);const u=t.createLinearGradient(e,o,e,o+30);u.addColorStop(0,"rgba(26, 188, 156, 0)"),u.addColorStop(1,`rgba(26, 188, 156, ${.5*l})`),t.fillStyle=u,t.beginPath(),t.moveTo(e-10,o-10),t.lineTo(e+42,o-10),t.lineTo(e+22,o+28),t.lineTo(e+10,o+28),t.fill(),t.fillStyle=`rgba(129, 236, 236, ${l})`,t.shadowColor="#1abc9c",t.shadowBlur=10,t.font="bold 11px monospace",t.textAlign="center",t.fillText(i,e+16,o+10),t.textAlign="start",t.shadowBlur=0}else{const l=i.toLowerCase();if(Ut.relics[l]){const u=xi[l]||xi.apple,d=Ut.relics[l];if(!s){const h=i==="potion"?"rgba(65,105,225,0.2)":i==="scroll"?"rgba(245,222,179,0.2)":"rgba(255,215,0,0.2)",p=Math.sin(a*.06)*.1+.15,g=t.createRadialGradient(e+16,o+16,0,e+16,o+16,30);g.addColorStop(0,h.replace("0.2",String(p))),g.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=g,t.beginPath(),t.arc(e+16,o+16,30,0,Math.PI*2),t.fill()}ri(t,e-8,o,d,u,2.5)}else{t.fillStyle="#3d2611",t.fillRect(e-5,n+25,42,10),t.fillStyle="#8b6508",t.fillRect(e-2,n+22,36,3);const u=o-5;t.fillStyle="#8b6508",t.fillRect(e+1,u+2,30,26),t.fillStyle="#daa520",t.fillRect(e+2,u+3,28,24),t.fillStyle="#3d2611",t.font="bold 10px 'Cinzel', monospace",t.textAlign="center";let d=String(i).replace("_Tablet","").replace("Rune_","").replace("_Rune","").replace(/_\d+$/,"");if(d.length>4&&(d=d.substring(0,4)+"."),t.fillText(d,e+16,u+18),t.textAlign="start",!s){const h=Math.sin(a*.05)*.1+.1,p=t.createRadialGradient(e+16,u+15,0,e+16,u+15,25);p.addColorStop(0,`rgba(255, 215, 0, ${h})`),p.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=p,t.beginPath(),t.arc(e+16,u+15,25,0,Math.PI*2),t.fill()}}}t.globalAlpha=1,r&&(t.fillStyle=s?"rgba(170,204,255,0.3)":"#aaccff",t.font="bold 9px 'Press Start 2P', monospace",t.textAlign="center",t.fillText(r,e+12,n+58),t.textAlign="start")}function Bm(t,e="arrays",n=0,i=0){const s=t.getContext("2d"),a=t.width,r=t.height;s.clearRect(0,0,a,r);const f=yl.island[e]||yl.island.arrays,c=3,o=.3+Math.sin(i*.003)*.1;s.fillStyle=`rgba(43,122,184,${o})`;for(let l=0;l<6;l++){const u=a*.1+Math.sin(i*.002+l)*8,d=r*.75+l*4;s.fillRect(u+l*20,d,16,3)}if(e==="locked"){s.fillStyle=f.cloud,Ds(s,a*.2,r*.4,a*.6,r*.3),s.fillStyle=f.mid,Ds(s,a*.3,r*.35,a*.4,r*.2),s.fillStyle="#607080",s.fillRect(a*.42,r*.35,a*.16,r*.2),s.strokeStyle="#607080",s.lineWidth=3,s.beginPath(),s.arc(a*.5,r*.35,a*.08,Math.PI,0),s.stroke();return}switch(s.fillStyle=f.outline,xs(s,a*.1,r*.55,a*.8,r*.25),s.fillStyle=f.base,xs(s,a*.12,r*.5,a*.76,r*.22),s.fillStyle=f.mid,xs(s,a*.15,r*.45,a*.7,r*.18),s.fillStyle=f.top,xs(s,a*.18,r*.4,a*.64,r*.12),e){case"arrays":Pi(s,a*.25,r*.3,c),Pi(s,a*.55,r*.28,c),Pi(s,a*.7,r*.32,c),Lm(s,a*.4,r*.35,c),s.strokeStyle="rgba(255,255,255,0.15)",s.lineWidth=1;for(let u=0;u<4;u++)s.strokeRect(a*.3+u*12,r*.42,10,8);break;case"stacks":s.fillStyle="#b8860b",s.fillRect(a*.4,r*.25,a*.2,r*.15),s.fillStyle="#ffd700",s.fillRect(a*.45,r*.15,a*.1,r*.1),s.fillStyle="#daa520";for(let u=0;u<3;u++)s.fillRect(a*.4+u*a*.08,r*.22,a*.04,r*.03);s.fillStyle="#4a3b2c",s.beginPath(),s.arc(a*.5,r*.4,a*.04,Math.PI,0),s.fillRect(a*.46,r*.4,a*.08,r*.05),s.fill(),s.fillStyle="#ff8c00",s.beginPath(),s.arc(a*.5,r*.1,4+Math.sin(i*.05)*2,0,Math.PI*2),s.fill();break;case"linked":s.fillStyle="#e0c890",Ds(s,a*.2,r*.38,a*.2,r*.08),Ds(s,a*.5,r*.36,a*.15,r*.06),s.fillStyle="#c4a870",s.fillRect(a*.3,r*.25,4*c,12*c),s.fillRect(a*.6,r*.28,4*c,10*c),s.strokeStyle="#8b6914",s.lineWidth=2,s.setLineDash([4,3]),s.beginPath(),s.moveTo(a*.3+6,r*.32),s.lineTo(a*.6+6,r*.35),s.stroke(),s.setLineDash([]);break;case"trees":Pi(s,a*.2,r*.22,c+1),Pi(s,a*.45,r*.2,c+2),Pi(s,a*.7,r*.24,c+1),s.strokeStyle=`rgba(58,174,104,${.5+Math.sin(i*.003)*.2})`,s.lineWidth=2,s.beginPath(),s.moveTo(a*.28,r*.28),s.quadraticCurveTo(a*.35,r*.35,a*.45,r*.3),s.stroke(),s.beginPath(),s.moveTo(a*.58,r*.26),s.quadraticCurveTo(a*.62,r*.32,a*.7,r*.3),s.stroke(),(Math.sin(i*.002)>.95?0:1)&&(s.fillStyle="#ffcc00",s.fillRect(a*.48,r*.22,2*c,2*c),s.fillRect(a*.54,r*.22,2*c,2*c),s.fillStyle="#1a1a2e",s.fillRect(a*.49,r*.23,c,c),s.fillRect(a*.55,r*.23,c,c));break}}function Ds(t,e,n,i,s){t.beginPath(),t.ellipse(e+i/2,n+s/2,i/2,s/2,0,0,Math.PI*2),t.fill()}function xs(t,e,n,i,s){t.beginPath(),t.moveTo(e+i*.1,n+s),t.quadraticCurveTo(e,n+s*.3,e+i*.2,n),t.quadraticCurveTo(e+i*.5,n-s*.3,e+i*.8,n),t.quadraticCurveTo(e+i,n+s*.3,e+i*.9,n+s),t.closePath(),t.fill()}function Pi(t,e,n,i){t.fillStyle="#6b4423",t.fillRect(e+i,n+4*i,2*i,4*i),t.fillStyle="#2d8a3e",t.fillRect(e-i,n,6*i,3*i),t.fillRect(e,n-2*i,4*i,2*i),t.fillStyle="#3ea854",t.fillRect(e,n+i,4*i,i)}function Lm(t,e,n,i){t.fillStyle="#e8c898",t.fillRect(e,n+2*i,6*i,4*i),t.fillStyle="#c44",t.beginPath(),t.moveTo(e-i,n+2*i),t.lineTo(e+3*i,n),t.lineTo(e+7*i,n+2*i),t.fill(),t.fillStyle="#6b4423",t.fillRect(e+2*i,n+3*i,2*i,3*i)}class Im{constructor(e=50){this.particles=[],this.maxParticles=e}emit(e,n,i={}){this.particles.length>=this.maxParticles||this.particles.push({x:e,y:n,vx:(Math.random()-.5)*(i.speed||2),vy:-(Math.random()*(i.speed||2)),life:i.life||60,maxLife:i.life||60,size:i.size||2,color:i.color||"#ffcc44",gravity:i.gravity||0})}update(){this.particles=this.particles.filter(e=>(e.x+=e.vx,e.y+=e.vy,e.vy+=e.gravity,e.life--,e.life>0))}draw(e){this.particles.forEach(n=>{const i=n.life/n.maxLife;e.globalAlpha=i,e.fillStyle=n.color,e.fillRect(n.x,n.y,n.size,n.size)}),e.globalAlpha=1}}function Dm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n*.7);s.addColorStop(0,"#1a0b2e"),s.addColorStop(.4,"#8e44ad"),s.addColorStop(.7,"#e74c3c"),s.addColorStop(1,"#f1c40f"),t.fillStyle=s,t.fillRect(0,0,e,n);for(let l=0;l<40;l++){const u=Math.abs(Math.sin(l*31))*e,d=Math.abs(Math.cos(l*17))*n*.4;t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.5+.1})`,t.fillRect(u,d,1,1)}const a=n*.6,r=Math.sin(i*.02)*10,f=t.createRadialGradient(e*.7,a,0,e*.7,a,150+r);f.addColorStop(0,"rgba(255, 255, 255, 0.8)"),f.addColorStop(.3,"rgba(241, 196, 15, 0.5)"),f.addColorStop(1,"rgba(241, 196, 15, 0)"),t.fillStyle=f,t.beginPath(),t.arc(e*.7,a,150+r,0,Math.PI*2),t.fill(),t.fillStyle="#fffae6",t.beginPath(),t.arc(e*.7,a,60,0,Math.PI*2),t.fill();function c(l,u,d,h){t.fillStyle="#b9770e",t.beginPath(),t.moveTo(l,u-h),t.lineTo(l-d/2,u),t.lineTo(l,u),t.fill(),t.fillStyle="#7e5109",t.beginPath(),t.moveTo(l,u-h),t.lineTo(l+d/2,u),t.lineTo(l,u),t.fill()}c(e*.3,n*.55,200,100),c(e*.8,n*.58,150,80),c(e*.45,n*.6,120,60);function o(l,u,d,h,p,g=0){t.fillStyle=p,t.beginPath(),t.moveTo(0,n),t.lineTo(0,l);for(let m=0;m<=e;m+=10){const S=l+Math.sin(m*d+h+i*g)*u+Math.cos(m*d*.5)*(u*.5);t.lineTo(m,S)}t.lineTo(e,n),t.fill();for(let m=0;m<50;m++){const S=Math.random()*e,y=l+Math.random()*(n-l);t.fillStyle=`rgba(0, 0, 0, ${Math.random()*.1})`,t.fillRect(S,y,2,2)}}o(n*.6,30,.003,0,"#9c640c"),o(n*.68,40,.004,2,"#88560a"),o(n*.75,20,.005,5,"#704708");for(let l=0;l<30;l++){const u=(i*.5+l*40)%e,d=n*.6+Math.sin(i*.02+l)*100;t.fillStyle=`rgba(241, 196, 15, ${Math.random()*.3})`,t.fillRect(u,d,2,2)}}function xm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n*.6);s.addColorStop(0,"#3498db"),s.addColorStop(1,"#85c1e9"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#f39c12",t.fillRect(0,n*.5,e,n*.5);const a=t.createLinearGradient(0,n*.6,0,n);a.addColorStop(0,"#1abc9c"),a.addColorStop(1,"#16a085"),t.fillStyle=a,t.beginPath(),t.moveTo(e*.2,n*.6),t.quadraticCurveTo(e*.5,n*.55+Math.sin(i*.02)*10,e*.8,n*.6),t.quadraticCurveTo(e*.9,n*.8,e*.7,n),t.lineTo(e*.3,n),t.quadraticCurveTo(e*.1,n*.8,e*.2,n*.6),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=2;for(let f=0;f<5;f++){t.beginPath();const c=e*.3+f*50+Math.sin(i*.05+f)*10,o=n*.7+f*20;t.moveTo(c,o),t.lineTo(c+40,o),t.stroke()}function r(f,c,o){t.fillStyle="#6e2c00",t.beginPath(),t.moveTo(f,c),t.quadraticCurveTo(f+10*o,c-60*o,f+20*o,c-100*o),t.lineTo(f+10*o,c-100*o),t.quadraticCurveTo(f,c-60*o,f-10*o,c),t.fill(),t.fillStyle="#229954";for(let l=0;l<5;l++)t.save(),t.translate(f+15*o,c-95*o),t.rotate(l*Math.PI/2.5+Math.sin(i*.05)*.1),t.beginPath(),t.ellipse(30*o,0,40*o,10*o,0,0,Math.PI*2),t.fill(),t.restore()}r(e*.2,n*.65,.8),r(e*.85,n*.7,1.2),r(e*.1,n*.8,1.5)}function Um(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);if(s.addColorStop(0,"#190a23"),s.addColorStop(1,"#4a0000"),t.fillStyle=s,t.fillRect(0,0,e,n),Math.random()<.05){t.fillStyle=`rgba(255, 0, 0, ${Math.random()*.3})`,t.fillRect(0,0,e,n),t.strokeStyle="#ff3333",t.lineWidth=3,t.beginPath();let a=e*Math.random(),r=0;for(t.moveTo(a,r);r<n*.6;)a+=(Math.random()-.5)*60,r+=Math.random()*40+20,t.lineTo(a,r);t.stroke()}t.fillStyle="#111",t.beginPath(),t.moveTo(0,n*.5);for(let a=0;a<=e;a+=20)t.lineTo(a,n*.65+Math.sin(a*.01)*50);t.lineTo(e,n),t.lineTo(0,n),t.fill();for(let a=0;a<5;a++){const r=e*.1+a*200,f=n*.4+Math.sin(i*.06+a*2)*25;t.fillStyle="#222",t.beginPath(),t.moveTo(r,f-60),t.lineTo(r+30,f),t.lineTo(r,f+60),t.lineTo(r-30,f),t.fill(),t.fillStyle=`rgba(255, 0, 0, ${.5+Math.sin(i*.1+a)*.5})`,t.textAlign="center",t.font="24px monospace",t.fillText("NULL",r,f+8)}}function Nm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#0a192f"),s.addColorStop(1,"#112240"),t.fillStyle=s,t.fillRect(0,0,e,n);for(let r=0;r<100;r++){const f=Math.abs(Math.sin(r*123))*e,c=Math.abs(Math.cos(r*321))*n*.7,o=Math.sin(i*.05+r);t.fillStyle=`rgba(255, 255, 255, ${o>0?.8:.2})`,t.fillRect(f,c,r%3===0?2:1,r%3===0?2:1)}t.strokeStyle=`rgba(100, 200, 255, ${.2+Math.sin(i*.02)*.1})`,t.lineWidth=2;const a=[{x:e*.2,y:n*.2},{x:e*.4,y:n*.15},{x:e*.6,y:n*.25},{x:e*.8,y:n*.15}];t.beginPath(),t.moveTo(a[0].x,a[0].y);for(let r=1;r<a.length;r++)t.lineTo(a[r].x,a[r].y);t.stroke(),a.forEach(r=>{t.fillStyle="rgba(100, 200, 255, 0.6)",t.beginPath(),t.arc(r.x,r.y,6,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(r.x,r.y,2,0,Math.PI*2),t.fill()}),t.fillStyle="#0f2027",t.fillRect(0,n*.6,e,n*.4);for(let r=0;r<50;r++){const f=Math.abs(Math.sin(r*456))*e,c=n*.6+Math.abs(Math.cos(r*654))*n*.4;t.fillStyle=`rgba(0, 255, 255, ${.1+Math.sin(i*.05+r)*.3})`,t.beginPath(),t.arc(f,c,3,0,Math.PI*2),t.fill()}}function Om(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#5e3a1f"),s.addColorStop(1,"#9e6236"),t.fillStyle=s,t.fillRect(0,0,e,n);const a=e*.5,r=n*.4;for(let f=300;f>20;f-=30){t.strokeStyle=`rgba(211, 84, 0, ${.1+f/1e3})`,t.lineWidth=15,t.beginPath();const c=Math.sin(i*.05+f)*20,o=Math.cos(i*.05+f)*10;t.ellipse(a+c,r+o,f,f*.4,i*.02,0,Math.PI*2),t.stroke()}for(let f=0;f<12;f++){const c=i*.05+f*Math.PI*2/12,o=150+Math.sin(f*99)*50,l=a+Math.cos(c)*o,u=r+Math.sin(c)*o*.4;t.save(),t.translate(l,u),t.rotate(i*.1+f),t.fillStyle="#2c3e50",t.fillRect(-15,-15,30,30),t.fillStyle="#e74c3c",t.font="16px Arial",t.textAlign="center",t.fillText("∞",0,6),t.restore()}t.fillStyle="#3e2723",t.beginPath(),t.moveTo(0,n*.7),t.quadraticCurveTo(e*.5,n*.6,e,n*.8),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function Fm(t,e,n,i){const s=t.createRadialGradient(e*.5,n*.5,0,e*.5,n*.5,e*.8);s.addColorStop(0,"#5e3a1f"),s.addColorStop(1,"#1c1005"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#2b1a0a";for(let c=0;c<15;c++){const o=c*(e/15),l=100+Math.sin(c*42)*50;t.beginPath(),t.moveTo(o-20,0),t.lineTo(o+20,0),t.lineTo(o,l),t.fill()}t.strokeStyle=`rgba(255, 215, 0, ${.4+Math.sin(i*.05)*.3})`,t.lineWidth=4,t.lineCap="round";const a=n*.3;for(let c=0;c<5;c++){const o=e*.2+c*120;for(let l=0;l<4;l++)t.beginPath(),t.moveTo(o+l*15,a+Math.random()*5),t.lineTo(o+l*15+Math.random()*5,a+60),t.stroke();t.beginPath(),t.moveTo(o-5,a+50),t.lineTo(o+55,a+10),t.stroke()}const r=e*.85,f=t.createLinearGradient(0,0,0,n);f.addColorStop(0,"rgba(241, 196, 15, 0)"),f.addColorStop(.5,"rgba(241, 196, 15, 0.6)"),f.addColorStop(1,"rgba(241, 196, 15, 0)"),t.fillStyle=f,t.beginPath(),t.moveTo(r-20,0),t.lineTo(r+20,0),t.quadraticCurveTo(r+30+Math.sin(i*.1)*10,n/2,r+20,n),t.lineTo(r-20,n),t.quadraticCurveTo(r-30+Math.cos(i*.1)*10,n/2,r-20,0),t.fill(),t.fillStyle="#3d2611",t.beginPath(),t.moveTo(0,n*.65),t.quadraticCurveTo(e*.5,n*.75,e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function km(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#062615"),s.addColorStop(1,"#0e4a2d"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#03140a";for(let a=0;a<6;a++){const r=e*.1+a*e*.2+Math.sin(a*77)*50;t.fillRect(r,0,40+a%3*20,n),t.beginPath(),t.moveTo(r+20,n*.4),t.quadraticCurveTo(r+80,n*.3,r+100,n*.2),t.lineTo(r+20,n*.25),t.fill()}for(let a=0;a<40;a++){const r=(i*.5+a*45)%e,f=(i*1.5+a*87)%n;t.fillStyle=`rgba(154, 255, 128, ${Math.random()*.5+.2})`,t.beginPath(),t.ellipse(r,f,4,2,Math.sin(i*.05+a),0,Math.PI*2),t.fill()}for(let a=0;a<20;a++){const r=e*.5+Math.sin(i*.02+a*32)*e*.4,f=n*.6+Math.cos(i*.03+a*17)*100,c=Math.sin(i*.1+a)*.5+.5;t.fillStyle=`rgba(255, 255, 100, ${c})`,t.beginPath(),t.arc(r,f,2,0,Math.PI*2),t.fill(),t.fillStyle=`rgba(255, 255, 100, ${c*.2})`,t.beginPath(),t.arc(r,f,10,0,Math.PI*2),t.fill()}t.fillStyle="#1e3816",t.beginPath(),t.moveTo(0,n*.65),t.quadraticCurveTo(e*.5,n*.6,e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.fillStyle="#2d5a27";for(let a=0;a<10;a++){const r=a*(e/10)+20;t.beginPath(),t.moveTo(r,n),t.quadraticCurveTo(r-20,n*.7,r+10,n*.65),t.quadraticCurveTo(r+5,n*.7,r+20,n),t.fill()}}function Wm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#2c1938"),s.addColorStop(1,"#5c3a21"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="rgba(40, 25, 45, 0.5)";for(let a=0;a<4;a++){const r=e*.2+a*e*.3;t.fillRect(r-20,n*.3,40,n)}for(let a=0;a<40;a++){const r=(i*.3+a*55)%e,f=n*.2+(i*.5+a*33)%(n*.8);t.fillStyle=`rgba(255, 215, 0, ${Math.random()*.4+.1})`,t.beginPath(),t.arc(r,f,1+Math.sin(i*.05+a),0,Math.PI*2),t.fill()}t.fillStyle="#2d1b2e",t.strokeStyle=`rgba(255, 215, 0, ${.4+Math.sin(i*.05)*.2})`,t.lineWidth=2;for(let a=0;a<3;a++){const r=e*.15+a*e*.35+Math.sin(i*.01+a)*10;t.beginPath(),t.moveTo(r-30,n),t.lineTo(r-20,n*.4),t.lineTo(r,n*.35),t.lineTo(r+20,n*.4),t.lineTo(r+30,n),t.fill(),t.beginPath(),t.moveTo(r,n*.4),t.lineTo(r,n*.8),t.stroke();for(let f=0;f<4;f++)t.beginPath(),t.moveTo(r-10,n*.45+f*30),t.lineTo(r+10,n*.48+f*30),t.stroke()}t.fillStyle="#1e1112",t.beginPath(),t.moveTo(0,n*.65),t.quadraticCurveTo(e*.5,n*.6,e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.strokeStyle=`rgba(255, 215, 0, ${.2+Math.sin(i*.03)*.1})`,t.lineWidth=3,t.beginPath(),t.moveTo(0,n*.75),t.quadraticCurveTo(e*.5,n*.7,e,n*.8),t.stroke()}function Gm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#5DADE2"),s.addColorStop(1,"#AED6F6"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.6)";for(let c=0;c<5;c++){const o=(i*.2+c*200)%(e+200)-100,l=n*.1+c%3*50;t.beginPath(),t.arc(o,l,40,0,Math.PI*2),t.arc(o+30,l-20,50,0,Math.PI*2),t.arc(o+60,l,40,0,Math.PI*2),t.fill()}const a=e*.4,r=e*.5-a/2,f=t.createLinearGradient(r,0,r+a,0);f.addColorStop(0,"#3E2723"),f.addColorStop(.2,"#5D4037"),f.addColorStop(.8,"#4E342E"),f.addColorStop(1,"#212121"),t.fillStyle=f,t.fillRect(r,0,a,n),t.strokeStyle=`rgba(46, 204, 113, ${.5+Math.sin(i*.05)*.3})`,t.lineWidth=8,t.lineCap="round",t.beginPath(),t.moveTo(r+a*.3,n),t.quadraticCurveTo(r+a*.4,n*.5,r+a*.2,0),t.stroke(),t.beginPath(),t.moveTo(r+a*.7,n),t.quadraticCurveTo(r+a*.5,n*.6,r+a*.8,0),t.stroke();for(let c=0;c<3;c++){const o=e*.1+c*e*.3,l=n*.65+Math.sin(i*.04+c)*10;t.fillStyle="#27AE60",t.beginPath(),t.ellipse(o,l,60,15,0,0,Math.PI*2),t.fill(),t.fillStyle="#2ECC71",t.beginPath(),t.ellipse(o,l-2,55,12,0,0,Math.PI*2),t.fill()}}function zm(t,e,n,i){t.fillStyle="#0B5345",t.fillRect(0,0,e,n/2),t.fillStyle="#145A32";for(let a=0;a<8;a++){const r=a*e/8+20;t.beginPath(),t.moveTo(r,n/2),t.lineTo(r-30,n/2-150+Math.sin(a*4)*30),t.lineTo(r+30,n/2-150+Math.cos(a*4)*30),t.fill()}const s=t.createLinearGradient(0,n/2,0,n);s.addColorStop(0,"#117A65"),s.addColorStop(1,"#0B5345"),t.fillStyle=s,t.fillRect(0,n/2,e,n/2),t.fillStyle="rgba(20, 90, 50, 0.6)";for(let a=0;a<8;a++){const r=a*e/8+20;t.beginPath(),t.moveTo(r,n/2),t.lineTo(r-30,n/2+150-Math.sin(a*4)*30),t.lineTo(r+30,n/2+150-Math.cos(a*4)*30),t.fill()}t.strokeStyle=`rgba(163, 228, 215, ${.3+Math.sin(i*.05)*.2})`,t.lineWidth=2;for(let a=0;a<4;a++){t.beginPath(),t.moveTo(0,n/2+a*10);for(let r=0;r<=e;r+=20)t.lineTo(r,n/2+a*10+Math.sin(r*.05+i*.1+a)*3);t.stroke()}t.fillStyle="rgba(255, 255, 255, 0.1)",t.fillRect(0,n*.65,e,5),t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(0,n*.65,e,1)}function Xm(t,e,n,i){t.fillStyle="#1A1A2E",t.fillRect(0,0,e,n),t.fillStyle="#0F0F1A";for(let s=0;s<15;s++){const a=s*e/15;t.fillRect(a,0,20,n)}t.strokeStyle="#2E004F",t.lineWidth=150,t.beginPath(),t.moveTo(0,n*.8),t.quadraticCurveTo(e*.5,n*.5,e,n*.8),t.stroke();for(let s=0;s<6;s++){const a=e*.1+s*e*.16,r=n*.65+Math.sin(a*.01)*50,f=Math.sin(i*.05+s)*.3+.7,c=t.createRadialGradient(a,r,0,a,r,40);c.addColorStop(0,`rgba(155, 89, 182, ${f})`),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,r,40,0,Math.PI*2),t.fill(),t.fillStyle="#8E44AD",t.beginPath(),t.arc(a,r,15,Math.PI,0),t.fill(),t.fillStyle="#E0B0FF",t.beginPath(),t.arc(a-5,r-5,3,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(a+5,r-3,2,0,Math.PI*2),t.fill(),t.fillStyle="#D2B4DE",t.fillRect(a-3,r,6,15)}t.fillStyle="#160B22",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function Vm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#5D6D7E"),s.addColorStop(1,"#2C3E50"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#34495E",t.fillRect(e*.1,n*.3,e*.2,n),t.fillRect(e*.4,n*.25,e*.15,n),t.fillRect(e*.7,n*.35,e*.2,n),t.fillStyle="#273746",t.fillRect(0,n*.4,e*.15,n),t.fillRect(e*.25,n*.45,e*.1,n),t.fillRect(e*.6,n*.4,e*.25,n),t.fillRect(e*.9,n*.5,e*.1,n),t.strokeStyle="#1E8449",t.lineWidth=4;for(let a=0;a<10;a++){const r=a*e*.1+10;t.beginPath(),t.moveTo(r,n*.2),t.quadraticCurveTo(r+20,n*.4,r-10,n*.6),t.stroke()}t.strokeStyle=`rgba(52, 152, 219, ${.4+Math.sin(i*.05)*.2})`,t.lineWidth=3,t.setLineDash([10,10]),t.lineDashOffset=-i*.5,t.beginPath(),t.moveTo(e*.2,n*.5),t.lineTo(e*.5,n*.4),t.lineTo(e*.8,n*.6),t.stroke(),t.setLineDash([]),t.fillStyle="#1C2833",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.strokeStyle="rgba(0,0,0,0.5)",t.lineWidth=2;for(let a=0;a<e;a+=40)t.beginPath(),t.moveTo(a,n*.65),t.lineTo(a-40,n),t.stroke()}function Ym(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#E74C3C"),s.addColorStop(1,"#F39C12"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="rgba(236, 240, 241, 0.3)";for(let f=0;f<3;f++){const c=e*.2+f*e*.3+Math.sin(i*.02+f)*30;for(let o=0;o<5;o++)t.beginPath(),t.arc(c+Math.sin(i*.05+o)*15,n*.4-o*40-i*.5%50,20+o*10,0,Math.PI*2),t.fill()}const a=e*.3,r=e*.4;t.fillStyle="#5D4037",t.fillRect(a,0,20,n),t.fillRect(a+r-20,0,20,n),t.strokeStyle="#4E342E",t.lineWidth=15;for(let f=0;f<6;f++){const c=f*n*.2;t.beginPath(),t.moveTo(a,c),t.lineTo(a+r,c+n*.2),t.stroke(),t.beginPath(),t.moveTo(a+r,c),t.lineTo(a,c+n*.2),t.stroke(),t.fillStyle="#3E2723",t.fillRect(a-20,c,r+40,20);const o=a+r/2,l=c-10,u=Math.sin(i*.1+f)*.2+.8,d=t.createRadialGradient(o,l,0,o,l,50);d.addColorStop(0,`rgba(255, 100, 0, ${u})`),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,50,0,Math.PI*2),t.fill(),t.fillStyle="#F1C40F",t.beginPath(),t.moveTo(o-15,l),t.lineTo(o,l-30*u),t.lineTo(o+15,l),t.fill(),t.fillStyle="#E67E22",t.beginPath(),t.moveTo(o-10,l),t.lineTo(o,l-20*u),t.lineTo(o+10,l),t.fill()}t.fillStyle="#212F3C",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function qm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#F1C40F"),s.addColorStop(1,"#D35400"),t.fillStyle=s,t.fillRect(0,0,e,n);for(let a=0;a<8;a++){const r=a*e/8+20;t.fillStyle="#5D4037",t.fillRect(r-10,n*.3,20,n*.35);const f=["#E67E22","#C0392B","#D35400"];t.fillStyle=f[a%3],t.beginPath(),t.arc(r,n*.3,60+Math.sin(a*7)*10,0,Math.PI*2),t.arc(r-30,n*.35,50,0,Math.PI*2),t.arc(r+30,n*.35,50,0,Math.PI*2),t.fill()}for(let a=0;a<150;a++){const r=(i*2+a*45+Math.sin(i*.05+a)*50)%e,f=(i*3+a*87)%n,c=["#E67E22","#C0392B","#F1C40F"];t.fillStyle=c[a%3],t.save(),t.translate(r,f),t.rotate((i*.05+a)%(Math.PI*2)),t.beginPath(),t.ellipse(0,0,6,3,0,0,Math.PI*2),t.fill(),t.restore()}t.fillStyle="#BA4A00",t.beginPath(),t.moveTo(0,n*.65),t.quadraticCurveTo(e*.5,n*.6,e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function Km(t,e,n,i){t.fillStyle="#0B0B1A",t.fillRect(0,0,e,n),t.fillStyle="#1A1A2E";for(let a=0;a<10;a++){const r=a*e/10;t.beginPath(),t.moveTo(r,0),t.lineTo(r+30,n*.3+Math.sin(a*4)*50),t.lineTo(r+60,0),t.fill()}const s=["#00FFFF","#FF00FF","#00FF00","#FFFF00"];for(let a=0;a<5;a++){const r=e*.1+a*e*.2,f=n*.6,c=s[a%4],o=t.createRadialGradient(r,f,0,r,f,100);o.addColorStop(0,c+"80"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.beginPath(),t.arc(r,f,100,0,Math.PI*2),t.fill(),t.fillStyle=c,t.beginPath(),t.moveTo(r,f-80),t.lineTo(r+30,f),t.lineTo(r,f+40),t.lineTo(r-30,f),t.fill(),t.fillStyle="rgba(255,255,255,0.5)",t.beginPath(),t.moveTo(r,f-80),t.lineTo(r+10,f),t.lineTo(r,f+40),t.fill()}t.strokeStyle=`rgba(255, 255, 255, ${.2+Math.sin(i*.05)*.1})`,t.lineWidth=40,t.lineCap="round",t.beginPath(),t.moveTo(0,n*.75),t.quadraticCurveTo(e*.3,n*.8,e*.5,n*.7),t.quadraticCurveTo(e*.8,n*.6,e,n*.75),t.stroke(),t.fillStyle="rgba(20, 20, 40, 0.8)",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function $m(t,e,n,i){t.fillStyle="#0E2F1D",t.fillRect(0,0,e,n),t.fillStyle="#144629";for(let s=0;s<15;s++){const a=s*e/15+Math.sin(s*11)*20;t.fillRect(a,n*.1,40,n),t.beginPath(),t.arc(a+20,n*.1,60,0,Math.PI*2),t.fill()}t.fillStyle="#5A6E63";for(let s=0;s<4;s++){const a=e*.2+s*e*.25,r=n*.5+(s%2===0?-30:30);t.fillRect(a-30,r,60,n),t.beginPath(),t.moveTo(a,r-40),t.lineTo(a+40,r+10),t.lineTo(a-40,r+10),t.fill(),t.fillStyle=`rgba(0, 255, 255, ${.5+Math.sin(i*.05+s)*.5})`,t.beginPath(),t.arc(a,r-10,5,0,Math.PI*2),t.fill(),t.fillStyle="#1D8348",t.fillRect(a-25,r,10,40),t.fillRect(a+10,r,15,60),t.fillStyle="#5A6E63"}t.strokeStyle="#3E2723",t.lineWidth=15,t.beginPath(),t.moveTo(e*.2,n*.6),t.lineTo(e*.45,n*.5),t.lineTo(e*.7,n*.6),t.lineTo(e*.95,n*.5),t.stroke(),t.fillStyle="#183B25",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill()}function Jm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#11001A"),s.addColorStop(1,"#000000"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#1A002A";for(let a=0;a<8;a++){const r=a*e/8;t.beginPath(),t.moveTo(r-20,0),t.lineTo(r+40,n*.5+Math.sin(a*5)*100),t.lineTo(r+60,0),t.fill()}for(let a=0;a<50;a++){const r=(i*.2+a*50)%e,f=n-(i*1.5+a*90)%n;t.fillStyle=`rgba(138, 43, 226, ${Math.random()*.6+.1})`,t.beginPath(),t.arc(r,f,Math.random()*3+1,0,Math.PI*2),t.fill()}t.fillStyle="#2A004A",t.fillRect(0,n*.4,e*.2,n),t.fillRect(e*.8,n*.3,e*.2,n),t.fillStyle="#05000A",t.fillRect(e*.2,n*.65,e*.6,n),t.strokeStyle="#4A235A",t.lineWidth=8,t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.stroke()}function jm(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#85C1E9"),s.addColorStop(1,"#D4E6F1"),t.fillStyle=s,t.fillRect(0,0,e,n);const a=(r,f,c,o)=>{t.fillStyle="#1E8449",t.fillRect(r,f,c,o),t.fillStyle="#229954";for(let l=0;l<c;l+=15)for(let u=0;u<o;u+=15)t.beginPath(),t.arc(r+l+7,f+u+7,10,0,Math.PI*2),t.fill()};a(e*.1,n*.2,e*.15,n),a(e*.4,n*.3,e*.1,n),a(e*.7,n*.15,e*.2,n),a(0,n*.4,e*.2,n),a(e*.3,n*.45,e*.15,n),a(e*.6,n*.4,e*.2,n),t.strokeStyle=`rgba(241, 196, 15, ${.4+Math.sin(i*.1)*.2})`,t.lineWidth=10,t.lineCap="round",t.setLineDash([15,20]),t.lineDashOffset=-i,t.beginPath(),t.moveTo(e*.1,n*.6),t.quadraticCurveTo(e*.3,n*.5,e*.5,n*.6),t.quadraticCurveTo(e*.8,n*.7,e*.9,n*.5),t.stroke(),t.setLineDash([]),t.fillStyle="#27AE60",t.beginPath(),t.moveTo(0,n*.65),t.lineTo(e,n*.65),t.lineTo(e,n),t.lineTo(0,n),t.fill(),t.strokeStyle="#229954",t.lineWidth=2;for(let r=0;r<e;r+=10)t.beginPath(),t.moveTo(r,n*.65),t.lineTo(r+Math.sin(r*3)*5,n*.65+10),t.stroke()}class Zm{constructor(e,n="arrays-strings",i="temple"){vo(this,"render",()=>{this.time++;const{ctx:e,canvas:n}=this,i=n.width,s=n.height;e.clearRect(0,0,i,s),this.updateCommandQueue(),this.drawBg(e,i,s,this.time,this);let a=s*.72;(this.worldId==="stacks-queues"||this.worldId==="arrays-strings")&&(a=s*.65),this.worldId!=="stacks-queues"&&this.worldId!=="arrays-strings"&&this.worldId!=="linked-lists"&&this.worldId!=="trees-graphs"&&Mm(e,i*.02,a,i*.96,20),this.relics.forEach(l=>{const u=l.x/100*i,d=40,h=35,p=u-d/2+12,g=a-h;this.worldId!=="stacks-queues"&&this.worldId!=="arrays-strings"&&this.worldId!=="linked-lists"&&this.worldId!=="trees-graphs"&&Tm(e,p,g,d,h);let m=g-40;l.y!==void 0&&(m=l.y/100*s-40);const S=this.collectedRelics.has(l.id||l.name),y=l.name.replace(/_/g," "),R=l.id||l.name,H=this.worldId==="stacks-queues"?"":y;wm(e,u,m,R,S,this.time,H,this.worldId,this.sceneType)});const r=i*.82,f=a-80;this.worldId!=="stacks-queues"&&this.worldId!=="arrays-strings"&&this.worldId!=="linked-lists"&&this.worldId!=="trees-graphs"&&(Cm(e,r,f,50,80,this.isExitOpen,this.time),Hm(e,r+8,f-40,2.5,this.time)),this.hazards.forEach(l=>{const u=l.x/100*i;let d=a;l.y!==void 0&&(d=l.y/100*s);let h=this.time*2%200,p=1;h<30?p=h/30:h<100?p=1:h<130?p=1-(h-100)/30:p=0;let g=(1-p)*40;e.save(),e.beginPath(),e.rect(u-50,d-100,100,100),e.clip();let m=d+g;if(l.type==="spikes")e.fillStyle="#7f8c8d",e.beginPath(),e.moveTo(u-20,m),e.lineTo(u-10,m-30),e.lineTo(u,m),e.lineTo(u+10,m-30),e.lineTo(u+20,m),e.fill();else if(l.type==="fire"){e.fillStyle="#e74c3c";const S=20+Math.sin(this.time*.2)*10;e.fillRect(u-15,m-S,30,S),e.fillStyle="#f1c40f",e.fillRect(u-8,m-S*.6,16,S*.6)}else l.type==="enemy"?(e.fillStyle="#8e44ad",e.fillRect(u-20,m-40,40,40),e.fillStyle="#fff",e.fillRect(u-10,m-30,8,8),e.fillRect(u+2,m-30,8,8),e.fillStyle="#e74c3c",e.fillRect(u-6,m-28,4,4),e.fillRect(u+6,m-28,4,4)):l.type==="poison"&&(e.fillStyle="rgba(46, 204, 113, 0.8)",e.beginPath(),e.ellipse(u,m,30,10,0,0,Math.PI*2),e.fill());e.restore()});const c=this.charX*i,o=this.charYNorm*s-64;if(this.onCharacterUpdate&&(this.onCharacterUpdate(this.charX,this.charYNorm,this.charIsWalking,this.charFacingRight,this.equippedTool,this.toolAnimation,this.toolAnimationProgress,this.isEnteredDoor),this.charHidden=!0),!this.charHidden&&(this.invincibilityFrames%10<5&&bm(e,c,o,this.charSprite,2,this.time,this.charIsWalking,this.charFacingRight),this.equippedTool&&Ut.tools&&Ut.tools[this.equippedTool])){const l=Ut.tools[this.equippedTool],u=xi[this.equippedTool],d=2;e.save();let h=c+48,p=o+36;this.charFacingRight||(h=c+16,e.translate(h,p),e.scale(-1,1),e.translate(-h,-p),h=c-16),e.translate(h,p);const g=this.toolAnimationProgress;if(this.toolAnimation==="swing"){const m=Math.sin(g*Math.PI*2)*(Math.PI/4);e.rotate(m)}else if(this.toolAnimation==="poke"){const m=Math.sin(g*Math.PI)*15;e.translate(m,0)}else if(this.toolAnimation==="scan"){const m=Math.sin(g*Math.PI*4)*5;e.translate(0,m)}e.translate(-h,-p),ri(e,h,p,l,u,d),e.restore()}this.particles.update(),this.particles.draw(e),this.animationId=requestAnimationFrame(this.render)});this.canvas=e,this.ctx=e.getContext("2d"),this.worldId=n,this.sceneType=i,this.time=0,this.particles=new Im(60),this.isExitOpen=!1,this.collectedRelics=new Set,this.relics=[],this.animationId=null,this.charX=.08,this.charYNorm=.65,this.charVy=0,this.isGrounded=!0,this.gravity=.4,this.jumpForce=-8,this.moveSpeed=.005,this.charTargetX=.08,this.charSpeed=.004,this.charIsWalking=!1,this.charFacingRight=!0,this.charHomeX=.08,this.charHomeYNorm=.65,this.keys={left:!1,right:!1,up:!1},this.keydownHandler=s=>{s.key==="ArrowLeft"&&(this.keys.left=!0),s.key==="ArrowRight"&&(this.keys.right=!0),(s.key==="ArrowUp"||s.key===" ")&&(this.keys.up=!0,this.isGrounded&&(this.charVy=this.jumpForce,this.isGrounded=!1))},this.keyupHandler=s=>{s.key==="ArrowLeft"&&(this.keys.left=!1),s.key==="ArrowRight"&&(this.keys.right=!1),(s.key==="ArrowUp"||s.key===" ")&&(this.keys.up=!1)},window.addEventListener("keydown",this.keydownHandler),window.addEventListener("keyup",this.keyupHandler),this.platforms=[],this.doors=[],this.hazards=[],this.enemies=[],this.invincibilityFrames=0,this.commandQueue=[],this.currentCommand=null,this.commandCallbacks=[],this.isProcessingQueue=!1,this.stackData=[],n==="arrays-strings"?(this.charSprite="farmer",this.relicSprite="apple",i==="sunny_farm"?this.drawBg=_l:i==="orchard"?this.drawBg=lm:i==="quarry"?(this.drawBg=cm,this.charSprite="explorer"):i==="garden"?(this.drawBg=fm,this.charSprite="ranger"):i==="portal_chamber"?(this.drawBg=dm,this.charSprite="explorer"):i==="treasure_hall"?(this.drawBg=um,this.charSprite="explorer"):i==="mirror_hall"?(this.drawBg=hm,this.charSprite="explorer"):i==="rune_archive"?(this.drawBg=pm,this.charSprite="explorer"):i==="royal_ledger"?(this.drawBg=mm,this.charSprite="explorer"):i==="enchanted_cave"?(this.drawBg=Sm,this.charSprite="explorer"):this.drawBg=_l):n==="stacks-queues"?(this.charSprite="explorer",this.relicSprite="gold",i==="library"?this.drawBg=Q0:i==="dungeon_scale"?this.drawBg=em:i==="laboratory"?this.drawBg=tm:i==="chasm"?this.drawBg=nm:i==="castle_gate"?this.drawBg=im:i==="ritual_temple"?this.drawBg=sm:i==="mine"?this.drawBg=am:i==="treasure_vault"?this.drawBg=rm:i==="snowy_peak"?this.drawBg=om:this.drawBg=Em):n==="linked-lists"?(this.charSprite="explorer",this.relicSprite="scroll",i==="desert_ruins"?this.drawBg=Dm:i==="ruin_counting"?this.drawBg=Fm:i==="desert_oasis"?this.drawBg=xm:i==="cursed_ruins"?this.drawBg=Um:i==="mystic_ruins"?this.drawBg=Nm:i==="deadly_loop"?this.drawBg=Om:this.drawBg=Pm):n==="trees-graphs"?(this.charSprite="ranger",this.relicSprite="leaf",i==="enchanted_forest"?this.drawBg=km:i==="ancient_message_forest"?this.drawBg=Wm:i==="signal_tower_forest"?this.drawBg=Ym:i==="autumn_leaf_fall"?this.drawBg=qm:i==="crystal_cave_path"?this.drawBg=Km:i==="overgrown_ruins_graph"?this.drawBg=$m:i==="abyssal_chasm"?this.drawBg=Jm:i==="enchanted_hedge_maze"?this.drawBg=jm:i==="great_tree"?this.drawBg=Gm:i==="mirror_forest"?this.drawBg=zm:i==="magic_path"?this.drawBg=Xm:i==="graph_maze"?this.drawBg=Vm:this.drawBg=Am,this.relicSprite="leaf"):(this.drawBg=Rm,this.charSprite="farmer",this.relicSprite="apple"),this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0}updateStack(e){this.stackData=[...e]}setRelics(e){this.relics=e||[]}collectRelic(e){this.collectedRelics.add(e);const n=this.relics.find(i=>(i.id||i.name)===e);if(n)for(let i=0;i<15;i++)this.particles.emit(n.x/100*this.canvas.width,this.canvas.height*.6,{color:"#ffee88",speed:3,life:40,size:3})}openExit(){this.isExitOpen=!0}setHazards(e){this.hazards=e||[]}takeDamage(e){if(this.invincibilityFrames>0)return;this.invincibilityFrames=60,this.charVy=-5,this.charX-=this.charFacingRight?.05:-.05;const n=this.charX*this.canvas.width,i=this.charYNorm*this.canvas.height-30;for(let s=0;s<20;s++)this.particles.emit(n,i,{color:"#e74c3c",speed:5,life:30,size:4});window.dispatchEvent(new CustomEvent("playerDamage",{detail:e}))}enqueueCommands(e,n){this.commandQueue.push(...e),n&&this.commandCallbacks.push({index:this.commandQueue.length-1,callback:n}),this.isProcessingQueue||this.processNextCommand()}processNextCommand(){if(this.commandQueue.length===0){this.isProcessingQueue=!1,this.currentCommand=null,this.charIsWalking=!1,this.commandCallbacks.forEach(n=>n.callback()),this.commandCallbacks=[];return}this.isProcessingQueue=!0,this.currentCommand=this.commandQueue.shift();const e=this.currentCommand;switch(e.type){case"MOVE_TO":{e.targetX/this.canvas.width,this.charTargetX=e.targetX/this.canvas.width,this.charFacingRight=this.charTargetX>this.charX,this.charIsWalking=!0;break}case"JUMP_TO":{this.charFacingRight=e.targetX/this.canvas.width>this.charX,this.charIsWalking=!1,setTimeout(()=>{this.charIsWalking=!0,this.isGrounded=!1,this.isJumpingArc=!0;const n=this.charX,i=this.charYNorm,s=e.targetX/this.canvas.width,a=e.targetY!==void 0?e.targetY/100:i,r=e.waitMs||600,f=performance.now(),c=o=>{const l=o-f,u=Math.min(1,l/r);this.charX=n+(s-n)*u;const d=0;this.charYNorm=i+(a-i)*u-Math.sin(u*Math.PI)*d,u<1?requestAnimationFrame(c):(this.charX=s,this.charYNorm=a,this.isGrounded=!0,this.charVy=0,this.isJumpingArc=!1,this.charIsWalking=!1,this.processNextCommand())};requestAnimationFrame(c)},300);return}case"PICKUP":{this.collectRelic(e.itemId||e.item),setTimeout(()=>this.processNextCommand(),200);return}case"USE_TOOL":{this.equippedTool=e.tool,this.toolAnimation=e.animation,this.toolAnimationProgress=0,this.charFacingRight=!0;const n=500,i=performance.now(),s=a=>{const r=a-i;if(this.toolAnimationProgress=Math.min(1,r/n),this.toolAnimationProgress<1)requestAnimationFrame(s);else{if(this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0,e.effect==="harvest_particles"){const f=e.targetX||this.charX*this.canvas.width+40;for(let c=0;c<15;c++)this.particles.emit(f,this.canvas.height*.6,{color:"#8b4513",speed:3,life:40,size:3}),this.particles.emit(f,this.canvas.height*.6,{color:"#228b22",speed:2,life:30,size:2})}else if(e.effect==="magic_sparkles"){const f=e.targetX||this.charX*this.canvas.width+40;for(let c=0;c<20;c++)this.particles.emit(f,this.canvas.height*.5,{color:"#ff00ff",speed:4,life:50,size:3}),this.particles.emit(f,this.canvas.height*.5,{color:"#00ffff",speed:3,life:40,size:2})}else if(e.effect==="slash"){const f=e.targetX||this.charX*this.canvas.width+40;for(let c=0;c<10;c++)this.particles.emit(f,this.canvas.height*.5,{color:"#ff0000",speed:5,life:20,size:4}),this.particles.emit(f,this.canvas.height*.5,{color:"#ffffff",speed:6,life:15,size:2})}e.item&&this.collectRelic(e.itemId||e.item),setTimeout(()=>this.processNextCommand(),200)}};requestAnimationFrame(s);return}case"POP_ITEM":{this.charFacingRight=!1,this.equippedTool="key",this.toolAnimation="poke",this.toolAnimationProgress=0;const n=400,i=performance.now(),s=a=>{const r=a-i;if(this.toolAnimationProgress=Math.min(1,r/n),this.toolAnimationProgress<1)requestAnimationFrame(s);else{if(this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0,this.stackData&&this.stackData.length>0){this.stackData.pop();const f=this.canvas.width*.5,l=this.canvas.height*.65-(this.stackData.length+1)*30-5;for(let u=0;u<20;u++)this.particles.emit(f,l,{color:"#ff4d4d",speed:4,life:30,size:3}),this.particles.emit(f,l,{color:"#ffffff",speed:2,life:20,size:2})}setTimeout(()=>this.processNextCommand(),200)}};requestAnimationFrame(s);return}case"INSERT_STACK":{this.charFacingRight=!1,this.equippedTool="magic_device",this.toolAnimation="swing",this.toolAnimationProgress=0;const n=400,i=performance.now(),s=a=>{const r=a-i;if(this.toolAnimationProgress=Math.min(1,r/n),this.toolAnimationProgress<1)requestAnimationFrame(s);else{this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0,this.stackData||(this.stackData=[]),this.stackData.push(e.item);const f=this.canvas.width*.5,l=this.canvas.height*.65-this.stackData.length*30-5;for(let u=0;u<20;u++)this.particles.emit(f,l,{color:"#00f0ff",speed:3,life:40,size:3});setTimeout(()=>this.processNextCommand(),200)}};requestAnimationFrame(s);return}case"PEEK_ITEM":{this.charFacingRight=!0,this.equippedTool="scanner",this.toolAnimation="scan",this.toolAnimationProgress=0;const n=800,i=performance.now(),s=a=>{const r=a-i;this.toolAnimationProgress=Math.min(1,r/n),this.toolAnimationProgress<1?requestAnimationFrame(s):(this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0,setTimeout(()=>this.processNextCommand(),200))};requestAnimationFrame(s);return}case"EXECUTE_CALLBACK":{e.callback&&e.callback(),this.processNextCommand();return}case"ENTER_DOOR":{this.openExit(),this.charHidden=!0,this.isEnteredDoor=!0;const n=this.charX*this.canvas.width,i=this.canvas.height*.5;for(let s=0;s<30;s++)this.particles.emit(n,i,{color:"#ffffff",speed:4,life:40,size:3}),this.particles.emit(n,i,{color:"#88bbff",speed:3,life:50,size:2});setTimeout(()=>{this.onDoorEnter&&this.onDoorEnter(),this.processNextCommand()},800);return}case"WAIT":{setTimeout(()=>this.processNextCommand(),(e.frames||20)*16);return}case"SPAWN_HAZARD":{this.hazards.push({type:e.hazardType||"spikes",x:e.x||50,y:e.y}),this.processNextCommand();return}case"TAKE_DAMAGE":{this.takeDamage(e.amount||1),setTimeout(()=>this.processNextCommand(),500);return}default:this.processNextCommand();return}}updateCommandQueue(){const e=this.canvas.height,n=this.canvas.width;if(!this.isJumpingArc){this.charVy+=this.gravity,this.charYNorm+=this.charVy/e,this.isGrounded=!1;let s=this.charHomeYNorm;const a=64/n;for(const r of this.platforms)if(this.charX+a>r.x&&this.charX<r.x+r.w&&this.charYNorm-this.charVy/e<=r.y&&this.charYNorm>=r.y){s=r.y;break}this.charYNorm>=s&&(this.charYNorm=s,this.charVy=0,this.isGrounded=!0)}let i=!1;if(this.keys.left?(this.charX-=this.moveSpeed,this.charFacingRight=!1,this.charIsWalking=!0,i=!0):this.keys.right&&(this.charX+=this.moveSpeed,this.charFacingRight=!0,this.charIsWalking=!0,i=!0),this.charX<0&&(this.charX=0),this.charX>.95&&(this.charX=.95),this.isExitOpen&&!this.charHidden&&this.keys.up&&Math.abs(this.charX-.85)<.1&&(this.enqueueCommands([{type:"ENTER_DOOR"}]),this.keys.up=!1),!i&&this.currentCommand&&this.currentCommand.type==="MOVE_TO"){const s=this.currentCommand.targetX/n;Math.abs(s-this.charX)<this.charSpeed?(this.charX=s,this.charIsWalking=!1,this.processNextCommand()):(this.charX+=(s>this.charX?1:-1)*this.charSpeed,this.charIsWalking=!0)}else!i&&(!this.currentCommand||this.currentCommand.type!=="JUMP_TO")&&(this.charIsWalking=!1);if(this.invincibilityFrames>0&&this.invincibilityFrames--,this.invincibilityFrames===0&&!this.charHidden){const s=this.charX*n,a=this.charYNorm*e-64,r={x:s,y:a,w:64,h:64};for(const f of this.hazards){const c=f.x/100*n;let o=e*.65;this.worldId!=="stacks-queues"&&this.worldId!=="arrays-strings"&&(o=e*.72),f.y!==void 0&&(o=f.y/100*e);const l={x:c-20,y:o-40,w:40,h:40};if(r.x<l.x+l.w&&r.x+r.w>l.x&&r.y<l.y+l.h&&r.h+r.y>l.y){this.takeDamage(1);break}}}}resetCharacter(){this.charX=this.charHomeX,this.charYNorm=this.charHomeYNorm||.65,this.charVy=0,this.charTargetX=this.charHomeX,this.charIsWalking=!1,this.charFacingRight=!0,this.commandQueue=[],this.currentCommand=null,this.commandCallbacks=[],this.isProcessingQueue=!1,this.equippedTool=null,this.toolAnimation=null,this.toolAnimationProgress=0,this.charHidden=!1,this.isEnteredDoor=!1,this.lastProcessedLogs=[],this.lastProcessedOps=[]}start(){this.render()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keyupHandler&&window.removeEventListener("keyup",this.keyupHandler)}}function ka(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#56ccf2"),s.addColorStop(.5,"#78d5f5"),s.addColorStop(1,"#a1e4f9"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="rgba(255, 255, 255, 0.8)";for(let r=0;r<8;r++){const f=(i*.05*(r+1)+r*250)%(e+400)-200,c=n*.15+r*25;t.fillRect(Math.floor(f),Math.floor(c),80,20),t.fillRect(Math.floor(f+20),Math.floor(c-10),100,30),t.fillRect(Math.floor(f+50),Math.floor(c-20),40,20)}const a=t.createRadialGradient(e*.8,n*.2,0,e*.8,n*.2,200);a.addColorStop(0,"rgba(255, 240, 150, 0.6)"),a.addColorStop(1,"rgba(255, 240, 150, 0)"),t.fillStyle=a,t.fillRect(0,0,e,n),t.fillStyle="#6bbd8b";for(let r=0;r<e;r+=4){const f=Math.sin(r*.005)*30+Math.sin(r*.015)*15,c=n*.65+f,o=Math.floor(c/4)*4;t.fillRect(r,o,4,n-o)}t.fillStyle="#4c9b6e";for(let r=0;r<e;r+=6){const f=Math.cos(r*.007+2)*40+Math.sin(r*.02)*20,c=n*.75+f,o=Math.floor(c/6)*6;t.fillRect(r,o,6,n-o)}}function Wa(t,e,n,i){const s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#0d1326"),s.addColorStop(.4,"#1b1b42"),s.addColorStop(1,"#2c224f"),t.fillStyle=s,t.fillRect(0,0,e,n);const a=e*.85,r=n*.18,f=t.createRadialGradient(a,r,0,a,r,120);f.addColorStop(0,"rgba(200, 220, 255, 0.3)"),f.addColorStop(.4,"rgba(150, 180, 255, 0.1)"),f.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=f,t.beginPath(),t.arc(a,r,120,0,Math.PI*2),t.fill(),t.fillStyle="#f0f4ff",t.beginPath(),t.arc(a,r,35,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0, 0, 50, 0.08)",t.beginPath(),t.arc(a-12,r-8,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(a+10,r+6,10,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(a-4,r+14,5,0,Math.PI*2),t.fill();for(let l=0;l<120;l++){const u=Math.floor((Math.sin(l*123.45)*.5+.5)*e),d=Math.floor((Math.cos(l*321.12)*.5+.5)*n*.8),h=Math.sin(i*.01+l),p=h>.5?.8:h>0?.4:.1;t.globalAlpha=p;const g=l%15===0?2:1;l%7===0?t.fillStyle="#ffddaa":l%11===0?t.fillStyle="#aaddff":t.fillStyle="#ffffff",t.fillRect(u,d,g,g)}t.globalAlpha=1,t.fillStyle="#171636";for(let l=0;l<e;l+=4){const u=Math.sin(l*.005)*40+Math.sin(l*.015)*20,d=n*.6+u,h=Math.floor(d/4)*4;t.fillRect(l,h,4,n-h)}t.fillStyle="#100f24";for(let l=0;l<e;l+=6){const u=Math.cos(l*.007+2)*50+Math.sin(l*.02)*25,d=n*.75+u,h=Math.floor(d/6)*6;t.fillRect(l,h,6,n-h)}const c=.15+Math.sin(i*.005)*.05,o=.1+Math.cos(i*.007)*.05;t.fillStyle=`rgba(130, 150, 255, ${c})`;for(let l=0;l<e;l+=8){const u=Math.sin(l*.005+i*.005)*15,d=n*.85+u,h=Math.floor(d/4)*4;t.fillRect(l,h,8,n-h)}t.fillStyle=`rgba(200, 180, 255, ${o})`;for(let l=0;l<e;l+=8){const u=Math.cos(l*.004-i*.004)*20,d=n*.9+u,h=Math.floor(d/4)*4;t.fillRect(l,h,8,n-h)}for(let l=0;l<40;l++){const u=(Math.cos(l*13)*.5+.5)*n,d=(i*.2+l*100)%(e+50)-25,h=Math.sin(i*.01+l)*15,p=Math.floor(d/2)*2,g=Math.floor((u+h)/2)*2,m=g/n;let S=1-Math.abs(m-.7)*2;S<0&&(S=0),S*=Math.sin(i*.05+l)*.4+.6;let y="#88ffff";l%3===0&&(y="#ff88ff"),l%5===0&&(y="#ffff88"),t.globalAlpha=S,t.fillStyle=y,t.fillRect(p,g,2,2),t.globalAlpha=S*.3,t.fillRect(p-2,g-2,6,6)}t.globalAlpha=1}let Zn=null,Yi=1,Ml=null;function Qm(t,e,n="night"){Zn===null&&(Zn=n),n!==Zn&&Yi>=1&&(Ml=Zn,Zn=n,Yi=0);const i=t.getContext("2d"),s=t.width,a=t.height;Yi<1?(Ml==="day"?ka(i,s,a,e):Wa(i,s,a,e),i.globalAlpha=Yi,Zn==="day"?ka(i,s,a,e):Wa(i,s,a,e),i.globalAlpha=1,Yi+=.02):Zn==="day"?ka(i,s,a,e):Wa(i,s,a,e)}function dc(){const t=document.getElementById("app");t.innerHTML="";let e=Rn.findIndex(d=>d.id===Ye.player.selectedHeroId);e===-1&&(e=0);const n=document.createElement("div");n.className="hero-select-page";const i=document.createElement("style");i.innerHTML=`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');

    .hero-select-page {
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.85);
      display: flex; justify-content: center; align-items: center;
      color: white; font-family: 'Inter', sans-serif;
      box-sizing: border-box;
      position: absolute; top: 0; left: 0; z-index: 2000;
    }
    .hero-modal {
      width: 960px; max-width: 95vw; height: 600px;
      background-color: #3e220e;
      background-image: 
        repeating-linear-gradient(to bottom, transparent 0px, transparent 58px, #2a1506 58px, #2a1506 60px), 
        linear-gradient(90deg, #4d2b12, #3e220e, #4d2b12);
      border: 6px solid #1a0d04;
      border-radius: 8px;
      box-shadow: 0 15px 50px rgba(0,0,0,0.9), inset 0 0 40px rgba(0,0,0,0.8);
      display: flex; flex-direction: column;
      position: relative;
    }
    .hero-header {
      height: 70px;
      display: flex; justify-content: center; align-items: center;
      border-bottom: 6px solid #1a0d04;
      position: relative;
      background: #2a1506;
      border-radius: 6px 6px 0 0;
    }
    .hero-header h1 {
      margin: 0; font-family: 'Cinzel', serif; font-size: 38px;
      color: #ffc107; text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 4px 8px rgba(0,0,0,0.8);
      letter-spacing: 2px; text-transform: uppercase;
    }
    .close-btn {
      position: absolute; right: 10px; top: 10px;
      background: #d32f2f; color: white; border: 3px solid #8b0000;
      width: 44px; height: 44px; font-size: 26px; cursor: pointer;
      border-radius: 6px; font-weight: bold;
      box-shadow: 0 4px 0 #8b0000;
      transition: transform 0.1s, box-shadow 0.1s;
      display: flex; justify-content: center; align-items: center;
    }
    .close-btn:active { transform: translateY(4px); box-shadow: 0 0 0 #8b0000; }
    
    .roster-container {
      display: flex; justify-content: flex-start; gap: 8px;
      padding: 16px; background: rgba(0,0,0,0.4);
      border-bottom: 6px solid #1a0d04;
      overflow-x: auto;
    }
    .hero-portrait-wrap {
      width: 80px; height: 80px; flex-shrink: 0;
      border: 4px ridge #78909c; border-radius: 4px;
      background: #111; cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.6);
      transition: transform 0.2s, border-color 0.2s;
    }
    .hero-portrait-wrap:hover { transform: scale(1.05); }
    .hero-portrait-wrap.active {
      border-color: #ffeb3b; transform: scale(1.1);
      box-shadow: 0 0 20px rgba(255, 235, 59, 0.4);
      z-index: 10; border-style: solid; border-width: 4px;
    }
    .hero-portrait { width: 100%; height: 100%; display: block; object-fit: contain; }
    .hero-preview-canvas { width: 100%; height: auto; max-height: 400px; display: block; object-fit: contain; }
    
    .hero-details-container {
      display: flex; flex: 1; padding: 30px; gap: 30px;
    }
    .hero-preview {
      flex: 0 0 40%; display: flex; justify-content: center; align-items: flex-start; padding-top: 20px;
    }
    .hero-info {
      flex: 1; display: flex; flex-direction: column; justify-content: flex-start;
    }
    .hero-name { 
      font-family: 'Cinzel', serif; font-size: 34px; font-weight: bold; margin-bottom: 15px; 
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8); text-transform: uppercase; letter-spacing: 1px;
    }
    .hero-desc { font-size: 16px; color: #f0f0f0; line-height: 1.5; margin-bottom: 25px; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); }
    
    .stat-grid {
      display: grid; grid-template-columns: 100px 1fr; gap: 12px; align-items: center;
      font-size: 15px;
    }
    .stat-label { color: #bcaaa4; }
    .stat-val-text { color: #ffc107; font-weight: 500; }
    .stat-bar-container { background: #1a0d04; height: 12px; border-radius: 6px; overflow: hidden; border: 1px solid #000; width: 60%; }
    .stat-bar { height: 100%; border-radius: 6px; }
    
    .equip-btn {
      margin-top: auto; align-self: flex-start;
      padding: 12px 30px; font-family: 'Cinzel', serif; font-size: 18px; font-weight: bold;
      background: #4caf50; color: white; border: 3px solid #2e7d32; border-radius: 6px;
      cursor: pointer; text-transform: uppercase; transition: transform 0.1s, box-shadow 0.1s;
      box-shadow: 0 4px 0 #2e7d32; letter-spacing: 1px;
    }
    .equip-btn:active { transform: translateY(4px); box-shadow: 0 0 0 #2e7d32; }
    .equip-btn.equipped { background: #555; border-color: #333; box-shadow: 0 4px 0 #333; color: #aaa; cursor: default; }
    .equip-btn.equipped:active { transform: none; box-shadow: 0 4px 0 #333; }
  `,n.appendChild(i);const s=document.createElement("div");s.className="hero-modal";const a=document.createElement("div");a.className="hero-header",a.innerHTML=`
    <h1>Choose Your Hero</h1>
    <button class="close-btn" id="closeHeroBtn">×</button>
  `,s.appendChild(a);const r=document.createElement("div");r.className="roster-container",s.appendChild(r);const f=document.createElement("div");f.className="hero-details-container";const c=document.createElement("div");c.className="hero-preview";const o=document.createElement("canvas");o.width=300,o.height=300,o.className="hero-preview-canvas",c.appendChild(o);const l=document.createElement("div");l.className="hero-info",f.appendChild(c),f.appendChild(l),s.appendChild(f),n.appendChild(s),t.appendChild(n);function u(){const d=Rn[e],h=Ye.player.selectedHeroId===d.id;r.innerHTML="",Rn.forEach((p,g)=>{const m=document.createElement("div");m.className="hero-portrait-wrap"+(g===e?" active":""),m.onclick=()=>{e=g,u()};const S=document.createElement("canvas");S.width=120,S.height=120,S.className="hero-portrait",m.appendChild(S);try{const y=Js(S,p.avatarStyle,120);m._cleanup=y}catch(y){console.error("Failed to create hero viewer for",p.id,y)}r.appendChild(m)}),l.innerHTML=`
      <div class="hero-name">${d.name}</div>
      <div class="hero-desc">${d.description}</div>
      
      <div class="stat-grid">
        <div class="stat-label">Difficulty</div>
        <div class="stat-val-text">${d.stats.difficulty}</div>
        
        <div class="stat-label">Type</div>
        <div class="stat-val-text">${d.stats.type}</div>
        
        <div class="stat-label">Weapons</div>
        <div class="stat-val-text">${d.stats.weapons}</div>
        
        <div class="stat-label">Damage</div>
        <div class="stat-bar-container"><div class="stat-bar" style="width: ${d.stats.damage}%; background: #e53935;"></div></div>
        
        <div class="stat-label">Health</div>
        <div class="stat-bar-container"><div class="stat-bar" style="width: ${d.stats.health}%; background: #43a047;"></div></div>
        
        <div class="stat-label">Speed</div>
        <div class="stat-bar-container"><div class="stat-bar" style="width: ${d.stats.speed}%; background: #5e35b1;"></div></div>
      </div>
      
      <button class="equip-btn ${h?"equipped":""}" id="equipBtn">
        ${h?"Equipped":"Equip Hero"}
      </button>
    `,document.getElementById("equipBtn").onclick=()=>{h||(Ye.player.selectedHeroId=d.id,u())},o._cleanup&&o._cleanup();try{o._cleanup=Js(o,d.avatarStyle,300)}catch(p){console.error("Failed to create main hero viewer",p)}}u(),document.getElementById("closeHeroBtn").onclick=()=>{document.querySelectorAll(".hero-portrait-wrap").forEach(h=>{h._cleanup&&h._cleanup()}),o._cleanup&&o._cleanup(),window.location.hash="#/"}}let ii=null,Ur=[];function eS(t){ii&&cancelAnimationFrame(ii),Ur=[],t.innerHTML="";const e=Math.round(Qt[0].position.x/100*1200)+90,n=Math.round(Qt[0].position.y/100*600)+70,i=Math.round(Qt[1].position.x/100*1200)+90,s=Math.round(Qt[1].position.y/100*600)+70,a=Math.round(Qt[2].position.x/100*1200)+90,r=Math.round(Qt[2].position.y/100*600)+70,f=Math.round(Qt[3].position.x/100*1200)+90,c=Math.round(Qt[3].position.y/100*600)+70,o=`M ${e+40} ${n+15} C ${e+110} ${n-5}, ${i-110} ${s+40}, ${i-30} ${s+20}`,l=`${i-35},${s+15} ${i-25},${s+20} ${i-35},${s+25}`,u=`M ${i+45} ${s+20} C ${i+115} ${s+40}, ${a-110} ${r+40}, ${a-30} ${r+20}`,d=`${a-35},${r+15} ${a-25},${r+20} ${a-35},${r+25}`,h=`M ${a+40} ${r+10} C ${a+90} ${r-20}, ${f-110} ${c-20}, ${f-30} ${c}`,p=`${f-35},${c-5} ${f-25},${c} ${f-35},${c+5}`,g=Rn.find(M=>M.id===Ye.player.selectedHeroId)||Rn[0],m=document.createElement("div");m.className="world-map-page",m.innerHTML=`
    <!-- Shared Top Header -->
    <div class="game-header">
      <a href="#/" class="header-logo">
        <div class="header-logo-icon">🪺</div>
        <div class="header-logo-text">Code Nest</div>
      </a>
      <div class="header-nav" style="margin-left: 20px; display: flex; gap: 10px; align-items: center;">
        <label class="theme-switch" title="Toggle Light/Dark Theme">
          <input type="checkbox" id="mapThemeToggleCheckbox">
          <span class="slider round">
            <span class="sun-icon">☀️</span>
            <span class="moon-icon">🌙</span>
          </span>
        </label>
        <a href="#/heroes" class="header-nav-btn" style="text-decoration: none; padding: 6px 12px; background: rgba(0,0,0,0.3); border-radius: 4px; color: white; font-weight: bold; border: 1px solid rgba(255,255,255,0.1); transition: background 0.2s;">⚔️ Heroes</a>
      </div>
      <div class="header-search">
        <span class="header-search-icon">🔍</span>
        <input type="text" placeholder="Search DSA Topics...">
      </div>
      <div class="header-stats">
        <div class="header-stat">
          <span class="header-stat-icon">🪙</span>
          <div class="header-stat-info">
            <div class="header-stat-value gold-val">${Ye.player.gold.toLocaleString()}</div>
            <div class="header-stat-label">Gold</div>
          </div>
        </div>
        <div class="header-stat">
          <span class="header-stat-icon">💎</span>
          <div class="header-stat-info">
            <div class="header-stat-value mana-val">${Ye.player.mana}</div>
            <div class="header-stat-label">Mana</div>
          </div>
        </div>
        <div class="header-stat">
          <span class="header-stat-icon" style="color: #b388ff;">♦</span>
          <div class="header-stat-info">
            <div class="header-stat-value gems-val">${Ye.player.gems}</div>
            <div class="header-stat-label">Gems</div>
          </div>
        </div>
        <div class="header-profile" id="openHeroSelectBtn" title="Change Hero" style="cursor: pointer; transition: transform 0.2s;">
            <div class="header-profile-avatar"><canvas class="hero-avatar-canvas" width="32" height="32"></canvas></div>
          <div class="header-profile-name">${g.name.split(" ")[0]}</div>
        </div>
      </div>
    </div>

    <!-- Map Frame -->
    <div class="world-map-frame">
      <canvas id="worldMapBgCanvas" class="world-map-bg-canvas"></canvas>
      <div class="map-texture-overlay"></div>
      <div class="world-map-title">Code Nest: DSA World Map Explorer</div>
      <div class="world-map-container" id="mapContainer">
      <!-- SVG Paths -->
      <div class="map-paths">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
          <!-- Path: Arrays → Stacks -->
          <path class="map-path" d="${o}" />
          <polygon class="map-path-arrow" points="${l}" />

          <!-- Path: Stacks → LinkedLists -->
          <path class="map-path" d="${u}" />
          <polygon class="map-path-arrow" points="${d}" />

          <!-- Path: LinkedLists → Uncharted -->
          <path class="map-path" d="${h}" />
          <polygon class="map-path-arrow" points="${p}" />
        </svg>
      </div>

      <!-- Compass Rose -->
      <div class="compass-rose">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#8b7355" stroke-width="2" opacity="0.4"/>
          <circle cx="50" cy="50" r="35" stroke="#8b7355" stroke-width="1" opacity="0.3"/>
          <!-- N -->
          <polygon points="50,8 45,35 55,35" fill="#8b7355" opacity="0.6"/>
          <!-- S -->
          <polygon points="50,92 45,65 55,65" fill="#8b7355" opacity="0.3"/>
          <!-- E -->
          <polygon points="92,50 65,45 65,55" fill="#8b7355" opacity="0.3"/>
          <!-- W -->
          <polygon points="8,50 35,45 35,55" fill="#8b7355" opacity="0.3"/>
          <text x="50" y="22" text-anchor="middle" fill="#5c3d2e" font-size="10" font-weight="bold">N</text>
          <text x="50" y="88" text-anchor="middle" fill="#5c3d2e" font-size="10" font-weight="bold">S</text>
          <text x="85" y="54" text-anchor="middle" fill="#5c3d2e" font-size="10" font-weight="bold">E</text>
          <text x="15" y="54" text-anchor="middle" fill="#5c3d2e" font-size="10" font-weight="bold">W</text>
        </svg>
      </div>

      <!-- Map Legend -->
      <div class="map-legend">
        <div class="map-legend-item">
          <span>✅</span> Completed Level
        </div>
        <div class="map-legend-item">
          <span>📍</span> Current Location
        </div>
        <div class="map-legend-item">
          <span>🔒</span> Locked
        </div>
      </div>
      </div>
    </div>
    
    <!-- Footer Navigation -->
    <div class="game-footer">
      <a href="#/" class="footer-link footer-link--active">World Map</a>
      <a href="#/" class="footer-link">Community</a>
      <a href="#/" class="footer-link">Leaderboard</a>
      <a href="#/" class="footer-link">Settings</a>
    </div>
  `,t.appendChild(m);const S=m.querySelector("#openHeroSelectBtn");S&&S.addEventListener("click",()=>{ii&&cancelAnimationFrame(ii),dc()});const y=m.querySelector("#mapContainer");Qt.forEach((M,B)=>{tS(y,M)});let R=0;const H=m.querySelector("#worldMapBgCanvas"),C=m.querySelector(".world-map-frame");function E(){if(R++,H&&C){const M=C.getBoundingClientRect(),B=Math.floor(M.width/2),P=Math.floor(M.height/2);(H.width!==B||H.height!==P)&&(H.width=B,H.height=P);const G=(document.documentElement.getAttribute("data-theme")||"dark")==="light"?"day":"night";Qm(H,R,G)}Ur.forEach(M=>{Bm(M.canvas,M.world.theme,M.progress,R)}),ii=requestAnimationFrame(E)}E(),y.addEventListener("click",M=>{!M.target.closest(".island")&&M.target.closest(".island-popover")});const w=localStorage.getItem("codenest-theme")||"dark";document.documentElement.setAttribute("data-theme",w);const _=document.getElementById("mapThemeToggleCheckbox");_&&(_.checked=w==="light",_.addEventListener("change",M=>{const B=M.target.checked?"light":"dark";document.documentElement.setAttribute("data-theme",B),localStorage.setItem("codenest-theme",B)}))}function tS(t,e,n){const i=Ye.getWorldCompletion(e.id);let a=!Ye.getWorldProgress(e.id).unlocked;const r=document.createElement("div");r.className=`island ${a?"island--locked":""}`,r.dataset.worldId=e.id,r.style.left=`${e.position.x}%`,r.style.top=`${e.position.y}%`;const f=document.createElement("div");f.className="island-visual";const c=document.createElement("canvas");c.width=180,c.height=140,c.className="island-canvas",f.appendChild(c),Ur.push({canvas:c,world:e,progress:i});const o=document.createElement("div");o.className="island-label",a?o.innerHTML=`
      <div class="island-name">${e.name}</div>
    `:(o.innerHTML=`
      <div class="island-name">${e.name}</div>
      <div class="island-progress-bar">
        <div class="island-progress-fill" style="width: ${i}%; background: linear-gradient(90deg, ${e.colors.primary}, ${e.colors.secondary})"></div>
        <div class="island-progress-text">${i}% Complete</div>
      </div>
    `,r.addEventListener("click",l=>{l.stopPropagation(),kr(e.id)})),r.appendChild(f),r.appendChild(o),t.appendChild(r)}function nS(){ii&&cancelAnimationFrame(ii)}class Tl{constructor(e="stack"){this.name=e,this.items=[],this.operations=[]}push(e){return this.items.push(e),this.operations.push({type:"push",item:e,snapshot:[...this.items],timestamp:Date.now()}),e}pop(){if(this.items.length===0)throw new Error(`Stack "${this.name}" is empty! Cannot pop.`);const e=this.items.pop();return this.operations.push({type:"pop",item:e,snapshot:[...this.items],timestamp:Date.now()}),e}peek(){if(this.items.length!==0)return this.items[this.items.length-1]}isEmpty(){return this.items.length===0}size(){return this.items.length}getItems(){return[...this.items]}clear(){this.items=[],this.operations=[]}toString(){return`[${this.items.join(", ")}]`}}function iS(t){const n=t.split(`
`),i=[],s=[0];for(let a=0;a<n.length;a++){let r=n[a];const f=r.trimStart(),c=r.length-f.length;if(f===""||f.startsWith("#")){f.startsWith("#")?i.push(r.replace(/^(\s*)#/,"$1//")):i.push("");continue}for(;s.length>1&&c<=s[s.length-1]-1;)s.pop(),i.push(" ".repeat(s[s.length-1])+"}");let o=f;o=o.replace(/^print\s*\((.*)\)$/g,"console.log($1)"),o=o.replace(/\bprint\s*\(/g,"console.log("),o=o.replace(/f"([^"]*)"/g,(S,y)=>"`"+y.replace(/\{/g,"${")+"`"),o=o.replace(/f'([^']*)'/g,(S,y)=>"`"+y.replace(/\{/g,"${")+"`"),o=o.replace(/\blen\((\w+)\)/g,"$1.length");const l=o.match(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:$/);if(l){const[,S,y]=l,R=y.split(",").map(H=>H.trim());if(R.length===1)o=`for (let ${S} = 0; ${S} < ${R[0]}; ${S}++) {`;else if(R.length===2)o=`for (let ${S} = ${R[0]}; ${S} < ${R[1]}; ${S}++) {`;else if(R.length===3){const H=R[2];o=`for (let ${S} = ${R[0]}; ${S} < ${R[1]}; ${S} += ${H}) {`}s.push(c+4),i.push(" ".repeat(c)+o);continue}const u=o.match(/^for\s+(\w+)\s+in\s+(.+?)\s*:$/);if(u){const[,S,y]=u;o=`for (const ${S} of ${y}) {`,s.push(c+4),i.push(" ".repeat(c)+o);continue}const d=o.match(/^while\s+(.+?)\s*:$/);if(d){let S=d[1];S=Ga(S),o=`while (${S}) {`,s.push(c+4),i.push(" ".repeat(c)+o);continue}const h=o.match(/^if\s+(.+?)\s*:$/);if(h){let S=h[1];S=Ga(S),o=`if (${S}) {`,s.push(c+4),i.push(" ".repeat(c)+o);continue}const p=o.match(/^elif\s+(.+?)\s*:$/);if(p){let S=p[1];S=Ga(S),i.push(" ".repeat(c)+`} else if (${S}) {`);continue}if(o==="else:"){i.push(" ".repeat(c)+"} else {");continue}const g=o.match(/^def\s+(\w+)\s*\((.*?)\)\s*:$/);if(g){o=`function ${g[1]}(${g[2]}) {`,s.push(c+4),i.push(" ".repeat(c)+o);continue}const m=o.match(/^(\w+)\s*=\s*(.+)$/);m&&!o.includes("==")&&!o.startsWith("stack.")&&!o.startsWith("stack2.")&&!o.startsWith("console.")&&!o.includes(".append(")&&!o.includes(".next")&&(o=`let ${m[1]} = ${m[2]}`),o=o.replace(/\bTrue\b/g,"true"),o=o.replace(/\bFalse\b/g,"false"),o=o.replace(/\bNone\b/g,"null"),o=o.replace(/\.append\(/g,".push("),o=o.replace(/\bnot\s+/g,"!"),o=o.replace(/\band\b/g,"&&"),o=o.replace(/\bor\b/g,"||"),o=o.replace(/\bstr\(/g,"String("),o=o.replace(/\bint\(/g,"parseInt("),!o.endsWith("{")&&!o.endsWith("}")&&!o.startsWith("//")&&o.trim()&&(o=o+";"),i.push(" ".repeat(c)+o)}for(;s.length>1;)s.pop(),i.push("}");return i.join(`
`)}function Ga(t){return t=t.replace(/\bTrue\b/g,"true"),t=t.replace(/\bFalse\b/g,"false"),t=t.replace(/\bNone\b/g,"null"),t=t.replace(/\bnot\s+/g,"!"),t=t.replace(/\band\b/g,"&&"),t=t.replace(/\bor\b/g,"||"),t=t.replace(/\bis\s+null\b/g,"=== null"),t=t.replace(/\bis\s+!null\b/g,"!== null"),t}function sS(t){let e=t;e=e.replace(/import\s+[\w.*]+;\s*/g,"");let n=0;/(?:public\s+)?class\s+\w+\s*\{/.test(e)&&(e=e.replace(/(?:public\s+)?class\s+\w+\s*\{/,""),n++),/public\s+static\s+void\s+main\s*\(.*?\)\s*\{/.test(e)&&(e=e.replace(/public\s+static\s+void\s+main\s*\(.*?\)\s*\{/,""),n++),e=e.replace(/(?:public\s+|private\s+|protected\s+)?(?:static\s+)?(?:void|int|long|float|double|boolean|String|char)\s+(\w+)\s*\(([^)]*)\)\s*\{/g,(i,s,a)=>{const r=a.replace(/\b(?:int|long|float|double|boolean|char|String|byte|short)\s+/g,"").trim();return`function ${s}(${r}) {`}),e=e.replace(/\b(int|long|float|double|boolean|char|byte|short)\s+(\w+)\s*=/g,"let $2 ="),e=e.replace(/\b(int|long|float|double|boolean|char|byte|short)\s+(\w+)\s*;/g,"let $2;"),e=e.replace(/\bString\s+(\w+)\s*=/g,"let $1 ="),e=e.replace(/\bString\s+(\w+)\s*;/g,"let $1;"),e=e.replace(/\bvar\s+/g,"let "),e=e.replace(/\b(?:int|long|float|double|String|char)\[\]\s+(\w+)\s*=\s*(?:new\s+\w+\[\]\s*)?\{([^}]*)\}/g,"let $1 = [$2]"),e=e.replace(/\b(?:int|long|float|double|String|char)\[\]\s+(\w+)\s*=\s*new\s+\w+\[([^\]]+)\]/g,"let $1 = new Array($2).fill(0)"),e=e.replace(/System\.out\.println\s*\(/g,"console.log("),e=e.replace(/System\.out\.print\s*\(/g,"console.log("),e=e.replace(/\.length\(\)/g,".length"),e=e.replace(/(\w+)\.toCharArray\(\)/g,"[...$1]"),e=e.replace(/String\.valueOf\s*\(/g,"String("),e=e.replace(/Integer\.parseInt\s*\(/g,"parseInt("),e=e.replace(/Integer\.valueOf\s*\(/g,"parseInt("),e=e.replace(/([a-zA-Z0-9_.[\]()'"\s]+)\.equals\(([^)]+)\)/g,"$1 === $2"),e=e.replace(/Arrays\.sort\((\w+)\)/g,"$1.sort()"),e=e.replace(/Arrays\.equals\((\w+),\s*(\w+)\)/g,"$1.join() === $2.join()"),e=e.replace(/new\s+String\((\w+)\)/g,'$1.join("")'),e=e.replace(/(?:List|ArrayList)<\w+>\s+(\w+)\s*=\s*new\s+ArrayList<>\(\)/g,"let $1 = []"),e=e.replace(/new\s+ArrayList<>\(\)/g,"[]"),e=e.replace(/\.add\(/g,".push("),e=e.replace(/\.get\((\w+)\)/g,"[$1]"),e=e.replace(/\.size\(\)/g,".length"),e=e.replace(/\.remove\((\w+)\)/g,".splice($1, 1)"),e=e.replace(/Stack<\w+>\s+(\w+)\s*=\s*new\s+Stack<.*?>\(\)/g,"// Using built-in stack object"),e=e.replace(/for\s*\(\s*(int|long)\s+/g,"for (let "),e=e.replace(/for\s*\(\s*(?:int|long|float|double|String|char|var|final)\s+(\w+)\s*:\s*([^)]+)\s*\)/g,"for (const $1 of $2)"),e=e.replace(/\bboolean\s+(\w+)/g,"let $1");for(let i=0;i<n;i++){let s=e.lastIndexOf("}");s!==-1&&(e=e.substring(0,s)+e.substring(s+1))}return e}function aS(t){let e=t;e=e.replace(/#include\s*<[^>]+>\s*/g,""),e=e.replace(/#include\s*"[^"]+"\s*/g,""),e=e.replace(/#define\s+\w+\s+.*/g,""),e=e.replace(/int\s+main\s*\(.*?\)\s*\{/g,""),e=e.replace(/return\s+0\s*;/g,""),e=e.replace(/printf\s*\(\s*"([^"]*)"(?:\s*,\s*(.*?))?\s*\)\s*;/g,(i,s,a)=>{let r=s;const f=a?a.split(",").map(o=>o.trim()):[];let c=0;return r=r.replace(/%d|%i|%ld/g,()=>c<f.length?"${"+f[c++]+"}":""),r=r.replace(/%f|%lf/g,()=>c<f.length?"${"+f[c++]+"}":""),r=r.replace(/%s/g,()=>c<f.length?"${"+f[c++]+"}":""),r=r.replace(/%c/g,()=>c<f.length?"${"+f[c++]+"}":""),r=r.replace(/\\n/g,""),`console.log(\`${r}\`);`}),e=e.replace(/\b(int|long|float|double|char)\s+(\w+)\s*=/g,"let $2 ="),e=e.replace(/\b(int|long|float|double|char)\s+(\w+)\s*;/g,"let $2;"),e=e.replace(/\b(?:int|long|float|double|char)\s+(\w+)\[\d*\]\s*=\s*\{([^}]*)\}/g,"let $1 = [$2]"),e=e.replace(/\b(?:int|long|float|double|char)\s+(\w+)\[(\w+)\]\s*;/g,"let $1 = new Array($2).fill(0)"),e=e.replace(/\bchar\s*\*\s*(\w+)\s*=/g,"let $1 ="),e=e.replace(/sizeof\((\w+)\)\s*\/\s*sizeof\(\w+\[0\]\)/g,"$1.length"),e=e.replace(/strlen\((\w+)\)/g,"$1.length"),e=e.replace(/for\s*\(\s*(int|long)\s+/g,"for (let "),e=e.replace(/\bNULL\b/g,"null"),e=e.replace(/struct\s+\w+\s*\{[^}]*\}\s*;?/g,"");let n=e.lastIndexOf("}");return n!==-1&&(e=e.substring(0,n)+e.substring(n+1)),e}function rS(t,e={}){const n=e.language||"javascript",i=new Tl("stack"),s=new Tl("stack2"),a=[],r=[];let f=performance.now(),c=t;try{n==="python"?c=iS(t):n==="java"?c=sS(t):n==="c"&&(c=aS(t))}catch(l){return{success:!1,stack:i,stack2:s,operations:[],logs:a,errors:[`Transpilation Error (${n}): ${l.message}`],executionTime:0,error:`Transpilation Error: ${l.message}`}}const o={log:(...l)=>{const u=l.map(d=>{if(typeof d=="object")try{return JSON.stringify(d)}catch{return String(d)}return String(d)}).join(" ");a.push(u)},error:(...l)=>{const u=l.map(d=>String(d)).join(" ");r.push(u),a.push(`ERROR: ${u}`)},warn:(...l)=>{const u=l.map(d=>String(d)).join(" ");a.push(`WARN: ${u}`)},info:(...l)=>{const u=l.map(d=>String(d)).join(" ");a.push(`INFO: ${u}`)}};try{new Function("stack","stack2","console","setTimeout","setInterval","fetch","XMLHttpRequest",`
      "use strict";
      const push = (item) => stack.push(item);
      const pop = () => stack.pop();
      const peek = () => stack.peek();
      const isEmpty = () => stack.isEmpty();
      ${c}
      `)(i,s,o,void 0,void 0,void 0,void 0);const u=performance.now(),d=Math.round((u-f)*100)/100;return{success:!0,stack:i,stack2:s,operations:[...i.operations,...s.operations].sort((h,p)=>h.timestamp-p.timestamp),logs:a,errors:r,executionTime:d}}catch(l){const u=performance.now(),d=Math.round((u-f)*100)/100;return{success:!1,stack:i,stack2:s,operations:[...i.operations,...s.operations],logs:a,errors:[...r,l.message],executionTime:d,error:l.message}}}function oS(t,e){try{return t.validate(e.stack,e.operations,{logs:e.logs||[],stack2:e.stack2,success:e.success,error:e.error})}catch(n){return e.success?{passed:!1,message:`Validation Error: ${n.message}`,testsRun:0,testsPassed:0}:{passed:!1,message:`Runtime Error: ${e.error}`,testsRun:0,testsPassed:0}}}function lS(t,e,n,i,s){const r={easy:50,medium:75,hard:100}[t.difficulty]||50,f=i===0?Math.round(r*.5):0,c=e.executionTime<50?Math.round(r*.5):0;let o=r+f+c,l=0;e.operations&&e.operations.length>0&&(l=20);const u=e.operations&&e.operations.length>3?10:0,d=n===0?10:0;let h=l+u+d,p=1;n===0&&i<=1?p=3:n<=1&&i<=3&&(p=2);const g=p===3?1:0,m=p===3&&i===0?1:0;let S=g+m;const y=[];return y.push({label:"Level completed",amount:r,type:"gold"}),f>0&&y.push({label:"No errors",amount:f,type:"gold"}),c>0&&y.push({label:"Fast completion",amount:c,type:"gold"}),l>0&&y.push({label:"Correct data structure usage",amount:l,type:"mana"}),u>0&&y.push({label:"Efficient logic/loops",amount:u,type:"mana"}),d>0&&y.push({label:"No hints used",amount:d,type:"mana"}),g>0&&y.push({label:"3-star performance",amount:g,type:"gem"}),m>0&&y.push({label:"Perfect run",amount:m,type:"gem"}),s&&(o=Math.round(o*.25),h=0,S=0,y.length=0,y.push({label:"Replay bonus",amount:o,type:"gold"})),{gold:o,mana:h,gems:S,stars:p,breakdown:y}}let Lt=null;function cS(){if(!Lt){const t=window.AudioContext||window.webkitAudioContext;t&&(Lt=new t)}Lt&&Lt.state==="suspended"&&Lt.resume()}function fS(t=600){if(!Lt)return;Lt.state==="suspended"&&Lt.resume();const e=Lt.createOscillator(),n=Lt.createGain();e.type="triangle",e.frequency.setValueAtTime(t,Lt.currentTime),e.frequency.exponentialRampToValueAtTime(t*.8,Lt.currentTime+.05),n.gain.setValueAtTime(.05,Lt.currentTime),n.gain.exponentialRampToValueAtTime(.001,Lt.currentTime+.05),e.connect(n),n.connect(Lt.destination),e.start(),e.stop(Lt.currentTime+.05)}let Gn=localStorage.getItem("guideMuted")==="true",es="",uc=1;function dS(){return Gn=!Gn,localStorage.setItem("guideMuted",Gn),Gn?hc():es&&pc(es,uc),Gn}function hc(){window.speechSynthesis&&window.speechSynthesis.cancel()}function pc(t,e=1){if(Gn||!window.speechSynthesis)return;hc();const n=new SpeechSynthesisUtterance(t);n.pitch=e,n.rate=1.05,window.speechSynthesis.speak(n)}function Xs(t,e,n,i){t&&(es=t,uc=e,uS(i,t,n),pc(t,e))}function uS(t,e,n){t.innerHTML="";let i="",s=0;t._typewriterTimeout&&clearTimeout(t._typewriterTimeout);function a(){if(s<e.length){const r=e.charAt(s);r==="\\"&&e.charAt(s+1)==="n"?(i+="<br>",s+=2):r===`
`?(i+="<br>",s++):(i+=r,/[a-zA-Z0-9]/.test(r)&&(Gn||!window.speechSynthesis)&&(cS(),fS(n)),s++),t.innerHTML=i;const f=/[.,!?]/.test(r)?150:35;t._typewriterTimeout=setTimeout(a,f)}}a()}function Nr(t,e){if(e==="python"&&t.starterCodePython)return t.starterCodePython;if(e==="java"&&t.starterCodeJava)return t.starterCodeJava;if(e==="c"&&t.starterCodeC)return t.starterCodeC;if(e==="javascript")return t.starterCode;const n=t.starterCode;return e==="python"?hS(n):e==="java"?pS(n):e==="c"?mS(n):n}function hS(t){let e=t;return e=e.replace(/;$/gm,""),e=e.replace(/\b(const|let|var)\s+/g,""),e=e.replace(/console\.log\(/g,"print("),e=e.replace(/\/\/(.*)/g,"#$1"),e=e.replace(/\btrue\b/g,"True"),e=e.replace(/\bfalse\b/g,"False"),e=e.replace(/\bnull\b/g,"None"),e=e.replace(/\.push\(/g,".append("),e=e.replace(/(\w+)\.length/g,"len($1)"),e=e.replace(/for\s*\(\s*\w+\s+(\w+)\s*=\s*0\s*;\s*\1\s*<\s*(\w+(?:\.\w+)*)\s*;\s*\1\+\+\s*\)\s*\{/g,"for $1 in range($2):"),e=e.replace(/\s*\{$/gm,":"),e=e.replace(/^\s*\}\s*$/gm,""),e=e.replace(/stack\.append\(/g,"stack.push("),e}function pS(t){let e=t;return e=e.replace(/(?:const|let|var)\s+(\w+)\s*=\s*(\[.*?\])/g,(i,s,a)=>{const r=a.slice(1,-1);return r.match(/^["\u2018]/)?`String[] ${s} = {${r}}`:`int[] ${s} = {${r}}`}),e=e.replace(/(?:const|let|var)\s+(\w+)\s*=\s*"([^"]*)"/g,'String $1 = "$2"'),e=e.replace(/(?:const|let|var)\s+(\w+)\s*=\s*(\d+)/g,"int $1 = $2"),e=e.replace(/(?:const|let|var)\s+(\w+)\s*=\s*""/g,'String $1 = ""'),e=e.replace(/(?:const|let|var)\s+(\w+)/g,"var $1"),e=e.replace(/console\.log\(([^)]+)\)/g,(i,s)=>`System.out.println(${s.split(/,\s*/).join(' + " " + ')})`),e=e.replace(/for\s*\(\s*let\s+/g,"for (int "),e=e.replace(/new\s+Array\((.*?)\)\.fill\((.*?)\)/g,"new int[$1]"),`import java.util.*;

class Main {
    public static void main(String[] args) {
${e.split(`
`).map(i=>"        "+i).join(`
`)}
    }
}`}function mS(t){let e=`#include <stdio.h>

int main() {
`,n=t;n=n.replace(/(?:const|let|var)\s+(\w+)\s*=\s*(\d+)/g,"int $1 = $2"),n=n.replace(/(?:const|let|var)\s+(\w+)\s*=\s*"([^"]*)"/g,'char *$1 = "$2"'),n=n.replace(/(?:const|let|var)\s+(\w+)\s*=\s*\[([^\]]*)\]/g,(s,a,r)=>r.match(/"/)?`char *${a}[] = {${r}}`:`int ${a}[] = {${r}}`),n=n.replace(/(?:const|let|var)\s+(\w+)\s*=\s*""/g,'char *$1 = ""'),n=n.replace(/(?:const|let|var)\s+(\w+)/g,"int $1"),n=n.replace(/console\.log\(([^)]*)\)\s*;/g,(s,a)=>`printf("${a.replace(/"/g,"")}\\n");`);const i=n.split(`
`).map(s=>"    "+s).join(`
`);return e+=i+`
    return 0;
}`,e}let cn=null,Ee=null,Ji=0,ts="java",De=null,Or=null,mc=null,Ui=!1,wi=!1,ns=!1,kt=0,js=0,Xn=!1,to=null;function Sc(t,e,n){const i=Dc(e,parseInt(n));if(!i){t.innerHTML='<div style="padding: 40px; text-align: center; color: white;">Problem not found! <a href="#/">Go Back</a></div>';return}Ee=i,Ji=Ye.player.hintsUsed||0,Or=e,mc=n,Ui=!1,wi=!1,ns=!1,kt=0,js=0,Xn=!1,to=null,Ye.resetHp(),De&&De.stop(),t.innerHTML="";const s=document.createElement("div");s.className="problem-page fantasy-theme";const a=document.createElement("div");a.className="game-header",a.innerHTML=`
    <a href="#/" class="header-logo">
      <div class="header-logo-icon">🪺</div>
      <div class="header-logo-text">Code Nest</div>
    </a>
    <div class="header-nav" style="margin-left: 20px; display: flex; gap: 10px; align-items: center;">
      <a href="#/" class="btn btn--secondary" style="text-decoration: none; color: inherit; display: flex; align-items: center;" title="Back to World Map">
        <span style="font-size: 16px; margin-right: 4px;">🌍</span> World Map
      </a>
      <button class="btn btn--secondary" id="btnBackToLevels" title="View Levels for this World">
        <span style="font-size: 16px; margin-right: 4px;">🗺️</span> Levels
      </button>
      <div class="theme-switch-wrapper" id="btnThemeToggle" style="margin-left: 10px; display: flex; align-items: center; cursor: pointer; padding: 4px 8px; border-radius: 8px; background: var(--bg-panel-light); border: 1px solid var(--border-subtle);" title="Toggle Theme">
        <span style="font-size: 18px;" id="themeToggleIcon">${document.documentElement.dataset.theme==="light"?"☀️":"🌙"}</span>
      </div>
    </div>
    <div class="header-search">
      <span class="header-search-icon">🔍</span>
      <input type="text" placeholder="Search DSA Topics...">
    </div>
    <div class="header-stats">
      <div class="header-stat tooltip-container" title="Gold = Earned by completing levels and bonus objectives.">
        <span class="header-stat-icon">🪙</span>
        <div class="header-stat-info">
          <div class="header-stat-value gold-val">${Ye.player.gold.toLocaleString()}</div>
          <div class="header-stat-label">Gold</div>
        </div>
      </div>
      <div class="header-stat tooltip-container" title="Mana = Earned by writing efficient/correct logic.">
        <span class="header-stat-icon">💎</span>
        <div class="header-stat-info">
          <div class="header-stat-value mana-val">${Ye.player.mana.toLocaleString()}</div>
          <div class="header-stat-label">Mana</div>
        </div>
      </div>
      <div class="header-stat tooltip-container" title="Gems = Earned by perfect or 3-star completions.">
        <span class="header-stat-icon" style="color: #b388ff;">♦</span>
        <div class="header-stat-info">
          <div class="header-stat-value gems-val">${Ye.player.gems.toLocaleString()}</div>
          <div class="header-stat-label">Gems</div>
        </div>
      </div>
      <div class="header-profile">
          <div class="header-profile-avatar"><canvas class="hero-avatar-canvas" width="32" height="32"></canvas></div>
        <div class="header-profile-name">Profile</div>
      </div>
    </div>
  `;const r=document.createElement("div");r.className="fantasy-scene-layer",r.innerHTML=`
    <div class="game-scene" id="gameSceneCanvasContainer">
      <canvas id="gameSceneCanvas"></canvas>
      <div id="hero3DContainer" style="position: absolute; pointer-events: none; width: 120px; height: 120px; transform: translate(-50%, -100%); z-index: 10;"></div>
    </div>
    <div class="scene-objective">COLLECT ALL RELICS</div>
    
    <div class="guide-panel">
      <div class="guide-avatar" id="guideAvatarContainer"></div>
      <div class="guide-speech">
        <div class="guide-label">GUIDE:</div>
        <div class="guide-text" id="guideTextContainer"></div>
        <div class="guide-controls">
          <button class="guide-btn" id="btnReplayVoice">Replay</button>
          <button class="guide-btn" id="btnToggleMute">${Gn?"Unmute":"Mute"}</button>
        </div>
      </div>
    </div>
    
    <div class="level-progress-wrapper">
      <div class="potion-icon"></div>
      <div class="level-progress-bar">
        <div class="progress-label">Level Progress: <span id="sceneProgressText">0%</span></div>
        <div class="progress-track">
          <div class="progress-fill" style="width: 0%;" id="sceneProgress"></div>
        </div>
      </div>
      <div class="chest-icon"></div>
    </div>
  `;const f=document.createElement("div");f.className=`fantasy-overlay-layout ${i.worldId==="stacks-queues"?"theme-golden-castle":""}`;const c=document.createElement("div");c.className="fantasy-left-panel rune-border";const o=i.story.controls.map(I=>`<li>${I}</li>`).join("");c.innerHTML=`
    <div class="view-challenge-tab">
      <div class="scroll-icon">📜</div>
      <span>VIEW<br>CHALLENGE</span>
    </div>
    <div class="close-parchment-btn" id="btnCloseProblem"></div>
    <div class="parchment-content">
      <h2 class="problem-title">Problem: ${i.title}</h2>
      
      <div class="problem-section">
        <div class="problem-section-title">Scenario:</div>
        <div class="problem-section-text">${i.story.scenario}</div>
      </div>
      
      <div class="problem-section">
        <div class="problem-section-title">Objective:</div>
        <div class="problem-section-text">${i.story.objective}</div>
      </div>
      
      <div class="problem-section">
        <div class="problem-section-title">Controls:</div>
        <ul class="problem-controls-list">
          ${o}
        </ul>
      </div>
    </div>
  `;const l=document.createElement("div");l.className="fantasy-right-panel";const u=Qt.find(I=>I.id===e);u&&u.name,l.innerHTML=`
    <div class="editor-header">
      <button class="close-ide-btn" id="btnCloseIde" title="Close IDE"></button>
      <div class="editor-title">
        CODENEST IDE
      </div>
    </div>
      
      <div class="lang-tabs">
        <button class="lang-tab lang-tab--active" data-lang="java"><span class="lang-tab-icon">☕</span> Java</button>
        <button class="lang-tab" data-lang="python"><span class="lang-tab-icon">🐍</span> Python</button>
        <button class="lang-tab" data-lang="c"><span class="lang-tab-icon">⚙️</span> C</button>
      </div>
      
      <div class="code-editor-wrapper">
        <div id="monaco-container" style="width:100%; height:100%;"></div>
      </div>
      
      <div class="editor-actions">
        <button class="btn btn--run" id="btnRun">
          <span class="btn-icon">🧪</span> RUN
        </button>
        <button class="btn btn--reset" id="btnReset">
          <span class="btn-icon">↻</span> RESET
        </button>
        <button class="btn btn--submit" id="btnSubmit" disabled>
          <span class="btn-icon">📜</span> SUBMIT
        </button>
      </div>
      
      <div class="console-panel">
        <div class="console-header">OUTPUT / CONSOLE</div>
        <div id="consoleOutput">
          <div class="console-line console-prompt">> Welcome to the ${u?u.name:"Dungeon"}!</div>
          <div class="console-line console-line--info">> You can use: ${i.story.controls.join(", ")}</div>
        </div>
      </div>
      
      <div class="stack-viz-panel" style="${i.worldId==="stacks-queues"?"display: none;":""}">
        <div class="stack-viz-header">
          <span>STACK VISUALIZATION</span>
          <span class="stack-top-label">TOP</span>
        </div>
        <div class="stack-viz-container">
          <div class="stack-viz-grid" id="stackViz">
            <div class="stack-empty-text">-- Empty --</div>
          </div>
        </div>
      </div>
      
      <div class="hint-panel">
        <div class="hint-header">
          <div class="hint-title">💡 HINT (1/${i.hints.length}) <span class="hint-cost">(Cost: ${i.hints[0].cost} Mana)</span></div>
        </div>
        <div class="hint-text" id="hintText">${i.hints[0].text}</div>
        <div class="hint-nav">
          <button class="hint-nav-btn" id="prevHint" disabled>◀</button>
          <button class="hint-nav-btn" id="nextHint">▶</button>
        </div>
      </div>
  `;const d=document.createElement("div");d.className="fantasy-status-bar",d.innerHTML=`
    <div class="status-item">
      <span class="status-item-icon">📖</span>
      <span class="status-item-label">CONCEPT LEARNED:</span>
      <span class="status-item-value">${i.concepts.join(", ")}</span>
    </div>
    <div class="status-item" style="margin-left: auto;">
      <span class="status-item-icon">🧰</span>
      <span class="status-item-label">RELICS COLLECTED:</span>
      <span class="status-item-value" id="relicsCount">0 / ${i.relics?i.relics.length:0}</span>
    </div>
    <div class="status-item" style="margin-left: 30px;" title="Health Points">
      <span class="status-item-label" style="margin-right: 8px;">HP:</span>
      <span class="status-item-value" id="hpDisplay" style="display: flex; gap: 4px; font-size: 20px;"></span>
    </div>
    <div class="status-item" style="margin-left: 30px; cursor: pointer;">
      <span class="status-item-icon">⚙️</span>
    </div>
  `;const h=document.createElement("div");h.className="open-ide-btn",h.id="btnOpenIde",h.innerHTML='<div class="code-icon">💻</div>OPEN<br>IDE',f.appendChild(c),f.appendChild(l),f.appendChild(h),s.appendChild(a),s.appendChild(r),s.appendChild(f),s.appendChild(d),t.appendChild(s);const p=document.getElementById("gameSceneCanvas"),g=()=>{const I=p.parentElement;p.width=I.clientWidth,p.height=I.clientHeight};window.addEventListener("resize",g),g(),De=new Zm(p,e,i.sceneType),De.setRelics(i.relics),De.setHazards(i.hazards||[]);const m=r.querySelector("#hero3DContainer"),S=Rn.find(I=>I.id===Ye.player.selectedHeroId)||Rn[0],y=S.avatarStyle||"#f5c29d";m&&Js(m,y,120,{mode:"gameplay"});const R=r.querySelector("#guideAvatarContainer");R&&Js(R,y,60,{mode:"static_portrait"});const H=r.querySelector("#guideTextContainer");let C=1,E=600;S.stats.type==="Mage"&&(C=1.5,E=800),S.stats.type==="Warrior"&&(C=.6,E=300),S.stats.type==="Ranger"&&(C=1.2,E=500);const w=r.querySelector("#btnReplayVoice"),_=r.querySelector("#btnToggleMute");if(w&&w.addEventListener("click",()=>{es&&Xs(es,C,E,H)}),_&&_.addEventListener("click",()=>{const I=dS();_.textContent=I?"Unmute":"Mute"}),H){const I=i.guide?i.guide.intro:i.guideText;Xs(I,C,E,H)}window._showGuideMsg=I=>{if(!i.guide)return;const G=i.guide[I];G&&H&&Xs(G,C,E,H)},De.onCharacterUpdate=(I,G,q,D,X,O,ne,ie)=>{if(m){const ue=p.clientWidth,be=p.clientHeight;m.style.left=`${I*ue}px`,m.style.top=`${G*be}px`,ie?m.style.display="none":m.style.display="block",m._viewer&&m._viewer.updateState(q,D,X,O,ne)}},De.start(),ts="java";const M=Nr(i,"java");gS(M),vS(e),_S(i),document.addEventListener("themeChanged",I=>{window.monaco&&cn&&window.monaco.editor.setTheme(I.detail==="light"?"codeNestThemeLight":"codeNestTheme")});const B=I=>{const G=I.detail||1;Ye.takeDamage(G),Hl();const q=document.querySelector(".fantasy-scene-layer");q&&(q.classList.add("damage-flash"),setTimeout(()=>q.classList.remove("damage-flash"),300))},P=()=>{Xn||SS("You ran out of Health! Be careful around hazards.")};window.removeEventListener("playerDamage",window._damageListener),window.removeEventListener("playerDied",window._deathListener),window._damageListener=B,window._deathListener=P,window.addEventListener("playerDamage",B),window.addEventListener("playerDied",P),Hl()}function Hl(){const t=document.getElementById("hpDisplay");if(!t)return;const e=Ye.player.currentHp,n=Ye.player.maxHp;let i="";for(let s=0;s<n;s++)i+=s<e?'<span style="color: #e74c3c;">❤️</span>':'<span style="color: #555; filter: grayscale(100%);">🖤</span>';t.innerHTML=i}function SS(t){if(Xn)return;Xn=!0,De&&De.stop();const e=document.createElement("div");e.className="success-overlay",e.innerHTML=`
    <div class="wood-modal" style="border-top-color: #c0392b;">
      <div class="wood-chain wood-chain-left"></div>
      <div class="wood-chain wood-chain-right"></div>
      
      <div class="wood-board">
        <div class="wood-victory-banner" style="background: linear-gradient(180deg, #c0392b, #8b0000);">
          <h1 class="wood-victory-text">LEVEL FAILED</h1>
        </div>
        
        <div style="padding: 30px; text-align: center; color: #f5c29d; font-size: 20px;">
          ${t}
        </div>
        
        <div class="wood-shelf">
          <div class="wood-shelf-ledge"></div>
        </div>
        
        <div class="wood-modal-footer">
          <button class="btn btn--secondary" id="btnFailBack">Back to Map</button>
          <button class="btn btn--secondary" id="btnFailHint">View Hint</button>
          <button class="btn btn--primary" id="btnFailRetry">Try Again</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e),document.getElementById("btnFailRetry").addEventListener("click",()=>{e.remove(),document.getElementById("btnReset")&&document.getElementById("btnReset").click(),Sc(document.querySelector(".app-content"),Or,mc)}),document.getElementById("btnFailHint").addEventListener("click",()=>{e.remove(),Xn=!1;const n=document.querySelector(".fantasy-right-panel");n&&n.classList.remove("collapsed");const i=document.querySelector(".hint-header");i&&i.scrollIntoView({behavior:"smooth"})}),document.getElementById("btnFailBack").addEventListener("click",()=>{e.remove(),kr(Or)})}function gS(t){if(window.monaco)Rl(t);else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js",e.onload=()=>{window.require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs"}}),window.require(["vs/editor/editor.main"],function(){Rl(t)})},document.head.appendChild(e)}}function Rl(t){const e=document.getElementById("monaco-container");if(!e)return;window.monaco.editor.defineTheme("codeNestTheme",{base:"vs-dark",inherit:!0,rules:[{background:"1e2133"},{token:"comment",foreground:"6272a4",fontStyle:"italic"},{token:"keyword",foreground:"ff79c6"},{token:"string",foreground:"f1fa8c"},{token:"number",foreground:"bd93f9"}],colors:{"editor.background":"#1e2133","editor.lineHighlightBackground":"#2a314d","editorLineNumber.foreground":"#6272a4","editorIndentGuide.background":"#2a314d"}}),window.monaco.editor.defineTheme("codeNestThemeLight",{base:"vs",inherit:!0,rules:[{background:"f5e6d3"},{token:"",foreground:"5c4033"},{token:"comment",foreground:"b89f81",fontStyle:"italic"},{token:"keyword",foreground:"8b5a2b",fontStyle:"bold"},{token:"string",foreground:"a0522d"},{token:"number",foreground:"cd853f"},{token:"type",foreground:"6b4423"},{token:"identifier",foreground:"5c4033"},{token:"operator",foreground:"8b5a2b"}],colors:{"editor.background":"#f5e6d3","editor.foreground":"#5c4033","editor.lineHighlightBackground":"#e8d4b9","editorLineNumber.foreground":"#a68a6d","editorIndentGuide.background":"#e8d4b9","scrollbarSlider.background":"#d2b48c","scrollbarSlider.hoverBackground":"#b89f81","scrollbarSlider.activeBackground":"#8b5a2b","editorOverviewRuler.border":"#00000000","editor.inactiveSelectionBackground":"#e8d4b9","editor.selectionBackground":"#d2b48c"}});const n=document.documentElement.dataset.theme||"dark";cn=window.monaco.editor.create(e,{value:t,language:"java",theme:n==="light"?"codeNestThemeLight":"codeNestTheme",minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', monospace",lineHeight:24,padding:{top:16,bottom:16},scrollBeyondLastLine:!1,automaticLayout:!0,roundedSelection:!1,automaticLayout:!0})}function Fr(){const t=document.getElementById("btnSubmit");t&&(t.disabled=!0),Ui=!1,wi=!1,ns=!1,kt=0}function Us(){console.log("Checking level completion..."),console.log("isCodeCorrect:",Ui,"levelProgress:",kt,"currentHp:",Ye.player.currentHp),Ui&&kt>=100?(console.log("Conditions met! Triggering handleSuccess..."),gc()):console.log("Conditions NOT met for victory.")}function vS(t,e){const n=document.getElementById("btnRun"),i=document.getElementById("btnSubmit"),s=document.getElementById("btnReset"),a=document.getElementById("btnCloseProblem"),r=document.getElementById("btnBackToLevels");n&&n.addEventListener("click",()=>HS()),i&&i.addEventListener("click",()=>RS()),r&&r.addEventListener("click",()=>{kr(t)}),s&&s.addEventListener("click",()=>{if(cn&&Ee){const p=Nr(Ee,ts);cn.setValue(p),io(),Fr()}}),a&&a.addEventListener("click",()=>{const p=document.querySelector(".fantasy-left-panel");p&&p.classList.add("collapsed")});const f=document.querySelector(".view-challenge-tab");f&&f.addEventListener("click",()=>{const p=document.querySelector(".fantasy-left-panel");p&&p.classList.remove("collapsed")});const c=document.getElementById("btnCloseIde"),o=document.getElementById("btnOpenIde"),l=document.querySelector(".fantasy-right-panel");c&&l&&o&&c.addEventListener("click",()=>{l.classList.add("collapsed"),o.classList.add("visible")}),o&&l&&o.addEventListener("click",()=>{l.classList.remove("collapsed"),o.classList.remove("visible")});const u=document.querySelectorAll(".lang-tab");u.forEach(p=>{p.addEventListener("click",g=>{const m=g.currentTarget.getAttribute("data-lang");if(u.forEach(y=>y.classList.remove("lang-tab--active")),g.currentTarget.classList.add("lang-tab--active"),ts=m,cn){const y=m==="c"?"c":m==="java"?"java":m==="python"?"python":"javascript";if(window.monaco.editor.setModelLanguage(cn.getModel(),y),Ee){const R=Nr(Ee,m);cn.setValue(R)}}Fr(),En(`Switched to ${{java:"Java",python:"Python",c:"C"}[m]}`,"info")})});const d=document.getElementById("btnThemeToggle"),h=document.getElementById("themeToggleIcon");d&&h&&d.addEventListener("click",()=>{const g=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=g,localStorage.setItem("theme",g),h.textContent=g==="light"?"☀️":"🌙",document.dispatchEvent(new CustomEvent("themeChanged",{detail:g}))}),window._showGuideMsg=p=>{if(Ee&&Ee.guide&&Ee.guide[p]){const g=Ee.guide[p],m=document.getElementById("guideText");if(m){let S=1;const y=Rn[Ye.player.heroId||"novice"];y&&(S=y.voicePitch||1),Xs(g,S,S,m)}}},setTimeout(()=>{window._showGuideMsg&&window._showGuideMsg("intro")},800)}function _S(t){let e=0;const n=t.hints||[],i=document.querySelector(".hint-title"),s=document.querySelector(".hint-cost"),a=document.getElementById("hintText"),r=document.getElementById("prevHint"),f=document.getElementById("nextHint");function c(){if(n.length===0)return;const o=n[e];i.innerHTML=`💡 HINT (${e+1}/${n.length})`,e<=Ji?(s.innerHTML="Unlocked",s.style.color="var(--emerald)",a.innerHTML=o.text,a.style.filter="none"):(s.innerHTML=`Cost: ${o.cost} Mana`,s.style.color="var(--sapphire)",a.innerHTML="Click to unlock this hint.",a.style.filter="blur(2px)",a.style.cursor="pointer",a.onclick=()=>{if(Ye.spendMana(o.cost)){Ji=e,Ye.player.hintsUsed=Ji,c();const l=document.querySelector(".mana-val");l&&(l.textContent=Ye.player.mana),En(`Hint unlocked for ${o.cost} Mana!`,"success"),window._showGuideMsg&&window._showGuideMsg("codeHint")}else En("Not enough Mana!","error")}),n.length<=1?(r.style.display="none",f.style.display="none"):(r.style.display="block",f.style.display="block",r.disabled=e===0,f.disabled=e===n.length-1)}r.addEventListener("click",()=>{e>0&&(e--,a.onclick=null,c())}),f.addEventListener("click",()=>{e<n.length-1&&(e++,a.onclick=null,c())}),c()}function Mt(t,e="info"){const n=document.getElementById("consoleOutput"),i=document.createElement("div");i.className=`console-line console-line--${e}`,i.textContent="> "+t,n.appendChild(i),n.scrollTop=n.scrollHeight}function yS(){const t=document.getElementById("consoleOutput");t.innerHTML=""}function no(t){De&&De.updateStack(t||[]);const e=document.getElementById("stackViz");if(e.innerHTML="",!t||t.length===0){e.innerHTML='<div class="stack-empty-text">-- Empty --</div>';const i=document.querySelector(".stack-top-label");i&&(i.textContent="--");return}t.forEach((i,s)=>{const a=document.createElement("div");a.className="stack-item stack-item--animate",s===t.length-1&&a.classList.add("stack-item--top"),a.textContent=typeof i=="object"?JSON.stringify(i):String(i),a.style.animationDelay=`${s*.08}s`,e.appendChild(a)});const n=document.querySelector(".stack-top-label");if(n){const i=t[t.length-1];n.textContent=`TOP: ${typeof i=="object"?JSON.stringify(i):String(i)}`}}function io(){var e;yS(),Mt("Ready for execution.","info"),no([]),De&&(De.isExitOpen=!1,De.collectedRelics.clear(),De.resetCharacter());const t=document.getElementById("hero3DContainer");t&&(t.style.display="block",t._viewer&&t._viewer.resetIdle&&t._viewer.resetIdle()),document.getElementById("relicsCount").textContent=`0 / ${((e=Ee==null?void 0:Ee.relics)==null?void 0:e.length)||0}`,document.getElementById("sceneProgress").style.width="0%",document.getElementById("sceneProgressText").textContent="0%"}function bS(t,e,n){const i=[];Ee.levelActionConfig;const s=n*.35,a=n*.5,r=n*.65,f=new Set;for(const c of t)if(c.type==="push"){const o=c.item,l=e.findIndex((u,d)=>u.name===o&&!f.has(d));if(l!==-1){f.add(l);const u=e[l],d=u.x/100*n;i.push({type:"MOVE_TO",targetX:d,label:o}),i.push({type:"WAIT",frames:10}),i.push({type:"PICKUP",item:o,itemId:u.id||u.name})}i.push({type:"MOVE_TO",targetX:a,label:"stack_tower"}),i.push({type:"WAIT",frames:5}),i.push({type:"EXECUTE_CALLBACK",callback:()=>Mt(`push(${JSON.stringify(o)})`,"info")}),i.push({type:"INSERT_STACK",item:o})}else c.type==="pop"?(i.push({type:"MOVE_TO",targetX:r,label:"pop_machine"}),i.push({type:"WAIT",frames:5}),i.push({type:"EXECUTE_CALLBACK",callback:()=>Mt(`pop() → ${JSON.stringify(c.item)}`,"warning")}),i.push({type:"POP_ITEM",item:c.item}),i.push({type:"WAIT",frames:8})):c.type==="peek"&&(i.push({type:"MOVE_TO",targetX:s,label:"peek_shrine"}),i.push({type:"WAIT",frames:5}),i.push({type:"EXECUTE_CALLBACK",callback:()=>Mt(`peek() → ${JSON.stringify(c.item)}`,"info")}),i.push({type:"PEEK_ITEM",item:c.item}));return i}function MS(t,e,n){const i=[],s=new Set,a=Ee.levelActionConfig;if(Ee.id===2&&Ee.worldId==="arrays-strings"){const f=[];for(const c of t){const o=c.match(/\d+/g);o&&o.forEach(l=>{const u=parseInt(l);u>=0&&u<e.length&&f.push(u)})}return f.includes(0)&&f.includes(2)&&(i.push({type:"JUMP_TO",targetX:e[0].x/100*n,targetY:e[0].y,waitMs:600,label:"check_0"}),i.push({type:"WAIT",frames:30}),i.push({type:"JUMP_TO",targetX:e[1].x/100*n,targetY:e[1].y,waitMs:600,label:"check_1"}),i.push({type:"WAIT",frames:30}),i.push({type:"JUMP_TO",targetX:e[0].x/100*n,targetY:e[0].y,waitMs:600,label:"check_0"}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:e[0].x/100*n,item:e[0].name,itemId:e[0].id||e[0].name}):i.push({type:"PICKUP",item:e[0].name,itemId:e[0].id||e[0].name}),s.add(e[0].name),i.push({type:"JUMP_TO",targetX:e[2].x/100*n,targetY:e[2].y,waitMs:600,label:"check_2"}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:e[2].x/100*n,item:e[2].name,itemId:e[2].id||e[2].name}):i.push({type:"PICKUP",item:e[2].name,itemId:e[2].id||e[2].name}),s.add(e[2].name)),f.forEach(c=>{const o=e[c];if(o&&!s.has(o.name)){s.add(o.name);const l=o.x/100*n;i.push({type:"JUMP_TO",targetX:l,targetY:o.y,waitMs:600,label:o.name}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:l,item:o.name,itemId:o.id||o.name}):i.push({type:"PICKUP",item:o.name,itemId:o.id||o.name})}}),i}if(Ee.id===3&&Ee.worldId==="arrays-strings"&&t.some(c=>c.includes("15")))return[1,2,3].forEach(o=>{const l=e[o];if(!s.has(l.name)){s.add(l.name);const u=l.x/100*n;i.push({type:"JUMP_TO",targetX:u,targetY:l.y,waitMs:600,label:l.name}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:u,item:l.name,itemId:l.id||l.name}):i.push({type:"PICKUP",item:l.name,itemId:l.id||l.name})}}),i;if(Ee.id===4&&Ee.worldId==="arrays-strings"&&t.some(c=>c.includes("YES"))){const c=[0,4,1,3,2];return c.forEach(o=>{i.push({type:"JUMP_TO",targetX:e[o].x/100*n,waitMs:600,label:e[o].name}),i.push({type:"WAIT",frames:20})}),c.forEach(o=>{const l=e[o];s.has(l.name)||(s.add(l.name),i.push({type:"JUMP_TO",targetX:l.x/100*n,waitMs:400}),i.push({type:"WAIT",frames:10}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:l.x/100*n,item:l.name,itemId:l.id||l.name}):i.push({type:"PICKUP",item:l.name,itemId:l.id||l.name}))}),i}if(Ee.id===5&&Ee.worldId==="arrays-strings"&&t.some(c=>c.toUpperCase().includes("TRUE")))return i.push({type:"JUMP_TO",targetX:e[0].x/100*n,targetY:e[0].y,waitMs:600,label:"check_0"}),i.push({type:"WAIT",frames:40}),i.push({type:"JUMP_TO",targetX:e[1].x/100*n,targetY:e[1].y,waitMs:600,label:"check_1"}),i.push({type:"WAIT",frames:40}),[0,1].forEach(c=>{const o=e[c];s.has(o.name)||(s.add(o.name),i.push({type:"JUMP_TO",targetX:o.x/100*n,targetY:o.y,waitMs:400}),i.push({type:"WAIT",frames:10}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:o.x/100*n,targetY:o.y,item:o.name,itemId:o.id||o.name}):i.push({type:"PICKUP",item:o.name,itemId:o.id||o.name}))}),i;if(Ee.id===6&&Ee.worldId==="arrays-strings"&&t.join(" ").includes("1")&&t.join(" ").includes("3"))return[0,1,2,3].forEach(c=>{const o=e[c];i.push({type:"JUMP_TO",targetX:o.x/100*n,waitMs:500,label:"check_"+c}),i.push({type:"WAIT",frames:20}),c!==2&&(s.add(o.name),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:o.x/100*n,item:o.name,itemId:o.id||o.name}):i.push({type:"PICKUP",item:o.name,itemId:o.id||o.name}))}),i;if(Ee.id===7&&Ee.worldId==="arrays-strings"&&t.some(c=>c.includes("42")))return[0,1,2,1].forEach((c,o)=>{const l=e[c];i.push({type:"JUMP_TO",targetX:l.x/100*n,waitMs:600,label:"check_"+c}),i.push({type:"WAIT",frames:30}),o===3&&(s.add(l.name),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:l.x/100*n,item:l.name,itemId:l.id||l.name}):i.push({type:"PICKUP",item:l.name,itemId:l.id||l.name}))}),i;if(Ee.id===8&&Ee.worldId==="arrays-strings"&&t.join(" ").includes("TULIP"))return[2,1,0].forEach(c=>{const o=e[c];i.push({type:"JUMP_TO",targetX:o.x/100*n,waitMs:600}),i.push({type:"WAIT",frames:20}),s.add(o.name),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:o.x/100*n,item:o.name,itemId:o.id||o.name}):i.push({type:"PICKUP",item:o.name,itemId:o.id||o.name})}),i;if(Ee.id===9&&Ee.worldId==="arrays-strings"&&t.some(c=>c.includes("3"))){[0,1].forEach(o=>{const l=e[o];i.push({type:"JUMP_TO",targetX:l.x/100*n,waitMs:500}),i.push({type:"WAIT",frames:20}),s.add(l.name),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:l.x/100*n,item:l.name,itemId:l.id||l.name}):i.push({type:"PICKUP",item:l.name,itemId:l.id||l.name})});const c=80/100*n;return i.push({type:"JUMP_TO",targetX:c,waitMs:600}),i.push({type:"WAIT",frames:40}),a&&i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:c,item:"3",itemId:"3"}),i}if(Ee.id===10&&Ee.worldId==="arrays-strings"&&t.some(c=>c.includes("3")))return[0,1,2,3].forEach((c,o)=>{const l=e[c];i.push({type:"JUMP_TO",targetX:l.x/100*n,waitMs:500}),i.push({type:"WAIT",frames:o===3?60:20}),o<3&&(s.add(l.name+"_"+o),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:l.x/100*n,item:l.name,itemId:l.id||l.name}):i.push({type:"PICKUP",item:l.name,itemId:l.id||l.name}))}),i;const r=[];t.forEach((f,c)=>{e.forEach(o=>{let l=0;for(;;){const u=f.indexOf(o.name,l);if(u===-1)break;r.push({relic:o,logIdx:c,charIdx:u}),l=u+o.name.length}})}),r.sort((f,c)=>f.logIdx!==c.logIdx?f.logIdx-c.logIdx:f.charIdx-c.charIdx);for(const f of r){const c=f.relic;if(!s.has(c.name)){s.add(c.name);const o=c.x/100*n;i.push({type:"JUMP_TO",targetX:o,targetY:c.y,waitMs:600,label:c.name}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:o,item:c.name,itemId:c.id||c.name}):i.push({type:"PICKUP",item:c.name,itemId:c.id||c.name})}}if(i.length===0&&e.length>0){const f=e[0],c=f.x/100*n;i.push({type:"JUMP_TO",targetX:c,targetY:f.y,waitMs:600,label:f.name}),i.push({type:"WAIT",frames:30}),a?i.push({type:"USE_TOOL",tool:a.requiredTool,animation:a.actionAnimation,effect:a.successEffect,targetX:c,item:f.name}):i.push({type:"PICKUP",item:f.name})}return i}function TS(t,e,n=[]){if(!De){t.stack&&no(t.stack.getItems()),za(t),wi=!0,e&&Us();return}let i=!1;if(De.lastProcessedLogs){const o=De.lastProcessedLogs;if(t.logs.length<o.length)i=!0;else for(let l=0;l<o.length;l++)if(t.logs[l]!==o[l]){i=!0;break}}if(De.lastProcessedOps&&!i){const o=De.lastProcessedOps;if(t.operations&&t.operations.length<o.length)i=!0;else if(t.operations){for(let l=0;l<o.length;l++)if(t.operations[l].type!==o[l].type||t.operations[l].item!==o[l].item){i=!0;break}}}i&&io();const s=Ee.relics||[],a=De.canvas.width;let r=[];const f=De.lastProcessedOps&&!i?De.lastProcessedOps.length:0,c=De.lastProcessedLogs&&!i?De.lastProcessedLogs.length:0;if(t.operations&&t.operations.length>f){const o=t.operations.slice(f);r=bS(o,s,a)}if(r.length===0&&t.logs&&t.logs.length>c){const o=t.logs.slice(c);r=MS(o,s,a)}if(De.lastProcessedLogs=[...t.logs],t.operations&&(De.lastProcessedOps=[...t.operations]),e?(r.push({type:"MOVE_TO",targetX:a*.82,label:"exit_door"}),r.push({type:"WAIT",frames:10}),r.push({type:"ENTER_DOOR"}),to=t):n&&n.length>0&&r.push(...n),r.length===0){za(t),wi=!0,e?(Us(),window._showGuideMsg&&window._showGuideMsg("successMessage")):window._showGuideMsg&&window._showGuideMsg("errorHint");return}Mt("Executing commands...","info"),De.onDoorEnter=()=>{kt=100,document.getElementById("sceneProgress").style.width=`${kt}%`,document.getElementById("sceneProgressText").textContent=`${kt}%`,Us()},De.enqueueCommands(r,()=>{Mt(`Execution completed in ${t.executionTime}ms`,"success"),za(t),wi=!0,e?(kt=100,document.getElementById("sceneProgress").style.width=`${kt}%`,document.getElementById("sceneProgressText").textContent=`${kt}%`,Us(),window._showGuideMsg&&window._showGuideMsg("successMessage")):(document.getElementById("sceneProgress").style.width=`${kt}%`,document.getElementById("sceneProgressText").textContent=`${kt}%`,window._showGuideMsg&&window._showGuideMsg("errorHint"))})}function za(t){var s;if(!Ee.relics){ns=!0,kt=100;return}const e=t.logs||[],n=t.stack?t.stack.getItems():[];let i=0;if(Ee.id===2&&Ee.worldId==="arrays-strings"){const a=[];for(const r of e){const f=r.match(/\d+/g);f&&f.forEach(c=>{const o=parseInt(c);o>=0&&o<Ee.relics.length&&a.push(o)})}Ee.relics.forEach((r,f)=>{a.includes(f)&&(De&&De.collectRelic(r.id||r.name),i++)})}else if(Ee.id===3&&Ee.worldId==="arrays-strings"){if(e.some(r=>r.includes("15"))){const r=[1,2,3];Ee.relics.forEach((f,c)=>{r.includes(c)&&(De&&De.collectRelic(f.id||f.name),i++)})}}else Ee.relics.forEach(a=>{const r=n.includes(a.name),f=e.some(c=>c.includes(a.name));(r||f)&&(De&&De.collectRelic(a.id||a.name),i++)});i===0&&Ee.relics.length>0&&(De&&De.collectRelic(Ee.relics[0].id||Ee.relics[0].name),i=1),document.getElementById("relicsCount").textContent=`${i} / ${((s=Ee.relics)==null?void 0:s.length)||0}`,ns=i>0||Ee.relics.length===0}function HS(){if(!cn||!Ee){cn||En("Editor is still loading, please wait...","warning");return}const t=cn.getValue();Mt(`Compiling (${ts.toUpperCase()})...`,"info"),setTimeout(()=>{try{const e=rS(t,{language:ts});if(e.logs.length>0&&e.logs.forEach(i=>{i.startsWith("ERROR:")?Mt(i.substring(6),"error"):i.startsWith("WARN:")?Mt(i.substring(5),"warning"):i.startsWith("INFO:")?Mt(i.substring(5),"info"):Mt(i,"info")}),e.errors.length>0&&!e.logs.some(i=>i.startsWith("ERROR:"))&&e.errors.forEach(i=>Mt(i,"error")),!e.success){Mt("❌ Execution failed due to error.","error"),En("Runtime error! Check console.","error");return}Mt(`Execution completed in ${e.executionTime}ms`,"info");let n=oS(Ee,e);Ui=n.passed,TS(e,n.passed,n.commands),n.passed||(js++,Mt("============================","error"),Mt("❌ Test Failed!","error"),Mt(n.message,"warning"),En("Tests failed. Check console for hints.","error"),e.stack&&no(e.stack.getItems()))}catch(e){js++,Mt(`System Error: ${e.message}`,"error")}},300)}function RS(){if(!Ui||!wi||!ns||kt!==100){En("Complete all level objectives first!","warning");return}gc()}function gc(){try{if(Xn)return;Xn=!0;const t=Ye.getLevelProgress(Ee.worldId,Ee.id).completed,e=to||{operations:De?De.lastProcessedOps:[],executionTime:0},n=lS(Ee,e,Ji,js,t);Ye.completeLevel(Ee.worldId,Ee.id,n.stars),n.gold>0&&Ye.addGold(n.gold),n.mana>0&&Ye.addMana(n.mana),n.gems>0&&Ye.addGems(n.gems);const i=document.querySelector(".gold-val");i&&(i.textContent=Ye.player.gold.toLocaleString());const s=document.querySelector(".mana-val");s&&(s.textContent=Ye.player.mana.toLocaleString());const a=document.querySelector(".gems-val");a&&(a.textContent=Ye.player.gems.toLocaleString()),De&&De.openExit(),document.getElementById("sceneProgress").style.width="100%",document.getElementById("sceneProgressText").textContent="100%",Mt("============================","success"),Mt("🏆 LEVEL COMPLETE!","success"),setTimeout(()=>{console.log("handleSuccess: setTimeout fired, creating overlay...");const r=document.createElement("div");r.className="success-overlay",r.style.display="flex";const f=[];n.gold>0&&f.push({type:"Gold",amount:n.gold,icon:"🪙"}),n.mana>0&&f.push({type:"Mana",amount:n.mana,icon:"💎"}),n.gems>0&&f.push({type:"Gems",amount:n.gems,icon:"♦"});let c=f.map((l,u)=>`
      <div class="wood-reward-frame" style="opacity: 0; animation: reward-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${1+u*.2}s;">
        <div class="wood-reward-icon">${l.icon}</div>
        <div class="wood-reward-ribbon">+${l.amount} ${l.type}</div>
      </div>
    `).join("");const o=Array(3).fill(0).map((l,u)=>{const d=u<n.stars,h=.5+u*.15;return`<div class="success-star ${d?"star--filled":"star--empty"}" style="opacity: 0; animation: star-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${h}s;">★</div>`}).join("");r.innerHTML=`
      <div class="wood-modal">
        <!-- Chains -->
        <div class="wood-chain wood-chain-left"></div>
        <div class="wood-chain wood-chain-right"></div>
        
        <!-- Main Board -->
        <div class="wood-board">
          <!-- Close Button -->
          <button class="wood-close-btn" id="btnWoodClose">✖</button>
          
          <!-- Victory Banner -->
          <div class="wood-victory-banner">
            <h1 class="wood-victory-text">VICTORY</h1>
          </div>
          
          <!-- Top Shelf (Stars) -->
          <div class="wood-shelf">
            <div class="success-stars" style="margin-top: -10px;">
              ${o}
            </div>
            <div class="wood-shelf-ledge"></div>
          </div>
          
          <!-- Middle Shelf (Rewards) -->
          <div class="wood-shelf">
            <div class="wood-reward-container">
              ${c}
            </div>
            <div class="wood-shelf-ledge"></div>
            <div class="wood-shelf-text">YOU COMPLETED ${Ee.title.toUpperCase()}!</div>
          </div>
          
          <!-- Bottom Section (Breakdown / Actions) -->
          <div class="wood-footer">
            <div class="wood-footer-stats">
              <div class="wood-stat-box">
                <span class="wood-stat-icon">📈</span>
                <div class="wood-stat-info">
                  <div class="wood-stat-value">+${n.gold+n.mana}</div>
                  <div class="wood-stat-label">TOTAL SCORE</div>
                </div>
              </div>
              <div class="wood-stat-box">
                <span class="wood-stat-icon">♦</span>
                <div class="wood-stat-info">
                  <div class="wood-stat-value">+${n.gems}</div>
                  <div class="wood-stat-label">GEMS GAINED</div>
                </div>
              </div>
            </div>
            
            <div class="wood-actions">
              <button class="wood-btn wood-btn-gray" id="btnBackToMap">BACK TO MAP</button>
              <button class="wood-btn wood-btn-gray" id="btnReplayLevel" style="background-color: #d2b48c; color: #3e2723; border-color: #8b5a2b; box-shadow: 0 4px 0 #8b5a2b, inset 0 0 10px rgba(255,255,255,0.2);">REPLAY</button>
              <button class="wood-btn wood-btn-green" id="btnNextLevel">CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(r),console.log("handleSuccess: OVERLAY APPENDED TO DOM SUCCESSFULLY!"),document.getElementById("btnBackToMap").addEventListener("click",()=>{r.remove(),window.location.hash="#/"}),document.getElementById("btnWoodClose").addEventListener("click",()=>{r.remove()}),document.getElementById("btnNextLevel").addEventListener("click",()=>{r.remove(),window.location.hash=`#/problem/${Ee.worldId}/${Ee.id+1}`}),document.getElementById("btnReplayLevel").addEventListener("click",()=>{r.remove(),Xn=!1,io(),Fr()})},1e3)}catch(t){En("handleSuccess error: "+t.message,"error")}}function ES(){De&&(De.stop(),De=null)}const El=document.getElementById("app");let qi=null;function Pl(){const t=window.location.hash||"#/";if(qi==="worldMap"&&nS(),qi==="problemView"&&ES(),t==="#/")qi="worldMap",eS(El);else if(t.startsWith("#/problem/")){const e=t.split("/");if(e.length===4){qi="problemView";const n=e[2],i=e[3];Sc(El,n,i)}else window.location.hash="#/"}else t==="#/heroes"?(qi="heroes",dc()):window.location.hash="#/"}function PS(){window.addEventListener("hashchange",Pl),Pl(),window.gameState=Ye,console.log("Code Nest initialized! 🪺")}PS();
