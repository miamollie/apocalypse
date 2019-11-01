import React from 'react';
import Head from 'next/head';
// import Nav from '../components/nav';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const Page = ({ title, children }) => (
    <>
        <Head>
            <title>Apocalyso {title && `- ${title}`}</title>
        </Head>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    {/* TODO menu should open as Nav with home and about */}
                </IconButton>
                <Typography variant="h6">Apocalyso</Typography>
            </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="m" style={{ marginTop: '50px' }}>
            <Paper>{children}</Paper>
        </Container>
    </>
);

export default Page;
