let names_lis=[{name:"sanjai",age:23},
    {name:"Abi",age:25},
    {name:"hari",age:23},
]


async function getName(){
    return setTimeout(()=>names_lis.name,2000)

} 

console.log(getName().then(()=>console.log("Jia")));