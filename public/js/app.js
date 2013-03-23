requirejs.config({
  // By default load any module IDs from js/lib
  baseUrl: 'js/lib',
  // Except if the id starts with "vendor",
  // load it from the js/vendor directory
  paths: {
    vendor: '../vendor'
  }
});

requirejs(['main', 'modules/resources', 'vendor/jquery.min', 'vendor/bootstrap.min', 'vendor/underscore.min'], 
          function(main, resources, $, bootstrap) {
            // Initialize everything here and shit later
          });
