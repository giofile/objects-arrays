const age = 18
let name = "Brom";


if (age >= 18 && age < 26){
 console.log("Je krijgt 50% korting!");
} else {
    console.log("volledige prijs")
}


if( name === "Sarah" || name==="Bram"){
    console.log("u ontvangt gratis een glaasje bier");
} else{
    console.log("volledige prijs");
}


let totalAmount = 100;

if(totalAmount > 25 && totalAmount < 51 ){
    console.log(" Free bitterballs");
}else if (totalAmount >50  && totalAmount < 101 ){
    console.log("Free portion of Nachos");
}else if(totalAmount > 100 ){
    console.log("Free bottle of champaign");
}else{
    console.log("geen extra's");
}




