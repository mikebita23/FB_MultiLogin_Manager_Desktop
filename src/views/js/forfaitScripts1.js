<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    $('#button').on('click', function() {
      $.post("http://localhost:3008/prospect/add",
      {
        nom_Prospect: document.getElementById("nom").value,
        prenom_Prospect: document.getElementById("prenom").value,
        numero_tel: document.getElementById("tel").value
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
     });
   


// function buttClickGet(){
//     var nom= document.getElementById("nom").value;
//     var prenom= document.getElementById("prenom").value;
//     var tel= document.getElementById("tel").value;
//     console.log("OKKKKKKKKKKKKKKK")
//    console.log(nom);
//    console.log(prenom)
//    console.log(tel)
//     var url="http://localhost:3008/prospect/"+nom+"";


    //  $.get(url, function(data){
    //     var element = document.getElementById("container");
    //     element.innerHTML= "id User " +data.nom_Prospect;
    //     idUser= data.id
    //     console.log(idUser)
    // }).done(function(){

    // }).fail(function(){
    //     alert("error");
    // }).always(function(){

    // });
    
// }


// async function init(){


//     //init Var
//     let displayElement =document.getElementById('container')
   
//     let loadData = document.getElementById('reloadDataBtn'); 
//     let messageButton= document.getElementById('submitButton');
    
    

//     async function getData(){
//         console.log("OKKKKKKKKKKKKKKKKKKKKKKKK")
//         // displayElement.textContent = await getData('./data/sessions.json)')
//     }
   
//      async function sendData(){
//          console.log("OKKKKKKKKKKKKKKKKKKKKKKKK")
//       //ev.preventDefault();
//       let data= {
//          nom_Prospect:document.getElementById("nom").value,
//          prenom_Prospect: document.getElementById("prenom").value,
//          numero_tel: document.getElementById("tel").value
         
//       };

//       postData(url='http://localhost:3003/prospect/add', data)
//       .then(data =>{
//           console.log(data)
//           alertElement.classList.remove('success', 'error');
//           alertElement.innertHTML = data.message;
//           console.log(data);
//           if(data.success){
//               alertElement.classList.add('success');

//           }else{
//               alertElement.classList.add('error')
//           }
//       }).catch(console.error());
//     }
//     // messageButton.onclick= sendData;
//     //messageButton.onsubmit=sendData;
   

    
    
// }
// init();
