'use client'
import { useRouter } from "next/navigation";
import DashboardBody from "@/app/components/DashboardBody";
import Header from "@/app/components/Header";

const Dashboard = () => {
    const router = useRouter();

    return (
       <DashboardBody bodyColor={"white"}>
           <div className="bg-pink-100 h-auto">
            <Header></Header>
               <div className="flex flex-row pt-24 px-10 pb-4">
                   <div className="w-2/12 mr-6">
                       <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4" >
                           <a href="/dashboard" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-icons-outlined float-left pr-2">dashboard</span>
                               Home
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                           <a href="/jobListing" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-symbols-outlined float-left pr-2">work</span>
                              Jobs
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                           <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-symbols-outlined float-left pr-2">splitscreen</span>
                                To Do
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                       </div>

                       <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                           <a href="/connect" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-symbols-outlined float-left pr-2">hub</span>
                                Connect
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                           <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                              <span className="material-symbols-outlined float-left pr-2">local_activity</span>
                               Events
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                       </div>

                       <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                           <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-icons-outlined float-left pr-2">face</span>
                               Profile
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                           <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-icons-outlined float-left pr-2 float-left pr-2">settings</span>
                               Settings
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                           <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                               <span className="material-icons-outlined float-left pr-2 float-left pr-2">power_settings_new</span>
                               Log out
                               <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                           </a>
                       </div>
                   </div>

                   <div className="w-10/12">
                       <div className="flex flex-row">
                           <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6 bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg')">
                               <p className="text-5xl text-indigo-900"><strong className={"font-bold"}>What&apos;s New</strong></p>
                               <span
                                   className="bg-red-300 text-s text-white inline-block rounded-full mt-12 px-8 py-2">
                                   <li>Lorem Ipsum Lorem Ipsum</li>
                               </span>
                           </div>

                           <div
                               className="bg-no-repeat bg-orange-100 border border-orange-300 rounded-xl w-5/12 ml-2 bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg">
                                <p className="text-5xl text-indigo-900 my-10 mx-10 font-bold">Jobs for you</p>
                                <a href=""
                                  className="bg-orange-300 text-s text-white inline-block rounded-full mb-8 ml-12 px-8 py-2"><strong>See
                                   more</strong></a>
                           </div>
                       </div>
                       <div className="flex flex-row h-64 mt-6">
                           <div
                               className="bg-no-repeat bg-orange-100 border border-orange-300 rounded-xl w-5/12 mr-2 bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg">
                               <p className="text-4xl text-indigo-900 my-10 mx-10 font-bold">Events for you</p>
                               <a href=""
                                  className="bg-orange-300 text-s text-white inline-block rounded-full mb-8 ml-12 px-8 py-2"><strong>See
                                   more</strong></a>
                           </div>
                           <div
                               className="bg-no-repeat bg-red-200 border border-orange-300 rounded-xl w-5/12 ml-2 bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg">
                               <p className="text-5xl text-indigo-900 my-10 mx-10 font-bold">Stories</p>
                               <a href="/connect"
                                  className="bg-red-300 text-s text-white inline-block rounded-full mb-8 ml-12 px-8 py-2"><strong>See
                                   more</strong></a>
                           </div>
                           <div
                               className="bg-no-repeat bg-orange-100 border border-orange-300 rounded-xl w-5/12 ml-2 bg-[url('https://themighty.com/wp-content/uploads/2018/01/GettyImages-665831012-1280x640.jpg">
                               <p className="text-5xl text-indigo-900 my-10 mx-10 font-bold">Jobs for you</p>
                               <a href=""
                                  className="bg-orange-300 text-s text-white inline-block rounded-full mb-8 ml-12 px-8 py-2"><strong>See
                                   more</strong></a>
                           </div>
                   </div>
                </div>
            </div>
           </div>
       </DashboardBody>
    );
};

export default Dashboard;
