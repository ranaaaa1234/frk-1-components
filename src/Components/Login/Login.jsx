import React, { useState } from 'react';
import User from './User';
import Password from './Password';
import Button from './Button';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.loginContainer}> 
            <User onChangeUser={setUser} className={styles.inputField} />
            <Password onChangePassword={setPassword} className={styles.inputField} />
            <Button className={styles.button} />
        </div>
    );
};

export default Login;
