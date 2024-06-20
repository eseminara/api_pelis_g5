const express = require('express');
const { getAllComments, getCommentById, createComment, updateComment, deleteComment } = require('../controllers/commentControllers');

const router = express.Router();

router.get('/comments', getAllComments);

router.get('/comments/:id', getCommentById);

router.post('/comments', createComment);

router.put('/comments/:id', updateComment);

router.delete('/comments/:id', deleteComment);

module.exports = router;
