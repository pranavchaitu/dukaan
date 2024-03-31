export const BlueRevenueCard = ({
    amount,
    orderCount,
    day,
    time
}) => {
    return <div className="text-white bg-sky-600 rounded-md">
        <div className="hover:bg-sky-800 rounded-t px-3 py-4">
            <div className="flex items-center">
                <div className="text-sm mr-2">
                    Next Payout
                </div>
                <div>   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div> 
            <div className="flex justify-between pt-2">
                <div className="font-medium text-2xl">
                    ₹{amount}
                </div>
                <div className="flex items-center">
                    {orderCount ? <>
                        <div className="underline text-sm">
                            {orderCount} order(s)
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>                    
                    </> : null}
                </div>
            </div>
        </div>
        <div className="flex justify-between p-2 bg-sky-800 rounded text-sm px-4">
            <div>
                Next Payment Date:
            </div>
            <div>
                {day}, {time}
            </div>
        </div>
    </div>
}