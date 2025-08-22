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

// Check if we're in production (Vite sets this)
const isProduction = import.meta.env.PROD

if (isProduction) {
  // Production: Load from CDN
  loadProductionScripts()
} else {
  // Development: Import directly
  import('./js/vendor/jquery-2.2.4.min.js')
  import('./js/easing.min.js')
  import('./js/hoverIntent.js')
  import('./js/superfish.min.js')
  import('./js/jquery.ajaxchimp.min.js')
  import('./js/jquery.magnific-popup.min.js')
  import('./js/owl.carousel.min.js')
  import('./js/imagesloaded.pkgd.min.js')
  import('./js/justified.min.js')
  import('./js/jquery.sticky.js')
  import('./js/jquery.nice-select.min.js')
  import('./js/parallax.min.js')
  import('./js/mail-script.js')
  import('./js/main.js')
}

// Function to load production scripts from CDN
function loadProductionScripts() {
  // Load jQuery first
  const jqueryScript = document.createElement('script')
  jqueryScript.src = 'https://code.jquery.com/jquery-2.2.4.min.js'
  jqueryScript.onload = () => {
    // After jQuery loads, load other dependencies
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js')
    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/hoverintent/1.10.1/jquery.hoverIntent.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/js/superfish.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/imagesloaded/4.1.4/imagesloaded.pkgd.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sticky/1.0.4/jquery.sticky.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js')
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js')
    
    // Finally load your custom scripts
    loadScript('./js/mail-script.js')
    loadScript('./js/main.js')
  }
  document.head.appendChild(jqueryScript)
}

// Helper function to load scripts
function loadScript(src) {
  const script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (isProduction) {
    console.log('Segunda Casa - Arte Actual production website loading...')
  } else {
    console.log('Segunda Casa - Arte Actual development website loaded successfully!')
  }
}) 