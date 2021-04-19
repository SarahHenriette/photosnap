<template>
    <div class="breakpoint">
        <slot name="iconBreakpoint"></slot>
        <div class="breakpoint--text">
            <p class="breakpoint--text_nameBreakpoint">{{ nameBreakpoint }}</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>


<script>
    export default {
        props: ["nameBreakpoint", "text"]
    }
</script>