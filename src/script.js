function checkForms(){
    let consentimento = 0;
    let escolha = 0;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const  rad = document.getElementsByName("rad");
    if (rad[0].checked){
        escolha = 1;
    }  else if (rad[1].checked){
        escolha = 2;
    }
    const text = document.getElementById("text").value;
     
    const consented = document.getElementsByName("consented");    
    if (consented[0].checked){
        consentimento = 1;
    }

    if(firstName && lastName && email && text != "" && consentimento == 1 && (escolha == 1 || escolha == 2)){             
        return alert("deu certo");
    } else {
        alert("Verifique os dados");
    }
        
    
}

function notify(){
    (()=>{
      let n = document.createElement("div");
      

      let id = Math.random().toString(36);           
      
      n.setAttribute("id",id);

      
      n.classList.add("notification","success"); 
      
      
             
      n.textContent = "Message Sent!";
       

      document.getElementById("notification-area").appendChild(n);
      
     
      setTimeout(()=>{
        var notifications = document.getElementById("notification-area").getElementsByClassName("notification");

      



        for(let i=0;i<notifications.length;i++){
          if(notifications[i].getAttribute("id") == id){
            notifications[i].remove();
            break;
          }
        }     
        
        
      },2000);
    })();
  }
