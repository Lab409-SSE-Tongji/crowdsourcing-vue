<template>
<div>
	<h2>Step1: 创建您的项目</h2>

	<div class="">
		<label class="">项目名称：</label>
		<input type="text" name="project_name" required>
	</div>

	<div class="">
		<label class="">项目简介：</label>
		<textarea class=""></textarea required>
	</div>

	<div>
		<button class="btn btn-white" name="clear" v-on:click="jumpTo">1-下一步</button>
	</div>
</div>
</template>

<script>
    export default {
	    data: {
	        
	    },
        methods: {
            jumpTo: function(){
                this.$router.push({ path: '/estimationstep2'})
            }
        }
	}
</script>