const Joi = require('joi');

const createPostSchema = Joi.object({
    title: Joi.string().min(6).max(100).required(),
    description: Joi.string().min(100).max(200).required(),
    imageUrl: Joi.string().required(),
});

module.exports = createPostSchema;