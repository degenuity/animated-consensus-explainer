
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// Mobile zoom factor
export const mobileFactor = 1.4; // Keeping this perfect zoom factor for mobile

// Calculate dimensions needed to ensure no cropping
export const mobileViewBoxWidth = viewBoxWidth / mobileFactor;
export const mobileViewBoxHeight = viewBoxHeight / mobileFactor;

// Set safe margins to prevent ANY cropping
// These values ensure the diagram is centered and has sufficient margins
export const safeMarginX = 100;
export const safeMarginY = 100;

// Calculate viewBox coordinates with safety margins
// Center point calculations
export const centerX = viewBoxWidth / 2;
export const centerY = viewBoxHeight / 2;

// Calculate mobile viewBox start coordinates with safety margins
// The extra offset values ensure inflation/deflation boxes aren't cropped
export const mobileViewBoxX = centerX - (mobileViewBoxWidth / 2) - 50; // Extra left margin
export const mobileViewBoxY = centerY - (mobileViewBoxHeight / 2) - 50; // Extra top margin

// Final mobile viewBox with safety margins
export const zoomedViewBox = `${mobileViewBoxX} ${mobileViewBoxY} ${mobileViewBoxWidth + safeMarginX} ${mobileViewBoxHeight + safeMarginY}`;

// Desktop viewBox with safety margins to ensure no cropping
export const desktopViewBox = `-50 -50 ${viewBoxWidth + 100} ${viewBoxHeight + 100}`;
