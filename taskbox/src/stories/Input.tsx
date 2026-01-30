// src/components/Input/Input.tsx
import * as React from 'react';

export type InputProps = {
  label?: string;
  helperText?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, helperText, error, id, ...props }: InputProps) {
  const inputId = id ?? React.useId();

  return (
    <div style={{ display: 'grid', gap: 6 }}>
      {label ? <label htmlFor={inputId}>{label}</label> : null}

      <input
        id={inputId}
        aria-invalid={Boolean(error) || undefined}
        style={{
          padding: '10px 12px',
          borderRadius: 8,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          outline: 'none',
        }}
        {...props}
      />

      {error ? (
        <p style={{ color: '#ef4444', margin: 0 }}>{error}</p>
      ) : helperText ? (
        <p style={{ color: '#6b7280', margin: 0 }}>{helperText}</p>
      ) : null}
    </div>
  );
}
