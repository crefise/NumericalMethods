
function print_input_menu_differential_equation() {
    let integral_main_div = document.createElement("div");
    integral_main_div.classList.add("way_div");
    integral_main_div.innerHTML = "" + 
        "<div class = 'user_data_div'>" +
            "<select class = 'de_select_method'>" + 
                "<option value='1'>Eiler method</option>" +
                "<option value='2'>Runge Kutta(2) method</option>" +
                "<option value='3'>Runge Kutta(3) method</option>" + 
                "<option value='4'>Runge Kutta(4) method</option>" + 
            "</select>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<select class = 'de_select_function'>" + 
                "<option value='1'>F(x,y)=y * x</option>" +
                "<option value='2'>F(x,y)=sin(x) * y</option>" +
                "<option value='3'>F(x,y)=x * x + y * y</option>" + 
            "</select>" +
        "</div>" +
        
        "<div class = 'user_data_div'>" +
            "<input type='number' placeholder='a' id = 'de_a_value'>" +
            "<input type='number' placeholder='b' id = 'de_b_value'>" +
            "<input type='number' placeholder='y(0)' id = 'de_y_value'>" +
            "<input type='number' placeholder='N' id = 'de_N_value'>" +
        "</div>" +

        "<div class = 'user_data_div'>" +
            "<button id = 'get_equation_button'>Get integral</button>"
        "</div>";
    document.body.appendChild(integral_main_div);
}


function set_equation_button() {

    let button = document.getElementById("get_equation_button");
    button.onclick = () => {
        let a = parseFloat(document.getElementById("de_a_value").value);
        let b = parseFloat(document.getElementById("de_b_value").value);
        let y0 = parseFloat(document.getElementById("de_y_value").value);
        let N = parseInt(document.getElementById("de_N_value").value);

        let func;
        let func_name;
        switch (parseInt(document.getElementsByClassName("de_select_function")[0].value)) {
            case 1:
                func = de_func1;
                func_name = "y` = x*y";
                break;
            case 2:
                func = de_func2;
                func_name = "y` = x*y";
                break;
            case 3:
                func = de_func3;
                func_name = "y` = x*y";
                break;
            default:
                func = de_func4;
                func_name = "y` = x*y";
                break;
        }

        let method;
        let name;
        switch (parseInt(document.getElementsByClassName("de_select_method")[0].value)) {
            case 1:
                name = "Eiller - ";
                method = d_method_eiler;
                break;
            case 2:
                name = "Runge Kutta(2) - ";
                method = d_runge_kutta_2;
                break;
            case 3:
                name = "Runge Kutta(3) - ";
                method = d_runge_kutta_3;
                break;
            case 4:
                name = "Runge Kutta(4) - ";
                method = d_runge_kutta_4;
                break;
            default:
                name = "Eiller - ";
                method = d_method_eiler;
                break;
        }


        ////////////////////////////////////////////////////
        console.log("A: "+a);
        console.log("B: "+b);
        console.log("Y: "+y0);
        console.log("N: "+N);
        console.log(method);
        console.log(func);
        ////////////////////////////////////////////////////

        delete_result();


        ///console.log(method(func,a,b,y0,N));

        let x_arr = new Array(N);
        let temp = a;
        let h = (b-a)/N;
        for (let i = 0; i < N; i++) {
          x_arr[i] = temp;
          temp += h;
        }

        let y_arr = method(func,a,b,y0,N);

        fix_arr(x_arr);
        fix_arr(y_arr);



        print_result(["X"],["Y"]);
        print_result(x_arr,y_arr);
        print_chart(x_arr,y_arr, func_name);
    }

}
function print_chart(x_arr,y_arr, label) {
    let chart_div = document.createElement("div");
    chart_div.innerHTML = '<canvas id="speedChart" width="400" height="200"></canvas>';
    chart_div.classList.add("result_div");
    chart_div.classList.add("result_text");
    document.body.appendChild(chart_div);

    var speedCanvas = document.getElementById("speedChart");

    //Chart.defaults.global.defaultFontFamily = "Lato";
   // Chart.defaults.global.defaultFontSize = 18;

        var data_chart = {
        labels: x_arr,
        datasets: [{
            label: label,
            data: y_arr,
            lineTension: 0,
            fill: false,
            borderColor: 'black',
            backgroundColor: "white"
        },
    ]
        };

        var chartOptions = {
        legend: {
            display: true,
            position: 'top',

        }};

        var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: data_chart,
            options: chartOptions
        });
    
}


let button_differential_equation = document.getElementById("differential_equation");

button_differential_equation.onclick = () => {
    delete_exist_menu();
    delete_result();
    button_differential_equation.style.backgroundColor = "rgb(76, 112, 117)";
    print_input_menu_differential_equation();
    set_equation_button();

}


