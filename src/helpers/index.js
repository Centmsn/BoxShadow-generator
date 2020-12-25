export const generateCode = (list) => {
  const keys = Object.keys(list);
  let code = "";

  for (let i = 0; i < keys.length; i++) {
    const { inset, x, y, s, b, color } = list[keys[i]];

    if (i === 0) {
      code += `${inset ? " inset " : ""} ${x}px ${y}px ${b}px ${s}px rgba(${
        color.r
      }, ${color.g}, ${color.b}, ${color.a})`;
    } else {
      code += `,${inset ? " inset " : ""} ${x}px ${y}px ${b}px ${s}px rgba(${
        color.r
      }, ${color.g}, ${color.b}, ${color.a})`;
    }
  }

  return code;
};

export const convertHexToRgb = (h) => {
  let r = 0,
    g = 0,
    b = 0;

  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  } else if (h.length === 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  return { r: +r, g: +g, b: +b, a: 1 };
};

export const convertRgbToHex = (r, g, b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
};
