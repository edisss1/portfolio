interface FormInputProps {
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    label: string
    type?: string
    name: string
}

const FormInput = ({
    id,
    onChange,
    value,
    label,
    type,
    name
}: FormInputProps) => {
    return (
        <div className="w-full">
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                className="w-full border-2 px-4 border-accent py-4 rounded-lg focus:outline-none"
                type={type}
            />
        </div>
    )
}
export default FormInput
