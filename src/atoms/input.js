import { atom } from 'recoil';

export const emailState = atom({
    key: 'email',
    default: '',
});

export const pwdState = atom({
    key: 'pwd',
    default: '',
});
