// var tl = gsap.timeline({scorllTrigger:{
//     trigger: ".two",
//     start: "0% 90%",
//     end: "50% 50%",
//     scrub: true,
//     markers: true,
// }})


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})

tl.to(".fanta",{
    top: "120%",
    left: "0%",
    
},'orange')


tl.to(".slice",{
    top: "110%",
    left: "25%",
    rotate: "360deg"
},'orange')


tl.to(".orange",{
    top: "155%",
    left: "70%",
},'orange')

tl.to(".leaf2",{
    top: "160%",
    left: "0%",
},'orange')

tl.to(".leaf1",{
    opacity: "0",
},'orange')

tl.to(".leaf3",{
    top: "0%",
    opacity: "0"
},'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "20% 90%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to(".fanta",{
    top: "210%",
    width: "35%",
    left: "32%"
},'ani2')

tl2.to(".splash",{
    translateY: "-40%",
    scale: "0.7",
    rotate: "180deg",
},'ani2')

tl2.to(".slice",{
    top: "200%",
    width: "16%",
    left: "41%",
    rotate: "720deg"
},'ani2')

tl2.to(".cocacola",{
    rotate: "0deg",
    opacity: "1"
},'ani2')

tl2.to(".pepsi",{
    rotate: "0deg",
    opacity: "1"
},'ani2')




var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".four",
    start: "20% 90%",
    end: "50% 50%",
    scrub: true,
}})

tl3.to(".pepsi",{
    top: "110%",
    left: "-300%",
    scale:"1.4",
    opacity: "1",
}, 'pepsi')

tl3.to(".cube1",{
    top: "320%",
    left: "15%",
    opacity: "1",
    rotate: "-250deg",

}, 'pepsi')

tl3.to(".cube2",{
    opacity: "1",
    top: "280%",
    left: "5%",
    scale: "0.3",
    rotate: "230deg",

}, 'pepsi')

tl3.to(".cube3",{
    top: "338%",
    left: "0%",
    opacity: "1",
    scale: "0.4",
    rotate: "330deg",

}, 'pepsi')

tl3.to(".cocacola",{
    top: "130%",
    scale:"2.1",
    left: "-35%",
    opacity: "0"

})

var tl4 = gsap.timeline({scrollTrigger:{
    trigger: ".five",
    start: "20% 90%",
    end: "50% 50%",
    scrub: true,
    
}})

tl4.to(".pepsi",{
    rotate: "360deg",
    top: "260%",
    opacity: "0"
},'coca')

tl4.to(".cocacola",{
    top: "280%",
    rotate: "360deg",
    opacity: "1"

},'coca')
tl4.to(".pepsi",{
    rotate: "360deg",
    top: "260%",
    opacity: "0",
    scale: "0.7"
},)

