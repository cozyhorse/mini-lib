export function gradient(topColor, elm) {
    const gradientBackground = `linear-gradient(to bottom right, #FFFFFF -100%, ${topColor} 100%)`;
    elm.style.background = gradientBackground;
}
