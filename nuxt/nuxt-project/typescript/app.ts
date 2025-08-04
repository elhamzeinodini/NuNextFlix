export type TooltipPlacement =
    'top' |
    'top-start' |
    'top-end' |
    'right' |
    'right-start' |
    'right-end' |
    'bottom' |
    'bottom-start' |
    'bottom-end' |
    'left' |
    'left-start' |
    'left-end' 

export interface TooltipOptions {
    content: string
    placement: string
    effect: 'dark' | 'light'
    trigger: TooltipPlacement
    id: number
}