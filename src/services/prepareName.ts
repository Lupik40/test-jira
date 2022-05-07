export default function prepareName(name: string) {
  const nameArr = name.split(" ");
  return nameArr.reduce((acc, el) => acc + el[0], "");
}
