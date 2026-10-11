const fs = require('fs');
const files = ['arrays.js', 'stacks.js', 'linkedLists.js', 'trees.js'];
for (const f of files) {
  let content = fs.readFileSync('src/problems/' + f, 'utf8');
  content = content.replace(/(validate:[\s\S]*?},\s*)(guideText:[^,]+,\s*)?sceneType:/g, '$1guide: {\n      intro: "Welcome to this challenge! Listen carefully to the instructions.",\n      objectiveHelp: "Your goal is to solve the problem described in the instructions.",\n      codeHint: "Check the hints panel if you need more help with the code.",\n      gameplayHint: "Remember to watch the character animation for clues.",\n      errorHint: "Your code has an error or didn\'t produce the correct result. Check the console.",\n      successMessage: "Excellent work! You solved it!"\n    },\n    sceneType:');
  fs.writeFileSync('src/problems/' + f, content);
  console.log("Updated " + f);
}
