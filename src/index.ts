// tslint:disable:no-console

import * as jQuery from 'jquery';


jQuery(function() {
    console.log( "ready!" );

    const box = function() {
        const data = jQuery('[box]').data()
        const defaultConfig = {
            "background"  : "black",
            "min-height"  : "10em",
            "min-width"   : "10em",
            "position"    : "absolute"
        }
        const config = jQuery.extend(true, defaultConfig, data)
        console.log(data)
        jQuery('[box]')
            .css(config)
    }
    box()

});
