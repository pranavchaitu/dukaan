export function BarElement(props) {
    return <div className="rounded hover:bg-gray-700 flex p-2 mx-2 cursor-pointer text-xs items-center">
        <div className="pr-2">
            {props.svg}
        </div>
        <div>
            {props.title}
        </div>
    </div>
}