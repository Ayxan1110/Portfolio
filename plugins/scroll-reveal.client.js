export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el) {
      const rect = el.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (alreadyVisible) {
        return
      }

      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.transitionDelay = '0.3s'

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '-50px' }
      )

      observer.observe(el)
    },
  })
})
