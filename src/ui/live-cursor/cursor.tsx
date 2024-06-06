import { CursorProps } from "@/lib/@types/props"
import { CursorSvg } from "@/ui/icons/cursor-svg"

export const Cursor = ({ x, y, color, message }: CursorProps) => {
    const transform = `translateX(${x}px) translateY(${y}px)`

    return (
        <div className="absolute top-0 left-0 pointer-events-none" style={{ transform }}>
            <CursorSvg color={color} />
            {message && (
                <div className="px-4 py-2 absolute left-2 top-5 rounded-3xl" style={{ backgroundColor: color }}>
                    <p className="text-white text-sm/relaxed whitespace-nowrap">{message}</p>
                </div>
            )}
        </div>
    )
}