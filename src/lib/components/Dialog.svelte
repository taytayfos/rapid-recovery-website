<script>
    export let dialog;
</script>

<dialog bind:this={dialog} on:close>
    <div class="dialog-content">
        <button class="dialog-close" on:click={() => dialog.close()} aria-label="Close">×</button>
        <slot />
    </div>
</dialog>

<style>
    dialog {
        padding: 0;
        border: none;
        border-radius: 8px;
        background: var(--color-bg-alt, #1a1a1a);
        color: var(--color-white, #fff);
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.85);
        animation: fadeIn 0.2s ease-out;
    }

    dialog[open] {
        animation: slideIn 0.3s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .dialog-content {
        position: relative;
        padding: 2rem;
    }

    .dialog-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--color-white, #fff);
        font-size: 2rem;
        cursor: pointer;
        line-height: 1;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: background 0.2s, color 0.2s;
    }

    .dialog-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--color-silver, #c0c0c0);
    }
</style>
