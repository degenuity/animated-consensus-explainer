
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// Zoom factor for the diagram (adjusted to fit mobile screens better)
export const zoomFactor = 1.4; // Keeping the zoom factor as it's perfect for mobile

// Calculate new viewbox with zoom applied - this creates a zoomed-in effect
export const zoomedViewBoxWidth = viewBoxWidth / zoomFactor;
export const zoomedViewBoxHeight = viewBoxHeight / zoomFactor;

// Center point calculations for proper centering after zoom
export const centerX = viewBoxWidth / 2;
export const centerY = viewBoxHeight / 2;

// Calculate the new origin point for the zoomed viewBox
// Adjust horizontal offset to prevent cropping on mobile
export const viewBoxX = centerX - (zoomedViewBoxWidth / 2) - 15; // Negative offset to ensure inflation box isn't cropped
// Adjusted to ensure inflation/deflation boxes aren't cropped
export const viewBoxY = centerY - (zoomedViewBoxHeight / 2) - 35; // Keeping the same vertical offset

// Final viewBox string with offset to center the content
export const zoomedViewBox = `${viewBoxX} ${viewBoxY} ${zoomedViewBoxWidth} ${zoomedViewBoxHeight}`;
