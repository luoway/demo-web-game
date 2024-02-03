import './App.less'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Entry from './routers/Entry'
import Main from './routers/Main/index'
import Registry from './routers/Registry'
import { RoleContext } from './context'

function App() {
    const [role, setRole] = useState('')

    return (
        <RoleContext.Provider value={role}>
            <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/main" element={<Main />} />
                <Route
                    path="/registry"
                    element={<Registry onSelect={setRole} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </RoleContext.Provider>
    )
}

export default App
