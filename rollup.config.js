import scss from 'rollup-plugin-scss'
import css from 'rollup-plugin-css-porter';
 
export default {
  input: 'entry.js',
  output: {
    // file: 'dist/hamburgers',
    format: 'cjs'
  },
//   dest: 'bundle.js',
  plugins: [
    scss({
        //Choose *one* of these possible "output:..." options
        // Default behaviour is to write all styles to the bundle destination where .js is replaced by .css
        output: true,
       
        // Filename to write all styles to
        output: 'dist/hamburgers.css',
       
        // Callback that will be called ongenerate with two arguments:
        // - styles: the contents of all style tags combined: 'body { color: green }'
        // - styleNodes: an array of style objects: { filename: 'body { ... }' }
        // output: function (styles, styleNodes) {
        //   writeFileSync('hamburger.css', styles)
        // },
       
        // Disable any style output or callbacks, import as string
        // output: false,
       
        // Determine if node process should be terminated on error (default: false)
        failOnError: true,
      }),      // will output compiled styles to bundle.css
      css({
        raw: 'dist/hamburgers.css',
        minified: 'hamburgers.min.css'
      })
  ]
}