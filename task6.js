let names= [{name:"sanjai",age:23},
    {name:"abi",age:21},
    {name:"kavi",age:25}]
let new_arr= names.map((person)=>person.name)
console.log(new_arr);

let lis=[{id:1,name:"sanjai",age:21},
    {id:2,name:"abi",age:23},
    {id:3,name:"kavi",age:25}]

console.log(lis.find((person)=>person.id==2));
