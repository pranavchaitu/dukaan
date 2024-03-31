import { VALUES } from "../elements"
import { TableElement } from "./TableElement"

export const Table = () => {
    const elements = VALUES
    
    return <>
        <div class="relative overflow-x-auto rounded">
            <table class="w-full text-md text-left rtl:text-right text-gray-600">
                <thead class="bg-gray-200">
                    <tr>
                        <th scope="col" class="pl-3 py-3">
                            Order ID
                        </th>
                        <th scope="col" class="pl-3 py-3">
                            Status
                        </th>
                        <th scope="col" class="pl-3 py-3">
                            Transaction ID	
                        </th>
                        <th scope="col" class="pl-3 py-3">
                            Refund Date
                        </th>
                        <th scope="col" class="px-3 py-3 text-right">
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

