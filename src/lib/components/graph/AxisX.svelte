<script>
    export let height;
    export let xScale;
    export let margin;

    let xTicks = [0, 25, 50, 75, 100];
</script>

<g>
    {#each xTicks as tick}
        <text
            x={xScale(tick)}
            y={height + margin.bottom}
            class="tick"
            text-anchor="middle"
        >
            {tick}
        </text>
    {/each}
</g>