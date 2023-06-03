import { FC, PropsWithChildren } from "react";

type BodyColor = "white"
interface Props extends PropsWithChildren {
    isPadded?: boolean;
    isFlexed?: boolean;
    bodyColor?: BodyColor;
}

const BodyColorStyle = {
   "white": "bg-white",
    "red": "bg-red-200",
    "orange": "bg-orange-100",
};

const DashboardBody: FC<Props> = ({
                             bodyColor = "white",
                             isFlexed = false,
                             isPadded = true,
                             children,
                         }) => {
    return (
        <div
            className={`w-full  ${isPadded ? "p-[24px]" : ""} ${
                isFlexed ? " flex flex-col items-center justify-between" : ""
            } min-h-screen ${BodyColorStyle[bodyColor]} relative`}
        >
            {children}
        </div>
    );
};

export default DashboardBody;
