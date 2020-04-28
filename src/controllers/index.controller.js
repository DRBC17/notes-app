const indexController = {};

indexController.showIndex = (req, res) => {
    res.render('index');
};

indexController.showAbout = (req, res) => {
    res.render('/About');
};


module.exports = indexController