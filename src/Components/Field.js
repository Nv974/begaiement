import React from 'react';
import { useRecoilState } from 'recoil';
import { emailState, pwdState } from '../atoms/input';

const Field = ({ type, id, placeholder }) => {
    const [email, setEmailValue] = useRecoilState(emailState);
    const [pwd, setPwdValue] = useRecoilState(pwdState);

    return (
        <input
            type={type}
            id={id}
            className='form-control custom-input mt-3'
            placeholder={placeholder}
            required=''
            autoFocus=''
            onChange={
                type === 'email'
                    ? (e) => setEmailValue(e.target.value)
                    : (e) => setPwdValue(e.target.value)
            }
            value={type === 'email' ? email : pwd}
        />
    );
};

export default Field;
