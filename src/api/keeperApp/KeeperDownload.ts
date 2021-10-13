import fs from 'fs'
import path from 'path'
import FilesNameParser from '../../filesNameParser';

export default async (req, res, next) => {
    try {
        const pathToKeeper = path.resolve('./apps/keeper') + '/'
        
        const files = fs.readdirSync(pathToKeeper)

        const appFile = new FilesNameParser(files).appFile
        if(appFile == undefined) throw new Error()

        res.download(pathToKeeper+appFile, appFile)
        
    }
    catch(error) {
        res.status(404).send("ERROR")
    }
}