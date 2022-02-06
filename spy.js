function spy(){
  var verify, notify;
  
  verify = document.getElementById("checkmate").value.toLowerCase();
  
  notify = "Howdy Guest, you need to login first to send message to user! \n \n \t \t Press Ok to continue";
  
  
  if(verify == null || verify == "" || verify.indexOf(' ') >=0){
    if(confirm(notify) == true){
      window.location.href="/page-login.html";
    }
    else{
      alert("Sorry, you can't message this user at the moment!");
    }
   
  }
  
  else{
    window.location.href="/page-message.html";
    return true;
  }
  
}
