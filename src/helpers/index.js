/**
 * Generates box-shadow CSS property code.
 * @param {Object[]} list
 * @param {boolean} list.inset - box-shadow inset property
 * @param {number} list.x - box-shadow offsetX property
 * @param {number} list.y - box-shadow offsetY property
 * @param {number} list.b - box-shadow blur property
 * @param {number} list.s - box-shadow spread property
 * @param {Object} list.color - color in RGBA format
 * @param {number} list.color.r - red value. 0-255
 * @param {number} list.color.g - green value. 0-255
 * @param {number} list.color.g - blue value. 0-255
 * @param {number} list.color.a - alpha value. 0-1
 * @returns {string} - returns ready to use CSS code.
 */
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

/**
 * Converts HEX to RGB
 * @param {string} h - hex color
 * @returns {{r: number, g: number, b: number, a: number}}
 */
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

/**
 * Converts RGB to HEX
 * @param {number} r - red value. 0-255
 * @param {number} g - green value. 0-255
 * @param {number} b - blue value. 0-255
 * @returns {string} - returns HEX as a string
 */
export const convertRgbToHex = (r, g, b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
};

/**
 * Throttles given function
 * @param {Function} callback - function to call
 * @param {number} wait - time between each function call. Use milliseconds only.
 * @returns {Function} - throttled version of the given function
 */
export const throttle = (callback, wait) => {
  let isWaiting = false;

  return function () {
    if (isWaiting) {
      return;
    }

    isWaiting = true;
    setTimeout(() => {
      callback.apply(this, arguments);
      isWaiting = false;
    }, wait);
  };
};

/**
 * Validates input and returns object with error (or undefined if no error), and input withing min-max range.
 * @param {number} min - smallest accepted number
 * @param {number} max  - biggest accepted number
 * @param {number} current - current value
 * @returns {{error: string | undefined, value: number}}
 */
export const validateNumberInput = (min, max, current) => {
  let error;
  let value = current;

  // validate input
  if (!value) {
    value = 0;
  } else if (value > max) {
    error = `Maximum value is ${max}`;
    value = max;
  } else if (value < min) {
    error = `Minimum value is ${min}`;
  } else if (value.match(/^0{2,}/)) {
    value = value.slice(0, 1);
  } else if (value.match(/^0\d/)) {
    value = value.slice(1);
  }

  return { error, value };
};
