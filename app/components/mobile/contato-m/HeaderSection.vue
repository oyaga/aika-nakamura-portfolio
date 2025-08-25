<template>
  <section class="mobile-contato-header">
    <!-- Mobile Background -->
    <div class="mobile-bg-contato">
      <div class="mobile-gradient-contato"></div>
      <div class="mobile-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <!-- Mobile Content -->
    <div class="mobile-contato-content">
      <div class="mobile-contato-container">
        
        <!-- Mobile Badge -->
        <div ref="mobileBadge" class="mobile-contato-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>FALE CONOSCO</span>
        </div>
        
        <!-- Mobile Title -->
        <h1 ref="mobileTitle" class="mobile-contato-title">
          Entre em <span class="title-highlight">Contato</span>
        </h1>
        
        <!-- Mobile Subtitle -->
        <p ref="mobileSubtitle" class="mobile-contato-subtitle">
          Estou aqui para ajudar você. Vamos transformar suas ideias em realidade digital.
        </p>
        
        <!-- Mobile Contact Info -->
        <div ref="mobileInfo" class="mobile-contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span>19-99336-9603</span>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <span>felipe.kenji@hotmail.com</span>
          </div>
        </div>
        
        <!-- Mobile CTA -->
        <div ref="mobileCta" class="mobile-contato-cta">
          <a href="https://wa.me/5519993369603" class="mobile-whatsapp-btn" target="_blank">
            <div class="whatsapp-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <span>WhatsApp</span>
          </a>
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
const mobileInfo = ref(null)
const mobileCta = ref(null)

onMounted(() => {
  // Mobile entrance animation
  const tl = gsap.timeline({ 
    defaults: { ease: "power2.out", duration: 0.6 }
  });

  tl.from(mobileBadge.value, { y: -20, opacity: 0 })
    .from(mobileTitle.value, { y: 30, opacity: 0 }, "-=0.3")
    .from(mobileSubtitle.value, { y: 20, opacity: 0 }, "-=0.3")
    .from(mobileInfo.value, { y: 25, opacity: 0 }, "-=0.3")
    .from(mobileCta.value, { y: 20, opacity: 0 }, "-=0.2");
});
</script>

<style scoped>
.mobile-contato-header {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 4rem 1rem 3rem;
  text-align: center;
  overflow: hidden;
}

.mobile-bg-contato {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-gradient-contato {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.mobile-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  right: 10%;
  animation: floatShape 6s ease-in-out infinite;
}

.shape-2 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 15%;
  animation: floatShape 8s ease-in-out infinite reverse;
}

.shape-3 {
  width: 40px;
  height: 40px;
  top: 50%;
  right: 20%;
  animation: floatShape 7s ease-in-out infinite;
}

@keyframes floatShape {
  0%, 100% { transform: translateY(0px); opacity: 0.1; }
  50% { transform: translateY(-20px); opacity: 0.2; }
}

.mobile-contato-content {
  position: relative;
  z-index: 3;
}

.mobile-contato-container {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-contato-badge {
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
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.mobile-contato-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.title-highlight {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mobile-contato-subtitle {
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
  margin: 0;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

.mobile-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.mobile-contato-cta {
  margin-top: 1rem;
}

.mobile-whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.mobile-whatsapp-btn:hover {
  background: #22c55e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.whatsapp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-contato-header { padding: 3.5rem 0.75rem 2.5rem; }
  .mobile-contato-title { font-size: 1.75rem; }
  .mobile-contato-subtitle { font-size: 0.9rem; }
  .contact-item { padding: 0.6rem 0.8rem; font-size: 0.85rem; }
}

@media (max-width: 320px) {
  .mobile-contato-title { font-size: 1.5rem; }
  .mobile-contato-subtitle { font-size: 0.85rem; }
  .mobile-whatsapp-btn { padding: 0.85rem 1.5rem; font-size: 0.8rem; }
}
</style>