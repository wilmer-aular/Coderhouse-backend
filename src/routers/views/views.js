let router = require("express-promise-router")();


router.get("/", (req, res, next) => {
    //render es para que muestre una vista en lugar de un json
    return res.render("index");
});


module.exports = router;