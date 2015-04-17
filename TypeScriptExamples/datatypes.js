var DataTypes;
(function (DataTypes) {
    //boolean
    var enabled = true;
    var disabled = false;
    //number
    var counter = 50;
    var weight = 5.5;
    //string
    var message = "Hello World!";
    var name = "World";
    // name = 123; // Error: name is a string
    // ES6 templated string
    var messageTemplate = "Hello " + name;
    //Array
    var numbers = [1, 2, 3, 4, 5];
    var strings = ["A", "B", "C"];
    //Enum
    var Colors;
    (function (Colors) {
        Colors[Colors["Blue"] = 50] = "Blue";
        Colors[Colors["Green"] = 51] = "Green";
    })(Colors || (Colors = {}));
    var myColor = 50 /* Blue */;
    //Tuple types
    var tuple;
    tuple[0] = "test";
    tuple[1] = true;
    //Union types
    var value;
    value = 1;
    value = "test";
    // value = false; // Error: values could be only a number or a string. No other data types allowed
    //any
    var m = 123;
    m = "test";
    //void
    function nothing() {
    }
    var foo = [1, 2, "test"];
})(DataTypes || (DataTypes = {}));
//# sourceMappingURL=datatypes.js.map