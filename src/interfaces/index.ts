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
