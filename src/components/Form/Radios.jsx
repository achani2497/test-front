export function Radios({ options, fieldName, validations, register, errorObj }) {
    return (
        <>
            {options.map(option => {
                return (
                    <div className="flex flex-col gap-1" key={option.value}>
                        <div className="flex gap-1">
                            <input type='radio' name={fieldName} id={option.value} {...register(fieldName, validations)} className={`px-2 py-1 focus:outline-none ${errorObj?.message?.toString() ? 'border-red-500' : ''}`} value={option.value} />
                            <label className="font-medium text-base tracking-[0.2px]" htmlFor={option.value}>{option.label}</label>
                        </div>
                    </div>
                )
            })}
            {errorObj?.message?.toString() && (
                <span className="text-red-500"> {errorObj?.message?.toString()} </span>
            )}
        </>
    )
}