// The `fs/promises` API provides asynchronous file system methods that return promises.
// This is async version (non-blocking), use await on each call.
import * as fsPromises from 'node:fs/promises';

// The `fs` API provides synchronous file system methods.
// This is sync version (blocking), just call but take care that it blocks current running process.
import * as fs from "fs";

/**
 * The promise APIs use the underlying Node.js threadpool to perform file
 * system operations off the event loop thread. These operations are not
 * synchronized or threadsafe. Care must be taken when performing multiple
 * concurrent modifications on the same file or data corruption may occur.
 *
 * Ref: https://nodejs.org/api/fs.html
 */
export default class DkFiles {
	/**
	 * Check whether given path exists (visible to the calling process).
	 *
	 * @param path Path to file/dir to check existence.
	 * @param mode Default is fs.constants.F_OK (visible to the calling process). Can combine
	 * to make more options, for eg,. fs.constants.R_OK | fs.constants.W_OK | fs.constants.X_OK
	 * @returns
	 */
	static async Exists(path: string, mode?: number): Promise<boolean> {
		try {
			await fsPromises.access(path, mode);
			return true;
		}
		catch (e: any) {
			return false;
		}
	}

	/**
	 * Copy source folder to destination folder.
	 *
	 * @param srcDirPath
	 * @param dstDirPath
	 * @param option
	 * @returns
	 *
	 * @experimental
	 */
	static async __CopyDir(srcDirPath: string, dstDirPath: string, option?: fs.CopyOptions): Promise<boolean> {
		try {
			fsPromises.cp(srcDirPath, dstDirPath, option);
			return true;
		}
		catch (e: any) {
			return false;
		}
	}

	/**
	 * Make new directory recursively if not exist.
	 *
	 * @param dirPath
	 * @returns
	 */
	static async MkDirs(dirPath: string): Promise<boolean> {
		try {
			fsPromises.mkdir(dirPath, { recursive: true });
			return true;
		}
		catch (e: any) {
			return false;
		}
	}
}
