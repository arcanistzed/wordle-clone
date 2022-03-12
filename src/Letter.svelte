<script>
	export let letter;

	let state = "incorrect";
</script>

<letter class={state}>
	{letter}
</letter>

<style scoped>
	letter {
		box-shadow: 0 0 5px black;
		border-radius: 10%;
		font-size: 2em;
		padding: 0;
		font-weight: bold;
		aspect-ratio: 1;
		width: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.incorrect {
		background-color: #5d627d;
		box-shadow: 0 0 5px gray;
		color: white;
	}

	.correct {
		background-color: seagreen;
		box-shadow: 0 0 5px green;
		color: white;
	}

	.almost {
		background-color: gold;
		box-shadow: 0 0 5px yellow;
		color: white;
	}
</style>
