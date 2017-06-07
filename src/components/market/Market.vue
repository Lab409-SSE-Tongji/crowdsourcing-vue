<template lang="html">
  <div class="table">
    <div class="header">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">CrowdSourcing</el-menu-item>
        <el-menu-item index="2">登录</el-menu-item>
        <el-menu-item index="3">注册</el-menu-item>
      </el-menu>
    </div>
      <el-row :gutter="20">
        <el-col :span="4" v-for="">
          <el-card >
            <img src="static/img/img.jpg" class="image">
            <div style="padding: 14px;">
              <span id="project_name">项目名称</span>
              <span id="project_type">项目类型</span>
              <div class="bottom clearfix">
                <span id="proposer">报名人数</span>
                <el-button>查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

      </el-row>

  </div>

</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="css">
.el-row{
  margin-top: 1%;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.el-button {
  padding: .5rem .5rem .5rem .5rem;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
#project_type{
  float:right;
}
</style>
