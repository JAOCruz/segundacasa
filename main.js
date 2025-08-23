// Import CSS files - These will be bundled by Vite in production
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
  
  // Ensure custom CSS is loaded in production
  ensureCustomCSS()
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
    // In production, these are bundled into the main JS file, so we don't need to load them separately
    console.log('All production dependencies loaded successfully!')
    
    // Initialize essential functionality for production
    initializeProductionFeatures()
  }
  document.head.appendChild(jqueryScript)
}

// Helper function to load scripts
function loadScript(src) {
  const script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
}

// Function to ensure custom CSS is loaded in production
function ensureCustomCSS() {
  // Check if custom CSS is already loaded
  const customCSSLoaded = document.querySelector('link[href*="custom-styles"]') || 
                          document.querySelector('style[data-custom-styles]')
  
  if (!customCSSLoaded) {
    // Try to load custom CSS from the assets folder first
    const customCSSLink = document.createElement('link')
    customCSSLink.rel = 'stylesheet'
    customCSSLink.href = './css/custom-styles.css'
    customCSSLink.setAttribute('data-custom-styles', 'true')
    customCSSLink.onerror = () => {
      // If that fails, try to load from the root css folder
      const fallbackCSSLink = document.createElement('link')
      fallbackCSSLink.rel = 'stylesheet'
      fallbackCSSLink.href = '/css/custom-styles.css'
      fallbackCSSLink.setAttribute('data-custom-styles', 'true')
      document.head.appendChild(fallbackCSSLink)
      console.log('Custom CSS loaded from fallback path')
    }
    document.head.appendChild(customCSSLink)
    
    console.log('Custom CSS loaded in production')
  }
}

// Header scroll effect functionality
function initHeaderScrollEffect() {
  const header = document.getElementById('header')
  if (!header) return

  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
  
  // Initial check
  handleScroll()
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (isProduction) {
    console.log('Segunda Casa - Arte Actual production website loading...')
  } else {
    console.log('Segunda Casa - Arte Actual development website loaded successfully!')
  }
  
  // Initialize header scroll effect
  initHeaderScrollEffect()
})

// Production-specific initialization function
function initializeProductionFeatures() {
  // Wait for jQuery to be available
  const checkJQuery = setInterval(() => {
    if (typeof $ !== 'undefined') {
      clearInterval(checkJQuery)
      
      // Initialize Magnific Popup
      if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.img-pop-up').magnificPopup({
          type: 'image',
          gallery: { enabled: true }
        })
        
        $('.single-gallery').magnificPopup({
          type: 'image',
          gallery: { enabled: true }
        })
      }
      
      // Initialize Superfish navigation
      if (typeof $.fn.superfish !== 'undefined') {
        $('.nav-menu').superfish({
          animation: { opacity: 'show' },
          speed: 400
        })
      }
      
      // Initialize Nice Select
      if (typeof $.fn.niceSelect !== 'undefined') {
        if (document.getElementById("default-select")) {
          $('select').niceSelect()
        }
      }
      
      // Mobile navigation setup
      if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav' })
        $mobile_nav.find('> ul').attr({ 'class': '', 'id': '' })
        $('body').append($mobile_nav)
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>')
        $('body').append('<div id="mobile-body-overly"></div>')
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>')
        
        // Mobile nav event handlers
        $(document).on('click', '.menu-has-children i', function(e) {
          $(this).next().toggleClass('menu-item-active')
          $(this).nextAll('ul').eq(0).slideToggle()
          $(this).toggleClass("lnr-chevron-up lnr-chevron-down")
        })
        
        $(document).on('click', '#mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active')
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu')
          $('#mobile-body-overly').toggle()
        })
        
        $(document).click(function(e) {
          var container = $("#mobile-nav, #mobile-nav-toggle")
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active')
              $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu')
              $('#mobile-body-overly').fadeOut()
            }
          }
        })
      }
      
                        console.log('Production features initialized successfully!')
                  
                  // Initialize header scroll effect for production
                  initHeaderScrollEffect()
                }
              }, 100)
            } 