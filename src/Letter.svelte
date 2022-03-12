<script lang="ts">
	export let letter = "";
	export let solution = "";
	export let word: string[] = [];

	$: state =
		letter.toLowerCase() === solution[word.indexOf(letter)] && letter
			? "correct"
			: solution.toLowerCase().includes(letter.toLowerCase()) && letter
			? "almost"
			: "incorrect";
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
		background-color: #ff9800;
		box-shadow: 0 0 5px yellow;
		color: white;
	}
</style>
