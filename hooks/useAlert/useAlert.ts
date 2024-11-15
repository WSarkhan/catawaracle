import { useCallback, useState } from 'react';

export const useAlert = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: '', message: '' });

  const showCustomAlert = useCallback((title: string, message: string) => {
    setAlertContent({ title, message });
    setAlertVisible(true);
  }, []);

  const closeAlert = () => setAlertVisible(false);

  return { alertVisible, alertContent, showCustomAlert, closeAlert };
};
