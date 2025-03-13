
// SVG viewBox dimensions
export const viewBoxWidth = 1500;
export const viewBoxHeight = 850;

// Zoom factor for the diagram (adjusted to fit mobile screens better)
export const zoomFactor = 1.2; // Adjusted to prevent cropping while maintaining zoom

// Calculate new viewbox with zoom applied - this creates a zoomed-in effect
export const zoomedViewBoxWidth = viewBoxWidth / zoomFactor;
export const zoomedViewBoxHeight = viewBoxHeight / zoomFactor;

// Center point calculations for proper centering after zoom
export const centerX = viewBoxWidth / 2;
export const centerY = viewBoxHeight / 2;

// Calculate the new origin point for the zoomed viewBox
export const viewBoxX = centerX - (zoomedViewBoxWidth / 2);
// Adjusted to ensure inflation/deflation boxes aren't cropped
export const viewBoxY = centerY - (zoomedViewBoxHeight / 2) - 40; // Adjusted to prevent box cropping

// Final viewBox string with offset to center the content
export const zoomedViewBox = `${viewBoxX} ${viewBoxY} ${zoomedViewBoxWidth} ${zoomedViewBoxHeight}`;
