import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const AuthInput: FC<Props> = ({ label, ...props }) => {
    return (
        <div className={"mezzo flex flex-col"}>
            <label className={"text-[20px] text-black-600 text-center font-bold mt-4"}>
                {label}
            </label>
            <input
                {...props}
                className={
                    "py-1 px-2  rounded-full mt-2 text-black-600 border border-gray-100  placeholder-gray-100 mt-5"
                }
            />
        </div>
    );
};

export default AuthInput;
