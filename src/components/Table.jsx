import { VALUES } from "../elements"
import { TableElement } from "./TableElement"

export const Table = () => {
    const elements = VALUES
    
    return <>
        <div class="relative overflow-x-auto rounded">
            <table class="w-full text-xs text-left rtl:text-right text-gray-600">
                <thead class="bg-gray-200">
                    <tr>
                        <th scope="col" class="pl-2 py-2">
                            Order ID
                        </th>
                        <th scope="col" class="pl-2 py-2">
                            Status
                        </th>
                        <th scope="col" class="pl-2 py-2">
                            Transaction ID	
                        </th>
                        <th scope="col" class="pl-2 py-2">
                            Refund Date
                        </th>
                        <th scope="col" class="px-2 py-2 text-right">
                            Order Amount
                        </th>
                    </tr>
                </thead>
                <tbody className=" whitespace-nowrap">
                    {elements.map((t,i) => <TableElement {...t} key={i}/>)}
                </tbody>
            </table>
        </div>
    </>
}

