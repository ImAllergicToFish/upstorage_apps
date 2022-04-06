export default (app) => {
    app.get(
        `/run/:script`,
        require('./run').default
    )
}