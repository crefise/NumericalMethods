function delete_exist_menu() {
    if(document.getElementsByClassName("way_div")[0]) {
        document.getElementsByClassName("way_div")[0].remove();
        document.getElementsByTagName("button")[0].style.backgroundColor = "transparent";
        document.getElementsByTagName("button")[1].style.backgroundColor = "transparent";
    }
}

function func1(x) {
    return x*x;
}

function func2(x) {
    return Math.sin(x);
}

function func3(x) {
    return x*x + 4*x + 25;
}

function delete_result() {
    let arr = document.getElementsByClassName("result_div");
    let size = arr.length;

    for (let index = 0; index < size; index++) {
        arr[0].remove();
    }
}

function de_func1(x,y) {
    return x*y;
}

function de_func2(x,y) {
    return Math.sin(x)*y;
}

function de_func3(x,y) {
    return x*x+y*y;
}

function print_result(name_arr,x_arr) {
    let res = document.createElement("div");
    res.classList.add("result_div");
    res.classList.add("result_text");

    let str = "<table>";
    

    for (let i = 0; i < name_arr.length; i++) {
        str += "<tr>";

        str += "<td>";
        str += name_arr[i];
        str += "</td>";

        str += "<td>";
        str += x_arr[i];
        str += "</td>";

        str += "</tr>";
    }

    str += "</table>";

    res.innerHTML = str;
    document.body.appendChild(res);
}