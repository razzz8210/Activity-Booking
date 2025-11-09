import React from 'react';

export default function Home() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'monospace',
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      minHeight: '100vh'
    }}>
      <div style={{ 
        borderBottom: '2px solid #3794ff',
        paddingBottom: '20px',
        marginBottom: '30px'
      }}>
        <h1 style={{ 
          fontSize: '28px',
          margin: '0 0 10px 0',
          color: '#3794ff'
        }}>Activity Booking API</h1>
        <p style={{ 
          margin: 0,
          color: '#858585',
          fontSize: '14px'
        }}>REST API Documentation v1.0.0</p>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Base URL</h2>
        <pre style={{ 
          background: '#252526',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #3c3c3c',
          overflow: 'auto'
        }}>
          <code>https://activity-booking-5o1k.onrender.com</code>
        </pre>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Authentication Endpoints</h2>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>POST /api/auth/register</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Register new user account</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>POST /api/auth/login</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Authenticate user and receive JWT token</div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Activity Endpoints</h2>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>GET /api/activities</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Retrieve all activities</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>GET /api/activities/:id</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Retrieve single activity by ID</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>POST /api/activities</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Create new activity (requires admin authentication)</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>PUT /api/activities/:id</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Update activity (requires admin authentication)</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>DELETE /api/activities/:id</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Delete activity (requires admin authentication)</div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Booking Endpoints</h2>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>POST /api/bookings</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Create new booking (requires authentication)</div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ color: '#ce9178', marginBottom: '5px' }}>GET /api/bookings/me</div>
          <div style={{ color: '#858585', fontSize: '13px', marginLeft: '20px' }}>Retrieve authenticated user bookings</div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Authentication</h2>
        <p style={{ color: '#d4d4d4', fontSize: '14px', lineHeight: '1.6' }}>
          Protected endpoints require Bearer token authentication. Include the JWT token in the Authorization header:
        </p>
        <pre style={{ 
          background: '#252526',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #3c3c3c',
          overflow: 'auto',
          fontSize: '13px'
        }}>
          <code>Authorization: Bearer &lt;token&gt;</code>
        </pre>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '18px',
          color: '#4ec9b0',
          marginBottom: '15px'
        }}>Response Codes</h2>
        <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
          <div><span style={{ color: '#4ec9b0' }}>200</span> <span style={{ color: '#858585' }}>- Success</span></div>
          <div><span style={{ color: '#4ec9b0' }}>201</span> <span style={{ color: '#858585' }}>- Created</span></div>
          <div><span style={{ color: '#ce9178' }}>400</span> <span style={{ color: '#858585' }}>- Bad Request</span></div>
          <div><span style={{ color: '#ce9178' }}>401</span> <span style={{ color: '#858585' }}>- Unauthorized</span></div>
          <div><span style={{ color: '#ce9178' }}>403</span> <span style={{ color: '#858585' }}>- Forbidden</span></div>
          <div><span style={{ color: '#ce9178' }}>404</span> <span style={{ color: '#858585' }}>- Not Found</span></div>
          <div><span style={{ color: '#ce9178' }}>500</span> <span style={{ color: '#858585' }}>- Internal Server Error</span></div>
        </div>
      </section>

      <div style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #3c3c3c',
        textAlign: 'center',
        color: '#858585',
        fontSize: '12px'
      }}>
        <p>Built with Next.js • Prisma • PostgreSQL</p>
      </div>
    </div>
  );
}
