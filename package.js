Package.describe({
  name: "imajus:body-events",
  summary: "Get Template.body.events() working in Meteor 2.0",
  version: "0.0.1",
  git: "https://github.com/imajus/meteor-body-events"
});

Package.onUse(function(api) {
  api.versionsFrom(['1.4', '2.0']);
  api.use(['blaze', 'templating', 'jquery'], "client");
  api.mainModule("lib.js", "client");
});
