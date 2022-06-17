"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = __importDefault(require("node:util"));
const node_child_process_1 = __importDefault(require("node:child_process"));
const build_config_1 = __importDefault(require("../nodejs-core/build-config"));
// Execute command async
const exec = node_util_1.default.promisify(node_child_process_1.default.exec);
// For execute command line in system.
class DkCommands {
    /**
     * Run a command in async. Caller should use `await` when call this.
     *
     * @param {string} command for eg,. "cd /home/user/workspace; mkdir test; touch test/tmp.txt;"
     *
     * @returns An object that contains 2 outputs: stdout string for succeed, stderr string for error.
     * Caller can access to string when succeed via `result.stdout`.
     * And access to string when failed via `result.stderr`.
     */
    static RunAsync(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (build_config_1.default.DEBUG) {
                console.log(`Run command: ${command}`);
            }
            return yield exec(command);
        });
    }
}
exports.default = DkCommands;
