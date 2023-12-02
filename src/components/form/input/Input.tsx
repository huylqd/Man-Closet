"use client";
import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface IputProp {
  label: string;
  id: string;
  placeholder?:string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  watch?: any
}
const Input: React.FC<IputProp> = ({
  placeholder,
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  watch
}) => {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-black"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          autoComplete={id}
          {...register(id, {
            required: `${id} is required`,
            // password
            minLength: id === 'password' || id === "confirmPassword" ? { value: 6, message: `${id} must be at least 6 characters long` } : undefined,
            // confirmPass
            validate: id === 'confirmPassword' ? (val: string) => {
              if (watch('password') != val) {
                return "Your passwords do no match";
              }
            } : undefined,

          })}
          className={clsx(
            `
            dark:bg-white
            px-4
             py-3
            form-input
            block
            w-full
            rounded-md
            border-0
            
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
        
            focus:ring-2
            focus:ring-inset
           
            sm:text-sm
            sm:leading-6
            p-2
          `,
            errors[id] && "focus:ring-rose-500  outline-none	 border-rose-600 ",
            disabled && ""
          )}
        />
      </div>
    </div>
  );
};

export default Input;
