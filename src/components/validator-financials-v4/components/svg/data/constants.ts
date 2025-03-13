
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// DESKTOP SETTINGS:
// For desktop, we want maximum zoom while maintaining full visibility
// Small padding for safety but otherwise a tight fit to maximize diagram size
const desktopPadding = 40;
export const desktopViewBox = `${-desktopPadding} ${-desktopPadding} ${viewBoxWidth + 2*desktopPadding} ${viewBoxHeight + 2*desktopPadding}`;

// MOBILE SETTINGS:
// For mobile, we need the entire diagram visible with no cropping
// Use a more generous padding to ensure everything is visible
const mobilePadding = {
  x: 180, // Wider horizontal padding for mobile
  y: 100,  // Vertical padding
};

// Mobile viewBox calculation with strategic padding
export const mobileViewBoxWidth = viewBoxWidth + (2 * mobilePadding.x);
export const mobileViewBoxHeight = viewBoxHeight + (2 * mobilePadding.y);
export const mobileViewBoxX = -mobilePadding.x;
export const mobileViewBoxY = -mobilePadding.y;
export const zoomedViewBox = `${mobileViewBoxX} ${mobileViewBoxY} ${mobileViewBoxWidth} ${mobileViewBoxHeight}`;
