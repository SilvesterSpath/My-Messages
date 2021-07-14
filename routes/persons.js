const express = require('express');
const router = express.Router();

// @route POST api/persons
// @desc Register a person
// @access Public
router.post('/', (req, res) => {
  res.send('Register a person');
});

// @route DELETE api/persons/:id
// @desc Delete a person
// @access Public
router.delete('/:id', (req, res) => {
  res.send('Delete a person');
});

module.exports = router;
