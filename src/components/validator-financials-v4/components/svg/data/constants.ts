
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// DESKTOP SETTINGS:
// For desktop, we want maximum zoom without cropping
// Negative padding means we're zooming in beyond the original boundaries
const desktopPadding = -200; // Significantly increased zoom by using negative padding
export const desktopViewBox = `${desktopPadding} ${desktopPadding} ${viewBoxWidth - 2*desktopPadding} ${viewBoxHeight - 2*desktopPadding}`;

// MOBILE SETTINGS:
// For mobile, ensure all content is visible with optimized padding
// Strategic padding to prevent cropping while maintaining good zoom
const mobilePadding = {
  x: 50, // Reduced horizontal padding significantly
  y: 30, // Reduced vertical padding significantly
};

// Mobile viewBox calculation with strategic padding
export const mobileViewBoxWidth = viewBoxWidth + (2 * mobilePadding.x);
export const mobileViewBoxHeight = viewBoxHeight + (2 * mobilePadding.y);
export const mobileViewBoxX = -mobilePadding.x;
export const mobileViewBoxY = -mobilePadding.y;
export const zoomedViewBox = `${mobileViewBoxX} ${mobileViewBoxY} ${mobileViewBoxWidth} ${mobileViewBoxHeight}`;
