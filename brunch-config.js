exports.config = {

  files: {
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^vendor/,
        'javascripts/components.js': /^bower_components/,
        'javascripts/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css'
    }
  },


  plugins: {
    babel: {
      ignore: [/^(bower_components|vendor)/],
      loose: "all"
    }
  }
}
