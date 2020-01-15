<template>
	<div class="out">
		<div class="ouninner">
			<div class="zhun" style="margin-bottom: 20px;margin-top: 100px;">
				<div>
					准考证号：
				</div>
				<input class="inputout" type="text" placeholder="请输入转考证号">
			</div>
			<div class="zhun">
				<div>
					密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：
				</div>
				<input class="inputout" type="text" placeholder="请输入转考证号">
			</div>
			<div class="deng">登陆</div>
		</div>


	</div>
</template>

<script>
	export default {

	}
</script>
<style>
	.deng{
		width: 300px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		margin: 0 auto;
		background: #00FFFF;
		margin-top: 40px;
		background: #00f3ff;
		
	}
	.out {
		overflow: hidden;
		width: 100%;
		height: 100%;
		background: url(../img/1.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	input {
		display: inline-block;
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
	}

	.zhun {
		margin: 0 auto;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	.inputout {

		padding-left: 10px;
		width: 300px;
		height: 40px;
		border-radius: 10px;
		/* border:1px solid #000000; */
	}

	.ouninner {
		background: rgba(255, 255, 255, 0.5);
		width: 460px;
		overflow: hidden;
		height: 400px;
		border-radius: 10px;
		margin: 0 auto;
		position: fixed;
		top:50%;
		left:50%;
		margin-left: -230px;
		margin-top: -200px;
	}
</style>
