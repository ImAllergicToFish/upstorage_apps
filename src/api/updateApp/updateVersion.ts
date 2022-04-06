import fs from 'fs'
import path from 'path'
import { exec } from "child_process";
import FilesNameParser from '../../filesNameParser';
import BlockStatus from '../../blockStatus';

export default async (req, res, next) => {
    try {
        
        if(BlockStatus.get()) {
            res.status(403).send("IS BLOCKED");
            return;
        }

        const folder = req.params.folder
        if(!folder) throw new Error()

        const pathToAppFiles = path.resolve('./apps/' + folder) + '/'
        const files = fs.readdirSync(pathToAppFiles)

        const versionFile = new FilesNameParser(files).versionFile
        if(!versionFile) throw new Error()
    
        const version = fs.readFileSync(pathToAppFiles+versionFile).toString('utf8')
        res.status(200).send(version)
        
    } 
    catch(error) {
        res.status(404).send("ERROR")
    }
}