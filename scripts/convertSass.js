const fs = require('fs');
const sass = require('sass');


const inputFile = './styles/styles-sass/style.scss';
const outputFile = './styles/styles-css/style.css';

const result = sass.renderSync({
  file: inputFile,
});

fs.writeFileSync(outputFile, result.css.toString());


