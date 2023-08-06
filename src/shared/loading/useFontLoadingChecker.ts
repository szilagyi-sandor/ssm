import { useEffect, useState } from 'react';

export const useFontLoadingChecker = () => {
  const [loading, setLoading] = useState(document.fonts.status === 'loading');

  useEffect(() => {
    const onLoadingDone = () => {
      setLoading(false);
    };

    const onLoading = () => {
      setLoading(true);
    };

    document.fonts.addEventListener('loading', onLoading);
    document.fonts.addEventListener('loadingdone', onLoadingDone);
    return () => {
      window.removeEventListener('loading', onLoading);
      window.removeEventListener('loadingdone', onLoadingDone);
    };
  }, []);

  return loading;
};

// CHECKED 0.2.1
