interface TextAreaProps {
    label: string
    id: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    name: string
}

const TextArea = ({ label, id, value, onChange, name }: TextAreaProps) => {
    return (
        <div className="w-full  ">
            <label htmlFor={id}>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                className="resize-none w-full min-h-[120px] border-2 border-accent rounded-lg focus:outline-none p-4 "
            ></textarea>
        </div>
    )
}
export default TextArea
