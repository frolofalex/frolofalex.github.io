import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Paper } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

const SLIDE_FILE_NAMES = ['slide 1.png', 'slide 2.png', 'slide 3.png', 'slide 4.png', 'slide 5.png', 'slide 6.png']
const AUTO_PLAY_INTERVAL = 6000

const normalizePath = (fileName) => `/slides/${encodeURIComponent(fileName)}`

export default function PromoCarousel({ autoPlayMs = AUTO_PLAY_INTERVAL }) {
  const slides = useMemo(
    () =>
      SLIDE_FILE_NAMES.map((fileName, index) => ({
        id: `promo-slide-${index}`,
        src: normalizePath(fileName),
        alt: `Рекламный слайд ${index + 1}`,
      })),
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = slides.length

  useEffect(() => {
    if (totalSlides <= 1) {
      return undefined
    }
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides)
    }, autoPlayMs)
    return () => clearInterval(timer)
  }, [autoPlayMs, totalSlides])

  if (totalSlides === 0) {
    return null
  }

  const goToSlide = (nextIndex) => {
    if (nextIndex === activeIndex) {
      return
    }
    setActiveIndex((nextIndex + totalSlides) % totalSlides)
  }

  const handlePrev = () => goToSlide(activeIndex - 1)
  const handleNext = () => goToSlide(activeIndex + 1)

  return (
    <Paper elevation={0} className="promo-carousel">
      <Box className="promo-carousel-viewport">
        <Box
          className="promo-carousel-track"
          sx={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <Box
              key={slide.id}
              component="img"
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="promo-carousel-slide"
            />
          ))}
        </Box>
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              className="promo-carousel-arrow promo-carousel-arrow--prev"
              aria-label="Предыдущий слайд"
              onClick={handlePrev}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className="promo-carousel-arrow promo-carousel-arrow--next"
              aria-label="Следующий слайд"
              onClick={handleNext}
            >
              <ChevronRightIcon />
            </button>
          </>
        )}
      </Box>
    </Paper>
  )
}
