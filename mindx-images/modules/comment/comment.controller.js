const CommentModel = require("./comment");

//GET COMMENTS
const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find({});
    res.send({ success: 1, data: comments });
  } catch (error) {
    res.status(400).send({ success: 0, data: [] });
  }
};

//GET COMMENT BY ID
const getComment = async (req, res) => {
  try {
    const {_id} = req.params
    const foundComment = await CommentModel.findById(_id)
    console.log(_id)
    res.send({ success: 1, data: foundComment })
  } catch (error) {
    res.status(400).send({ success: 0, data: null })
  }
};

//CREATE COMMENT

const createComment = async (req, res) => {
  try {
    const { content, post, createBy } = req.body;
    const newComment = await CommentModel.create({
      content,
      post,
      createBy,
    });
    res.send({ success: 1, data: newComment });
  } catch (error) {
    res.status(400).send({ success: 0, data: null });
  }
};

//UPDATE COMMENT
const updateComment = async (req, res) => {
  try {
    const { _id } = req.params
    const dataUpdateComment  = req.body
    const updatedComment = await CommentModel.findByIdAndUpdate(
      _id,
      dataUpdateComment,
      { new: true }
    );
    res.send({ success: 1, data: updatedComment })
  } catch (error) {
    res.status(400).send({ success: 0, data: null })
  }
};

//DELETE COMMENT
const deleteComment = async (req, res) => {
  try {
    const { _id } = req.params
    await CommentModel.findByIdAndDelete(_id);
    res.send({ success: 1 })
  } catch (error) {
    res.status(400).send({ success: 0, data: null });
  }
}

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
}