module.exports =   function reverse (n) {
    if (n < 0) {
      n = n*(-1);
    }
    let numText = String(n);
    let arr_n = numText.split('');
    let arr_n1 = arr_n.reverse();
    let arr_n2 = arr_n1.join('');
    let result = Number(arr_n2);
    return result;
}