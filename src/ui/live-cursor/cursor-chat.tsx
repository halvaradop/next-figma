import { ChangeEvent, FormEvent, KeyboardEvent } from "react"
import { Input } from "@/ui/custom/input"
import { CursorChatProps } from "@/lib/@types/props"
import { CursorMode } from "@/lib/@types/types"
import { CursorSvg } from "@/ui/icons/cursor-svg"


export const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
    const transform = `translateX(${cursor.x}px) translateY(${cursor.y}px)`

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        updateMyPresence({ message: value })
        setCursorState({
            mode: CursorMode.CHAT,
            message: value,
            previousMessage: null
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setCursorState({
            mode: CursorMode.CHAT,
            previousMessage: cursorState.mode === CursorMode.CHAT ? cursorState.message : "",
            message: ""
        })
    }


    return (
        <div className="absolute top-0 left-0" style={{ transform }}>
            {cursorState.mode === CursorMode.CHAT && (
                <>
                    <CursorSvg color="#000" />
                    <form onSubmit={handleSubmit}>
                        <label className="text-white text-sm/relaxed rounded-2xl absolute top-5 left-2 bg-blue-500">
                            {cursorState.previousMessage && <span>{cursorState.previousMessage}</span> }
                            <Input
                                variant="note"
                                value={cursorState.message}
                                placeholder={cursorState.previousMessage ? "" : "Type a message ..."}
                                maxLength={50}
                                autoFocus={true}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                </>
            )}
        </div>
    )
}