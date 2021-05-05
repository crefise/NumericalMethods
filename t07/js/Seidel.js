  /* https://studfile.net/preview/2377683/page:4/ */
    function zeydelya(a,b) {
      console.log('zeydelya');

      x = new Array(b.length)
      x.fill(0);
      for (let i = 0; i < 1000; i++) {
        x = zeidel_func(a, x ,b)
      }
      for (let index = 0; index < x.length; index++) {
        if (!isFinite(x[index])) {
            throw new UserException("Для этой СЛАУ не подходит метод  Сельделя!");
        }
      }
      console.log("test:"+x);
      return x;
    }

  function zeidel_func(a, x ,b) {
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
         
     /*                  
  a = [[5,  5, -2],[3, 3,  -3],[4,  2, -5]]
  b = [1,2,3]
  x = zeidel(a, b);
           
  console.log(x);
  */


