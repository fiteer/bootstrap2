
// chech color

let maincolors=localStorage.getItem("color-option");

if(maincolors !==null){
    document.documentElement.style.setProperty('--main-color',maincolors);

    // remove active 

    document.querySelectorAll(".color-list li").forEach(element =>{
        element.classList.remove("active");

        // add active

        if(element.dataset.color===maincolors){
            element.classList.add("active")
        }

      });
}

// random background option

let backgroundOption = true;

// varible to control background interval

let backgroundIntervaL;

// chick if there is local storage random background item

let backLocalItem = localStorage.getItem("background_option");
 // chick if random background

 if(backLocalItem !==null){
     if(backLocalItem==='true'){
        backgroundOption=true;
     }
     else{
        backgroundOption=false;
     }
     document.querySelectorAll(".random-background span").forEach(element =>{
        element.classList.remove("active");
     });

     if(backLocalItem==='true'){
         document.querySelector(".yes").classList.add("active");
     }
     else{
        document.querySelector(".no").classList.add("active");
     }
 }

// Toggle Spin Class Icon

document.querySelector(".toggle-setting .fa-gear").onclick = function(){

    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}

//switch colors

const colorli=document.querySelectorAll(".color-list li");

colorli.forEach(li =>{
    li.addEventListener("click", (e) =>{
        

        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

        localStorage.setItem("color-option",e.target.dataset.color);

        handleActive(e);
    });
});

//switch rundom backgrounds

const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach(span =>{
    span.addEventListener("click", (e) =>{

        handleActive(e);

        if(e.target.dataset.background==='yes'){
            backgroundOption=true;
            randomizeImg();
            localStorage.setItem("background_option",true);
        }
        else{
            backgroundOption=false;
            clearInterval(backgroundIntervaL);
            localStorage.setItem("background_option",false);
        }
    });
});

// select leanding page
let img=document.querySelector(".heading-page");

// get array

let imageArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

//function to randomize
function randomizeImg(){
    if(backgroundOption===true){
        // cheange backgruond image url

        backgroundIntervaL = setInterval(()=>{

          let RandomNumber=Math.floor(Math.random()*imageArray.length);
          img.style.backgroundImage='url("image/'+imageArray[RandomNumber]+'")';
    
        },1000);
    }
}
randomizeImg();

// create popup

let ourPopup = document.querySelectorAll(".content .one img");
ourPopup.forEach(img=>{

    img.addEventListener('click',(e)=>{
       let overlly=document.createElement("div");
       overlly.className='popup-overlly';
       document.body.appendChild(overlly);
       let popupBox=document.createElement("div");
       popupBox.className='popup-box';
       let imgheaging=document.createElement("h3");
       let imgtext=document.createTextNode(img.alt);
       imgheaging.appendChild(imgtext);
       popupBox.appendChild(imgheaging);
       let popupImage=document.createElement("img");
       popupImage.src=img.src;
       popupBox.appendChild(popupImage);
       document.body.appendChild(popupBox);
       let closeBottom=document.createElement("span");
       let closeBottomText=document.createTextNode("X");
       closeBottom.appendChild(closeBottomText)
       closeBottom.className='close-button';
       popupBox.appendChild(closeBottom);

    });

});

document.addEventListener("click", function(e){
    if(e.target.className=='close-button'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlly").remove();
    }
});

// select all bullets

const allbullets=document.querySelectorAll(".nav-bullets .bullet");

// select all links

const alllinks=document.querySelectorAll(".links a");

function scrollToSomewhere(elements){
    elements.forEach(ele =>{

        ele.addEventListener("click",(e)=>{
            
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
               
            }); 
        });
      
    });
}
scrollToSomewhere(allbullets);
scrollToSomewhere(alllinks);
// function handle active
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
      });

      ev.target.classList.add("active");
}

// toggle menu
let toggleBt=document.querySelector(".toggle-memu");
let tlinks=document.querySelector(".links");
toggleBt.onclick=function(){
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
}
