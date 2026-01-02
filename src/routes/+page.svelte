<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';

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
        checkReveal();

        return () => {
            window.removeEventListener('scroll', checkReveal);
        };
    });
</script>

<svelte:head>
    <title>Rapid Recovery: Elite Training Center | Home of the Iron Athlete</title>
    <meta name="description" content="Rapid Recovery: Elite Training Center - Private 18+ Only Gym in Allentown, PA. Home of the Iron Athlete.">
</svelte:head>

<!-- Hero Section -->
<section class="hero" id="home" aria-labelledby="hero-title" style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Welcome to the Elite Training Center</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Home of the</span>
            <span class="highlight">Iron Athlete</span>
        </h1>
        <p class="hero-description">
            Private 18+ Only Gym · Capped at 500 Members
        </p>
        <div class="hero-buttons">
            <a href="{base}/#memberships" class="btn btn-primary">Get Started</a>
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
            <img src="{base}/images/about_legs.jpg" 
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
            <p class="about-text">
                We feature hand-picked, high-end equipment curated by Dr. Taylor Foster, DPT, CSCS, and a recovery lounge with infrared saunas, inversion tables, cold plunges, massage guns, and Normatec compression.
            </p>
            <p class="about-text">
                We have a dedicated turf space, elite-level environment, and a community that listens — constantly evolving from member feedback.
            </p>
            <p class="about-text">
                Our "Get to Know the Members" podcast series, hosted by Hailie and Taylor Foster, highlights the stories of the athletes, lifters, and professionals who make this place special.
            </p>
            <p class="about-text">
                Yes — our membership is expensive. And that's exactly the point.
            </p>
            <p class="about-text">
                At cheap gyms, you pay less but waste more: time, energy, and motivation. You wait for equipment. You deal with noise, chaos, and people who don't care whether you show up or not.
            </p>
            <p class="about-text">
                Here, you don't.
            </p>
            <p class="about-text">
                We believe in quality > quantity — fewer members, better environment, stronger community.
            </p>
            <p class="about-text">
                We want the best members and the best for our members — people serious about performance, growth, and excellence.
            </p>
            <p class="about-text highlight-text">
                If that's you… Welcome Home.
            </p>
            <div class="about-stats">
                <div class="stat">
                    <p class="stat-number">70+</p>
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

<!-- Formula Section -->
<section class="formula-section" id="formula">
    <div class="formula-content reveal">
        <div class="formula-image">
            <img src="{base}/images/RRETC_Formula_White.png" alt="R²=ELITE(TC) Formula" />
        </div>
        <div class="formula-explanation">
            <p>This isn't math. It's the standard.</p>
            <p>When recovery is done at the highest level (Rapid Recovery²), it becomes elite performance within an elite training center environment (ELITE(TC)). Or, more simply: <strong>Rapid Recovery to the highest power creates Elite Training.</strong></p>
            <p>The "squared" represents taking recovery to the next level — not just getting you out of pain, but rebuilding you to perform at a higher level than before. Because recovery isn't about getting back to baseline. It's about turning setbacks into strength and preparation into performance.</p>
            <p class="formula-tagline"><strong>Rapid Recovery. Elite Training. Setting the Standard.</strong></p>
            <p class="formula-cta">If you're here, you're chasing Elite.</p>
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
        <a href="{base}/facilities#equipment" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80" alt="Hand-picked equipment">
            <div class="feature-overlay">
                <h3>Hand Picked Equipment</h3>
                <p>Custom pieces from around the world</p>
            </div>
        </a>
        <a href="{base}/facilities#turf" class="feature-card reveal">
            <img src="{base}/images/the_gym_turf.jpg" alt="Turf area">
            <div class="feature-overlay">
                <h3>Generous Turf Area</h3>
                <p>150 sq ft dedicated movement space</p>
            </div>
        </a>
        <a href="{base}/facilities#recovery" class="feature-card reveal">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80" alt="Recovery services">
            <div class="feature-overlay">
                <h3>Recovery Services</h3>
                <p>Cold plunge, saunas, and more</p>
            </div>
        </a>
        <a href="{base}/training" class="feature-card reveal">
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
        <p class="section-description">Become Elite. Join Rapid Recovery and unlock your full potential. Limited to 500 members.</p>
    </div>

    <!-- Presale Banner -->
    <div class="presale-banner reveal">
        <h3>🎉 Presale Now Live</h3>
        <ul class="presale-list">
            <li>Members 101-500 locked in at <strong>$99/mo FOREVER</strong></li>
            <li>If membership cap is reached before opening, 5 lucky members will get a whole year membership for free!</li>
            <li>Waived $100 application fee included</li>
            <li>Early access to the gym prior to grand opening included</li>
            <li>3 free day passes included</li>
            <li>Free T-shirt included</li>
            <li>Surprise gift worth $100 included</li>
        </ul>
    </div>

    <div class="memberships-grid">
        <article class="membership-card featured reveal">
            <span class="membership-badge">Best Value</span>
            <h3 class="membership-name">12-Month Contract</h3>
            <p class="membership-price">$149<span>/month</span></p>
            <p class="membership-period">Billed monthly for 12 months</p>
            <ul class="membership-features">
                <li>24/7 gym access</li>
                <li>Full recovery lounge access</li>
                <li>Posing room access</li>
                <li>Free parking</li>
                <li>Lowest monthly rate</li>
            </ul>
            <a href="#contact" class="btn btn-primary">Join Now</a>
        </article>

        <article class="membership-card reveal">
            <h3 class="membership-name">Month-to-Month</h3>
            <p class="membership-price">$199<span>/month</span></p>
            <p class="membership-period">Cancel anytime</p>
            <ul class="membership-features">
                <li>24/7 gym access</li>
                <li>Full recovery lounge access</li>
                <li>Posing room access</li>
                <li>Free parking</li>
                <li>No long-term commitment</li>
            </ul>
            <a href="#contact" class="btn btn-primary">Join Now</a>
        </article>

        <article class="membership-card reveal">
            <h3 class="membership-name">Day Pass</h3>
            <p class="membership-price">$30<span>/day</span></p>
            <p class="membership-period">Single day access</p>
            <ul class="membership-features">
                <li>Full gym access</li>
                <li>Locker room access</li>
                <li>Posing room access</li>
                <li>Free parking</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Get Pass</a>
        </article>
    </div>

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

    <div class="special-pricing reveal">
        <p><strong>Special Pricing Available:</strong> IFBB Pro's, Active Military, Veterans, Healthcare Workers, Police, Firefighters, and EMS. Contact us for details. Proof required.</p>
    </div>

    <div class="addon-option reveal">
        <h4>Guest Privileges Add-on</h4>
        <p>$30/month - Bring 3 guests per month (member must be present, guests must complete waiver)</p>
    </div>

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
                <img src="{base}/images/rapid_recovery_profile_pic.jpg" alt="Dr. Taylor Foster" loading="lazy">
            </div>
            <div class="owner-bio">
                <h3>Dr. Taylor Foster, DPT, CSCS</h3>
                <p>An athlete turned Doctor of Physical Therapy and Certified Strength & Conditioning Specialist, Dr. Taylor Foster has spent his career helping athletes, lifters, and active individuals move, perform, and recover at the highest level.</p>
                <p>After years of seeing how overcrowded gyms and cookie-cutter therapy approaches limited true progress, Taylor created Rapid Recovery: Elite Training Center — a space built to redefine what performance and recovery should feel like.</p>
                <p>Every detail of the facility reflects his vision: a high-end environment blending elite training, cutting-edge recovery, and community connection. From custom-selected equipment sourced globally to one-on-one "Taylored" therapy sessions, his mission is simple — help people train pain-free, recover faster, and perform better than ever.</p>
                <p>Rapid Recovery exists for those who refuse mediocrity — for individuals who demand excellence from themselves, their environment, and their results.</p>
            </div>
        </div>
        <div class="owner-profile reveal">
            <div class="owner-image">
                <img src="{base}/images/hailie_profile_pic.jpg" alt="Hailie Foster" loading="lazy" style="object-position: 30% center;">
            </div>
            <div class="owner-bio">
                <h3>Hailie Foster, PA-C</h3>
                <p>Hailie Foster is a board-certified Physician Assistant who serves full-time in Emergency Medicine, where she dedicates her life to helping others in their most critical moments. Her work is grounded in faith, compassion, and an unwavering commitment to excellence — values that extend far beyond the ER.</p>
                <p>Hailie plays an integral role in Rapid Recovery's foundation and vision. She embodies the heart behind the brand — faith-driven, resilient, and relentlessly committed to bettering the lives of others.</p>
                <p>Outside of medicine, Hailie is a competitive figure athlete and helps lead the "Get to Know the Members" podcast series, sharing authentic conversations that highlight the people, stories, and community that make Rapid Recovery special.</p>
                <p>Her ability to balance life-saving medicine, faith, and family is a reflection of what Rapid Recovery stands for — purpose, discipline, and the pursuit of something greater than ourselves.</p>
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
        <div class="reviews-placeholder">
            <p>Google Reviews coming soon...</p>
        </div>
        <div class="reviews-cta">
            <span class="btn btn-primary btn-disabled">Leave a Review on Google (Coming Soon)</span>
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
        <p class="location-text">We know you can't wait to get here — but let's make sure you actually find us first. Rapid Recovery: Elite Training Center is located at <strong>3325 Hamilton Blvd, Suite 21, Allentown, PA 18103</strong> — tucked away in the back of the plaza for a little extra exclusivity. Think of it as a hidden gem… because that's exactly what it is.</p>
        <p class="location-text">You can access us from Hamilton Blvd, which runs behind the plaza. Just pull in, drive straight toward the rear, and look for our signage and entryway.</p>
        <p class="location-text">There's limited parking in front of our space so you may need to park in the side lot and walk over depending on how busy we are.</p>
        <div class="location-hours">
            <h4>Hours of Operation:</h4>
            <p><strong>Members:</strong> 24/7 Access, 365 Days a Year</p>
            <p><strong>Staffed Hours:</strong></p>
            <ul class="staffed-hours-list">
                <li>Monday - Friday: 8:00am - 9:00pm</li>
                <li>Saturday - Sunday: 8:00am - 6:00pm</li>
            </ul>
            <p class="hours-note"><em>Day passes after hours will be limited and can only be purchased by approval from a manager. If you will need a day pass after hours please reach out ahead of time to prevent any issues or complications from accessing the facility.</em></p>
        </div>
        <div class="location-cta">
            <a href="https://maps.google.com/?q=3325+Hamilton+Blvd+Suite+21+Allentown+PA+18103" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Directions</a>
            <a href="#contact" class="btn btn-secondary">Purchase Day Pass</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact">
    <ContactForm variant="gym" />
</section>

<style>
    .formula-section {
        padding: var(--space-3xl) var(--space-lg);
        background: var(--color-bg);
    }

    .formula-content {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
    }

    .formula-image {
        margin-bottom: var(--space-xl);
        text-align: center;
    }

    .formula-image img {
        max-width: 400px;
        width: 100%;
        height: auto;
        margin: 0 auto;
        display: block;
    }

    .formula-explanation {
        color: var(--color-text-muted);
        line-height: 1.8;
    }

    .formula-explanation p {
        margin-bottom: var(--space-md);
    }

    .formula-tagline {
        color: var(--color-silver);
        font-size: 1.2rem;
    }

    .formula-cta {
        color: var(--color-white);
        font-size: 1.1rem;
        font-style: italic;
    }

    .presale-banner {
        background: linear-gradient(135deg, var(--color-silver-dark) 0%, var(--color-gray-dark) 100%);
        padding: var(--space-xl);
        border-radius: 8px;
        margin-bottom: var(--space-2xl);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .presale-banner h3 {
        color: var(--color-white);
        font-size: 1.5rem;
        margin-bottom: var(--space-md);
        text-align: center;
    }

    .presale-list {
        list-style: none;
        padding: 0;
    }

    .presale-list li {
        color: var(--color-text);
        padding: var(--space-xs) 0;
        padding-left: var(--space-lg);
        position: relative;
    }

    .presale-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--color-silver);
    }

    .highlight-text {
        color: var(--color-silver);
        font-weight: 600;
        font-size: 1.1rem;
    }

    .staffed-hours-list {
        list-style: none;
        padding: 0;
        margin: var(--space-sm) 0;
    }

    .staffed-hours-list li {
        padding: var(--space-xs) 0;
        color: var(--color-text-muted);
    }

    .reviews-placeholder {
        padding: var(--space-xl);
        background: var(--color-bg-alt);
        border-radius: 8px;
        margin-bottom: var(--space-lg);
        text-align: center;
    }

    .reviews-placeholder p {
        color: var(--color-text-muted);
        font-style: italic;
    }

    .btn-disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .section-description {
        color: var(--color-text-muted);
        text-align: center;
        max-width: 600px;
        margin: 0 auto var(--space-xl);
    }

    @media (max-width: 768px) {
        .formula-image img {
            max-width: 280px;
        }

        .presale-banner {
            padding: var(--space-lg);
        }
    }
</style>
