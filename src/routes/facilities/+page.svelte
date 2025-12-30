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
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/the_gym_banner.jpg');">
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
            <a href="#equipment" class="btn btn-primary">Explore</a>
            <a href="{base}/#contact" class="btn btn-secondary">Book Tour</a>
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
        <p class="section-tag">The Arsenal</p>
        <h2 class="section-title" id="equipment-title">Hand Picked Equipment</h2>
        <p class="section-description">
            Hand Picked. Tested. Built for Performance.
        </p>
    </div>
    <div class="equipment-content reveal">
        <p class="equipment-text">
            Every piece of equipment inside Rapid Recovery: Elite Training Center was chosen with one goal in mind — to create the ultimate training environment for serious athletes.
        </p>
        <p class="equipment-text">
            We don't chase bulk discounts or fill our floor with one logo just to say we did. Because let's be real — no single brand gets it right across the board. One company might make a world-class leg press but a mediocre leg extension. Another might build the perfect chest press but miss on the pulldown.
        </p>
        <p class="equipment-text">
            That's why every machine here has been <strong>handpicked, tested, and personally selected by Dr. Taylor Foster, DPT, CSCS</strong> — after hundreds of hours spent researching, testing, and refining the perfect lineup.
        </p>
        <p class="equipment-text">
            Our collection includes premium pieces sourced from all over the world — Australia, the UK, Sweden, Germany, and the USA — along with custom-engineered equipment designed by Dr. Foster himself.
        </p>
        <p class="equipment-text">
            These machines aren't just equipment — they're instruments of performance. You'll find rare and exclusive pieces you won't see in any gym within 60 minutes, and even a few that exist in only a handful of gyms across the country and some that can only be found here.
        </p>
        <div class="equipment-brands">
            <h4>Recognizable Brands Include:</h4>
            <p>Atlantis, Gym80, Watson, Rogue, Raw Motive Works, Prime, Gymleco, Premier, Magnum, Cybex, Nautilus, Body Masters, and Life Fitness among other more niche brands and custom pieces</p>
        </div>
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
            <p class="about-text">
                Clean. Open. Purpose-built. This isn't wasted floor space — it's where your body gets primed to perform and recover at its best.
            </p>
        </div>
        <div class="about-image reveal">
            <img src="{base}/images/the_gym_turf.jpg" 
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
        <p class="section-tag">Recovery</p>
        <h2 class="section-title" id="recovery-title">Recovery Services & Amenities</h2>
        <p class="section-description">
            From elite performance training to precision recovery, every detail here serves one mission — to keep you at the top of your game.
        </p>
    </div>
    <div class="recovery-grid">
        <div class="recovery-item reveal">
            <h4>Cold Plunge</h4>
            <p>Available in each locker room for powerful nervous-system reset and metabolic activation</p>
        </div>
        <div class="recovery-item reveal">
            <h4>Infrared Saunas</h4>
            <p>Multiple private saunas in each bathroom designed for deep heat therapy, tissue regeneration, and detoxification</p>
        </div>
        <div class="recovery-item reveal">
            <h4>Hypervolt Massage Guns</h4>
            <p>Available to sign out at the front desk for percussive therapy wherever you need it</p>
        </div>
        <div class="recovery-item reveal">
            <h4>Inversion Table</h4>
            <p>Decompress, restore spinal alignment, unload the nervous system</p>
        </div>
        <div class="recovery-item reveal">
            <h4>Normatec Compression</h4>
            <p>Accelerate recovery, flush metabolites, speed bounce-back after heavy sessions or therapy</p>
        </div>
    </div>
    <div class="recovery-cta reveal">
        <a href="{base}/pt" class="btn btn-primary">Learn About Physical Therapy Services</a>
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
                The Posing Room at Rapid Recovery: Elite Training Center was designed for athletes who take the stage — and their craft — seriously. This private, professional space is available 24/7 and offers the perfect environment to refine your presentation, assess symmetry, and perfect every transition under lighting that mirrors real competition settings.
            </p>
            <p class="about-text">
                Whether you're a bodybuilder, physique competitor, classic athlete, or coach working with clients, the posing room provides an atmosphere built for focus and refinement — free from distraction, crowding, or interruptions.
            </p>
            <div class="posing-features">
                <ul>
                    <li>Full-wall mirrors for complete visibility and alignment</li>
                    <li>Adjustable lighting to replicate stage conditions</li>
                    <li>Open floor space for movement and transitions</li>
                    <li>Privacy and professionalism for one-on-one or team sessions</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="reviews-section">
    <div class="section-header reveal">
        <p class="section-tag">Ready to Train?</p>
        <h2 class="section-title">Experience Elite Facilities</h2>
    </div>
    <div class="reviews-content reveal">
        <p class="reviews-intro">Book a free tour and see why Rapid Recovery is unlike any gym you've experienced.</p>
        <div class="reviews-cta">
            <a href="{base}/#contact" class="btn btn-primary">Book Free Tour</a>
            <a href="{base}/#memberships" class="btn btn-secondary">View Memberships</a>
        </div>
    </div>
</section>

<style>
    .reviews-cta {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
