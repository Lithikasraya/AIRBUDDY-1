import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = React.forwardRef(
  ({ type = 'text', icon: Icon, showPasswordToggle = false, label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPasswordToggle && showPassword ? 'text' : type;

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <Icon size={20} />
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={`w-full bg-white dark:bg-dark-700/50 border ${
              error ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
            } rounded-xl px-4 ${Icon ? 'pl-12' : ''} ${
              showPasswordToggle ? 'pr-12' : ''
            } py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300`}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
