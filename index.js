/*var a = parceFloat (prompt ('Enter A'));
var b = parceFloat (prompt ('Enter B'));
var c = parceFloat (prompt ('Enter C'));
a = document.forms["input_form"]["input_a"].value;
a = document.forms["input_form"]["input_b"].value;
a = document.forms["input_form"]["input_c"].value;
function solveQuadrEq(a, b, c){
    var d = discr(a, b, c);
    if (d < 0){ 
        var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        output = "For the equation <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0</strong>, x can equal <strong>" + x1 + "</strong> or <strong>" + x2 + "</strong>";
        return 'x1= ' + x1 + ' x2 = ' + x2;
    document.getElementById("Result").index.html = Result;
    document.alert("Result").index.html;
    }
}
function discr(a, b, c){
    return (b, 2) - 4 * a * c;
}*/


const solve = (a, b, c) => {
  const x1 = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;
  const x2 = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;

  return {x1, x2};
};

const form = document.getElementById('form');
const result = document.getElementById('result');

const [input1, input2, input3] = form.querySelectorAll('input[type=text]');


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const a = Number(input1.value);
  const b = Number(input2.value);
  const c = Number(input3.value);

  const {x1, x2} = solve(a, b, c);

  result.innerHTML = `Result: x1=<b>${x1}</b>, x2=<b>${x2}</b>`;
  alert(`x1=${x1}, x2=${x2}`);
}, false);