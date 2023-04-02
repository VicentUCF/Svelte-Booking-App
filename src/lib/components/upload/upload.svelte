<script lang="ts">
</script>

<div class="upload">
	<header class="upload__title">
		<h1>Upload</h1>
	</header>
	<main class="upload__body">
		<!-- input type file dragable -->
		<div class="upload__input">
			<input type="file" id="file" name="file" class="upload__input"/>
			<label for="file">Drag and drop your file here</label>
		</div>
	</main>

	<footer class="upload__footer">
		<button class="upload__button">Upload</button>
	</footer>
</div>

<style lang="scss">
	.upload {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #f5f5f5;
		padding: 2rem;
		border-radius: 0.5rem;

		&__title {
			font-size: medium;
			font-weight: 600;
		}

    &__input{
      &::after{
        content: "Drag and drop your file here";
        display: block;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        border: 2px dashed #ccc;
        border-radius: 0.5rem;
        padding: 1rem;
        font-size: medium;
        text-align: center;
        font-weight: 600;
        color: #ccc;
      }
    }
	}
</style>
