export function scrollTo(id) {
    import("smoothscroll-polyfill").then(smoothscroll => {
        smoothscroll.polyfill();
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: 'smooth'
        });
    });
}