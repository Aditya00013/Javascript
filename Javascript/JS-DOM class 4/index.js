//EXAMPLE OF SYNCHRO.. Code

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');


// setTimeout(function(){
//     console.log('Third');
// })
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

// THIS IS HOW TO CREATE AN ASYNC FUNCTION:-

// async function abcd(){
//     return "Aditya";
// }

// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bohot garmi hai");
//         },1000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },5000);
//     });
 
//     let dM =   delhiMausam;
//     let hM =   hydMausam;

//     return[ dM, hM];
// }



    // FETCH API
let obj = {
    heading:"head"
};        
async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}  
utility();