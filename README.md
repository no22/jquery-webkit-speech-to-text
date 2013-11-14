jQuery.webkitSpeechToText
======================================================================

This plug-in enables speech input to textarea and text field on Google Chrome.
Based on original work by Stoyan Stefanov.
http://www.phpied.com/x-webkit-speech-input-and-textareas/

Installation
----------------------------------------------------------------------

Include script after the jQuery library:

```html
<script src="/path/to/jquery.webkitSpeechToText.js"></script>
```


Usage
----------------------------------------------------------------------

### Standard call with default settings:

```javascript
$('textarea, input:text').webkitSpeechToText();
```

### Options

```javascript
$('textarea, input:text').webkitSpeechToText({
    mike: 'webkit-speech-to-text-mike',  // class name of dummy speech input field
    types: 'text',  // input type which enables speech input
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
});
```

License
----------------------------------------------------------------------

Copyright (c) 2013 Hiroyuki OHARA Licensed under the MIT license.

