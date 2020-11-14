const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");

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
router.put("/employer-response/:id", (req, res) => {
    db.job_track
      .update( 
         {
        company_responded: Sequelize.literal('NOT company_responded')
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((results) => res.send(results))
      .catch((err) => alert(err));
  });


module.exports = router;
