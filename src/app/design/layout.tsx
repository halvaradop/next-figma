import { DesignLayoutProps } from "@/lib/@types/props"
import { RoomLayout } from "@/ui/layouts/liveblocks-room-layout"
 

const DesignLayout = ({ children, live }: DesignLayoutProps) => {

    return (
        <RoomLayout>
            {children}
            {live}
        </RoomLayout>
    )
}

export default DesignLayout