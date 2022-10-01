
/**
 * Array util.
 */
export class DkArrays {
	/**
	 * Merge 2 arrays.
	 *
	 * @returns New merged array.
	 */
	static Merge(arr1: any[], arr2: any[]): any[] {
		return [
			...arr1,
			...arr2
		];
	}
}
