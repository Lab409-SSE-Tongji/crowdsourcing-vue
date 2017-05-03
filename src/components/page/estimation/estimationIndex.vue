<template>
  <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
        
            <form class="m-t" role="form">
              
                <div align=center >     <!-- 暂时居中 -->
                    <button class="btn btn-white" name="clear" v-on:click="jumpToBaseForm">需求导入</button>
                </div>
                
                <div align=center>
                    <button class="btn btn-white" name="clear" v-on:click="jumpTo">高级估算</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>
    export default {
        data: {
            
        },
        methods: {
            jumpTo: function(){
                this.$router.push({ path: '/estimationstep1'})
            },
            jumpToBaseForm: function () {
                this.$router.push({ path: '../BaseForm'})
            }
        }
    }
</script>