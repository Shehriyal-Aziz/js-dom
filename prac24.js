// create counter(10-1) using settime interval 


let count = 10;
let int = setInterval(()=>{
    if(count >=1){

        count--;
        console.log(count);
    }else clearInterval(int);
},1000)

