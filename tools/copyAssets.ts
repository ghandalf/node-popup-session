import * as shell from "shelljs";

// Copy files from src to dist
shell.cp("-R", "src/main/typescript/views", "dist/");