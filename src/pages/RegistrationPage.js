import React, { useState } from 'react';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const url = isSignup
            ? 'http://backend-server/register'
            : 'http://backend-server/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(isSignup ? 'Signing up is successful!' : 'Logging in is successful!');
                setFormData({ username: '', email: '', password: '' });
            } else {
                setError(result.message || 'Error.');
            }
        } catch (err) {
            setError('Error ' + err.message);
        }
    };

    const toggleForm = () => {
        setIsSignup(!isSignup);
        setError(null);
        setSuccess(null);
        setFormData({ username: '', email: '', password: '' });
    };

    return (
        <div className="registration-container">
            <h2>{isSignup ? 'Registration' : 'Login'}</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                {isSignup && (
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            </form>

            <button className="toggle-button" onClick={toggleForm}>
                {isSignup ? 'Already have an account? Login' : `Create account`}
            </button>

            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default RegistrationPage;
