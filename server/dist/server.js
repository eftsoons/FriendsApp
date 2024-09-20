"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.send("ok");
});
/*const options = {
  key: readFileSync("./privkey1.pem"),
  cert: readFileSync("./fullchain1.pem"),
  ca: readFileSync("./chain1.pem"),
};*/
//server = createServer(options, app);
app.listen(80, () => {
    console.log("start");
});
//# sourceMappingURL=server.js.map