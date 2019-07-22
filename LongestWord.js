function findLongestWordLength(str) {
    let longest = 0;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}