let router = require("express-promise-router")();


router.get("/", (req, res, next) => {
    return res.json({ val: true });
});


module.exports = router;