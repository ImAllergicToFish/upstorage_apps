export default (app) => {
    app.get(
        `/block`,
        require('./block').default
    ),
    app.get(
        `/unblock`,
        require('./unblock').default
    )
}