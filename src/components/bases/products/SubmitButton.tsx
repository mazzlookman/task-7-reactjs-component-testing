interface SubmitButtonProps {
    onClick: () => void;
    label: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            { label }
        </button>
    )
}