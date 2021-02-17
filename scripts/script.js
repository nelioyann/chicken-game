window.addEventListener("DOMContentLoaded", init());

function init() {
  let value = 1600;
  gsap.set("path", { fill: "rgba(0,0,0,0)" });
  gsap.set("path#chicken", {
    strokeDashoffset: value,
    strokeDasharray: value,
  });
  gsap.set(["#game_over path", "#dont_look path"], { y: -20, autoAlpha: 0 });
  gsap.set("#arrow path", { autoAlpha: 0 });
  gsap.set("#chicken_game", { y: "40vh",});
  gsap.set("#chicken_game path", {y: 50, autoAlpha: 0 });

  gsap.timeline()
    .to("#chicken_game path", {y: 0, autoAlpha: 1, duration: 1.5, stagger: 0.3, ease: "back.out" })
    .to("#chicken_game path", { fill: "black",duration:0.3, stagger: 0.3, ease: "back.out"  });
  const chicken_timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1.2, ease: "power1.out" },
  });


  document.querySelector("button").addEventListener("click", ()=> chicken_timeline.play())
  chicken_timeline

    .to("#chicken_game", { y: 0, autoAlpha: 1 })

    .to("path#chicken", {
      keyframes: [
        {
          strokeDashoffset: value,
          opacity: 0,
          duration: 1,
        },
        {
          strokeDashoffset: value,
          opacity: 1,
          fill: "rgba(0, 0, 0, 0)",
          duration: 1,
        },
        {
          strokeDashoffset: 1590,
          opacity: 1,
          duration: 1,
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
        },
      ],
    })
    .to("#arrow path", { autoAlpha: 1 })

    .to("#chicken", { fill: "rgba(0,0,0,1)" })
    .to("#dont_look path", { y: 0, autoAlpha: 1, duration: 1 }, "-=1")
    .to(["#dont_look path", "#game_over path"], { fill: "#000" })
    .to("#game_over path", { y: 0, autoAlpha: 1 });
}
