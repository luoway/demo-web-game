import { NavLink } from 'react-router-dom'

export default function Entry() {
    return (
        <>
            <h1>寻仙XX</h1>
            <NavLink to="/registry" className="btn">注册</NavLink>
            {/* <NavLink to="/main" className="btn">进入游戏</NavLink> */}
        </>
    )
}
