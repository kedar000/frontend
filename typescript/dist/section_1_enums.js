"use strict";
// ----------------------------------------------------
// Enums
// ----------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.USER);
console.log(Role.GUEST);
console.log(Role[0]);
console.log(Role[1]);
console.log(Role[2]);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Numeric Enum with Custom Values
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.SUCCESS);
console.log(StatusCode.NOT_FOUND);
// ----------------------------------------------------
console.log("-----------------------------------------");
// String Enum
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.UP);
console.log(Direction.RIGHT);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Heterogeneous Enum
var Response;
(function (Response) {
    Response[Response["SUCCESS"] = 200] = "SUCCESS";
    Response["FAILED"] = "FAILED";
})(Response || (Response = {}));
console.log(Response.SUCCESS);
console.log(Response.FAILED);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Const Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
console.log(Color.RED);
console.log(Color.GREEN);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Computed Enum
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["NONE"] = 0] = "NONE";
    FileAccess[FileAccess["READ"] = 2] = "READ";
    FileAccess[FileAccess["WRITE"] = 4] = "WRITE";
    FileAccess[FileAccess["READ_WRITE"] = 6] = "READ_WRITE";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.READ);
console.log(FileAccess.WRITE);
console.log(FileAccess.READ_WRITE);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Reverse Mapping
console.log(Role[0]);
console.log(Role[1]);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Function Using Enum
function checkRole(role) {
    if (role === Role.ADMIN) {
        console.log("Admin Login");
    }
    else {
        console.log("User Login");
    }
}
checkRole(Role.ADMIN);
checkRole(Role.USER);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Real World Example
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["CANCELLED"] = 3] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
const currentStatus = OrderStatus.SHIPPED;
console.log(currentStatus);
//# sourceMappingURL=section_1_enums.js.map