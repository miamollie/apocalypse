import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

interface Props {
    title: string;
}

const Page: React.FC<Props> = ({ title, children }: Props) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <Nav />
        <main>{children}</main>
    </>
);

export default Page;
