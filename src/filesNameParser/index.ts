export default class FilesNameParser {
    private _files: string[]
    private _versionFile: string
    private _appFile: string

    constructor(files: string[]) {
        this._files = files
        this.parse()
    }

    private parse() {
        for(let file of this._files) {
            const splitedFile = file.split('.')
            const extension = splitedFile[splitedFile.length-1]

            if(extension == 'txt') this._versionFile = file
            else this._appFile = file
        }
    }
    
    get versionFile(){
        return this._versionFile
    }

    get appFile(){
        return this._appFile
    }
}