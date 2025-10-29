
const nav = document.querySelector('nav');
const flow = document.getElementById('flow');
const itemSpans = document.querySelectorAll('.nav-2 .nav-ele h5 span');

if (nav) {
    nav.addEventListener('mouseenter', () => {
        if (typeof gsap === 'undefined') {
            console.error('GSAP not loaded — animations skipped');
            return;
        }

        const tl = gsap.timeline();

        // expand the dropdown container
        tl.to(flow, { height: '18vh', duration: 0.45, ease: 'power2.out' })
            // make the h5 containers visible (use autoAlpha to animate opacity + visibility)
            .to('.nav-2 h5', { autoAlpha: 1, duration: 0.12 }, '<')
            // animate each span item from below with a small stagger
            .fromTo(
                itemSpans,
                { y: 14, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.36, ease: 'power2.out' },
                '-=0.25'
            );
    });

    nav.addEventListener('mouseleave', () => {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline();
        // collapse with a reverse-like sequence
        tl.to(itemSpans, { y: 8, autoAlpha: 0, stagger: 0.04, duration: 0.18, ease: 'power1.in' })
            .to(flow, { height: '0vh', duration: 0.36, ease: 'power2.in' }, '-=0.08');
    });
}

