import React, { useState } from "react";
import useStyle from "./style";
import { Typography, Paper, Button, TextField } from "@material-ui/core";
const Form = () => {
  const classes = useStyle();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });
  return (
    <Paper className={classes.paper}>
      <form
        action=""
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" component="h6">
          Creating a memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;
