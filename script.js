function loadingAnimation(){
  
var tl =gsap.timeline()
tl.from(".page-1",{
 transform:"scaleX(0.3) scaleY(-0) translateY(50%)" ,
 borderRadius:"200px",
  duration:2,
  delay:.5,
  ease: "circ.out",
},"same")
tl.from("nav",{
  opacity:0,
  delay:2.4,
  ease:"power2.out"
},"same")

tl.from(".page-1 h1",{
  y:100,
  delay:1,
  opacity:0,
  stagger:{
    amount:1
  }
},"same")

tl.from(".page-1 p ,page-1 somting-box,page-1 moving-div",{

  delay:3,
  opacity:0,
  stagger:{
    amount:1
  }
},"same")

}

function triggerLogomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function navAnimation() {
var navBar = document.querySelector("nav");
var navElem = document.querySelector(".nav-part2 nav-elem h5");
  navBar.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("nav .bottom-line", {
      height: "22vh",
    });
    tl.to(".nav-part2 .nav-elem h5 span ", {
      display: "block",
      y: 0,
      stagger: {
        amount: 0.6,
      },
    });
  });

  navBar.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 .nav-elem h5 span ", {
      display: "none",
      y: 20,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to("nav .bottom-line", {
      height: "0vh",
    });
  });
}

function page2Animation() {
  var rightElem = document.querySelectorAll(".elem");

  rightElem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1.5,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 30,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}

function videoAnimation() {
  var playbtn = document.querySelector(".play-button");
  var video = document.querySelector(".page-3 video");
  playbtn.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      display: "block",
      scaleX: 1,
      scaleY: 1,
      transform: "translateY(0vw)",
    });
    gsap.to(".play-button i,.play-button", {
      opacity: 0,
    });
  });

  video.addEventListener("click", function () {
    video.load();
    gsap.to(video, {
      y:"10%",
      scaleX:0.4,
      scaleY:.1,
      opacity:0,
      duration: 0.4,
      display: "none",
    });
    gsap.to(".play-button i,.play-button", {
      opacity: 1,
    });
  });
}

function hoverVideoAnimation() {
  var section = document.querySelectorAll(".right-side-video");
  // var play = document.querySelector(".right-side-video video")

  section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[1].play();
      elem.childNodes[1].style.opacity = 1;
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[1].load();
      elem.childNodes[1].style.opacity = 0;
    });
  });
}

function cardAnimation(){
  var boxVideo = document.querySelectorAll(".box-1")
var text =document.querySelector(".box-1 p")
boxVideo.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      
  
      
      
        elem.childNodes[7].style.opacity=1;
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[7].play();
        // elem.childNodes[7].style.transition=" ese.1s";
        // elem.childNodes[7].style.height="50vh";
        gsap.to(".box-1 video",{
          height:"55vh",
          duration:.5
        })
       
    })

   
})

boxVideo.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    gsap.to(".box-1 video",{
      height:"33vh",
      duration:.5
    })
    elem.childNodes[7].style.opacity=0,transition=1;

    elem.childNodes[7].load();
    elem.childNodes[3].style.opacity=1;
  })

 
})

var boxVideo = document.querySelectorAll(".box-2")
var text =document.querySelector(".box-2 p")
boxVideo.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      
    
        text.style.opacity=0;
      
        elem.childNodes[7].style.opacity=1;
        elem.childNodes[7].play();
        // elem.childNodes[7].style.transition=" ese.1s";
        // elem.childNodes[7].style.height="50vh";
        gsap.to(".box-2 video",{
          height:"55vh",
          duration:.5
        })
       
    })

   
})

boxVideo.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    gsap.to(".box-2 video",{
      height:"33vh",
      duration:.5
    })
    elem.childNodes[7].style.opacity=0,transition=1;

    elem.childNodes[7].load();
    text.style.opacity=1;
  })

 
})
   
   
}

function pageBoxesAnimation(){
  gsap.from(".box2 h4",{
    x:0,
    scrollTrigger:{
      trigger:".box2 h4",
      scroller:".main",
      start:"top 90%",
      end:"top 30%",
      scrub:4
    }
  },"same")

  gsap.from(".box3 h4",{
    x:0,
    scrollTrigger:{
      trigger:".box3 h4",
      scroller:".main",
      start:"top 90%",
      end:"top 30%",
      scrub:4
    }
  },"same")

  gsap.from(".box4 h4",{
    x:0,
    scrollTrigger:{
      trigger:".box4 ",
      scroller:".main",
      start:"top 90%",
      end:"top 30%",

      scrub:4
    }
  },"same")
}
loadingAnimation()
triggerLogomotive()
navAnimation();
page2Animation();

videoAnimation();
hoverVideoAnimation();
cardAnimation()
pageBoxesAnimation()


var search=document.querySelector(".input-box")
var label=document.querySelector(".right label")
var border=document.querySelector(" .input-box .border")

search.addEventListener("mouseenter",function(){
  label.style.transform="translateY(-40px) scale(.7) translateX(-55px)"
  label.style.transition="all ease .6s"
  border.style.width="100%"
  border.style.transition="all ease .2s"
})

search.addEventListener("mouseleave",function(){
  label.style.transform="translateY(0px) scale(1) translateX(0px)"
  label.style.transition="all ease .6s"
 
  border.style.width=" 0px"
  border.style.transition="all ease .2s"

})

 


