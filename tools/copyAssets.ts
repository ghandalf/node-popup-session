import * as shell from "shelljs";

var views_dir: string = "src/main/views";
var dist_dir: string = "dist";
var javascript_dir: string = dist_dir + "/javascript";

// Copy files from src to dist
shell.cp("-R", views_dir, dist_dir);
shell.mkdir("-p", javascript_dir);
shell.cp("src/main/javascript/session-timeout.js", javascript_dir);
shell.cp("node_modules/jquery/dist/jquery.min.js", javascript_dir);
shell.cp("node_modules/bootstrap/dist/js/bootstrap.min.js", javascript_dir);