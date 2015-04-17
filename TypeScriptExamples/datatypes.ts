module DataTypes {
    //boolean
    var enabled: boolean = true;
    var disabled: boolean = false;

    //number
    var counter: number = 50;
    var weight: number = 5.5;

    //string
    var message: string = "Hello World!";
    var name = "World";
    // name = 123; // Error: name is a string

    // ES6 templated string
    var messageTemplate = `Hello ${name}`;  

    //Array
    var numbers: number[] = [1, 2, 3, 4, 5];
    var strings: Array<string> = ["A", "B", "C"];

    //Enum
    enum Colors {
        Blue = 50,
        Green
    }

    var myColor = Colors.Blue;

    //Tuple types
    var tuple: [string, boolean];
    tuple[0] = "test";
    tuple[1] = true;

    //Union types
    var value: number|string;
    value = 1;
    value = "test";
    // value = false; // Error: values could be only a number or a string. No other data types allowed

    //any
    var m: any = 123;
    m = "test";

    //void
    function nothing(): void {
    }

    // ------------------------------------------------------------------------
    // Type Aliases
    // ------------------------------------------------------------------------
    type MyArray = Array<number|string>;
    var foo: MyArray = [1, 2, "test"];
} 