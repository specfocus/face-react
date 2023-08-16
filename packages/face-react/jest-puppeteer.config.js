module.exports = {
    launch: {
        headless: true,
        args: [
            // Chrome have to run with --no-sandbox flag when running on behalf of root in a docker container
            '--no-sandbox',
            '--disable-gpu'
        ],
        defaultViewport: {
            width: 1090,
            height: 600
        }
    }
}
