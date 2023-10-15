export default function app() {
  let str = "a";
  console.log(`${str}: ${str.charCodeAt(0)}`);
  str = "z";
  console.log(`${str}: ${str.charCodeAt(0)}`);
  str = "A";
  console.log(`${str}: ${str.charCodeAt(0)}`);
  str = "Z";
  console.log(`${str}: ${str.charCodeAt(0)}`);
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
  console.log(capShift("Z"));
  console.log(lowerShift("z"));
  str = "hello";
  for (let n of str) {
    console.log(n);
  }
}
