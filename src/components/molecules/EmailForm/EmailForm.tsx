import Icon from '../../atoms/Icon/Icon.tsx';
import iconError from '../../../assets/images/icon-error.svg';
import { useState } from 'react';

export default function EmailForm() {
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    function handleSubmit(value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsInvalid(!emailRegex.test(value));
    }

    return (
        <div className="md:col-[1/3] relative">
            <label>
                <input
                    className={`w-full p-5 text-2xl text-(--text-gray) rounded-lg bg-(--bg-gray) relative border-2 ${
                        isInvalid ? 'border-(--secondary-color)' : 'border-transparent'
                    }`}
                    inputMode={'email'}
                    type="email"
                    required
                    placeholder="Enter your email address"
                    onInvalid={event => {
                        handleSubmit((event.target as HTMLInputElement).value);
                    }}
                    onClick={() => {
                        setIsInvalid(false);
                    }}
                />
                <span
                    className={`italic font-bold w-full absolute mt-[10%] md:mt-[12%] ml-[-100%] p-1 rounded-b-lg bg-(--secondary-color) ${
                        isInvalid ? '' : 'hidden'
                    }`}
                >
                    Whoops, make sure it's an email
                </span>
            </label>
            <Icon
                styles={`absolute top-[24%] right-[3%] ${isInvalid ? '' : 'hidden'}`}
                path={iconError}
                iconAlt="Error"
            />
        </div>
    );
}
