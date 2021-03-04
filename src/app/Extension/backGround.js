chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    if(request.action === "GET")
        
        fetch('credentials.json').then(res => {
            res.json().then(obj =>{
                console.log(obj);
                sendResponse({data: obj, complete: true})  
            })
        })

    return true
        
})