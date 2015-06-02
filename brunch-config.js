exports.config = {

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^vendor/,
        'components.js': /^bower_components/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },


  plugins: {
    babel: {
      ignore: [/^(bower_components|vendor)/],
      loose: "all"
    }
  }
}
