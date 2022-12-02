export interface LinkData {
  name: string
  route?: string
  action?: Function
  hasDropdown?: boolean
  dropNames?: {
    text: string
    to: string
  }[]
}

export interface CarouselData {
  src: string
}

export interface MenuItem {
  title: string
  class?: string
  to?: string
  icon?: string
  disabled?: boolean
  nested_menu?: MenuItem[]
}
