function capShift(n) {
  let origin = n.charCodeAt(0);
  origin += 1;
  if (origin > 90) {
    origin = (origin % 90) + 64;
  }
  return String.fromCharCode(origin);
}
function lowerShift(n) {
  let origin = n.charCodeAt(0);
  origin += 1;
  if (origin > 122) {
    origin = (origin % 122) + 96;
  }
  return String.fromCharCode(origin);
}
export default function caeserCipher(str) {
  let result = "";
  let char = "";
  for (let i in str) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      char = lowerShift(str.charAt(i));
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      char = capShift(str.charAt(i));
    } else {
      char = str.charAt(i);
    }
    result += char;
  }
  return result;
}
