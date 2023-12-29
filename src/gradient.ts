
export function gradient(topColor: string, elm: HTMLElement): void {
    const gradientBackground = `linear-gradient(to bottom right, #FFFFFF -80%, ${topColor} 100%)`;
    elm.style.background = gradientBackground;
}