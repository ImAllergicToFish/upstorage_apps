import { execSync } from "child_process";

export default (req, res, next) => {
    try {
        
        const script: string = '../' + req.params.script;
        execSync(script,  {stdio: 'inherit', cwd: '../'});
        res.status(200).send('true')

    }
    catch(e) {
        res.status(404).send("SCRIPT NOT FOUND")
    }
}