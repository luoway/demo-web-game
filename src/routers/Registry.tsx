import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    onSelect: (role: string) => void
}

export default function Registry({ onSelect }: Props) {
    const roles = ['猪人', '鸟人', '鱼人', '猴子', '熊猫']
    const [selected, setSelected] = useState(roles[0])
    const navigate = useNavigate()
    const handler = () => {
        onSelect(selected)
        navigate('/main')
    }
    return (
        <>
            <div>{selected}</div>
            <ul>
                {roles.map((role) => (
                    <li key={role}>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value={role}
                                checked={selected === role}
                                onChange={() => setSelected(role)}
                            />
                            {role}
                        </label>
                    </li>
                ))}
            </ul>
            <button className='btn' onClick={handler}>开始修炼</button>
        </>
    )
}
