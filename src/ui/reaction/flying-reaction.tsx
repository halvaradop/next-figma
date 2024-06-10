import { cx } from "class-variance-authority";
import { FlyingReactionProps } from "@/lib/@types/props";

const animationX: Record<number, string> = {
    0: "animate-x-0",
    1: "animate-x-1",
    2: "animate-x-2"
}

const animationY: Record<number, string> = {
    0: "text-2xl animate-y-0",
    1: "text-3xl animate-y-1",
    2: "text-4xl animate-y-2"
}


export const FlyingReaction = ({ x, y, value, timestamp }: FlyingReactionProps) => {

    return (
        <div className={cx("absolute select-none pointer-events-none", animationY[timestamp % 3])} style={{ top: y, left: x }}>
            <div className={animationX[timestamp % 3]}>
                <div className="transform -translate-y-1/2 -translate-x-1/2">{value}</div>
            </div>
        </div>
    )
}