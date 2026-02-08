import { Component } from 'solid-js'

export const Sprite: Component<{ id: string }> = P => {
    return <use href={'/public_staff/s.svg#' + P.id} />
}

export const CloseIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
    >
        <path d='M18 6 6 18' />
        <path d='m6 6 12 12' />
    </svg>
)

export const Check2Icon = () => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height={25}
        width={25}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill='none'
            stroke-linecap='square'
            stroke-miterlimit='10'
            stroke-width='44'
            d='M416 128 192 384l-96-96'
        ></path>
    </svg>
)

export const ResetIcon = () => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 24 24'
        height='25'
        width='25'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M22 12C22 17.5228 17.5229 22 12 22C6.4772 22 2 17.5228 2 12C2 6.47715 6.4772 2 12 2V4C7.5817 4 4 7.58172 4 12C4 16.4183 7.5817 20 12 20C16.4183 20 20 16.4183 20 12C20 9.25022 18.6127 6.82447 16.4998 5.38451L16.5 8H14.5V2L20.5 2V4L18.0008 3.99989C20.4293 5.82434 22 8.72873 22 12Z'></path>
    </svg>
)

export const WarningIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
        fill='none'
    >
        <path
            d='M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z'
            stroke='#000000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
        <path
            d='M12 9V13.5'
            stroke='#000000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
        <path
            d='M12 16.9922V17.0022'
            stroke='#000000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
    </svg>
)
