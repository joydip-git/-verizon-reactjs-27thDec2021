import { useState } from "react"

function useValue() {

    const [valState, setValState] = useState(0)

    const updateValueHandler = () => {
        setValState(
            oldNum => {
                return oldNum + 1
            }
        )
    }
    return [valState, updateValueHandler]
}
export default useValue