import Hangul from "hangul-js";
import hangulMap from "./hangulMap";

const step = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    const child = (arr[i] + arr[i + 1]) % 10;
    result.push(child);
  }
  return result;
};

const countStrokes = (disassembled) => {
  return disassembled.map((alphabet) => hangulMap[alphabet]).reduce((a, b) => a + b);
};

const gunghapGenerator = function*(arr) {
  let current;
  if (arr.some(el => typeof el === "string"))  {
    current = arr.map(character => countStrokes(Hangul.disassemble(character)));
    yield arr;
  } else {
    current = arr;
  }
  yield current;
  
  while (current.length > 2) {
    current = step(current);
    yield current;
  }
  yield current[0] * 10 + current[1];
};

const checkGunghapArgument = (p1, p2) => {
  if (typeof p1 !== "string" || typeof p2 !== "string") {
    throw new Error("The type of two arguments must be string.");
  }
  if (!Hangul.isComplete(p1) || !Hangul.isComplete(p2)) {
    throw new Error("Both of the names must be in complete Korean character[가-힣]");
  }
  if (Math.abs(p1.length - p2.length) > 1) {
    throw new Error("Length of the two names must be either same or different by 1.");
  }
};

const gunghap = (p1, p2) => {
  checkGunghapArgument(p1, p2);
  const short = p1.length < p2.length ? p1 : p2;
  const long = p1.length >= p2.length ? p1 : p2;
  const arr = [];
  for (let i = 0; i < long.length; i += 1) {
    arr.push(long[i]);
    if (i < short.length) {
      arr.push(short[i]);
    }
  }
  return gunghapGenerator(arr);
};

for (const step of gunghap("트럼프", "아베")) {
  console.log(step);
}

export {
  gunghap as default,
  gunghapGenerator,
}
