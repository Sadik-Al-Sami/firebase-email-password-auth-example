import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const Register = () => {
    const auth = getAuth(app);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');

    // ! Unnecessary functions, kept only for the onChange event handler
    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        // console.log(e.target.value);
        // setPassword(e.target.value);
    }
    // ! Unnecessary functions, kept only for the onChange event handler


    const handleSubmit = (e) => {

        e.preventDefault();

        setSuccess('');
        setRegisterError('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        // ? Validation part * //
        if (!/(?=.*[A-Z])/.test(password)) {
            setRegisterError('Please add atleast one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setRegisterError("Please add atleast two numbers");
            return;
        }
        else if (password.length < 8) {
            setRegisterError("password cant be less than 8 characters");
            return;
        }

        console.log(email, password);

        // ? Create user in Firebase //
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setRegisterError('');
                e.target.reset();
                setSuccess("User Account Created");
                emailVerification(loggedUser);
                updateUserData(loggedUser, name)
            }).catch(error => {
                console.error(error.message);
                setRegisterError(error.message);
                setSuccess('');
            });
    }

    // ? Email verification //
    const emailVerification = (loggedUser) => {
        sendEmailVerification(loggedUser)
            .then((result) => {
                console.log(result);
                alert("Please verify your email")
            });
    }

    // ? Update profile
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
        .then(()=>{
            console.log("User name updated");
        }).catch((error)=>{
            alert("Unfortunately an error has occured", error.message);
            setRegisterError(error.message);
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Register</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className='w-50 mb-4 rounded' type="text" name='name' id='name' placeholder='your name' required />
                <br />
                <input className='w-50 mb-4 rounded' onChange={(e) => handleEmailChange(e)} type="email" name='email' id='email' placeholder='your email please' required />
                <br />
                <input className='w-50 mb-4 rounded' onBlur={(e) => handlePasswordBlur(e)} type="password" name='password' id='password' placeholder='your password please' required />
                <br />
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
            <p><small>Already Registered? <Link to="/login">Sign in</Link></small></p>
            <p className='text-danger'>{registerError}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;