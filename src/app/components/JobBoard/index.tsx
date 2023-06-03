import { FC, InputHTMLAttributes, PropsWithChildren } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    text: string;
    description: string;
    rating: string;
}

const ConnectBody: FC<Props> = ({label, description, rating, text, ...props}) => {


    return (
        <div className="flex flex-col h-64 mt-3">
            <div className="bg-white p-16 rounded-lg shadow-lg flex justify-between w-full items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">{ label }
                </h2>
                    <p className="text-gray-700">{ text }</p>
                </div>
                <div>
                    <p className="text-gray-700">Description: { description }</p>
                </div>
                <div
                    className="inherit w-24 h-24 border-2 border-black-600 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    { rating }
                </div>
            </div>
        </div>
    );
};

export default ConnectBody;