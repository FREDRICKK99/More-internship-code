// Day 0: Hello, World!


/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);



    // Day 0: Data Types


    /**
     *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
     *   Print three lines:
     *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
     *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
     *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
     *
     *	Parameter(s):
     *   secondInteger - The string representation of an integer.
     *   secondDecimal - The string representation of a floating-point number.
     *   secondString - A string consisting of one or more space-separated words.
     **/
    function performOperation(secondInteger, secondDecimal, secondString) {
        // Declare a variable named 'firstInteger' and initialize with integer value 4.
        const firstInteger = 4;

        // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
        const firstDecimal = 4.0;

        // Declare a variable named 'firstString' and initialize with the string "HackerRank".
        const firstString = 'HackerRank ';

        // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
        console.log(firstInteger + Number(secondInteger));

        // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
        console.log(firstDecimal + Number(secondDecimal));

        // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
        console.log(firstString + secondString);
    }


    // Day 2: Operators
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }

    /*
     * Complete the 'solve' function below.
     *
     * The function accepts following parameters:
     *  1. DOUBLE meal_cost
     *  2. INTEGER tip_percent
     *  3. INTEGER tax_percent
     */

    function solve(meal_cost, tip_percent, tax_percent) {
        // Write your code here
        const tip = (tip_percent / 100) * meal_cost;
        let tax = (tax_percent / 100) * meal_cost;
        let total = Math.round(meal_cost + tip + tax);

        console.log(total);
    }

    function main() {
        const meal_cost = parseFloat(readLine().trim());

        const tip_percent = parseInt(readLine().trim(), 10);

        const tax_percent = parseInt(readLine().trim(), 10);

        solve(meal_cost, tip_percent, tax_percent);
    }

    // Day 3: Arrays


    /**
     *   Return the second largest number in the array.
     *   @param {Number[]} nums - An array of numbers.
     *   @return {Number} The second largest number in the array.
     **/
    function getSecondLargest(nums) {
        // Complete the function
        var max = 0,
            secondmax = 0;

        for (var i = 0; i < nums.length; i++) {

            if (nums[i] > max) {
                secondmax = max;
                max = nums[i];
            } else if (nums[i] < max && nums[i] > secondmax) {
                secondmax = nums[i];
            }

        }
        return secondmax;
    }


    // Day 3: Intro to Conditional Statements
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }




    function main() {
        const N = parseInt(readLine().trim(), 10);
        if (N % 2 !== 0) {
            return console.log('Weird')
        } else {
            if (N >= 2 && N <= 5) {
                return console.log('Not Weird')
            } else if (N >= 6 && N <= 20) {
                return console.log('Weird')
            } else if (N > 20) {
                return console.log('Not Weird')
            }
        }
    }


    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });


    // Day 3: Intro to Conditional Statements



    function readLine() {
        return inputString[currentLine++];
    }




    function main() {
        const N = parseInt(readLine().trim(), 10);
        if (N % 2 !== 0) {
            return console.log('Weird')
        } else {
            if (N >= 2 && N <= 5) {
                return console.log('Not Weird')
            } else if (N >= 6 && N <= 20) {
                return console.log('Weird')
            } else if (N > 20) {
                return console.log('Not Weird')
            }
        }
    }



    // Day 4: Class vs. Instance


    function Person(initialAge) {
        // Add some more code to run some checks on initialAge
        if (initialAge < 0) {
            initialAge = 0
            console.log("Age is not valid, setting age to 0.")
        } else {
            age = initialAge
        }

        this.amIOld = function() {
            // Do some computations in here and print out the correct statement to the console
            if (initialAge < 13) {
                console.log("You are young.")
            } else if (initialAge >= 13 && initialAge < 18) {
                console.log("You are a teenager.")
            } else {
                console.log("You are old.")
            }


        };
        this.yearPasses = function() {
            // Increment the age of the person in here

            initialAge += 1
        };
    }


    // Day 5: Loops
    // 'use strict';

    // process.stdin.resume();
    // process.stdin.setEncoding('utf-8');

    // let inputString = '';
    // let currentLine = 0;

    // process.stdin.on('data', function(inputStdin) {
    //     inputString += inputStdin;
    // });

    // process.stdin.on('end', function() {
    //     inputString = inputString.split('\n');

    //     main();
    // });

    // function readLine() {
    //     return inputString[currentLine++];
    // }

    // function main() {
    //     var N = parseInt(readLine());
    //     printdis(N);

    // }


    // function main() {
    //     const n = parseInt(readLine().trim(), 10);
    //     for(let i  =1; i >=11; i++){
    //         console.log("{0} x {1} = {2}".format("n ","i", "n*i"));
    //     }

    // }


    process.stdin.resume();
    process.stdin.setEncoding('ascii');

    var input_stdin = "";
    var input_stdin_array = "";
    var input_currentline = 0;

    process.stdin.on('data', function(data) {
        input_stdin += data;
    });

    process.stdin.on('end', function() {
        input_stdin_array = input_stdin.split("\n");
        main();
    });

    function readLine() {
        return input_stdin_array[input_currentline++];
    }

    function printdis(N) {
        var i, temp;
        for (i = 1; i <= 10; i++) {
            temp = N * i;
            console.log(N + " x " + i + " = " + temp);
        }
    }

    /////////////// ignore above this line ////////////////////

    function main() {
        var N = parseInt(readLine());
        printdis(N);

    }


    // * https://www.hackerrank.com/challenges/30-loops */

    // process.stdin.resume();
    // process.stdin.setEncoding('ascii');

    // var input_stdin = "";
    // var input_stdin_array = "";
    // var input_currentline = 0;

    // process.stdin.on('data', function (data) {
    //     input_stdin += data;
    // });

    // process.stdin.on('end', function () {
    //     input_stdin_array = input_stdin.split("\n");
    //     main();    
    // });

    // function readLine() {
    //     return input_stdin_array[input_currentline++];
    // }

    // /////////////// ignore above this line ////////////////////

    // function main() {
    //     var N = parseInt(readLine());

    //     for (var x = 1; x < 11; x++)
    //         {
    //             var result = N*x;
    //             console.log(N.toString() + " x " + x + " = " + result.toString());
    //         }

    // }

    // Day 6: Let's Review

    function processData(input) {
        //Enter your code here

        // var n = window.prompt("input test cases: ");
        // var name = window.prompt("Enter your name: ");

        // for(let i=0; i<n; i++){
        //     let test_string = input();
        //     let even_indexed_character = '';
        //     let odd_indexed_character = '';

        // }


        //     for (j = 0;i < test_string.length; i++){

        //         if (j%2 == 0){
        //              even_indexed_character += test_string[j]
        //          }

        //         else{
        //              odd_indexed_character += test_string[j]
        //         }

        //     }


        //     console.log("{} {}".format(even_indexed_character,odd_indexed_character))

        message = input.split("\n");

        var n = parseInt(message[0]);

        for (var x = 0; x < n; x++) {
            var m = message[x + 1];
            var l = m.length;
            var arr = m.split('');
            var ra = "";
            var rb = "";

            for (var y = 0; y < l; y++) {
                if (y % 2 == 0)
                    ra = ra + arr[y];
                else
                    rb = rb + arr[y];
            }
            console.log(ra + " " + rb);

        }
    }

    // } 

    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    _input = "";
    process.stdin.on("data", function(input) {
        _input += input;
    });

    process.stdin.on("end", function() {
        processData(_input);
    });

    // Day 7: Arrays

    #
    !/bin/python
    3

    import math
    import os
    import random
    import re
    import sys



    if __name__ == '__main__':
        n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    # print("{} {} {} {} {}".format(arr))# print(arr)

    # arr = [1, 2, 3, 4, 5];#
    print("Original array: ");#
    for i in range(0, len(arr)): #print(arr[i]), #print("Array in reverse order: ");#
    Loop through the array in reverse order
    for i in range(len(arr) - 1, -1, -1):
        print(arr[i], end = " "),


        // Day 8: Dictionaries and Maps

        #Enter your code here.Read input from STDIN.Print output to STDOUT
    import sys
    n = int(sys.stdin.readline().strip())
    phone_book = dict()
    for i in range(n):
        entry = sys.stdin.readline().strip().split(' ')
    phone_book[entry[0]] = entry[1]

    query = sys.stdin.readline().strip()
    while query:
        phone_number = phone_book.get(query)
    if phone_number:
        print(query + '=' + phone_number)
    else :
        print('Not found')
    query = sys.stdin.readline().strip()


    // Day 9: Recursion 3

    // 'use strict';

    // const fs = require('fs');

    // process.stdin.resume();
    // process.stdin.setEncoding('utf-8');

    // let inputString = '';
    // let currentLine = 0;

    // process.stdin.on('data', function(inputStdin) {
    //     inputString += inputStdin;
    // });

    // process.stdin.on('end', function() {
    //     inputString = inputString.split('\n');

    //     main();
    // });

    // function readLine() {
    //     return inputString[currentLine++];
    // }

    // /*
    //  * Complete the 'factorial' function below.
    //  *
    //  * The function is expected to return an INTEGER.
    //  * The function accepts INTEGER n as parameter.
    //  */

    // function factorial(n) {
    //     // Write your code here
    //     if (n == 0)
    //         return 1;
    //     else
    //         return (n*(factorial(n - 1)));
    // }

    // }

    // function main() {
    //     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //     const n = parseInt(readLine().trim(), 10);

    //     const result = factorial(n);

    //     ws.write(result + '\n');

    //     ws.end();
    // }


    // // /* https://www.hackerrank.com/challenges/30-recursion */

    // // function processData(input) {
    // //     //Enter your code here
    // //     console.log(factorial(input));
    // // }

    // // function factorial(n){
    // //     if (n == 0)
    // //         return 1;
    // //     else
    // //         return (n*(factorial(n - 1)));
    // // }

    // // process.stdin.resume();
    // // process.stdin.setEncoding("ascii");
    // // _input = "";
    // // process.stdin.on("data", function (input) {
    // //     _input += input;
    // // });

    // // process.stdin.on("end", function () {
    // //    processData(_input);
    // // });


    /* https://www.hackerrank.com/challenges/30-recursion */

    function processData(input) {
        //Enter your code here
        console.log(factorial(input));
    }

    function factorial(n) {
        if (n == 0)
            return 1;
        else
            return (n * (factorial(n - 1)));
    }

    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    _input = "";
    process.stdin.on("data", function(input) {
        _input += input;
    });

    process.stdin.on("end", function() {
        processData(_input);
    });


    // Day 10: Binary Numbers

    // 'use strict';

    // process.stdin.resume();
    // process.stdin.setEncoding('utf-8');

    // let inputString = '';
    // let currentLine = 0;

    // process.stdin.on('data', function(inputStdin) {
    //     inputString += inputStdin;
    // });

    // process.stdin.on('end', function() {
    //     inputString = inputString.split('\n');

    //     main();
    // });

    // function readLine() {
    //     return inputString[currentLine++];
    // }


    /* https://www.hackerrank.com/challenges/30-binary-numbers */

    process.stdin.resume();
    process.stdin.setEncoding('ascii');

    var input_stdin = "";
    var input_stdin_array = "";
    var input_currentline = 0;

    process.stdin.on('data', function(data) {
        input_stdin += data;
    });

    process.stdin.on('end', function() {
        input_stdin_array = input_stdin.split("\n");
        main();
    });

    function readLine() {
        return input_stdin_array[input_currentline++];
    }

    /////////////// ignore above this line ////////////////////

    function main() {
        var n = parseInt(readLine());
        var arr = [];

        while (n != 0) {
            if (n % 2 == 0)
                arr.push(0);
            if (n % 2 == 1)
                arr.push(1);
            n = Math.floor(n / 2);
        }

        var max = 0;
        var cur = 0;


        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] == 1)
                cur++;
            else if (arr[i] == 0) {
                if (cur > max)
                    max = cur;
                cur = 0;
            }
        }

        if (cur > max)
            max = cur;

        console.log(max);
    }


    // function main() {
    //     const n = parseInt(readLine().trim(), 10);
    // }


    // Day 11: 2D Arrays

    // 'use strict';

    // process.stdin.resume();
    // process.stdin.setEncoding('utf-8');

    // let inputString = '';
    // let currentLine = 0;

    // process.stdin.on('data', function(inputStdin) {
    //     inputString += inputStdin;
    // });

    // process.stdin.on('end', function() {
    //     inputString = inputString.split('\n');

    //     main();
    // });

    // function readLine() {
    //     return inputString[currentLine++];
    // }



    // function main() {

    //     let arr = Array(6);

    //     for (let i = 0; i < 6; i++) {
    //         arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    //     }
    // }

    /* https://www.hackerrank.com/challenges/30-2d-arrays */

    process.stdin.resume();
    process.stdin.setEncoding('ascii');

    var input_stdin = "";
    var input_stdin_array = "";
    var input_currentline = 0;

    process.stdin.on('data', function(data) {
        input_stdin += data;
    });

    process.stdin.on('end', function() {
        input_stdin_array = input_stdin.split("\n");
        main();
    });

    function readLine() {
        return input_stdin_array[input_currentline++];
    }

    /////////////// ignore above this line ////////////////////

    function main() {
        var arr = [];
        for (arr_i = 0; arr_i < 6; arr_i++) {
            arr[arr_i] = readLine().split(' ');
            arr[arr_i] = arr[arr_i].map(Number);
        }

        var sumarr = [];

        var h = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                sumarr[h] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                    arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] +
                    arr[i + 2][j + 2];
                h++;
            }
        }

        sumarr.sort();

        var max = -99999;
        for (var x = 0; x < 16; x++) {
            if (sumarr[x] > max)
                max = sumarr[x];
        }

        console.log(max);
    }


    // Day 12: Inheritance




    class Student extends Person {
        /*	
         *   Class Constructor
         *   
         *   @param firstName - A string denoting the Person's first name.
         *   @param lastName - A string denoting the Person's last name.
         *   @param id - An integer denoting the Person's ID number.
         *   @param scores - An array of integers denoting the Person's test scores.
         */
        // Write your constructor here
        constructor(firstname, lastname, id, scores) {
            super(firstname, lastname, id);
            this.scores = scores;
        }

        /*	
         *   Method Name: calculate
         *   @return A character denoting the grade.
         */
        // Write your method here
        calculate() {
            var sum = this.scores.reduce((acc, num) => {
                acc += num;
                return acc;
            });
            var avg = sum / this.scores.length;

            if (avg >= 90) {
                return "O";
            } else if (avg >= 80) {
                return "E";
            } else if (avg >= 70) {
                return "A";
            } else if (avg >= 55) {
                return "P";
            } else if (avg >= 40) {
                return "D";
            } else {
                return "T";
            }
        }

    }