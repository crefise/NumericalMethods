
function print_input_menu_integral() {
    let integral_main_div = document.createElement("div");
    integral_main_div.classList.add("way_div");
    integral_main_div.innerHTML = "" + 
        "<div class = 'user_data_div'>" +
            "<select>" + 
                "<option>Left rectangle method</option>" +
                "<option>Right rectangle method</option>" +
                "<option>Middle rectangle method</option>" + 
                "<option>Trapezoid method</option>" + 
            "</select>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<select>" + 
                "<option>y=2*x</option>" +
                "<option>y=2eps(x)</option>" +
                "<option>y=x*3+25</option>" + 
            "</select>" +
        "</div>" +
        
        "<div class = 'user_data_div'>" +
            "<input type='number' placeholder='a' required>" +
            "<input type='number' placeholder='b' required>" +
            "<input type='number' placeholder='N' required>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<button id = 'get_integral_button'>Get integral</button>"
        "</div>";
    document.body.appendChild(integral_main_div);
}

function sett_integral_button() {

    let button = document.getElementById("get_integral_button");
    button.onclick = () => {
        console.log("heell");
    }

}


let button_inegral = document.getElementById("integral");
//button_inegral.onclick = () => {
    delete_exist_menu();
    button_inegral.style.backgroundColor = "rgb(76, 112, 117)";
    print_input_menu_integral();
    sett_integral_button();

//}


