'use strict'
function box1(a){
    returna*9;

}

function box2(a,b,c,d){
    return a+b+c+d;
}
if (box1){
    console.log(box1(8));
}else{
    console.log(box2(4+6+4+9))
}
