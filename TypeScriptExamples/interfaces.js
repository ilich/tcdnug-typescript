var Inerfaces;
(function (Inerfaces) {
    // Basic Interfaces
    // ------------------------------------------------------------------
    function sample1(foo) {
    }
    sample1({ id: 50, value: "test" });
    // sample1(50); // error: bad input object
    sample1({ id: 50, value: "test", enabled: false });
    function sample2(foo) {
    }
    // sample2({ id: 50, value: "test" });  // error: required "enabled" field is missing
    sample2({ id: 50, value: "test", enabled: false });
    function sample3(foo) {
    }
    sample3({ id: 50, value: "test", enabled: false });
    sample3({ id: 50, value: "test" });
    var sample4 = function (id) {
        return id.toString();
    };
    var sample5 = [true, false];
})(Inerfaces || (Inerfaces = {}));
//# sourceMappingURL=interfaces.js.map