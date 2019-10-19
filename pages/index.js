import React from "react";
import Form from "../components/form";
import Page from "../components/page";
import Paper from "@material-ui/core/paper";
import Container from "@material-ui/core/container";

const Home = () => (
  <Page title="Apocalyspo">
    <Container component="main" maxWidth="xs">
      <Paper>
        <Form />
      </Paper>
    </Container>
  </Page>
);

export default Home;
