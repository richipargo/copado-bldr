"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopadofySwitch = void 0;
const status_1 = require("../../_bldr/_processes/status");
const { displayStatus } = new status_1.Status();
const path_1 = require("path");
const fs_1 = require('fs');
const rootdir = path_1.dirname(process.argv[1]);
/**
 * Flag routing for init command
 *
 * @param {string} req
 * @param {object} argv
 * @param {object} blueprint
 */
function CopadofySwitch(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Running copado processes");

        /**
         * Async Copado fixes can be executed here
         * Command Line node ./dist/bin/index.js copadofy
         */
        console.log("Root path");
        console.log(rootdir);

        let updatedPath = rootdir.replace("dist/bin",".copado.manifest.json");

        console.log("Manifest path");
        console.log(updatedPath);

        fs_1.readFile(updatedPath, 'utf8', function(err, data)
        {
            data = JSON.parse(data);
            console.log("manifest data");
            console.log(data);
            console.log("instance details");
            console.log(data.instanceDetails);


            data["instanceDetails"] = "testauto";
            console.log(data);



        });

        if ( (argv.a || argv.app) && (argv.s || argv.source) && (argv.t || argv.target) && (argv.u || argv.user) ) {
            console.log("move data from source A to target B folder");
            let source = argv.source;
            let target = argv.target;
            let user = argv.user;
            let app = argv.app;

            let folderNamesByApp = {
                "cb": "Content Builder",
                "de": 'Data Extensions/Copado',
                "as": 'automation-studio/my automations/copado'
            };

            let environmentFolders = {
                "SIT": "Shared SIT",
                "QA": "Shared QA"
            }
            console.log("folder names by map object");
            console.log(folderNamesByApp);
            console.log("environment folders");
            console.log(environmentFolders);

            console.log("target app" + app);
            console.log(folderNamesByApp['cb']);

            let folderTarget = folderNamesByApp[app] + "/" + environmentFolders[target]

            try {
              if (!fs_1.existsSync(folderTarget)) {
                fs_1.mkdirSync(folderTarget);
                console.log("folder created");
              }
            } catch (err) {
              console.log("error folder not created or already exists");
              console.error(err);
            }

            try {
                setTimeout(() => {


                    let sourceFolderPath = rootdir + "/" + folderNamesByApp[app] + "/" + environmentFolders[source];
                    let targetFolderPath = rootdir + "/" + folderNamesByApp[app] + "/" + environmentFolders[target];



                    console.log("source " + sourceFolderPath);
                    console.log("target " + targetFolderPath);


                    // copy folder to new environment
                    fs_1.cp(sourceFolderPath, targetFolderPath, { recursive: true }, (err) => {
                        if (err) {
                            console.error(err);
                            console.log("folders not copied or already exist");
                        } else {
                            console.log("folders copied");
                        }
                    });

                    setTimeout(function() {
                        console.log('This printed after about 5 seconds');
                        let files = fs_1.readdirSync(targetFolderPath);
                        console.log("start files loop");
                        console.log(files);
                        let i;
                        // loop through all folders and rename
                        for (i = 0; i < files.length; i++) {
                            // loop through files
        
                            console.log("file is");
                            console.log(files[i]);
                            let renamePath = files[i].replace(source, target);
                            fs_1.rename(targetFolderPath + '/' + files[i], targetFolderPath + '/' + renamePath, err => {
                                if (err) {
                                    console.error(err);
                                }
                                // done
                            });
                        }
                    }, 5000);
                    // get all files and folders in new sub directory


                    // rename folder to match environment]
                    //fs.rename(targetFolderPath, '/Users/roger', err => {
                        //if (err) {
                            //console.error(err);
                        //}
                        // done
                    //});

                    console.log("Delayed for 5 seconds.");
                }, 5000);


            } catch (err) {
                console.log("folder cannot be copied");
                console.log(err);
            }


        }

    });
}
exports.CopadofySwitch = CopadofySwitch;
