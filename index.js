var a = parceFloat (prompt ('Enter A'));
var b = parceFloat (prompt ('Enter B'));
var c = parceFloat (prompt ('Enter C'));
function solveQuadrEq(a, b, c){
    var d = discr(a, b, c);
    if (d < 0){ 
        var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        return 'x1= ' + x1 + ' x2 = ' + x2;
    }
}
function discr(a, b, c){
    return (b, 2) - 4 * a * c;
}