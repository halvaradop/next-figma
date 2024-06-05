"use client"
import { LayoutProps } from "@/lib/@types/props"
import { ClientSideSuspense } from "@liveblocks/react"
import { RoomProvider } from "@/root/liveblocks.config"


export const RoomLayout = ({ children }: LayoutProps) => {

    return (
        <RoomProvider id="room" initialPresence={{ cursor: null, message: null }}>
            <ClientSideSuspense fallback={<div>Loading...s</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}