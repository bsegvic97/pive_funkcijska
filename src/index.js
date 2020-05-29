import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let a = "bottles of bear on the wall\n";
let b = "bottles of beer\n";
let c = "Take one down, pass it around\n";
const concat = (a, b, c, d) => a.concat(b).concat(c);
let s = "";
for (var i = 99; i > 0; i--) {
  s = concat(s, i.toString() + " " + a, i.toString() + " " + b, c);
}
console.log(s);
