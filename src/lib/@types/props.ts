import { Presence } from "@/lib/@types/types"
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
    message: string
}


export interface CursorSvgProps {
    color: string
}


export interface DesignLayoutProps extends LayoutProps {
    live: React.ReactNode
}