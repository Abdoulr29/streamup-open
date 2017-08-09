// var electronInstaller = require('electron-winstaller');
// var settings = {
//     // Specify the folder where the built app is located
//     appDirectory: './dist',
//     // Specify the existing folder where 
//     outputDirectory: './setup',
//     // The name of the Author of the app (the name of your company)
//     authors: 'StreamUpBox Inc.',
//     // The name of the executable of your built
//     exe: './YegoBox.exe'
// };
// resultPromise = electronInstaller.createWindowsInstaller(settings);
//  resultPromise.then(() => {
//     console.log("The installers of your application were succesfully created !");
// }, (e) => {
//     console.log(`Well, sometimes you are not so lucky: ${e.message}`)
// });


//playing with new idea
"use strict";
const path = require('path');
const _root = path.resolve(__dirname, '.');
const rimraf = require('rimraf');
const packager = require('electron-packager');
const electronInstaller = require('electron-winstaller');
// 已编译源码目录
const buildPath = path.resolve(_root,"./output/electron/build");
// 打包发布目录
const distPath = path.resolve(_root,"./dist");

rimraf(path.resolve(_root, distPath), function (error) {
    if (error) return console.error('Delete output/electron Directory Failed', error);
    console.log("Deleted output/electron/dist contents");
    console.log("Start packing the program!");
    console.log(path.join(buildPath,"icon.ico"));
    packager({
        "name":"myTestApp",
        "appCopyright ":"Copyright Information",
        "appVersion":"0.0.1",
        "arch":"all",
        "platform":"win32",
        // "asar":true,
        "dir":buildPath,
        "out":distPath,
        "icon":path.join(buildPath,"icon.ico")
    }, function done_callback(err, appPaths) {
        if (error) return console.error('Package failed!', error);
        console.log("Packaged to complete!Please use innoSetup Or NSIS Make installation package");
        /*let resultPromise = electronInstaller.createWindowsInstaller({
            appDirectory: path.join(distPath, "app-win32-x64"),
            outputDirectory: path.join(distPath, "installer"),
            iconUrl:path.join(buildPath,"icon.ico"),
            loadingGif:path.join(buildPath,"loading.gif"),
            authors: 'My App Inc.',
            exe: 'app.exe'
        });
        resultPromise.then(() => console.log("生成安装包成功!"), (e) => console.log(`生成安装包失败！ ${e.message}`));*/
    });
});


