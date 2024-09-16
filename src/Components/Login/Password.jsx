import React from 'react';

const Password = ({ onChangePassword, className }) => {

    const onPasswordComplete = (e) => {
        onChangePassword(e.target.value);
    }

    return (
        <div>
            <input 
                type='password'
                placeholder="Password"
                onBlur={onPasswordComplete}
                className={className} 
            />
        </div>
    );
};

export default Password;
