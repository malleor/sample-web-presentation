(function (document, window) {
    'use strict';
    
    // connect to impress
    var impress = window.impress(),
    
    // forward navigation to impress
        next = function () {
            impress.next();
        },
        previous = function () {
            impress.previous();
        },
    
    // handle zooming
        zoom = null,
    
    // return to current slide
        reset = null;
    
    // register the API
    window.client = ({
        next: next,
        previous: previous,
        zoom: zoom,
        reset: reset
    });

}(document, window));
