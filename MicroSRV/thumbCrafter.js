'use strict';

// Servicio de creation de Thumbs

const cote = require('cote');
const jimp = require('jimp');

const responder = new cote.Responder({ name: 'ThumbCrafter' });

responder.on('Resize IMG', async (req, done) => {
  
    // Read the image.
    const image = await jimp.read('../public/images/ads/' + req.file);
  
    // Resize the image to width 150 and auto height.
    await image.resize(100, jimp.AUTO);
  
    // Save and overwrite the image
    await image.writeAsync('../public/images/thumb/' + req.file);

});