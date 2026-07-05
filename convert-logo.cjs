const sharp = require('sharp');
sharp('public/logo.svg')
  .png()
  .toFile('public/logo.png')
  .then(() => console.log('Successfully created logo.png'))
  .catch(err => console.error(err));
