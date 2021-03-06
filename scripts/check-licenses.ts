import { readdirSync } from "fs";
import { execSync } from "child_process";

(() => {

  const packages: string[] = readdirSync("./packages");
  let error: boolean = false;

  packages.forEach(p => {
    try {
      execSync(`license-checker --onlyAllow Apache-2.0;MIT;ISC;BSD-2-Clause;BSD-3-Clause --start ./packages/${p} --production`);
    } catch (e) {
      console.error(`License check unsuccessful in '${p}': ${e}`);
      error = true;
    }
  });

  if(error) {
    throw "License check unsuccessful";
  }
})();