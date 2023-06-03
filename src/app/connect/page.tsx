'use client'
import ConnectBody   from "@/app/components/connectBody";
import DashboardBody from "@/app/components/DashboardBody";
//may magbabasa ba nito?
import Header from "@/app/components/Header";

const Connect = () => {

    return (
        <DashboardBody bodyColor={"red"}>
            <Header></Header>
            <div
                className="bg-white mx-auto border-radius rounded-lg sticky top-80 p-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-lg">
                <header className="border-grey-500 border-b-4 py-2 leading-5">
                    <a className="border-b-4 border-yellow-500 p-2" href="#">Popular</a>

                    <a className="border-b-4 border-transparent hover:border-yellow-500 p-2" href="#">Latest</a>

                </header>
                <nav className="text-center p-2 border-b-2 border-dashed">
                    <a className="p-2 font-semibold" href="#">Today</a>
                    <a className="p-2" href="#">This Week</a>
                    <a className="p-2" href="#">This Month</a>
                </nav>
                <ConnectBody
                    label={ "X Company does not understand a single mom's life." }
                    user={ "pagodnananay" }
                    category={ "Work Life" }>
                </ConnectBody>
                <ConnectBody
                    label={ "Looking for a playdate for my 4 year old son." }
                    user={ "Juan Dela Cruz" }
                    category={ "Home Life" }>
                </ConnectBody>
                <ConnectBody
                    label={"Tips for first time moms!"}
                    user={"anginyongmamita"}
                    category={"Self-care"}>
                </ConnectBody>
                <ConnectBody
                    label={"Worried as a first time mom."}
                    user={"kabadongbabae"}
                    category={"Home Life"}>
                </ConnectBody>
                <ConnectBody
                    label={"Best work for a single mom with a 2 year old?"}
                    user={"Megan San Pedro"}
                    category={"Work Life"}>
                </ConnectBody>
                <ConnectBody
                    label={"Anyone applied/worked to Y Company?"}
                    user={"Denice Santos"}
                    category={"Work Life"}>
                </ConnectBody>
                <ConnectBody
                    label={"Anyone knows a good babysitter/daycare for a 3 year old around Makati?"}
                    user={"angnagiisangdiyosa"}
                    category={"Home Life"}>
                </ConnectBody>
            </div>
        </DashboardBody>
    );
};
export default Connect;