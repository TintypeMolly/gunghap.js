import assert from "assert";
import gunghap from "../src";

describe('궁합', () => {
  it('트럼프 ♥ 박근혜 89', () => {
    let result;
    for (const step of gunghap("트럼프", "박근혜")) {
      result = step;
    }
    assert.equal(result, 89);
  });
  it('트럼프 ♥ 김정은 81', () => {
    let result;
    for (const step of gunghap("트럼프", "김정은")) {
      result = step;
    }
    assert.equal(result, 81);
  });
  it('트럼프 ♥ 아베 42', () => {
    let result;
    for (const step of gunghap("트럼프", "아베")) {
      result = step;
    }
    assert.equal(result, 42);
  });
  it('트럼프 ♥ 시진핑 29', () => {
    let result;
    for (const step of gunghap("트럼프", "시진핑")) {
      result = step;
    }
    assert.equal(result, 29);
  });
  it('트럼프 ♥ 푸틴 35', () => {
    let result;
    for (const step of gunghap("트럼프", "푸틴")) {
      result = step;
    }
    assert.equal(result, 35);
  });
});