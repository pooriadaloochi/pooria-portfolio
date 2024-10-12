import { aboutFA } from "./about/fa";
import { commonFA } from "./common/fa";
import { contactMeFA } from "./contact-me/fa";
import { introFA } from "./hero-section/fa";
import { topBarFA } from "./top-bar/fa";

export const fa = {
  ...commonFA,
  ...topBarFA,
  ...introFA,
  ...aboutFA,
  ...contactMeFA,
};
