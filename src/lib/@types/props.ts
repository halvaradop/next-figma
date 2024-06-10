import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { VariantProps } from "class-variance-authority"
import { ArgsFunction, Cursor, CursorState, Reaction } from "@/lib/@types/types"
import { Presence } from "@/root/liveblocks.config"
import { User, BaseUserMeta } from "@liveblocks/client"

export interface LayoutProps {
    children: React.ReactNode
}


export interface LiveCursorProps {
    others: readonly User<Presence, BaseUserMeta>[]
}


export interface CursorProps {
    x: number,
    y: number,
    color: string,
    message: string | null
}


export interface CursorSvgProps {
    color: string
}


export interface DesignLayoutProps extends LayoutProps {
    live: React.ReactNode
}


export interface CursorChatProps {
    cursor: Cursor,
    cursorState: CursorState,
    setCursorState: (state: CursorState) => void
    updateMyPresence: (presence: Partial<Presence>) => void
}


export type InputProps<T extends ArgsFunction> = InputHTMLAttributes<HTMLInputElement> & VariantProps<T>
export type ButtonProps<T extends ArgsFunction> = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<T>


export interface ReactionSelectorProps {
    setReaction: (reaction: string) => void
}


export interface FlyingReactionProps extends Cursor {
    value: string,
    timestamp: number
}


export interface FlyingReactionListProps {
    reactions: Reaction[]
}