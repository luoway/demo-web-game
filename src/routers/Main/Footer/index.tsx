import { useState } from 'react'
import './index.less'

type Props = {
    working: boolean
    onStart: () => void
}

export default function Footer({ working, onStart }: Props) {
    const [count, setCount] = useState(10)
    const handler = () => {
        if(working) {
            return
        }
        setCount(count - 1)
        onStart()
    }

    return (
        <div className="footer">
            <div className="start" onClick={handler}>
                <div className="icon">砍树</div>
                <div className="count">桃子：{count}</div>
            </div>
        </div>
    )
}