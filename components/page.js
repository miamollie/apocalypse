import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Page = ({ title, children }) => (
    <>
        <Head>
            <title>Apocalyso {title && `- ${title}`}</title>
        </Head>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    {/* TODO menu should open as Nav */}
                </IconButton>
                <Typography variant="h6">Apocalyso</Typography>
                <Button color="inherit">
                    <SearchIcon />
                    Search
                </Button>
            </Toolbar>
        </AppBar>
        <Nav />
        <main>{children}</main>
    </>
);

export default Page;
