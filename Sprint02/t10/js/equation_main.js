
function print_input_menu_differential_equation() {
    let integral_main_div = document.createElement("div");
    integral_main_div.classList.add("way_div");
    integral_main_div.innerHTML = "" + 
        "<div class = 'user_data_div'>" +
            "<select>" + 
                "<option>Method1</option>" +
                "<option>Method2</option>" +
                "<option>Method3</option>" + 
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
            "<input type='number' placeholder='a'>" +
            "<input type='number' placeholder='b'>" +
            "<input type='number' placeholder='N'>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<button>Get integral</button>"
        "</div>";
    document.body.appendChild(integral_main_div);
}


let button_differential_equation = document.getElementById("differential_equation");

button_differential_equation.onclick = () => {
    delete_exist_menu();
    button_differential_equation.style.backgroundColor = "rgb(76, 112, 117)";
    print_input_menu_differential_equation();
}


