
function word_length(arr) {
    // write your code here
    let len = arr.map(w => w.length)
    return len
}


console.log(word_length(['java','swift','javascript','python']));