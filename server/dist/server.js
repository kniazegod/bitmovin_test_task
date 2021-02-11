"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const objection_1 = require("objection");
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const knex_1 = __importDefault(require("./knex"));
objection_1.Model.knex(knex_1.default);
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use('/rest/v1/', routes_1.default);
app.get('/ping', (_, res) => res.json('pong'));
app.listen(config_1.default.app.port, () => {
    console.log(`Application started at http://localhost:${config_1.default.app.port}`);
});
