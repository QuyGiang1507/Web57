const fs = require('fs');

const createComment = async ({ content, createdBy, postId }) => {
    const oldCommentssStr = await fs.promises.readFile('comments.json', { encoding: 'utf-8'});

    const oldComments = JSON.parse(oldCommentssStr);

    const newComment = {
        id: Date.now(),
        content,
        createdBy,
        postId,
    };

    const newComments = [...oldComments, newComment];

    await fs.promises.writeFile('comments.json',JSON.stringify(newComments),)

    return newComments;
}

const getComments = async (postId) => {
    const oldCommentssStr = await fs.promises.readFile('comments.json', { encoding: 'utf-8'});

    const oldComments = JSON.parse(oldCommentssStr);

    const postComments = oldComments.filter(comment => String(comment.postId) !== postId )

    return postComments;
}

const updateComment = async (updateCommentData) => {
    const { content, commentId } = updateCommentData;
    
    const oldCommentssStr = await fs.promises.readFile('comments.json', { encoding: 'utf-8'});

    const oldComments = JSON.parse(oldCommentssStr);

    const newComments = oldComments.map(comment => {
        if (String(comment.id) === commentId) {
        return {
            ...comment,
            content
        }
        }
        return comment;
    });

    await fs.promises.writeFile('comments.json',JSON.stringify(newComments),
    )

    return commentId;
}

const deleteComment = async (commentId) => {
    const oldCommentsStr = await fs.promises.readFile('comments.json', { encoding: 'utf-8'});

    const oldComments = JSON.parse(oldCommentsStr);

    const newComments = oldComments.filter(comment => String(comment.id) !== commentId);

    await fs.promises.writeFile('comments.json', JSON.stringify(newComments))

  return newComments;
}

module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
}