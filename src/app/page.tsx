'use client'

import Body          from "@/app/components/Body";
import AuthInput     from "@/app/modules/auth/components/AuthInput";
import Button        from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter ();
    const handleClick = () => {
        router.push ( '/dashboard' );
    };
    return (
        <Body isFlexed>
            <div className={ "w-full" }>
                <div
                    className="bg-white mx-auto border-radius rounded-lg sticky mt-20 p-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-lg">
                    <div className="absolute top-0 p-5 flex justify-between w-full items-center">
                        <h1 className="text-3xl text-indigo-900 uppercase font-bold">
                        </h1>
                        <button className="bg-white rounded-full
                     transition duration-500
                      ease-in-out font-bold h-[50px] w-[100px] font-medium">
                            Register
                        </button>
                    </div>
                    <div className={ "inherit flex flex-col items-center pt-16"}>
                        <div className="font-bold text-blue-900 text-2xl cursor-pointer">The Project<span
                            className="text-pink-600 uppercase cursor-pointer">mom</span>
                        </div>
                        <h3 className={ "text-[24px] text-center font-children pt-5" }>Welcome back mama!</h3>
                    </div>
                    <div className={ "inherit flex flex-col items-center pb-10" }>
                        <AuthInput label={ "Username" } placeholder={ "username or email" }/>
                        <AuthInput
                            label={ "Password" }
                            type={ "Password" }
                            placeholder={ "Password" }
                        />

                        <Button size={ "lg" } onClick={ handleClick }>
                            Login
                        </Button>
                    </div>

                </div>
            </div>
        </Body>
    );
};

export default Login;
