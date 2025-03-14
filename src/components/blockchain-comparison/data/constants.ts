
// Chart dimensions
export const viewBoxWidth = 1440;
export const viewBoxHeight = 1000; // Increased height to accommodate the vertically stretched layout

// Chart positioning constants
export const CHART_TOP = 80;
export const CHART_BOTTOM = 880; // Increased to match the new X-axis position
export const CHART_LEFT = 150; // Keeping space for labels
export const CHART_RIGHT = 1380;

// Derived measurements
export const chartWidth = CHART_RIGHT - CHART_LEFT;
export const chartHeight = CHART_BOTTOM - CHART_TOP;
