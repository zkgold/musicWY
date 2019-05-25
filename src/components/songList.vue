<template>
	<div id='appC'>
		<div class="box_title">
			<div class="title1">
				<span>歌曲列表</span>
				<span class="box_count">100首歌</span>
			</div>
			<div class="title2">
				<span>播放次数</span>
				<span class="box_count">212121次</span>
			</div>
		</div>
		<div class="box_table">
			<div class="table_title">
				<div class="table_id"></div>
				<div class="table_cont">
					<span>标题</span>
				</div>
				<div class="table_time">
					<span>时长</span>
				</div>
				<div class="table_songer">
					<span>歌手</span>
				</div>
			</div>
			<ul>
				<li v-for="item in songList">
					<div class="table_id">
						{{item.id}}
					</div>
					<div class="table_cont">
						{{item.cont}}
					</div>
					<div class="table_time">
						{{item.time}}
					</div>
					<div class="table_songer">
						{{item.songer}}
					</div>
				</li>
			</ul>
			
		</div>
	</div>
</template>
<script>
export default {
	name: 'songList',
	props: ['songList'],
	data: function() {
		return {
			// musics: this.songList,
		}
	}
}
</script>
<style lang='scss' scoped>
#appC{
	width: 100%;
	min-width: 400px;
}
.box_title{
	width: 100%;
	height: 35px;
	line-height: 35px;
	font-size: 16px;
	overflow: hidden;
	border-bottom: 2px solid #ff0000;
	.title1{
		float: left;
		span{
			margin: 0 5px;
		}
	}
	.title2{
		float: right;
		span{
			margin: 0 5px;
		}
	}
	.box_count{
		font-size: 12px;
	}

}
.box_table{
	width: 100%;
	position: relative;
	.table_title{
		border: 1px solid #000111;
		width: 100%;
		height: 39px;
		.table_id{
			position: absolute;
			top:0;
			left: 0;
			width: 77px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #000111;
		}
		.table_cont{
			position: absolute;
			top:0;
			left: 78px;
			width: 395px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #000111;
		}
		.table_time{
			position: absolute;
			top:0;
			left: 474px;
			width: 91px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #000111;
		}
		.table_songer{
			position: absolute;
			top:0;
			left: 566px;
			width: 93px;
			height: 39px;
			line-height: 39px;
			display: inline-block;
		}					

	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		height: auto;
		li {
			height: 35px;
			.table_id{
				width: 78px;
				height: 100%;
				line-height: 35px;
				display: inline-block;
			}
			.table_cont{
				width: 396px;
				height: 100%;
				line-height: 35px;
				display: inline-block;
			}
			.table_time{
				width: 92px;
				height: 100%;
				line-height: 35px;
				display: inline-block;
			}
			.table_songer{
				width: 93px;
				height: 100%;
				line-height: 35px;
				display: inline-block;
			}
			&:nth-child(odd){
				background-color: #f5f5f5;
			}
			&:nth-child(even){
				background-color: #fff;
			}

		}
	}
}
</style>