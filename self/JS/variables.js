
function area_of_circle(r, pi) {
    if (arguments.length == 1) {
        return r*r*3.14;
    }
    else {
        return pi*r*r;
    }
}
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}