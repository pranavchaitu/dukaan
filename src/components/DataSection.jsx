import { Table } from "./Table"
import { Input } from "./InputBox"
export const DataSection = () => {
    return <div className="bg-white rounded p-3">
        <div className="flex justify-between mb-2">
            <div>
                <Input placeHolder={"Order ID or transactions ID"}/>
            </div>
            <div className="flex">
                <button class="ml-2 flex items-center border border-gray-300 rounded-sm px-2 py-1 text-gray-600 text-sm bg-white hover:bg-gray-100 mr-2">
                    <span className="mr-1">
                        Sort
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </button>
                <button class="flex items-center border border-gray-300 rounded-sm px-2 py-1 text-gray-600 text-sm bg-white hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <Table />
        </div>
    </div>
} 

