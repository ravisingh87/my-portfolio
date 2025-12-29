import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Ravi Shankar Singh | Senior Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
          Ravi Shankar Singh
        </div>
        <div style={{ fontSize: 32, color: '#60a5fa', marginBottom: 40 }}>
          Senior Frontend Developer • 5.8+ Years Exp
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
            {/* You can add text-based tech pills here */}
            <span style={{ background: '#334155', padding: '10px 20px', borderRadius: 20 }}>Next.js 15</span>
            <span style={{ background: '#334155', padding: '10px 20px', borderRadius: 20 }}>TypeScript</span>
            <span style={{ background: '#334155', padding: '10px 20px', borderRadius: 20 }}>React</span>
        </div>
      </div>
    ),
    { ...size }
  )
}