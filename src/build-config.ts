
class _BuildConfig {
	readonly DEBUG = process.env.DEBUG === "true";
}

export const DkBuildConfig = new _BuildConfig();
