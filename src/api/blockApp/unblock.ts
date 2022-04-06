import BlockStatus from "../../blockStatus"

export default (req, res, next) => {

    BlockStatus.set(false);
    res.status(200).send(true);
    
}