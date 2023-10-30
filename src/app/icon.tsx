import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          backgroundColor: '#393E46',
          borderRadius: '4px',
          textAlign: 'center',
          fontSize: 18,
          fontFamily: 'var("--font-inter")',
        }}
      >
        <span tw="antialiased font-black uppercase">
          <span tw="text-teal-500">E</span>
          <span tw="text-orange-500">J</span>
        </span>
      </div>
    ),
    {
      ...size,
    },
  )
}
