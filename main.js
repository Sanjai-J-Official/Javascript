

let a= 10;
let b= 20;
let c= "30";
console.log(a+b+c);

/*Call back func */

let arrowfunc = (a,b) => {
    console.log("Hello world" + a+b);
    
} 
arrowfunc(" Node", " Js") 

let age =18;
let citizen ="Indian"

if (age>=18 || citizen === "Indian"){
    console.log("You are eligible for voting");
}
else{
    console.log("Not eligible for voting");
    
}

for (let i=0;i<5 ;i++){
    console.log(i);
    
}

let j= 0;
while (j<5){
    console.log(j);
    j++
    
}

let fruits= ["Apple", "Orange","Banana"]

console.log(fruits[1][3]);

console.log(fruits);
fruits.push("Graphs")

console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift("Hello")
console.log(fruits);

let newObj={
    name:"Javascript",
    Ver:"1.2"
};
console.log(newObj.name);
console.log(newObj["Ver"]);


setTimeout(()=>{
    console.log("Hello wait a min!");    
},2000,)


console.log("Before Waiting");
