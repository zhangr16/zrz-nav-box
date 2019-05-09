<template>
  <div class="form-wrap">
    <div class="body">
      <nav-box height="400px" :foldable="true">
        <nav-box-pane>
          <div slot="title">Form-1 <strong style="color:#f90">(Html surport)</strong></div>
          <example-form />
        </nav-box-pane>
        <nav-box-pane title="Form-2 (Fold by default)" :fold="true">
          <example-form />
        </nav-box-pane>
        <nav-box-pane title="Form-3 (Can't fold)" :foldable="false">
          <example-form />
        </nav-box-pane>
      </nav-box>
    </div>
    <div class="footer">
      <button class="button button--submit">立即创建</button>
      <button class="button">取消</button>
    </div>
  </div>
</template>

<script>
import { NavBox, NavBoxPane } from '../src'
import ExampleForm from './example-form'

export default {
  name: 'app',

  components: {
    NavBox,
    NavBoxPane,
    ExampleForm
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.form-wrap {
  width: 800px;
  border: 1px solid #efefef;
  margin: 40px auto 0;
}
.form-wrap .body {
  padding: 16px;
}
.form-wrap .footer {
  padding: 16px;
  border-top: 1px solid #efefef;
  text-align: right;
}
.button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
}
.button--submit {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button + .button {
  margin-left: 10px;
}
</style>
