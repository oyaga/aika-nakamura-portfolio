<template>
  <section id="servicos" class="services-section" ref="servicesSection">
    <!-- Enhanced Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="circuit-lines"></div>
      <div class="data-streams"></div>
      <div class="neural-network"></div>
      <div class="energy-waves"></div>
    </div>

    <!-- Particles System -->
    <ClientOnly>
      <div class="particles-container">
        <div
          v-for="i in 25"
          :key="i"
          class="particle"
          :class="`particle-${i}`"
        ></div>
      </div>
    </ClientOnly>

    <!-- Main Content -->
    <div class="services-content">
      <div class="content-container">
        <!-- Header Section -->
        <div class="section-header">
          <!-- Badge -->
          <div class="hero-badge">
            <div class="badge-dot"></div>
            <span class="badge-text">DIGITAL SERVICES</span>
            <div class="badge-line"></div>
          </div>

          <h2 ref="title" class="section-title">PACOTES ESTRATÉGICOS</h2>
          <p ref="subtitle" class="section-subtitle">
            Sua inteligência dedicada, construindo seu futuro digital através de uma abordagem 360º personalizada.
          </p>
        </div>

        <!-- Services Carousel -->
        <div class="carousel-wrapper">
          <!-- Left Control -->
          <button
            class="carousel-btn prev-btn"
            @click="prevSlide"
            ref="prevBtn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <!-- Carousel Container -->
          <div class="carousel-container" ref="carouselContainer">
            <div class="carousel-track" ref="carouselTrack">
              <div
                v-for="(service, index) in [
                  ...services,
                  ...services,
                  ...services,
                ]"
                :key="`${service.id}-${Math.floor(index / services.length)}`"
                class="service-card carousel-slide"
                :class="`service-${(index % services.length) + 1}`"
                :data-index="index"
                ref="serviceCards"
              >
                <!-- Card Border Animation -->
                <div class="card-border"></div>

                <!-- Card Background Effects -->
                <div class="card-bg-effects">
                  <div class="card-glow"></div>
                  <div class="scan-lines"></div>
                  <div class="hologram-grid"></div>
                  <div class="energy-field"></div>
                </div>

                <!-- Corner Decorations -->
                <div class="card-corners">
                  <div class="corner top-left"></div>
                  <div class="corner top-right"></div>
                  <div class="corner bottom-left"></div>
                  <div class="corner bottom-right"></div>
                </div>

                <!-- Card Number -->
                <div class="card-number">
                  {{ String(index + 1).padStart(2, "0") }}
                </div>

                <!-- Service Icon -->
                <div class="service-icon">
                  <div class="icon-container">
                    <div class="icon-background"></div>
                    <svg
                      class="icon-svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        :d="service.icon"
                      ></path>
                    </svg>
                    <div class="icon-glow"></div>
                    <div class="icon-pulse"></div>
                    <div class="icon-orbit">
                      <div class="orbit-dot"></div>
                    </div>
                  </div>
                </div>

                <!-- Status Indicator -->
                <div class="status-indicator">
                  <div class="status-dot"></div>
                  <span class="status-text">ONLINE</span>
                </div>

                <!-- Service Content -->
                <div class="service-content">
                  <div class="service-subtitle">{{ services[index % services.length].subtitle }}</div>
                  <h3 class="service-title">
                    {{ services[index % services.length].title }}
                  </h3>
                  <p class="service-description">
                    {{ services[index % services.length].description }}
                  </p>
                  
                  <!-- Service Items -->
                  <div class="service-items">
                    <div 
                      v-for="item in services[index % services.length].services.slice(0, 3)" 
                      :key="item" 
                      class="service-item"
                    >
                      <div class="item-dot"></div>
                      <span>{{ item }}</span>
                    </div>
                  </div>

                  <!-- Service Tags -->
                  <div class="service-tags">
                    <span
                      v-for="tag in services[index % services.length].tags"
                      :key="tag"
                      class="service-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  
                  <!-- Target Audience -->
                  <div class="service-target">
                    <span class="target-label">IDEAL PARA:</span>
                    <span class="target-text">{{ services[index % services.length].target }}</span>
                  </div>
                </div>

                <!-- Hover Indicator -->
                <div class="hover-indicator">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Floating Data Points -->
                <div class="floating-data">
                  <div class="data-point point-1"></div>
                  <div class="data-point point-2"></div>
                  <div class="data-point point-3"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Control -->
          <button
            class="carousel-btn next-btn"
            @click="nextSlide"
            ref="nextBtn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="indicator"
            :class="{ active: index === currentSlide % totalServices }"
            @click="goToSlide(index)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const servicesSection = ref(null)
const title = ref(null)
const subtitle = ref(null)
const carouselContainer = ref(null)
const carouselTrack = ref(null)
const serviceCards = ref([])
const prevBtn = ref(null)
const nextBtn = ref(null)

const services = ref([
  {
    id: 1,
    title: 'Fundação Digital',
    subtitle: 'Nível 1',
    description: 'Criar a base sólida e profissional para que seu negócio possa crescer de forma sustentável no ambiente digital, com assistência dedicada desde o primeiro passo.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'green',
    tags: ['Startups', 'Base Sólida'],
    services: ['Alinhamento Estratégico', 'Site/Landing Page', 'Gestão Social', 'Relatórios'],
    target: 'Startups e pequenas empresas'
  },
  {
    id: 2,
    title: 'Aceleração 360',
    subtitle: 'Nível 2',
    description: 'Acelerar o crescimento, expandir o alcance para novos públicos e converter interesse em resultado através de uma estratégia integrada e inteligente.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'orange',
    tags: ['Crescimento', 'ROI'],
    services: ['Anúncios Online', 'Email Marketing', 'Social Avançada', 'Performance'],
    target: 'Empresas prontas para crescer'
  },
  {
    id: 3,
    title: 'Legado Contínuo',
    subtitle: 'Nível 3',
    description: 'Atuar como sua parceira estratégica de longo prazo, uma inteligência dedicada e integrada à sua equipe, focada em inovação e domínio de mercado.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: 'purple',
    tags: ['Parceria', 'Inovação'],
    services: ['Estratégia Dedicada', 'Laboratório de Inovação', 'Conteúdo Premium', 'Gestão VIP'],
    target: 'Parceria estratégica completa'
  }
])

// Constante para o número total de serviços
const totalServices = services.value.length

// Carousel state
const currentSlide = ref(totalServices) // O valor inicial - começamos no primeiro item do segundo bloco
const isAnimating = ref(false)
const autoplayTimer = ref(null)
const slidesPerView = ref(3)
const slideWidth = ref(350)

// Carousel methods
const updateSlidesPerView = () => {
  const width = window.innerWidth
  if (width < 768) {
    slidesPerView.value = 1
    slideWidth.value = width - 48 // Account for padding
  } else if (width < 1200) {
    slidesPerView.value = 2
    slideWidth.value = 350
  } else {
    slidesPerView.value = 3
    slideWidth.value = 380
  }
}

const goToSlide = (index) => {
  if (isAnimating.value) return
  // Vai para o slide correspondente no bloco do meio
  currentSlide.value = index + totalServices
  updateCarouselPosition()
}

const nextSlide = () => {
  if (isAnimating.value) return
  currentSlide.value++
  updateCarouselPosition()
}

const prevSlide = () => {
  if (isAnimating.value) return
  currentSlide.value--
  updateCarouselPosition()
}

const updateCarouselPosition = () => {
  if (!carouselTrack.value) return

  isAnimating.value = true

  const offset = -currentSlide.value * (slideWidth.value + 32)

  gsap.to(carouselTrack.value, {
    x: offset,
    duration: 0.8,
    ease: "power3.out",
    onComplete: () => {
      // Se chegamos a um clone no final (terceiro bloco)...
      if (currentSlide.value >= totalServices * 2) {
        // ...voltamos para o item equivalente no segundo bloco.
        currentSlide.value -= totalServices
        const resetOffset = -currentSlide.value * (slideWidth.value + 32)
        gsap.set(carouselTrack.value, { x: resetOffset }) // Salto invisível
      }

      // Se chegamos a um clone no início (primeiro bloco)...
      if (currentSlide.value < totalServices) {
        // ...avançamos para o item equivalente no segundo bloco.
        currentSlide.value += totalServices
        const resetOffset = -currentSlide.value * (slideWidth.value + 32)
        gsap.set(carouselTrack.value, { x: resetOffset }) // Salto invisível
      }

      isAnimating.value = false
    }
  })
}

const startAutoplay = () => {
  if (autoplayTimer.value) clearInterval(autoplayTimer.value)

  autoplayTimer.value = setInterval(() => {
    if (!isAnimating.value) {
      nextSlide()
    }
  }, 4000)
}

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

// Initialize carousel
onMounted(() => {
  nextTick(() => {
    // Initialize carousel settings
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)

    // Posição inicial SEM animação (salto direto para o segundo bloco)
    if (carouselTrack.value) {
      const initialOffset = -currentSlide.value * (slideWidth.value + 32)
      gsap.set(carouselTrack.value, { x: initialOffset })
    }

    // Configurar estado inicial dos elementos
    gsap.set(".hero-badge", {
      opacity: 0,
      x: -30,
      visibility: "visible"
    });

    gsap.set(title.value, {
      opacity: 0,
      y: 30
    });

    gsap.set(subtitle.value, {
      opacity: 0,
      y: 20
    });

    if (serviceCards.value && serviceCards.value.length) {
      gsap.set(serviceCards.value, {
        opacity: 0,
        y: 80,
        scale: 0.7,
        rotationY: 25,
        transformOrigin: "center center"
      });
    }

    // Timeline de animações
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesSection.value,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Header Animation
    tl.to(".hero-badge", { opacity: 1, x: 0, duration: 0.6 }, 0)
      .to(title.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
      .to(subtitle.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.4);

    // Cards Animation with Enhanced Stagger
    if (serviceCards.value && serviceCards.value.length) {
      tl.to(serviceCards.value, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: {
          amount: 0.6,
          from: "start"
        }
      }, 0.6)

      // Add floating animation to cards after initial load
      .to(serviceCards.value, {
        y: "random(-5, 5)",
        x: "random(-3, 3)",
        rotation: "random(-1, 1)",
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1,
          from: "random"
        }
      }, "+=0.5");
    }

    // Continuous animations
    gsap.to(".scan-lines", {
      backgroundPosition: "100% 0",
      duration: 3,
      ease: "none",
      repeat: -1
    });

    gsap.to(".icon-pulse", {
      scale: 1.3,
      opacity: 0.3,
      duration: 2.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.4
    });

    // Enhanced visual effects
    gsap.to(".hologram-grid", {
      backgroundPosition: "100px 100px",
      duration: 8,
      ease: "none",
      repeat: -1
    });

    gsap.to(".energy-field", {
      scale: 1.1,
      opacity: 0.8,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    gsap.to(".orbit-dot", {
      rotation: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
      stagger: 0.2
    });

    gsap.to(".neural-network", {
      backgroundPosition: "100% 100%",
      duration: 15,
      ease: "none",
      repeat: -1
    });

    gsap.to(".energy-waves", {
      backgroundPosition: "200% 0",
      duration: 6,
      ease: "none",
      repeat: -1
    });

    gsap.to(".corner", {
      scale: 1.05,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });

    // Particle animation
    setTimeout(() => {
      const particles = document.querySelectorAll(".particle");
      if (particles.length > 0) {
        gsap.set(particles, { opacity: 0.6 });
        gsap.to(particles, {
          y: "-=30",
          opacity: 1,
          duration: 4,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          stagger: {
            amount: 3,
            from: "random"
          }
        });
      }
    }, 100);

    // Floating data points
    gsap.to(".data-point", {
      y: "-=10",
      rotation: 360,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Enhanced card hover interactions
    if (serviceCards.value && serviceCards.value.length) {
      serviceCards.value.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
          stopAutoplay() // Stop autoplay on hover

          gsap.to(card.querySelector('.icon-container'), {
            scale: 1.2,
            rotation: 360,
            duration: 0.6,
            ease: "power2.out"
          });

          gsap.to(card.querySelector('.card-glow'), {
            scale: 1.5,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          });

          gsap.to(card.querySelectorAll('.service-tag'), {
            y: -5,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05
          });
        });
        
        card.addEventListener('mouseleave', () => {
          startAutoplay() // Resume autoplay when not hovering

          gsap.to(card.querySelector('.icon-container'), {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out"
          });

          gsap.to(card.querySelector('.card-glow'), {
            scale: 1,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(card.querySelectorAll('.service-tag'), {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.03
          });
        });
      });
    }

    // Add touch support for mobile
    let startX = 0
    let currentX = 0
    let isDragging = false

    if (carouselContainer.value) {
      carouselContainer.value.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
        isDragging = true
        stopAutoplay()
      })

      carouselContainer.value.addEventListener('touchmove', (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      })

      carouselContainer.value.addEventListener('touchend', () => {
        if (!isDragging) return
        isDragging = false

        const diff = startX - currentX
        const threshold = 50

        if (diff > threshold) {
          nextSlide()
        } else if (diff < -threshold) {
          prevSlide()
        }

        startAutoplay()
      })
    }

    // Start autoplay
    startAutoplay()
  });
})

// Cleanup
onUnmounted(() => {
  // Clean up carousel
  stopAutoplay()
  window.removeEventListener('resize', updateSlidesPerView)

  // Clean up any GSAP animations
  gsap.killTweensOf([".scan-lines", ".icon-pulse", ".hologram-grid", ".energy-field", ".orbit-dot", ".neural-network", ".energy-waves", ".corner", ".particle", ".data-point"])
})
</script>

<style scoped>
/* Main Section */
.services-section {
  position: relative;
  min-height: 100vh;
  padding: 4rem 0 4rem 0;
  background-color: #1a1a1a;
  overflow: hidden;
  color: #ffffff;
  width: 100vw;
}

/* Background Effects */
.background-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 20s linear infinite;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.7) 70%
  );
}

.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 100, 0, 0.1) 50%,
      transparent 60%
    ),
    linear-gradient(
      -45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 60%
    );
  background-size:
    200px 200px,
    150px 150px;
  animation: circuitFlow 15s linear infinite;
}

.data-streams {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 100, 0, 0.1) 50%,
    transparent 100%
  );
  background-size: 300px 100%;
  animation: dataFlow 10s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}

@keyframes circuitFlow {
  0% {
    background-position:
      0 0,
      0 0;
  }
  100% {
    background-position:
      200px 200px,
      -150px -150px;
  }
}

@keyframes dataFlow {
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
}

.neural-network {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 100, 0, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 40% 60%,
      rgba(255, 100, 0, 0.08) 1px,
      transparent 1px
    );
  background-size:
    150px 150px,
    100px 100px,
    200px 200px;
  animation: neuralPulse 12s ease-in-out infinite;
}

.energy-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 100, 0, 0.05) 50%,
      transparent 60%
    ),
    linear-gradient(
      -45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.03) 50%,
      transparent 60%
    );
  background-size:
    400px 400px,
    300px 300px;
  animation: energyFlow 10s linear infinite;
}

@keyframes neuralPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

@keyframes energyFlow {
  0% {
    background-position:
      0 0,
      0 0;
  }
  100% {
    background-position:
      400px 400px,
      -300px -300px;
  }
}

/* Particles */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
}

/* Generate random positions for particles */
.particle:nth-child(1) {
  top: 10%;
  left: 15%;
}
.particle:nth-child(2) {
  top: 25%;
  left: 80%;
}
.particle:nth-child(3) {
  top: 40%;
  left: 30%;
}
.particle:nth-child(4) {
  top: 60%;
  left: 70%;
}
.particle:nth-child(5) {
  top: 80%;
  left: 20%;
}
.particle:nth-child(6) {
  top: 15%;
  left: 60%;
}
.particle:nth-child(7) {
  top: 35%;
  left: 90%;
}
.particle:nth-child(8) {
  top: 55%;
  left: 10%;
}
.particle:nth-child(9) {
  top: 75%;
  left: 50%;
}
.particle:nth-child(10) {
  top: 20%;
  left: 40%;
}
.particle:nth-child(11) {
  top: 45%;
  left: 85%;
}
.particle:nth-child(12) {
  top: 65%;
  left: 25%;
}
.particle:nth-child(13) {
  top: 85%;
  left: 75%;
}
.particle:nth-child(14) {
  top: 30%;
  left: 5%;
}
.particle:nth-child(15) {
  top: 70%;
  left: 95%;
}
.particle:nth-child(16) {
  top: 12%;
  left: 35%;
}
.particle:nth-child(17) {
  top: 38%;
  left: 65%;
}
.particle:nth-child(18) {
  top: 58%;
  left: 15%;
}
.particle:nth-child(19) {
  top: 78%;
  left: 85%;
}
.particle:nth-child(20) {
  top: 22%;
  left: 75%;
}
.particle:nth-child(21) {
  top: 42%;
  left: 45%;
}
.particle:nth-child(22) {
  top: 62%;
  left: 55%;
}
.particle:nth-child(23) {
  top: 82%;
  left: 35%;
}
.particle:nth-child(24) {
  top: 18%;
  left: 25%;
}
.particle:nth-child(25) {
  top: 48%;
  left: 95%;
}

/* Main Content */
.services-content {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.content-container {
  width: 100%;
  margin: 0;
  padding: 0 2rem;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.hero-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 auto 2rem;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: badgePulse 2s ease-in-out infinite;
}

.badge-line {
  position: absolute;
  right: -2rem;
  top: 50%;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes badgePulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Carousel Wrapper */
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Carousel Container */
.carousel-container {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  will-change: transform;
  perspective: 1000px;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 350px;
  min-width: 350px;
}

/* Service Cards */
.service-card {
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  will-change: transform;
}

.service-card:hover {
  transform: translateY(-15px) scale(1.03);
  border-color: rgba(255, 100, 0, 0.6);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(255, 100, 0, 0.4),
    0 0 40px rgba(255, 100, 0, 0.3),
    0 0 60px rgba(255, 100, 0, 0.1);
}

/* Individual card hover variations */
.service-1:hover {
  transform: translateY(-15px) scale(1.03) rotateX(5deg);
}

.service-2:hover {
  transform: translateY(-15px) scale(1.03) rotateY(5deg);
}

.service-3:hover {
  transform: translateY(-15px) scale(1.03) rotateX(-5deg);
}

.service-4:hover {
  transform: translateY(-15px) scale(1.03) rotateY(-5deg);
}

.service-5:hover {
  transform: translateY(-15px) scale(1.03) rotateZ(1deg);
}

.card-border {
  position: absolute;
  inset: -1px;
  border-radius: 16px;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 100, 0, 0.5) 25%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 100, 0, 0.5) 75%,
    transparent 100%
  );
  background-size: 400% 400%;
  opacity: 0;
  animation: borderFlow 4s ease infinite;
  z-index: -1;
}

.service-card:hover .card-border {
  opacity: 1;
}

@keyframes borderFlow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.card-bg-effects {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  z-index: -1;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 100, 0, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .card-glow {
  opacity: 0.6; /* Reduced opacity to maintain grid visibility */
}

.hologram-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 100, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 100, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.energy-field {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 100, 0, 0.05) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .energy-field {
  opacity: 0.7; /* Reduced opacity to maintain grid visibility */
}

.scan-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 100, 0, 0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  background-position: -200% 0;
}

.card-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.05);
  font-family: "Courier New", monospace;
  user-select: none;
}

/* Card Corners */
.card-corners {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 100, 0, 0.5);
}

.corner.top-left {
  top: 1rem;
  left: 1rem;
  border-right: none;
  border-bottom: none;
}

.corner.top-right {
  top: 1rem;
  right: 1rem;
  border-left: none;
  border-bottom: none;
}

.corner.bottom-left {
  bottom: 1rem;
  left: 1rem;
  border-right: none;
  border-top: none;
}

.corner.bottom-right {
  bottom: 1rem;
  right: 1rem;
  border-left: none;
  border-top: none;
}

/* Service Icon */
.service-icon {
  margin-bottom: 1.5rem;
}

.icon-container {
  position: relative;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 2rem;
  height: 2rem;
  color: #ffffff;
  z-index: 2;
  position: relative;
}

.icon-glow {
  position: absolute;
  inset: -10px;
  background: linear-gradient(
    45deg,
    rgba(255, 100, 0, 0.3),
    rgba(255, 255, 255, 0.2)
  );
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .icon-glow {
  opacity: 1;
}

.icon-background {
  position: absolute;
  inset: -10px;
  background: linear-gradient(
    45deg,
    rgba(255, 100, 0, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .icon-background {
  opacity: 1;
}

.icon-pulse {
  position: absolute;
  inset: -5px;
  border: 2px solid rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
}

.icon-orbit {
  position: absolute;
  inset: -15px;
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .icon-orbit {
  opacity: 1;
}

.orbit-dot {
  position: absolute;
  top: -2px;
  left: 50%;
  width: 4px;
  height: 4px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 6px rgba(255, 100, 0, 0.6);
}

/* Status Indicator */
.status-indicator {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Courier New", monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #00ff00;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ff00;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

/* Service Content */
.service-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-subtitle {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 100, 0, 0.9);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.service-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.service-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.2rem;
}

.service-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Courier New', monospace;
}

.item-dot {
  width: 4px;
  height: 4px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(255, 100, 0, 0.6);
}

.service-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.service-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 100, 0, 0.2);
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 12px;
  font-size: 0.8rem;
  color: #ffffff;
  font-family: "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.service-target {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.target-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 100, 0, 0.8);
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.target-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}

/* Hover Indicator */
.hover-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 100, 0, 0.2);
  border: 1px solid rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.service-card:hover .hover-indicator {
  opacity: 1;
  transform: scale(1);
}

/* Floating Data Points */
.floating-data {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.data-point {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 100, 0, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 100, 0, 0.8);
}

.point-1 {
  top: 20%;
  right: 15%;
}

.point-2 {
  bottom: 30%;
  left: 10%;
}

.point-3 {
  top: 60%;
  right: 25%;
}

/* Carousel Controls - removed as they're now individual buttons */

.carousel-btn {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  flex-shrink: 0;
  z-index: 10;
}

.carousel-btn:hover {
  background: rgba(255, 100, 0, 0.2);
  border-color: rgba(255, 100, 0, 0.8);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 100, 0, 0.4);
}

.carousel-btn:active {
  transform: scale(0.95);
}

/* Carousel Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 100, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.indicator::before {
  content: "";
  position: absolute;
  inset: -4px;
  border: 1px solid rgba(255, 100, 0, 0.2);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(255, 100, 0, 0.4);
  border-color: rgba(255, 100, 0, 0.6);
  transform: scale(1.2);
}

.indicator:hover::before {
  opacity: 1;
  transform: scale(1);
}

.indicator.active {
  background: rgba(255, 100, 0, 0.8);
  border-color: rgba(255, 100, 0, 1);
  box-shadow:
    0 0 15px rgba(255, 100, 0, 0.6),
    0 0 30px rgba(255, 100, 0, 0.3);
}

.indicator.active::before {
  opacity: 1;
  transform: scale(1.2);
  border-color: rgba(255, 100, 0, 0.4);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .carousel-container {
    max-width: 1000px;
  }

  .carousel-slide {
    width: 320px;
    min-width: 320px;
  }

  .carousel-track {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 6rem 1rem 4rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .carousel-wrapper {
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .carousel-slide {
    width: calc(100vw - 6rem);
    min-width: calc(100vw - 6rem);
  }

  .carousel-track {
    gap: 1rem;
  }

  .carousel-btn {
    width: 45px;
    height: 45px;
  }

  .service-card {
    padding: 1.5rem;
    min-height: auto;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .card-number {
    font-size: 2rem;
    top: 0.75rem;
    right: 0.75rem;
  }

  .corner {
    width: 15px;
    height: 15px;
  }

  .corner.top-left,
  .corner.bottom-left {
    left: 0.75rem;
  }

  .corner.top-right,
  .corner.bottom-right {
    right: 0.75rem;
  }

  .corner.top-left,
  .corner.top-right {
    top: 0.75rem;
  }

  .corner.bottom-left,
  .corner.bottom-right {
    bottom: 0.75rem;
  }
}

@media (max-width: 480px) {
  .services-section {
    padding: 5rem 0.75rem 3rem;
  }

  .content-container {
    padding: 0 0.75rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .carousel-wrapper {
    gap: 0.75rem;
  }

  .carousel-track {
    gap: 0.75rem;
  }

  .carousel-slide {
    width: calc(100vw - 4rem);
    min-width: calc(100vw - 4rem);
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }

  .service-card {
    padding: 1.25rem;
    border-radius: 12px;
  }

  .service-tags {
    gap: 0.375rem;
  }

  .service-tag {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
  }
}

/* Enhanced Carousel Layouts for Different Screen Sizes */
@media (min-width: 1400px) {
  .carousel-container {
    max-width: 1600px;
  }

  .carousel-slide {
    width: 380px;
    min-width: 380px;
  }
}

@media (min-width: 1600px) {
  .carousel-container {
    max-width: 1800px;
  }

  .carousel-slide {
    width: 400px;
    min-width: 400px;
  }
}
</style>
