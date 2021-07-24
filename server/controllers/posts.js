import Post from "../models/Post";
const Posts = {
  getPost: async (req, res) => {
    try {
      const postData = await Post.find();
      console.log(postData);
      res.status(200).json(postData);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  createPost: (req, res) => {
    try {
      const postData = req.body;
      const post = new Post(postData);
      post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};

export default Posts;
