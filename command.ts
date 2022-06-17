import util from 'node:util';
import child_process from 'node:child_process';
import DkBuildConfig from "../nodejs-core/build-config";

// Execute command async
const exec = util.promisify(child_process.exec);

// For execute command line in system.
export default class DkCommands {
	/**
	 * Run a command in async. Caller should use `await` when call this.
	 *
	 * @param {string} command for eg,. "cd /home/user/workspace; mkdir test; touch test/tmp.txt;"
	 *
	 * @returns An object that contains 2 outputs: stdout string for succeed, stderr string for error.
	 * Caller can access to string when succeed via `result.stdout`.
	 * And access to string when failed via `result.stderr`.
	 */
	static async RunAsync(command: string) {
		if (DkBuildConfig.DEBUG) {
			console.log(`Run command: ${command}`);
		}
		return await exec(command);
	}
}
