export default function capitalize(str) {
  let x = str.charAt(0);
  let y = str.slice(1);
  return x.toUpperCase() + y;
}
