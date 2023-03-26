let num1 = document.querySelector('.input_one');
let num2 = document.querySelector('.input_two');
let add = document.querySelector('.add');
let sub = document.querySelector('.sub');
let div = document.querySelector('.div');
let multi = document.querySelector('.multi');
let result = document.querySelector('.result');

add.addEventListener('click', function() {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    result.value = val1 + val2;
});

sub.addEventListener('click', function() {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    result.value = val1 - val2;
});

div.addEventListener('click', function() {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    result.value = val1 / val2;
});

multi.addEventListener('click', function() {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    result.value = val1 * val2;
});