import { CardSection } from "./CardSection"
import { DataSection } from "./DataSection"
export function MainBody() {
    return <main className="px-4 py-2 md:px-6">
        <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl">
                Overview
            </div>
            <div className="flex bg-white border border-gray-300 px-3 py-1.5 rounded-sm">
                <div className="text-md text-gray-600 pr-1"> 
                    This Month
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        <div className="mt-6 mb-6">
            <CardSection />   
        </div>
        <div>
            <div className="text-xl">
                Transactions  |  This Month
            </div>
            <div className="mt-5 flex">
                <div className="bg-gray-200 px-4 py-2 rounded-full text-gray-500 text-md mr-2">
                    <ButtonWithCount name ={"Payouts"} count={22}/>
                </div>
                <div className="bg-sky-800 px-4 py-2 rounded-full text-white text-md mr-2">
                    <ButtonWithCount name={"Refunds"} count={6}/>
                </div>
            </div>
        </div>
        <div className="mt-6">
            <DataSection />
        </div>
        <div className="mt-3 flex items-center justify-center">
            <Signature />
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

function Signature() {
    return <>
        <div className="text-gray-500 text-sm">
            {'𝙼𝚊𝚍𝚎 𝚠𝚒𝚝𝚑 𝚙𝚊𝚜𝚜𝚒𝚘𝚗 <𝟹,'} <br/>
            <a href="https://twitter.com/pranavrepuri" target="_blank" className="underline text-sky-600">
                {'𝙿𝚛𝚊𝚗𝚊𝚟.'}
            </a>
        </div>
    </>
}