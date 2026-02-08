import { A, RouteSectionProps, useLocation } from '@solidjs/router'
import { Component, createRenderEffect, For, on } from 'solid-js'

import { LogoutIcon } from 'icons/dashboard'
import { logoutUser } from 'store/user'
import './style/dash.scss'

let ref: HTMLElement | undefined = undefined

export { ref as dashOutletRef }

export const scrollDashTo = (behavior: 'smooth' | 'instant', top: number) => {
    if (!ref) return

    ref.scrollTo({
        behavior,
        top,
    })
}

const Dash: Component<RouteSectionProps> = P => {
    let loc = useLocation()

    createRenderEffect(
        on(
            () => loc.pathname,
            () => {
                ref?.scrollTo({
                    top: 0,
                    behavior: 'instant',
                })
            }
        )
    )

    return (
        <main class='dashboard'>
            <Sidebar />

            <section class='dashboard-wrapper' ref={e => (ref = e)}>
                <div class='dashboard-header title_smaller'>
                    <div class='dash-row'>
                        <div class='holder'>نام کاربر:</div>
                        <div class='data'>سید امیررضا اخوان</div>
                    </div>
                    <div class='dash-row'>
                        <div class='holder'>کد دانشجو:</div>
                        <div class='data'>402130170884</div>
                    </div>
                    <div class='dash-row'>
                        <div class='holder'>نیمسال:</div>
                        <div class='data'>4022</div>
                    </div>
                </div>

                {P.children}
            </section>
        </main>
    )
}

const Sidebar: Component = () => {
    const loc = useLocation()

    type LINK = {
        link: string
        title: string
        url: string
    }
    const Links: LINK[] = [
        {
            url: '/public/imgs/sidebar/info.png',
            link: '/',
            title: 'مشخصات دانشجو',
        },
        {
            url: '/public/imgs/sidebar/karname.png',
            link: '/karname',
            title: 'کارنامه دانشجویی',
        },
        {
            url: '/public/imgs/sidebar/add.png',
            link: '/entekhab-vahed',
            title: 'انتخاب واحد',
        },
        {
            url: '/public/imgs/sidebar/term.png',
            link: '/hazf-ezafe',
            title: 'حذف و اضافه',
        },
        {
            url: '/public/imgs/sidebar/modiriat2.png',
            link: '/khadamat-mali',
            title: 'خدمات مالی',
        },
        {
            url: '/public/imgs/sidebar/mali.png',
            link: '/modiriat-pardakht-ha',
            title: 'مدیریت پرداخت ها',
        },
        {
            url: '/public/imgs/sidebar/ostad.png',
            link: '/arzeshyabi-ostad',
            title: 'ارزشیابی استاد',
        },
    ]

    // const AccountInfo: Component = () => {
    //     return <></>
    // }
    const Logout: Component = () => {
        return (
            <button
                class='sidebar-link logout title_small'
                onclick={logoutUser}
            >
                <LogoutIcon />

                <span>خروج از حساب</span>

                <div />
            </button>
        )
    }

    return (
        <aside class='sidebar-container'>
            <div class='uni-container'>
                <img
                    loading='lazy'
                    decoding='async'
                    src='/public/imgs/logo.png'
                />

                <p class='title_small'>
                    سامانه دانشجویی دانشگاه
                    <br />
                    امیرکبیر
                </p>
            </div>

            <div class='sidebar-links'>
                <For each={Links}>
                    {l => {
                        let is_active =
                            l.link == '/' &&
                            loc.pathname.replace('/panel', '') == '/'

                        return (
                            <A
                                href={l.link}
                                end={l.link == '/'}
                                class={`sidebar-link title_smaller ${is_active ? 'active' : ''}`}
                            >
                                <img src={l.url} alt='' />
                                <span>{l.title} </span>
                                <div />
                            </A>
                        )
                    }}
                </For>

                <Logout />
            </div>
        </aside>
    )
}

export default Dash
