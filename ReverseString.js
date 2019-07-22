function reverseString(str) {
    let revArr = [];
    let arr = str.split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    let revStr = revArr.join('');
    return revStr;
}