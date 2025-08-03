    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
    
    
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            
            // Dark Mode Toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            const darkModeIcon = darkModeToggle.querySelector('i');
            
            // Check for saved dark mode preference
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            
            // Apply dark mode if enabled
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            }
            
            // Toggle dark mode
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                
                // Update icon
                if (isDark) {
                    darkModeIcon.classList.remove('fa-moon');
                    darkModeIcon.classList.add('fa-sun');
                } else {
                    darkModeIcon.classList.remove('fa-sun');
                    darkModeIcon.classList.add('fa-moon');
                }
                
                // Save preference
                localStorage.setItem('darkMode', isDark);
            });
            
            // Navbar background change on scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'var(--nav-bg)';
                    navbar.style.padding = '0.8rem 0';
                    navbar.style.boxShadow = '0 5px 20px var(--shadow-color)';
                } else {
                    navbar.style.backgroundColor = 'var(--nav-bg)';
                    navbar.style.padding = '1.2rem 0';
                    navbar.style.boxShadow = '0 5px 20px var(--shadow-color)';
                }
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const offset = 80;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Typed.js for home section
            const typed = new Typed('.typed-text', {
                strings: ['Web Developer', 'Full Stack Engineer', 'UI/UX Designer', 'JavaScript Expert'],
                typeSpeed: 80,
                backSpeed: 50,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                smartBackspace: true
            });

            // Initialize Owl Carousel for gallery
            $('.gallery-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });

            // Initialize Owl Carousel for testimonials
           $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

            // Animate on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.animate-on-scroll');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('animated');
                        
                        // Animate progress bars
                        if (element.classList.contains('about-content-wrapper')) {
                            const progressBars = document.querySelectorAll('.progress-bar');
                            progressBars.forEach(bar => {
                                const width = bar.getAttribute('data-progress');
                                bar.style.width = width;
                            });
                        }
                    }
                });
            };
            
            // Initial check
            animateOnScroll();
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            
            // Portfolio filtering
            const filterBtns = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    const filter = btn.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filter === 'all') {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Form validation
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    if (name && email && subject && message) {
                        // Simulate form submission
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    }
                });
            }
        });
    