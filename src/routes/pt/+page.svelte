<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';

    onMount(() => {
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
    <title>Rapid Recovery: Sports Therapy and Performance | Dr. Taylor Foster, DPT</title>
    <meta name="description" content="Rapid Recovery: Sports Therapy and Performance - Led by Dr. Taylor Foster, DPT, CSCS. Physical therapy for athletes and active individuals in Allentown, PA.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/rapid_recovery_banner.jpg'); background-position: center 20%;">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Sports Therapy & Performance</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Rapid</span>
            <span class="highlight">Recovery</span>
        </h1>
        <p class="hero-description">
            Led by Dr. Taylor Foster, DPT, CSCS
        </p>
        <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Our Services</a>
            <a href="#contact" class="btn btn-secondary">Book Session</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- About PT Services -->
<section class="about pt-about" id="about" aria-labelledby="about-title">
    <div class="about-grid">
        <div class="about-image reveal">
            <img src="{base}/images/rapid_recovery_manual_therapy.jpg" 
                 alt="Dr. Taylor Foster providing physical therapy treatment" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
        <div class="about-content reveal">
            <p class="section-tag">Our Approach</p>
            <h2 class="section-title" id="about-title">Engineered for Athletes</h2>
            <p class="about-text">
                Led by Dr. Taylor Foster, DPT, CSCS, our physical therapy practice is engineered for athletes and active individuals who refuse to settle for mediocrity.
            </p>
            <p class="about-text">
                We identify root causes of aches, pains, mobility deficits, or performance plateaus — not just mask symptoms. Hands-on manual therapy paired with targeted corrective exercise means you'll spend fewer visits, save time and money, and get real results.
            </p>
            <p class="about-text">
                Whether you're recovering from injury, chasing PRs, or just staying in the fight, we support you with a program built for performance, mobility, and resilience.
            </p>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="pt-services" id="services" aria-labelledby="services-title">
    <div class="section-header reveal">
        <p class="section-tag">What We Offer</p>
        <h2 class="section-title" id="services-title">Physical Therapy Services</h2>
    </div>
    
    <div class="services-grid">
        <div class="service-card reveal">
            <h3>Sports Injury Rehabilitation</h3>
            <p>Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries. Get back to your sport stronger than before.</p>
        </div>
        
        <div class="service-card reveal">
            <h3>Performance Enhancement</h3>
            <p>Optimize your athletic performance through movement analysis, corrective exercise, and targeted strength training programs.</p>
        </div>
        
        <div class="service-card reveal">
            <h3>Manual Therapy</h3>
            <p>Hands-on techniques including joint mobilization, soft tissue work, and myofascial release to restore proper movement and reduce pain.</p>
        </div>
        
        <div class="service-card reveal">
            <h3>Movement Assessment</h3>
            <p>Detailed analysis of movement patterns to identify dysfunctions and develop personalized correction strategies.</p>
        </div>
        
        <div class="service-card reveal">
            <h3>Dry Needling</h3>
            <p>Trigger point dry needling to release muscle tension, reduce pain, and restore proper muscle function.</p>
        </div>
        
        <div class="service-card reveal">
            <h3>Return to Sport Protocol</h3>
            <p>Structured programs designed to safely and effectively return athletes to competition at full capacity.</p>
        </div>
    </div>
</section>

<!-- Pricing Section -->
<section class="pt-pricing" id="pricing" aria-labelledby="pricing-title">
    <div class="section-header reveal">
        <p class="section-tag">Investment</p>
        <h2 class="section-title" id="pricing-title">Session Pricing</h2>
        <p class="section-description">
            Taylored physical therapy — built for results, not endless visits
        </p>
    </div>
    
    <div class="pricing-grid">
        <article class="pricing-card reveal">
            <h3 class="pricing-name">60-Minute Session</h3>
            <p class="pricing-subtitle">Non-Member</p>
            <p class="pricing-price">$200</p>
            <ul class="pricing-features">
                <li>Full assessment and treatment</li>
                <li>Hands-on manual therapy</li>
                <li>Custom exercise program</li>
                <li>Recovery tool access</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Session</a>
        </article>

        <article class="pricing-card featured reveal">
            <span class="pricing-badge">Best Value</span>
            <h3 class="pricing-name">60-Minute Session</h3>
            <p class="pricing-subtitle">Gym Member</p>
            <p class="pricing-price">$150</p>
            <ul class="pricing-features">
                <li>Full assessment and treatment</li>
                <li>Hands-on manual therapy</li>
                <li>Custom exercise program</li>
                <li>Recovery tool access</li>
                <li>$50 member savings</li>
            </ul>
            <a href="#contact" class="btn btn-primary">Book Session</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">30-Minute Session</h3>
            <p class="pricing-subtitle">Non-Member</p>
            <p class="pricing-price">$149</p>
            <ul class="pricing-features">
                <li>Focused treatment</li>
                <li>Follow-up sessions</li>
                <li>Targeted intervention</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Session</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">30-Minute Session</h3>
            <p class="pricing-subtitle">Gym Member</p>
            <p class="pricing-price">$99</p>
            <ul class="pricing-features">
                <li>Focused treatment</li>
                <li>Follow-up sessions</li>
                <li>Targeted intervention</li>
                <li>$50 member savings</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Session</a>
        </article>
    </div>

    <div class="pricing-note reveal">
        <p><strong>Note:</strong> Payment is due at time of service. We do not accept insurance directly but can provide documentation for out-of-network reimbursement upon request.</p>
    </div>
</section>

<!-- Doctor Profile Section -->
<section class="pt-doctor" id="doctor" aria-labelledby="doctor-title">
    <div class="section-header reveal">
        <p class="section-tag">Your Provider</p>
        <h2 class="section-title" id="doctor-title">Meet Dr. Taylor Foster</h2>
    </div>
    <div class="doctor-profile reveal">
        <div class="doctor-image">
            <img src="{base}/images/rapid_recovery_profile_pic.jpg" alt="Dr. Taylor Foster, DPT, CSCS" loading="lazy">
        </div>
        <div class="doctor-bio">
            <h3>Dr. Taylor Foster</h3>
            <p class="doctor-credentials">Doctor of Physical Therapy | Certified Strength & Conditioning Specialist</p>
            <p>
                Dr. Taylor Foster isn't just a physical therapist — he's a lifelong athlete, lifter, and movement specialist who has spent his career helping others perform at their highest level while staying pain-free and resilient.
            </p>
            <p>
                With a Doctor of Physical Therapy degree and a Certified Strength & Conditioning Specialist (CSCS) credential, Dr. Foster brings a unique combination of clinical expertise and real-world training knowledge to every session.
            </p>
            <p>
                His approach to physical therapy is different by design. Instead of cookie-cutter protocols and endless visits, Dr. Foster focuses on identifying the root cause of dysfunction, applying hands-on treatment, and building individualized programs that keep you moving forward — not just maintained.
            </p>
            <p>
                Whether you're recovering from injury, managing chronic pain, or looking to optimize your performance, Dr. Foster's goal is simple: help you train smarter, recover faster, and perform better than you thought possible.
            </p>
        </div>
    </div>
</section>

<!-- Privacy Section -->
<section class="privacy-section" id="privacy" aria-labelledby="privacy-title">
    <div class="section-header reveal">
        <p class="section-tag">Your Privacy</p>
        <h2 class="section-title" id="privacy-title">HIPAA Compliance & Privacy</h2>
    </div>
    <div class="privacy-content reveal">
        <p class="privacy-intro">
            As a licensed physical therapy practice, Rapid Recovery: Sports Therapy and Performance is fully committed to protecting your personal health information. All patient records, communications, and treatment details are handled in accordance with HIPAA (Health Insurance Portability and Accountability Act) regulations.
        </p>
        <div class="privacy-highlights">
            <h4>What This Means For You:</h4>
            <ul>
                <li>Your health information will never be shared without your explicit written consent</li>
                <li>All records are stored securely using industry-standard encryption and access controls</li>
                <li>Communications between you and Dr. Foster remain confidential</li>
                <li>You have the right to access, review, and request corrections to your records</li>
            </ul>
        </div>

        <div class="privacy-cta">
            <a href="{base}/privacy-policy" class="btn btn-secondary">View Full Privacy Policy</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<ContactForm variant="pt" />
