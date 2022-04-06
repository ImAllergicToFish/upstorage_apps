import { execSync } from "child_process";
import BlockStatus from "../../blockStatus";

export default (req, res, next) => {
    try {
        BlockStatus.set(false);

        const script: string = '../' + req.params.script;
        execSync(script,  {stdio: 'inherit', cwd: '../'});
        res.status(200).send('true');

        BlockStatus.set(true);

    }
    catch(e) {
        res.status(404).send("SCRIPT NOT FOUND");
    }
}