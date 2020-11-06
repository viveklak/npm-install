const Font = require('ascii-art-font');

Font.fontPath = './node_modules/ascii-art-font/Fonts/'
Font.create('it works!', 'Doom', function (err: any, rendered: any) {
    console.log('here?')
    console.log(rendered)
});
