import fs from 'fs'
import path from 'path'
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

        const appFile = new FilesNameParser(files).appFile
        if(!appFile) throw new Error()

        res.download(pathToAppFiles+appFile, appFile)
        
    }
    catch(error) {
        res.status(404).send("ERROR")
    }
}