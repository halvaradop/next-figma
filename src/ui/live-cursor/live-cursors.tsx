import { Cursor } from "./cursor"
import { LiveCursorProps } from "@/lib/@types/props"
import { COLORS } from "@/lib/constants"

export const LiveCursors = ({ others }: LiveCursorProps) => {

    
    return others.map(({ connectionId, presence }) => {
        if(!presence || !presence?.cursor) return null

        return (
            <Cursor 
                key={connectionId}
                x={presence.cursor.x}
                y={presence.cursor.y}
                color={COLORS[connectionId % COLORS.length]}
                message={presence.message}              
            />
        )
    })
}