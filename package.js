Package.describe({
  summary: "A handy JavaScript plugin for generating and animating nice & clean dashboard gauge"
});

Package.on_use(function (api, where) {
  api.use(['jquery'], 'client');

  api.add_files(['lib/justGage/justgage.js'], 'client');
});