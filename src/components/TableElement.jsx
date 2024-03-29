export const TableElement = (props) => {
    return <>
        <tr class="bg-white border-b hover:bg-gray-50">
            <td scope="row" class="pl-2 py-2 text-sky-600">
                {props.orderId}
            </td>
            <td class="pl-2 py-2 flex items-center">
                {props.status === "Successful" ? <GreenDot /> : <GrayDot /> }
                {props.status}
            </td>
            <td class="pl-2 py-2">
                {props.transactionId}
            </td>
            <td class="pl-2 py-2">
                {props.refundDate}
            </td>
            <td class="pl-2 py-2 pr-2 text-right">
                ₹{props.orderAmount}
            </td>
        </tr>
    </>
}

const GreenDot = () => {
    return <span className="bg-green-500 rounded-full w-2 h-2 mr-1"></span>;
}
const GrayDot = () => {
    return <span className="bg-gray-400 rounded-full w-2 h-2 mr-1"></span>
}