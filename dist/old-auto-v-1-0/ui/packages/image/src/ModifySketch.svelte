<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { IconButton } from "@gradio/atoms";
	import { Undo, Clear, Copy } from "@gradio/icons";
	const dispatch = createEventDispatcher();
</script>

<div>
	<IconButton Icon={Undo} label="Undo" on:click={() => dispatch("undo")} />
	<IconButton Icon={Copy} label="Redraw" on:click={() => dispatch("redraw")} />
	<IconButton
		Icon={Clear}
		label="Clear"
		on:click={(event) => {
			dispatch("clear");
			event.stopPropagation();
		}}
	/>
</div>

<style>
	div {
		display: flex;
		position: absolute;
		top: var(--size-2);
		right: var(--size-2);
		justify-content: flex-end;
		gap: var(--spacing-sm);
		z-index: var(--layer-5);
	}

	button[aria-label="Redraw"] {
		display: none;
	}
</style>
