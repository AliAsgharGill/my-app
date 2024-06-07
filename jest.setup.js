import { TextEncoder, TextDecoder } from "util";

// Set global TextEncoder and TextDecoder if not already set
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
