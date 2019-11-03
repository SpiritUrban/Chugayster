var log = console.log

class PopUp {

    constructor(){

    }

    open(msg){
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
                    margin: 10em auto;
                    background: #333;
                    width: -moz-fit-content;
                    width: fit-content;
                    padding: 1em;
                    border-radius: 1em;
                ">
                    ${msg}
                </div>
            </div>
        `
        setTimeout(()=>{
            document.querySelector('#pop-up').addEventListener('click', this.close);
        }, 1000); 
    }

    close(){
        document.querySelector('#pop-up').remove();
    }

}

//export { PopUp };
