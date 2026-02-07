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
    <title>Facilities | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Explore our world-class facilities including hand-picked equipment, turf area, recovery services, and posing room at Rapid Recovery: Elite Training Center.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/faculty.jpg');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">World-Class</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Our</span>
            <span class="highlight">Facilities</span>
        </h1>
        <p class="hero-description">
            Every detail designed for elite performance
        </p>
        <div class="hero-buttons">
            <a href="{base}/#memberships" class="btn btn-primary">Join Now</a>
            <a href="{base}/#contact" class="btn btn-secondary">Book a Tour</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- Equipment Section -->
<section class="equipment-section" id="equipment" aria-labelledby="equipment-title">
    <div class="section-header reveal">
        <p class="section-tag">World-Class</p>
        <h2 class="section-title" id="equipment-title">Hand-Picked Equipment</h2>
    </div>
    <div class="equipment-content reveal">
        <p class="equipment-text">
            Every piece of equipment in this facility was hand-selected by Dr. Taylor Foster — not ordered from a catalog or bought in bulk. We source globally from companies like Gym80 (Germany), Prime Fitness, Watson Gym Equipment (UK), Atlantis, Gymleco (Sweden), Nautilus, and beyond.
        </p>
        <p class="equipment-text">
            From rare machines you won't find anywhere else in the Lehigh Valley, to classic staples built to last forever — this isn't a gym thrown together by a franchise template. This is a curated collection of equipment designed to maximize performance, target every muscle group effectively, and stand up to serious use by serious lifters.
        </p>
        <p class="equipment-text">
            And we're not done. As the community grows, so will the equipment lineup. Your feedback matters here — if there's something you want to see, we're listening.
        </p>
    </div>
</section>

<!-- Turf Area Section -->
<section class="turf-section" id="turf" aria-labelledby="turf-title">
    <div class="about-grid">
        <div class="about-content reveal">
            <p class="section-tag">Movement Space</p>
            <h2 class="section-title" id="turf-title">Generous Turf Area</h2>
            <h3 class="section-subtitle">The Turf Zone: Movement Meets Performance</h3>
            <p class="about-text">
                Our 150-square-foot turf zone is dedicated to the foundation of performance — movement. This space was designed for warm-ups, mobility work, lunges, sled pushes, stretching, and dynamic prep before your lift or recovery session.
            </p>
            <p class="about-text">
                Whether you're loosening up your hips before heavy squats, dialing in movement patterns during rehab, or finishing your workout with core and stability work, the turf area provides the space and freedom to move with intention.
            </p>
        </div>
        <div class="about-image reveal">
            <img src="{base}/images/turf.jpg" 
                 alt="Turf area for movement and dynamic exercises" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
    </div>
</section>

<!-- Recovery Services Section -->
<section class="recovery-section" id="recovery" aria-labelledby="recovery-title">
    <div class="section-header reveal">
        <p class="section-tag">Restore & Recharge</p>
        <h2 class="section-title" id="recovery-title">Recovery Services & Amenities</h2>
    </div>
    <div class="recovery-grid">
        <div class="recovery-card reveal">
            <h3>Infrared Saunas</h3>
            <p>Deep-penetrating heat therapy to promote circulation, relaxation, and muscle recovery.</p>
        </div>
        <div class="recovery-card reveal">
            <h3>Cold Plunge</h3>
            <p>Cold water immersion to reduce inflammation, boost recovery, and enhance mental resilience.</p>
        </div>
        <div class="recovery-card reveal">
            <h3>Inversion Tables</h3>
            <p>Decompress your spine, relieve pressure, and improve posture through controlled inversion therapy.</p>
        </div>
        <div class="recovery-card reveal">
            <h3>Normatec Compression</h3>
            <p>Leg recovery using dynamic air compression to flush metabolic waste and reduce soreness.</p>
        </div>
        <div class="recovery-card reveal">
            <h3>Massage Guns</h3>
            <p>Percussion therapy devices available for targeted muscle release and recovery work.</p>
        </div>
    </div>
</section>

<!-- Posing Room Section -->
<section class="posing-room" id="posing-room" aria-labelledby="posing-title">
    <div class="about-grid">
        <div class="about-image reveal">
            <img src="{base}/images/the_gym_posing_room.jpg" 
                 alt="Posing room with mirrors and lighting" 
                 loading="lazy"
                 width="800"
                 height="1000">
        </div>
        <div class="about-content reveal">
            <p class="section-tag">Competition Prep</p>
            <h2 class="section-title" id="posing-title">Posing Room</h2>
            <h3 class="section-subtitle">Precision. Presentation. Perfection.</h3>
            <p class="about-text">
                The Posing Room at Rapid Recovery: Elite Training Center was designed for athletes who take the stage — and their craft — seriously. This private, professional space offers the perfect environment to refine your presentation, assess symmetry, and perfect every transition under lighting that mirrors real competition settings.
            </p>
            <p class="about-text">
                Whether you're a bodybuilder, physique competitor, classic athlete, or coach working with clients, the posing room provides an atmosphere built for focus and refinement — free from distraction, crowding, or interruptions.
            </p>
            <div class="posing-features">
                <ul>
                    <li>Full-wall mirrors for complete visibility and alignment</li>
                    <li>Adjustable lighting to replicate stage conditions</li>
                    <li>Open floor space for movement and transitions</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="section-header reveal">
        <p class="section-tag">Ready to Train?</p>
        <h2 class="section-title">Experience Elite Facilities</h2>
    </div>
    <div class="cta-content reveal">
        <p class="cta-text">See our world-class equipment and facilities for yourself. Book a tour or start your membership today.</p>
        <div class="cta-buttons">
            <a href="{base}/#memberships" class="btn btn-primary">Join Now</a>
            <a href="{base}/#contact" class="btn btn-secondary">Book a Tour</a>
        </div>
    </div>
</section>

<style>
    .posing-features ul {
        list-style: none;
        padding: 0;
        margin-top: var(--space-lg);
    }

    .posing-features li {
        padding: var(--space-sm) 0;
        padding-left: var(--space-lg);
        position: relative;
        color: var(--color-text-muted);
    }

    .posing-features li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--color-silver);
    }

    .cta-section {
        background: var(--color-bg);
        text-align: center;
    }

    .cta-content {
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-text {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
    }

    .cta-buttons {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
