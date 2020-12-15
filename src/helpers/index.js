export const generateCode = (list) => {
  const keys = Object.keys(list);
  let code = "";

  for (let i = 0; i < keys.length; i++) {
    const { inset, x, y, s, b, color } = list[keys[i]];

    if (i === 0) {
      code += `${inset ? "inset " : ""}${x}px ${y}px ${b}px ${s}px rgba(${
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
