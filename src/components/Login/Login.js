import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import facebookLogo from '../../images/facebook-logo.png';
import googleLogo from '../../images/google-logo.png';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        margin: '30px 38%'
    }
});

const Login = () => {
    const {register, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

    const classes = useStyles();

    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (event) => {
        let isFromValid = true;
        // if (event.target.name === 'email') {
        //     isFromValid = /^\S+@\S+\.\S+/.test(event.target.value);
        // }
        // if (event.target.name === 'password') {
        //     const isPasswordValid = event.target.value.length > 6;
        //     const isPasswordNumber = /\d{1}/.test(event.target.value);
        //     isFromValid = isPasswordValid && isPasswordNumber;
        // }
        if (isFromValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
     const handleSubmitSignIn = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);

                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        event.preventDefault();
    }

    return (
        <div>
            <div className="logo">
                <h2>BETTER WORLD BOOK</h2>
            </div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography >
                        <form className="login-form" onSubmit={handleSubmitSignIn}>
                            {
                                !newUser ? <h3 id="haveAccount">Create an account <Link onClick={() => setNewUser(!newUser)} name="newUser"><label htmlFor="newUser"></label></Link></h3>
                                    : <h3 id="haveAccount">Login <Link onClick={() => setNewUser(!newUser)} name="newUser"><label htmlFor="newUser"></label></Link></h3>
                            }
                            {!newUser && < input name="name"  onBlur={handleBlur} placeholder="Name" />}
                            
                            < input name="email" type="email"  onBlur={handleBlur} placeholder="Email" />
                           
                            < input name="password" type="password"  onBlur={handleBlur} placeholder="Password" />
                           
                            {!newUser && < input name="confirmPassword" type="password"  onBlur={handleBlur} placeholder="Confirm Password" />}

                            <input type="submit" id='button' value={!newUser ? 'Create an account' : 'Login'} />
                            {
                                !newUser ? <p id="haveAccount">Already have an account? <span><Link onClick={() => setNewUser(!newUser)} name="newUser"><label htmlFor="newUser">login</label></Link></span></p>
                                    : <p id="haveAccount">Don't have an account? <span><Link onClick={() => setNewUser(!newUser)} name="newUser"><label htmlFor="newUser">Create an account</label></Link></span></p>
                            }

                        </form>
                        
                    </Typography>
                </CardContent>
            </Card>

            <div className="signIn-google-facebook">
                <Button onClick={fbSignIn} variant="contained" >
                    <span><img id="facebookLogo" src={facebookLogo} alt="" /></span> Continue with facebook
                </Button>
                <br />
                {
                     <Button onClick={googleSignIn} variant="contained" >
                            <span><img id="googleLogo" src={googleLogo} alt="" /></span> Continue with google
                            </Button>
                }
            </div>
        </div>
    );
};

export default Login;


