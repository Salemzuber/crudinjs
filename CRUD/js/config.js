"use strict"; //strict mode

//settings:-
//URL : / forward slash mandatory.

/*  
EXPANATION CONFIG.JS

1.Create a const var of LOCAL_BASE_URL and paste your system url --->/C:/Users/salma/Desktop/CRUD/'
2.Create a const var of SERVER_BASE_URL and paste your server url --->http://127.0.0.1:5500/

3.Create a const var of protocol  and use concept of ternary operator   
syntax is  condition   ?   statement 1  for true condition : sttement 2 for false  condition

window.location.protocol == 'file:  --> 
hamare paas do prtoolcs hai.
1. file
2.http
  agr window.lo cation.protocol equal hai file ke then  yeh use kro---->  LOCAL_BASE_URL
  agr window.lo cation.protocol equal hai https ke then  yeh use kro---->  SERVER_BASE_URL

  SO , agr if ki condition true hai means agr window.location.protocol == 'file hai toh protocol  ki value  LOCAL_BASE_URL hogi
       false ke liye ----> SERVER_BASE_URL


4. Create a const var of page_location isme phir ek ternary  operator ka use huva hai 
 
agr condition  window.location.protocol == 'file: means agr protocol file hai tab  

 agr proocol file hai tab means true  -->  window.location.pathname(returns -->system ka location aise--->file:///C:/..../.../......pagename.html)  ko page_location me store krdo
 agr protcol http hai tab means false  -------> window.location.origin(returns--> 'http://127.0.0.1:5500') + window.location.pathname(return --->/pagekanaam.html )---> tabhi toh  aise hota hai--->http://127.0.0.1:5500/pagekanaam.html


*/
const LOCAL_BASE_URL = '/C:/Users/salma/Desktop/CRUD/';
const SERVER_BASE_URL = 'http://127.0.0.1:5500/';

const security = {
   'attempt':{
    'change-password':  3,    
    'login': 3,              

   }
  };


const protocol = (window.location.protocol == 'file:')? LOCAL_BASE_URL : SERVER_BASE_URL;

const page_location = (window.location.protocol == 'file:')? window.location.pathname : window.location.origin + window.location.pathname;  

var SERVER_ENV = {
    'protocol': window.location.protocol,
    'BASE_URL' : protocol,
};


// for displaying  username and email on pages , baar baaqr use kro function 
//kal ke din agr koi new page add krna ho then write pagename.
var SessionRoutes = [  'dashboard', 'myprofile','change-password'   ];

var SecureRoutes = [  'dashboard', 'myprofile','change-password'   ];








