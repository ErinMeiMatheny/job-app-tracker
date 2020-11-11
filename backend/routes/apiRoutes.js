const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

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

module.exports = router;