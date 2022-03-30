import { execSync } from "child_process";
import path from 'path'
import fs from 'fs'

export default async function cloneAppsFromGit() {
    try {
        
        const pathToApps = path.resolve('./apps')
        const gitURL = 'https://gitlab.upstorage.net/a.som/deploy_keeper.git/'

        console.log(`Clone apps to path: ${pathToApps}`)
        console.log('LOADING...')

        clearGit(pathToApps)
        clearApps(pathToApps)
        gitClone(gitURL, pathToApps)
        
        console.log("DONE!")
        
    }
    catch(error) {
        console.log(error)
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
