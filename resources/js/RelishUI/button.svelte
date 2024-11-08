<script>
    import {cn} from "./utils";

    /**
     * @typedef {Object} Props
     * @prop {string} variant - Button Variant/Color
     * @prop {HTMLButtonElement} props - Button element props
     */

    /**
     * @type Props
     */
    let { variant = "primary", children, class: styles, ...props } = $props();

     let base = `px-4 py-2 font-medium shadow transition-colors duration-300 rounded-md text-${variant}-foreground bg-${variant} hover:bg-${variant}/10`;

     const classes = cn(base, styles);

     console.log(classes);
</script>

<button {...props} aria-label="button" class={classes}>
    {@render children?.()}
</button>
