<script>
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Cancellation Policy | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Membership Cancellation Policy for Rapid Recovery: Elite Training Center">
</svelte:head>

<div class="legal-page">
    <!-- Hero Section -->
    <section class="legal-hero">
        <div class="legal-hero-content">
            <h1 class="legal-title">Membership Cancellations</h1>
            <p class="legal-subtitle">Rapid Recovery: Elite Training Center</p>
        </div>
    </section>

    <!-- Cancellation Policy Content -->
    <section class="legal-content">
        <div class="legal-container">
            
            <div class="legal-section">
                <h2>We're Sorry to See You Go</h2>
                <p>
                    We want to make sure the cancellation process is smooth and clear for all members.
                </p>
            </div>

            <div class="legal-section highlight-section">
                <h2>Important: How to Cancel Your Membership</h2>
                <p><strong>Please note: We do not process membership cancellations via email.</strong></p>
                <p>To cancel your membership, you must either:</p>
                <div class="cancellation-options">
                    <div class="cancellation-option">
                        <div class="option-number">1</div>
                        <div class="option-content">
                            <h3>Visit the Gym in Person</h3>
                            <p>Stop by during our operating hours to speak with a team member who can process your cancellation request.</p>
                            <div class="staffed-hours">
                                <strong>Hours:</strong><br>
                                4:00am - 11:00pm, 365 Days a Year
                            </div>
                        </div>
                    </div>
                    
                    <div class="cancellation-option">
                        <div class="option-number">2</div>
                        <div class="option-content">
                            <h3>Call Us Directly</h3>
                            <p>Contact us by phone to receive further instructions from our staff.</p>
                            <div class="contact-phone">
                                <strong>Phone:</strong> <a href="tel:+17173647848">(717) 364-7848</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="legal-section">
                <h2>Why This Policy?</h2>
                <p>
                    This policy helps us verify account details securely and ensure there are no misunderstandings during the cancellation process. We want to make sure your request is properly documented and processed in a timely manner.
                </p>
                <p>
                    We appreciate your understanding and thank you for being a part of the Rapid Recovery: Elite Training Center community.
                </p>
            </div>

            <div class="legal-section">
                <h2>Questions?</h2>
                <p>
                    If you have any questions about the cancellation process or your membership, please don't hesitate to reach out to our team. We're here to help.
                </p>
                <div class="contact-info-legal">
                    <p><strong>Location:</strong> 3243 Hamilton Blvd, Allentown, PA 18103</p>
                    <p><strong>Phone:</strong> <a href="tel:+17173647848">(717) 364-7848</a></p>
                    <p><strong>Email:</strong> <a href="mailto:support@elitetrainingcenter.org">support@elitetrainingcenter.org</a></p>
                </div>
            </div>

            <div class="legal-back">
                <a href="{base}/" class="btn btn-secondary">Back to Home</a>
                <a href="{base}/#memberships" class="btn btn-primary">View Memberships</a>
            </div>

        </div>
    </section>
</div>

<style>
    .legal-page {
        min-height: 100vh;
        background: var(--color-bg);
    }

    .legal-hero {
        padding: 150px var(--space-lg) var(--space-3xl);
        background: var(--color-bg-alt);
        text-align: center;
    }

    .legal-title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        color: var(--color-white);
        margin-bottom: var(--space-md);
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .legal-subtitle {
        color: var(--color-silver);
        font-size: 1.1rem;
    }

    .legal-content {
        padding: var(--space-3xl) var(--space-lg);
    }

    .legal-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .legal-section {
        margin-bottom: var(--space-2xl);
        padding-bottom: var(--space-xl);
        border-bottom: 1px solid var(--color-border);
    }

    .legal-section:last-of-type {
        border-bottom: none;
    }

    .legal-section h2 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--color-silver);
        margin-bottom: var(--space-lg);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .legal-section h3 {
        font-family: var(--font-display);
        font-size: 1.1rem;
        color: var(--color-white);
        margin-bottom: var(--space-sm);
    }

    .legal-section p {
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: var(--space-md);
    }

    .highlight-section {
        background: var(--color-bg-alt);
        padding: var(--space-xl);
        border-radius: 8px;
        border: 1px solid var(--color-border);
    }

    .cancellation-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--space-xl);
        margin-top: var(--space-xl);
    }

    .cancellation-option {
        display: flex;
        gap: var(--space-lg);
        align-items: flex-start;
    }

    .option-number {
        width: 48px;
        height: 48px;
        min-width: 48px;
        background: var(--color-silver);
        color: var(--color-bg);
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-content {
        flex: 1;
    }

    .staffed-hours,
    .contact-phone {
        margin-top: var(--space-md);
        padding: var(--space-md);
        background: var(--color-bg);
        border-left: 3px solid var(--color-silver);
        color: var(--color-text);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .contact-phone a,
    .contact-info-legal a {
        color: var(--color-silver);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .contact-phone a:hover,
    .contact-info-legal a:hover {
        color: var(--color-white);
    }

    .contact-info-legal {
        background: var(--color-bg-alt);
        padding: var(--space-lg);
        border-left: 3px solid var(--color-silver);
        margin-top: var(--space-lg);
    }

    .contact-info-legal p {
        margin-bottom: var(--space-sm);
    }

    .legal-back {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        margin-top: var(--space-2xl);
        padding-top: var(--space-xl);
    }

    @media (max-width: 768px) {
        .cancellation-options {
            grid-template-columns: 1fr;
        }

        .highlight-section {
            padding: var(--space-lg);
        }
    }
</style>
