
//This file will contain code for, ReadyMade functions

function getBaseurl(url=''){
    return SERVER_ENV.BASE_URL+url;
}

var thread1;
function success_alert(msg){

    let alert_spn = $("#alert");
    alert_spn.setAttribute('class','success');
    alert_spn.innerHTML = " &check; "+msg;
    alert_spn.style.display = 'block';

    thread1 = setTimeout(function(){
        alert_spn.style.display = 'none';
    }, 3000);

}


function error_alert(msg){

    let alert_spn = $("#alert");
    alert_spn.setAttribute('class','error');
    alert_spn.innerHTML = " &cross; "+msg;
    alert_spn.style.display = 'block';

    thread1 = setTimeout(function(){
        alert_spn.style.display = 'none';
    }, 3000);

}

// a-zA-Z_0-9$
function $(selector){ 
    return document.querySelector(selector); 
}

function loginUser(e){

    e.preventDefault();
    let email  = $("#email");
    let password = $("#password");
    
    let userCollection_str = window.localStorage.getItem('user_data');
    let userCollection_obj = JSON.parse(userCollection_str);
    
    let user_data = findRecord(email,password,userCollection_obj);
    if(user_data){      

        let session = {
            data:user_data,
            is_login:true,
        }
        window.localStorage.setItem('session',JSON.stringify(session));
        window.location.href = getBaseurl('dashboard.html#login-success');

    }else{
        error_alert('Invalid User Name or Password');
    }

}





function findRecord(email,password,userCollection_obj){

    let position = -1;
    var counter = 0;

        try{
            for(;;){ 
                if(  userCollection_obj[counter].email ==  email.value  &&   userCollection_obj[counter].password ==   password.value ){

                    position = counter;
                    break;

                }else{
                    counter =  counter + 1;
                }
                if(counter  ==  userCollection_obj.length){
                    break;
                }                     
            }
        }catch(err){
            console.log("Something went wrong");
        }
        
        if(position == -1){
           return false;
        }else{
           return userCollection_obj[position];  //user_email exist.
        }
}


function findUser(email,userCollection_obj){

    let position = -1;
    var counter = 0;

        try{
            for(;;){ 
                if(userCollection_obj[counter].email == email){

                    position = counter;
                    break;

                }else{
                    counter =  counter + 1;
                }
                if(counter  ==  userCollection_obj.length){
                    break;
                }                     
            }
        }catch(err){
            console.log("Something went wrong");
        }
        
        if(position == -1){
           return false;
        }else{
           return position;
        }
}