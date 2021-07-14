const express = require('express');
const router = express.Router();

// @route GET api/messages
// @desc Get all messages
// @access Public
router.get('/', (req, res) => {
  res.send('Get all messages');
});

// @route POST api/messages
// @desc Add new message
// @access Public
router.post('/', (req, res) => {
  res.send('Add a message');
});

// @route PUT api/messages/:id
// @desc Update a message
// @access Public
router.put('/:id', (req, res) => {
  res.send('Update a message');
});

// @route DELETE api/messages/:id
// @desc Delete a message
// @access Public
router.delete('/:id', (req, res) => {
  res.send('Delete a message');
});

module.exports = router;
