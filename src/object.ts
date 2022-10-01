
/**
 * Object util.
 */
export class DkObjects {
	/**
	 * Check an object has any key or not.
	 *
	 * @returns True if null|empty. Otherwise False.
	 */
	static IsEmpty(obj: any): boolean {
		return obj == null || Object.keys(obj).length == 0;
	}
}
