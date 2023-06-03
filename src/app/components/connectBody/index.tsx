import { FC, InputHTMLAttributes, PropsWithChildren, useState } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    user: string;
    category: string;
}

const ConnectBody: FC<Props> = ({ label, category, user, ...props }) => {

    const [counter, setCounter] = useState ( 0 );
    
    const increase = () => {
        setCounter ( count => count + 1 );
    };

//decrease counter
    const decrease = () => {
        setCounter ( count => count - 1 );
    };

    return (
        <div className="p-3">
            <div className="inline-flex">
                <div className="my-auto w-10 cursor-pointer">
                    <a onClick={ increase }>👍</a>
                    <a onClick={ decrease }>👎</a>
                    <span>{counter}</span>
                </div>
                <div className="p-3">
                    <label className="hover:bg-gray-300">{label}</label>
                    <div className="text-xs">
                        <p>
                            <a href="#" className="hover:underline">{ user } </a>
                            posted in <a href="" className="hover:underline">
                            { category }</a>
                            | <a
                            href="#" className="hover:underline">1.5k Comments</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectBody;