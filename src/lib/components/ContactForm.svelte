<script>
    export let variant = 'gym'; // 'gym' or 'pt'
    export let isPopup = false;
</script>

<div class="contact-form-wrapper" class:popup={isPopup}>
    <div class="contact-form-container">
        {#if !isPopup}
        <div class="section-header">
            <p class="section-tag">Get In Touch</p>
            <h2 class="section-title">Contact Us</h2>
        </div>
        {/if}

        <form class="contact-form" method="POST" action="">
            <div class="form-row">
                <div class="form-group">
                    <label for="first_name">First Name <span class="required">*</span></label>
                    <input 
                        type="text" 
                        id="first_name" 
                        name="first_name"
                        required
                        placeholder="John"
                    >
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name <span class="required">*</span></label>
                    <input 
                        type="text" 
                        id="last_name" 
                        name="last_name"
                        required
                        placeholder="Doe"
                    >
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        placeholder="john@example.com"
                    >
                </div>
                <div class="form-group">
                    <label for="phone">Phone <span class="required">*</span></label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        placeholder="(555) 123-4567"
                    >
                </div>
            </div>

            <div class="form-group">
                <label for="interest">How can we help you? <span class="required">*</span></label>
                <select id="interest" name="interest" required>
                    {#if variant === 'pt'}
                        <option value="">Select an option...</option>
                        <option value="Free Consultation">Free Consultation</option>
                        <option value="Initial Assessment">Initial Assessment</option>
                        <option value="Follow-Up Session">Follow-Up Session</option>
                        <option value="General Recovery & Performance">General Recovery & Performance</option>
                        <option value="Elite Personal Training & Biomechanical Analysis">Elite Personal Training & Biomechanical Analysis</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                    {:else}
                        <option value="">Select an option...</option>
                        <option value="Free Tour">Free Tour</option>
                        <option value="Membership Inquiry">Membership Inquiry</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="Day Pass">Day Pass</option>
                        <option value="Physical Therapy">Physical Therapy</option>
                        <option value="Trainer Opportunity">Trainer Opportunity</option>
                        <option value="Media Team">Media Team</option>
                        <option value="Other">Other</option>
                    {/if}
                </select>
            </div>

            <div class="form-group checkbox-group">
                <label class="checkbox-label">
                    <input type="checkbox" name="under_18" value="yes">
                    <span>I am under 18 years of age</span>
                </label>
            </div>

            <div class="form-group checkbox-group">
                <label class="checkbox-label">
                    <input type="checkbox" name="terms_and_conditions" value="yes" required>
                    <span class="terms-text">I agree to the <a href={variant === 'pt' ? '/rapid-recovery-website/pt-privacy-policy' : '/rapid-recovery-website/privacy-policy'} target="_blank" rel="noopener noreferrer">terms & conditions</a>. By providing my phone number, I agree to receive text messages from the business.</span>
                </label>
            </div>

            <div class="form-group">
                <label for="message">Message / Reason for Visit</label>
                <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    placeholder="Tell us more about what you're looking for..."
                ></textarea>
            </div>

            <input type="submit" class="btn btn-primary btn-full" value="Send Message">
        </form>
    </div>
</div>

<style>
    .contact-form-wrapper {
        padding: var(--space-3xl) var(--space-lg);
        background: var(--color-bg-alt);
    }

    .contact-form-wrapper.popup {
        padding: var(--space-xl);
        background: transparent;
    }

    .contact-form-container {
        max-width: 700px;
        margin: 0 auto;
    }

    .section-header {
        text-align: center;
        margin-bottom: var(--space-2xl);
    }

    .section-tag {
        font-family: var(--font-display);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--color-silver);
        margin-bottom: var(--space-sm);
    }

    .section-title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--color-white);
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .form-group label {
        font-family: var(--font-display);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-text);
    }

    .required {
        color: var(--color-silver);
    }

    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="tel"],
    .form-group select,
    .form-group textarea {
        padding: var(--space-md);
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 1rem;
        transition: border-color var(--transition-fast);
    }

    .form-group input[type="text"]:focus,
    .form-group input[type="email"]:focus,
    .form-group input[type="tel"]:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--color-silver);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--color-text-muted);
    }

    .form-group select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right var(--space-md) center;
        padding-right: var(--space-2xl);
    }

    .form-group select option {
        background: var(--color-bg);
        color: var(--color-white);
    }

    .checkbox-group {
        flex-direction: row;
        align-items: flex-start;
    }

    .checkbox-label {
        display: flex;
        align-items: flex-start;
        gap: var(--space-sm);
        cursor: pointer;
        font-size: 0.95rem;
        text-transform: none;
        letter-spacing: 0;
        color: var(--color-text-muted);
    }

    .checkbox-label input[type="checkbox"] {
        width: 20px;
        height: 20px;
        min-width: 20px;
        cursor: pointer;
        margin-top: 2px;
    }

    .terms-text {
        font-size: 0.85rem;
        line-height: 1.5;
    }

    .terms-text a {
        color: var(--color-silver);
        text-decoration: underline;
    }

    .btn-full {
        width: 100%;
        padding: var(--space-md) var(--space-xl);
        cursor: pointer;
        font-family: var(--font-display);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        .form-row {
            grid-template-columns: 1fr;
        }

        .contact-form-wrapper {
            padding: var(--space-2xl) var(--space-md);
        }
    }
</style>
