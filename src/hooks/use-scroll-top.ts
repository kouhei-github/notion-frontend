import { useEffect, useState } from "react"

const useScrollTop = (threadId = 10) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threadId) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threadId])

  return scrolled
}

export { useScrollTop }
