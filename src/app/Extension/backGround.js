chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    if(request.action === "GET")
        
        fetch('http://localhost:8888/get', { method: 'POST' }).then(res => {
            res.json().then(obj =>{
                console.log(obj);
                sendResponse({data: obj, complete: true})  
            })
        })

    return true
        
})