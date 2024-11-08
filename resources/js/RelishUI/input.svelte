<script>
    import { cn } from "./utils";

    /**
     * @typedef {Object} Props
     * @prop {string} variant - Input Variant/Color
     * @prop {HTMLInputElement} props - Input element props
     */

    /**
     * @type Props
     */
    let { variant = "primary", class: styles, ...props } = $props();

    const base = `p-2 border rounded-lg shadow outline-none focus:border-primary`;

    const classes = cn(base, styles);
</script>

<input {...props} aria-label="button" class={classes} />
