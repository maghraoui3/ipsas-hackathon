// Example for useToast.ts
import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; title: string; description: string; action: React.ReactNode }>>([]);

  const toast = ({ id, title, description, action }: { id: string; title: string; description: string; action: React.ReactNode }) => {
    setToasts((prevToasts) => [...prevToasts, { id, title, description, action }]);
  };

  return { toasts, toast };
}
