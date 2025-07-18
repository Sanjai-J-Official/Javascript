// let num=parseInt(prompt("Enter the Number:"))
// if (num % 3===0 && num % 5 === 0){
//     console.log("This is fizz - buzz number");
// }


// else if ( num % 3===0){
//  console.log("This is fizz number");

// }

// else if (num % 5 ===0){
//     console.log("This is Buzz number");
// } 

//----------------------------------------------------------------------

// Discount Amount 

// let amount = parseInt(prompt("Enter the Amount:"))
// if (amount >6000) {
//     var discount = amount - amount*0.25   
    

//     console.log(` Current amount ${amount}, Discount amount:${discount}`)
// }

// else if (amount > 4000) {
//     console.log(" 20% discount ")
//       var discount = amount - amount*0.2  
//      console.log(` Current amount ${amount}, Discount amount:${discount}`) 
// }

// else if (amount > 2000) {

//     console.log(" 10% discount ")
//       var discount = amount - amount*0.1
//      console.log(` Current amount ${amount}&,Discount amount:${discount}`) 

// }
// else if (amount < 2000) {
//     console.log(" 5% discount ")
//     var discount = amount - amount*0.05   
//      console.log(` Current amount ${amount}, Discount amount:${discount}`)
    

// }

// let username="sanjai"//prompt("Enter the Username")  
// if (username){
// console.log(`Username:${username}` ) 
// }
// else{
//     console.log("Hello Guest")
// }



//---------------------------------------------------------------------------
// let username=prompt("Enter the Username")  
// console.log(`Hello ,${username || "Guest"}`)

//------------------------------------------------------------------------------

// let age=parseInt(prompt("Enter the Age:"))

// console.log( `Yes i would like to have a glass ${age >18 ? "drink" : "milk"}`) 
// console.log(age >18 ? 
//     "Yes i would like to have a Cococola  " : 
//     "Yes i would like to have a glass milk" )
    
//------------------------------------------------------------------------------

// let status=true;
// console.log(`Status: ${status ? "Online": "Offline"}`)
//------------------------------------------------------------------------------
// debugger;
// sum(20,45)
// function sum(){
    //     console.log(10+20)
    // }
    // sum(20,45)
    
    // function sum(){
        //     console.log("20+36")
        // }
        // sum(20,45)
        
        // console.log("  Ending------")
        // sum(20,45)
//------------------------------------------------------------------------------

// debugger;
// news()
// function news(){
    //     console.log("This is FUnction scope")
    // }
    // console.log("This is FUnction scope")
    
// ------------------------------------------------------------------------------
// debugger;
// function sum(a,b){
//     console.log("Execution")
//     return a*b
// }
// let res=sum(10,20)
// console.log(res)

// ------------------------------------------------------------------------------
 
// function greet(name="Guest"){

//     console.log(`Hello ,${name || "Hii"} buddy----`)
// }
// greet("python")
// greet()
//------------------------------------------------------------------------------
// function sum(a=10,b=a,c=a){
//     console.log(a+b+c) 
// } 

// sum()
// sum(20)
// sum(10,20)
// sum(10,20,30)

//------------------------------------------------------------------------------
// // debugger;
// // var a=10;
// // let b=20;
// // const c= 30;
// // if (true){
// //     var a1=40;
// //     let b1=50;
// //     const c1= 60;

// // }

// // function demo(){

// //     var a2=70;
// //     let b2=80;
// //     const c2=90;

// // }
// // demo()
// //------------------------------------------------------------------------------
// // let sum =(a,b)=>a+b
// // console.log(sum(10,34))

// // //------------------------------------------------------------------------------
// // let sums = function summs(a,b){
// //     console.log(a+b)

// // }
// // sums(12,12)

// //------------------------------------------------------------------------------

// // let sum = (a,b)=> {
// //     return a+b*b+a

// // }
// // console.log(sum(12,12))
// //------------------------------------------------------------------------------

// // (function div(a,b){
// //     console.log(`This is IIFE function ${a/b}`)
// // }
// // )(12,23)
// //! Higer Order  Function
// // function sum(a,b){
// //     console.log(a+b)
// // }

// // function op(p1,p2,p3){ //  op as higher order function
// //     p1(p2,p3);
// // }
// // op(sum,34,34)
//  // sum as call back function
// //------------------------------------------------------------------------------
 

// function gp(){
//     let gpGold=10;

//     function p(){
//         let pGold=20;

//             function child(){
//                 let myGold=40;

//                 console.log(gpGold+pGold+myGold)
//         }
//              function child1(){

//                 console.log(gpGold+pGold+myGold)

//         }
//        child()
//     }
//     p()
// } 
// gp()

 

//------------------------------------------------------------------------------
// function counter(){

//     let count=1
//     return function(){
//         console.log(count++)
//     }
// }
// let res=counter();
//     res();
//     res();
   
   
 let s1= 23
 let s2 = "Hello"
 console.log(s1=s2)
 let s3 =new String("Hello")
 let s4 =new String("Hello")
console.log(s3===s4);
console.log(s1==s4);
console.log(!' '==false);
console.log(""==false);
console.log(""==false);



//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
