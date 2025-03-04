/**
 * Test the isTag() function in validate.js to make sure the expected values are returned.
 *
 * @jest-environment jsdom
 */

import { isTag } from "../../src/validate";

describe("isTag", () => {
  // Mock console.error.
  console.error = jest.fn();

  // Declare element.
  document.body.innerHTML = "<div><p></p></div>";
  const element = document.querySelector("p");
  // Tag/element match.
  test("returns true when checking if a <p> tag is a 'p' tag", () => {
    expect(isTag("p", { element })).toBeTrue();
  });

  // Tag/element mismatch.
  test("returns false when checking if a <p> tag is a 'div' tag", () => {
    expect(isTag("div", { element })).toBeFalse();
  });

  // Invalid tag
  test("returns false when checking if a <p> tag is an invalid tag", () => {
    expect(isTag(123, { element })).toBeFalse();
  });

  // Non-HTMLElement.
  test("returns false when checking if a non-HTMLElement is a 'p' tag", () => {
    expect(isTag("p", { element: "p" })).toBeFalse();
  });

  // Invalid tag/non-HTMLElement.
  test("returns false when checking if a non-HTMLElement is an invalid tag", () => {
    expect(isTag(123, { element: "p" })).toBeFalse();
  });

  // Invalid element.
  test("returns false when checking if a <p> tag, _not_ contained in an object, is a 'p' tag", () => {
    expect(isTag("p", element)).toBeFalse();
  });

  // Invalid tag/element.
  test("returns false when checking if a <p> tag, _not_ contained in an object, is an invalid tag", () => {
    expect(isTag("p", "p")).toBeFalse();
  });
});
