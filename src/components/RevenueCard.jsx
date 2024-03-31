export const RevenueCard = ({
    amountStatus,
    amount,
    orderCount  
}) => {
    return <div className="px-4 py-5 shadow rounded">
        <div className="flex items-center">
            <div className=" text-gray-500 text-md mr-2">
                Amount {amountStatus}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div> 
        <div className="flex justify-between pt-3">
            <div className="font-medium text-3xl">
                ₹{amount}
            </div>
            <div className="flex items-center">
                {orderCount ? <>
                    <div className="underline text-md text-blue-500">
                        {orderCount} order(s)
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 text-blue-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>                    
                </> : null}
            </div>
        </div>
    </div>
}