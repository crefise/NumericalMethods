function formMatrix (slau, type)
{
for (var matrix = [], j = 0, J = slau.length; j < J; j++)
   {
   matrix [j] = slau [j].slice (0, slau [j].length - 1);
   if (type) matrix [j] [type - 1] = slau [j] [slau [j].length - 1];
   }
    return matrix;
}
 
function cramer (arr1, arr2) {
    slau = arr1.slice();
    for (let index = 0; index < arr2.length; index++) {
        slau[index].push(arr2[index]);
    }

    var d0 = Determinant(formMatrix (slau, 0));
    console.log("Determinant:" + d0);

   if (d0 == 0) {
      throw new UserException("Incorect matrix for this method.");
   }


    for (var roots = [], j = 0, J = slau.length; j < J; j++) {
        roots [j] = Determinant(formMatrix (slau, j + 1)) / d0;
    }
        return roots;
}
