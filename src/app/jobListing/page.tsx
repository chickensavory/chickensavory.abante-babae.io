import JobBoard      from "@/app/components/JobBoard";
import DashboardBody from "@/app/components/DashboardBody";
import Header        from "@/app/components/Header";

const JobListing = () => {
    return (
        <DashboardBody>
            <Header></Header>
            <div>
                <h2 className={"uppercase text-2xl p-6 font-bold mt-20"}>careers</h2>
            </div>
            <JobBoard
                label={ "Virtual Assistant" }
                text={ "X Company" }
                description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
                rating={ "10/10" }>
            </JobBoard>
            <JobBoard
                label={ "Coypwriter" }
                text={ "Y Company" }
                description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
                rating={ "3/10" }>
            </JobBoard>
            <JobBoard
                label={ "Transcriber" }
                text={ "Z Company" }
                description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
                rating={ "8/10" }>
            </JobBoard>
        </DashboardBody>
    );
};

export default JobListing