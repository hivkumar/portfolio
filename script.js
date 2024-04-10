function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

 var cursor = document.querySelector(".cursor");
 var main=document.querySelector("#main");

 document.addEventListener("mousemove", function(dets){
  cursor.style.left = dets.x+ 10+"px"
  cursor.style.top = dets.y+ 10+"px"
 })




//  before scrollTrigger//

var bf = gsap.timeline();
bf.from("#nav h3",{
    x:-50,
    opacity:0,
    duration:1,
   
},"match")

bf.from("#nav h5, #circle",{
    x:60,
    opacity:0,
    duration:1
},"match")

bf.from("#page1 h1 , #page1 h2",{
     y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
},"match")

bf.from("#page1 h3",{
  y:10,
  rotate:10,
  opacity:0,
  duration:1.5,

},"match")



// After scrollTrigger page 1

var tl= gsap.timeline({scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
   
    start:"top 22%",
    end:"top 10",
    scrub:3
   }})

tl.to("#page1 h1",{
     x:-50,
},"anim")

tl.to("#page1 h2",{
    x:50,
},"anim")


tl.to("#page1 img",{
   
    width:"80%",
    scale:1.3
},"anim")


//page 2 animation

var tla=gsap.timeline({scrollTrigger:{
  trigger:".page2 .box-left",
  scroller:"#main",
  // markers:true,
  start: "top 60%",
  end:"top 40%",
  scrub:3
}})

tla.from(".page2 h1",{
  y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
    
    
  },"page2")

  tla.to(".page2 .box-left",{
    x:40,
    
    
},"pg2")

tla.to(".page2 .box-right",{
  x:-40,
  
  
},"pg2")


//page 3 animation part1

var tlb= gsap.timeline({scrollTrigger:{
    trigger:".page3 .part1",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 20%",
    scrub:3
}})

tlb.from(".page3 h1",{
  y:10,
  rotate:10,
  delay:0.5,
  duration:0.7,
  opacity:0
})

tlb.from(".page3 .part1 img ",{
  x:-10,
  rotate:8,
  opacity:0,
  duration:1
},"shiv")




tlb.to(".page3 .part1 video",{
  x:-40,
  // rotate:8,
  opacity:1,
  duration:1,
  width:"350px",
  height:"400px",
},"shiv")



//page3 part2 animation

var tlc=gsap.timeline({scrollTrigger:{
  trigger:".page3 .part2",
  scroller:"#main",
  // markers:true,
  start:"top 40%",
  end:"top 10%",
  scrub:3
}})

tlc.from(".page3 .part2 img",{
  x:-10,
  rotate:8,
  opacity:0,
  duration:1
},"yes")

tlc.to(".page3 .part2 video",{
  opacity:1,
  duration:1,
  width:"400px",
  height:"400px",
},"yes")








//for backgroundColor white

var tl2= gsap.timeline({scrollTrigger:{
  trigger:"#page1 h1",
  scroller:"#main",
  
  start:"top -70%",
  end:"top -135",
  scrub:2
 }})

 tl2.to("#main",{
  backgroundColor:"#fff"
 })

 //for backgroundColor black

 
var tl3= gsap.timeline({scrollTrigger:{
  trigger:"#page1 h1",
  scroller:"#main",
  start:"top -300%",
  end:"top -350",
  scrub:2
 }})

 tl3.to("#main",{
  backgroundColor:"#0f0d0d"
 })


 // page5 effect

 var boxes = document.querySelectorAll(".box");
 boxes.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
   var att= elem.getAttribute("data-image")
    cursor.style.width ="250px"
    cursor.style.height ="250px"
    cursor.style.borderRadius="0"
    
    cursor.style.backgroundImage=`url(${att})`
   })

   elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor="transparent"
     cursor.style.width ="15px"
     cursor.style.height ="15px"
     cursor.style.borderRadius="50%"
     cursor.style.backgroundImage=`none`
    })
 })


  
 var menuSrc = document.querySelector("#menu-src");
 var menu= document.querySelector(" #nav #menu");
 var menuText=document.querySelector("#menu h3")
 var logo = document.querySelector("#nav h3");

 var flag=0;
 menu.addEventListener("click",function(){

  if(flag == 0){
    menuSrc.style.top=0
    logo.style.opacity=0
    menu.style.backgroundColor="#EDBFFF"
    menuText.style.color="black"
    flag=1
  
  }else{
    menuSrc.style.top = "-100%"
    logo.style.opacity ="1"
    menu.style.backgroundColor="#0f0d0d"
    menuText.style.color="white"
    flag = 0
  }
  
 
 })