

( async function (){

    function sendMessagePromise(item) {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(item, response => {
                if(response.complete) {
                    resolve(response.data);
                } else {
                    reject('Something wrong');
                }
            });
        });
    }

    let email = document.getElementById('email') || undefined;
    let pwd = document.getElementById('pass') || undefined;
    
    if(email && pwd){
        sendMessagePromise({ action: 'GET' }).then(res =>{
            email.value = res.email;
            pwd.value = res.pwd
            document.querySelector("button[type=submit]").click()
        })
    }
})()