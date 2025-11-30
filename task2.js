let numbers=[1,2,3,4]

let new_num=[]
for (let i =0; i<numbers.length;i++){
    new_num.push(String(numbers[i]))
}

console.log(new_num);

let add = (a,b) => {
    return a+b;
}

console.log("result = ",add(10,40)); 