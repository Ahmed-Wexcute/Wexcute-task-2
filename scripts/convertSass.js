const fs = require('fs');
const sass = require('sass');


const inputFile = './assets/styles-sass/style.scss';
const outputFile = './assets/styles-css/style.css';

const result = sass.renderSync({
  file: inputFile,
});

fs.writeFileSync(outputFile, result.css.toString());

// console.log("2");
// console.log(result.css.toString());
// console.log("3");
