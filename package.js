Package.describe({
  name: 'test-readme-pkg',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bruh is a test',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Grubba27/test-readme-pkg',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.12');
  api.use('ecmascript');
  api.mainModule('test-readme-pkg.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('test-readme-pkg');
  api.mainModule('test-readme-pkg-tests.js');
});
