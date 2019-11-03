// Open account-card Details
// document.querySelector("#chat-1").open = true;

//
const create_1_btn = document.querySelector("#create-btn");
create_1_btn.addEventListener('click', create_chat);

//
// const send_btn = document.querySelector("#send-btn");
// send_btn.addEventListener('click', send_post);

//
const reply_btn = document.querySelectorAll(".reply-btn");
log(reply_btn)
log(reply_btn.length)

//
const chat_name = document.querySelector("#chat-name");
const chat_title = document.querySelector("#chat-title");
const chat_text = document.querySelector("#chat-text");



// for(let i=0; i<=5; i++) {
//     log('0: ', reply_btn[i])
//     reply_btn[i].addEventListener('click', reply_post)
// }

for (let i = 0; i <= reply_btn.length - 1; i++) {
    log(': ', reply_btn[i])
    reply_btn[i].addEventListener('click', reply_post)
}


async function create_chat() {
    log('create_chat');

    const rawResponse = await fetch('/api/chats/chats', {
        method: 'POST',
        headers,
        body: JSON.stringify({ 
            name:  chat_name.value,
            title: chat_title.value,
            text: chat_text.value
        })
    });
    const result = await rawResponse.json();

    log(result);
    if (result.success) location.reload()
}


// async function send_post() {
//     log('send_post');

//     const rawResponse = await fetch('/api/chats/save-post', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({ name: ' The One ! ' })
//     });
//     const result = await rawResponse.json();

//     log(result);
// }

// async function reply_post(e) {
//     const target_str = e.target.value;
//     const target_arr = target_str.split('-')

//     const text = 'example';
//     const user = 'some';

//     log( target_str, target_arr )

//     const rawResponse = await fetch('/api/chats/reply-post', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({ target_arr, user, text })
//     });
//     const result = await rawResponse.json();

//     log(result);    
// }
