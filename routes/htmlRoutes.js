var db = require("../models/app");
const router = require("express").Router();
const path = require("path");
const connection = require('../config/connection');
const User = require("../models/user");
const Games = require("../models/games");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/homepage", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
