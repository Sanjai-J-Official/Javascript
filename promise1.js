function fetching(){
    return "This is my data"
}

function waitingfunc1(){
    let data= fetching();
    console.log("Data gathering..!");
    console.log("Data fetch..",data)
}

waitingfunc1();
 