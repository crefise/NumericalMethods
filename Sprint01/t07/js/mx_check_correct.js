
function check_iterible_diagram(matrix) {
for (let i = 0; i < matrix.length; i++) {
    
    let sum = 0;

    for (let j = 0; j < matrix.length; j++) {
        if (i === j) continue
        sum += matrix[i][j]
    }

    if (Math.abs(matrix[i][i]) < Math.abs(sum)) {
        return false;
    }
}
return true;
}

