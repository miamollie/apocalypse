import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Page = ({ title, children }) => (
    <>
        <Head>
            <title>Apocalyso {title && `- ${title}`}</title>
        </Head>
        <Nav />
        <main>{children}</main>
    </>
);

export default Page;
