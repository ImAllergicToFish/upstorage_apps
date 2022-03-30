import { execSync } from "child_process";
import path from 'path'
import fs from 'fs'

export default async function pullAppsFromGit() {
    try {
        
        const pathToApps = path.resolve('./apps')
        const gitURL = 'https://gitlab.upstorage.net/a.som/deploy_keeper'
        
        const files = fs.readdirSync(pathToApps)

        console.log(`Pull apps to path: ${pathToApps}`)
        console.log('LOADING...')

        if(files.length == 0) {
            gitClone(gitURL, pathToApps)
        }
        else {
            gitPull(gitURL, pathToApps)
        }
        
        console.log("DONE!")
    }
    catch(error) {
        console.log(error)
        return error
    }
}

function gitPull(gitURL: string, pathToApps: string) {
    execSync(`git pull`, {cwd: pathToApps});
}

function gitClone(gitURL: string, pathToApps: string) {
    execSync(`git clone ${gitURL} ${pathToApps}`);
}
