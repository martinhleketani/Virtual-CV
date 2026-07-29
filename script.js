// Profile picture upload with permanent browser storage

const imageUpload = document.getElementById("imageUpload");

const profilePreview = document.getElementById("profilePreview");


// Load saved image when opening website

window.onload = function(){

const savedImage = localStorage.getItem("profileImage");


if(savedImage){

profilePreview.src = savedImage;

}

};



// Upload new image

imageUpload.addEventListener("change", function(){


const file = this.files[0];


if(file){


const reader = new FileReader();



reader.onload = function(e){


profilePreview.src = e.target.result;


// Save image permanently

localStorage.setItem(
"profileImage",
e.target.result
);


};



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
