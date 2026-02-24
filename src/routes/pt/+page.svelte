<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';
    import Dialog from '$lib/components/Dialog.svelte';

    let consultDialog;

    onMount(() => {
        // Re-initialize form embed script for SPA navigation
        const existingScript = document.querySelector('script[src="https://link.elitetrainingcenter.org/js/form_embed.js"]');
        if (existingScript) existingScript.remove();
        const formScript = document.createElement('script');
        formScript.src = 'https://link.elitetrainingcenter.org/js/form_embed.js';
        document.body.appendChild(formScript);

        const timeout = setTimeout(() => {
            if (consultDialog) {
                consultDialog.showModal();
            }
        }, 3000);

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
            clearTimeout(timeout);
        };
    });
</script>

<svelte:head>
    <title>Rapid Recovery: Sports Therapy and Performance | Dr. Taylor Foster, DPT</title>
    <meta name="description" content="Rapid Recovery: Sports Therapy and Performance - Led by Dr. Taylor Foster, DPT, CSCS. Physical therapy for athletes and active individuals in Allentown, PA.">
</svelte:head>

<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/rapid_recovery_banner.jpg'); background-position: center 20%;">
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="hero-content">
        <p class="hero-subtitle">Sports Therapy & Performance</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Rapid</span>
            <span class="highlight">Recovery</span>
        </h1>
        <p class="hero-description">Led by Dr. Taylor Foster, DPT, CSCS</p>
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

<section class="about pt-about" id="about" aria-labelledby="about-title">
    <div class="about-grid">
        <div class="about-image reveal">
            <img src="{base}/images/rapid_recovery_manual_therapy.jpg" alt="Dr. Taylor Foster providing physical therapy treatment" loading="lazy" width="800" height="1000">
        </div>
        <div class="about-content reveal">
            <p class="section-tag">Our Approach</p>
            <h2 class="section-title" id="about-title">Engineered for Athletes</h2>
            <p class="about-text">Led by Dr. Taylor Foster, DPT, CSCS, our physical therapy practice is engineered for athletes and active individuals who refuse to settle for mediocrity.</p>
            <p class="about-text">We identify root causes of aches, pains, mobility deficits, or performance plateaus — not just mask symptoms. Hands-on manual therapy paired with targeted corrective exercise means you'll spend fewer visits, save time and money, and get real results.</p>
            <p class="about-text">Whether you're recovering from injury, chasing PRs, or just staying in the fight, we support you with a program built for performance, mobility, and resilience.</p>
        </div>
    </div>
</section>

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
            <p>A comprehensive, phased approach to getting athletes back to competition safely and confidently.</p>
        </div>
        <div class="service-card reveal">
            <h3>General Recovery & Performance</h3>
            <p>Performance-focused manual therapy sessions for individuals without current injuries. Designed to improve recovery, mobility, tissue quality, and overall performance.</p>
        </div>
    </div>
</section>

<section class="pt-pricing" id="pricing" aria-labelledby="pricing-title">
    <div class="section-header reveal">
        <p class="section-tag">Investment</p>
        <h2 class="section-title" id="pricing-title">Session Pricing</h2>
        <p class="section-description">Taylored physical therapy — built for results, not endless visits</p>
    </div>
    <div class="pricing-grid">
        <article class="pricing-card reveal">
            <h3 class="pricing-name">Free Consultation</h3>
            <p class="pricing-subtitle">15 Minutes</p>
            <p class="pricing-price">FREE</p>
            <ul class="pricing-features">
                <li>In-person or phone</li>
                <li>Discuss your needs</li>
                <li>Learn about our services</li>
                <li>No obligation</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Free Consult</a>
        </article>

        <article class="pricing-card featured reveal">
            <span class="pricing-badge">Most Popular</span>
            <h3 class="pricing-name">Initial Assessment</h3>
            <p class="pricing-subtitle">60 Minutes</p>
            <p class="pricing-price">$150 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$200 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Comprehensive evaluation</li>
                <li>Hands-on manual therapy</li>
                <li>Custom exercise program</li>
                <li>Treatment plan development</li>
            </ul>
            <a href="#contact" class="btn btn-primary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Initial Assessment</h3>
            <p class="pricing-subtitle">30 Minutes</p>
            <p class="pricing-price">$100 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$150 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Focused evaluation</li>
                <li>Hands-on manual therapy</li>
                <li>Custom exercise program</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Follow-Up Session</h3>
            <p class="pricing-subtitle">60 Minutes</p>
            <p class="pricing-price">$150 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$200 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Extended treatment time</li>
                <li>Progress review</li>
                <li>Continued treatment</li>
                <li>Program adjustments</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Follow-Up Session</h3>
            <p class="pricing-subtitle">30 Minutes</p>
            <p class="pricing-price">$100 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$150 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Progress review</li>
                <li>Continued treatment</li>
                <li>Program adjustments</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">General Recovery & Performance</h3>
            <p class="pricing-subtitle">60 Minutes</p>
            <p class="pricing-price">$150 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$200 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Extended session</li>
                <li>Non-injury focused</li>
                <li>Targeted manual therapy</li>
                <li>Performance optimization</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">General Recovery & Performance</h3>
            <p class="pricing-subtitle">30 Minutes</p>
            <p class="pricing-price">$100 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$150 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Non-injury focused</li>
                <li>Targeted manual therapy</li>
                <li>Performance optimization</li>
                <li>Recovery enhancement</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Elite Training & Biomechanical Analysis</h3>
            <p class="pricing-subtitle">90 Minutes</p>
            <p class="pricing-price">$250 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$300 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Train with Dr. Foster</li>
                <li>Movement analysis</li>
                <li>Corrective strategies</li>
                <li>Personalized programming</li>
            </ul>
            <a href="#contact" class="btn btn-secondary">Book Now</a>
        </article>
    </div>
    <div class="pricing-note reveal">
        <p><strong>Note:</strong> Payment is due at time of service. We do not accept insurance directly but can provide documentation for out-of-network reimbursement upon request.</p>
    </div>
</section>

<section class="reviews-section" id="reviews">
    <div class="section-header reveal">
        <p class="section-tag">Testimonials</p>
        <h2 class="section-title">Don't Take Our Word For It, Check Out These Reviews From Our Previous Patients & Clients!</h2>
    </div>
    <div class="reviews-widget reveal">
        <iframe
            id="msgsndr_reviews"
            src="https://backend.leadconnectorhq.com/appengine/reviews/get_widget/QWCXhqVIJwvud0EmvvoF"
            frameborder="0"
            scrolling="no"
            style="min-width:100%;width:100%;"
            height="1157"
            title="Patient Reviews"
        ></iframe>
    </div>
    <div class="reviews-cta reveal" style="text-align:center;margin-top:2rem;">
        <a href="https://maps.app.goo.gl/BEuPQp7cdsnNf3m86?g_st=ic" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Google Reviews</a>
    </div>
</section>

<section id="contact">
    <div class="embedded-contact-wrapper">
        <div class="embedded-contact-container">
            <div class="section-header" style="text-align:center;margin-bottom:2rem;">
                <p class="section-tag">Get In Touch</p>
                <h2 class="section-title">Please Fill Out This Form for Booking</h2>
            </div>
            <iframe
                src="https://link.elitetrainingcenter.org/widget/form/rfNkhvIfrNBlK2dhhBYS"
                style="width:100%;height:681px;border:none;border-radius:3px"
                id="inline-rfNkhvIfrNBlK2dhhBYS"
                data-layout={"{'id':'INLINE'}"}
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us - Physical Therapy"
                data-height="681"
                data-layout-iframe-id="inline-rfNkhvIfrNBlK2dhhBYS"
                data-form-id="rfNkhvIfrNBlK2dhhBYS"
                title="Contact Us - Physical Therapy"
            ></iframe>
        </div>
    </div>
</section>

<Dialog bind:dialog={consultDialog}>
    <div class="consult-popup-content">
        <h3>Free 15-Minute Consultation</h3>
        <p>Discover how Dr. Taylor Foster can help you achieve your performance and recovery goals — at no cost to you.</p>
        <a href="#contact" class="btn btn-primary" on:click={() => consultDialog.close()}>Book Free Consult</a>
        <button class="btn btn-text" on:click={() => consultDialog.close()}>Maybe Later</button>
    </div>
</Dialog>

<style>
    .pricing-price-alt {
        font-size: 1rem;
        color: var(--color-text-muted);
        margin-bottom: var(--space-md);
    }
    .price-label {
        font-size: 0.75rem;
        display: block;
        color: var(--color-text-muted);
    }
    .reviews-section {
        padding: var(--space-3xl) var(--space-lg);
        background: var(--color-bg);
    }
    .reviews-widget {
        max-width: 900px;
        margin: 0 auto;
    }
    .reviews-cta {
        display: flex;
        justify-content: center;
    }
    .consult-popup-content {
        text-align: center;
    }
    .consult-popup-content h3 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--color-silver);
        margin-bottom: var(--space-md);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .consult-popup-content p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
        line-height: 1.7;
    }
    .consult-popup-content .btn {
        display: block;
        margin: 0 auto var(--space-md);
    }
    .btn-text {
        background: none;
        border: none;
        color: var(--color-text-muted);
        cursor: pointer;
        font-size: 0.9rem;
        text-decoration: underline;
    }
    .btn-text:hover {
        color: var(--color-white);
    }

    .embedded-contact-wrapper {
        padding: var(--space-3xl) var(--space-lg);
        background: var(--color-bg-alt);
    }
    .embedded-contact-container {
        max-width: 700px;
        margin: 0 auto;
    }
</style>
