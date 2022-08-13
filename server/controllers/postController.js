// import post model into post controller
import PostMessage from "../models/postMessage.js";

// each callback route function has a try-catch fxn

// GET REQUEST callback fxn
export const getPosts = async (request, response) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    response.status(200).json(postMessages);
  } catch {
    (error) => {
      response.status(404).json({ message: error.message });
    };
  }
};

// CREATE request callback fxn
export const createPost = (request, response) => {
  const post = request.body;
  const newPost = new PostMessage(post); //new instance of post

  try {
    response.status(201).json(newPost);
  } catch {
    (error) => {
      response.status(404).json({ message: error.message });
    };
  }
};

export const updatePost = (req, res) => {
  res.send("updated post");
};

export const deletePost = (req, res) => {
  res.send("deleted post");
};
