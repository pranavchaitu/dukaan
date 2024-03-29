export const RenevueCard = ({
    amountStatus,
    amount,
    orderCount
}) => {
    return <div className="px-3 py-4 shadow rounded">
        <div className="flex items-center">
            <div className=" text-gray-500 text-sm mr-2">
                Amount {amountStatus}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
            </div>
        </div> 
        <div className="flex justify-between pt-2">
            <div className="font-medium text-2xl">
                ₹{amount}
            </div>
            <div className="flex items-center">
                {orderCount ? <>
                    <div className="underline text-sm text-blue-500">
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