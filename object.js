var Citizen ={ Name: "Abhishek roy", Nationality: "Bangladeshi", Id: 190232010, District: "Chattogram"  }
var Citizen2= {Name: " Eshan Roy", Nationality: "Indian", Id: 190232020, District: "kalkatha"}
var find1= Citizen.Nationality;
var find2= Citizen2.Id;
Citizen2.Nationality= 'African'
Citizen.BankBalance= 200000;

console.log(Citizen)
console.log(Citizen2)
console.log(find1)
console.log(find2)

console.log( find1,find2)
console.log( Citizen2.Nationality)
console.log(Citizen.BankBalance)


// Function//** 
function man(){
    var he= 100;
    var she= 200;
    var total= he + she;
   

    console.log(total)
}

man()



function add(a,b,c){
    var total= a / b * b * c + a;
    console.log(total)
}
add(30,6,3)


function number (x,y,z){
    var add= x+y/z/x*x;
    console.log(add)

}
number( 10,20,30 )

// for loop//*****/

var Man= [ "Abhishek Roy", " Rafi", " Eshan", " Priya", " Riya "   ];
for( i= 0; i < Man.length; i++){
var limit= Man[i];
console.log( limit)
}




var array=[ "Cricket","Football", "Tenis","Batminton"  ];
for( i=1; i < array.length; i++){
    var player= array[i];
    console.log(player);

}


