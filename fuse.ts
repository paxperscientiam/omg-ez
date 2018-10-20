const { FuseBox, WebIndexPlugin } = require("fuse-box");


const fuse = FuseBox.init({
    homeDir: "src",
    target: "browser@es6",
    output: "dist/$name.js",
    plugins: [WebIndexPlugin(
        {
            title: "My awesome website",
            template: "src/_index.html",
            appendBundles: true,
        }
    )],
    shim: {
        jquery: {
            source: "node_modules/jquery/dist/jquery.js",
            exports: "$",
        },
    },
})

fuse.dev(); // launch http server
fuse
    .bundle("app")
    .instructions(" > index.ts")
    .hmr()
    .watch();
fuse.run();
