
var curLocation=location.href;
var menuItem=document.getElementsByClassName('nav-link');
var menuLength=menuItem.length;
for (let i=0;i<menuLength;i++){

    if(menuItem[i].href===curLocation){

        menuItem[i].classList.add("activee");
    }
}