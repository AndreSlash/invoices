let btnp=document.getElementById("plus");
let btns=document.getElementById("sub");
let counter=document.getElementById("counter");
let total=document.getElementById("total");
const val2=30;
total.value=val2;
btnp.addEventListener("click",()=>{
    console.log(1)
    let val=counter.value*1;
    val+=1;
    counter.value=val;
    total.value=val2*val;
    console.log(2)
})
btns.addEventListener("click",()=>{
    let val=counter.value*1;
    if(val<=1)
    return;
    else{
        val-=1;
        counter.value=val;
        total.value=val2*val;
    }
})

