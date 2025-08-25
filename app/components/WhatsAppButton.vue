<template>
  <div class="whatsapp-button-container">
    <div class="whatsapp-pulse-ring"></div>
    <div class="whatsapp-pulse-ring-2"></div>
    <a 
      :href="whatsappLink" 
      target="_blank" 
      rel="noopener noreferrer"
      class="whatsapp-button"
      aria-label="Falar no WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        class="whatsapp-icon"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
const whatsappNumber = '5519993369603'
const message = 'Olá! Vim através do site da Aika Nakamura e gostaria de saber mais sobre os serviços.'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
</script>

<style scoped>
.whatsapp-button-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.whatsapp-pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 3px solid rgba(37, 211, 102, 0.3);
  border-radius: 50%;
  animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

.whatsapp-pulse-ring-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  border: 2px solid rgba(37, 211, 102, 0.2);
  border-radius: 50%;
  animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.5s infinite;
}

.whatsapp-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #25D366 0%, #20C65A 100%);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  box-shadow: 
    0 8px 32px rgba(37, 211, 102, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.whatsapp-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.whatsapp-button:hover::before {
  left: 100%;
}

.whatsapp-button:hover {
  background: linear-gradient(135deg, #20C65A 0%, #1DB851 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 12px 40px rgba(37, 211, 102, 0.5),
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.whatsapp-button:active {
  transform: translateY(-1px) scale(0.98);
}


.whatsapp-button:hover .whatsapp-icon {
  transform: rotate(360deg);
}

.whatsapp-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .whatsapp-button-container {
    bottom: 20px;
    right: 20px;
  }
  
  .whatsapp-pulse-ring {
    width: 65px;
    height: 65px;
  }
  
  .whatsapp-pulse-ring-2 {
    width: 75px;
    height: 75px;
  }
  
  .whatsapp-button {
    width: 60px;
    height: 60px;
  }
  
  .whatsapp-icon {
    width: 28px;
    height: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-pulse-ring,
  .whatsapp-pulse-ring-2 {
    animation: none;
  }
  
  .whatsapp-button::before {
    display: none;
  }
  
  .whatsapp-button:hover .whatsapp-icon {
    transform: none;
  }
}
</style>