
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// DESKTOP SETTINGS:
// For desktop, we want maximum zoom with minimal padding
// Much smaller padding for desktop to maximize zoom level
const desktopPadding = 20; // Reduced from 40 to zoom in more
export const desktopViewBox = `${-desktopPadding} ${-desktopPadding} ${viewBoxWidth + 2*desktopPadding} ${viewBoxHeight + 2*desktopPadding}`;

// MOBILE SETTINGS:
// For mobile, ensure all content is visible with optimized padding
// More strategic padding to prevent cropping while maintaining good zoom
const mobilePadding = {
  x: 100, // Reduced horizontal padding but still enough to prevent cropping
  y: 70,  // Reduced vertical padding
};

// Mobile viewBox calculation with strategic padding
export const mobileViewBoxWidth = viewBoxWidth + (2 * mobilePadding.x);
export const mobileViewBoxHeight = viewBoxHeight + (2 * mobilePadding.y);
export const mobileViewBoxX = -mobilePadding.x;
export const mobileViewBoxY = -mobilePadding.y;
export const zoomedViewBox = `${mobileViewBoxX} ${mobileViewBoxY} ${mobileViewBoxWidth} ${mobileViewBoxHeight}`;
