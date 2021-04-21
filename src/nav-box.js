import bezierEasing from 'bezier-easing'

function parseSizeUnit(unit) {
  if (unit) {
    const isPercent = /\d+%/.test(unit)
    const size = parseInt(unit, 10)
    return size ? (isPercent ? `${size}%` : `${size}px`) : null
  }
  return null
}

export default {
  name: 'NavBox',

  props: {
    height: {
      type: [String, Number],
      default: null
    },
    navWidth: {
      type: [String, Number],
      default: null
    },
    duration: {
      type: Number,
      default: 400
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    foldable: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      navs: [],
      activeItem: null,
      lastActiveItem: null,
      scrollByNav: false
    }
  },

  computed: {
    internalHeight() {
      return parseSizeUnit(this.height)
    },
    internalNavWidth() {
      return parseSizeUnit(this.navWidth)
    }
  },

  mounted() {
    this.scrollContainer = this.$refs.content
    this.scrollContainer.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    this.scrollContainer.removeEventListener('scroll', this.onScroll)
    window.cancelAnimationFrame(this.scrollAnimationFrame)
  },

  methods: {
    addNav(item) {
      this.navs.push(item)
    },

    async navClick(nav) {
      const target = nav.$el

      if (!target) {
        return
      }

      this.scrollByNav = true
      this.activeItem = nav
      await this.scrollTo(target)
      this.scrollByNav = false
    },

    scrollTo(target) {
      return new Promise(resolve => {
        const targetDistanceFromTop = this.getOffsetTop(target)
        const startingY = this.scrollContainer.scrollTop
        const difference = targetDistanceFromTop - startingY
        const easing = bezierEasing(0.5, 0, 0.35, 1)
        let start = null

        const step = timestamp => {
          if (!start) start = timestamp
          let progress = timestamp - start
          let progressPercentage = progress / this.duration
          if (progress >= this.duration) progress = this.duration
          if (progressPercentage >= 1) progressPercentage = 1
          const perTick =
            startingY +
            easing(progressPercentage) * (difference - this.offsetTop)
          this.scrollContainer.scrollTo(0, perTick)
          if (progress < this.duration) {
            this.scrollAnimationFrame = window.requestAnimationFrame(step)
          } else {
            this.scrollContainer.addEventListener('scroll', this.onScroll)
            resolve()
          }
        }

        window.requestAnimationFrame(step)
      })
    },

    getOffsetTop(target) {
      let yPosition = 0
      let nextElement = target
      while (nextElement && nextElement !== this.scrollContainer) {
        yPosition += nextElement.offsetTop
        nextElement = nextElement.offsetParent
      }
      return yPosition
    },

    onScroll(event) {
      if (!this.scrollByNav) {
        this.activeItem = this.getItemInsideWindow()
        if (this.activeItem !== this.lastActiveItem) {
          this.$emit(
            'activeChanged',
            event,
            this.activeItem,
            this.lastActiveItem
          )
          this.lastActiveItem = this.activeItem
        }
      }
    },

    getItemInsideWindow() {
      let activeItem
      this.navs.forEach(item => {
        const target = item.$el
        if (!target) return
        const distanceFromTop = this.scrollContainer.scrollTop
        const isScreenPastSection =
          distanceFromTop >= this.getOffsetTop(target) - this.offsetTop
        const isScreenBeforeSectionEnd =
          distanceFromTop <
          this.getOffsetTop(target) - this.offsetTop + target.offsetHeight
        if (isScreenPastSection && isScreenBeforeSectionEnd) activeItem = item
      })
      return activeItem
    }
  },

  render() {
    return (
      <div
        class={[
          'nav-box__wrapper',
          { 'nav-box__wrapper--foldable': this.foldable }
        ]}
        style={{ height: this.internalHeight }}
      >
        <div ref="content" class="nav-box__content">
          {this.$slots.default}
        </div>
        <div class="nav-box__navs" style={{ width: this.internalNavWidth }}>
          <ul>
            {this.navs.map((nav, index) => (
              <li
                key={index}
                class={[
                  'nav-box__nav',
                  {
                    'nav-box__nav--active': this.activeItem
                      ? this.activeItem === nav
                      : index === 0
                  }
                ]}
                on-click={() => this.navClick(nav)}
              >
                {nav.$slots.title ? nav.$slots.title : nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
