// seed-up.ts
import { seeder } from "./seeder.js";

seeder.up().then(() => {
  console.log("✅ Seeders aplicados");
  process.exit(0);
});