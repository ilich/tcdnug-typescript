/// <reference path="textwriter.ts" />

module Generics {
    var writer: TextWriter;

    // Non type safe function
    function nonSafe(foo: any): any {
        return foo;
    }

    // Generic function (type safe)
    function safe<T>(foo: T) {
        return foo;
    }

    // Generic types and generic constraints

    interface DataProvider {
        data(): number;
    }

    class RandomNumberDataProvider implements DataProvider {
        data() {
            return Math.random();
        }
    }

    function calculate<T extends DataProvider>(a: T, b: T): number {
        return a.data() + b.data();
    }

    function createAndCalculate<T extends DataProvider>(provider: { new (): T; }): number {
        var a = new provider();
        var b = new provider();
        return calculate(a, b);
    }

    export class Program {
        static run(elementId: string) {
            writer = new TextWriter(elementId);

            var i = safe<number>(123);
            var j = safe(123);  // type interference

            var value = createAndCalculate(RandomNumberDataProvider);
            writer.write(value);
        }
    }
} 