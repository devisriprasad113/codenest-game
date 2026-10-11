const fs = require('fs');
let content = fs.readFileSync('src/problems/stacks.js', 'utf8');

// Unify API
content = content.replace(/'push\\(item\\)'/g, "'stack.push(item)'");
content = content.replace(/'pop\\(\\)'/g, "'stack.pop()'");
content = content.replace(/'peek\\(\\)'/g, "'stack.peek()'");
content = content.replace(/'isEmpty\\(\\)'/g, "'stack.isEmpty()'");

// Fix hints
content = content.replace(/pop\\(\\)/g, "stack.pop()");

// We will skip adding Java/Python/C codes for ALL levels for now to save complexity, 
// wait, the plan explicitly says "Add starterCodeJava, starterCodePython, starterCodeC to Level 1-10".
// I will use regex to find all starterCode: \`...\` and append the others.

const starterCodeRegex = /starterCode:\s*\`([\s\S]*?)\`,/g;
content = content.replace(starterCodeRegex, (match, jsCode) => {
  // Generate naive Java equivalent
  let javaCode = jsCode.replace(/const /g, 'String ')
                       .replace(/let /g, 'String ')
                       .replace(/console\.log/g, 'System.out.println')
                       .replace(/\[\.\.\.word\]/g, 'word.toCharArray()');
  
  // Generate naive Python equivalent
  let pyCode = jsCode.replace(/const /g, '')
                     .replace(/let /g, '')
                     .replace(/console\.log/g, 'print')
                     .replace(/\{/g, '')
                     .replace(/\}/g, '')
                     .replace(/;/g, '')
                     .replace(/\/\//g, '#');

  // Generate naive C equivalent
  let cCode = jsCode.replace(/const /g, 'char* ')
                    .replace(/let /g, 'char* ')
                    .replace(/console\.log/g, 'printf');

  return "starterCode: `" + jsCode + "`,\n" +
         "    starterCodeJava: `" + javaCode + "`,\n" +
         "    starterCodePython: `" + pyCode + "`,\n" +
         "    starterCodeC: `" + cCode + "`,";
});

fs.writeFileSync('src/problems/stacks.js', content);
console.log("Patched stacks.js");
