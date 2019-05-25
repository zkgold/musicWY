<template>
	<div id="app">
		<div class="wrap">
			<img src="http://p1.music.126.net/-Opio-feQpw7IAJ34ETmsw==/109951163989462273.jpg" id="loop">
			<img src="../assets/sec.jpg" id="local">
		</div>
	</div>
</template>
<script>
export default {
	name: 'loop',
	props: ['picData'],
	data: function() {
		return {
			src: this.picData.src,
			len: '',
		}
	},
	methods: {

	},
	created() {
		this.len = this.picData.src.length
	}
}
</script>
<style lang='scss' scoped>
#app{
	background-color: green;
}
.wrap{
	width: 980px;
	height: 336px;
	margin: auto;
	border: 1px solid black;
	border-top: none;
}
#loop{
	height: 100%;
}
#local{
	width: 250px;
	height: 336px;
}
</style>