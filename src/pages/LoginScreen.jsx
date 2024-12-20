import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Vector from '../assets/Vector.png';
import Subtract from '../assets/Subtract.png';
import gitlab from '../assets/gitlab.png';
import github from '../assets/github.png';
import bitbucket from '../assets/bitbucket.png';
import azure from '../assets/azure.png';
import key from '../assets/key.png';

import { FaArrowUpLong } from "react-icons/fa6";
function SignIn() {
    const [activeTab, setActiveTab] = useState("self-hosted");

    return (
        <div>
            <div className='flex w-full h-[100vh]  relative'>
                <div className='hidden lg:flex lg:absolute lg:bottom-0 lg:left-0'>
                    <img src={Subtract} alt='icon'></img>
                </div>
                {/* left side */}
                <div className='lg:flex hidden w-[50%] bg-[#ffffff]'>
                    <div className='mt-[32vh] ml-32'>
                        <div className='w-[447px] h-[22vh] rounded-2xl shadow-2xl bg-[#fdfafae1]'>
                            <div className='flex justify-center items-center gap-5 p-5'>
                                <img src={logo} alt='logo'></img>
                                <div className='font-bold text-xl text-[#171717]'>AI to Detect & Autofix Bad Code</div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200'></div>
                            <div className='flex justify-evenly items-center p-[2vh]'>
                                <div className='flex flex-col items-center'>
                                    <div className='font-bold text-xl text-[#171717]'>30+</div>
                                    <div className='font-normal text-[#171717]'>Language Support</div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='font-bold text-xl text-[#171717]'>10K+</div>
                                    <div className='font-normal text-[#171717]'>Developers</div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='font-bold text-xl text-[#171717]'>100K+</div>
                                    <div className='font-normal text-[#171717]'>Hours saved</div>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-[52vh] left-[25%] h-[21vh] w-[270px] bg-[#ffffff] z-20 shadow-2xl rounded-2xl px-6 py-4 '>
                            <div className='flex flex-col gap-1 justify-center'>
                                <div className='flex justify-between'>
                                    <div className='w-14 h-14 rounded-full bg-[#9D90FA40] flex items-center justify-center'>
                                        <img src={Vector}></img>
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#0049C6]'><FaArrowUpLong color='bg-[#0049C6]' /></div>
                                            <div className='text-[#0049C6] font-bold text-lg'>14%</div>
                                        </div>
                                        <div className='text-sm'>This week</div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='font-bold text-xl text-[#171717]'>Issues Fixed</div>
                                    <div className='font-bold text-3xl text-[#171717]'>500K+</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-[100vw] lg:w-[50%] bg-[#fafafa] flex flex-col items-center justify-center'>
                    <div className='w-[92%] h-[78%] bg-white border border-[#E9EAEB]'>
                        <div className='h-[45%] flex flex-col gap-5 items-center justify-center'>
                            <div className='text-center flex gap-3'>
                                <img src={logo}></img>
                                <div className='text-2xl font-normal'>CodeAnt AI</div>
                            </div>
                            <div className='font-bold text-xl  sm:text-2xl lg:text-3xl pt-3'>Welcome to CodeAnt AI</div>
                            <div className='w-[90%] flex h-14 rounded-lg bg-gray-100 '>
                                <button
                                    className={`w-[50%] px-4 py-2 ${activeTab === "SAAS"
                                        ? "text-white bg-blue-600 rounded-md"
                                        : "text-gray-700"
                                        }`}
                                    onClick={() => setActiveTab("SAAS")}
                                >
                                    SAAS
                                </button>
                                <button
                                    className={`w-[50%] px-4 py-2 ${activeTab === "self-hosted"
                                        ? "text-white bg-blue-600 rounded-md"
                                        : "text-gray-700 "
                                        }`}
                                    onClick={() => setActiveTab("self-hosted")}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>
                        <div className='w-full h-[2px] bg-gray-300'></div>
                        <div>
                            {activeTab === "self-hosted" &&
                                <div className='flex flex-col gap-3 pt-5 items-center'>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={gitlab} alt='GitLab'></img>
                                        <div className='font-semibold'>Self hosted GitLab</div>
                                    </Link>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={key} alt='key'></img>
                                        <div className='font-semibold'>Sign in with SSO</div>
                                    </Link>
                                </div>
                            }
                            {activeTab === "SAAS" &&
                                <div className='flex flex-col gap-3 pt-5 items-center'>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={github} alt='GitHub'></img>
                                        <div className='font-semibold'>Sign in with GitHub</div>
                                    </Link>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={bitbucket} alt='BitBucket'></img>
                                        <div className='font-semibold'>Sign in with BitBucket</div>
                                    </Link>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={azure} alt='Azure'></img>
                                        <div className='font-semibold'>Sign in with Azure DevOps</div>
                                    </Link>
                                    <Link to='/repoDisplay' className='w-[90%] sm:w-[80%] lg:w-[70%] p-3 border border-gray-300 rounded-md flex gap-3 justify-center '>
                                        <img src={gitlab} alt='GitLab'></img>
                                        <div className='font-semibold'>Sign in with GitLab</div>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='text-sm pt-3'>By signing up you agree to the <span className='font-bold'>Privacy Policy</span>.</div>
                </div>  
            </div>
        </div>
    )
}

export default SignIn;