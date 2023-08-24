import React, { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add atleaset two uppercase');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please use special characters');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be more than 6 characters');
            return;
        }
        setSuccess('Account Created Successfully');
        e.target.reset();
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
                                            <p className='text-danger text-center mt-2 fw-semibold fs-4'>{error}</p>
                                            <p className='text-success text-center mt-2 fw-semibold fs-4'>{success}</p>
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