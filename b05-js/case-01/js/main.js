
// 0 1 2 3 4
// 1 2 3 4
// 2 3 4
// 3 4
// 4

let height = 5;
let space = "-";


for(let i = 0; i <= height; i++){
    let str = "";
    str = i + space;

    for(let j = i+1; j<= height; j++){
        str += j + space;
    }
    str = str.substring(0, str.length - space.length);
    str += "<br />";
    document.write(str);
}
