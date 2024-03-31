import { MainBody } from "./components/MainBody";
import { SideBar } from "./components/sidebar/SideBar";
import { TopBar } from "./components/TopBar";


function App() {
    return <div className="bg-gray-50 flex">
        <SideBar />
        <div className="w-full md:ml-52">
            <TopBar />
            <div className="mt-20 md:mt-22">  
                <MainBody />
            </div>
        </div>
    </div>
}


export default App;