const express = require('express');
const router = express.Router()
const commentController = require('./comment.controller')

router.get('/', commentController.getComments)
router.get('/:_id', commentController.getComment)
router.post('/', commentController.createComment)
router.put('/:_id', commentController.updateComment)
router.delete('/:_id', commentController.deleteComment)

module.exports = router