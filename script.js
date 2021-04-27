var a = +prompt('введите первое число');
var b = +prompt('введите второе число');
var c = +prompt('введите третье число');

if(a<b && b<c){
    var m = b;
    alert(m);
}else if(c>b && b>a){
    var m = a;
    alert(m);
}
else if(c<b && b<a){
    var m = a;
    alert(m);
}
else if(a>b && b>c){
    var m = a;
    alert(m);
}
else if(c<a && a<b){
    var m = a;
    alert(m);
}
else if(b<a && a<c){
    var m = a;
    alert(m);
}
else if(c>a && a>b){
    var m = a;
    alert(m);
}
else if(b>a && a>c){
    var m = a;
    alert(m);
}
else if(a<c && c<b){
    var m = c;
    alert(m);
}
else if(b<c && c<a){
    var m = c;
    alert(m);
}
else if(a>c && c>b){
    var m = c;
    alert(m);
}
else if(b>c && c>a){
    var m = c;
    alert(m);
}