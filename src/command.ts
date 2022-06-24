import util from 'node:util';
const execAsync = util.promisify(require('node:child_process').exec);

import { DkBuildConfig } from './build-config';

// For execute command line in system.
export class DkCommands {
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
			console.log(`Run command: ${command.trim()}`);
		}

		return await execAsync(command);
	}
}