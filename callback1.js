function calls(name,callback){
   let msg = "Hello " + name; 
   callback(msg)
    
}

calls("jai",(msg)=>{console.log(msg);}
) 

function mainfunC(callbacks){
    setTimeout(()=> {
      callbacks("Hiii");
    },2000)
    
}

mainfunC((msg)=> {console.log(msg+ " Hello")}
)

let numbers =[10,20,30,40]

console.log(numbers.map((number)=>number*10));

function calc (a,b,cb){
    if (b==0){
        cb("Cannot Divide",null);
    }
    else cb(null, a/b) 
}
calc(10,0,(err,result)=> {if(err){
    console.log(err);
}
else {
    console.log(result);
    
}})


function step1(cb){
    setTimeout(()=>{cb("Step 1 Done")
    },2000)
}
function step2(cb){
    setTimeout(()=>{cb("Step 2 Done")
    },2000)
}
function step3(cb){
    setTimeout(()=>{cb("Step 3 Done")
    },2000)
}

step1((msg)=>{console.log(msg);
    step2((msg)=>{console.log(msg);
    step3((msg)=>{console.log(msg);
    });
    });
} );