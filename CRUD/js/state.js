//  Explaination of STATE.JS

//Hash Function  maintain the stat e of the pages
/* 
   window.location.hash---> gives hash values 
    yeh hash jo hai wo state maintain krta hai.

   1.Agar hash == #welcome-back then
   means agr user login hai aur wo wapis loginn me aata hai toh 

   let session = JSON.parse(window.localStorage.getItem('session'));---->//Converts a JavaScript Object Notation (JSON) string into an object-->
    means ki session naaam ka ek variable bnao aur usme session ka data get kro
    
    let email = session.data.email;----> is line session me jo email hai wo   access hojaega 

    success_alert(email + ", Welcome Back.");--------> print kro jo bhji current session ka email hai aur concatenate(+) iwth welcome back



   2. Agr hash == #logout hai   then  message do ki "Logout Successfully" ,
   jisse ki user ko pta chalay ki  logout hogye hai user 


   3.Agr hash == #session-expired  hai   ,toh 

    means agr  bina login kiye , agr direct dashboard jarhe ho toh error_alert me print kro ki ,----> "Please login first !!!!!!"



   4. agr hash == #login-success hai 
   toh user ko btao ki bhaiya aaap login  hogye ho----------->"Login  Successfully"

*/




(function(){
    let hash = window.location.hash;
    if(hash == "#log-out"){
        success_alert("Logout Successfully");
    }else if(hash == "#session-expired"){
        error_alert("Please login first !!!!!!");
    }else if(hash == "#login-success"){
        success_alert("LogIn, Successfully");
    }else if(hash == "#welcome-back"){
             //Used JSON.parse() cuz we are getting the data here  ,so use parse()
        let session = JSON.parse(window.localStorage.getItem('session'));//Converts a JavaScript Object Notation (JSON) string into an obje
     
        let email = session.data.email;
        success_alert(email + ", Welcome Back.");
    }

})();

