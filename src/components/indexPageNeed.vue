<template>
	<div class="picapp">
		<div class="wrap">
			<ul>
				<li v-for="(item,id) in obj" :key="id" @click="toList(item.id)">
					<img :src="item.pic">
					<span>{{item.name}}</span>
					<!-- <span class="wrap_author">{{item.author}}</span> -->
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'indexPageNeed',
	props: ['obj'],
	methods: {
		toList(id) {
			console.log('list',id)
		}
	}
}
</script>
<style lang='scss' scoped>
ul{
	list-style: none;
	margin: 10px 0;
	padding: 0;
	font-size: 12px;
	li{
		width: 25%;
		height: 234px;
		float: left;
		overflow: hidden;
		img{
			width: 140px;
			height: 140px;
			float: left;
			/*overflow: hidden;*/
			&:after{
				content: '';
				display: block;
				clear: both;
			}
		}
		span{
			float: left;
			width: 140px;
			margin-bottom: 3px;
			font-size: 14px;
			&:after{
				content: '';
				display: block;
				clear: both;
			}
			&:hover{
				text-decoration: underline;
			}
		}
	}
}
img{
	width: 140px;
	height: 140px;
}
</style>