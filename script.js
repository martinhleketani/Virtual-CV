// Upload profile picture

const imageUpload = document.getElementById("imageUpload");

const profilePreview = document.getElementById("profilePreview");


imageUpload.addEventListener("change", function(){


const file = this.files[0];


if(file){


const reader = new FileReader();



reader.onload = function(e){


profilePreview.src = e.target.result;


}



reader.readAsDataURL(file);


}


});




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
