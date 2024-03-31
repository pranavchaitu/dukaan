import { CardSection } from "./CardSection"
import { DataSection } from "./DataSection"
export function MainBody() {
    return <main className="px-3 py-2 md:px-5">
        <div className="flex justify-between items-center">
            <div>
                <h1>
                    Overview
                </h1>
            </div>
            <div className="flex bg-white border border-gray-300 px-2 py-1 rounded-sm">
                <div className="text-sm text-gray-600 pr-1"> 
                    This Month
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>  
        </div>
        <div className="mt-4 mb-6">
            <CardSection />   
        </div>
        <div>
            <h1>
                Transactions  |  This Month
            </h1>
            <div className="mt-4 flex">
                <div className="bg-gray-200 px-3 py-1 rounded-full text-gray-500 text-sm mr-2">
                    <ButtonWithCount name ={"Payouts"} count={22}/>
                </div>
                <div className="bg-sky-800 px-3 py-1 rounded-full text-white text-sm mr-2">
                    <ButtonWithCount name={"Refunds"} count={6}/>
                </div>
            </div>
        </div>
        <div className="mt-6">
            <DataSection />
        </div>
        <div className="mt-3 flex items-center justify-center">
            <div className="text-gray-500 text-sm">
                <h1>Made with passion {'<3'},</h1>
                <h1>Pranav.</h1>
            </div>
        </div>
    </main>
}

function ButtonWithCount({
    name,
    count
}) {
    return count ? <>
        <button>
            {name} ({count})
        </button>
    </> : null
}