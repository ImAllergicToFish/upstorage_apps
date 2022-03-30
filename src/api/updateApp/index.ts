export default (app) => {
    app.get(
        `/update/:folder`,
        require('./updateDownload').default,
    );
    app.get(
        `/version/:folder`,
        require('./updateVersion').default,
    );
}
