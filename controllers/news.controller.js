class NewsController {
    async pageCreateNews(req, res) {
        res.render(
            'news/news-create',
            {
                pageTitle : "Crete NEws",
                layout: 'layouts/layouts'
            }
        )
    }
}

module.exports = NewsController;