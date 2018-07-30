load("galen-bootstrap/galen-bootstrap.js");
$galen.settings.website = "https://wordpress.com/log-in";

$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "450x700", ["mobile"]));
$galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));
