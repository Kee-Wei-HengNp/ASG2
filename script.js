//home page
//nav 

const { json } = require("stream/consumers");

let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{   
    navbar.classList.toggle("active");
}
    

window.onscroll = () =>
{
   
    navbar.classList.remove('active');
}




//reviews
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assignment2-054c.restdb.io/rest/reviews",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63e23aa03bc6b255ed0c478",
      "cache-control": "no-cache",
      
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


  
  JSON.parse(`[
      {
        "name":"johnny",
        "feedback":"OVERALL, MY ENERGY LEVEL IS WAY UP... I feel great. I think I look great. I have personal confidence."
      }
    ]`

    `[
      {
        "name":"michael",
        "feedback":"90 DAYS IN AND I’VE LOST 40 POUNDS... So I'm starting to incorporate big arms and clean bulk and see what happens since I’ve had such good results."
      }
    ]`

    `[
      {
        "name":"susan",
        "feedback":"You're going to have constant support from your trainer through thick and thin. And from my experience it just feels really great when you're going on a journey like this with support from someone else."
      }
    ]`

);  


//accounts
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assignment2-054c.restdb.io/rest/accounts?max=2",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63e23aa03bc6b255ed0c478",
    "cache-control": "no-cache",
    
  }
}
$.ajax(settings).done(function (response) {
  console.log(response);
});

JSON.parse(`[
  {
    "email":"yw3ih3ng2005@gmail.com",
    "name":"wh",
    "password":"20050919"
  }
]`
);







    



//slide mechanic
  let slide = document.querySelectorAll('.reviews .slide-container .slide');
  let index = 0;

  function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('acttive');
  }

  function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('acttive');
  }







    
    
    

    

   
    
