const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Message = require('../models/Message');

// @route GET api/messages
// @desc Get all messages
// @access Public
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/messages
// @desc Add new message
// @access Public
router.post(
  '/',
  [check('message', 'Message is required!').not().isEmpty()],
  [check('attention', 'Attention is required!').not().isEmpty()],
  [check('person', 'Person is required!').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { message, attention, person, date } = req.body;

    try {
      const newMessage = new Message({
        message,
        attention,
        person,
        date,
      });

      const newM = await newMessage.save();
      res.json(newM);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

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
