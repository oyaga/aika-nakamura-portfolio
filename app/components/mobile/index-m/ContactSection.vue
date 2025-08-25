<template>
  <section class="mobile-contact-section">
    <!-- Mobile Background -->
    <div class="mobile-contact-bg">
      <div class="mobile-contact-gradient"></div>
      <div class="mobile-contact-shapes">
        <div class="contact-shape shape-1"></div>
        <div class="contact-shape shape-2"></div>
      </div>
    </div>
    
    <!-- Mobile Content -->
    <div class="mobile-contact-content">
      <div class="mobile-contact-container">
        
        <!-- Mobile Header -->
        <div class="mobile-contact-header">
          <div ref="mobileBadge" class="mobile-contact-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>CONTATO</span>
          </div>
          
          <h2 ref="mobileTitle" class="mobile-contact-title">
            Vamos <span class="title-highlight">Conversar?</span>
          </h2>
          
          <p ref="mobileSubtitle" class="mobile-contact-subtitle">
            Entre em contato e descubra como posso ajudar você.
          </p>
        </div>

        <!-- Mobile Contact Options -->
        <div ref="mobileOptions" class="mobile-contact-options">
          
          <!-- WhatsApp -->
          <a href="https://wa.me/5519993369603" target="_blank" 
             class="mobile-contact-option whatsapp"
             @touchstart="onOptionTouch(0)"
             @touchend="onOptionTouchEnd(0)">
            <div class="option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <div class="option-content">
              <h3 class="option-title">WhatsApp</h3>
              <p class="option-description">19-99336-9603</p>
            </div>
            <div class="option-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:felipe.kenji@hotmail.com" 
             class="mobile-contact-option email"
             @touchstart="onOptionTouch(1)"
             @touchend="onOptionTouchEnd(1)">
            <div class="option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="option-content">
              <h3 class="option-title">E-mail</h3>
              <p class="option-description">felipe.kenji@hotmail.com</p>
            </div>
            <div class="option-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <!-- Contact Form -->
          <a href="/contato" 
             class="mobile-contact-option form"
             @touchstart="onOptionTouch(2)"
             @touchend="onOptionTouchEnd(2)">
            <div class="option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </div>
            <div class="option-content">
              <h3 class="option-title">Formulário</h3>
              <p class="option-description">Envie uma mensagem detalhada</p>
            </div>
            <div class="option-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

        </div>

        <!-- Mobile Social Links -->
        <div ref="mobileSocial" class="mobile-social-links">
          <p class="social-title">Me siga nas redes:</p>
          <div class="social-icons">
            <a href="#" class="social-link linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social-link github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Template Refs
const mobileBadge = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)
const mobileOptions = ref(null)
const mobileSocial = ref(null)

onMounted(() => {
  try {
    // Ensure all elements are visible first
    const elementsToShow = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileOptions.value, mobileSocial.value];
    elementsToShow.forEach(element => {
      if (element) {
        gsap.set(element, { opacity: 1, visibility: 'visible', clearProps: "transform" });
      }
    });

    // Set children opacity for contact options
    if (mobileOptions.value?.children) {
      gsap.set(mobileOptions.value.children, { opacity: 1, visibility: 'visible', clearProps: "transform" });
    }

    // Optimized entrance animations
    setTimeout(() => {
      if (typeof gsap !== 'undefined' && mobileBadge.value) {
        const tl = gsap.timeline({ 
          defaults: { ease: "power2.out", duration: 0.4 }
        });

        // Smoother entrance sequence for mobile
        tl.from(mobileBadge.value, { y: -15, opacity: 0 })
          .from(mobileTitle.value, { y: 15, opacity: 0 }, "-=0.2")
          .from(mobileSubtitle.value, { y: 10, opacity: 0 }, "-=0.15")
          .from(mobileOptions.value?.children || [], { 
            y: 20, 
            opacity: 0, 
            stagger: 0.08,
            ease: "back.out(1.7)"
          }, "-=0.1")
          .from(mobileSocial.value, { y: 15, opacity: 0 }, "-=0.2");
      }
    }, 100);

  } catch (error) {
    console.log('GSAP animation error, elements will display normally:', error);
    // Enhanced fallback
    const fallbackElements = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileSocial.value];
    fallbackElements.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
      }
    });

    if (mobileOptions.value) {
      mobileOptions.value.style.opacity = '1';
      mobileOptions.value.style.visibility = 'visible';
      Array.from(mobileOptions.value.children).forEach(option => {
        option.style.opacity = '1';
        option.style.visibility = 'visible';
        option.style.transform = 'none';
      });
    }
  }
});

// Touch interaction functions for contact options
const onOptionTouch = (index) => {
  try {
    if (!mobileOptions.value?.children) return;
    
    const option = mobileOptions.value.children[index];
    if (!option || typeof gsap === 'undefined') return;

    // Create touch effect timeline
    const touchTl = gsap.timeline({ defaults: { duration: 0.15, ease: "power2.out" } });
    
    touchTl.to(option, { scale: 0.96 })
           .to(option.querySelector('.option-icon'), { scale: 1.1 }, "<")
           .to(option.querySelector('.option-arrow'), { x: 5 }, "<");

  } catch (error) {
    console.log('Option touch animation error:', error);
  }
};

const onOptionTouchEnd = (index) => {
  try {
    if (!mobileOptions.value?.children) return;
    
    const option = mobileOptions.value.children[index];
    if (!option || typeof gsap === 'undefined') return;

    // Create touch release timeline
    const releaseTl = gsap.timeline({ defaults: { duration: 0.2, ease: "power2.out" } });
    
    releaseTl.to(option, { scale: 1 })
             .to(option.querySelector('.option-icon'), { scale: 1 }, "<")
             .to(option.querySelector('.option-arrow'), { x: 0 }, "<");

  } catch (error) {
    console.log('Option touch release animation error:', error);
  }
};
</script>

<style scoped>
.mobile-contact-section {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 3rem 1rem;
  overflow: hidden;
}

.mobile-contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-contact-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.mobile-contact-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.contact-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: -20px;
  animation: floatContactShape 10s ease-in-out infinite;
}

.shape-2 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: -20px;
  animation: floatContactShape 8s ease-in-out infinite reverse;
}

@keyframes floatContactShape {
  0%, 100% { transform: translateY(0px); opacity: 0.1; }
  50% { transform: translateY(-30px); opacity: 0.2; }
}

.mobile-contact-content {
  position: relative;
  z-index: 3;
}

.mobile-contact-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.mobile-contact-header {
  margin-bottom: 2rem;
}

.mobile-contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #f97316;
  border-radius: 20px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.mobile-contact-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

.title-highlight {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mobile-contact-subtitle {
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
}

.mobile-contact-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.mobile-contact-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: white;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, background-color 0.3s ease;
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.mobile-contact-option:active {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-contact-option.whatsapp:active {
  border-color: #25D366;
}

.mobile-contact-option.email:active {
  border-color: #3b82f6;
}

.mobile-contact-option.form:active {
  border-color: #8b5cf6;
}

.option-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.option-content {
  flex: 1;
  text-align: left;
}

.option-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.option-description {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
}

.option-arrow {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  will-change: transform;
}

.mobile-social-links {
  text-align: center;
}

.social-title {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.social-link:active {
  background: rgba(255, 255, 255, 0.2);
}

.social-link.linkedin:active {
  background: #0077b5;
  border-color: #0077b5;
}

.social-link.github:active {
  background: #333;
  border-color: #333;
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-contact-section { padding: 2.5rem 0.75rem; }
  .mobile-contact-title { font-size: 1.6rem; }
  .mobile-contact-option { padding: 0.85rem; }
  .option-icon { width: 45px; height: 45px; }
  .option-title { font-size: 0.9rem; }
  .option-description { font-size: 0.75rem; }
}

@media (max-width: 320px) {
  .mobile-contact-title { font-size: 1.4rem; }
  .mobile-contact-option { padding: 0.75rem; gap: 0.75rem; }
  .option-icon { width: 40px; height: 40px; }
  .social-link { width: 40px; height: 40px; }
}
</style>