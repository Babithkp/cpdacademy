function NewHttpReq() {
    var httpReq = false;
    if (typeof XMLHttpRequest != 'undefined') {
        httpReq = new XMLHttpRequest();
    } else {
        try {
            httpReq = new ActiveXObject("Msxml2.XMLHTTP.4.0");
        } catch (e) {
            try {
                httpReq = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (ee) {
                try {
                    httpReq = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (eee) {
                    httpReq = false;
                }
            }
        }
    }
    return httpReq;
}


/**
 * Fulfill the request
 *
 * @param httpReq
 * @param url
 * @param param
 *
 */

function DoRequest( httpReq, url, param ){
    console.info( "request.js start" );

    // Initialise XMLHttpRequest
    httpReq.open( "POST", url, false );     // make the promise implicitly synchronous
    httpReq.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

    // Setup our listener to process completed requests
    httpReq.onreadystatechange = function () {
        // Only run if the request is complete
        if ( httpReq.readyState !== 4 ) return;

        // Process the response
        if ( httpReq.status >= 200 && httpReq.status < 400 ) {
            // If successful
            return httpReq.responseText;
        } else {
            // If failed
            return httpReq.status;
        }
    };

    var iframe_window = document.getElementById("iframe").contentWindow.window;

    // Use sendBeacon to fulfill out request
    if(typeof navigator.sendBeacon !== 'undefined'){
        console.log('sendBeacon');

        // Check if single page topic and add topic completed
        if(typeof iframe_window.singlePage !== 'undefined' && iframe_window.singlePage){
            if(param.indexOf('cmi__core__lesson_status') > -1){
                param = param.replace('=incomplete', '=completed')
            }
            else{
                param += '&cmi__core__lesson_status=completed';
            }
        }

        var requestData = paramsToObj(param);

        // Currently Safari 12 is getting this far then failing
        if(navigator.sendBeacon(url, createFormData(requestData))){
            return JSON.stringify(requestData);
        }
        // If beacon fails then we will try and contact the old way
        else{
            // Send the request
            fallbackRequest();
        }
    }
    // Fallback for prehistoric browsers when tracking goes live
    else {
        // Send the request
        fallbackRequest();
    }

    console.info("request.js end");

    function fallbackRequest(){
        if(param.indexOf('cmi__core__lesson_status') > -1){
            param = param.replace('=incomplete', '=completed')
        }
        else{
            param += '&cmi__core__lesson_status=completed';
        }

        httpReq.send( param );
    }
}


/**
 * Convert a param string to an object
 *
 * @param params
 * @returns {any}
 */

function paramsToObj(params){
    return JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}


/**
 * Use an object to create from data for sending to backend
 *
 * @param data
 * @returns {*}
 *
 */

function createFormData(data){
    var form_data = new FormData();

    for ( var key in data ) {
        form_data.append(key, decodeURIComponent(data[key]));
    }

    return form_data;
}

function popupwin(content) {
    var op = window.open();
    op.document.open('text/plain');
    op.document.write(content);
    op.document.close();
}