Package.describe({
  summary: "A handy JavaScript plugin for generating and animating nice & clean dashboard gauge"
});

Package.on_use(function (api, where) {
  api.use(['jquery'], 'client');

  api.add_files(['justgage.1.0.1.min.js', 'errors_list.html', 'errors_list.js'], 'client');
});