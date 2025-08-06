import gsap from 'gsap'
import scrollToPlugin from 'gsap/ScrollToPlugin'
import scrollTrigger from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(scrollToPlugin, scrollTrigger, MotionPathPlugin)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap
    }
  }
})
