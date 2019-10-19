import React from "react";
import Form from "../components/form";
import Page from "../components/page";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

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
