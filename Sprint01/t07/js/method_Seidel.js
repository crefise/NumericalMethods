  /* https://studfile.net/preview/2377683/page:4/ */
  function Saidel(a,b) {
    let size = b.length;  
    if (size > 2) {
      return cramer(a,b);
    }
    x = new Array(b.length)
    x.fill(0);
    for (let i = 0; i < 1000; i++) {
      x = Saidel_func(a, x ,b)
    }
    return x;
  }

function Saidel_func(a, x ,b) {
    let n = b.length;           

    for (let j = 0; j < n; j++) {      
        d = b[j]                  
        for (let i = 0; i < n; i++) {    
            if(j != i) {
                d-=a[j][i] * x[i];
            }
        }
        x[j] = d / a[j][j]
    }
    return x; 
}
       
