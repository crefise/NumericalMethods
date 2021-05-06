function Iteration(iter_item, n, m) { //Функция итеррация
    for(iter_item=0;iter_item<(n-1);iter_item++) { //Цикл выполнения итерраций
        if (m[iter_item][iter_item] == 0) SwapRows(iter_item,size,m); //Проверка на ноль
        for(j=n; j>=iter_item; j--) {
            m[iter_item][j] /= m[iter_item][iter_item]; //Делим строку i на а[i][i]
        }
        for(i=iter_item+1; i<n; i++) { //Выполнение операций со строками
            for(j=n;j>=iter_item;j--) {
                m[i][j] -= m[iter_item][j] * m[i][iter_item];
            }
        }
    }
}

function SwapRows(iter_item, n, m) {
    for(i=iter_item+1;i<n;i++) {
        if(m[i][iter_item] !== 0) {
            for(j=0;j<=n;j++) {
                k = m[i-1][j];
                m[i-1][j] = m[i][j];
                m[i][j] = k;
            }
        } 
    }
}

function gausa(arr1, arr2) {//Функция поиска и вывода корней
    n = arr2.length;
    m = createCopy(arr1);
    console.log("le:" + arr2.length);
    for (let index = 0; index < arr2.length; index++) {
        m[index].push(arr2[index]);
    }

    size = n;
    Iteration(n, size, m);
    var l=new Array(size); //Массив ответов
    l[n-1] = m[n-1][n]/m[n-1][n-1];
    for(i=n-2;i>=0;i--) {
        k=0;
        for(j=n-1;j>i;j--) {
            k = (m[i][j]*l[j]) + k;
        }
        l[i] = m[i][n] - k;
    }
    for (let index = 0; index < l.length; index++) {
        if (!isFinite(l[index])) {
            throw new UserException("Incorect matrix for this method.");
        }
     }
    return l;
}
