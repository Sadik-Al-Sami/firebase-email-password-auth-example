import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');

        // !Useless validation on login
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Please add atleaset two uppercase');
        //     return;
        // }
        // else if (!/(?=.*[!@#$&*])/.test(password)) {
        //     setError('Please use special characters');
        //     return;
        // }
        // else if (password.length < 6) {
        //     setError('Password must be more than 6 characters');
        //     return;
        // }
        // !Useless validation on login
        e.target.reset();


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    setError(`an email has been sent to ${loggedUser.email}, please verify before doing anything in !!`);
                }
                setSuccess("User Logged In");
                setUser(loggedUser.displayName);
            }).catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2>Please Login</h2>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => handleLogin(e)}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input name='email' type="email" className="form-control" id="email" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input name='password' type="password" className="form-control" id="password" placeholder="Password" required />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    {
                                        <div>
                                            <p><small>New Here? Please <Link to="/register" className='text-accent'>Register</Link> </small></p>
                                            <p className='text-danger text-center mt-2 fw-semibold fs-4'>{error}</p>
                                            <p className='text-success text-center mt-2 fw-semibold fs-4'>{success}</p>
                                            {user && <p className='text-success text-center mt-2 fw-semibold fs-4'>Welcome back {user}</p>}
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;