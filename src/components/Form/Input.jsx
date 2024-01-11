import { useFormContext } from "react-hook-form"

export function Input({ label, fieldName, validations, ...props }) {
    const { register, formState: { errors } } = useFormContext()
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium text-base tracking-[0.2px]" htmlFor={fieldName}>{label}</label>
            <input type='text' name={fieldName} id={fieldName} {...register(fieldName, validations)} className={`border border-solid border-gray bg-[#1E1E1E] rounded-md px-2 py-1 focus:outline-none ${errors[fieldName]?.message?.toString() ? 'border-red-500' : ''}`} {...props} />
            {errors[fieldName]?.message?.toString() && (
                <span className="text-red-500"> {errors[fieldName]?.message?.toString()} </span>
            )}
        </div>
    )
}