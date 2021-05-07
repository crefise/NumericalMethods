function method_left_rectangle(func ,a, b, n) {
  let result = 0.0;
  let h = (b - a) / n;
  for(let i = 0; i < n; i++) {
    result += func(a)*h;
    a+=h;
  }
  return result;
}

/*
function my_function(x) {
  return x*x;
}

console.log("result - " + method_left_rectangle(my_function,2,5,100));
*/