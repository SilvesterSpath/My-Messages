const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Message = require('../models/Message');

// @route GET api/messages
// @desc Get all messages
// @access Public
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ date: -1 });
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
router.put('/:id', async (req, res) => {
  const { person, message, attention } = req.body;

  // Build a contact object
  const messageFields = {};
  if (person) messageFields.person = person;
  if (message) messageFields.message = message;
  if (attention) messageFields.attention = attention;

  try {
    let message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    // Now make the actual update
    message = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: messageFields },
      { new: true }
    );

    res.json(message);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/messages/:id
// @desc Delete a message
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    await Message.findByIdAndRemove(req.params.id);

    res.json({ message: 'Message Removed!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
