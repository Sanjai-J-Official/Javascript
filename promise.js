let isNetwork=true

function movieDonwload(){
    console.log("Download start...!");
    
       return new Promise ((res,rej)=>{
        if (isNetwork){
            res("Movie Downloading.....")    
        }
        else{
            rej("NO internet.. check internet connection")
        }
       });
}

async function watchMovie(){
    let data = await movieDonwload().then((mess)=>{console.log(mess);
     }).catch((error)=>{console.log(error);
     })

    console.log("You can watch movie---!")
     
}
watchMovie()