



function d_method_eiler (func, a,b,y0,N) {
  let h = (b - a) / N;
  let resut_y = new Array(N);
  resut_y[0] = y0;

  let x = a;

  for (let index = 0; index < N; index++) {
    resut_y[index+1] = resut_y[index] + h * func(x,resut_y[index]);
    x += h;
  }

  return resut_y;
}

/*
function my_func (x,y) {
  return 2*x*y;
}
console.log(d_method_eiler(my_func,0,1,1,10))

*/