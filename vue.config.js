module.exports = {
    devServer: {
        public: 'http://vue.test/CrawlerRegister',
        watchOptions: {
            poll: true
        },
        disableHostCheck: true,
    },
    transpileDependencies:["vuetify"],
    publicPath: "/CrawlerRegister/"
};