import BlockStatus from "../../blockStatus"

export default (req, res, next) => {

    BlockStatus.set(true);
    res.status(200).send(true);

}