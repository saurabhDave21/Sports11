let tl = gsap.timeline();
tl.from
('.title h1',{
    y:100,
    duration:3,
    opacity:0,
    stagger:1,
})
gsap.from('.title button',{
    y:100,
    duration:3.5,
    opacity:0,
    
})
tl.from
('.title span',{
    y:100,
    duration:3,
    opacity:0,
    stagger:1,
    
})
gsap.from('.matches .match1 p, .matches .match2 p, .matches .match3 p, .matches .match4 p, .matches .match5 p', {
    x: 25,
    duration: 2,
    opacity: 0,
    stagger: 0.5, // Delay between each animation
    scrollTrigger: {
        trigger: '.matches .match1 ', // Animation triggers when .matches is in view
        
    }
});

gsap.from('.nav-item',{
    opacity:0,
    duration:5,
    stagger:1
});
gsap.from('.About img',{
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger: {
        trigger: '.About img', // Animation triggers when .matches is in view
        
    }
})
gsap.from('.About p',{
    y:100,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger: {
        trigger: '.About p', // Animation triggers when .matches is in view
        
    }
})
gsap.from('.container',{
    y:100,
    opacity:0,
    duration:2,
})
