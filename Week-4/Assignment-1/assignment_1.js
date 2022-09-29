function getNumber(){
  return Math.floor(Math.random() * 100)
}

const p = new Promise((resolve, reject)=>{
   const num = getNumber();
   if (num % 5 === 0){
    reject("Number is not divisible by 5")
   }else{
    resolve("Number is divisible by 5")
   }
})

