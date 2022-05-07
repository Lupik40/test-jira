export default function randomHexCode() {
  let chars = "0123456789abcdef";
  let colorLength = 6;
  let color = "#";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return color;
}
