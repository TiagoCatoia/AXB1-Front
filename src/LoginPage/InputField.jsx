import React from 'react';

function InputField({ label, type, id, placeholder, showPasswordToggle }) {
  return (
    <div className="mt-9">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="flex gap-5 justify-between self-stretch px-4 py-3.5 mt-2 text-base whitespace-nowrap rounded-xl border border-solid bg-slate-50 border-black border-opacity-50">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full bg-transparent"
        />
        {showPasswordToggle && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed240b99bb264fba438acfb29e523f0f1d4c3af0e7d20433bfe8dd43cdcf831a?placeholderIfAbsent=true&apiKey=134860f90afa4b4bbe840c2326e96abf"
            alt="Toggle password visibility"
            className="object-contain shrink-0 w-6 aspect-square"
          />
        )}
      </div>
    </div>
  );
}

export default InputField;