import React from 'react';

function Index() {
  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get('accessToken');

  React.useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      window.location.href = '/blogs';
    }
  }, [accessToken]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Storing access token...</p>
    </div>
  );
}

export default Index;
