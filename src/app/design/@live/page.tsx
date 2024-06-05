"use client"
import { PointerEvent, useCallback } from "react"
import { LiveCursors } from "@/ui/live-cursor/live-cursors"
import { useMyPresence, useOthers } from "@/root/liveblocks.config"


const Live = () => {
    const others = useOthers()
    const [myPresence, updateMyPresence] = useMyPresence()

    const handlePointerMove = useCallback((event: PointerEvent) => {
        const getClientRect = event.currentTarget.getBoundingClientRect()

        updateMyPresence({
            cursor: {
                x: event.clientX - getClientRect.x,
                y: event.clientY - getClientRect.y
            }
        })
    }, [])

    const handlePointerLeave = useCallback((event: PointerEvent) => {
        updateMyPresence({
            cursor: null,
            message: null
        })
    }, [])

    const handlePointerDown = useCallback((event: PointerEvent) => {
        const getClientRect = event.currentTarget.getBoundingClientRect()

        updateMyPresence({
            cursor: {
                x: event.clientX - getClientRect.x,
                y: event.clientY - getClientRect.y
            }
        })
    }, [])


    return (
        <div 
            className="w-full h-screen flex items-center justify-center border-4 border-primary-green"
            onPointerMove={handlePointerMove} 
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
        >
            <LiveCursors others={others} />
            <p className="font-bold">Design Route Page</p>
        </div>
    )
}

export default Live