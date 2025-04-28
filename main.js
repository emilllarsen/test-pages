let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: '-50% center',
        end: '200% center',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse complete'
    }
})

tl.to('.animated-element', {
    x: 600, 
    duration: 1
})



// Smooth Scroll
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });