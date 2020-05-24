import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    const getAndSetMessage = async () => {
      const response = await fetch('/api/hello-world');
      const json = await response.json();
      setMessage(json.message);
    };
    getAndSetMessage();
  }, []);
  return <p>{message}</p>;
}
