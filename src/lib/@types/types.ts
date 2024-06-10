
export enum CursorMode {
    HIDDEN,
    CHAT,
    REACTION_SELECTOR,
    REACTION,
}

export interface Cursor {
    x: number,
    y: number
}

export type CursorState = 
    |   { mode: CursorMode.HIDDEN }
    |   { mode: CursorMode.REACTION_SELECTOR }
    |   {
            mode: CursorMode.CHAT,
            message: string,
            previousMessage: string | null
        }
    |   {
            mode: CursorMode.REACTION,
            reaction: string,
            isPressed: boolean
        }

export type ArgsFunction = (...args: any) => void

export interface Reaction {
    value: string,
    timestamp: number,
    point: Cursor
}

export interface ReactionEvent extends Cursor {
    value: string
}