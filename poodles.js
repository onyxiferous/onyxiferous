const toggleBtn = document.getElementById('lqhqtoggle')

if (localStorage.getItem('pixelMode') === 'true') {
    document.body.classList.add('pixel-mode');
    toggleBtn.textContent = 'smooth images (click to toggle)';
}

toggleBtn.addEventListener('click', () => {
    const isPixel = document.body.classList.toggle('pixel-mode');
    localStorage.setItem('pixelMode', isPixel);
    toggleBtn.textContent = isPixel ? 'crisp images (click to toggle)' : 'smooth images (click to toggle)';
});

const frames = document.querySelectorAll('.image-frame, .simple-frame');
const maxTilt = 15;

frames.forEach(frame => {
    frame.addEventListener('mousemove', (e) => {
        const rect = frame.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = (x / rect.width - 0.5) * 2;
        const percentY = (y / rect.height - 0.5) * 2;

        const rotateX = -percentY * maxTilt;
        const rotateY = percentX * maxTilt;

        frame.style.transition = 'none';
        frame.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    frame.addEventListener('mouseleave', () => {
        frame.style.transition = 'transform 0.3s ease-out';
        frame.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

const toggleBtn2 = document.getElementById('toggle-borders-btn');

const fancyFrames = document.querySelectorAll('.image-frame');
let fancyEnabled = true;

toggleBtn2.addEventListener('click', () => {
    fancyEnabled = !fancyEnabled;

    fancyFrames.forEach(frame => {
        frame.classList.toggle('image-frame', fancyEnabled);
        frame.classList.toggle('simple-frame', !fancyEnabled);
    });

    toggleBtn2.textContent = fancyEnabled ? 'disable the sexy frames' : 'enable the sexy frames';
});