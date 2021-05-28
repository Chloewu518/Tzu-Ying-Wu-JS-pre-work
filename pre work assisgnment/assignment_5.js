var array = [1,45,32,21,5,17,43,93];
function multiplyEach(array) {
    //var product = 1;
    var i
    for (i = 0; i < array.length; i++) {
        array[i] = 7 * array[i];
        console.log(array[i])
    }
    return array;
}
multiplyEach(array);
