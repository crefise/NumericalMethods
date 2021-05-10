
let form_button = document.getElementById("form_main_button");


function get_corr_arr(arr) {
    let temp_arr = arr.split(/(?:\n| )+/);

    temp_arr = temp_arr.filter(function(item, pos) {
        return temp_arr.indexOf(item) == pos;
    })

    let res_arr = [];
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i] == "" || !temp_arr[i]) {
            continue;
        }
        res_arr.push(temp_arr[i]);
    }
    return res_arr;
}
form_button.onclick = (event) => {
    event.preventDefault();
    let sets = document.getElementsByClassName("set_value");

    let set_1 = sets[0].value;
    let set_2 = sets[1].value;

    set_1 = get_corr_arr(set_1);
    set_2 = get_corr_arr(set_2);



    console.log(set_1);
    console.log(set_2);

    let method_name = document.querySelector('input[name="operations"]:checked').value;

    let result;
    if (method_name == "crossing") {
        result = crossing(set_1,set_2);
    }
    if (method_name == "union") {
        result = union(set_1,set_2);
    }
    if (method_name == "difference") {
        result = difference(set_1,set_2);
    }
    if (method_name == "difference_swap") {
        result = difference(set_2,set_1);
    }
    if (method_name == "sumetric_difference") {
        result = sumetric_difference(set_1,set_2);
    }
    if (method_name == "included") {
        result = included(set_1,set_2);
    }
    if (method_name == "included_swap") {
        result = included(set_2,set_1);
    }

    
    console.log(result);

    print_result(result);
}


function print_result(result) {
    console.log("Result: " + result);
    if (document.getElementsByClassName("result_text")[0]) {
        document.getElementsByClassName("result_text")[0].remove();
    }


    let result_html = document.createElement("span");
    result_html.classList.add("result_text");
    let str = "";
    
    for (let index = 0; index < result.length; index++) {
       str += result[index] + "<br>";
    }
    if (result === true || result === false)
        result_html.innerHTML = result;
    else 
        result_html.innerHTML = str;

    document.getElementsByClassName("result_box")[0].appendChild(result_html);


}

function crossing(a,b) {
    console.log("Crossing take:");
    console.log(a);
    console.log(b);
    let x_res = [];

    for (let i = 0; i < a.length; i++) {
        for (let z = 0; z < b.length; z++) {
            if (a[i] == b[z]) {
                x_res.push(a[i]);
                break;
            }
        }
        
    }
    return x_res;
}

function union(a,b) {
    let res_arr = a.concat(b);
    res_arr = res_arr.filter(function(item, pos) {
        return res_arr.indexOf(item) == pos;
    })
    return res_arr;
}

function difference(a,b) {
    console.log("Crossing take:");
    console.log(a);
    console.log(b);
    let x_res = [];

    for (let i = 0; i < a.length; i++) {
        for (let z = 0; z < b.length; z++) {
            if (a[i] == b[z]) {
                break;
            }
            if ( z == b.length - 1)
                x_res.push(a[i]);
            
        }
        
    }
    return x_res;
}

function sumetric_difference (a,b) {
    let x_res = [];

    for (let i = 0; i < a.length; i++) {
        for (let z = 0; z < b.length; z++) {
            if (a[i] == b[z]) {
                break;
            }
            if ( z == b.length - 1)
                x_res.push(a[i]);
            
        }
        
    }

    for (let i = 0; i < b.length; i++) {
        for (let z = 0; z < a.length; z++) {
            if (b[i] == a[z]) {
                break;
            }
            if ( z == a.length - 1)
                x_res.push(b[i]);
            
        }
        
    }
    return x_res;
}

function included(a,b) {

    for (let i = 0; i < a.length; i++) {
        for (let z = 0; z < b.length; z++) {
            if (a[i] == b[z]) {
                break;
            }
            if (z == b.length - 1)
                return false;
        }
        
    }
    return true;
}