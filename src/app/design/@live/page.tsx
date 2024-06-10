"use client"
import { PointerEvent, useCallback, useEffect, useState } from "react"
import { LiveCursors } from "@/ui/live-cursor/live-cursors"
import { useBroadcastEvent, useEventListener, useMyPresence, useOthers } from "@/root/liveblocks.config"
import { CursorChat } from "@/ui/live-cursor/cursor-chat"
import { CursorMode, CursorState, Reaction } from "@/lib/@types/types"
import { ReactionSelector } from "@/ui/reaction/reaction-selector"
import { FlyingReactionList } from "@/ui/reaction/flying-reaction-list"
import { useInterval } from "@/hooks/useInterval"


const Live = () => {
    const others = useOthers()
    const [{ cursor }, updateMyPresence] = useMyPresence()
    const [cursorState, setCursorState] = useState<CursorState>({ mode: CursorMode.HIDDEN })
    const [reactions, setReactions] = useState<Reaction[]>([])
    const broadcast = useBroadcastEvent()


    const handlePointerMove = useCallback((event: PointerEvent) => {
        const getClientRect = event.currentTarget.getBoundingClientRect()

        if(!cursor || cursorState.mode !== CursorMode.REACTION_SELECTOR) {
            updateMyPresence({
                cursor: {
                    x: event.clientX - getClientRect.x,
                    y: event.clientY - getClientRect.y
                }
            })
        }
    }, [])


    const handlePointerLeave = useCallback(() => {
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
        setCursorState(previousState => previousState.mode === CursorMode.REACTION ? {
            ...previousState,
            isPressed: true
        } : previousState)
    }, [cursorState.mode, setCursorState])


    const handlePointerUp = useCallback(() => {
        setCursorState(previousState => previousState.mode === CursorMode.REACTION ? {
            ...previousState,
            isPressed: false
        } : previousState)
      
    }, [cursorState.mode, setCursorState])


    const handleSetReaction = (reaction: string) => {
        setCursorState({
            mode: CursorMode.REACTION,
            reaction,
            isPressed: false,
        })
    }


    useInterval(() => {
        if(cursorState.mode === CursorMode.REACTION && cursorState.isPressed && cursor) {
            setReactions(previousState => previousState.concat({
                point: {
                    x: cursor.x,
                    y: cursor.y,
                },
                value: cursorState.reaction,
                timestamp: Date.now()
            }))
            broadcast({
                x: cursor.x,
                y: cursor.y,
                value: cursorState.reaction
            })
        } 
    }, 100)


    useInterval(() => {
        setReactions(previousState => previousState.filter(reaction => reaction.timestamp > Date.now() - 4000))
    }, 1000)


    useEventListener(e => {
        const { event } = e
        setReactions(previousState => previousState.concat({
            point: {
                x: event.x,
                y: event.y
            },
            value: event.value,
            timestamp: Date.now()
        }))
    })


    useEffect(() => {
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
            } else if(event.key === "e") {
                setCursorState({ mode: CursorMode.REACTION_SELECTOR })
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "/") {
                event.preventDefault()
            }
        }

        window.addEventListener("keyup", handleKeyUp)
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keyup", handleKeyUp)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [updateMyPresence])


    return (
        <div 
            className="w-full h-screen flex items-center justify-center border-4 border-primary-green bg-black"
            onPointerMove={handlePointerMove} 
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
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
            {cursorState.mode === CursorMode.REACTION_SELECTOR && (
                <ReactionSelector setReaction={handleSetReaction} />
            )}
            <FlyingReactionList reactions={reactions} />
        </div>
    )
}

export default Live