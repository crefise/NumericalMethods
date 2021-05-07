function UserException(message) {
    this.message = message;
 }








var matrix_global;
var free_members;
var x_res;
 function print_check_button() {



    let check_buttom = document.createElement("div");
    check_buttom.classList.add("result_button");

    
    if(corr_sol(x_res)) {
        check_buttom.innerHTML = "true";
    } else {
        check_buttom.innerHTML = "false";
    }


    document.getElementById("result_box").appendChild(check_buttom);

    
 }



function get_user_input() {
    let size = document.getElementById("size_matrix_html").value;

    // Получаем введенную  пользователем основную матрицу
    let matrix_input_table = document.getElementsByClassName("table_input");

    let matrix = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(3);
    }
  
    let count = 0;
    for (let i = 0; i < size; i++) {
        for (let z = 0; z < size; z++) {
            matrix[i][z] = parseInt(matrix_input_table[count].value);
            count++;
        }
    }

    // Получаем свободные члены
    let free_input_table = document.getElementsByClassName("free_member_input");
    free_members = new Array(size);

    for (let i = 0; i < size; i++) {
        free_members[i] = parseInt(free_input_table[i].value);
    }


    console.log(free_members);

    matrix_global = matrix.slice();

    return [size, matrix, free_members];
}

function get_solve_sle(matrix, free_members) {
   let method_name = document.querySelector('input[name="method"]:checked').value;
   console.log(matrix);


    if (method_name == "Cramer") {
        console.log("start2: " + matrix);
        console.log(matrix);
        if (free_members.length > 4) {
            throw new UserException("Max 4-n matrix for Cramer`s method");
        }
        x_res =  cramer(matrix.slice(), free_members);
        return x_res;
    } 
    
    if (method_name == "Gaus") {
        console.log("start2: " + matrix);
        x_res = gausa(createCopy(matrix), free_members);
        return x_res;
    } 

    if (method_name == "Saidel") {
        console.log("start2: " + matrix);
        console.log(matrix.slice());
        x_res = Saidel(createCopy(matrix), free_members);
        return x_res;
    } 

    if (method_name == "Jacobi") {
        x_res =   Jacobi(createCopy(matrix), free_members);    
        return x_res;
    } 

    if (method_name == "Gauss-Jordan") {
        x_res =  Gauss_Jordan(createCopy(matrix), free_members);   
        return x_res; 
    } 

    return NaN;

}

function print_result(result) {
    console.log("Result: " + result);
    if (document.getElementsByClassName("result_text")[0]) {
        document.getElementsByClassName("result_text")[0].remove();
    }
    if (document.getElementsByClassName("result_button")[0]) {
        document.getElementsByClassName("result_button")[0].remove();
    }

    let result_html = document.createElement("span");
    result_html.classList.add("result_text");
    let str = "<h1>" + document.querySelector('input[name="method"]:checked').value +"</h1>"+ "<br>";
    
    for (let index = 0; index < result.length; index++) {
        str+= "x(" + index +"): " + (Number(result[index]).toFixed(5)) + "<br>";
    }

    result_html.innerHTML = str;

    document.getElementById("result_box").appendChild(result_html);

    print_check_button();
}
function print_error(message) {
    if (document.getElementsByClassName("result_text")[0]) {
        document.getElementsByClassName("result_text")[0].remove();
    }
    if (document.getElementsByClassName("result_button")[0]) {
        document.getElementsByClassName("result_button")[0].remove();
    }
    let result_html = document.createElement("span");
    result_html.classList.add("result_text");

    result_html.innerHTML = message;

    document.getElementById("result_box").appendChild(result_html);
}

document.getElementById("size_matrix_html").onchange = () => {

    if (document.getElementsByClassName("my_table")[0]) {
        document.getElementsByClassName("my_table")[0].remove();
    }

    let size = document.getElementById("size_matrix_html").value;
    let table = document.createElement("table");

    table.classList.add("my_table");

    let str_html = "";

    for (let i = 0; i < size; i++) {
        str_html += "<tr>";

        for (let z = 0; z < size; z++) {
            str_html += "<td><input class ='table_input' required></td>";
        }

        str_html += "<td><input class ='free_member_input' required></td>";
        str_html += "</tr>"
    }

    table.innerHTML = str_html;

    document.getElementById("table_html").appendChild(table);   
}



document.getElementsByClassName("my_form")[0].onsubmit = (event) => {

    event.preventDefault();



    let user_data = get_user_input();
    // 0 - size, 1 - matrix, 2 - free_members
    try {
        let result = get_solve_sle(user_data[1], user_data[2]);
        print_result(result);
    } catch(e) {
        print_error(e.message);
    }
    


}

function load_from_file(object) {
    let file = object.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        let file_str = reader.result;

        let file_array = file_str.split(/(?:\n| )+/);

        let size = file_array[0];



        if (document.getElementsByClassName("my_table")[0]) {
            document.getElementsByClassName("my_table")[0].remove();
        }
    
        document.getElementById("size_matrix_html").value = size;
        let table = document.createElement("table");
    
        table.classList.add("my_table");
    
        let str_html = "";
        let index = 1;
        for (let i = 0; i < size; i++) {
            str_html += "<tr>";
    
            for (let z = 0; z < size; z++) {
                str_html += "<td><input class ='table_input' required value=\" " + file_array[index++] + "\"></td>";
            }
            
            str_html += "<td><input class ='free_member_input' value=\" " + file_array[size*size + i + 1] + "\" required></td>";
            str_html += "</tr>"
        }

        table.innerHTML = str_html;

        document.getElementById("table_html").appendChild(table);   
    };
}
