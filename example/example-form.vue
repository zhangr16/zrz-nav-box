<template>
  <div>
    <div class="form-item">
      <label class="form-item__label">活动名称</label>
      <div class="form-item__content">
        <div class="input">
          <input type="text" class="input__inner">
        </div>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item__label">活动区域</label>
      <div class="form-item__content">
        <div class="select">
          <div class="input">
            <input type="text" class="input__inner">
          </div>
        </div>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item__label">活动时间</label>
      <div class="form-item__content">
        <div style="width:40%;display:inline-block;padding-right:10px;">
          <div class="input" style="width: 100%;">
            <input type="text" name="" placeholder="选择日期" class="input__inner">
          </div>
        </div>
        <div style="width:40%;display:inline-block;">
          <div class="input" style="width: 100%;">
            <input type="text" name="" placeholder="选择日期" class="input__inner">
          </div>
        </div>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item__label">活动性质</label>
      <div class="form-item__content">
        <div aria-label="checkbox-group" class="checkbox-group">
          <label class="checkbox">
            <input type="checkbox" name="type" value="美食/餐厅线上活动">
            <span class="checkbox__label">网吧</span>
          </label>
          <label class="checkbox">
            <input type="checkbox" name="type" value="地推活动">
            <span class="checkbox__label">桌游</span>
          </label>
          <label class="checkbox">
            <input type="checkbox" name="type" value="地推活动">
            <span class="checkbox__label">探险</span>
          </label>
        </div>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item__label">特殊资源</label>
      <div class="form-item__content">
        <div class="radio-group">
          <label class="radio">
            <input type="radio" value="线上品牌商赞助">
            <span class="radio__label">线上品牌商赞助</span>
          </label>
          <label class="radio">
            <input type="radio" value="线下场地免费">
            <span class="radio__label">线下场地免费</span>
          </label>
        </div>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item__label">活动形式</label>
      <div class="form-item__content">
        <div class="textarea">
          <textarea class="textarea__inner" style="min-height: 50px;"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example-form'
}
</script>

<style>
.form-item {
  margin-bottom: 16px;
}
.form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 32px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  width: 80px;
}
.form-item__content {
  line-height: 32px;
  position: relative;
  font-size: 14px;
  margin-left: 80px;
}
.input {
  position: relative;
  font-size: 12px;
  display: inline-block;
  width: 100%;
}
.input__inner,
.textarea__inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding: 0 15px;
  width: 100%;
}
.checkbox,
.radio {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 20px;
}
.checkbox input,
.radio input {
  vertical-align: middle;
}
.checkbox__label,
.radio__label {
  padding-left: 6px;
}
</style>
