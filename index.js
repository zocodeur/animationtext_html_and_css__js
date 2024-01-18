const secondeText=document.querySelector(".seconde-text");
console.log(secondeText.innerHTML + "v hv")
function pushTest(){
    setTimeout(()=>{
        secondeText.innerHTML="salut0"
    },0);
    setTimeout(()=>{
        secondeText.innerHTML="salut1"
    },3000);
    setTimeout(()=>{
        secondeText.innerHTML="salut2"
    },6000);
    setTimeout(()=>{
        secondeText.innerHTML="salut3"
    },9000);
}
pushTest(); 
setInterval(pushTest,12000);