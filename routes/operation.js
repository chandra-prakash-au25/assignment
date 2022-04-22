const item = require("../model/table");

const router = require("express").Router();

//CREATE

router.post("/", async(req, res) => {
    const newitem = new item(req.body);

    try {
        const saveditem = await newitem.save();
        res.status(200).json(saveditem);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async(req, res) => {
    try {
        const updateditem = await item.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updateditem);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id",async(req, res) => {
    try {
        await item.findByIdAndDelete(req.params.id);
        res.status(200).json("item has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/:Id", async(req, res) => {
    try {
        const items = await item.find({ userId: req.params.userId });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/", async(req, res) => {
    try {
        const items = await item.find();
        console.log(items);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;