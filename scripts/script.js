window.addEventListener("DOMContentLoaded", init())

function init (){
    let value = 1600;
    gsap.set("path", {fill: "rgba(0,0,0,0)"})
    gsap.set("path#chicken", {
        strokeDashoffset: value,
        strokeDasharray: value
    })
    gsap.set(["#game_over","#dont_look"], {y: -20, autoAlpha: 0})
gsap.set("#arrow", {autoAlpha: 0})
gsap.set("#chicken_game", {y: "45vh", autoAlpha: 0})



    const chicken_timeline = gsap.timeline({ defaults: { duration: 1.2, ease: "power1.out" } });

    chicken_timeline
    
    .to("#chicken_game",{autoAlpha: 1, duration: 3})
    .to("#chicken_game path",{fill: "black", autoAlpha: 1})
    .to("#chicken_game",{y: 0, autoAlpha: 1})

    .to("path#chicken", {keyframes: [
        {
            strokeDashoffset: value,
            opacity: 0,
            duration: 1
        },
        {
            strokeDashoffset: value,
            opacity: 1,
            fill: "rgba(0, 0, 0, 0)",
            duration: 1

    
        },
        {
            strokeDashoffset: 1590,
            opacity: 1,
            duration: 1

        },
        {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 2
        }
    ]})
    .to("#arrow",{autoAlpha: 1})

    .to("#chicken",{fill: "rgba(0,0,0,1)"} )
    .to("#dont_look",{y: 0, autoAlpha: 1, duration: 1}, "-=1" )
    .to("#game_over",{y: 0, autoAlpha: 1})
    .to(["#dont_look path","#game_over path"], {fill: "#000"} )


}