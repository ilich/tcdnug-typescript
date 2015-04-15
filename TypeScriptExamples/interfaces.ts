module Inerfaces {
    // Basic Interfaces
    // ------------------------------------------------------------------

    function sample1(foo: { id: number; value: string }) {
    }

    sample1({ id: 50, value: "test" });
    // sample1(50); // error: bad input object
    sample1({ id: 50, value: "test", enabled: false });

    function sample2(foo: { id: number; value: string; enabled: boolean }) {
    }

    // sample2({ id: 50, value: "test" });  // error: required "enabled" field is missing
    sample2({ id: 50, value: "test", enabled: false });

    interface SampleObj {
        id: number;
        value: string;
        enabled?: boolean;  // optional field
    }

    function sample3(foo: SampleObj) {
    }

    sample3({ id: 50, value: "test", enabled: false });
    sample3({ id: 50, value: "test" });

    // Function Types
    // ------------------------------------------------------------------
    interface GetByIdFunc {
        (id: number): string;
    }

    var sample4: GetByIdFunc = function (id: number) {
        return id.toString();
    }

    // Arrray Types
    // ------------------------------------------------------------------

    interface BooleanArray {
        [index: number]: boolean;
    }

    var sample5: BooleanArray = [true, false];
}