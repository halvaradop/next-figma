import { ButtonProps } from "@/lib/@types/props";
import { cva } from "class-variance-authority";


export const buttonVariants = cva("font-bold rounded-md", {
    variants: {
        variant: {
            default: "",
            reaction: "p-2 text-xl transition-transform transform hover:scale-150"
        },
        size: {
            sm: "h-10 px-3 text-sm",
            md: "h-10 px-3 text-base",
            lg: "h-11 px-5 text-lg",
            xl: "h-12 px-6 text-xl"
        },
        fullWidth: {
            true: "w-full",
            false: "w-fit"
        }
    },
    defaultVariants: {
        variant: "default",
        fullWidth: true,
    }
})


export const Button = ({ className, children, variant, size, fullWidth, ...props }: ButtonProps<typeof buttonVariants>) => {

    return (
        <button className={buttonVariants({ className, variant, size, fullWidth })} {...props}>
            {children}
        </button>
    )
}