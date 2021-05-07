function delete_exist_menu() {
    if(document.getElementsByClassName("way_div")[0]) {
        document.getElementsByClassName("way_div")[0].remove();
        document.getElementsByTagName("button")[0].style.backgroundColor = "transparent";
        document.getElementsByTagName("button")[1].style.backgroundColor = "transparent";
    }
}