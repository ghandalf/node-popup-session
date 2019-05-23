import * as shell from "shelljs";

// Copy files from src to dist
shell.cp("-R", "src/main/views", "dist/");
shell.mkdir("-p", "dist/javascript");
shell.cp("src/main/javascript/bootstrap-session-timeout.js", "dist/javascript/bootstrap-session-timeout.js");
shell.cp("node_modules/jquery/dist/jquery.min.js", "dist/javascript/jquery.min.js");
shell.cp("node_modules/bootstrap/dist/js/bootstrap.min.js", "dist/javascript/bootstrap.min.js");