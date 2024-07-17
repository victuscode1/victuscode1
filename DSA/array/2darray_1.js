// var array = [[1, 2, 3, 4],
//     [2, 3, 4, 5],
//     [5, 4, 3, 2]
// ];
// for (var i = 0; i <= array.length; i++) {
//     for (var j = 0; j <= array[i].length; j++) {
//         console.log(array[i][j]);
//     }
// }


var array = [[1, 2, 3, 4],
            [2, 3, 4, 5],
            [5, 4, 3, 2],
            [7, 8, 9, 0]
];

if (array[i]/2 ==0) {
    for (var i = 0; i <= array.length; i++) {
        for (var j = 0; j <= array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

else {
    for (var i = array.length; i >= 0; i--) {
        for (var j = array[i].length; j >= 0; j--) {
            console.log(array[i][j]);
        }
    }
}

