import util from 'node:util';
const execAsync = util.promisify(require('node:child_process').exec);

import { DkBuildConfig } from './build-config';
import { RunCommandResult } from './model';

// For execute command line in system.
export class DkCommand {
	/**
	 * Run a command in async. Caller should use `await` to wait result from this.
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

	static async IsFileExisted(filePath: string): Promise<boolean> {
		const result = await this.RunAsync(`
			if [[ -f "${filePath}" ]]; then
				echo "true";
			else
				echo "false";
			fi
		`);

		return result.stdout?.trim() == "true";
	}

	static async IsDirectoryExisted(dirPath: string): Promise<boolean> {
		const result = await this.RunAsync(`
			if [[ -d "${dirPath}" ]]; then
				echo "true";
			else
				echo "false";
			fi
		`);

		return result.stdout?.trim() == "true";
	}

	/**
	 * By using `mkdir` command, this create directory recursively (option -p) if not exist.
	 *
	 * @param dirPath
	 * @returns
	 */
	static async MkDirs(dirPath: string): Promise<RunCommandResult> {
		return await this.RunAsync(`mkdir -p ${dirPath};`);
	}

	/**
	 * By using `mv` command, this move file/dir from source to destination.
	 *
	 * @param srcPath
	 * @param dstPath
	 * @returns
	 */
	static async MoveFiles(srcPath: string, dstPath: string): Promise<RunCommandResult> {
		return await this.RunAsync(`mv ${srcPath} ${dstPath};`);
	}
}
