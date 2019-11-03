


$("main").trigger("click");


// $('*').unbind("hover");
// $("*").off("click")
// $("*").off("hover")


// $("nav").bind("click")    


function simulateClick() {
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    // var cb = document.getElementById('checkbox');
    var cb = document.querySelector('main');
    var canceled = !cb.dispatchEvent(event);
    if (canceled) {
        // A handler called preventDefault.
        log("canceled");
    } else {
        // None of the handlers called preventDefault.
        log("not canceled");
    }
}
simulateClick()



