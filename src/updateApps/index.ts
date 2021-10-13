import { execSync } from "child_process";
import path from 'path'
import fs from 'fs'

export default async function updateApps() {
    try {
        
        const pathToApps = path.resolve('./apps')
        const gitURL = 'https://gitlab.upstorage.net/a.som/deploy_keeper'
        
        const files = fs.readdirSync(pathToApps)
        if(files.length == 0) {
            gitClone(gitURL, pathToApps)
        }
        else {
            clearGit(pathToApps)
            clearApps(pathToApps)
            gitClone(gitURL, pathToApps)
        }
        
    }
    catch(error) {
        return error
    }
}

function gitClone(gitURL: string, pathToApps: string) {
    execSync(`git clone ${gitURL} ${pathToApps}`);
}

function clearApps(pathToApps) {
    execSync(`rm -rf ${pathToApps + '/*'}`)
}

function clearGit(pathToApps) {
    execSync(`rm -rf ${pathToApps + '/.git'}`)
}
