import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdOutlineHome } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";
import RepoDisplay from './RepoDisplay';

function MainScreen() {
    const [selectedTab, setSelectedTab] = useState("repositories");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className=''>
            {/* sidebar */}
            <div className="w-1/5 hidden lg:block h-[100vh] bg-white p-5 fixed top-0 left-0">
                <div className='flex flex-row items-center gap-4'>
                    <img src={logo}></img>
                    <div className="text-2xl font-normal ">CodeAnt AI</div>
                </div>
                <div className="my-6">
                    <select className="w-[90%] rounded-lg p-2 border border-gray-300">
                        <option>VaniGupta</option>
                        <option>UtkarshDhariyaPanwar</option>
                    </select>
                </div>
                <div className='flex flex-col h-[80vh] justify-between'>
                    <div className='flex flex-col gap-2 w-[90%]'>
                        <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "repositories"
                            ? "text-white bg-blue-600 rounded-md"
                            : "text-[#414651]"
                            }`}
                            onClick={() => setSelectedTab("repositories")}>
                            <div><MdOutlineHome size={24} /></div>
                            <div className="font-semibold cursor-pointer">Repositories</div>
                        </div>
                        <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "codeReview"
                            ? "text-white bg-blue-600 rounded-md"
                            : "text-[#414651]"
                            }`}
                            onClick={() => setSelectedTab("codeReview")}>
                            <div><FaCode size={20} /></div>
                            <div className="font-semibold cursor-pointer">AI Code Review</div>
                        </div>
                        <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "cloud-security"
                            ? "text-white bg-blue-600 rounded-md"
                            : "text-[#414651]"
                            }`}
                            onClick={() => setSelectedTab("cloud-security")}>
                            <div><CiCloudOn size={20} /></div>
                            <div className="font-semibold cursor-pointer">Cloud Security</div>
                        </div>
                        <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "how-to-use"
                            ? "text-white bg-blue-600 rounded-md"
                            : "text-[#414651]"
                            }`}
                            onClick={() => setSelectedTab("how-to-use")}>
                            <div><FaBook size={20} /></div>
                            <div className="font-semibold cursor-pointer">How to Use</div>
                        </div>
                        <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "settings"
                            ? "text-white bg-blue-600 rounded-md"
                            : "text-[#414651]"
                            }`}
                            onClick={() => setSelectedTab("settings")}>
                            <div><IoSettingsOutline size={20} /></div>
                            <div className="font-semibold cursor-pointer">Settings</div>
                        </div>

                    </div>
                    <div>
                        <div className='flex flex-row gap-2 items-center w-full px-4 py-2 '>
                            <div><IoCallOutline size={20} /></div>
                            <div className="text-[#414651] font-semibold cursor-pointer">Support</div>
                        </div>
                        <Link to='/' className='flex flex-row gap-2 items-center w-full px-4 py-2 '>
                            <div><BiLogOut size={20} /></div>
                            <div className="text-[#414651] font-semibold cursor-pointer">Log Out</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden fixed top-0 h-fit w-[100vw] bg-white z-30 ">
                <div className='flex h-[8vh] w-full justify-between items-center py-8 px-5'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={logo} alt='logo'></img>
                        <div className="text-2xl font-normal">CodeAnt AI</div>
                    </div>
                    <div>{!isSidebarOpen ? (
                        <FiMenu size={28} onClick={() => setIsSidebarOpen(true)} />
                    ) : (
                        <RxCross2 size={28} onClick={() => setIsSidebarOpen(false)} />
                    )}
                    </div>
                </div>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <div>
                    {isSidebarOpen && <div className='z-50 h-fit w-full bg-white p-5'>
                        <div className="mb-6">
                            <select className="w-[97%] rounded-lg p-2 border border-gray-300">
                                <option>VaniGupta</option>
                                <option>UtkarshDhariyaPanwar</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 w-[97%] shadow-md'>
                            <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "repositories"
                                ? "text-white bg-blue-600 rounded-md"
                                : "text-[#414651]"
                                }`}
                                onClick={() => {
                                    setSelectedTab("repositories"); 
                                    setIsSidebarOpen(false);
                                }}>
                                <div><MdOutlineHome size={24} /></div>
                                <div className="font-semibold cursor-pointer">Repositories</div>
                            </div>
                            <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "codeReview"
                                ? "text-white bg-blue-600 rounded-md"
                                : "text-[#414651]"
                                }`}
                                onClick={() => {setSelectedTab("codeReview");
                                    setIsSidebarOpen(false);
                                }}>
                                <div><FaCode size={20} /></div>
                                <div className="font-semibold cursor-pointer">AI Code Review</div>
                            </div>
                            <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "cloud-security"
                                ? "text-white bg-blue-600 rounded-md"
                                : "text-[#414651]"
                                }`}
                                onClick={() => {setSelectedTab("cloud-security");
                                    setIsSidebarOpen(false);
                                }}>
                                <div><CiCloudOn size={20} /></div>
                                <div className="font-semibold cursor-pointer">Cloud Security</div>
                            </div>
                            <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "how-to-use"
                                ? "text-white bg-blue-600 rounded-md"
                                : "text-[#414651]"
                                }`}
                                onClick={() => {
                                    setSelectedTab("how-to-use");
                                    setIsSidebarOpen(false);
                                }}>
                                <div><FaBook size={20} /></div>
                                <div className="font-semibold cursor-pointer">How to Use</div>
                            </div>
                            <div className={`flex flex-row gap-2 items-center w-full px-4 py-2 ${selectedTab === "settings"
                                ? "text-white bg-blue-600 rounded-md"
                                : "text-[#414651]"
                                }`}
                                onClick={() => {
                                    setSelectedTab("settings");
                                    setIsSidebarOpen(false);
                                }}>
                                <div><IoSettingsOutline size={20} /></div>
                                <div className="font-semibold cursor-pointer">Settings</div>
                            </div>
                            <div className='flex flex-row gap-2 items-center w-full px-4 py-2'>
                                <div><IoCallOutline size={20} /></div>
                                <div className="text-[#414651] font-semibold cursor-pointer">Support</div>
                            </div>
                            <Link to='/' className='flex flex-row gap-2 items-center w-full px-4 py-2 '>
                                <div><BiLogOut size={20} /></div>
                                <div className="text-[#414651] font-semibold cursor-pointer">Log Out</div>
                            </Link>
                        </div>
                        {/* </div> */}
                        
                    </div>}
                </div>
            </div>
            <div>
                {selectedTab === "repositories" &&
                    <RepoDisplay isSidebarOpen={isSidebarOpen}/>
                }
            </div>
        </div>
    )
}

export default MainScreen;