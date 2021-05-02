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
    let free_members = new Array(size);

    for (let i = 0; i < size; i++) {
        free_members[i] = parseInt(free_input_table[i].value);
    }


    console.log(free_members);

    return [size, matrix, free_members];
}

function get_solve_sle(matrix, free_members) {
   let method_name = document.querySelector('input[name="method"]:checked').value;

    if (method_name == "cramer") {
        return cramer(matrix, free_members);
    } 
    
    if (method_name == "gausa") {
        return gausa(matrix, free_members);
    } 

    if (method_name == "zeydelya") {
        return zeydelya(matrix, free_members);
    } 

    return NaN;

}

function print_result(result) {
    if (document.getElementsByClassName("result_text")[0]) {
        document.getElementsByClassName("result_text")[0].remove();
    }

    let result_html = document.createElement("h1");
    result_html.classList.add("result_text");
    let str = document.querySelector('input[name="method"]:checked').value + "<br>";
    if (!isNaN(result[0]) && isFinite(result[0])) {
        for (let index = 0; index < result.length; index++) {
            str+= "x(" + index +"): " + (result[index]) + "<br>";
        }
    }
    else {
        result_html.classList.add("error_text");
        str = "Система не не может быть решена этим методом (система не имеет решений или имеет множество решений).";
    }
    result_html.innerHTML = str;

    document.getElementById("result_box").appendChild(result_html);

    console.log(result);
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

    let result = get_solve_sle(user_data[1], user_data[2]);

    print_result(result);
}