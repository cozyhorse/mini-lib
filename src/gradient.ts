//Borrowed from internet https://stackoverflow.com/questions/3080421/javascript-color-gradient

export function gradient(topColor: string, elm: HTMLElement): void {
    function hexToRgb(hexColor: string): { r: number; g: number; b: number } | null {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hexColor = hexColor.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }

    function componentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r: number, g: number, b: number): string {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const ratio = 1.24;
    const topColorRgb = hexToRgb(topColor);

    if (!topColorRgb) {
        console.error("Invalid color format");
        return;
    }

    const r = Math.floor(topColorRgb.r / ratio);
    const g = Math.floor(topColorRgb.g / ratio);
    const b = Math.floor(topColorRgb.b / ratio);

    const bottomColor = rgbToHex(r, g, b);
    const gradientBackground = `linear-gradient(to bottom right, ${topColor} 40%, ${bottomColor} 70%)`;
    //const gradientBackground = `linear-gradient(to bottom right, #FFFFFF -100%, ${topColor} 90%)`;

    elm.style.background = gradientBackground;
}