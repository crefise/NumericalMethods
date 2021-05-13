class graph {
        constructor(name,begin,end) {
        this.name = name;
        this.begin = begin;
        this.end = end;
    }
}
let graph_size = 7;

let tops = ["А", "Б", "В","Г","Д","Е","Ж"];



let line = new Array(12);

line[0] =  new graph("a0", "А", "Б");
line[1] =  new graph("a1", "А", "В");
line[2] =  new graph("a2", "В", "Б");
line[3] =  new graph("a3", "Б", "Г");
line[4] =  new graph("a4", "В", "Г");
line[5] =  new graph("a5", "Б", "Д");
line[6] =  new graph("a6", "Г", "Д");
line[7] =  new graph("a7", "В", "Ж");
line[8] =  new graph("a8", "В", "Е");
line[9] =  new graph("a10", "Г", "Ж");
line[10] = new graph("a11", "Е", "Ж");
line[11] = new graph("a12", "Д", "Ж");


matrix_1 = [[ 0, 1, 1, 0, 0, 0, 0],
            [ 0, 0, 0, 1, 1, 0, 0],
            [ 0, 1, 0, 1, 0, 1, 1],
            [ 0, 0, 0, 0, 1, 0, 1],
            [ 0, 0, 0, 0, 0, 0, 1],
            [ 0, 0, 0, 0, 0, 0, 1],
            [ 0, 0, 0, 0, 0, 0, 0]]

let step = new Array(graph_size);

for (let i = 0; i < graph_size; i++) {
    
    step[i] = 0;

    for (let z = 0; z < line.length; z++) {
        if (tops[i] == line[z].begin) {
            step[i] += 1;
        }
    }
}

console.log(step);

let step_res = document.createElement("div");

let str = "";

for (let index = 0; index < tops.length; index++) {
    str += tops[index] + ": " + step[index] + " | ";
    
}
step_res.innerHTML = str;

document.body.appendChild(step_res);


G_res = document.createElement("div");


str = "G <br>";

for (let i = 0; i < graph_size; i++) {
    str += tops[i] + ": ";
    for (let z = 0; z < line.length; z++) {
        if (tops[i] == line[z].begin) {
            str += line[z].end + " ";
        }
    }
    str += "<br>";
}  

G_res.innerHTML = str;

document.body.appendChild(G_res);



minus_G_res = document.createElement("div");

str = "G(-1) <br>";

for (let i = 0; i < graph_size; i++) {
    str += tops[i] + ": ";
    for (let z = 0; z < line.length; z++) {
        if (tops[i] == line[z].end) {
            str += line[z].begin += " ";
        }
    }
    str += "<br>";
}  

minus_G_res.innerHTML = str;

document.body.appendChild(minus_G_res);

/*
let matrix_1 = new Array(7);

for (let i = 0; i < 7; i++) {
    matrix_1[i] = new Array(7);
}


for (let i = 0; i < 7; i++) {
    for (let z = 0; z < 7; z++) {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }


    }
    
}
*/

table_1 = document.createElement("div");
str = "<table>";
str += "<tr>";
str += "<td>";
str += " ";
str += "</td>";
for (let i = 0; i < tops.length; i++) {
    str += "<td>";
    str += tops[i]
    str += "</td>";
}
str += "</tr>";

for (let i = 0; i < 7; i++) {
    str += "<tr>";
    str += "<td>";
    str += tops[i];
    str += "</td>";
    for (let z = 0; z < 7; z++) {
        str += "<td>";
        str += matrix_1[i][z];
        str += "</td>";
        
    }
    str += "</tr>";
}
str  +="</table>";
table_1.innerHTML = str;
document.body.appendChild(table_1);





let table_2 = new Array(7);

for (let i = 0; i < 7; i++) {
    table_2[i] = new Array(12);
}

for (let i = 0; i < 7; i++) {
    for (let z = 0; z < 12; z++) {
        table_2[i][z] = 0;
    }
    
}


for (let i = 0; i < 12; i++) {

    for (let z = 0; z < 7; z++) {
        let begin = line[i].begin;
        let end = line[i].end;
        console.log("begin:"+begin+"|");
        console.log("end:"+end);
        let index_1 = tops.indexOf(begin.trim());
        let index_2 = tops.indexOf(end.trim());


        console.log("index1:"+index_1);
        console.log("index2:"+index_2);
        if (index_1 != -1)
            table_2[index_1][i] = 1;
        if (index_2 != -1)
            table_2[index_2][i] = -1;
        break;
    }

    
}




table_2_html = document.createElement("div");
str = "<table>";
str += "<tr>";
str += "<td>";
str += " ";
str += "</td>";
for (let i = 0; i < 12; i++) {
    str += "<td>";
    str += line[i].name
    str += "</td>";
}
str += "</tr>";

for (let i = 0; i < 7; i++) {
    str += "<tr>";
    str += "<td>";
    str += tops[i];
    str += "</td>";
    for (let z = 0; z < 12; z++) {
        str += "<td>";
        str += table_2[i][z];
        str += "</td>";
        
    }
    str += "</tr>";
}
str  +="</table>";
table_2_html.innerHTML = str;
document.body.appendChild(table_2_html);