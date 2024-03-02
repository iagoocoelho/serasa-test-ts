import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Toast from "../components/toast/toast";

const SECONDS_TIMER = 2000;

export interface ToastData {
  id: number;
  message: string;
  type: "success" | "error" | "warning";
}

type AddToast = (data: ToastData) => void;

const ToastContext = createContext<AddToast | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  let toastId = 0;

  const addToast: AddToast = (data) => {
    const id = toastId++;
    setToasts((prevToasts) => [...prevToasts, { ...data, id }]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, SECONDS_TIMER);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {toasts.map((toast) => (
        <Toast type={toast.type}>{toast.message}</Toast>
      ))}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
