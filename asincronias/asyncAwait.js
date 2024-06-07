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

async function main() {
    try{
    accumulate = await sum(accumulate, 1)
    accumulate = await sum(accumulate, 11)
    accumulate = await sum(accumulate, 2)
    console.log(accumulate);
    
    }catch(err){

        console.log(err.msg);
    }
}

main();