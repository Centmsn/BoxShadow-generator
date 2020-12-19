// const presets = [

//   "8px 0px 0px 0px rgba(220, 220, 0, 1), -8px 0px 0px 0px rgba(220, 150, 0, 1), -8px 8px 0px 0px rgba(200, 120, 0, 1), 8px -8px 0px 0px rgba(220, 240, 0, 1)",
//   "10px 10px 4px 4px rgba(245, 218, 55, 1), 20px 20px 4px 4px rgba(247, 132, 0, 1), 30px 30px 4px 4px rgba(242, 12, 0, 1), 40px 40px 4px 4px rgba(18, 199, 27, 1), 50px 50px 4px 4px rgba(18, 105, 199, 1), 60px 60px 4px 4px rgba(237, 74, 255, 1)",
//   "0px 0px 6px 12px rgba(92, 245, 158, 1), 0px 0px 0px 14px rgba(39, 160, 85, 1)",
// ];
const presets = [
  {
    position: "center",
    0: { x: 0, y: 0, b: 6, s: 12, color: { r: 92, g: 245, b: 158, a: 1 } },
    1: { x: 0, y: 0, b: 0, s: 14, color: { r: 39, g: 160, b: 85, a: 1 } },
  },
  {
    0: { x: 6, y: 6, b: 0, s: 0, color: { r: 0, g: 75, b: 180, a: 1 } },
    1: { x: 12, y: 12, b: 0, s: 0, color: { r: 50, g: 75, b: 200, a: 1 } },
    2: { x: 18, y: 18, b: 0, s: 0, color: { r: 50, g: 100, b: 200, a: 1 } },
    3: { x: 24, y: 24, b: 0, s: 0, color: { r: 125, g: 125, b: 200, a: 1 } },
    4: { x: 30, y: 30, b: 0, s: 0, color: { r: 150, g: 150, b: 200, a: 1 } },
  },
  {
    position: "center",
    0: {
      inset: true,
      x: 0,
      y: 0,
      b: 0,
      s: 4,
      color: { r: 0, g: 0, b: 0, a: 1 },
    },
    1: {
      inset: true,
      x: 0,
      y: 0,
      b: 0,
      s: 8,
      color: { r: 75, g: 75, b: 75, a: 1 },
    },
    2: {
      inset: true,
      x: 0,
      y: 0,
      b: 0,
      s: 12,
      color: { r: 125, g: 125, b: 125, a: 1 },
    },
    3: {
      inset: true,
      x: 0,
      y: 0,
      b: 0,
      s: 16,
      color: { r: 175, g: 175, b: 175, a: 1 },
    },
    4: {
      inset: true,
      x: 0,
      y: 0,
      b: 0,
      s: 20,
      color: { r: 225, g: 225, b: 225, a: 1 },
    },
  },
];

export default presets;
