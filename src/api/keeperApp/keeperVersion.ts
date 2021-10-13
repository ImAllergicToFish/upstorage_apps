import fs from 'fs'
import path from 'path'
import { exec } from "child_process";
import FilesNameParser from '../../filesNameParser';

export default async (req, res, next) => {
    try {
        const pathToKeeper = path.resolve('./apps/keeper') + '/'
        
        const files = fs.readdirSync(pathToKeeper)

        const versionFile = new FilesNameParser(files).versionFile
        if(versionFile == undefined) throw new Error()
        console.log(versionFile)
        const version = fs.readFileSync(pathToKeeper+versionFile).toString('utf8')
        console.log(version)
        res.status(200).send(version)
        
    }
    catch(error) {
        res.status(404).send("ERROR")
    }
}