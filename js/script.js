let calc = document.getElementById('calculator');
console.log(calc);
let fieldValue = document.getElementById('fieldValue');
let res = 0;
//

calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
  let val = target.getAttribute('data-value');

  res += val;
  fieldValue.setAttribute('value', res.slice(1));

  if(target.getAttribute('data-value') == 'C') clear();
}

let clear = () => {
  fieldValue.setAttribute('value', 0);
  res = 0;
}
