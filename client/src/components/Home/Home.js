import React, { useEffect, useState } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Posts from "../Posts/Post";
import Form from "../form/Form";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import Pagination from "../Pagination";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // search post
    }
  };
  const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          spacing="3"
          justifyContent="space-between"
          alignItems="stretch"
          className={classes.gridContainer}
        >
          <Grid item xs="12" sm="6" md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs="12" sm="6" md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search memories"
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={handleKeyPress}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
