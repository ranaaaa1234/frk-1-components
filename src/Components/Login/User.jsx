import React from 'react';

const User = ({ onChangeUser, className }) => {

    const onUserComplete = (e) => {
        onChangeUser(e.target.value);
    }

    return (
        <div>
            <input 
                type='text'
                placeholder="Username"
                onBlur={onUserComplete}
                className={className}
            />
        </div>
    );
};

export default User;
