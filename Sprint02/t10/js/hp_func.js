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
