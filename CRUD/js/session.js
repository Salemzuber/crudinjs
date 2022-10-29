
(function () {
    let session = window.localStorage.getItem('session');
    if ((session == null) && (typeof (session) == 'object')) {
        console.log('session does not exist');



    
          //logut from all pages if logut from one page   -->dashboard, myprofile,change-password
          SecureRoutes.forEach(function(pagename,index){
            if(page_location ==  getBaseurl(pagename+'.html')){

                window.location.href = getBaseurl('login.html#session-expired');
            }


          });

    

        }else {
        console.log('session exist');
        if (page_location == getBaseurl('login.html')) {
            window.location.href = getBaseurl('dashboard.html#welcome-back');
        } 



        // for each pagename in  SessionRoutes 
         SessionRoutes.forEach(function(pagename ,index){

         if(page_location == getBaseurl(pagename+ '.html')){
            console.log('check');
            let myinfo = $("#myinfo");
            let session = JSON.parse(window.localStorage.getItem('session'));
            let name = session.data.name;
            let email = session.data.email;
            myinfo.innerHTML = "<b> Name :" + name + " <br/> Email :" + email + "</b>";
           
        }

         })
    }
})();

