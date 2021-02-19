Package.describe({
  name: "imajus:body-events",
  summary: "Get Template.body.events() working in Meteor 2.0",
  version: "0.0.3",
  git: "https://github.com/imajus/meteor-body-events"
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use([
    'ecmascript',
    'blaze',
    'templating',
    'jquery'
  ], "client");
  api.mainModule("lib.js", "client");
});
