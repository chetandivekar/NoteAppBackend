const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Creating a user using POST path: "/api/auth"
router.post(
  "/",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    //adding validator to validate user info using Express-Validator
    const result = validationResult(req);
    //if the error is empty then request the user info and send response as json
    if (result.isEmpty()) {
      User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          res.status(500).send("Server error");
        });
      return;
    }

    res.send({ errors: result.array() });
  }
);

module.exports = router;
