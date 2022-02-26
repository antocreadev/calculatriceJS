const btns = document.getElementsByClassName("btn");
const result = document.getElementById("result");
console.log(btns);
console.log(result);
for (let btn of btns) {
  console.log(btn);
  btn.addEventListener("click", () => {
    result.textContent += `${btn.textContent}`; //ajoute les chaines les uns avec les autres
  });
}
// les boutons n'ont pas besoin d'etre selection s'ils ont un id
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent); //eval() fait le calcule
});
clear.addEventListener("click", () => {
  result.textContent = "";
});
