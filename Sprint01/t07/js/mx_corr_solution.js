function corr_sol(x) {
    for (let index = 0; index < free_members.length; index++) {
        let res = 0;
        for (let i = 0; i < free_members.length; i++) {
            res += (matrix_global[index][i] * x[i]);
        }
        if (res < free_members[index] + 0.001 && res > free_members[index] - 0.001) {
            res = 0;
            continue;
        }
        else {
            return false;
        }
        
    }
    return true;
 }