function cursorEffect(){
    var cursor=document.querySelector("#cursor");
var page1Content=document.querySelector("#page1-content");


// page1Content.addEventListener('mousemove',(f)=>{
//     cursor.style.left=f.x+"px";
//     cursor.style.top=f.y+"px";
// })
page1Content.addEventListener('mousemove',(dets)=>{
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y
   })
})

page1Content.addEventListener('mouseenter',(dets)=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
       })
})

page1Content.addEventListener('mouseleave',(dets)=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}

cursorEffect();