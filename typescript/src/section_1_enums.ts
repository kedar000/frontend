// ----------------------------------------------------
// Enums
// ----------------------------------------------------

// Topics
// - Numeric Enums
// - String Enums
// - Heterogeneous Enums
// - Const Enums
// - Computed Enums
// - Reverse Mapping
// - Enum vs Union Types


// ----------------------------------------------------
console.log("Numeric Enum");
// ----------------------------------------------------

enum Role{

    ADMIN,

    USER,

    GUEST

}

console.log(Role.ADMIN);
console.log(Role.USER);
console.log(Role.GUEST);

console.log(Role[0]);
console.log(Role[1]);
console.log(Role[2]);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Numeric Enum with Custom Values

enum StatusCode{

    SUCCESS = 200,

    NOT_FOUND = 404,

    SERVER_ERROR = 500

}

console.log(StatusCode.SUCCESS);
console.log(StatusCode.NOT_FOUND);


// ----------------------------------------------------
console.log("-----------------------------------------");

// String Enum

enum Direction{

    UP = "UP",

    DOWN = "DOWN",

    LEFT = "LEFT",

    RIGHT = "RIGHT"

}

console.log(Direction.UP);
console.log(Direction.RIGHT);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Heterogeneous Enum

enum Response{

    SUCCESS = 200,

    FAILED = "FAILED"

}

console.log(Response.SUCCESS);
console.log(Response.FAILED);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Const Enum

const enum Color{

    RED,

    GREEN,

    BLUE

}

console.log(Color.RED);
console.log(Color.GREEN);

// ----------------------------------------------------
console.log("-----------------------------------------");

// Reverse Mapping

console.log(Role[0]);
console.log(Role[1]);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Function Using Enum

function checkRole(role: Role){

    if(role === Role.ADMIN){

        console.log("Admin Login");

    }else{

        console.log("User Login");

    }

}

checkRole(Role.ADMIN);

checkRole(Role.USER);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Real World Example

enum OrderStatus{

    PENDING,

    SHIPPED,

    DELIVERED,

    CANCELLED

}

const currentStatus = OrderStatus.SHIPPED;

console.log(currentStatus);