function moveZeros(arr) {
    arr.forEach(elem => {
        if (elem === 0) {
            arr.push(arr.splice(arr.indexOf(elem), 1)[0]);
        }
    });

    return arr;
}