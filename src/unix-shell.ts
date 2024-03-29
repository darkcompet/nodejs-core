import { DkCommander } from './commander';
import { RunCommandResult } from './model';

/**
 * Handle with bash (Unix shell) command in Unix-based OS like Linux, Ubuntu,...
 */
export class DkUnixShell {
	/**
	 * By using `mkdir` command, this create directory recursively (option -p) if not exist.
	 * This is similar to `DkFiles.MkDirs()`.
	 *
	 * @param dirPath
	 * @returns
	 */
	static async MkDirs(dirPath: string): Promise<RunCommandResult> {
		return await DkCommander.RunAsync(`mkdir -p ${dirPath};`);
	}

	/**
	 * By using `mv` command, this move file/dir from source to destination.
	 *
	 * @param srcPath
	 * @param dstPath
	 * @returns
	 */
	static async MoveFiles(srcPath: string, dstPath: string): Promise<RunCommandResult> {
		return await DkCommander.RunAsync(`mv ${srcPath} ${dstPath};`);
	}
}
