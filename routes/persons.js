const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Person = require('../models/Person');

// @route GET api/persons
// @desc Get all persons
// @access Public
router.get('/', async (req, res) => {
  try {
    const persons = await Person.find({});
    res.json(persons);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/persons
// @desc Register a person
// @access Public
router.post(
  '/',
  [
    check('firstName', 'Firstname is required!').not().isEmpty(),
    check('lastName', 'Lastname is required!').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName } = req.body;

    try {
      const person = new Person({
        firstName,
        lastName,
      });

      const newPerson = await person.save();
      res.json(newPerson);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/persons/:id
// @desc Delete a person
// @access Public
router.delete('/:id', (req, res) => {
  res.send('Delete a person');
});

module.exports = router;
