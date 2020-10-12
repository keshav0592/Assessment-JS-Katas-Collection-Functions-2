// Add Katas
console.log("Addition");
function add(num1, num2) {
   return  num1+num2
}
console.log(add(2,4))

// Multiply katas
console.log("Multiplication")
function multiply(num1, num2) {
    
    let total=0;
    let count=0;
    while (count < num2) {
        total = add(num1, total) 
        count += 1; 
    }


    return  total;
}

console.log(multiply(6, 4))

//Power/exponentiation

console.log(" power/exponentaition")
function power(x, n){

    let total = 1;
    let count = 0;
    while (count < n) {
        total = multiply( x, total)
        count  += 1;
    }
    return total;
}

console.log(power(2,8))

//Factorial function

console.log("Factorial function")
function factorial(num) {
    let total = 1;
    let count = 0;
    while (num > 0) {
        total = multiply( num, total)
        num -=1;
    }
    return total;
}

console.log(factorial(5))

//Fibonacci

console.log("Fibonacci Function")
function fibonacci(n) {
    let total = 0;
    let num1 = 0, num2 = 1;
    if (n === 1) {
        return 0;
    }
    if (n===2) {
        return 1;
    }
    
    let count = 2;
    while (count < n) {
        total = add( num1, num2)
        num1 = num2
        num2 = total
        count += 1
    }
return total
}

console.log(fibonacci(8))

