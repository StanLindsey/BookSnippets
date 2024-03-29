BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
  '*.google-analytics.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

_.each(trusted, function(origin) {
  origin = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
});

BrowserPolicy.content.allowOriginForAll("http://files.vobes.com");
