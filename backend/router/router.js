const express = require('express');

const Role = require("../models/roles");

const router = express.Router();


// O0mTgZbnAHlGttUU

router.post("" ,(req, res, next) => {
  const role = new Role(req.body)
  console.log(req.body);
  role.save().then((resData) => {
    res.status(201).json({
      message: "Role Added Successfully!",
      data: resData
    })
  }).catch(err => {
    res.status(201).json({
        message: "Role Faild!",
        data: err
    })
  });
});


router.get("", (req, res, next) => {
  Role.find().then( documents => {
    // console.log(documents);
    res.status(200).json({
      message: "Fetching Data Succesfully",
      data: documents
    })
  })
})

router.delete("/:_id", (req, res) => {
  // console.log('delete'+req.params._id)
  Role.deleteOne({ _id: req.params._id }).then(result => {
    // console.log(result);
    res.status(200).json({ 
      message: "Role deleted!",
      dataId: req.params._id
     });
  });
});
router.delete("", (req, res) => {
  Role.deleteMany({}).then(result => {
    // console.log(result);
    res.status(200).json({ 
      message: "Roles deleted Successfully!",

     });
  });
});

module.exports = router;

