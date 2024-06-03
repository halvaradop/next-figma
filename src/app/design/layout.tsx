import { LayoutProps } from "@/lib/@types/props"
import { RoomLayout } from "@/ui/layouts/liveblocks-room-layout"

export const DesignLayout = ({ children }: LayoutProps) => {

    return (
        <RoomLayout>
            {children}
        </RoomLayout>
    )
}