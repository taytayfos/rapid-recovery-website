<script>
    import { onMount } from 'svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';

    let reveals = [];

    onMount(() => {
        // Scroll reveal animation
        const checkReveal = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 120;

            document.querySelectorAll('.reveal').forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', checkReveal, { passive: true });
        checkReveal(); // Check on mount

        return () => {
            window.removeEventListener('scroll', checkReveal);
        };
    });
</script>

<svelte:head>
    <title>Rapid Recovery: Elite Training Center | Home of the Iron Athlete</title>
    <meta name="description" content="Rapid Recovery: Elite Training Center - Private 18+ Only Gym in Allentown, PA. Home of the Iron Athlete.">
</svelte:head>

<!-- Hero Section with Video -->
<section class="hero" id="home" aria-labelledby="hero-title">
    <!-- Video Background -->
    <div class="hero-video-container">
        <video 
            class="hero-video" 
            autoplay 
            muted 
            loop 
            playsinline
            poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
            <source src="/videos/hero-video.mp4" type="video/mp4">
        </video>
        <div class="hero-video-overlay"></div>
    </div>
    
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Welcome to Elite Training</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Home of the</span>
            <span class="highlight">Iron Athlete</span>
        </h1>
        <p class="hero-description">
            Private 18+ Only Gym · Capped at 500 Members
        </p>
        <div class="hero-buttons">
            <a href="#memberships" class="btn btn-primary">Get Started</a>
            <a href="#contact" class="btn btn-secondary">Book Free Tour</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- About Section -->
<section class="about" id="about" aria-labelledby="about-title">
    <div class="about-grid">
        <div class="about-image reveal">
            <img src="/images/about_legs.jpg" 
                 alt="Interior view of Rapid Recovery gym showing professional weight training equipment" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
        <div class="about-content reveal">
            <p class="section-tag">Our Mission</p>
            <h2 class="section-title" id="about-title">This Gym Isn't for Everyone</h2>
            <p class="about-text">
                If you're sick of waiting for someone to finish texting on the machine you want…
            </p>
            <p class="about-text">
                If you're tired of crowded gyms, bad vibes, and unmotivated people going through the motions…
            </p>
            <p class="about-text">
                If you value your health, performance, and environment — you belong here.
            </p>
            <p class="about-text">
                Rapid Recovery: Elite Training Center was built for a specific subset of individuals who demand more. 
                This isn't a franchise; it's a small business built on community, connection, and results.
            </p>
            <p class="about-text">
                We're open 24/7 because your schedule shouldn't dictate your progress. Our staff knows you by name — not a key tag number.
            </p>
            <div class="about-stats">
                <div class="stat">
                    <p class="stat-number">115+</p>
                    <p class="stat-label">Equipment</p>
                </div>
                <div class="stat">
                    <p class="stat-number">24/7</p>
                    <p class="stat-label">Access</p>
                </div>
                <div class="stat">
                    <p class="stat-number">500</p>
                    <p class="stat-label">Member Cap</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Grid Section -->
<section class="features-overview" id="features">
    <div class="section-header reveal">
        <p class="section-tag">What Makes Us Different</p>
        <h2 class="section-title">Elite Level Everything</h2>
    </div>
    <div class="features-grid">
        <a href="/facilities#equipment" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80" alt="Hand-picked equipment">
            <div class="feature-overlay">
                <h3>Hand Picked Equipment</h3>
                <p>Custom pieces from around the world</p>
            </div>
        </a>
        <a href="/facilities#turf" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80" alt="Turf area">
            <div class="feature-overlay">
                <h3>Generous Turf Area</h3>
                <p>150 sq ft dedicated movement space</p>
            </div>
        </a>
        <a href="/facilities#recovery" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80" alt="Recovery services">
            <div class="feature-overlay">
                <h3>Recovery Services</h3>
                <p>Cold plunge, saunas, and more</p>
            </div>
        </a>
        <a href="/training" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Personal training">
            <div class="feature-overlay">
                <h3>Elite Personal Training</h3>
                <p>Hand-selected, vetted coaches</p>
            </div>
        </a>
    </div>
</section>

<!-- Memberships Section -->
<section class="memberships" id="memberships" aria-labelledby="memberships-title">
    <div class="section-header reveal">
        <p class="section-tag">Memberships & Passes</p>
        <h2 class="section-title" id="memberships-title">Choose Your Path</h2>
        <p class="section-description">
            Join Rapid Recovery and unlock your full potential. Limited to 500 members.
        </p>
    </div>
    
    <!-- Presale Banner -->
    <div class="presale-banner reveal">
        <div class="presale-content">
            <h3 class="presale-title">PRESALE NOW LIVE</h3>
            <p class="presale-subtitle">First 100 members locked in at $75/mo FOREVER</p>
            <button class="btn btn-primary">Access Presale</button>
        </div>
    </div>

    <div class="membership-cards">
        <!-- 12 Month Contract -->
        <article class="membership-card reveal">
            <h3 class="membership-name">12 Month Contract</h3>
            <p class="membership-price">$125<span>/mo</span></p>
            <p class="membership-period">Standard pricing - Ages 18+</p>
            <ul class="membership-features">
                <li>24/7 gym access</li>
                <li>All amenities included</li>
                <li>$100 application fee</li>
                <li>$49 yearly maintenance fee</li>
                <li>Member merchandise discount</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Join Now</a>
        </article>

        <!-- Month-to-Month (Featured) -->
        <article class="membership-card featured reveal">
            <span class="membership-badge">Most Flexible</span>
            <h3 class="membership-name">Month-to-Month</h3>
            <p class="membership-price">$150<span>/mo</span></p>
            <p class="membership-period">No contract required</p>
            <ul class="membership-features">
                <li>24/7 gym access</li>
                <li>All amenities included</li>
                <li>Cancel anytime</li>
                <li>$100 application fee</li>
                <li>$49 yearly maintenance fee</li>
                <li>Member merchandise discount</li>
            </ul>
            <a href="#contact" class="btn btn-primary">Join Now</a>
        </article>

        <!-- Day Pass -->
        <article class="membership-card reveal">
            <h3 class="membership-name">Day Pass</h3>
            <p class="membership-price">$30<span>/day</span></p>
            <p class="membership-period">Single day access</p>
            <ul class="membership-features">
                <li>Full gym access</li>
                <li>Locker room access</li>
                <li>Posing room access</li>
                <li>Free parking</li>
                <li>Available 24/7 with pre-purchase</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Get Pass</a>
        </article>
    </div>

    <!-- Additional Pass Options -->
    <div class="additional-passes reveal">
        <h3 class="section-subtitle">Additional Pass Options</h3>
        <div class="pass-grid">
            <div class="pass-option">
                <h4>Single Month Purchase</h4>
                <p class="pass-price">$250</p>
            </div>
            <div class="pass-option">
                <h4>10x Visit Punch Pass</h4>
                <p class="pass-price">$200</p>
            </div>
            <div class="pass-option">
                <h4>Consecutive Week Pass</h4>
                <p class="pass-price">$125</p>
            </div>
            <div class="pass-option">
                <h4>Consecutive 3 Day Pass</h4>
                <p class="pass-price">$75</p>
            </div>
        </div>
    </div>

    <!-- Special Pricing Note -->
    <div class="special-pricing reveal">
        <p><strong>Special Pricing Available:</strong> IFBB Pro's, Active Military, Veterans, Healthcare Workers, Police, Firefighters, and EMS. Contact us for details. Proof required.</p>
    </div>

    <!-- Guest Privileges Add-on -->
    <div class="addon-option reveal">
        <h4>Guest Privileges Add-on</h4>
        <p>$30/month - Bring 3 guests per month (member must be present, guests must complete waiver)</p>
    </div>

    <!-- Age Requirements -->
    <div class="age-requirements reveal">
        <h4>Age Requirements & Exceptions</h4>
        <p>Rapid Recovery: Elite Training Center is designed for a serious training environment — a space where focus, respect, and discipline come first. For that reason, membership is limited to individuals <strong>18 years and older</strong>.</p>
        <p>That said, we understand there are younger athletes who share the same drive and maturity that define our community. Exceptions may be granted — but only after an in-person interview and evaluation to ensure the individual is a good fit for both the culture and expectations of the facility.</p>
        <p>We're not just looking for age — we're looking for attitude, accountability, and respect for the space and the people in it.</p>
        <p><strong>Note:</strong> We do NOT offer day passes to individuals under 18 years of age after staffed hours. Day passes for under-18 require a parent/legal guardian interview during staffed hours. Call ahead recommended.</p>
    </div>
</section>

<!-- Owners Section -->
<section class="owners-section" id="owners" aria-labelledby="owners-title">
    <div class="section-header reveal">
        <p class="section-tag">Leadership</p>
        <h2 class="section-title" id="owners-title">Get to Know Taylor and Hailie Foster</h2>
    </div>
    <div class="owners-grid">
        <div class="owner-profile reveal">
            <div class="owner-image">
                <img src="/images/rapid_recovery_profile_pic.jpg" alt="Dr. Taylor Foster" loading="lazy">
            </div>
            <div class="owner-bio">
                <h3>Dr. Taylor Foster, DPT, CSCS</h3>
                <p>
                    An athlete turned Doctor of Physical Therapy and Certified Strength & Conditioning Specialist, Dr. Taylor Foster has spent his career helping athletes, lifters, and active individuals move, perform, and recover at the highest level.
                </p>
                <p>
                    After years of seeing how overcrowded gyms and cookie-cutter therapy approaches limited true progress, Taylor created Rapid Recovery: Elite Training Center — a space built to redefine what performance and recovery should feel like.
                </p>
                <p>
                    Every detail of the facility reflects his vision: a high-end environment blending elite training, cutting-edge recovery, and community connection. From custom-selected equipment sourced globally to one-on-one "Taylored" therapy sessions, his mission is simple — help people train pain-free, recover faster, and perform better than ever.
                </p>
                <p>
                    Rapid Recovery exists for those who refuse mediocrity — for individuals who demand excellence from themselves, their environment, and their results.
                </p>
            </div>
        </div>
        <div class="owner-profile reveal">
            <div class="owner-image">
                <img src="/images/hailie_profile_pic.jpg" alt="Hailie Foster" loading="lazy" style="object-position: 30% center;">
            </div>
            <div class="owner-bio">
                <h3>Hailie Foster, PA-C</h3>
                <p>
                    Hailie Foster is a board-certified Physician Assistant who serves full-time in Emergency Medicine, where she dedicates her life to helping others in their most critical moments. Her work is grounded in faith, compassion, and an unwavering commitment to excellence — values that extend far beyond the ER.
                </p>
                <p>
                    Hailie plays an integral role in Rapid Recovery's foundation and vision. She embodies the heart behind the brand — faith-driven, resilient, and relentlessly committed to bettering the lives of others.
                </p>
                <p>
                    Outside of medicine, Hailie is a competitive figure athlete and helps lead the "Get to Know the Members" podcast series, sharing authentic conversations that highlight the people, stories, and community that make Rapid Recovery special.
                </p>
                <p>
                    Her ability to balance life-saving medicine, faith, and family is a reflection of what Rapid Recovery stands for — purpose, discipline, and the pursuit of something greater than ourselves.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Reviews Section -->
<section class="reviews-section" id="reviews" aria-labelledby="reviews-title">
    <div class="section-header reveal">
        <p class="section-tag">Testimonials</p>
        <h2 class="section-title" id="reviews-title">Reviews & Testimonials</h2>
    </div>
    <div class="reviews-content reveal">
        <p class="reviews-intro">See what our members are saying about Rapid Recovery: Elite Training Center</p>
        <!-- Placeholder for Google Reviews embed or testimonial cards -->
        <div class="reviews-cta">
            <a href="#" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Leave a Review on Google</a>
        </div>
    </div>
</section>

<!-- Location Section -->
<section class="location-section" id="location" aria-labelledby="location-title">
    <div class="section-header reveal">
        <p class="section-tag">Find Us</p>
        <h2 class="section-title" id="location-title">Location and Parking</h2>
    </div>
    <div class="location-content reveal">
        <p class="location-text">
            We know you can't wait to get here — but let's make sure you actually find us first. Rapid Recovery: Elite Training Center is located at <strong>3325 Hamilton Blvd, Suite 21, Allentown, PA 18103</strong> — tucked away in the back of the plaza for a little extra exclusivity. Think of it as a hidden gem… because that's exactly what it is.
        </p>
        <p class="location-text">
            You can access us from Hamilton Blvd, which runs behind the plaza. Just pull in, drive straight toward the rear, and look for our signage and entryway.
        </p>
        <p class="location-text">
            There's limited parking in front of our space so you may need to park in the side lot and walk over depending on how busy we are.
        </p>
        <div class="location-hours">
            <h4>Hours of Operation:</h4>
            <p><strong>Members:</strong> 24/7 Access, 365 Days a Year</p>
            <p><strong>Staffed Hours:</strong></p>
            <p>Monday-Friday: 8:00am-9:00pm</p>
            <p>Saturday-Sunday: 8:00am-6:00pm</p>
            <p class="hours-note"><em>Unlike most gyms, day passes can be purchased outside of staffed hours (18+ only with pre-purchase). Under 18 requires parent/guardian signature during staffed hours.</em></p>
        </div>
        <div class="location-cta">
            <a href="#" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Directions</a>
            <a href="#" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Purchase Day Pass</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<ContactForm variant="gym" />
