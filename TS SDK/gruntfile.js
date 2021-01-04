module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                tsconfig: true
            },
        },
        clean: {
            default: {
                dot: true,
                src: ["build/**/*"]
            },
        },
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.registerTask("default", ["clean", "ts"]);
};