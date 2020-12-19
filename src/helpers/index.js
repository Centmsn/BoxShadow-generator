export const generateCode = (list) => {
  const keys = Object.keys(list);
  let code = "";

  for (let i = 0; i < keys.length; i++) {
    const { inset, x, y, s, b, color } = list[keys[i]];

    if (i === 0) {
      code += `${inset ? "inset " : ""} ${x}px ${y}px ${b}px ${s}px rgba(${
        color.r
      }, ${color.g}, ${color.b}, ${color.a})`;
    } else {
      code += `,${inset ? "inset " : ""} ${x}px ${y}px ${b}px ${s}px rgba(${
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

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  return { r: +r, g: +g, b: +b, a: 100 };
};
