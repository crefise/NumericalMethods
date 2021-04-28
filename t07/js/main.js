document.getElementById("size_matrix_html").onchange = () => {
    console.log("changed!");

    if (document.getElementsByClassName("my_table")[0]) {
        document.getElementsByClassName("my_table")[0].remove();
    }


    let size = document.getElementById("size_matrix_html").value;
    let table = document.createElement("table")
    table.classList.add("my_table");

    
    let str_html = "";

    
        for (let i = 0; i < size; i++) {
            str_html += "<tr>"

        for (let z = 0; z < size; z++) {
            str_html += "<td><input class ='table_input' required></td>";
        }
            str_html += "<td><input class ='free_member_input' required></td>";
        str_html += "</tr>"
    }

    table.innerHTML = str_html;

    document.getElementById("table_html").appendChild(table);   
}