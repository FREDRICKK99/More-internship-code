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




    // Day 1: Arithmetic Operators



    /**
     *   Calculate the area of a rectangle.
     *
     *   length: The length of the rectangle.
     *   width: The width of the rectangle.
     *   
     *	Return a number denoting the rectangle's area.
     **/
    function getArea(length, width) {
        let area;
        // Write your code here
        area = length * width
        return area;
    }

    /**
     *   Calculate the perimeter of a rectangle.
     *	
     *	length: The length of the rectangle.
     *   width: The width of the rectangle.
     *   
     *	Return a number denoting the perimeter of a rectangle.
     **/
    function getPerimeter(length, width) {
        let perimeter;
        // Write your code here
        perimeter = 2 * (length + width)
        return perimeter;
    }


    // Day 1: Functions

    /*
     * Create the function factorial here
     */
    function factorial(n) {
        if (n == 1)
            return 1

        return n * factorial(n - 1)
    }

    // Day 1: Let and Const
    function main() {
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        const PI = Math.PI
        let radius = Number(readLine());
        // Print the area of the circle:
        console.log(PI * Math.pow(radius, 2));
        // Print the perimeter of the circle:
        console.log(2 * PI * radius);







        // Day 2: Conditional Statements: If-Else
        function getGrade(score) {
            let grade;
            // Write your code here
            if (score > 25) grade = 'A';
            else if (score > 20) grade = 'B';
            else if (score > 15) grade = 'C';
            else if (score > 10) grade = 'D';
            else if (score > 5) grade = 'E';
            else grade = 'F';
            return grade;

        }
        // Day 2: Conditional Statements: Switch


        function getLetter(s) {
            let letter;
            // Write your code here
            let char = s.charAt(0)
            switch (char) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    letter = 'A';
                    break;
                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'g':
                    letter = 'B';
                    break;

                case 'h':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                    letter = 'C'
                    break;
                case 'n':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                    letter = 'D'
                    break;
            }

            return letter;
        }


        // Day 2: Loops


        /*
         * Complete the vowelsAndConsonants function.
         * Print your output using 'console.log()'.
         */
        function vowelsAndConsonants(s) {
            //vowels
            for (let ind = 0; ind < s.length; ind++) {
                if (s.charAt(ind).match(/[aeiou]/)) {
                    console.log(s.charAt(ind));
                }
            }
            //consonants
            for (let ind = 0; ind < s.length; ind++) {
                if (s.charAt(ind).match(/[^aeiou]/)) {
                    console.log(s.charAt(ind));
                }
            }
        }



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

        // Day 3: Try, Catch, and Finally


        /*
         * Complete the reverseString function
         * Use console.log() to print to stdout.
         */
        function reverseString(s) {
            try {
                s = s.split("").reverse().join("");
            } catch (exception) {
                console.log(exception.message);
            } finally {
                console.log(s);

            }

        }



        // Day 3: Throw



        /*
         * Complete the isPositive function.
         * If 'a' is positive, return "YES".
         * If 'a' is 0, throw an Error with the message "Zero Error"
         * If 'a' is negative, throw an Error with the message "Negative Error"
         */
        function isPositive(a) {
            if (a > 0) return "YES";
            else if (a == 0) throw new Error("Zero Error");
            else throw new Error("Negative Error");

        }


        // Day 4: Create a Rectangle Object



        /*
         * Complete the Rectangle function
         */
        function Rectangle(a, b) {
            return {
                length: a,
                width: b,
                perimeter: 2 * (a + b),
                area: a * b
            }

        }
        // Day 4: Count Objects


        /*
         * Return a count of the total number of objects 'o' satisfying o.x == o.y.
         * 
         * Parameter(s):
         * objects: an array of objects with integer properties 'x' and 'y'
         */
        function getCount(objects) {
            let tally = 0;
            for (let num = 0; num < objects.length; num++) {
                if (objects[num].x == objects[num].y) {
                    tally++;
                }
            }
            return tally;
        }


        // Day 4: Classes
        /*
         * Implement a Polygon class with the following properties:
         * 1. A constructor that takes an array of integer side lengths.
         * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
         */
        class Polygon {
            constructor(sides) {
                this.sides = sides;
            }
            perimeter() {
                let sum = 0;
                for (let ind = 0; ind < this.sides.length; ind++) {
                    sum += this.sides[ind];
                }
                return sum;
            }
        }

        // Day 5: Inheritance


        /*
         *  Write code that adds an 'area' method to the Rectangle class' prototype
         */
        Rectangle.prototype.area = function() {
                return this.w * this.h;
            }
            /*
             * Create a Square class that inherits from Rectangle and implement its class constructor
             */
        class Square extends Rectangle {
            constructor(w) {
                super(w, w);

            }
        }
        // Day 5: Template Literals


        /*
         * Determine the original side lengths and return an array:
         * - The first element is the length of the shorter side
         * - The second element is the length of the longer side
         * 
         * Parameter(s):
         * literals: The tagged template literal's array of strings.
         * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
         */
        function sides(literals, ...expressions) {
            let area = expressions[0];
            let perim = expressions[1];
            let s1 = (perim + discriminant(perim, area)) / 4;
            let s2 = (perim - discriminant(perim, area)) / 4;
            return [s2, s1];

        }

        function discriminant(perim, area) {
            return Math.sqrt(Math.pow(perim, 2) - 16 * area);
        }

        // Day 5: Arrow Functions


        /*
         * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
         * 
         * Parameter(s):
         * nums: An array of numbers.
         */
        function modifyArray(nums) {
            return nums.map(elem => elem % 2 == 0 ? elem * 2 : elem * 3);

        }
        // Day 6: Bitwise Operators
        //Today, we're practicing bitwise operations. Check the attached tutorial for more details.

        // Task

        // We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

        // Complete the function in the editor so that given  and , it returns the maximum .

        // Note: The  symbol represents the bitwise AND operator.


        function getMaxLessThanK(n, k) {
            let max = 0;
            for (let a = n; a > 1; a--) {
                for (let b = a - 1; b > 0; b--) {
                    if (a & b < k && a & b > max) {
                        max = a & b;
                    }
                }
            }
            return max
        }

        // Day 6: JavaScript Dates



        // The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        function getDayName(dateString) {
            let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            // Write your code here
            let day = new Date(dateString).getDay()

            return dayName[day]
        }

        // Day 7: Regular Expressions I
        // Objective

        // In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

        // Task

        // Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

        // Constraints

        // The length of string  is  .
        // String  consists of lowercase letters only (i.e., [a-z]).


        function regexVar() {
            /*
             * Declare a RegExp object variable named 're'
             * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
             */
            const re = /^([ aeiou]).*\1$/;

            /*
             * Do not remove the return statement
             */
            return re;
        }

        // Day 7: Regular Expressions II

        //         Task

        // Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

        // String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
        // The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
        // Constraints

        // The length of string  is  .



        function regexVar() {
            /*
             * Declare a RegExp object variable named 're'
             * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
             * followed by one or more letters.
             */
            const re = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;

            /*
             * Do not remove the return statement
             */
            return re;
        }

        // Day 7: Regular Expressions III



        function regexVar() {
            /*
             * Declare a RegExp object variable named 're'
             * It must match ALL occurrences of numbers in a string.
             */

            const re = /\d+/g;
            /*
             * Do not remove the return statement
             */
            return re;
        }

        // Day 8: Create a Button
        // index . html

        var btn = document.createElement("Button")
        btn.innerHTML = "0";
        btn.id = "btn";

        document.body.appendChild(btn);

        btn.onclick = function() {
            btn.innerHTML = Number(btn.innerHTML) + 1;
        }

        // button .js

        var btn = document.createElement("Button")
        btn.innerHTML = "0";
        btn.id = "btn";

        document.body.appendChild(btn);

        btn.onclick = function() {
            btn.innerHTML = Number(btn.innerHTML) + 1;
        }

        // button  . css

        #
        btn {
            width: 96 px;
            height: 48 px;
            font - size: 24 px;

        }

        // Day 8: Buttons Container

        // index .html

        <
        !DOCTYPE html >
            <
            html >
            <
            head >
            <
            meta charset = "utf-8" >
            <
            title > Buttons Grid < /title> <
        link rel = "stylesheet"
        href = "css/buttonsGrid.css"
        type = "text/css" >
            <
            /head>

        <
        body >
            <
            div id = "btns"
        class = "btnContainer" >
            <
            button id = "btn1"
        class = "btn" > 1 < /button> <
        button id = "btn2"
        class = "btn" > 2 < /button> <
        button id = "btn3"
        class = "btn" > 3 < /button> <
        button id = "btn4"
        class = "btn" > 4 < /button> <
        button id = "btn5"
        class = "btn" > 5 < /button> <
        button id = "btn6"
        class = "btn" > 6 < /button> <
        button id = "btn7"
        class = "btn" > 7 < /button> <
        button id = "btn8"
        class = "btn" > 8 < /button> <
        button id = "btn9"
        class = "btn" > 9 < /button> < /
        div > <
            script src = "js/buttonsGrid.js"
        type = "text/javascript" > < /script> < /
        body > <
            /html>


        // buttonsGrid.css
        .btn {
            width: 30 % ;
            height: 48 px;
            font - size: 24 px;
        }

        .btnContainer {
            width: 75 %
        }
        /* #btn2{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn3{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn4{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn5{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn6{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn7{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn8{
            width:30%;
            height:48px;
            font-size:24px;
        }
        #btn9{
            width:30%;
            height:48px;
            font-size:24px;
        } */



        // buttonsGrid.js

        // var btn = document.createElement("Button")
        // btn.innerHTML = "0";

        // document.body.appendChild(btn);

        let btn5 = document.getElementById("btn5");

        btn5.onclick = function() {
            var first = btn1.innerHTML
            btn1.innerHTML = btn4.innerHTML;
            btn4.innerHTML = btn7.innerHTML;
            btn7.innerHTML = btn8.innerHTML;
            btn8.innerHTML = btn9.innerHTML;
            btn9.innerHTML = btn6.innerHTML;
            btn6.innerHTML = btn3.innerHTML;
            btn3.innerHTML = btn2.innerHTML;
            btn2.innerHTML = first;

        }


        // Day 9: Binary Calculator

        // index  .html

        <!-- Enter your HTML code here -->
        <
        !DOCTYPE html >
            <
            html >
            <
            head >
            <
            meta charset = "utf-8" >
            <
            title > Binary Calculator < /title> <
        link rel = "stylesheet"
        href = "css/binaryCalculator.css"
        type = "text/css" >
            <
            /head> <
        body >
            <
            div id = "container" >
            <
            div id = "res" > < /div> <
        div id = "btns" >
            <
            button id = "btn0"
        onclick = "clickzero() " > 0 < /button> <
        button id = "btn1"
        onclick = "clickone()" > 1 < /button> <
        button id = "btnClr"
        onclick = "clickClear()" > C < /button> <
        button id = "btnEql"
        onclick = "clickEqual()" >= < /button> <
        button id = "btnSum"
        onclick = "clickSum()" > + < /button> <
        button id = "btnSub"
        onclick = "clickSub()" > - < /button> <
        button id = "btnMul"
        onclick = "clickMul()" > * < /button> <
        button id = "btnDiv"
        onclick = "clickDiv()" > /</button >
            <
            /div> < /
        div > <
            script src = "js/binaryCalculator.js"
        type = "text/javascript" > < /script> < /
        body > <
            /html>



        // binaryCalculator .css

        body {
            width: 33 % ;
        }


        #
        res {
            background - color: lightgray;
            border: solid;
            height: 48 px;
            font - size: 20 px;



        }#
        btns button {
            width: 25 % ;
            height: 36 px;
            font - size: 18 px;
            margin: 0;
            float: left;
        }

        #
        btn0, #btn1 {
            background - color: lightgreen;
            color: brown;
        }

        #
        btnClr, #btnEql {
            background - color: darkgreen;
            color: white;
        }#
        btnSum, #btnSub, #btnMul, #btnDiv {
            background - color: black;
            color: red;
        }
        /* .btn{
            width: 25%;
            height:36px;
            font-size:18px;
            margin:0px;
             float: left;
           
        } */



        // binaryCalculator.js

        let elem = document.getElementById("res");

        function checkOperator() {
            if (elem.innerHTML.endswith('+') || elem.innerHTML.endswith('-') || elem.innerHTML.endswith('*') || elem.innerHTML.endswith('/')) {
                return true;
            }
        }

        function clickZero() {
            elem.innerHTML += '0';
        }

        function clickOne() {
            elem.innerHTML += '1';
        }

        function clickSum() {
            if (elem.innerHTML != 0 && !checkOperator()) {
                elem.innerHTML += '+';
            }

        }

        function clickSub() {
            if (elem.innerHTML != 0 && !checkOperator()) {
                elem.innerHTML += '-';
            }

        }

        function clickMul() {
            if (elem.innerHTML != 0 && !checkOperator()) {
                elem.innerHTML += '*';
            }

        }

        function clickDiv() {
            if (elem.innerHTML != 0 && !checkOperator()) {
                elem.innerHTML += '/';
            }

        }

        function clickClr() {
            elem.innerHTML = '';
        }

        function clickEql() {
            if (!checkOperator()) {
                let re = /\d+/g
                let re2 = /[\+\-\*\/]+/g
                let numbers = elem.innerHTML.match(re);
                let operations = elem.innerHTML.match(re2);
                while (operations.length > 0) {
                    if (operations.include('+')) {
                        let indexOfMul = operations.indexOf('*');
                        let mul = (indexOfMul != 0 ? parseInt(numbers[indexOfMul - 1], 2) :
                            parseInt(numbers[indexOfMul], 2)) * parseInt(numbers[indexOfMul + 1], 2);
                        numbers.splice(indexOfMul, 2);
                        numbers.splice(indexOfMul, 0, mul.toString(2));
                        operations.splice(indexOfMul, 1);
                    } else if (operations.includes('/')) {
                        let indexOfDiv = operations.indexOf('/');
                        let division = (indexOfDiv != 0 ? parseInt(numbers[indexOfDiv - 1], 2) :
                            parseInt(numbers[indexOfDiv], 2)) / parseInt(numbers[indexOfDiv + 1], 2);
                        numbers.splice(indexOfDiv, 2);
                        numbers.splice(indexOfDiv, division.toString(2));
                        operations.splice(indexOfDiv, 1);
                    } else if (operations.include('+')) {
                        let indexOfSum = operations.indexOf('+ ');
                        let sum = (indexOfSum != 0 ? parseInt(numbers[indexOfSum - 1], 2) :
                            parseInt(numbers[indexOfSum], 2)) + parseInt(numbers[indexOfSum + 1], 2);
                        numbers.splice(indexOfSum, 2);
                        numbers.splice(indexOfSum, 0, sum.toString(2));
                        operations.splice(indexOfSum, 1);
                    } else {
                        let indexOfSub = operations.indexOf('-');
                        let sub = (indexOfSub != 0 ? parseInt(numbers[indexOfSub - 1], ) :
                            parseInt(numbers[indexOfSub], 2)) - parseInt(numbers[indexOfSub + 1], 2);
                        numbers.splice(indexOfSub, 2);
                        numbers.splice(indexOfSub, 0, sub.toString(2));
                        operations.splice(indexOfSub, 1);

                    }

                }
                elem.innerHTML = numbers[0].toString(2);
            } else {
                alert("Line must ends with number.");
            }
        }