
// Export components
export { default as BoxComponent } from './box/BoxComponent';
export { default as ConnectionLine } from './connection/ConnectionLine';
// ExplanationComponent export removed
// Logo export removed

// Export diagram data
export * from './data/constants';
export * from './data/boxes';
export * from './data/connections';

// Export hooks
export * from './hooks/useConnectionAnimation';

// Export layers
export * from './layers';

// Export main diagram component
export { default as DiagramSVG } from './DiagramSVG';
