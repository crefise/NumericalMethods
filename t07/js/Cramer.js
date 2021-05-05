function formMatrix (slau, type)
{
for (var matrix = [], j = 0, J = slau.length; j < J; j++)
   {
   matrix [j] = slau [j].slice (0, slau [j].length - 1);
   if (type) matrix [j] [type - 1] = slau [j] [slau [j].length - 1];
   }
    return matrix;
}
 

function compDeterm (matrix) {
var J = matrix.length; if (J == 2)
   return (matrix [0] [0] * matrix [1] [1] - matrix [0] [1] * matrix [1] [0]);
for (var tmp = [], det = j = 0; j < J; j++) {
   var minor = matrix.slice (1); for (var k = 1; k < J; k++) 
      minor [k - 1] = matrix [k].slice (0, j).concat (matrix [k].slice (j + 1));
   det += Math.pow (-1, j) * matrix [0] [j] * compDeterm (minor);
   }
return det;
}
 

function cramer (arr1, arr2) {

    slau = arr1.slice();
    for (let index = 0; index < arr2.length; index++) {
        slau[index].push(arr2[index]);
    }

    var d0 = compDeterm(formMatrix (slau, 0));

    for (var roots = [], j = 0, J = slau.length; j < J; j++)
        roots [j] = compDeterm(formMatrix (slau, j + 1)) / d0;

        for (let index = 0; index < roots.length; index++) {
           if (!isFinite(roots[index])) {
               throw new UserException("Для этой СЛАУ не подходит метод Крамера!");
           }
        }
        return roots;
}
/*
var arr1 = [[5,  5, -2],
            [3, 3,  -3],
            [4,  2, -5]];

var arr2 = [1,2,3]


alert(calcRoots(arr1, arr2));
*/