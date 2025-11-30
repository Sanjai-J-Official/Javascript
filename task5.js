let products =[
   { name:"TV",status:true},
    { name:"Mobile",status:false},
    { name:"Laptop",status:true},
    { name:"Tablet",status:false},
    { name:"Monitor",status:false},
] 

let active_products= products.filter((products)=>products.status==true)
let active_products_count= products.filter((products)=>products.status==true).length

console.log(active_products);
console.log(active_products_count);
