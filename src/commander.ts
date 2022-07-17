import util from 'node:util';
const execAsync = util.promisify(require('node:child_process').exec);

import { DkBuildConfig } from './build-config';
import { RunCommandResult } from './model';

/**
 * To run/execute command in OS.
 */
export class DkCommander {
	/**
	 * Run (execute) a command in async. Caller should use `await` to wait result from this.
	 *
	 * @param {string} command for eg,. "cd /home/user/workspace; mkdir test; touch test/tmp.txt;"
	 *
	 * @returns An object that contains 2 outputs: stdout string for succeed, stderr string for error.
	 */
	static async RunAsync(command: string): Promise<RunCommandResult> {
		try {
			if (DkBuildConfig.DEBUG) {
				console.log(`Run command: ${command.trim()}`);
			}

			const result = await execAsync(command);

			return {
				stdout: result.stdout,
				stderr: result.stderr
			};
		}
		catch (e: any) {
			return {
				stdout: null,
				stderr: e.message
			};
		}
	}
}
