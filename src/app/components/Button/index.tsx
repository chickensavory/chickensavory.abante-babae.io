import { ButtonHTMLAttributes, FC, FunctionComponent } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonType = "branded";
type ButtonWidth = "full";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    buttonType?: ButtonType;
    buttonWidth?: ButtonWidth;
}

const ButtonSizeStyles = {
    xs: "",
    sm: "",
    md: "",
    lg: "text-[22px] py-[21px] px-[21px]",
};

const ButtonTypeStyles = {
    branded: "text-[#E4533D] bg-[#FFF1C9] shadow-lg rounded-md",
};

const ButtonWidthStyles = {
    full: "w-full",
};

const Button: FC<Props> = ({
                               size = "sm",
                               buttonType = "branded",
                               buttonWidth = "full",
                               ...props
                           }) => {
    return (
        <button
            {...props}
            className={"bg-sky-500 hover:bg-sky-700 rounded-full transition duration-500 ease-in-out font-bold h-[50px] w-52 mt-5 uppercase"}
        />
    );
};

export default Button;
