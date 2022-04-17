const test2 = (age) =>{
    switch (true) {
        case (age < 10):
        console.log("you are child");
        break;
        case (age < 18 && age > 10):
        console.log("you are teen");
        break;
        case (age > 18 && age < 40):
        console.log("you are yung");
        break;
        case(age > 40):
        console.log("you moving towards old");
        break;
        default:
        console.log('you are dead');
    }
    console.log("go to hell");
};
test2(20);

// for(var a = 1; a <= 20; a++){
//     if(a % 2 == 0){
//         console.log(a);
//     }
// }


for(var a = 4 ; a <= 80; a++){
    if(a % 4 == 0){
        console.log(a);
    }
}
let b=10;
let c=20;
let d = c;
c=b;
b=d;
console.log('Value of b: ' + b + "\n" + 'Value of c: ' + c);
console.log(`the value of b is  ${b} and the of value of c is ${c} . `);

