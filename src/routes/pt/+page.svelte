<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';
    import Dialog from '$lib/components/Dialog.svelte';

    let consultDialog;

    onMount(() => {
        // Show free consult popup after 3 seconds
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
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Session</a>
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
            <p>A comprehensive, phased approach to getting athletes back to competition safely and confidently. From post-injury rehab to performance testing, we ensure you're not just "cleared" — you're ready.</p>
        </div>

        <div class="service-card reveal">
            <h3>General Recovery & Performance</h3>
            <p>No injuries? No problem. The best time to work on your body is before something goes wrong. Performance-focused manual therapy sessions for individuals without current injuries. These sessions are designed to improve recovery, mobility, tissue quality, and overall performance. If you're training hard, feeling beat up, or simply want to stay ahead of potential issues, these sessions help you move better, feel better, and keep performing at your best.</p>
        </div>
    </div>
</section>

<!-- Detailed Service Descriptions -->
<section class="service-descriptions" id="service-details">
    <div class="section-header reveal">
        <p class="section-tag">Services</p>
        <h2 class="section-title">What to Expect</h2>
    </div>

    <div class="descriptions-container reveal">
        <div class="service-detail">
            <h3>Initial Assessment: Comprehensive Evaluation for New Beginnings</h3>
            <p>At Rapid Recovery: Sports Therapy & Performance, the Initial Assessment is more than just a standard evaluation. This session is designed to lay the groundwork for your tailored recovery and performance enhancement plan.</p>
            <h4>What to Expect:</h4>
            <p><strong>Personalized Consultation:</strong> Dr. Foster begins with a detailed discussion about your medical history, current injuries, and performance goals. This conversation is crucial for understanding your journey and aspirations.</p>
            <p><strong>Physical Evaluation:</strong> Expect a full physical examination where Dr. Foster assesses your mobility, strength, and any specific areas of concern. This hands-on evaluation is pivotal in diagnosing the root causes of your discomfort or performance barriers.</p>
            <p><strong>Movement Analysis:</strong> Utilizing his expertise in biomechanics, Dr. Foster will analyze your movement patterns, especially those relevant to your sport or physical activities. This analysis helps in identifying inefficiencies and potential areas for improvement.</p>
            <p>Based on the findings from your assessment, you'll receive initial insights and recommendations tailored to your condition and goals, customized corrective exercises designed to start addressing your needs immediately, and hands-on manual therapy treatment to accelerate the rehabilitation process.</p>
            <p>The Initial Assessment is not just about diagnosing issues; it's about crafting a personalized plan that aligns with your goals. Dr. Foster will outline the next steps, including follow-up sessions, treatment strategies, and any recommended changes to your training regimen.</p>
        </div>

        <div class="service-detail">
            <h3>Follow-Up: Sustained Progress Towards Your Goals</h3>
            <p>Follow-Up appointments are a critical component of your personalized treatment plan. Under the expert guidance of Dr. Taylor Foster, these sessions are designed to ensure you remain on track towards achieving and surpassing your health and performance objectives.</p>
            <p>Each Follow-Up visit is an opportunity to assess progress, adjust treatments, and refine strategies to better align with your evolving needs. These sessions will include a progress review where Dr. Foster will evaluate your improvement since the last session, discussing any changes in your condition or performance.</p>
            <p>Based on your progress, treatments may be adjusted to enhance effectiveness. This could include introducing new techniques or advancing current exercises to challenge your body appropriately and ensure continued improvement. Follow-up sessions will also include ongoing hands-on treatment, utilizing techniques best suited to your current stage of recovery and performance goals.</p>
        </div>

        <div class="service-detail">
            <h3>General Recovery & Performance: Targeted Hands-on Tissue Work</h3>
            <p>A focused approach to hands-on treatment, designed for individuals seeking immediate relief from muscle tension, discomfort, or to aid in their recovery process. Dr. Taylor Foster utilizes his expertise in various manual therapy techniques to provide targeted care that supports muscle health and enhances recovery. This service emphasizes direct, hands-on techniques to address specific areas of concern, without the preliminary diagnostic evaluation included in other services. Therefore, this service is not for injuries requiring an evaluation.</p>
            <p>Clients can look forward to personalized treatment, expert techniques, and enhanced recovery. Each session is tailored to your immediate needs, focusing on areas of tension or discomfort as identified by you and Dr. Foster. A range of hands-on techniques may or may not be utilized, such as deep tissue massage, IASTM, trigger point release, cupping, dry needling, and myofascial release, to effectively target and treat soft tissue concerns.</p>
            <p>This service is ideal for clients who do not require a full assessment but still seek the benefits of manual therapy, are looking to enhance their recovery process between training sessions or competitions, and have no injuries but are looking to promote performance and general wellbeing.</p>
        </div>

        <div class="service-detail">
            <h3>Elite Level Personal Training & Biomechanical Analysis</h3>
            <p>Elevate your performance through precision and insight by training directly with Dr. Taylor Foster.</p>
            <p>Ever feel like when you're training that you just aren't able to connect with a muscle or get a "pump" like you should?</p>
            <p>This cutting-edge approach is designed to refine your training efficiency and enhance your performance. Under the guidance of Dr. Taylor Foster, this analysis goes beyond traditional coaching and personal training, providing a deep dive into how your body moves, identifies inefficiencies, and devises strategies to correct them.</p>
            <p><strong>Detailed Movement Assessment:</strong> Dr. Foster will conduct an in-depth analysis of your movement patterns during exercise and sport-specific activities. By examining your movements, Dr. Foster will identify any biomechanical inefficiencies that may be hindering your performance or predisposing you to injury. Based on this assessment, you'll receive a personalized plan that addresses identified inefficiencies. This plan may include corrective exercises, technique adjustments, and other strategies to improve your biomechanical efficiency.</p>
        </div>

        <div class="service-detail">
            <h3>Free Consult - Discover How We Can Help – At No Cost to You</h3>
            <p>Rapid Recovery: Sports Therapy & Performance is committed to your health and performance. That's why we offer a complimentary 15-minute consultation with Dr. Taylor Foster, designed to provide you with a direct insight into how our specialized services can meet your unique needs.</p>
            <h4>What to Expect During Your Free Consult:</h4>
            <p>This no-obligation consultation is your first step towards achieving your health and performance goals. This consult can be in-person or over the phone and here's what it entails:</p>
            <p><strong>Personal Introduction:</strong> A chance to meet Dr. Taylor Foster and learn more about his expertise and approach to physical therapy and performance improvement.</p>
            <p><strong>Discussion of Your Needs:</strong> Share your concerns, goals, and any specific issues you're facing. Whether it's recovery from injury, enhancing performance, or addressing chronic pain, this is the time to outline what you're seeking.</p>
            <p><strong>Professional Insight:</strong> Dr. Foster will provide initial thoughts on how your goals can be met through our services, whether it's through targeted physical therapy, elite level personal training & biomechanical analysis, or any of our specialized offerings.</p>
            <p><strong>Next Steps:</strong> Gain understanding of the potential next steps, including recommendations for specific services or treatments that can benefit you. If Dr. Foster isn't certain he can help you he will be straight forward with you and tell you as well as refer you to someone that he believes could help you.</p>
            <p>This consultation is entirely free, offering you a chance to explore your options without any commitment.</p>
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
            <h3 class="pricing-name">Free Consultation</h3>
            <p class="pricing-subtitle">15 Minutes</p>
            <p class="pricing-price">FREE</p>
            <ul class="pricing-features">
                <li>In-person or phone</li>
                <li>Discuss your needs</li>
                <li>Learn about our services</li>
                <li>No obligation</li>
            </ul>
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Free Consult</a>
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
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Initial Assessment</h3>
            <p class="pricing-subtitle">30 Minutes</p>
            <p class="pricing-price">$100 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$150 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Focused evaluation</li>
                <li>Hands-on treatment</li>
                <li>Initial recommendations</li>
            </ul>
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">Follow-Up Session</h3>
            <p class="pricing-subtitle">60 Minutes</p>
            <p class="pricing-price">$150 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$200 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Extended treatment time</li>
                <li>Progress review</li>
                <li>Comprehensive hands-on work</li>
                <li>Program adjustments</li>
            </ul>
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
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
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
        </article>

        <article class="pricing-card reveal">
            <h3 class="pricing-name">General Recovery & Performance</h3>
            <p class="pricing-subtitle">60 Minutes</p>
            <p class="pricing-price">$150 <span class="price-label">member</span></p>
            <p class="pricing-price-alt">$200 <span class="price-label">non-member (day pass included)</span></p>
            <ul class="pricing-features">
                <li>Non-injury focused</li>
                <li>Extended manual therapy</li>
                <li>Performance optimization</li>
                <li>Recovery enhancement</li>
            </ul>
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
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
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
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
            <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Now</a>
        </article>
    </div>

    <div class="pricing-note reveal">
        <p><strong>Note:</strong> Payment is due at time of service. We do not accept insurance directly but can provide documentation for out-of-network reimbursement upon request.</p>
    </div>
</section>

<!-- Google Reviews Section -->
<section class="reviews-section" id="reviews">
    <div class="section-header reveal">
        <p class="section-tag">Testimonials</p>
        <h2 class="section-title">Patient Reviews</h2>
    </div>
    <div class="reviews-content reveal">
        <p class="reviews-intro">See what our patients are saying about Rapid Recovery: Sports Therapy & Performance</p>
        <div class="reviews-widget">
            <iframe 
                id="msgsndr_reviews" 
                src="https://backend.leadconnectorhq.com/appengine/reviews/get_widget/QWCXhqVIJwvud0EmvvoF" 
                frameborder="0" 
                scrolling="no" 
                title="Google Reviews for Rapid Recovery"
                style="min-width:100%;width:100%;border:none;" 
                height="1157"
            ></iframe>
        </div>
        <div class="reviews-cta">
            <a href="https://maps.app.goo.gl/BEuPQp7cdsnNf3m86?g_st=ic" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Google Reviews</a>
        </div>
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
                An athlete turned Doctor of Physical Therapy and Certified Strength & Conditioning Specialist, Dr. Foster's life has been built inside gyms — first as a 12-year-old learning from a world-record powerlifter, and later as a competitive bodybuilder and performance coach. These experiences shaped how he views training, injury, and human performance.
            </p>
            <p>
                Dr. Foster has spent his career helping athletes, lifters, and active individuals move, perform, and recover at the highest level. He earned his degree in Kinesiology from Penn State and his Doctorate in Physical Therapy from Alvernia University, but much of his perspective was formed under the barbell — dealing with his own injuries, setbacks, and frustrations within the traditional healthcare system.
            </p>
            <p>
                He understands what it's like to be told to "stop lifting" or to be handed cookie-cutter exercises that don't match the way serious athletes train. Foster's career includes time at the UFC Performance Institute in Las Vegas, where he refined his approach to manual therapy, mobility, and performance-based rehabilitation. He now works extensively with athletes, lifters, and active individuals who expect more from both their bodies and their providers.
            </p>
            <p>
                After years of seeing how overcrowded gyms and cookie-cutter therapy approaches limited true progress, Taylor created Rapid Recovery: Sports Therapy & Performance — a space built to redefine what performance and recovery should feel like.
            </p>
            <p>
                Dr. Foster's work is focused on helping active individuals move better, feel better, and perform better — without being told to stop doing what they love. Traditional insurance-based physical therapy often waits until someone is already injured, rushes sessions, and relies on generic, one-size-fits-all programs in overcrowded clinics. Rapid Recovery was intentionally built to be the opposite of that model.
            </p>
            
            <h4>His treatment philosophy is built on three pillars:</h4>
            <ul class="philosophy-list">
                <li><strong>Hands-on care:</strong> Emphasis on targeted, high-level manual therapy to restore movement, reduce pain, improve tissue quality, and speed recovery.</li>
                <li><strong>Specific mobility and exercise prescription:</strong> Not generic "3 sets of 10." Every movement is selected with a direct purpose tied to the patient's training demands and goals.</li>
                <li><strong>Performance mindset:</strong> The objective is not just pain relief — it is higher-level performance in lifting, sport, and life.</li>
            </ul>

            <p>
                He works one-on-one, without insurance limitations, allowing sessions to focus on what is most effective: deep manual therapy, cupping, IASTM, dry needling, soft-tissue techniques, activation strategies, and performance-driven programming. Treatment is tailored to how individuals actually train, including bodybuilding, powerlifting, CrossFit, combat sports, and general strength training.
            </p>

            <h4>Why He Does It:</h4>
            <p>
                Dr. Foster founded Rapid Recovery: Sports Therapy & Performance to become the provider he once needed himself — someone who lives the lifestyle, trains hard, and truly understands what performance means. From custom-selected equipment sourced globally to one-on-one "Taylored" therapy sessions, his mission is simple — help people train pain-free, recover faster, and perform better than ever.
            </p>
            <p>
                Dr. Foster was once the athlete sitting on the table being told to rest, to stop lifting, or to simply repeat generic exercises and return in six weeks. Those experiences highlighted the need for a different model of care. Athletes and active individuals do not need to wait until injury occurs to take care of their bodies.
            </p>
            <p>
                Dr. Foster's mission is to help people stay in the gym, stay strong, stay healthy, and perform at their best — now and long term. Rapid Recovery: Sports Therapy & Performance was created to redefine what therapy, recovery, and training should feel like — combining world-class equipment, a high-performance environment, and individualized care designed specifically for people who take training seriously.
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
            <a href="{base}/pt-privacy-policy" class="btn btn-secondary">View Full PT Privacy Policy</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact">
    <ContactForm variant="pt" />
</section>

<!-- Free Consult Dialog -->
<Dialog bind:dialog={consultDialog}>
    <div class="consult-popup-content">
        <h3>Free 15-Minute Consultation</h3>
        <p>Discover how Dr. Taylor Foster can help you achieve your performance and recovery goals — at no cost to you.</p>
        <a href="https://book.squareup.com/appointments/rrr22fknem9h56/location/LQXFF46VTK5AD/services" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Book Free Consult</a>
        <button class="btn btn-text" on:click={() => consultDialog.close()}>Maybe Later</button>
    </div>
</Dialog>

<style>
    .service-descriptions {
        padding: var(--space-3xl) var(--space-lg);
        background: var(--color-bg-alt);
    }

    .descriptions-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .service-detail {
        margin-bottom: var(--space-3xl);
        padding-bottom: var(--space-2xl);
        border-bottom: 1px solid var(--color-border);
    }

    .service-detail:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .service-detail h3 {
        font-family: var(--font-display);
        font-size: 1.3rem;
        color: var(--color-silver);
        margin-bottom: var(--space-lg);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .service-detail h4 {
        font-family: var(--font-display);
        font-size: 1rem;
        color: var(--color-white);
        margin: var(--space-lg) 0 var(--space-md);
    }

    .service-detail p {
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: var(--space-md);
    }

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

    .reviews-content {
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
    }

    .reviews-widget {
        margin-bottom: var(--space-lg);
        border-radius: 8px;
        overflow: hidden;
        background: var(--color-bg-alt);
    }

    .reviews-widget iframe {
        display: block;
    }

    .reviews-intro {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
    }

    .reviews-cta {
        display: flex;
        justify-content: center;
    }

    .philosophy-list {
        list-style: none;
        padding: 0;
        margin: var(--space-lg) 0;
    }

    .philosophy-list li {
        color: var(--color-text-muted);
        padding: var(--space-sm) 0;
        padding-left: var(--space-lg);
        position: relative;
        line-height: 1.7;
    }

    .philosophy-list li::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--color-silver);
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
</style>
