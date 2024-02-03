import { useEffect, useState } from 'react'
import './index.less'

type Props = {
    role: string
    working: boolean
    onEnd: () => void
}

enum StatusText {
    RESTING = '休息中',
    WORKING = '伐木中',
}

export default function TreeWorker({ role, working, onEnd }: Props) {
    const [status, setStatus] = useState(StatusText.RESTING)

    useEffect(() => {
        setStatus(working ? StatusText.WORKING : StatusText.RESTING)
        if(working){
            setTimeout(() => onEnd(), 2000)
        }
    }, [working])

    return (
        <div className="tree-wroker-ct">
            <div className="tree">这是一棵树，背景+动画</div>
            <div className="worker">
                <p>{role}</p>
                <p>{status}</p>
            </div>
        </div>
    )
}