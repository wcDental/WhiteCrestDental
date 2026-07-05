const sharp = require('sharp');
sharp('public/og-image.svg')
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Successfully created og-image.png'))
  .catch(err => console.error(err));
