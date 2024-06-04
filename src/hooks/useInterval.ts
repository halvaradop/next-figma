import { useEffect, useRef } from "react"

/**
 * Create an interval function supported by React as a hook.
 * 
 * @param {Function} callback The function to be executed in the setInterval.
 * @param {number} delay The time delay in milliseconds.
 */
export const useInterval = (callback: () => void, delay: number) => {
    const intervalRef = useRef<() => void>(callback)

    useEffect(() => {
        intervalRef.current = callback
    }, [callback])

    useEffect(() => {
        const execute = () => {
            intervalRef.current()
        }

        let intervalId = setInterval(execute, delay)
        return () => clearInterval(intervalId)
    }, [delay]);
}