/**
 * Fixed, page-wide film-grain layer. Pure SVG turbulence — no image asset,
 * no layout cost. Sits above the paper background but below content via
 * pointer-events:none + z-index, and uses mix-blend to read as texture
 * rather than a flat overlay.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-multiply"
    >
      <svg className="h-full w-full">
        <filter id="grain-turbulence">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.9 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-turbulence)" />
      </svg>
    </div>
  )
}
