import { CursorProps } from "@/lib/@types/props"
import { CursorSvg } from "../icons/cursor-svg"

export const Cursor = ({ x, y, color, message }: CursorProps) => {
    const transform = `translateX(${x}px) translateY(${y}px)`

    return (
        <div className="absolute top-0 left-0 pointer-events-none" style={{ transform }}>
            <CursorSvg color={color} />
        </div>
    )
}