function addManyNumbers(name: string, ...numbers: number[]) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

var result = addManyNumbers('Example', 1, 2, 3, 5, 6, 7, 8, 9); // 41
