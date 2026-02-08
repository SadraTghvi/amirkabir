import { Component } from 'solid-js'

import { createStore } from 'solid-js/store'
import { addAlert, setSelf } from 'store/user'
import { deepcopy, sleep } from 'utils/tools'
import './style/login.scss'

const USERNAME = '402130170884'
const PASS = '0150855338'

const Login: Component = () => {
    let formRef: HTMLFormElement

    const CAPTCHAS: { url: string; code: string }[] = [
        {
            code: 'mw4vc',
            url: '/public/imgs/captchas/1.png',
        },
        {
            code: 'gtch3',
            url: '/public/imgs/captchas/2.png',
        },
        {
            code: 'dktfk',
            url: '/public/imgs/captchas/3.png',
        },
        {
            code: 'dyzha',
            url: '/public/imgs/captchas/4.png',
        },
    ]
    const activeCaptcha = CAPTCHAS[Math.floor(Math.random() * CAPTCHAS.length)]!

    type STATE = {
        username: string
        password: string
        captcha: string

        loading: boolean
    }

    const [state, setState] = createStore<STATE>({
        username: '',
        password: '',
        captcha: '',
        loading: false,
    })

    const submit = async () => {
        const d = deepcopy(state)

        let capCode = d.captcha.toLowerCase()

        if (d.username != USERNAME || d.password != PASS) {
            addAlert({
                type: 'error',
                subject: 'نام‌کاربری یا کلمه عبور اشتباه است!',
                timeout: 3,
            })
            return
        }

        if (!capCode) {
            addAlert({
                type: 'error',
                subject: 'کد تصویر را وارد کنید!',
                timeout: 3,
            })
            return
        }
        if (capCode != activeCaptcha.code) {
            addAlert({
                type: 'error',
                subject: 'کد تصویر اشتباه است!',
                timeout: 3,
            })
            return
        }

        setState('loading', true)

        formRef.blur()

        await sleep(2000)

        setSelf('logged_in', true)
    }

    return (
        <div class='login-page-container'>
            <h1 class='title_hero'>پنل دانشجویی</h1>

            <form
                ref={e => (formRef = e)}
                onsubmit={e => {
                    e.preventDefault()
                    submit()
                }}
                class='login-card-container'
                classList={{ loading: state.loading }}
            >
                <img
                    src='/public/imgs/logo.png'
                    draggable={false}
                    loading='eager'
                />

                <div class='notes'>
                    <div class='notes-head title'>! توجه !</div>

                    <ol class='title_smaller'>
                        <li>
                            تاریخ انتخاب واحد دانشجویان <strong>26 بهمن</strong>{' '}
                            است.
                        </li>
                        <li>
                            دسترسی به سایت تا زمان انتخاب واحد به{' '}
                            <strong>بخش کارنامه محدود شده.</strong>
                        </li>
                    </ol>
                </div>

                <div class='inps'>
                    <div class='inp-holder'>
                        <input
                            class='title_smaller'
                            placeholder='نام کاربری... (شماره دانشجو)'
                            type='text'
                            name='j_username'
                            autocomplete='j_username'
                            value={state.username}
                            onchange={e =>
                                setState('username', e.currentTarget.value)
                            }
                        />
                    </div>
                    <div class='inp-holder'>
                        <input
                            class='title_smaller'
                            placeholder='کلمه عبور...'
                            type='text'
                            name='temp_j_password'
                            autocomplete='temp_j_password'
                            value={state.password}
                            onchange={e =>
                                setState('password', e.currentTarget.value)
                            }
                        />
                    </div>
                    <div class='captcha-container'>
                        <input
                            type='text'
                            placeholder='کد تصویر'
                            class='title_smaller'
                            value={state.captcha}
                            onchange={e =>
                                setState('captcha', e.currentTarget.value)
                            }
                        />

                        <img
                            src={activeCaptcha.url}
                            loading='lazy'
                            decoding='async'
                            class='captcha-img'
                            alt=''
                        />
                    </div>
                </div>

                <button class='cta title_small'>ورود</button>
            </form>
        </div>
    )
}

export default Login
