import { FC, PropsWithChildren } from "react";



interface Props extends PropsWithChildren {

    isFlexed?: boolean;

}



const Body: FC<Props> = ({

                             isFlexed = false,

                             children,
                         }) => {
    return(

        <div className={`w-full bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg')] 
        bg-cover bg-center
        ${isFlexed ? " flex flex-col " : ""
        } min-h-screen relative`}>
            <div className={"w-screen h-screen backdrop-blur-lg"}>
                {children}
            </div>
         </div>
);
};

export default Body;