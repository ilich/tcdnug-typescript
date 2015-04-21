/// <reference path="textwriter.ts" />

module DeclarationMerging {
    export interface MergeMe {
        op1();
    }

    export class TestClass implements MergeMe {
        op1() {
            return "op1";
        }

        op2() {
            return "op2";
        }
    }
}

module DeclarationMerging {
    export interface MergeMe {
        op2();
    }

    export class TestClass2 {
        op3() {
            return "op3";
        }
    }
}

module DeclarationMergingTest {
    export class Program {
        static run(elementId: string) {
            var writer = new TextWriter(elementId);

            var testClass = new DeclarationMerging.TestClass();
            writer.write(testClass.op1());
            writer.write(testClass.op2());

            var testClass2 = new DeclarationMerging.TestClass2();
            writer.write(testClass2.op3());
        }
    }
}