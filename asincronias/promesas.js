function sum(accumulate, value,) {

    let sum;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(value == 2) return reject({msg: "numero dos no aceptable"});
            sum = accumulate + value;
            resolve(sum);
        }, 1000);
    });
}




let accumulate = 0;

sum(accumulate , 1).then(function(result) {
    console.log(result);
    return sum(result,1)
})
.then(function (result) {
    console.log(result);
    return sum(result,1)
})
.then(function (result) {
    console.log(result);
    return sum(result,1)
})
.then(function (result) {
    console.log(result);
    return sum(result,1)
})
.then(function (result) {
    console.log(result);
    return sum(result,1)
})
.then(function (result) {
    console.log(result);
    return sum(result,2)
})
.then(function (result) {
    console.log(result);
})
.catch(function(err){
    console.log(err.msg);
})

