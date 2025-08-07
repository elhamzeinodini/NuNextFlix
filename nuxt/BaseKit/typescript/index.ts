/* --------------------------------- sidebar -------------------------------- */

interface ISidebarItemsChildren {
    id: number
    name: string
    link: string
}

export interface ISidebarItems {
    id: number
    parent: string
    children: ISidebarItemsChildren[]
}

/* --------------------------------- tooltip -------------------------------- */
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

export type TooltipEffect = 'dark' | 'light' 

export interface TooltipOptions {
    content: string
    effect: TooltipEffect
    trigger: TooltipPlacement
    id: number
}

