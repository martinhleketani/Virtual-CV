// Smooth scrolling

document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",function(e){

e.preventDefault();


document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});


});


});





// CV download message

const cv=document.querySelector(
'a[href="Martin_Chabalala_CV.pdf"]'
);


if(cv){


cv.addEventListener("click",()=>{

console.log("CV opened");

});


}
