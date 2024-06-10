import { FlyingReactionListProps } from "@/lib/@types/props";
import { FlyingReaction } from "./flying-reaction";

export const FlyingReactionList = ({ reactions }: FlyingReactionListProps) => {


    return reactions.map((reaction, key) => (
        <FlyingReaction 
            key={key}
            x={reaction.point.x}
            y={reaction.point.y}
            value={reaction.value}
            timestamp={reaction.timestamp}
        />
    ))
}