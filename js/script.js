let calc = document.getElementById('calculator');
let display = document.getElementById('display');
let res = 0;

calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
  	if(target.innerHTML !== '=') {
  		let val = target.innerHTML;
  		res += val;
  		display.value = res.substring(1, 9);
  	}
  else updateDisplay();
  if(target.innerHTML == 'C') clear();
}

let clear = () => {
  display.value = 0;
  res = 0;
}

let updateDisplay = () => {
	display.value = eval(display.value);
}
