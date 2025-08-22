// Import CSS files
import './css/bootstrap.css'
import './css/font-awesome.min.css'
import './css/linearicons.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/animate.min.css'
import './css/owl.carousel.css'
import './css/main.css'
import './css/custom-styles.css'

// Load external libraries from CDN
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Load jQuery and other dependencies first
async function loadDependencies() {
  try {
    // Load jQuery first
    await loadScript('https://code.jquery.com/jquery-2.2.4.min.js')
    
    // Load Bootstrap
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js')
    await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js')
    
    // Load other jQuery plugins
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/hoverintent/1.10.1/jquery.hoverIntent.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/js/superfish.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/imagesloaded/4.1.4/imagesloaded.pkgd.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sticky/1.0.4/jquery.sticky.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js')
    
    // Now load your custom scripts
    await loadScript('./js/mail-script.js')
    await loadScript('./js/main.js')
    
    console.log('All dependencies loaded successfully!')
  } catch (error) {
    console.error('Error loading dependencies:', error)
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadDependencies().then(() => {
    console.log('Segunda Casa - Arte Actual website loaded successfully!')
  })
}) 