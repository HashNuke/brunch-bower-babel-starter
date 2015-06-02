module.exports = config:
  files:
    javascripts:
      joinTo:
        'js/vendor.js': /^(bower_components|vendor)/
        'js/app.js': /^app/
    stylesheets: joinTo: 'app.css'
