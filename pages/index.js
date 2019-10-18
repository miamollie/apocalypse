import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Form from "../components/form";

const Home = () => (
  <>
    <Head>
      <title>Apocalypso</title>
    </Head>
    <Nav />
    <main>
      <Form />
    </main>
  </>
);

export default Home;
