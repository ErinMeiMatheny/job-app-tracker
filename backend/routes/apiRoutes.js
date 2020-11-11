const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

//Backend running
router.get("/", (req, res) => {
    res.send("Backend running!");
  });

//get jobs for user
router.get("/job-apps/:id", (req,res) => {
    db.job_track.findAll({
        where: {
          user_id: req.params.id,
        },
      })
    .then((response) => res.send(response))
    .catch((error) => res.send("error"))
})

//change employer response

module.exports = router;
