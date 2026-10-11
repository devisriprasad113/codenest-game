import { PROBLEMS } from './src/gameData.js';

for (const [worldId, problems] of Object.entries(PROBLEMS)) {
  for (const p of problems) {
    if (!p.hints || p.hints.length === 0) {
      console.log(`Problem ${p.id} in ${worldId} has missing/empty hints!`);
    }
  }
}
console.log("Check complete.");
