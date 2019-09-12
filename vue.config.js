module.exports = {
    devServer: {
        public: 'http://vue.test',
        watchOptions: {
            poll: true
        },
        disableHostCheck: true,
    },
    transpileDependencies:["vuetify"],
    publicPath: "/CrawlerRegister/"
};