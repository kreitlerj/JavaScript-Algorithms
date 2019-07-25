function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        let arr = str.split('');
        let newArr = [];
        for (let i = 0; i < num; i++) {
            newArr.push(arr[i]);
        }
        return newArr.join("") + '...';
    }
}