export function BarElement(props) {
    return <div className="rounded hover:bg-gray-700 flex p-2.5 mx-2 cursor-pointer text-sm items-center">
        <div className="pr-2">
            {props.svg}
        </div>
        <div>
            {props.title}
        </div>
    </div>
}