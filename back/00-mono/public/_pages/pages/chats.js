// Auto-Open account-card Details
try {
    document.querySelector("#chat-1").open = true;
} catch (error) {
    log(error)
}


//               //
// querySelector //
//               //
const send_btn = document.querySelector("#send-btn");
const new_post = document.querySelector("#new-post");
const reply_btn = document.querySelectorAll(".reply-btn");
const delete_btn = document.querySelectorAll(".delete-btn");


//
// Listeners [](
//
// one
send_btn.addEventListener('click', reply_post); // [send_btn] -> reply_post()
// more
for (let i = 0; i <= reply_btn.length; i++) {
    // log('1, 2: ', reply_btn[i], delete_btn[i])
    // var last = (i == reply_btn.length) ? true : false;
    if (reply_btn[i]) reply_btn[i].addEventListener('click', reply_post)
    if (delete_btn[i]) delete_btn[i].addEventListener('click', delete_post)
}


//
// CREATE ??? (example or test) - should be in admin-panel
//
async function create_1() {
    log('create_1');
    const rawResponse = await fetch('/api/chats/create-chat', {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: ' The One ! ' })
    });
    const result = await rawResponse.json();
    log(result);
}


//
// Prepare
//
let cookie
function prepare(){
    cookie = getCookie()
    if (!cookie.username) alert('You are not logged!')
}



//
//  [ REPLY ]
//
async function reply_post(e) {
    prepare()
    const name = window.pageName;
    const text = new_post.value;
    // const user = cookie.username;
    let target_str;
    let target_arr;
    if (e.target.value == 'root') {
        target_arr = []
    } else {
        target_str = e.target.value;
        target_arr = target_str.split('-')
    }

    log(target_str, target_arr)

    const rawResponse = await fetch('/api/chats/reply-post', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name,
            target_arr,
            // user,
            text
        })
    });
    const result = await rawResponse.json();

    log(result);
    if (result == 'not logged') alert('not logged')
    if (result.success) location.reload()
}


//
//  [ DELETE ]
//
async function delete_post(e) {
    const name = window.pageName;
    // const text = 'example';
    const user = 'some';
    const target_str = e.target.value;
    const target_arr = target_str.split('-')

    log(target_str, target_arr)

    const rawResponse = await fetch('/api/chats/delete-post', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name,
            target_arr,
            user,
            // text 
        })
    });
    const result = await rawResponse.json();

    log(result);
    if (result.success) location.reload()
}












// async function send_post() {
//     log('send_post');

//     const rawResponse = await fetch('/api/chats/reply-post', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({ name: ' The One ! ' })
//     });
//     const result = await rawResponse.json();

//     log(result);
//     if (result.success) location.reload()

// }