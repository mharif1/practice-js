// const my = 80;
// const Tom = 66;
// const Jane = 95;
// const Peter = 56;
// const John = 40;
let numbers =[80, 66, 95, 56, 40];
 
for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];

    if(number >= 80){
        console.log('you got A grade')
    }
    else if(number >= 60){
        console.log('you got B grade')
    }
    else if(number >= 50){
        console.log('you got C grade')
    }
    else if(number >= 40){
        console.log('you got D grade')
    }
    else {
        console.log('F grade')
        }    
    
}

