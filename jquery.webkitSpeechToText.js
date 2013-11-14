/*!
 * jQuery Webkit Speech to Text Plugin
 *
 * This plug-in enables speech input to textarea and text field on Google Chrome.
 * Based on original work by Stoyan Stefanov.
 * http://www.phpied.com/x-webkit-speech-input-and-textareas/
 * 
 * @version 1.0.0
 * @author Hiroyuki OHARA <Hiroyuki.no22@gmail.com>
 * @copyright (c) 2013 Hiroyuki OHARA
 * @see https://github.com/no22/jquery-webkit-speech-to-text
 * @license MIT
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function($){
    var enableSpeech = document.createElement('input').webkitSpeech !== undefined;
    $.fn.webkitSpeechToText = function(options) {
        if (!enableSpeech) return;
        var settings = $.extend(true, {
            mike: 'webkit-speech-to-text-mike',  // class name of dummy speech input field
            types: 'text',    // input type which enables speech input
                               // ex. 'text,number'
            css: {  // css attributes of dummy speech input field
                    // set false, if you prefer control by stylesheet.
                'font-size': '18px',
                'width': '18px',
                'height': '18px',
                'cursor': 'pointer',
                'border': 'none',
                'position': 'absolute',
                'margin-left': '5px',
                'outline': 'none',
                'background': 'transparent'
            }
        }, options);

        $(this).each(function() {
            var elem = this;
            var types = settings.types.split(',');
            if (elem.tagName === 'INPUT' && types.indexOf(elem.type) >= 0) {
                $(elem).attr('x-webkit-speech', 'x-webkit-speech');
            } else if (elem.tagName === 'TEXTAREA') {
                var mikeField = $('<input type="text" x-webkit-speech />');
                mikeField.addClass(settings.mike);
                if (settings.css) {
                    mikeField.css(settings.css);
                }
                mikeField.bind('forcus', function() {
                    mikeField.blur();
                });
                mikeField.bind('webkitspeechchange', function() {
                    elem.value = this.value;
                    this.value = '';
                });
                $(elem).after(mikeField);
            }
        });
    };
});
