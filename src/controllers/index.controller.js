const indexController = {};

indexController.showIndex = (req, res) => {
    res.render('index');
};

indexController.showAbout = (req, res) => {
    res.render('about');
};


module.exports = indexController