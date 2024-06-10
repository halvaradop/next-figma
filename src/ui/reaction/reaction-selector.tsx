import { PointerEvent } from "react";
import { Button } from "@/ui/custom/button";
import { ReactionSelectorProps } from "@/lib/@types/props";


export const ReactionSelector = ({ setReaction }: ReactionSelectorProps) => {

    const handleStopPropagation = (event: PointerEvent) => {
        event.stopPropagation()
    }

    
    return (
        <section className="w-fit mx-auto px-2 flex items-center absolute inset-x-0 bottom-20 rounded-full transform bg-green-400" onPointerMove={handleStopPropagation}>
            <Button variant="reaction" onPointerDown={() => setReaction("👍")}>👍</Button>
            <Button variant="reaction" onPointerDown={() => setReaction("🔥")}>🔥</Button>
            <Button variant="reaction" onPointerDown={() => setReaction("😍")}>😍</Button>
            <Button variant="reaction" onPointerDown={() => setReaction("👀")}>👀</Button>
            <Button variant="reaction" onPointerDown={() => setReaction("😱")}>😱</Button>
            <Button variant="reaction" onPointerDown={() => setReaction("🙁")}>🙁</Button>
        </section>
    )
}