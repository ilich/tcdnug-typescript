/// <reference path="textwriter.ts" />
var Functions;
(function (Functions) {
    function namedFunciton(a, b) {
        return a + b;
    }
    var anonymouseFunction = function (a, b) {
        return a + b;
    };
    // Function Types
    var typedFunction;
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
    function optionalParameterFunction(a, b) {
        return b == null ? -a : a + b;
    }
    function defaultParametersFunction(a, b) {
        if (b === void 0) { b = 100; }
        return a + b;
    }
    function restParametersFunction() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return numbers.join(", ");
    }
    function myFunction(a) {
        if (typeof a == "number") {
            return "Number: " + a;
        }
        else if (typeof a == "string") {
            return "String: " + a;
        }
    }
    var SampleLambda = (function () {
        function SampleLambda() {
            this.a = 50;
        }
        SampleLambda.prototype.getFieldGetter = function () {
            return function () {
                return this.a;
            };
        };
        SampleLambda.prototype.getFieldGetterLambda = function () {
            var _this = this;
            return function () {
                // 'this' is bounded to SampleLambda context
                return _this.a;
            };
        };
        return SampleLambda;
    })();
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
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
            var foo = new SampleLambda();
            var func = foo.getFieldGetter();
            var funcLambda = foo.getFieldGetterLambda();
            writer.write(func());
            writer.write(funcLambda());
        };
        return Program;
    })();
    Functions.Program = Program;
})(Functions || (Functions = {}));
//# sourceMappingURL=functions.js.map