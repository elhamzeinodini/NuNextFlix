export default defineNuxtPlugin(($config) => {
  const {
    selectedFontMultiplier,
    selectedDisplayMode,
    selectedAccentColor,
    isDisplayDark
  } = storeToRefs(useAppStore())

  const accentColors = [
    {
      color_base: '#1951FA',
      color_dark: '#1441CE',
      color_light: '#4774FB',
      color_bg_light: '#D1DCFE',
      color_bg_dark: '#06104B'
    },
    {
      color_base: '#0096C7',
      color_dark: '#0078A5',
      color_light: '#33ABD2',
      color_bg_light: '#CCEAF4',
      color_bg_dark: '#011E41'
    },
    {
      color_base: '#00897B',
      color_dark: '#006E68',
      color_light: '#33A195',
      color_bg_light: '#CCE7E5',
      color_bg_dark: '#011B32'
    },
    {
      color_base: '#7E57C2',
      color_dark: '#6546A1',
      color_light: '#9879CE',
      color_bg_light: '#E5DDF3',
      color_bg_dark: '#1A1140'
    },
    {
      color_base: '#F06292',
      color_dark: '#C04E7B',
      color_light: '#F381A8',
      color_bg_light: '#FCE0E9',
      color_bg_dark: '#311436'
    },
    {
      color_base: '#FBB300',
      color_dark: '#C98F06',
      color_light: '#FCC233',
      color_bg_light: '#FEF0CC',
      color_bg_dark: '#332419'
    },
    {
      color_base: '#C2185B',
      color_dark: '#9B134F',
      color_light: '#CE467C',
      color_bg_light: '#F3D1DE',
      color_bg_dark: '#28052B'
    },
    {
      color_base: '#8D6E63',
      color_dark: '#715855',
      color_light: '#A48B82',
      color_bg_light: '#E8E2E0',
      color_bg_dark: '#1D162D'
    },
    {
      color_base: '#EF6C00',
      color_dark: '#BF5606',
      color_light: '#F28933',
      color_bg_light: '#FCE2CC',
      color_bg_dark: '#311619'
    },
    {
      color_base: '#9E9D24',
      color_dark: '#7E7E23',
      color_light: '#B1B150',
      color_bg_light: '#ECEBD3',
      color_bg_dark: '#211F20'
    }
  ]

  /* -------------------------------- font size -------------------------------- */
  function changeFontSizeMultiplier(x: number) {
    selectedFontMultiplier.value = x
    localStorage.setItem($config.public.FONT_SIZE_MULTIPLIER, x.toString())
    document.documentElement.style.setProperty('--font-size-multiplier', x.toString())
  }

  /* ------------------------------ theme colors ------------------------------ */
  function setThemeColors(mode: 'dark' | 'light') {
    if (mode === 'dark') {
      isDisplayDark.value = true

      document.documentElement.style.setProperty('--clr-section-bg', '#01001F')
      document.documentElement.style.setProperty('--clr-main-bg-light', '#060523')
      document.documentElement.style.setProperty('--clr-main-bg', '#0E0D2A')
      document.documentElement.style.setProperty('--clr-tertiary-bg', '#1A1935')
      document.documentElement.style.setProperty('--clr-fourthly-bg', '#010223')
      document.documentElement.style.setProperty('--clr-text-primary', '#E5E5E8')
      document.documentElement.style.setProperty('--clr-text-secondary', '#80808F')
      document.documentElement.style.setProperty('--clr-border', '#272640')
      document.documentElement.style.setProperty('--clr-border-active', '#676679')
      document.documentElement.style.setProperty('--clr-disable', '#34334C')
      document.documentElement.style.setProperty('--clr-on-disable', '#80808F')
      document.documentElement.style.setProperty('--clr-skeleton', '#34334C')
      document.documentElement.style.setProperty('--clr-shadow-color', '#FFFFFF19')
      document.documentElement.style.setProperty('--clr-image-opacity', '#01001F7f')
      document.documentElement.style.setProperty('--clr-on-image-primary', '#FFFFFF')
      document.documentElement.style.setProperty('--clr-on-image-secondary', '#D9D9DE')

      document.documentElement.style.setProperty('--clr-primary-bg', '#06104B')
      document.documentElement.style.setProperty('--clr-secondary-bg', '#472F2B')
      document.documentElement.style.setProperty('--clr-success-bg', '#0C1C25')
      document.documentElement.style.setProperty('--clr-info-bg', '#061843')
      document.documentElement.style.setProperty('--clr-warning-bg', '#342019')
      document.documentElement.style.setProperty('--clr-danger-bg', '#2B0922')
    } else {
      isDisplayDark.value = false

      document.documentElement.style.setProperty('--clr-section-bg', '#ffffff')
      document.documentElement.style.setProperty('--clr-main-bg-light', '#fafafb')
      document.documentElement.style.setProperty('--clr-main-bg', '#f2f2f4')
      document.documentElement.style.setProperty('--clr-tertiary-bg', '#e5e5e8')
      document.documentElement.style.setProperty('--clr-fourthly-bg', '#fafcff')
      document.documentElement.style.setProperty('--clr-text-primary', '#0e0d2a')
      document.documentElement.style.setProperty('--clr-text-secondary', '#80808f')
      document.documentElement.style.setProperty('--clr-border', '#e5e5e8')
      document.documentElement.style.setProperty('--clr-border-active', '#8c8c9a')
      document.documentElement.style.setProperty('--clr-disable', '#ccccd2')
      document.documentElement.style.setProperty('--clr-on-disable', '#80808f')
      document.documentElement.style.setProperty('--clr-skeleton', '#ccccd2')
      document.documentElement.style.setProperty('--clr-shadow-color', '#01001f19')
      document.documentElement.style.setProperty('--clr-image-opacity', '#01001f7f')
      document.documentElement.style.setProperty('--clr-on-image-primary', '#ffffff')
      document.documentElement.style.setProperty('--clr-on-image-secondary', '#d9d9de')

      document.documentElement.style.setProperty('--clr-primary-bg', '#d1dcfe')
      document.documentElement.style.setProperty('--clr-secondary-bg', '#fee6e2')
      document.documentElement.style.setProperty('--clr-success-bg', '#d7e8d8')
      document.documentElement.style.setProperty('--clr-info-bg', '#d1e4f6')
      document.documentElement.style.setProperty('--clr-warning-bg', '#ffeccc')
      document.documentElement.style.setProperty('--clr-danger-bg', '#f6d5d5')
    }
  }

  /* ------------------------------ display mode ------------------------------- */
  function setDisplayMode(mode: 'light' | 'dark' | 'system') {
    localStorage.setItem($config.public.DISPLAY_MODE, mode)

    if (mode === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeColors('dark')
      } else {
        setThemeColors('light')
      }
    } else if (mode === 'dark') {
      setThemeColors('dark')
    } else {
      setThemeColors('light')
    }
  }

  /* ------------------------------ accent colors ----------------------------- */
  function setAccentColors(colorIndex: number) {
    selectedAccentColor.value = colorIndex
    localStorage.setItem($config.public.ACCENT_COLOR_INDEX, colorIndex.toString())

    document.documentElement.style.setProperty('--clr-primary', accentColors[colorIndex].color_base || '#1951fa')
    document.documentElement.style.setProperty('--clr-primary-dark', accentColors[colorIndex].color_dark || '#1441ce')
    document.documentElement.style.setProperty('--clr-primary-light', accentColors[colorIndex].color_light || '#4774fb')
    document.documentElement.style.setProperty(
      '--clr-primary-bg',
      isDisplayDark.value
        ? (accentColors[colorIndex].color_bg_dark || '#06104B')
        : (accentColors[colorIndex].color_bg_light || '#d1dcfe')
    )
  }

  /* ------------------------------ set font size ----------------------------- */
  selectedFontMultiplier.value = Number(localStorage.getItem($config.public.FONT_SIZE_MULTIPLIER) || 1)
  changeFontSizeMultiplier(selectedFontMultiplier.value)

  /* ---------------------------- set display mode ---------------------------- */
  selectedDisplayMode.value = (localStorage.getItem($config.public.DISPLAY_MODE) || 'system') as 'light' | 'dark' | 'system'
  setDisplayMode(selectedDisplayMode.value)

  /* ---------------------------- set accent color ---------------------------- */
  selectedAccentColor.value = Number(localStorage.getItem($config.public.ACCENT_COLOR_INDEX) || 0)
  setAccentColors(selectedAccentColor.value)

  return {
    provide: {
      changeFontSizeMultiplier,
      setDisplayMode,
      accentColors,
      setAccentColors
    }
  }
})
