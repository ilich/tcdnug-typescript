/// <reference path="textwriter.ts" />

module Functions {

    function namedFunciton(a: number, b: number) {
        return a + b;
    }

    var anonymouseFunction = function (a: number, b: number) {
        return a + b;
    };

    // Function Types
    var typedFunction: (a: number, b: number) => number;

    typedFunction = anonymouseFunction;

    /* 
     * Error: cannot assign function having wrong type
     *
    typedFunction = function (a: string) {
        return a;
    }; 
     */

    /* 
     * Error: parameter b is missing
     *
    namedFunciton(2);
     */

    function optionalParameterFunction(a: number, b?: number) {
        return b == null ? -a : a + b;
    }

    function defaultParametersFunction(a: number, b: number = 100) {
        return a + b;
    }

    function restParametersFunction(...numbers: number[]) {
        return numbers.join(", ");
    }

    function myFunction(a: number);
    function myFunction(a: string);
    function myFunction(a: any) {
        if (typeof a == "number") {
            return `Number: ${a}`;
        } else if (typeof a == "string") {
            return `String: ${a}`;
        }
    }

    // Overloading using union types
    function myFunction1(a: number|string) {
        if (typeof a == "number") {
            return `Number: ${a}`;
        } else if (typeof a == "string") {
            return `String: ${a}`;
        }
    }

    class SampleLambda {
        a: number = 50;

        getFieldGetter() {
            return function () {
                return this.a;
            }
        }

        getFieldGetterLambda() {
            return () => {
                // 'this' is bounded to SampleLambda context
                return this.a;
            }
        }
    }

    export class Program {
        static run(elementId: string) {
            var writer = new TextWriter(elementId);

            writer.write(optionalParameterFunction(10));
            writer.write(optionalParameterFunction(10, 5));
            writer.write("------------------");

            writer.write(defaultParametersFunction(10));
            writer.write(defaultParametersFunction(10, 5));
            writer.write("------------------");

            writer.write(restParametersFunction(1, 2, 3, 4, 5));
            writer.write("------------------");

            writer.write(myFunction("test"));
            writer.write(myFunction(22));
            // writer.write(myFunction({ a: 50 })); // Error: input parameter has to be number or string
            writer.write("------------------");

            writer.write(myFunction1("test"));
            writer.write(myFunction1(22));
            // writer.write(myFunction1({ a: 50 })); // Error: input parameter has to be number or string
            writer.write("------------------");

            var foo = new SampleLambda();
            var func = foo.getFieldGetter();
            var funcLambda = foo.getFieldGetterLambda();
            writer.write(func());
            writer.write(funcLambda());
        }
    }
} 