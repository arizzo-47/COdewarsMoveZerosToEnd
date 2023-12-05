var maxSequence = function (arr) {
    var listCount = 0, sum = 0;
    var highestVal = sum;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        listCount++;

        if (sum <= 0) { sum = 0, listCount = 0; }

        if (sum > highestVal && listCount > 1) { highestVal = sum; }
    }

    return Math.max(highestVal, ...arr);
}