const path = require("node:path");
const glob = require("glob");

const baseDirectory = path.resolve("./node_modules").split(path.sep)?.join("/");
const getPackageContent = (packages, includeStories = false) => {
    const pattern =
        packages.length > 1
            ? `{${packages
                  .map((packageName) => `${baseDirectory}/${packageName}/*/`)
                  ?.join(",")}}`
            : `${baseDirectory}/${packages[0]}/*/`;

    const paths = [
        ...glob.sync(pattern, {
            ignore: [
                `${baseDirectory}/**/@(coverage|generated|node_modules)/**`,
            ],
            windowsPathsNoEscape: true,
        }),
    ];

    const formattedPaths = [];

    for (const packagePath of paths) {
        formattedPaths.push(
            `./node_modules/${path.relative(
                baseDirectory,
                packagePath,
            )}/**/*.{js,jsx,ts,tsx}`,
        );

        if (!includeStories) {
            formattedPaths.push(
                `!./node_modules/${path.relative(
                    baseDirectory,
                    packagePath,
                )}/**/*.{stories,test}.{js,jsx,ts,tsx}`,
            );
        }
    }

    return formattedPaths;
};

module.exports = {
    getPackageContent,
};