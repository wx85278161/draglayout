<template>
  <div class="portal__preview el-card is-always-shadow">
    <div class="clearfix" style="padding:10px;">
      <h3>页面预览</h3>
      <el-button type="warning" icon="el-icon-close" style="position:absolute;top:25px;right:15px;" @click="close">关闭预览</el-button>
    </div>
    <el-row :gutter="10" v-for="(row,rowIndex) in contents" :key="rowIndex">
      <el-col v-for="(zone,zoneIndex) in row.zones" :key="zoneIndex" :md="zone.size">
        <div v-if="!zone.widgets.length">&nbsp;</div>
        <div v-for="(item,itemIndex) in zone.widgets" :key="itemIndex">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ayay from "@/components/widgets/index.js";
export default {
  name: "PortalPreview",
  props: {
    contents: Array
  },
  components: {
    ...ayay.components
  },
  methods: {
    close() {
      this.$emit("previewclose", false);//触发组件自定义函数
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.portal__preview {
  position: absolute;
  top: 10px;
  left: 1%;
  width: 98%;
  height: auto;
  min-height: 90%;
  padding: 0 15px 20px 15px;
  box-sizing: border-box;
  border: 20px solid #333;
}
</style>
