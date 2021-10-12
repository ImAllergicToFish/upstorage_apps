export default (app) => {
    app.get(
        `/keeper/download`,
        require('./KeeperDownload').default,
    );
    app.get(
        `/keeper/version`,
        require('./keeperVersion').default,
    );
}