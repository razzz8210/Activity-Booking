import React from 'react';

export default function Home() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Courier New, monospace',
      backgroundColor: '#000000',
      color: '#00ff00',
      minHeight: '100vh',
      fontSize: '14px'
    }}>
      <div style={{ 
        marginBottom: '30px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ color: '#00ff00' }}>root@activity-booking-api:~$</span> status
        </div>
        <div style={{ color: '#808080', marginBottom: '5px' }}>
          [OK] Service running
        </div>
        <div style={{ color: '#808080', marginBottom: '5px' }}>
          [OK] Database connected
        </div>
        <div style={{ color: '#808080', marginBottom: '20px' }}>
          [OK] All systems operational
        </div>
      </div>

      <div style={{ 
        marginBottom: '30px',
        paddingLeft: '20px',
        borderLeft: '2px solid #00ff00'
      }}>
        <div style={{ marginBottom: '10px' }}>
          Activity Booking API - v1.0.0
        </div>
        <div style={{ color: '#808080', fontSize: '12px' }}>
          Base URL: https://activity-booking-5o1k.onrender.com
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px', color: '#00ff00' }}>
          &gt; AUTHENTICATION ENDPOINTS
        </div>
        <div style={{ marginLeft: '20px', color: '#c0c0c0' }}>
          <div style={{ marginBottom: '8px' }}>POST /api/auth/register</div>
          <div style={{ marginBottom: '8px' }}>POST /api/auth/login</div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px', color: '#00ff00' }}>
          &gt; ACTIVITY ENDPOINTS
        </div>
        <div style={{ marginLeft: '20px', color: '#c0c0c0' }}>
          <div style={{ marginBottom: '8px' }}>GET /api/activities</div>
          <div style={{ marginBottom: '8px' }}>GET /api/activities/:id</div>
          <div style={{ marginBottom: '8px' }}>POST /api/activities [AUTH REQUIRED]</div>
          <div style={{ marginBottom: '8px' }}>PUT /api/activities/:id [AUTH REQUIRED]</div>
          <div style={{ marginBottom: '8px' }}>DELETE /api/activities/:id [AUTH REQUIRED]</div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px', color: '#00ff00' }}>
          &gt; BOOKING ENDPOINTS
        </div>
        <div style={{ marginLeft: '20px', color: '#c0c0c0' }}>
          <div style={{ marginBottom: '8px' }}>POST /api/bookings [AUTH REQUIRED]</div>
          <div style={{ marginBottom: '8px' }}>GET /api/bookings/me [AUTH REQUIRED]</div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px', color: '#00ff00' }}>
          &gt; AUTHENTICATION
        </div>
        <div style={{ marginLeft: '20px', color: '#c0c0c0', fontSize: '13px' }}>
          <div>Include JWT token in request headers:</div>
          <div style={{ marginTop: '10px', color: '#808080' }}>
            Authorization: Bearer &lt;token&gt;
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px', color: '#00ff00' }}>
          &gt; HTTP STATUS CODES
        </div>
        <div style={{ marginLeft: '20px', color: '#c0c0c0', fontSize: '13px', lineHeight: '1.8' }}>
          <div>200 OK</div>
          <div>201 CREATED</div>
          <div>400 BAD REQUEST</div>
          <div>401 UNAUTHORIZED</div>
          <div>403 FORBIDDEN</div>
          <div>404 NOT FOUND</div>
          <div>500 INTERNAL SERVER ERROR</div>
        </div>
      </div>

      <div style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #1a1a1a',
        color: '#808080',
        fontSize: '11px'
      }}>
        <div>Next.js | Prisma | PostgreSQL</div>
        <div style={{ marginTop: '5px' }}>
          <span style={{ color: '#00ff00' }}>root@activity-booking-api:~$</span> _
        </div>
      </div>
    </div>
  );
}
