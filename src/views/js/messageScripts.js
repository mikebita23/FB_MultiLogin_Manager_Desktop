const { getDiffieHellman } = require("crypto");

async function init(){


    //init Var
    let displayElement =document.getElementById('displayResult')
    let reloadImgBtn= document.getElementById('reloadImgBtn')
    let form = document.forms['testForm'];
    let loadData = document.getElementById('reloadDataBtn'); 
    let messageButton= document.getElementById('messageButton');
    
    let alertElement = document.getElementById('formAlert');

    async function getData(){
        displayElement.textContent = await getData('./data/data.json)')
    }
    async function loadImg(){
        imgElement.src =await getFile('./data/img.png')
    }
     async function sendData(ev){
      ev.preventDefault();
      let data= {
          Objet:form.element['objet'].value,
          Content: form.element['areaContent'].value,
          senderId: form.element['senderId'].value
         
      };

      postData('https://gls-login.herokuapp.com/Msg/add', data)
      .then(data =>{
          console.log(data)
        //   alertElement.classList.remove('success', 'error');
        //   alertElement.innertHTML = data.message;
        //   console.log(data);
        //   if(data.success){
        //       alertElement.classList.add('success');

        //   }else{
        //       alertElement.classList.add('error')
        //   }
      }).catch(console.error());
    }
    // messageButton.onclick= sendData;
    messageButton.onsubmit=sendData;
    reloadImgBtn.onclick=loadImg;
    loadData.onclick=getData
    
    
}
init();

