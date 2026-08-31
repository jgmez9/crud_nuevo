// migrate-up.ts
import  {migrator}  from "./migrator.js";

migrator.up().then(() => {
  console.log("✅ Migraciones aplicadas");
  process.exit(0);
});