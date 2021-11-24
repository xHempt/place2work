import { useState } from 'react'

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(newValue) {
        setValue(newValue.toString())
    }

    return {
        value: value,
        onChange: (e) => handleChange(e.target.value)
    }

}
