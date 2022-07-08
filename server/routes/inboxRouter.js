const express = require('express');
const User = require('../models/User');
const router = express();
const verify = require('./verifyToken');
const inboxController = require('../controllers/inboxController');

// Create patient router
const inboxRouter = express.Router();

// CREATE ROUTE HANDLERS
// Benefit is you can chain your methods here
inboxRouter
  .route('/')
  .get(inboxController.getInbox)
  .post(inboxController.createInbox);
inboxRouter
  .route('/:id')
  .get(inboxController.getOneInboxMessage)
  .delete(inboxController.deleteInboxMessage)
  .put(inboxController.updateInboxMessage)
  .patch(inboxController.updateInboxMessage);

module.exports = inboxRouter;
