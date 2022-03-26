<template>
    <section class="breakpoint">
        <slot name="iconBreakpoint"></slot>
        <section role="paragraph" class="breakpoint--text">
            <h3 class="breakpoint--text_nameBreakpoint">{{ nameBreakpoint }}</h3>
            <p>{{ text }}</p>
        </section>
    </section>
</template>


<script>
    export default {
        props: ["nameBreakpoint", "text"]
    }
</script>