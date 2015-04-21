module Module1 {
    export interface Test {
        test();
    }

    export class Class1 implements Test {
        test() {
            alert("Module1.Class1");
        }
    }
} 