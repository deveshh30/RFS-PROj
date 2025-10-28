let nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
   let tl = WebGLSampler.timeline()
   
    tl.to("#nav-below", {
        height:"21vh"
    })

    tl.to(".nav-2 h5", {
        display:"block"
    })

    tl.from(".nav-2 h5 span", {
        y:25,
        sagger:{
            amount:0.6 
        }
        duration:0.25,
    })
})

nav.addEventListener("mouseleave", function(){
   let tl = WebGLSampler.timeline()
   
    tl.to("#nav-below", {
        height:"0vh"
    })

    tl.to(".nav-2 h5", {
        display:"block"
    })

    tl.to(".nav-2 h5 span", {
        y:25,
        sagger:{
            amount:0.2 
        }
        duration:0.25,
    })
})

