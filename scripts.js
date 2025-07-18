 const sent=[
   "hello wolrd",
   "This is Sanjai",
   "Tomorrow is Dream ,yesterday memories, Today only Real!",
   "Welcome Back Bro",
   "Mind Your Business"
   ]
   
   function generatefunc(){
       
       let randomNum =  Math.floor(Math.random()*sent.length)
       document.getElementById("h1").textContent=sent[randomNum] 
     
   
}   
