<script lang="ts">
	import Letter from "./Letter.svelte";

	const words: string[][] = [];
	let row = 0;

	const list = ["apple", "peach", "pears", "orange", "banana", "lemon", "kiwis"];
	const solution = list[Math.floor(Math.random() * list.length)];
	console.log(solution);

	const width = solution.length;
	const height = width + 1;

	function enterLetter(event: KeyboardEvent) {
		if (event.key === "Backspace") {
			words[row] = words[row]?.slice(0, -1);
		} else if (event.key === "Enter" && words[row]?.length >= solution.length) {
			console.log("Pressed enter");
			submitGuess(words[row]);
		} else if (event.key.match("^[A-Za-z]$") && (words[row]?.length ?? 0) < width) {
			words[row] = [...(words[row] ?? []), event.key.toUpperCase()];
		}
	}

	function submitGuess(word: string[]) {
		if (word.join("").toLowerCase() === solution) {
			row++;
			setTimeout(() => {
				alert("Correct! Starting over with a new word...");
				location.reload();
			}, 500);
		} else {
			if (row + 1 < height) {
				row++;
			} else {
				row++;
				setTimeout(() => {
					alert("You lost! Starting over with a new word...");
					location.reload();
				}, 500);
			}
		}
	}
</script>

<svelte:window on:keydown={enterLetter} on:pointerdown={() => navigator.virtualKeyboard.show()}/>
<grid>
	{#each new Array(height) as _, i}
		<row>
			{#each new Array(width) as _, j}
				{#if i < row}
					<Letter {solution} word={words[i]?.join("")} letter={words[i]?.[j] ?? ""} position={j} />
				{:else if i === row}
					<Letter {solution} word={""} letter={words[i]?.[j] ?? ""} position={j} />
				{:else}
					<Letter {solution} word={""} letter={""} />
				{/if}
			{/each}
		</row>
	{/each}
</grid>

<style scoped>
	grid {
		margin: 2em;
		flex-direction: column;
	}
	grid,
	row {
		display: flex;
		gap: 0.5em;
	}
</style>
