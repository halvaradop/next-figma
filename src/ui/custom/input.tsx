import { InputProps } from "@/lib/@types/props"
import { cva } from "class-variance-authority"

export const inputVariants = cva("h-10 indent-4 border rounded-md", {
    variants: {
        variant: {
            "note": "text-white border-none z-10 placeholder-blue-300 bg-transparent"
        },
        size: {
            xs: "text-sm font-normal",
            md: "text-base font-bold",
            lg: "text-lg font-bold",
            xl: "text-xl font-bold"
        }
    }
})


export const Input = ({ className, type, value, variant, ...props }: InputProps<typeof inputVariants>) => {

    return (
        <input 
            type={type}
            value={value}
            className={inputVariants({ className, variant })}
            {...props}
        />  
    )
}