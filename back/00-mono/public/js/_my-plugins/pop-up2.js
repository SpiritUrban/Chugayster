var log = console.log

function open_popup(msg_en, msg_ua) {
    log('open')
    document.querySelector('body').innerHTML += `
            <div id ="pop-up"
                style="
                    background: #0009;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 99999;
                    width: 100vw;
                    height: 100vh;
                    text-align: center
                "
            >
                <div style="
                    margin: 10em auto 0em auto;
                    background: #333;
                    width: -moz-fit-content;
                    width: fit-content;
                    padding: 1em;
                    border-radius: 1em;
                    border: 3px #474747 solid;
                    box-shadow: 0px 0.5em 2.45em rgba(0, 0, 0, 1);
                ">
                    ${msg_en}
                    <br>
                    <br>
                    ${msg_ua}
                </div>
              
            </div>
        `
    setTimeout(() => {
        document.querySelector('#pop-up').addEventListener('click', close_popup);
    }, 1000);
}

function close_popup() {
    document.querySelector('#pop-up').remove();
}

//export { open_popup };
//export { close_popup };

