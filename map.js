
// console.log('a');

// console.log('b');

// setTimeOut(() => console.log('c'), 3000)

// setTimeOut(() => console.log('d'), 0)

// console.log('e');


let condition = true;
 
function time(s){
    return new Promise(function(resolve, reject) {
        if(condition){
            resolve(s)
        }
        else
            reject(console.log("Error"))
    })
}
 
async function f1(){
    
    console.log("a");
    console.log("b");
    await time(3000);
    console.log("c");
    await time(0);
    console.log("d");
    console.log("e");
 
}
 
f1();