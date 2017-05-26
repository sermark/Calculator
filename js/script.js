let calc = document.querySelector('#calculator');
let fieldValue = calc.querySelector('#fieldValue');
let res = 0;
// 

calc.onclick = (event) => {
  let target = event.target;
  if (target.getAttribute('type') !== 'button') return;
  let val = target.getAttribute('value');
  res += val;
  fieldValue.setAttribute('value', res.slice(1));

  if(target.getAttribute('value') == 'C') clear();
}

let clear = () => {
  fieldValue.setAttribute('value', 0);
  res = 0;
}
