import React, { useState } from "react";
import { repositories } from "../components/Data";
import { LuRefreshCw } from "react-icons/lu";
import database from '../assets/database.png';
function RepoDisplay({isSidebarOpen}) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRepositories = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`w-full ${isSidebarOpen ? 'bg-black opacity-50' : ''}`}>
            <div className="mt-[8vh] lg:mt-0 lg:ml-[20%] min-h-[100vh] bg-gray-200 border border-gray-300 py-3 px-3 lg:p-4">
                <div className="bg-white rounded-md w-full h-full">
                    <div className="flex lg:flex-row  flex-col gap-5 lg:gap-0 lg:items-center lg:justify-between p-4">
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold text-xl">Repositories</div>
                            <div className="text-gray-600">{repositories.length} total repositories</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="border border-gray-400 rounded-lg py-2 px-4 flex gap-1 items-center">
                                <div><LuRefreshCw /></div>
                                <div>Refresh All</div>
                            </div>
                            <div className="bg-blue-600 text-white rounded-lg py-2 px-4 flex items-center gap-1"> <span className="text-2xl">+</span> Add Repository </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-5 w-full lg:w-[35%] px-4">
                        <input
                            type="text"
                            placeholder={`🔍 Search repositories`}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-6"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="">
                        {filteredRepositories.length > 0 ? (
                            filteredRepositories.map((repo, index) => (
                                <div key={index}
                                    className="w-full p-4 border-t-2 border-gray-200 bg-white hover:bg-gray-200">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <div className="lowercase text-lg font-semibold">{repo.name}</div>
                                            <div className="px-2 py-1 border border-blue-400 bg-blue-100 text-blue-600 text-xs rounded-2xl">{repo.privacy}</div>
                                        </div>
                                        <div className="flex gap-7">
                                            <div className="flex items-center gap-1">
                                                <div>{repo.language}</div>
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src={database}></img>
                                                <div>{repo.size}</div>
                                            </div>
                                            <div>{repo.updated}</div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : <p className="py-10 flex items-center justify-center text-gray-500 text-center">No repositories found</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepoDisplay;
