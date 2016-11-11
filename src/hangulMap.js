const consonantMap = {
  "ㄱ": 2,
  "ㄴ": 2,
  "ㄷ": 3,
  "ㄹ": 5,
  "ㅁ": 4,
  "ㅂ": 4,
  "ㅅ": 2,
  "ㅇ": 1,
  "ㅈ": 3,
  "ㅊ": 4,
  "ㅋ": 3,
  "ㅌ": 4,
  "ㅍ": 4,
  "ㅎ": 3,
  "ㄲ": 4,
  "ㄸ": 6,
  "ㅃ": 8,
  "ㅆ": 4,
  "ㅉ": 6,
};

const vowelMap = {
  "ㅏ": 2,
  "ㅑ": 3,
  "ㅓ": 2,
  "ㅕ": 3,
  "ㅗ": 2,
  "ㅛ": 3,
  "ㅜ": 2,
  "ㅠ": 3,
  "ㅡ": 1,
  "ㅣ": 1,
  "ㅐ": 3,
  "ㅒ": 4,
  "ㅔ": 3,
  "ㅖ": 4,
};

const hangulMap = Object.assign({}, consonantMap, vowelMap);

export default hangulMap;
