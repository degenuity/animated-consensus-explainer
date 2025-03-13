
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// Desktop viewBox with NO padding to ensure full zoom on desktop
export const desktopViewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

// Mobile specific settings
// For mobile, we need to:
// 1. Show the ENTIRE diagram with no cropping
// 2. Calculate a viewBox that ensures all elements are visible

// Calculate mobile viewBox with extreme safety margins to prevent ANY cropping
export const mobileViewBoxWidth = viewBoxWidth + 300; // Much wider to show EVERYTHING
export const mobileViewBoxHeight = viewBoxHeight + 100;

// Position the mobile viewBox to be centered but shifted slightly to improve visibility
export const mobileViewBoxX = -150; // Start 150px to the left of diagram
export const mobileViewBoxY = -50;  // Start 50px above diagram

// Final mobile viewBox with VERY generous margins
export const zoomedViewBox = `${mobileViewBoxX} ${mobileViewBoxY} ${mobileViewBoxWidth} ${mobileViewBoxHeight}`;
