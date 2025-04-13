document.addEventListener('DOMContentLoaded', function() {
    // Create sparkles in header
    const sparklesContainer = document.querySelector('.sparkles-container');
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparklesContainer.appendChild(sparkle);
    }
    
    // Set animation delays for stars
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Romantic message interaction - create hearts on click
    const romanticMessage = document.getElementById('romantic-message');
    romanticMessage.addEventListener('click', createHeart);
    
    function createHeart(e) {
      const rect = romanticMessage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.position = 'absolute';
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.animation = 'float-heart 3s forwards';
      
      romanticMessage.appendChild(heart);
      
      // Remove heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
    
    // Hidden message reveal
    const revealButton = document.getElementById('reveal-button');
    const hiddenMessage = document.getElementById('hidden-message');
    const confettiContainer = document.getElementById('confetti-container');
    
    revealButton.addEventListener('click', function() {
      hiddenMessage.classList.add('revealed');
      revealButton.textContent = 'Mensaje Revelado';
      revealButton.disabled = true;
      
      // Create confetti
      createConfetti();
    });
    
    function createConfetti() {
      const colors = ['#FFDEE2', '#E8CAAC', '#FF719A', '#FDE1D3', '#F7E7CE'];
      
      // Clear any existing confetti
      confettiContainer.innerHTML = '';
      
      // Create new confetti pieces
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
        
        confettiContainer.appendChild(confetti);
      }
      
      // Remove confetti after animation is complete
      setTimeout(() => {
        confettiContainer.innerHTML = '';
      }, 5000);
    }
    
    // Add fade-in animation to sections as they scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.birthday-card').forEach(card => {
      card.style.animationPlayState = 'paused';
      observer.observe(card);
    });
  });
  