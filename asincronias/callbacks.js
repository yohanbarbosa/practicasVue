function sum(accumulate , value , callback){

let sum;

setTimeout(() => {
    sum  = accumulate + value;
    callback(sum);
}, 1000);

}

console.log('first the program');

let accumulate = 0 ;
 
sum(accumulate , 1 , function (result) {
  
    sum(result , 1 , function (result) {
    console.log(result);
    });
})

console.log('at the end of the program');
