<script>
    export let variant = 'gym'; // 'gym' or 'pt'

    let formData = {
        inquiryType: '',
        sessionType: '',
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: '',
        under18: false
    };

    function handleSubmit() {
        console.log('Form submission:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form
        formData = {
            inquiryType: '',
            sessionType: '',
            name: '',
            email: '',
            phone: '',
            preferredDate: '',
            message: '',
            under18: false
        };
    }
</script>

<section class="contact" id="contact" aria-labelledby="contact-title">
    <div class="contact-wrapper">
        <div class="contact-info reveal">
            <p class="section-tag">
                {#if variant === 'pt'}
                    Schedule Session
                {:else}
                    Get in Touch
                {/if}
            </p>
            <h2 class="section-title" id="contact-title">
                {#if variant === 'pt'}
                    Book Your Appointment
                {:else}
                    Contact Us
                {/if}
            </h2>
            <address style="font-style: normal;">
                <div class="contact-item">
                    <p class="contact-label">Location</p>
                    <p class="contact-value">3325 Hamilton Blvd, Suite #21<br>Allentown, PA 18103</p>
                </div>
                <div class="contact-item">
                    <p class="contact-label">
                        {#if variant === 'pt'}Clinic Hours{:else}Hours{/if}
                    </p>
                    <p class="contact-value">
                        {#if variant === 'pt'}
                            By Appointment Only<br>
                            Monday-Friday: 8AM-9PM<br>
                            Saturday-Sunday: 8AM-6PM
                        {:else}
                            <strong>Members:</strong> 24/7 Access<br>
                            <strong>Staffed:</strong> Mon-Fri 8AM-9PM<br>
                            Sat-Sun 8AM-6PM
                        {/if}
                    </p>
                </div>
                <div class="contact-item">
                    <p class="contact-label">Phone</p>
                    <p class="contact-value"><a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a></p>
                </div>
                <div class="contact-item">
                    <p class="contact-label">Email</p>
                    <p class="contact-value">
                        {#if variant === 'pt'}
                            <a href="mailto:therapy@rapidrecoveryelite.com">therapy@rapidrecoveryelite.com</a>
                        {:else}
                            <a href="mailto:info@rapidrecoveryelite.com">info@rapidrecoveryelite.com</a>
                        {/if}
                    </p>
                </div>
            </address>
            <div class="contact-social">
                <a href="#" class="social-link" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">IG</a>
                <a href="#" class="social-link" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">FB</a>
                <a href="#" class="social-link" aria-label="Subscribe on YouTube" target="_blank" rel="noopener noreferrer">YT</a>
            </div>
        </div>

        <form class="contact-form reveal" on:submit|preventDefault={handleSubmit} aria-labelledby="form-title">
            <h3 id="form-title" class="sr-only">
                {#if variant === 'pt'}Appointment Request Form{:else}Contact Form{/if}
            </h3>
            
            {#if variant === 'pt'}
                <div class="form-group">
                    <label class="form-label" for="session-type">Session Type</label>
                    <select class="form-input" id="session-type" name="session-type" bind:value={formData.sessionType} required>
                        <option value="">Select session type</option>
                        <option value="60min-nonmember">60-Minute Session (Non-Member - $200)</option>
                        <option value="60min-member">60-Minute Session (Member - $150)</option>
                        <option value="30min-nonmember">30-Minute Session (Non-Member - $149)</option>
                        <option value="30min-member">30-Minute Session (Member - $99)</option>
                        <option value="consultation">Free Consultation</option>
                    </select>
                </div>
            {:else}
                <div class="form-group">
                    <label class="form-label" for="inquiry-type">I'm interested in:</label>
                    <select class="form-input" id="inquiry-type" name="inquiry-type" bind:value={formData.inquiryType} required>
                        <option value="">Select an option</option>
                        <option value="membership">Membership</option>
                        <option value="day-pass">Day Pass</option>
                        <option value="tour">Free Gym Tour</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="physical-therapy">Physical Therapy / Recovery Session</option>
                        <option value="media-team">Media Team Services</option>
                        <option value="business-network">Member Business Network</option>
                        <option value="presale-waitlist">Presale Waitlist</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            {/if}

            <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input type="text" class="form-input" id="name" name="name" placeholder="Your {variant === 'pt' ? 'full ' : ''}name" bind:value={formData.name} required autocomplete="name">
            </div>

            <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input type="email" class="form-input" id="email" name="email" placeholder="Your email" bind:value={formData.email} required autocomplete="email">
            </div>

            <div class="form-group">
                <label class="form-label" for="phone">Phone</label>
                <input type="tel" class="form-input" id="phone" name="phone" placeholder="Your phone number" bind:value={formData.phone} required={variant === 'pt'} autocomplete="tel">
            </div>

            {#if variant === 'pt'}
                <div class="form-group">
                    <label class="form-label" for="preferred-date">Preferred Date/Time</label>
                    <input type="text" class="form-input" id="preferred-date" name="preferred-date" placeholder="e.g., Monday mornings, weekday afternoons" bind:value={formData.preferredDate}>
                </div>
            {/if}

            <div class="form-group">
                <label class="form-label" for="message">
                    {#if variant === 'pt'}Chief Complaint / Reason for Visit{:else}Message{/if}
                </label>
                <textarea 
                    class="form-input" 
                    id="message" 
                    name="message" 
                    placeholder="{variant === 'pt' ? 'Tell us what brings you in (optional)' : 'Tell us more about your inquiry'}" 
                    bind:value={formData.message}
                    required={variant !== 'pt'}
                ></textarea>
            </div>

            {#if variant === 'pt'}
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="under18" name="under18" bind:checked={formData.under18}>
                    <label for="under18">Patient is under 18 years of age</label>
                </div>
            {/if}

            <button type="submit" class="btn btn-primary">
                {#if variant === 'pt'}Request Appointment{:else}Send Message{/if}
            </button>

            {#if variant === 'pt'}
                <p class="form-note">We will contact you within 24 hours to confirm your appointment.</p>
            {/if}
        </form>
    </div>
</section>

<style>
    .contact {
        background: var(--color-bg-alt);
    }

    .contact-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-3xl);
        max-width: 1300px;
        margin: 0 auto;
    }

    .contact-info {
        padding: var(--space-lg) 0;
    }

    .contact-item {
        margin-bottom: var(--space-lg);
    }

    .contact-label {
        font-family: var(--font-display);
        font-size: 0.8125rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--color-silver);
        margin-bottom: var(--space-xs);
    }

    .contact-value {
        font-size: 1.1875rem;
        font-weight: 400;
        color: var(--color-text);
        line-height: 1.6;
    }

    .contact-value a {
        color: var(--color-text);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .contact-value a:hover,
    .contact-value a:focus {
        color: var(--color-silver);
    }

    .contact-social {
        display: flex;
        gap: var(--space-sm);
        margin-top: var(--space-xl);
    }

    .social-link {
        width: 48px;
        height: 48px;
        border: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-text);
        text-decoration: none;
        transition: all var(--transition-base);
    }

    .social-link:hover,
    .social-link:focus {
        border-color: var(--color-silver);
        background: var(--color-silver);
        color: var(--color-bg);
    }

    .contact-form {
        background: var(--color-bg);
        padding: var(--space-xl);
    }

    .form-group {
        margin-bottom: var(--space-md);
    }

    .form-label {
        display: block;
        font-family: var(--font-display);
        font-size: 0.8125rem;
        font-weight: 500;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--color-text-muted);
        margin-bottom: 0.625rem;
    }

    .form-input {
        width: 100%;
        padding: 0.875rem 1rem;
        background: var(--color-bg-alt);
        border: 1px solid var(--color-border);
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 1rem;
        transition: border-color var(--transition-fast);
    }

    .form-input:focus {
        outline: none;
        border-color: var(--color-silver);
    }

    .form-input::placeholder {
        color: var(--color-text-muted);
    }

    textarea.form-input {
        min-height: 140px;
        resize: vertical;
    }

    select.form-input {
        cursor: pointer;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    .checkbox-group input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--color-silver);
    }

    .checkbox-group label {
        margin-bottom: 0;
        cursor: pointer;
        text-transform: none;
        font-family: var(--font-body);
        font-size: 0.9rem;
    }

    .contact-form .btn {
        width: 100%;
        margin-top: var(--space-sm);
    }

    .form-note {
        margin-top: var(--space-sm);
        font-size: 0.875rem;
        color: var(--color-text-muted);
        font-style: italic;
        text-align: center;
    }

    @media (max-width: 1024px) {
        .contact-wrapper {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }
    }

    @media (max-width: 480px) {
        .contact-social {
            justify-content: center;
        }
    }
</style>
