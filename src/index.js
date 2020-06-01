import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let brojevi=Array.from({length: 99}, (x,i) => i + 1).reverse();
//dobivanje brojeva od 99 do 1 funkcionalnom paradigmom
console.log(brojevi.map(broj=>"".concat(broj.toString()," bottles of bear on the wall\n", broj.toString()," bottles of beer\nTake one down, pass it around\n")).join(""))
//map za prolaz po svim brojevima concat za dodavanje stringova i join da polje pretvorimo u string
