/**
 * Requirement:  create a function that receives an array (M) and integer value (N). 
 * This function has to return an array of the first possible solution.
 * Example: numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].
 * 
 * @param numbers 
 * @param n 
 * @returns find_result
 */

function findOutNumbers(numbers: number[], n: number): number[] {
    // declare a variable to store the result
    var find_result: number[] = new Array();
    //var first_value: number = 0;
    //var last_value: number = 0;
    var sum_all_array_values: number = numbers.reduce((a, b) => a + b, 0);
    // check if the array is empty
    if (!numbers.length) {
        // show the array empty
        console.log('The array is empty');
        return find_result;
    }
    // check if the sum of the array is less than the number
    if (sum_all_array_values < n) {
        console.log('The sum of the array is less than the number');
        return find_result;
    }
    // check if the sum of the array is equal to the number
    if (sum_all_array_values === n) {
        // show the array
        console.log(numbers);
        find_result = numbers;
        return find_result;
    }
    // check if the sum of the array is greater than the number
    if (sum_all_array_values > n) {
        for (var i = 0; i < numbers.length; i++) {
            //console.log('first value: ' + numbers[i]);
            //console.log('The value of the array is: ' + numbers[i]);
            find_result.push(numbers[i]);
            var sum: number = numbers[i];

            for (var j = 0; j < numbers.length; j++) {
                //console.log('last value: ' + numbers[j]);
                if (j !== i) {
                    //console.log('%s -> %s', numbers[i], numbers[j]);
                    //console.log(sum + ' + ' + numbers[j] + ' = ' + (sum + numbers[j]));
                    sum = sum + numbers[j];
                    //console.log('result of the sum is: ' + sum);

                    if (sum < n) {
                        find_result.push(numbers[j]);
                        //console.log('add the value of the array: ' + find_result);
                    }

                    if (sum === n) {
                        find_result.push(numbers[j]);
                        //console.log(find_result);
                        i = numbers.length;
                        j = numbers.length;
                        return find_result;
                    }

                    if (j === numbers.length - 1) {
                        //console.log('clear array:',find_result);
                        find_result = [];
                    }
                }
            }
        }
        /*var sum_result: number = 0;
        // set the first value
        for (var i = 0; i < numbers.length; i++) {
            first_value = numbers[i];
            // set the last value
            for (var j = i + 1; j < numbers.length; j++) {
                last_value = numbers[j];
                sum_result = first_value + last_value;
                // check if the sum of the array is equal to the number
                if (sum_result === n) {
                    find_result.push(first_value);
                    find_result.push(last_value);
                    // show the array
                    console.log(find_result);
                }
            }
        }*/
    }
    //return find_result;
    return find_result;
}

console.log('->',findOutNumbers([2, 5, 8, 14, 0], 10));
