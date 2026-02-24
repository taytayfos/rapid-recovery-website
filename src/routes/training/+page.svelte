<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

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
    <title>Personal Training | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Elite personal training at Rapid Recovery. Hand-selected, vetted coaches delivering the highest standard of training, integrity, and professionalism.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/elite_personal_training.jpg');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Elite Coaching</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Personal</span>
            <span class="highlight">Training</span>
        </h1>
        <p class="hero-description">
            Hand-selected coaches. Proven results.
        </p>
        <div class="hero-buttons">
            <a href="{base}/#contact" class="btn btn-primary">Get Started</a>
            <a href="#opportunities" class="btn btn-secondary">Become a Trainer</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- Personal Training Section -->
<section class="personal-training" id="training" aria-labelledby="training-title">
    <div class="about-grid">
        <div class="about-content reveal">
            <p class="section-tag">Coaching</p>
            <h2 class="section-title" id="training-title">Elite Level Personal Training</h2>
            <p class="about-text">
                At Rapid Recovery: Elite Training Center, not just anyone can call themselves a trainer here. Every coach on our floor has been personally vetted by Dr. Taylor Foster, DPT, CSCS, to ensure their values, knowledge, and results align with our mission — to deliver the highest standard of training, integrity, and professionalism in the industry.
            </p>
            <p class="about-text">
                This isn't a commercial gym where anyone with a certification can rent space and sell sessions. We demand more. Our trainers are hand-selected for their experience, education, and proven results — but equally for their character, ethics, and ability to elevate the culture of the facility.
            </p>
            <p class="about-text">
                Each trainer operates as their own business within our ecosystem — running their own books, building their own client base, and paying a flat monthly rent instead of chasing commissions. This model gives our trainers freedom, ownership, and true earning potential — while ensuring every session delivered on our floor represents the highest level of quality and care.
            </p>
        </div>
        <div class="about-image reveal">
            <img src="{base}/images/personal_training_athlete.jpg" 
                 alt="Athlete training at Rapid Recovery" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
    </div>
</section>

<!-- Smart Scale Feature Section -->
<section class="equipment-section" id="smart-scale">
    <div class="section-header reveal">
        <p class="section-tag">Exclusive Access</p>
        <h2 class="section-title">HumePod Smart Scale</h2>
    </div>
    <div class="equipment-content reveal">
        <p class="equipment-text">
            Only personal training clients have access to our Smart scale (HumePod) — which goes far beyond a regular weigh-in. Precisely measure body fat, lean mass, hydration and other key metrics so you know where you stand and where you're headed.
        </p>
        <p class="equipment-text">
            This advanced body composition analysis gives you and your trainer the data needed to track progress accurately and adjust your program for optimal results.
        </p>
    </div>
</section>

<!-- Trainer Opportunities Section -->
<section class="about" id="opportunities" aria-labelledby="opportunities-title">
    <div class="about-grid">
        <div class="about-image reveal">
            <img src="{base}/images/personal_training_opportunities.jpg" 
                 alt="Training at Rapid Recovery Elite Training Center" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
        <div class="about-content reveal">
            <p class="section-tag">Join Our Team</p>
            <h2 class="section-title" id="opportunities-title">Trainer Opportunities</h2>
            <p class="about-text">
                If you believe you have what it takes to join our team of elite professionals, we'd love to hear from you. Please submit your resume and a cover letter explaining:
            </p>
            <ul class="opportunity-list">
                <li>Why you want to train at Rapid Recovery: Elite Training Center</li>
                <li>How your values, experience, and results align with our mission</li>
                <li>What makes you stand out as a coach committed to excellence</li>
            </ul>
            <p class="about-text">
                Applications can be submitted via the contact form below. Only serious, qualified applicants will be considered.
            </p>
            <a href="{base}/#contact" class="btn btn-primary">Apply Now</a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="reviews-section">
    <div class="section-header reveal">
        <p class="section-tag">Ready to Train?</p>
        <h2 class="section-title">Start Your Transformation</h2>
    </div>
    <div class="reviews-content reveal">
        <p class="reviews-intro">Connect with one of our elite trainers and take your performance to the next level.</p>
        <div class="reviews-cta">
            <a href="{base}/#contact" class="btn btn-primary">Get Started</a>
            <a href="https://form.jotform.com/260487862745066" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Memberships</a>
        </div>
    </div>
</section>

<style>
    .opportunity-list {
        margin: var(--space-lg) 0;
        padding-left: var(--space-xl);
        list-style: disc;
    }

    .opportunity-list li {
        margin-bottom: var(--space-sm);
        line-height: 1.8;
        color: var(--color-text-muted);
    }

    .reviews-cta {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
