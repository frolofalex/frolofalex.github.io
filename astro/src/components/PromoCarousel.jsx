import { useEffect, useState } from 'react'

const SLIDES = [
  '/slides/slide%201.png',
  '/slides/slide%202.png',
  '/slides/slide%203.png',
  '/slides/slide%204.png',
  '/slides/slide%205.png',
  '/slides/slide%206.png',
]

export default function PromoCarousel({ autoPlayMs = 6000 }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (SLIDES.length <= 1) return
    const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % SLIDES.length), autoPlayMs)
    return () => clearInterval(timer)
  }, [autoPlayMs])

  const go = (n) => setActiveIndex((n + SLIDES.length) % SLIDES.length)

  return (
    <div className="promo-carousel">
      <div className="promo-carousel-viewport">
        <div
          className="promo-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Рекламный слайд ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="promo-carousel-slide"
            />
          ))}
        </div>
        <button
          type="button"
          className="promo-carousel-arrow promo-carousel-arrow--prev"
          aria-label="Предыдущий слайд"
          onClick={() => go(activeIndex - 1)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.2rem', height: '2.2rem', pointerEvents: 'none' }}>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          className="promo-carousel-arrow promo-carousel-arrow--next"
          aria-label="Следующий слайд"
          onClick={() => go(activeIndex + 1)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.2rem', height: '2.2rem', pointerEvents: 'none' }}>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
