import React, { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const username = 'coalition';
        const password = 'skills-test';
        const encodedCredentials = btoa(`${username}:${password}`);
        
        const response = await fetch(
          `https://fedskillstest.coalitiontechnologies.workers.dev`,
          {
            headers: {
              "Authorization": `Basic ${encodedCredentials}`,
            },
          }
        );
        
        console.log("Response:", response);
        
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        
        const postsData = await response.json();
        setData(postsData);
        console.log("Data:", postsData);

        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
