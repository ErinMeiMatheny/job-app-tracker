const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

//Backend running
router.get("/", (req, res) => {
    res.send("Backend running!");
  });


  router.post("/job-apps", (req, res) => {
    db.job_track
      .create({
        user_id: req.body.user_id,
        company_name: req.body.company_name, 
        job_title: req.body.job_title, 
        date_applied: req.body.date_applied, 
        city: req.body.city,
        company_responded: "false", 
        is_deleted: "false"
      })
      .then((results) => res.send(results))
      .catch((err) => console.log(err));

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