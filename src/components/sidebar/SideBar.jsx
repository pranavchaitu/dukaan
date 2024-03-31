import { BarElement } from "./BarElement"
import { BottomSection } from "./BottomSection"
import { DATA } from "./Data"
import { TopSection } from "./TopSection"


export const SideBar = () => {
    return <div className="text-white bg-slate-800 w-44 fixed top-0 bottom-0 hidden md:block">
        <div className="flex flex-col justify-between h-full">
            <TopSection />
            <div>
                {DATA.map((b,i) => <>
                    <BarElement title={b.title} svg={b.svg}/>
                </>)}
            </div>
            <BottomSection />
        </div>
    </div>
}





