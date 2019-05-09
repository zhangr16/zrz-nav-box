export default {
  name: 'NavBoxPane',

  props: {
    title: {
      type: String,
      default: null
    },
    foldable: {
      type: Boolean,
      default: true
    },
    fold: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      internalFoldable: false,
      internalFold: false
    }
  },

  computed: {
    owner() {
      return this.$parent.$options.name === 'NavBox' ? this.$parent : null
    },
    ownerFolable() {
      return this.owner ? this.owner.foldable : false
    }
  },

  watch: {
    foldable: {
      immediate: true,
      handler(val) {
        this.internalFoldable = this.ownerFolable ? val : false
      }
    },
    fold: {
      immediate: true,
      handler(val) {
        this.internalFold = this.ownerFolable ? val : false
      }
    },
    ownerFolable(val) {
      if (val) {
        this.internalFoldable = this.foldable
        this.internalFold = this.fold
      } else {
        this.internalFoldable = false
        this.internalFold = false
      }
    }
  },

  mounted() {
    this.owner && this.owner.addNav(this)
  },

  render() {
    return (
      <div
        class={['nav-box__pane', { 'nav-box__pane--fold': this.internalFold }]}
      >
        <div class="nav-box__header">
          <div class="nav-box__title">
            {this.$slots.title ? this.$slots.title : this.title}
          </div>
          {this.internalFoldable ? (
            <span
              class="nav-box__folder"
              on-click={() => (this.internalFold = !this.internalFold)}
            />
          ) : null}
        </div>
        <div
          class={[
            'nav-box__body',
            { 'nav-box__body--fold': this.internalFold }
          ]}
        >
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
