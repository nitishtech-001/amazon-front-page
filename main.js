
/* MAKING SLIDE EFFECT ON CLICK ON BOTTONS */
const img=document.querySelectorAll(".header-slider ul img")
const prev_btn=document.querySelector(".control-prev");
const next_btn=document.querySelector(".control-next");
let n=0;
function changeSlide(){
    for(let i=0;i<img.length;i++){
        img[i].style.display='none';
    }
}

changeSlide();
img[0].style.display="block";
prev_btn.addEventListener("click",()=>{
    img[n].style.display="none";
    n--;
    if(n<0){
        n=img.length-1;
    }
    img[n].style.display="block";
});
next_btn.addEventListener("click",()=>{
    img[n].style.display="none";
    n++;
    if(n>=img.length){
        n=0;
    }
    img[n].style.display="block";

});


/* MAKING THE PRODUCt SCROLL WITH MOUSE WHEEL */
const scrollContainer=document.querySelectorAll(".products");
for(const item of scrollContainer){
    item.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
}

