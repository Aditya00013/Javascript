// console.log('Chaliye Shuru krte hai *_*');

// //object create
// let rectangle = {
//     length:1,
//     breadth:2,


// draw:function(){
//     console.log('draw the Reactangle');
// }
// };

// console.log('Chaliye Shuru krte hai *_*');

// //object create
// let rectangle1 = {
//     length:1,
//     breadth:2,


// draw:function(){
//     console.log('draw the Reactangle');
// }
// };

// console.log('Chaliye Shuru krte hai *_*');


// //object create
// let rectangle2 = {
//     length:1,
//     breadth:2,


// draw:function(){
//     console.log('draw the Reactangle');
// }
// };


// function createRectangle(len, bre){

//     return rectangle = {
//         length: len,
//         breadth:bre,

//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5,4);


//constructor function --> Pascal Notation --> First letter of every world is capital. --> NumberOfStudents
//Camelcase -->  numberOfStudents


function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw= function(){
        console.log('Drawing');
    }
}

