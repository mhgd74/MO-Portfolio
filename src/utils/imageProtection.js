/**
 * Utility to apply additional image protection for the website
 * This prevents right-click, keyboard shortcuts, and other common methods
 * used to download images
 */

export function applyImageProtection() {
  if (typeof window === 'undefined') {
    return; // Skip on server-side
  }

  // Disable right-click globally
  document.addEventListener('contextmenu', (e) => {
    // If the element is an image or contains an image, prevent default
    const target = e.target;
    if (
      target.tagName === 'IMG' || 
      target.closest('.protectedImageContainer') ||
      target.querySelector('img')
    ) {
      e.preventDefault();
      // Optional: Display a message
      const message = document.createElement('div');
      message.textContent = 'الصور محمية من التنزيل';
      message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
      `;
      document.body.appendChild(message);
      setTimeout(() => {
        document.body.removeChild(message);
      }, 1500);
    }
  });

  // Disable keyboard shortcuts used for saving images
  document.addEventListener('keydown', (e) => {
    // Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12, PrintScreen
    const forbiddenKeys = ['s', 'u', 'i', 'F12', 'PrintScreen'];
    if (
      (e.ctrlKey && forbiddenKeys.includes(e.key.toLowerCase())) ||
      e.key === 'F12' ||
      e.key === 'PrintScreen'
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Disable drag and drop for images
  document.addEventListener('dragstart', (e) => {
    if (
      e.target.tagName === 'IMG' || 
      e.target.closest('.protectedImageContainer')
    ) {
      e.preventDefault();
    }
  });

  // Add invisible overlay to images that cannot be detected by network tools
  // This makes it harder for automated tools to find image URLs
  const addInvisibleOverlay = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Skip if already processed
      if (img.dataset.protected) return;
      
      const parent = img.parentElement;
      if (parent && parent.classList.contains('protectedImageContainer')) {
        img.dataset.protected = 'true';
      }
    });
  };

  // Apply on load and periodically check for new images
  window.addEventListener('load', addInvisibleOverlay);
  setInterval(addInvisibleOverlay, 2000);
  
  // Disable all browser native shortcuts and features that could 
  // potentially be used to extract images (excluding developer tools)
  document.addEventListener('keydown', (e) => {
    // Disable print feature
    if (e.ctrlKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      return false;
    }
  });

  // Add CSS rule to disable user-select on all images
  const style = document.createElement('style');
  style.textContent = `
    img, .protectedImageContainer, .protectedImage {
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
    }
  `;
  document.head.appendChild(style);
}
