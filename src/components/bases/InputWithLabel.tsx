import React from "react";

interface InputFieldProps {
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    id: string;
}

export const InputWithLabel: React.FC<InputFieldProps> = ({ label, value, onChange, type = 'text', id }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
                {label}
            </label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full p-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id={id}
            />
        </div>
    )
}