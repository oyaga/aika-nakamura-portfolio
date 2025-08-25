<template>
  <header class="header-container" :class="{ 'header-scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <!-- Header Bar -->
    <div class="header-bar">
      <div class="header-content">
        <!-- Logo/Brand -->
        <NuxtLink to="/" class="brand-container">
          <h1 class="brand-text">AIKA NAKAMURA</h1>
          <div class="brand-subtitle">Digital Assistant</div>
        </NuxtLink>
        
        <!-- Toggle Button -->
        <button 
          class="menu-toggle"
          @click.stop="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
        >
          <span class="toggle-line line-1" :class="{ 'active': isMenuOpen }"></span>
          <span class="toggle-line line-2" :class="{ 'active': isMenuOpen }"></span>
          <span class="toggle-line line-3" :class="{ 'active': isMenuOpen }"></span>
          <span class="toggle-bg"></span>
        </button>
      </div>
    </div>
    
    <!-- Full Canvas Overlay Menu -->
    <nav class="canvas-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="canvas-overlay" @click="closeMenu"></div>
      <div class="canvas-content">
        
        <!-- Navigation -->
        <ul class="nav-list">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="item.path" :style="{ '--item-index': index }">
            <NuxtLink 
              :to="item.path" 
              class="nav-link"
              @click="closeMenu"
              :class="{ 'active': $route.path === item.path }"
            >
              <span class="nav-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="nav-text">{{ item.label }}</span>
              <span class="nav-arrow">→</span>
            </NuxtLink>
          </li>
        </ul>
        
        <!-- Footer Info -->
        <div class="canvas-footer">
          <div class="contact-info">
            <p class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:felipe.kenji@hotmail.com" class="contact-link">felipe.kenji@hotmail.com</a>
            </p>
            <p class="contact-item">
              <span class="contact-label">WhatsApp</span>
              <a href="https://wa.me/5519993369603" class="contact-link">19 99336-9603</a>
            </p>
          </div>
          <div class="philosophy">
            <p>"Honramos seu legado, construímos seu futuro"</p>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Menu items
const menuItems = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'Sobre Aika' },
  { path: '/projetos', label: 'Projetos' },
  { path: '/contato', label: 'Contato' }
]

const toggleMenu = () => {
  console.log('Menu toggle clicked', isMenuOpen.value)
  isMenuOpen.value = !isMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Header Container */
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-container.header-scrolled {
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(249, 115, 22, 0.2);
}

/* Header Bar */
.header-bar {
  width: 100%;
  padding: 1.5rem 0;
  transition: padding 0.3s ease;
}

.header-container.header-scrolled .header-bar {
  padding: 1rem 0;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
  position: relative;
  z-index: 10001;
}

/* Brand */
.brand-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand-container:hover {
  transform: translateY(-2px);
}

.brand-text {
  color: white;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0;
  transition: all 0.3s ease;
}

.brand-subtitle {
  color: #f97316;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
  opacity: 0.9;
}

/* Menu Toggle Button */
.menu-toggle {
  position: relative;
  width: 60px;
  height: 60px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  overflow: hidden;
  z-index: 10001;
  pointer-events: auto;
}

.toggle-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-toggle:hover .toggle-bg {
  transform: scale(1);
}

.toggle-line {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin: 3px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.toggle-line.line-1.active {
  transform: rotate(45deg) translate(7px, 7px);
}

.toggle-line.line-2.active {
  opacity: 0;
  transform: scale(0);
}

.toggle-line.line-3.active {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Canvas Menu */
.canvas-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 10000;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.canvas-menu.is-open {
  visibility: visible;
  opacity: 1;
}

.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  cursor: pointer;
}

.canvas-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}


/* Navigation */
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  overflow: hidden;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: calc(var(--item-index) * 0.1s);
}

.canvas-menu.is-open .nav-item {
  transform: translateY(0);
  opacity: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: #f97316;
  transform: translateX(10px);
}

.nav-link.active {
  color: #f97316;
}

.nav-number {
  font-size: 0.875rem;
  color: rgba(249, 115, 22, 0.7);
  font-weight: 400;
  min-width: 2rem;
}

.nav-text {
  flex: 1;
}

.nav-arrow {
  font-size: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
}

.nav-link:hover .nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Canvas Footer */
.canvas-footer {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.4s;
}

.canvas-menu.is-open .canvas-footer {
  opacity: 1;
  transform: translateY(0);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
}

.contact-label {
  color: rgba(255, 255, 255, 0.6);
  display: block;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.contact-link {
  color: #f97316;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: white;
  text-shadow: 0 0 10px rgba(249, 115, 22, 0.8);
}

.philosophy {
  text-align: right;
}

.philosophy p {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-style: italic;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .nav-link {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
    padding: 0.75rem 1rem;
    gap: 1rem;
  }
  
  .canvas-footer {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
  
  .philosophy {
    text-align: left;
  }
  
}

@media (max-width: 480px) {
  .brand-text {
    font-size: 1.25rem;
  }
  
  .brand-subtitle {
    font-size: 0.75rem;
  }
  
  .menu-toggle {
    width: 50px;
    height: 50px;
  }
  
  .toggle-line {
    width: 20px;
  }
}
</style>