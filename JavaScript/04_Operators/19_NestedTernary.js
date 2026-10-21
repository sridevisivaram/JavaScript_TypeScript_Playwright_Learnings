let age = 17;
let can_I_go = (age>18) ? (age>21 ? "Go and drink" : " Go and No Drink") : "No Go";
console.log(can_I_go);

let status_code = 303;

let category = status_code<300 ? "success" :
            status_code< 400 ? "Redirect" :
             status_code<500 ? "Client_Error" : "Server_Error";

             console.log(`Status ${status_code} : ${category}`);
  
let temp = 5;

let climate = temp >= 40 ? "Hot" :
    temp>=30 ? "Moderate" : 
     temp>=20 ? "Cool" :
      temp >=10 ? "cold" : "Freezing";

console.log(`temp - ${temp} ; climate - ${climate}`)


