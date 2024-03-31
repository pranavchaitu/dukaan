import { MainBody } from "./components/MainBody";
import { TopBar } from "./components/TopBar";


function App() {
    return <div className="bg-gray-50">
        <div className="border border-gray-200 fixed w-full z-20">
            <TopBar/>  
        </div>
        <div className="pt-14 md:pt-16">  
            <MainBody />
        </div>
    </div>
}


export default App;