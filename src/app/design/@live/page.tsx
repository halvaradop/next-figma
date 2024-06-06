"use client"
import { PointerEvent, useCallback, useEffect, useState } from "react"
import { LiveCursors } from "@/ui/live-cursor/live-cursors"
import { useMyPresence, useOthers } from "@/root/liveblocks.config"
import { CursorChat } from "@/ui/live-cursor/cursor-chat"
import { CursorMode, CursorState } from "@/lib/@types/types"


const Live = () => {
    const others = useOthers()
    const [myPresence, updateMyPresence] = useMyPresence()
    const { cursor } = myPresence
    const [cursorState, setCursorState] = useState<CursorState>({
        mode: CursorMode.HIDDEN
    })


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
        setCursorState({ mode: CursorMode.HIDDEN })
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

    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.key === "/") {
            setCursorState({
                mode: CursorMode.CHAT,
                previousMessage: null,
                message: ""
            })
        } else if(event.key === "Escape") {
            updateMyPresence({ message: "" })
            setCursorState({ mode: CursorMode.HIDDEN })
        }
    } 

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === "/") {
            event.preventDefault()
        }
    }


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp)
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keyup", handleKeyUp)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])


    return (
        <div 
            className="w-full h-screen flex items-center justify-center border-4 border-primary-green"
            onPointerMove={handlePointerMove} 
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
        >
            <LiveCursors others={others} />
            {cursor && (
                <CursorChat 
                    cursor={cursor} 
                    cursorState={cursorState}
                    setCursorState={setCursorState}
                    updateMyPresence={updateMyPresence}
                />
            )}
            <p className="font-bold">Design Route Page</p>
        </div>
    )
}

export default Live