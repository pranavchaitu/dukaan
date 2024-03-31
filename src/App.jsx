import { MainBody } from "./components/MainBody";
import { SideBar } from "./components/sidebar/SideBar";
import { TopBar } from "./components/TopBar";


function App() {
    return <div className="bg-gray-50 flex">
        <SideBar />
        <div className="w-full md:ml-44">
            <TopBar />
            <div className="pt-14 md:pt-16">  
                <MainBody />
            </div>
        </div>
    </div>
}


export default App;