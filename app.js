function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('res').value;
   try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
   } catch {
      document.getElementById('res').value = 'Error';
   }
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
      Result();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});
function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {
       var num2 = eval(num1.replace('x', '*')
                           .replace('√', 'Math.sqrt')
                           .replace('x²', '**2')
                           .replace('∛', 'Math.cbrt')
                           .replace('π', 'Math.PI')
                           .replace('sin', 'Math.sin')
                           .replace('cos', 'Math.cos')
                           .replace('tan', 'Math.tan'));
       document.getElementById('res').value = num2;
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

// Function to calculate fractions
function calculateFraction() {
   var v = document.getElementById('res');
   var input = v.value.trim();

   if (input.includes('/')) {
       var parts = input.split('/');
       if (parts.length === 2) {
           try {
               var numerator = eval(parts[0].replace('x', '*'));
               var denominator = eval(parts[1].replace('x', '*'));

               if (denominator !== 0) {
                   v.value = (numerator / denominator).toString();
               } else {
                   v.value = 'Error: Division by zero';
               }
           } catch {
               v.value = 'Error: Invalid input';
           }
       } else {
           v.value = 'Error: Invalid fraction format';
       }
   } else {
       v.value = 'Error: No fraction entered';
   }
}

// Function for absolute value
function calculateAbsolute() {
   var v = document.getElementById('res');
   try {
       var result = Math.abs(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for square
function calculateSquare() {
   var v = document.getElementById('res');
   try {
       var result = Math.pow(eval(v.value.replace('x', '*')), 2);
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for square root
function calculateSquareRoot() {
   var v = document.getElementById('res');
   try {
       var result = Math.sqrt(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for cube root
function calculateCubeRoot() {
   var v = document.getElementById('res');
   try {
       var result = Math.cbrt(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for sine
function calculateSin() {
   var v = document.getElementById('res');
   try {
       var result = Math.sin(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for cosine
function calculateCos() {
   var v = document.getElementById('res');
   try {
       var result = Math.cos(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Function for tangent
function calculateTan() {
   var v = document.getElementById('res');
   try {
       var result = Math.tan(eval(v.value.replace('x', '*')));
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// New function for x^b
function calculateExponent() {
   var v = document.getElementById('res');
   var base = prompt("Enter the base (x):");
   if (base === null) return; // Cancel pressed
   var exponent = prompt("Enter the exponent (b):");
   if (exponent === null) return; // Cancel pressed

   try {
       var baseNum = eval(base.replace('x', '*'));
       var exponentNum = eval(exponent.replace('x', '*'));
       var result = Math.pow(baseNum, exponentNum);
       v.value = result;
   } catch {
       v.value = 'Error';
   }
}

// Add event listeners for the buttons
document.querySelector('input[value="a/b"]').onclick = calculateFraction;
document.querySelector('input[value="|x|"]').onclick = calculateAbsolute;
document.querySelector('input[value="x²"]').onclick = calculateSquare;
document.querySelector('input[value="√"]').onclick = calculateSquareRoot;
document.querySelector('input[value="∛"]').onclick = calculateCubeRoot;
document.querySelector('input[value="sin"]').onclick = calculateSin;
document.querySelector('input[value="cos"]').onclick = calculateCos;
document.querySelector('input[value="tan"]').onclick = calculateTan;
document.querySelector('input[value="x^b"]').onclick = calculateExponent; // Link x^b to the function

// Handle keyboard input
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});