
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// The leftmost and rightmost boxes positions (from boxes.ts)
const leftmostBoxX = 100; // Inflation box x position
const rightmostBoxX = 1300; // Deflation box x position (updated from 1250)

// Calculate content width and apply 5% margin (reduced from 10%)
const contentWidth = rightmostBoxX - leftmostBoxX + 150 + 150; // Add box widths
const horizontalMargin = contentWidth * 0.05; // 5% margin (reduced from 10%)

// Calculate the minimum and maximum x-coordinates for the viewBox
export const viewBoxMinX = leftmostBoxX - horizontalMargin;
export const viewBoxMaxX = rightmostBoxX + 150 + horizontalMargin; // Add deflation box width

// Calculate top and bottom content boundaries (from boxes.ts)
const topmostBoxY = 120; // Network costs box y position
const bottommostBoxY = 500 + 140; // Bottom of profitability/block production boxes

// Calculate content height and apply 5% margin (reduced from 10%)
const contentHeight = bottommostBoxY - topmostBoxY;
const verticalMargin = contentHeight * 0.05; // 5% margin (reduced from 10%)

// Calculate the minimum and maximum y-coordinates for the viewBox
export const viewBoxMinY = topmostBoxY - verticalMargin;
export const viewBoxMaxY = bottommostBoxY + verticalMargin;

// Calculate viewBox width and height based on content boundaries
export const contentViewBoxWidth = viewBoxMaxX - viewBoxMinX;
export const contentViewBoxHeight = viewBoxMaxY - viewBoxMinY;

// DESKTOP SETTINGS:
// For desktop, apply tight bounding box with 5% margin
export const desktopViewBox = `${viewBoxMinX} ${viewBoxMinY} ${contentViewBoxWidth} ${contentViewBoxHeight}`;

// MOBILE SETTINGS:
// For mobile, add slightly more padding to prevent any chance of cropping
const mobileExtraPadding = 15; // Slightly reduced from 20
export const zoomedViewBox = `${viewBoxMinX - mobileExtraPadding} ${viewBoxMinY - mobileExtraPadding} ${contentViewBoxWidth + 2*mobileExtraPadding} ${contentViewBoxHeight + 2*mobileExtraPadding}`;
