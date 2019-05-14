// Heatmap style sheet

export const janPaint = {
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
    stops: [[0, 1], [4, 14]]
  }
};

export const febPaint = {
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
    stops: [[0, 1], [4, 14]]
  }
};

export const marPaint = {
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
    stops: [[0, 1], [4, 14]]
  }
};

export const aprPaint = {
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
    "#E3F4B2",
    0.4,
    "#7DCCBB",
    0.6,
    "#2DA2C2",
    0.8,
    "#2357A5",
    1,
    "#0C205F"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const mayPaint = {
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
    "#491C49",
    0.4,
    "#9A1B5B",
    0.6,
    "#E23442",
    0.8,
    "#F58D64",
    1,
    "#F8DCC6"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const junPaint = {
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
    "#4436FB",
    0.4,
    "#3EFFE9",
    0.6,
    "#3EFB27",
    0.8,
    "#FEFF01",
    1,
    "#FA2037"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const julPaint = {
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
    "#DDECEE",
    0.4,
    "#83B3E3",
    0.6,
    "#7393E1",
    0.8,
    "#7762C6",
    1,
    "#733C9A"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const augPaint = {
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
    "#3DF9D7",
    0.4,
    "#A4FA3B",
    0.6,
    "#FAED01",
    0.8,
    "#FA2037",
    1,
    "#1427AA"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const sepPaint = {
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
    "#FCED00",
    0.4,
    "#F32100",
    0.6,
    "#BB2700",
    0.8,
    "#7803FB",
    1,
    "#3A0053"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const octPaint = {
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
    "#F6E621",
    0.4,
    "#7AD151",
    0.6,
    "#24A188",
    0.8,
    "#2F6B8E",
    1,
    "#482475"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const novPaint = {
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
    "#790622",
    0.4,
    "#D86251",
    0.6,
    "#F5F4EF",
    0.8,
    "#65A9CF",
    1,
    "#0E4078"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [4, 14]]
  }
};

export const decPaint = {
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
    "#0cff00",
    0.4,
    "#00ffd0",
    0.6,
    "#ffffff",
    0.8,
    "#ff44ff",
    1,
    "#6d04f7"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [5, 20]]
  }
};
