module.exports = function (app) {

    var colors = require('colors')

    colors.setTheme({
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        debug: 'blue',
        error: 'red',
        test: ['yellow'],
        custom: ['red', 'underline', 'america', 'bgBlue']
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                                    //
    //                                         COLORS & STYLES:                                           //
    //                                                                                                    //
    //     Text colors:  black, red, green, yellow, blue, magenta, cyan, white, gray, grey                //
    //     Background    colors: bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite    //
    //     Styles:       reset, bold, dim, italic, underline, inverse, hidden, strikethrough,             //
    //     Extras:       rainbow, zebra, america, trap, random,                                           //
    //                                                                                                    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    //          //
    // EXAMPLES //
    //          //

    // log('EXAMPLES: '.green)             // outputs green text 
    // log('underline.red'.underline.red)  // outputs red underlined text 
    // log('inverse '.inverse)             // inverses the color 
    // log('rainbow'.rainbow)              // rainbow 
    // log('OOO trap'.trap)                // Drops the bass 
    
    // log("this is an error".error)       // outputs red text 
    // log("this is a warning".warn)       // outputs yellow text 

    // log('test'.info)
    // log('test'.data)
    // log('test'.custom)    
}