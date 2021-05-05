function det(m) {
    function minor(m, index) {
        let temp = []
    
        for (let i = 0; i < m.length; i++)
            temp.push(m[i].slice(0)) 
    
        temp.splice(0, 1)
    
        for (let i = 0; i < temp.length; i++)
            temp[i].splice(index, 1)
    
        return temp
    }
    
    if (m.length == 2)
        return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])

    let answer = 0

    for (let i = 0; i < m.length; i++)
        answer += Math.pow(-1,i) * m[0][i] * det(minor(m, i))

    return answer;
}

function invertible(matrix, b) {
  if (det(matrix) === 0) return false
  return true
}


function check_diag(matrix) {
for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    for (let j = 0; j < matrix.length; j++) {
        if (i === j) continue
        sum += matrix[i][j]
    }
    if (Math.abs(matrix[i][i]) < Math.abs(sum))
        return false
}
return true
}

function createCopy(matrix) {
    let copy = []
    for (const arr of matrix) {
        copy.push([...arr])
    }
    return copy
}