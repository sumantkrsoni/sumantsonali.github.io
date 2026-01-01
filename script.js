document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. COUNTDOWN TIMER LOGIC
    // =========================================
    
    // ISO Format (YYYY-MM-DDTHH:MM:SS) works on ALL browsers including iPhone
    const weddingDate = new Date("2026-02-10T19:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById("countdown");
        
        // Safety check: ensure element exists before writing to it
        if (countdownElement) {
            countdownElement.innerHTML = 
                days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
            
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "Happily Married!";
            }
        }
    }, 1000);

    console.log("Wedding schedule loaded.");

    // =========================================
    // 2. GIANT ROSE PETAL LOGIC
    // =========================================

    const petalImages = [
        'petal1.png',
        'petal3.png'
    ];

    function createGiantPetal() {
        const img = document.createElement('img');
        
        // Pick random petal image
        img.src = petalImages[Math.floor(Math.random() * petalImages.length)];
        
        // Add class for styling
        img.classList.add('giant-petal');

        // Random Size: HUGE (Between 60px and 120px)
        const minSize = 30;
        const maxSize = 60;
        const size = Math.random() * (maxSize - minSize) + minSize;
        img.style.width = size + 'px';
        
        // Random Horizontal Start Position (0 to 90% of screen width)
        img.style.left = Math.random() * 90 + 'vw';

        // Random Fall Speed (8s to 12s - slow and elegant)
        const duration = Math.random() * 4 + 8;
        img.style.animationDuration = duration + 's';

        // Random Direction (Left or Right)
        if (Math.random() > 0.5) {
            img.classList.add('animate-sway-left');
        } else {
            img.classList.add('animate-sway-right');
        }

        // Append to body
        document.body.appendChild(img);

        // Remove element after it falls off screen to save memory
        setTimeout(() => {
            img.remove();
        }, duration * 1000);
    }

    // Start the flower shower
    setInterval(createGiantPetal, 700);

});