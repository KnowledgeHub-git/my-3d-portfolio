export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isTablet ? 0.065 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : isTablet ? [0.25, -5.0, 0] : [0.25, -5.5, 0],
    
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [6, 4, 0] : [10, 4, 0],
    reactLogoScale: isSmall ? 0.15 : isMobile ? 0.2 : isTablet ? 0.25 : 0.3,

    cubePosition: isSmall ? [3, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [6, -5, 0] : [9, -5.5, 0],
    cubeScale: isSmall ? 0.4 : isMobile ? 0.5 : isTablet ? 0.6 : 0.7,

    ringPosition: isSmall ? [-5, 5, 0] : isMobile ? [-8, 7, 0] : isTablet ? [-12, 8, 0] : [-18, 9, 0],
    ringScale: isSmall ? 0.3 : isMobile ? 0.4 : isTablet ? 0.45 : 0.5,

    targetPosition: isSmall ? [-3, -3, -5] : isMobile ? [-5, -4, -5] : isTablet ? [-7, -4, -5] : [-10, -5, -5],
    targetScale: isSmall ? 0.8 : isMobile ? 1.0 : isTablet ? 1.2 : 1.3,
  };
};
