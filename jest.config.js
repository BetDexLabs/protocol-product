const jestConfig = {
    verbose: true,
    testMatch: ["**/tests/*.ts?(x)"],
    testPathIgnorePatterns: [
        "tests/util/pdas.ts",
        "tests/util/test_util.ts",
        "tests/util/wrappers.ts",
    ],
    setupFilesAfterEnv: ["<rootDir>/tests/util/test_util.ts"],
    testTimeout: 1200000,
};

module.exports = jestConfig;
