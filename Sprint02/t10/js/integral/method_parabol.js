/*https://zaochnik.com/spravochnik/matematika/integraly-integrirovanie/metod-simpsona-parabol/*/

function method_parabol(func ,a, b, n) {
    let h=(b-a)/n;
    let k=0.0;
    let x=a + h
    for (let i = 1; i < n/2 + 1; i++) {
      k += 4*func(x);
      x += 2*h;
    }

    x = a + 2*h;
    for(let i = 1; i < n/2; i++) {
        k += 2*func(x)
        x += 2*h
    }
    return (h/3)*(func(a)+func(b)+k)
}

  /*
function my_function(x) {
  return x*x;
}
console.log("result - " + method_parabol(my_function,2,10,100));
*/

