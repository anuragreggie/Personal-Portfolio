const words = ["I'm Anurag.", "I study CS at St Andrews.", "I hope you enjoy my website."]

let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})
let masterTl = gsap.timeline({
    repeat: -1
}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {
        duration: 0,
        width: "17vw",
        delay: 0.1,
        ease: "power4.inOut"
    })
    .from('.hi', {
        duration: 0,
        y: "7vw",
        ease: "power3.out"
    })
    .to('.box', {
        duration: 1,
        height: "7vw",
        ease: "elastic.out",
        onComplete: () => masterTl.play()
    })
    .to('.box', {
        duration: 1,
        autoAlpha: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"
    })

words.forEach(word => {
    let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    })
    tl.to('.text', {
        duration: 1.5,
        text: word
    })
    masterTl.add(tl)
})