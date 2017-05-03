<template>
	<div>
		<div>
			<h2>Step4: 添加非功能性需求</h2>
		</div>

		<div>
			<label>系统对安全性的要求</label>
			<input type="radio" name="" value="">1</br>
			<input type="radio" name="" value="">2</br>
			<input type="radio" name="" value="">3</br>
			<input type="radio" name="" value="">4</br>
			<input type="radio" name="" value="">5</br>
		</div>

		<div>
			<label>系统对可靠性的要求</label>
			<input type="radio" name="" value="">1</br>
			<input type="radio" name="" value="">2</br>
			<input type="radio" name="" value="">3</br>
			<input type="radio" name="" value="">4</br>
			<input type="radio" name="" value="">5</br>
		</div>

		<div class="form-group">
			<label class="col-sm-2 control-label">系统的开发语言</label>
			<div class="col-md-3">
				<select class="form-control m-b"  required>
		            <option>JAVA</option>
		            <option>JavaScript</option>
		            <option>C</option>
		            <option>C++</option>
		            <option>HTML/CSS</option>
		        </select>
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-2 control-label">系统的类型</label>
			<div class="col-md-3">
				<select class="form-control m-b"  required>
		            <option>Windows</option>
		            <option>微信公众号</option>
		            <option>Mac OS X</option>
		            <option>iOS</option>
		            <option>Android</option>
		        </select>
			</div>
		</div>

		<div class="">
			<button class="" v-on:click="jumpTo">上一步</button>
			<button class="" type="submit">提交</button>
			<button class="" type="submit">保存</button>
			<!-- <button class="btn btn-white" name="clear" ng-click="nextStep()">4-下一步</button> -->
		</div>
	</div>
</template>

<script>
    export default {
	    data: {
	        
	    },
        methods: {
            jumpTo: function(){
                this.$router.push({ path: '/estimationstep3'})
            }
        }
	}
</script>

