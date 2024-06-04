import { useMemo } from "react"
import { useThreads } from "@/root/liveblocks.config"

/**
 * Returns the maximum zIndex property value among all threads in the window.
 * 
 * @returns {number} The maximum zIndex of the window.
 */
export const useGetMaxZIndex = (): number => {
    const { threads } = useThreads()

    return useMemo(() => {
        return threads.reduce((previous, current) => Math.max(previous, current.metadata.zIndex), 0)
    }, [threads])
};
