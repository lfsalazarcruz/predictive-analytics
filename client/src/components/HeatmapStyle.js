// Heatmap style sheet

export const roberyPaint = {
  "heatmap-weight": {
    property: "priceIndicator",
    type: "exponential",
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  "heatmap-intensity": {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  "heatmap-color": [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,
    "rgba(33,102,172,0)",
    0.2,
    "#e035e0",
    0.4,
    "#ad35e0",
    0.6,
    "#6200ed",
    0.8,
    "#3f00ff",
    1,
    "#000000"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [5, 20]]
  }
};

export const weaponPaint = {
  "heatmap-weight": {
    property: "priceIndicator",
    type: "exponential",
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  "heatmap-intensity": {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  "heatmap-color": [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,
    "rgba(33,102,172,0)",
    0.2,
    "#ffff00",
    0.4,
    "#d8d800",
    0.6,
    "#a3a304",
    0.8,
    "#d69200",
    1,
    "#000000"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [5, 20]]
  }
};

export const disorderPaint = {
  "heatmap-weight": {
    property: "priceIndicator",
    type: "exponential",
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  "heatmap-intensity": {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  "heatmap-color": [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,
    "rgba(33,102,172,0)",
    0.2,
    "#F32100",
    0.4,
    "#F32100",
    0.6,
    "#F48500",
    0.8,
    "#F6C200",
    1,
    "#F8E400"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [5, 20]]
  }
};
