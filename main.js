
var theDate = new Date();
theDate.setDate(31);
console.log(theDate);


/**
 * getDate()
 */
// var theDate = new Date(),
//     theDay = theDate.getDate();
// console.log(theDay);

/**
 * getDay()
 */
// var theDate = new Date("25 oct 1982"),
//     theWeek = theDate.getDay();
// console.log(theWeek);

/**
 * getFullYear();
 * getHours();
 * getMinutes();
 * getSeconds();
 * getMilliseconds();
 * getTime();
 * getTimezoneOffset();
 */
// var theDate = new Date(),
//     // theYear = theDate.getFullYear();
//     // theHours = theDate.getHours();
//     theMinutes = theDate.getMinutes(),
//     theSeconds =theDate.getSeconds(),
//     theMilliSeconds = theDate.getMilliseconds(),
//     theTime = theDate.getTime(),
//     theTimes = theDate.getTimezoneOffset();
// console.log(theTimes);


/*
// full format
// long format
*/
// var myDate = new Date(1995,4,10,12,50,20,10);
// console.log(myDate);

/*
// short format
*/
// var myDate = new Date("5/15/1995");
// console.log(myDate);

/**
 * Iso format
 */
// var myDate = new Date("1995-5-10 12:30:20+03:00");
// console.log(myDate);

// var string = "I Love PHP and JavaScript",
//     result = string.replace(/[A-Z]/g, "@");
// console.log(result);



// var x = Math.random(),
//         myEndPattren = 10;
// console.log(Math.floor( ( x * myEndPattren ) + 1 ));


// var x = Math.max(100, 200, -100.5, 20, -90, 1000.20);
// console.log(Math.floor(Math.round(x)+ 10.5));


// var x = Math.round(2.3);
// console.log(x);


// var x = Math.floor(2.9);
// console.log(x);


// var x = Math.ceil(2.1);
// console.log(x);


// var i, x;
// MainLoop:
// for(i = 1; i <= 5; i++){
//     ChildLoop:
//     for(x = 15; x <= 20; x++){
//         if(x === 17){
//             break ChildLoop;
//         }
//         console.log(i + " => " + x);
//     }
// }



// var i;
// for(i = 1; i <= 20; i++){
//     if(i === 4){
//         continue;
//     }
//     console.log(i);
// }


// function generateYears(start, end){
//     "use strict";
//     var years = start;
//     document.write("<select>");
//      do{
//          document.write("<option value=\"" + years + "\">" + years + "</option>");
//          years++
//      }while(years <= end);
//     document.write("</select>")
// }
// generateYears(1990, 2020);
// generateYears(1900, 2000);


// var i = 0;

// for(;;){
//     if(i > 10) break;
//     console.log(i);
//     i++;
// }




// var myCar = {
//     color: "white",
//     type:  "sedan",
//     price: "30,0000",
//     model: "2020"
// };
// var prop;
// for(prop in myCar){
//     if(myCar.hasOwnProperty(prop)){
//         console.log(prop + ": " + myCar[prop]);
//     }
// }



// var firends = ["fiteer", "assad", "taha", "khaled"];

// for(i=0; i < firends.length; i++){
//     console.log(firends[i]);
// }



// var myString = 120000,
//     myNewString = myString.toString().replace(/0/g, 1).split("");
// console.log(myString);
// console.log(myNewString);



// var myString = "Google";
// console.log("Go To Google By This Link => " + myString.link("http://www.google.com"));


// var myString = "        Hello I'm Fitter           ";
// console.log(myString.trim());


// console.log("I Love PHP".toLowerCase());
// console.log("Hello I'm Fitter".toUpperCase());


// var myMessage = "Hello I Love",
//     myMessage2 = "PHP And JavaScript",
//     AllMes = myMessage.concat(" ", myMessage2, " And Css");
// console.log(AllMes);

// var myAll = "Hello I Love".concat(" ", "PHP And JavaScript", " And Css");
// console.log(myAll)



// var myMessage = String.fromCharCode(70, 105, 116, 116, 101, 114);
// console.log(myMessage)


// var myString = "I Love JavaScript Too Much JavaScript Is Very Fun",
//     myReplace = myString.replace(/JavaScript/g, "PHP");
// console.log(myString);
// console.log(myReplace);



//  var myMainString = "Fitter",
//      myCharCode = myMainString.charCodeAt(5);
//      console.log(myCharCode);

//     mySubString = myMainString.substring(19, 7);
// console.log(myMainString);
// console.log(typeof(myMainString));
// console.log(mySubString);
// console.log(typeof(mySubString));


//     mySubString = myMainString.substr(7, 18);
// console.log(myMainString);
// console.log(typeof(myMainString));
// console.log(mySubString);
// console.log(typeof(mySubString));


    // mySlicedString = myMainString.slice(-3);
    // console.log(myMainString);
    // console.log(typeof(myMainString));
    // console.log(mySlicedString);
    // console.log(typeof(mySlicedString));



    // MySplittedString = myMainString.split(" ");
    // console.log(myMainString);
    // console.log(typeof(myMainString));
    // console.log(MySplittedString);
    // console.log(typeof(MySplittedString));



// var myString = "I'm In Love With JavaScript And I'm In Love In With PHP",
//     myWord = myString.lastIndexOf("Love", 38);
// console.log(myWord);
//     myWord = myString.search(/love/i);
// console.log(myWord);




// var myString = "I Love \"JavaScript\"";
// console.log(myString);
// console.log(typeof(myString));
// console.log(myString.length);

// var myNumber = 100;
// console.log(myNumber);
// console.log(typeof(myNumber));

// var myNewNumber = myNumber.toString();
// console.log(myNewNumber);
// console.log(typeof(myNewNumber));



// var firends = [
//     "Assad",
//     " taha",
//     " Khaled",
//     " mohemmed",
//     " Mustafa",
//     " Ayman", 
//     " Almandop"
// ];

// console.log(firends);

// var mySlicedArray = firends.slice(2);
// console.log(mySlicedArray);
// var workFirends = [
//     "fiteer",
//     "Khlefa",
//     "Ayman"
// ];
// var otherFirends = [
//     "fiteer",
//     "Khlefa",
//     "Ayman"
// ];
// var allFirends = firends.concat(workFirends, otherFirends);
// console.log(allFirends);
// firends.sort();
// console.log(firends);
// firends.reverse();
// console.log(firends);

// console.log(firends);
// firends.shift();
// console.log(firends);

// var specialFirends = firends.indexOf("Assad");
// console.log(firends);
// var lestItem = firends.pop();
// console.log(lestItem);
// firends.pop();

// document.getElementById("all").innerHTML = 
//     "My All Firends: " + firends + ". " + "Length = " + firends.length;
//     console.log(firends);
// document.getElementById("special").innerHTML = 
//     "My Special Firend Is: " +"<span style='color:#F00'>"+ firends[specialFirends] + "</span>"; 
// var myDate = new Date(),
//     myString = myDate.toLocaleString();
// document.getElementById("time").innerHTML = 
//     "My All Firends: " + myString;
// firends[7] = " Fiteer";
// firends.push(" Khlefa");
// firends.unshift("fiteer ");
// firends.splice(3, 0, " alazric");










// var myInput = document.getElementById("input"),
//     myDiv = document.getElementById("div");
//     // myButton = document.getElementById("button");

// myInput.onkeyup = function(){

//     "use strict";
//     myDiv.innerHTML = myInput.value * 3.75;

// };



// var myInput = document.getElementById("input"),
//     myDiv = document.getElementById("div"),
//     myCurrency = document.getElementById("currency");

// myCurrency.onchange = function(){
//     "use strict";
//     myDiv.innerHTML = myInput.value * myCurrency.value;
// };




// function convertUsdToRials(){
//     "use strict";
//     var amunt = document.getElementById("dollar").value,
//     result = amunt * 3.75,
//     message = document.getElementById("message");
    

//     if(amunt === ""){
//         message.innerHTML = "This Field Empty";
//     }
//     else if(isNaN(amunt)){
//         message.innerHTML = "This Field Accept Numbers Only";
//     }
//     else if(amunt === "0"){
//         message.innerHTML = "The Value Must Not Be 0";
//     }
//     else if(amunt < 0){
//         message.innerHTML = "The Value Must Not Be Negative Number";
//     }
//     else if(amunt > 10000){
//         message.innerHTML = "The Number Is Not Of Database";
//     }
//     else{
//         message.innerHTML = amunt + " Dollar Is Worth = " + result + " Riyal";
//     }
// }


// var season = prompt("Whats The Best Season For You");

// switch (season){
//     case "Winter":
//         alert("Winter Is Too Cold");
//         break;
//     case "Summer":
//         alert("Summer Is Too Hot");
//         break;
//     case "Autumn":
//         alert("Autumn Is Very Good");
//         break;
//     case "Spring":
//         alert("Spring Is Amazing");
//         break;
//     default:
//         alert("You Didnt Enter A Season Name");
//         break;
// }












// TweenMax.set("img",{xPercent:"-50%",yPercent:"-50%"});

// var total = 70;
// var w = $("#container").width();
// var h = $("#container").height();

//  for (i=0; i<total; i++){ 
//  $("#container").append('<div class="heart1">&hearts;</div>')
//  TweenMax.set($(".heart1")[i],{x:Random(w),y:random(-100,100) ,opacity:1,scale:Random(0.5)+0.5,backgroundColor:"transparent"});
//  animm($(".heart1")[i]);
//  }
 
//  function animm(elm){   
//  TweenMax.to(elm,Random(5)+3,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
//  TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
//  TweenMax.to(elm,Random(1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
//  };

// function Random (max) {
// return Math.random()*max;
// }

// function random(min, max) {
// return min + Math.floor( Math.random() * (max - min));
// }