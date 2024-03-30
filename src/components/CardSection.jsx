import { BlueRevenueCard } from "./BlueRevenueCard"
import { RevenueCard } from "./RevenueCard"

export function CardSection() {
    return <div className="lg:flex gap-4">
        <div className="md:flex lg:w-2/3 gap-4">
            <div className="md:w-1/2 mb-3">
                <BlueRevenueCard 
                    amount={"2,312.23"}
                    orderCount={23}
                    day={"Today"}
                    time={"4:00PM"}
                />
            </div>
            <div className="md:w-1/2 mb-3">
                <RevenueCard 
                    amountStatus={"Pending"}
                    amount={"92,312.20"}
                    orderCount={13}
                />
            </div>
        </div>
        <div className="lg:w-1/3">
            <RevenueCard 
                amountStatus={"Processed"}
                amount={"23,92,312.19"}
            />
        </div>
    </div> 
}
