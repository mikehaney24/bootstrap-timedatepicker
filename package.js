Package.describe({
  name: 'mikehaney:bootstrap-datetimepicker',
  summary: 'Meteor packaging of the bootstrap-datetimepicker project by smalot found at https://github.com/smalot/bootstrap-datetimepicker',
  version: '2.3.1',
  git: 'https://github.com/mikehaney24/bootstrap-timedatepicker.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');

  api.addFiles([
  	'bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
  	'bootstrap-datetimepicker/css/bootstrap-datetimepicker.css'
  ], 'client');
});