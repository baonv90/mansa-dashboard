import { useState, useEffect } from 'react';

// A hook to fetch data from given url
// it returns the fetching status loading and data
export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url).then((res) => {
      res.json().then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
    });
  }, [url]);

  return { data, loading, hasError };
};