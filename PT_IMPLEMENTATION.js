function PerformativeTransaction(dimensions, params) {

    if (dimensions.length != params.length) {
        console.log("Err: Provide params for each dimension.");
        return;
    } else {

        var results = Array(params[0][1]).fill().map(() => Array(dimensions.length).fill(undefined));

        for (let i = 0; i < dimensions.length; i++) {

            let currentValue = params[i][0];

            for (let j = 0; j < params[i][1]; j++) {
                results[j][i] = currentValue;
                currentValue = dimensions[i][j % dimensions[i].length](currentValue);
            }
        }

        return results;
    }
}

// TEST/DEMO:

var dimension1 = [function one(x) { return x + 1; }, function two(x) { return x + 2; }, function three(x) { return x + 3; }];
var dimension2 = [function one(x) { return x + 3; }, function two(x) { return x + 2; }, function three(x) { return x + 1; }];
var dimension3 = [function one(x) { return x + 10; }, function two(x) { return x - 5; }, function three(x) { return x * 2; }];

var thesedimensions = [dimension1, dimension2, dimension3]; // arr of arrs with subroutines

var paramsfor2dimensions = [[1, 10, 0], [1, 10, 0], [4, 5, 0]]; // dla kazdego wymiaru dajemy wartość, ilość wykonań i offset

console.log(PerformativeTransaction(thesedimensions, paramsfor2dimensions));

/* OUTPUT:

[
    [ 1, 1, 4 ],
    [ 2, 4, 14 ],
    [ 4, 6, 9 ],
    [ 7, 7, 18 ],
    [ 8, 10, 28 ],
    [ 10, 12, undefined ],
    [ 13, 13, undefined ],
    [ 14, 16, undefined ],
    [ 16, 18, undefined ],
    [ 19, 19, undefined ]
  ] */