function Determinant (matrix) {
    var J = matrix.length; if (J == 2)
       return (matrix [0] [0] * matrix [1] [1] - matrix [0] [1] * matrix [1] [0]);
    for (var tmp = [], det = j = 0; j < J; j++) {
       var minor = matrix.slice (1); for (var k = 1; k < J; k++) 
          minor [k - 1] = matrix [k].slice (0, j).concat (matrix [k].slice (j + 1));
       det += Math.pow (-1, j) * matrix [0] [j] * Determinant (minor);
       }
       return det;
}

function createCopy(matrix) {
    let copy = []
    for (const arr of matrix) {
        copy.push([...arr])
    }
    return copy
}