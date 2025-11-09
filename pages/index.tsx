import React from 'react';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯 Activity Booking API</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Server is running successfully!</p>
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '15px',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>📡 API Endpoints</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🔐 Authentication</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>POST /api/auth/register</li>
            <li>POST /api/auth/login</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🎪 Activities</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>GET /api/activities</li>
            <li>GET /api/activities/:id</li>
            <li>POST /api/activities (Admin)</li>
            <li>PUT /api/activities/:id (Admin)</li>
            <li>DELETE /api/activities/:id (Admin)</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>📅 Bookings</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>POST /api/bookings</li>
            <li>GET /api/bookings/me</li>
          </ul>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          paddingTop: '1rem', 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center'
        }}>
          <p>📚 <a 
            href="https://github.com/razzz8210/Activity-Booking" 
            target="_blank"
            style={{ color: '#ffd700', textDecoration: 'none' }}
          >
            View Documentation
          </a></p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            Built with Next.js, Prisma & PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
}
