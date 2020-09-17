<template>
  <div class="NodeType1">
    <el-form ref="form" :model="form" label-width="60px" label-suffix=":">
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary" @click="handleClick">确定</el-button>
      </el-form-item>
      <el-form-item prop="label" label="节点名">
        <el-input v-model="form.label"></el-input>
      </el-form-item>
      <el-form-item prop="description" label="描述">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NodeType1',
  props: ['node', 'editor'],
  data() {
    return {
      form: {
        label: this.node.label || 'timing',
        description: this.node.description || '',
      },
    }
  },
  created() {
    this.node.props = this.form
  },
  methods: {
    handleClick() {
      this.updateNodeLabel()
      this.node.description = this.node.props.description
      this.editor.updateNodeIsChanged(this.node.nodeId, true)
      this.editor.updateNodeIsErrored(this.node.nodeId, false)

      console.log(this.editor.traverseNode(this.node.nodeId))
      this.editor.showNodeHighlight(this.node.nodeId, true)

      setTimeout(() => {
        this.editor.showNodeHighlight(this.node.nodeId, false)
      }, 2000)
      this.$emit('nodeFormChange')
    },
    updateNodeLabel() {
      this.editor.updateNodeLabel(this.node.nodeId, this.form.label)
    },
  },
}
</script>

<style lang="less"></style>
