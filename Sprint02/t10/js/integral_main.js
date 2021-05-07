
function print_input_menu_integral() {
    let integral_main_div = document.createElement("div");
    integral_main_div.classList.add("way_div");
    integral_main_div.innerHTML = "" + 
        "<div class = 'user_data_div'>" +
            "<select class = 'select_method'>" + 
                "<option value='1'>Left rectangle method</option>" +
                "<option value='2'>Right rectangle method</option>" +
                "<option value='3'>Middle rectangle method</option>" + 
                "<option value='4'>Trapezoid method</option>" + 
                "<option value='4'>Parabol method</option>" + 
            "</select>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<select  class = 'select_function'>" + 
                "<option value='1'>y = x^2</option>" +
                "<option value='2'>y = sin(x)</option>" +
                "<option value='3'>y = x^2 + 4 * x + 25</option>" + 
            "</select>" +
        "</div>" +
        
        "<div class = 'user_data_div'>" +
            "<input type='number' placeholder='a' required id = 'a_value'>" +
            "<input type='number' placeholder='b' required id = 'b_value'>" +
            "<input type='number' placeholder='N' required id = 'N_value'>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<button id = 'get_integral_button'>Get integral</button>" +
            "<button id = 'explore_integral_button'>Explore</button>" +
        "</div>";
    document.body.appendChild(integral_main_div);
}
function print_result(x) {
    let res = document.createElement("div");
    res.classList.add("result_div");
    res.classList.add("result_text");

    res.innerHTML = x;

    document.body.appendChild(res);
}
function set_integral_button() {

    let button = document.getElementById("get_integral_button");
    button.onclick = () => {
        let a = parseFloat(document.getElementById("a_value").value);
        let b = parseFloat(document.getElementById("b_value").value);
        let N = parseInt(document.getElementById("N_value").value);

        let func;
        switch (parseInt(document.getElementsByClassName("select_function")[0].value)) {
            case 1:
                func = func1;
                break;
            case 2:
                func = func2;
                break;
            case 3:
                func = func3;
                break;
            default:
                func = func1;
                break;
        }

        let method;
        let name;
        switch (parseInt(document.getElementsByClassName("select_method")[0].value)) {
            case 1:
                name = "Left Rectangle - ";
                method = method_left_rectangle;
                break;
            case 2:
                name = "Right Rectangle - ";
                method = method_right_rectangle;
                break;
            case 3:
                name = "Middle Rectangle - ";
                method = method_rectangle;
                break;
            case 4:
                name = "Trapezoid - ";
                method = method_trapezoid;
                break;
            case 5:
                name = "Parabol - ";
                method = method_parabol;
                break;
            default:
                name = "Left Rectangle - ";
                method = method_left_rectangle;
                break;
        }


        ////////////////////////////////////////////////////
        console.log("A: "+a);
        console.log("B: "+b);
        console.log("N: "+N);
        console.log(method);
        console.log(func);
        ////////////////////////////////////////////////////

        delete_result();

        print_result( name + method(func,a,b,N).toFixed(5));
    }

}



function set_explore_button() {

    let button = document.getElementById("explore_integral_button");
    button.onclick = () => {
        let a = parseFloat(document.getElementById("a_value").value);
        let b = parseFloat(document.getElementById("b_value").value);
        let N = parseInt(document.getElementById("N_value").value);

        let func;
        switch (parseInt(document.getElementsByClassName("select_function")[0].value)) {
            case 1:
                func = func1;
                break;
            case 2:
                func = func2;
                break;
            case 3:
                func = func3;
                break;
            default:
                func = func1;
                break;
        }

        

        ////////////////////////////////////////////////////
        console.log("A: "+a);
        console.log("B: "+b);
        console.log("N: "+N);
        console.log(func);
        ////////////////////////////////////////////////////


        
        delete_result();

        print_result("Left Rectangle - " + method_left_rectangle(func,a,b,N).toFixed(5));
        print_result("Right Rectangle - " + method_right_rectangle(func,a,b,N).toFixed(5));
        print_result("Middle Rectangle - " + method_rectangle(func,a,b,N).toFixed(5));
        print_result("Parabol Rectangle - " + method_parabol(func,a,b,N).toFixed(5));
        print_result("Trapezoid Rectangle - " + method_trapezoid(func,a,b,N).toFixed(5));
    }

}
let button_inegral = document.getElementById("integral");
button_inegral.onclick = () => {
    delete_exist_menu();
    delete_result();

    button_inegral.style.backgroundColor = "rgb(76, 112, 117)";
    
    print_input_menu_integral();
    set_integral_button();
    set_explore_button();

}


