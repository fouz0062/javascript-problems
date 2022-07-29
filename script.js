function table(a, b) {
    var a = document.getElementById("rows").value;
    var b = document.getElementById("cols").value;
    var tab = document.getElementById("tab");
    var text = document.createTextNode("please enter number greater than 1");
    if (a < 1 || b < 1 || a == undefined || b == undefined) {
        return tab.append(text);
    } else {
        let soln = "";
        soln += "<table border=1>";
        for (let i = 1; i <= a; i++) {
            soln += "<tr>";
            for (let j = 1; j <= b; j++) {
                soln += "<td>column " + j + "</td>";
            }
            soln += "</tr>";
        }
        soln += "</table>";
        return (tab.innerHTML = soln);
    }
}
//---------------------------------------
document.write(
    "<b>Duplicate a HTML Div container, which can be upto any hierarchy</b>"
);
document.write("<br>");
document.write("<br>");

function div(a, b) {
    for (let i = 0; i < a; i++) {
        document.write("<div>");
        document.write("content goes here");
        for (let j = 0; j < b; j++) {
            document.write("<div>");
            document.write("second content goes here");
            document.write("</div>");
        }
        document.write("</div>");
    }
}

div(1, 2);
document.write("<br>");
document.write("<hr>");
//----------------------------------
function pos(str, num) {
    var str = document.getElementById("nme").value;
    var num = document.getElementById("num").value;
    var char = document.getElementById("char");
    if (str.match(/\d/gi) || num == 0 || str == undefined || num == undefined) {
        document.write("please enter proper values");
    }
    var e = str.split("");
    var d = e.splice(num, 1);
    var f = [];
    for (let i = 0; i < e.length; i++) {
        if (e[i] != d) {
            f.push(e[i]);
        }
    }

    return (char.innerHTML = `${f.join("")}`);
}
//-----------------------------------
function vowels(str) {
    var vowels = document.getElementById("vowels");
    str = prompt("enter value");
    if (str.match(/\d/gi)) {
        return (vowels.innerText = "please enter alphabetic values");
    }
    const s = str.match(/[aeiou]/gi).length;
    return (vowels.innerText = `The count is : ${s}`);
}
//------------------------------
document.write(
    "<b>Swap the first and last elements of a given array of integers</b>"
);
document.write("<br>");
document.write("<br>");

function swap(arr) {
    document.write(arr);
    document.write("<br>");
    document.write("<br>");
    var firstElement = arr.splice(0, 1);
    var lastElement = arr.splice(arr.length - 1, 1);
    var arr2 = [...lastElement, ...arr, ...firstElement];
    return document.write(arr2);
}
swap([1, 18, 45, 60, 1, 56]);
document.write("<br>");
document.write("<br>");
document.write("<hr>");
//---------------------------------------------------------------
document.write("<b>Find longest string from a given array</b>");
document.write("<br>");
document.write("<br>");

function longestString(arr) {
    document.write(arr);
    document.write("<br>");
    document.write("<br>");
    var string = "";
    arr.map((str) => {
        if (string.length < str.length) {
            return (string = str);
        }
    });
    document.write(string);
}

longestString(["I", "need", "candy", "umbrella", "lion"]);

document.write("<br>");
document.write("<br>");
document.write("<hr>");
//------------------------------------------------------------
function palindrome(str) {
    var str = document.getElementById("pal").value;
    var pal2 = document.getElementById("pal2");
    var test1 = str.split("").reverse().join("");
    if (str.toLowerCase() == test1.toLowerCase()) {
        pal2.innerText = "true";
    } else {
        pal2.innerText = "false";
    }
}
//-----------------------------------------------------
function fSeries(num) {
    var num = document.getElementById("fibnum").value;
    var fibo = document.getElementById("fibo");
    let arr = [0, 1];
    if (num < 0 || num.match(/[a-z]/gi) || num == undefined) {
        fibo.innerText = "number range  from 0";
    } else if (num == 0) {
        fibo.innerText = num;
    } else if (num == 1) {
        console.log(num);
        fibo.innerText = "0" + "," + num;
    } else {
        for (let k = 0; k < num - 2; k++) {
            arr.push(arr[k] + arr[k + 1]);
        }
        return (fibo.innerText = arr);
    }
}
//------------------------------------------------------------
function factor(num) {
    var num = document.getElementById("facnum").value;
    var fac = document.getElementById("fac");

    let d = 1;
    if (num.match(/[a-z]/gi) || num == undefined) {
        fac.innerText = "number range  from 0";
    } else if (num == 0 || num == 1) {
        fac.innerText = num;
    } else {
        for (let i = num; i >= 1; i--) {
            d *= i;
        }
        fac.innerText = d;
    }
}
//------------------------------------------------------------
function pattern(num) {
    var num = document.getElementById("patnum").value;
    var ptn1 = document.getElementById("ptn1");
    if (num == 0 || num.match(/[a-z]/gi) || num == undefined) {
        ptn1.innerHTML = "Please enter number greater than 0";
    } else {
        patResult = "";
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= i; j++) {
                patResult += "<span> ^ </span>";
            }
            patResult += "<br>";
        }
        ptn1.innerHTML = patResult;
    }
}
//----------------------------------------------------------
function pyramid(num) {
    var num = document.getElementById("pyramid").value;
    var ptn2 = document.getElementById("ptn2");
    if (num == 0 || num.match(/[a-z]/gi) || num == undefined) {
        ptn2.innerHTML = "Please enter number greater than 1";
    } else {
        let res = "";
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= num - i; j++) {
                res += `&nbsp; `;
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                res += "*";
            }
            for (let j = 1; j <= num - i; j++) {
                res += `&nbsp; `;
            }
            res += "<br>";
        }
        for (let i = num; i >= 1; i--) {
            for (let j = 1; j <= num - i; j++) {
                res += `&nbsp; `;
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                res += "*";
            }
            for (let j = 1; j <= num - i; j++) {
                res += `&nbsp; `;
            }
            res += "<br>";
        }
        return (ptn2.innerHTML = res);
    }
}
//--------------------------------------------------------
function prime(num) {
    var num = document.getElementById("prime").value;
    var prime = document.getElementById("prime2");
    if (num < 2 || num.match(/[a-z]/gi) || num == undefined) {
        return (prime.innerText = `please enter number greater than 2`);
    }
    var arr = [];
    for (let i = 2; i <= num; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
        if (i == j) {
            arr.push(i);
        }
    }
    return (prime.innerText = arr);
}
//--------------------------------------------------------
function rotate(str) {
    var str = document.getElementById("rotate").value;
    var rotate = document.getElementById("rot");
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            var d = str.substring(1, str.length) + str[i];
            arr.push(d);
        } else {
            var e = arr[i - 1].substring(1, str.length) + str[i];
            arr.push(e);
        }
    }
    return (rotate.innerText = arr);
}
//-------------------------------------------------------
function sum(num) {
    var num = document.getElementById("sum").value;
    var total = document.getElementById("result");
    let total1 = 0;
    for (let i = 1; i <= num; i *= 2) {
        total1 += num / i;
        if (num / i < 1) {
            break;
        }
    }
    return (total.innerText = total1);
}
//---------------------------
// document.write("<table border=1>");
// let row = 1;
// while (row <= 2) {
//     document.write("<tr>");
//     let column = 1;
//     while (column <= 2) {
//         document.write("<td>column While" + column + "</td>");
//         column++;
//     }
//     document.write("</tr>");
//     row++;
// }

// document.write("</table>");
// //-------------------
// document.write("<br>");
// //----------------------------
// //--------------------\
// document.write("<table border=1>");
// for (let i = 1; i <= 8; i++) {
//     document.write("<tr>");
//     for (let j = 1; j <= 3; j++) {
//         document.write("<td>column " + j + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");
// //----------------------
// document.write("<br>");

//-------------------------