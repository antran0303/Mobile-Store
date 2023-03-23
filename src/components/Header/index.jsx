import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from '../../features/Auth/components/Login';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/Auth/userSlice';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },

    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    }
}));

export default function Header() {
    const MODE = {
        LOGIN: 'login',
        REGISTER: 'register',
    }

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleClickLogOut = () => {
        const action = logout()
        dispatch(action)
    }


    const loginInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loginInUser.id

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/' className={classes.link}>An Tran Shop</Link>
                    </Typography>

                    <NavLink to='/todos' className={classes.link}>
                        <Button color="inherit">Todo</Button>
                    </NavLink>

                    <NavLink to='/albums' className={classes.link}>
                        <Button color="inherit">Albums</Button>
                    </NavLink>


                    {!isLoggedIn && (
                        <Button onClick={handleClickOpen} color="inherit">Login</Button>

                    )}

                    {isLoggedIn && (
                        <IconButton color="inherit">
                            <AccountCircle onClick={handleClickMenu}></AccountCircle>
                        </IconButton>

                    )}

                </Toolbar>
            </AppBar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleClickLogOut}>Logout</MenuItem>
            </Menu>


            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close></Close>
                </IconButton>

                <DialogContent>

                    {mode === 'register' && (
                        <>
                            <Register closeDialog={handleClose}></Register>
                            <Box textAlign='center'>
                                <Button justifyContent='center' color="primary" onClick={() => { setMode(MODE.LOGIN) }}>
                                    Already have an account. Login here.
                                </Button>
                            </Box>

                        </>
                    )}

                    {mode === 'login' && (
                        <>
                            <Login closeDialog={handleClose}></Login>
                            <Box textAlign='center'>
                                <Button color='primary' onClick={() => { setMode(MODE.REGISTER) }}>
                                    You don't have account. Register here.
                                </Button>
                            </Box>

                        </>
                    )}



                </DialogContent>

            </Dialog>
        </div>
    );
}
