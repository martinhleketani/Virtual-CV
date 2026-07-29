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

const cvButton=document.querySelector(
'a[href="Martin_Chabalala_CV.pdf"]'
);


if(cvButton){


cvButton.addEventListener("click",()=>{


console.log("CV Download Started");


});


}
