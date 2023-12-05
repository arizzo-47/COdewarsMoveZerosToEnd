function topThreeWords(text) {
    var arr = text.replace(/[^a-zA-Z0-9 \']/g, "").toLowerCase().split(' ').filter(e => e != '');

    var modeMap = {};

    for (let i = 0; i < arr.length; i++) {
        var elem = arr[i];

        if (/[a-zA-Z]/g.test(elem)) {
            if (modeMap[elem] == null) { modeMap[elem] = 1; }
            else { modeMap[elem]++; }
        }
    }

    let sortable = [];
    for (var keyValue in modeMap) {
        sortable.push([keyValue, modeMap[keyValue]]);
    }

    sortable.sort((a, b) => b[1] - a[1]);

    var topThree = sortable.slice(0, 3);
    var res = [];

    for (let i = 0; i < topThree.length; i++) {
        res.push(topThree[i][0]);
    }

    return res;

}