import { useContext, useState } from "react"
import './index.less'
import { RoleContext } from "../../context"
import TreeWorker from "./TreeWorker"
import Footer from "./Footer"

export default function Main(){
    const role = useContext(RoleContext)
    const [working, setWorking] = useState(false)

    return (
        <div className="main">
            <TreeWorker working={working} role={role} onEnd={() => setWorking(false)}/>
            <Footer working={working} onStart={() => setWorking(true)}/>
        </div>
    )
}