 const solve = (a, b, c) => {
    const x1 = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;
    const x2 = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;

    return { x1, x2 };
};

const form = document.getElementById('form');
const result = document.getElementById('result');

const [input1, input2, input3] = form.querySelectorAll('input[type=text]');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);

    const { x1, x2 } = solve(a, b, c);

    result.innerHTML = `Result: x1=<b>${x1}</b>, x2=<b>${x2}</b>`;
    alert(`x1=${x1}, x2=${x2}`);
}, false);
