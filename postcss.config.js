module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: ['last 2 versions', '> 1%', 'iOS 7', 'last 3 iOS versions'],
            autoprefixer: {
                flexbox: 'no-2009',
                grid: true
            },
            stage: 3
        })
    ]
};
