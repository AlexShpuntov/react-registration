import React, { useState } from 'react';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Registartion is successful');
                setFormData({ username: '', email: '', password: '' });
            } else {
                setError(result.message || 'Registration error.');
            }
        } catch (err) {
            setError('Network error: ' + err.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Sign up
                </button>
            </form>

            {success && <p style={{ color: 'green', marginTop: '15px' }}>{success}</p>}
            {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
        </div>
    );
};

export default RegistrationPage;