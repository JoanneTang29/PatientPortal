const Inbox = require('../models/Inbox');

// Create Inbox Page
exports.getInbox = async (req, res) => {
  try {
    console.log('server try inbox');
    // Retrieve all of the messages inside our db
    const inbox = await Inbox.find();
    // Send response
    console.log('messages line 16', inbox);
    res.status(200).json({
      status: 'success',
      results: inbox.length,
      data: inbox,
    });
  } catch (error) {
    console.log('error in inbox controller');
    res.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.createInbox = async (req, res) => {
  try {
    // Create a new patient
    const newInboxMessage = await Inbox.create(req.body);
    // Send a response
    res.status(201).json({
      status: 'success',
      data: {
        newInboxMessage,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

exports.getOneInboxMessage = async (req, res) => {
  try {
    // Let's retrieve a single patient
    const inboxMessage = await Inbox.findById(req.params.id);
    // Send a res
    res.status(200).json({
      status: 'success',
      data: {
        inboxMessage,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

exports.deleteInboxMessage = async (req, res) => {
  try {
    // Let's retrieve a single patient
    await Inbox.findByIdAndDelete(req.params.id);
    // Send a res
    res.status(204).json({
      status: 'success',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

exports.updateInboxMessage = async (req, res) => {
  try {
    // Let's retrieve a single patient
    const updatedInboxMessage = await Inbox.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // Send a res
    res.status(200).json({
      status: 'success',
      data: {
        updatedInboxMessage,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
