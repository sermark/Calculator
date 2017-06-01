let calc = document.getElementById('calculator');
let display = document.getElementById('display');
<<<<<<< HEAD
/*let res = '';
let op;*/
=======
let res = '';
let op;
>>>>>>> origin/master

calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
<<<<<<< HEAD
    calcApp.clickDigit(target.dataset.value);
};


let calcState = {
  res: '',
  op: ''
};

let calcApp = {
  clickDigit: function (digit) {
    if(digit != '=' && digit != 'C'){
       if (digit == '+'|| digit == '-' || digit == '/' || digit == '*') {
        calcState.op = digit;
      }
      calcState.res += digit;
      display.value = calcState.res;
    } else calcApp.updateDisplay();
    if (digit == 'C') calcApp.clear();
  },

  sum: function (arr){
    return arr.reduce(function (prev, next) {
      return +prev + +next;
    });
  },

  diff: function (arr){
    return arr.reduce(function (prev, next) {
      return +prev - +next;
    });
  },

  mul: function (arr){
    return arr.reduce(function (prev, next) {
      return +prev * +next;
    });
  },

  div: function (arr){
    return arr.reduce(function (prev, next) {
      return +prev / +next;
    });
  },

  clear: function () {
    calcState.res = '';
    calcState.op = '';
    display.value = '';
  },

  updateDisplay: function (){
    console.log(typeof calcState.res);
    switch (calcState.op){
    case ('+'):
      display.value = calcApp.sum(display.value.split(calcState.op));
      calcState.res = display.value;
    break;
    case ('-'):
      display.value = calcApp.diff(display.value.split(calcState.op));
      calcState.res = display.value;
    break;
    case ('*'):
      display.value = calcApp.mul(display.value.split(calcState.op));
      calcState.res = display.value;
    break;
    case ('/'):
      display.value = calcApp.div(display.value.split(calcState.op));
      calcState.res = display.value;
    break;
    }
  }
};


/*calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
    if(target.dataset.value !== '=' && target.dataset.value !== 'C') {
      if (target.dataset.value == '+' || target.dataset.value == '-' || target.dataset.value == '*' || target.dataset.value == '/'){
        op = target.dataset.value;
      }
      let val = target.dataset.value;
      res += val;
      display.value = res;
    }
    else calc.updateDisplay();
=======
  	if(target.dataset.value !== '=' && target.dataset.value !== 'C') {
  		if (target.dataset.value == '+' || target.dataset.value == '-' || target.dataset.value == '*' || target.dataset.value == '/'){
  			op = target.dataset.value;
  		}
  		let val = target.dataset.value;
  		res += val;
  		display.value = res;
  	}
  	else calc.updateDisplay();
>>>>>>> origin/master
  if(target.dataset.value == 'C') calc.clear();
}

calc.clear = () => {
<<<<<<< HEAD
  display.value = 0;
=======
  display.value = '';
>>>>>>> origin/master
  res = '';
}

calc.updateDisplay = () => {
<<<<<<< HEAD
  res = display.value.split(op);
  switch (op){
  case ('+'):
    display.value = calc.sum(res);
    res = display.value;
    break;
  case ('-'):
    display.value = calc.diff(res);
    res = display.value;
    break;
  case ('*'):
    display.value = calc.mul(res);
    res = display.value;
    break;
  case ('/'):
=======
	res = display.value.split(op)
  switch (op){
	case ('+'):
    display.value = calc.sum(res);
    res = display.value;
    break;
	case ('-'):
    display.value = calc.diff(res);
    res = display.value;
    break;
	case ('*'):
    display.value = calc.mul(res);
    res = display.value;
    break;
	case ('/'):
>>>>>>> origin/master
    display.value = calc.div(res);
    res = display.value;
    break;
  }
}

calc.sum = (arr) => arr.reduce(function (prev, next){
<<<<<<< HEAD
  return +prev + +next;
});

calc.diff = (arr) => arr.reduce(function (prev, next){
  return +prev - +next;
});

calc.mul = (arr) => arr.reduce(function (prev, next){
  return +prev * +next;
});

calc.div = (arr) => arr.reduce(function (prev, next){
  return +prev / +next;
});*/


=======
	return +prev + +next;
});

calc.diff = (arr) => arr.reduce(function (prev, next){
	return +prev - +next;
});

calc.mul = (arr) => arr.reduce(function (prev, next){
	return +prev * +next;
});

calc.div = (arr) => arr.reduce(function (prev, next){
	return +prev / +next;
});
>>>>>>> origin/master
