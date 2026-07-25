import React from 'react';
import styles from './Toast.module.css';

type ToastState = { id: number; message: string } | null;

const ToastContext = React.createContext<(message: string) => void>(() => {});

export function useToast() {
	return React.useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toast, setToast] = React.useState<ToastState>(null);
	const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

	const showToast = React.useCallback((message: string) => {
		const id = Date.now();
		setToast({ id, message });
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setToast((current) => (current?.id === id ? null : current));
		}, 2000);
	}, []);

	React.useEffect(
		() => () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		},
		[],
	);

	return (
		<ToastContext.Provider value={showToast}>
			{children}
			<div className={styles.region} role='status' aria-live='polite'>
				{toast && (
					<div key={toast.id} className={styles.toast}>
						{toast.message}
					</div>
				)}
			</div>
		</ToastContext.Provider>
	);
}
