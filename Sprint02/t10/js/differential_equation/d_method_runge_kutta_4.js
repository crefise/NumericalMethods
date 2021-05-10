



function d_method_eiler (func, a,b,y0,N) {

  let h = (b-a)/N;

  let res_y = new Array(N);

  res_y[0] = y0;

  let R1 = h*func(a,res_y[0]);
  let R2 = h*func(a+h/2, res_y[0] + R1/2);
  let R3 = h*func(a+h/2, res_y[0] + R2/2);
  let R4 = h*func(a+h, res_y[0] + R3);

  for (let i = 0; i < N; i++) {
    res_y[i+1] = res_y[i] + (R1 + 2*R2 + 2*R3 + R4) / 6;
    a += h;

    R1 = h*func(a,res_y[i+1]);
    R2 = h*func(a+h/2, res_y[i+1] + R1/2);
    R3 = h*func(a+h/2, res_y[i+1] + R2/2);
    R4 = h*func(a+h, res_y[i+1] + R3);
  }

  return res_y;
}

/*
function my_func (x,y) {
  return 2*x*y;
}
console.log(d_method_eiler(my_func,0,1,1,10));

*/