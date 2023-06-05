// JavaScript functions
function checkPalindrome() {
  var input = document.getElementById("inputText").value;
  var reversed = input.split("").reverse().join("");
  if (input === reversed) {
    alert("Es un palíndromo");
  } else {
    alert("No es un palíndromo");
  }
}

function findMax() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  if (num1 > num2) {
    alert(num1 + " es mayor");
  } else if (num2 > num1) {
    alert(num2 + " es mayor");
  } else {
    alert("Los números son iguales");
  }
}

function findVowels() {
  var input = document.getElementById("inputText2").value;
  var vowels = input.match(/[aeiou]/gi);
  alert("Vocales encontradas: " + vowels.join(", "));
}

function countVowels() {
  var input = document.getElementById("inputText3").value;
  var vowels = input.match(/[aeiou]/gi);
  var count = vowels ? vowels.length : 0;
  alert("Cantidad de vocales encontradas: " + count);
}
