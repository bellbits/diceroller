//function that returns random integer between min and max inclusive
function diceroll(dice_min, dice_max) {
  let x = Math.floor(Math.random() * (dice_max - dice_min + 1))+dice_min;
  return x;
}

//identifying which div to change
const div = document.getElementById('result');

//identify clear button and adding listener
const clear = document.getElementById('clear');
clear.addEventListener('click', clearContent);

//identifying D4 button and adding listener
const button4 = document.getElementById('button4');
button4.addEventListener('click', function(){changeContent(1,4)});

//identifying D6 button and adding listener
const button6 = document.getElementById('button6');
button6.addEventListener('click', function(){changeContent(1,6)});

//identifying D8 button and adding listener
const button8 = document.getElementById('button8');
button8.addEventListener('click', function(){changeContent(1,8)});

//identifying D10 button and adding listener
const button10 = document.getElementById('button10');
button10.addEventListener('click', function(){changeContent(1,10)});

//identifying D12 button and adding listener
const button12 = document.getElementById('button12');
button12.addEventListener('click', function(){changeContent(1,12)});

//identifying D20 button and adding listener
const button20 = document.getElementById('button20');
button20.addEventListener('click', function(){changeContent(1,20)});

//identifying D100 button and adding listener
const button100 = document.getElementById('button100');
button100.addEventListener('click', function(){changeContent(1,100)});

//function changing div for D6
function changeContent(a,b) {
  div.innerHTML = "D" + b + " roll ";
  var qty = document.getElementById('diceQty');
qtyValue = qty.value;
  for (let i = 0; i < qtyValue; i++) {
 // div.innerHTML += '<span class="number">D' + b + ' roll...roll...roll...' + diceroll(a,b) +'</span>';
    div.innerHTML += '<span class="number">. . . ' + diceroll(a,b) +' </span>';
  }
}

//function clear div when clear button is clicked
function clearContent( ) {
  div.innerHTML = "Nothing rolled yet . . .";
}