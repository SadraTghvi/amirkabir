import { Component, createSignal, For, JSX, onCleanup } from 'solid-js'
import './style/alert.scss'

import { Check2Icon, CloseIcon, WarningIcon } from 'icons'
import { alert_state, AlertModel, delAlert } from 'store/user'

const ALERT_ICON: {
    [x in AlertModel['type']]: () => JSX.Element
} = {
    info: () => <WarningIcon />,
    error: () => <CloseIcon />,
    success: () => <Check2Icon />,
}

const Alerts: Component = () => {
    return (
        <div class='alerts' classList={{ show: alert_state.alerts.length > 0 }}>
            <For each={alert_state.alerts}>
                {a => (
                    <Alert
                        a={a}
                        onDel={() => {
                            delAlert(a.id)
                        }}
                    />
                )}
            </For>
        </div>
    )
}
export default Alerts

const THRESHOLD = 80
interface alertProps {
    a: AlertModel
    onDel(): void
}

const Alert: Component<alertProps> = P => {
    const [hide, setHide] = createSignal(false)
    let interval: ReturnType<typeof setTimeout>
    let interval2: ReturnType<typeof setTimeout>

    onCleanup(() => {
        clearTimeout(interval)
        clearTimeout(interval2)
    })

    let startX = 0
    let startY = 0
    let axisLock: 'x' | 'y' | null = null

    const onTouchStart = (e: TouchEvent) => {
        startX = e.touches[0]!.clientX
        startY = e.touches[0]!.clientY
        axisLock = null

        const el = e.currentTarget as HTMLElement
        el.style.transition = 'none'
        el.style.willChange = 'transform, opacity'
    }

    const onTouchMove = (e: TouchEvent) => {
        const deltaX = e.touches[0]!.clientX - startX
        const deltaY = e.touches[0]!.clientY - startY

        // Determine axis on first move
        if (!axisLock) {
            axisLock = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y'
        }

        const el = e.currentTarget as HTMLElement
        const moveX = axisLock === 'x' ? deltaX : 0
        const moveY = axisLock === 'y' ? deltaY : 0
        el.style.transform = `translate(${moveX}px, ${moveY}px)`

        // Fade out based on drag distance along locked axis
        const dist = axisLock === 'x' ? Math.abs(moveX) : Math.abs(moveY)
        const opacity = Math.max(0, 1 - dist / 150)
        el.style.opacity = `${opacity}`
    }

    const onTouchEnd = (e: TouchEvent) => {
        const deltaX = e.changedTouches[0]!.clientX - startX
        const deltaY = e.changedTouches[0]!.clientY - startY
        const el = e.currentTarget as HTMLElement

        const dist = axisLock === 'x' ? deltaX : deltaY
        if (Math.abs(dist) > THRESHOLD) {
            // animate out along locked axis
            el.style.transition = 'transform 0.2s ease, opacity 0.2s ease'
            const extra = 3 * dist
            const outX = axisLock === 'x' ? extra : 0
            const outY = axisLock === 'y' ? extra : 0
            el.style.transform = `translate(${outX}px, ${outY}px)`
            el.style.opacity = '0'
            interval2 = setTimeout(() => P.onDel(), 200)
        } else {
            // revert
            el.style.transition = 'transform 0.2s ease, opacity 0.2s ease'
            el.style.transform = 'translate(0, 0)'
            el.style.opacity = '1'
        }

        el.style.willChange = 'auto'
    }

    return (
        <div
            class={`alert-container ${P.a.type}`}
            ontouchstart={onTouchStart}
            ontouchmove={onTouchMove}
            ontouchend={onTouchEnd}
            onclick={() => {
                setHide(true)
                interval = setTimeout(() => P.onDel(), 500)
            }}
        >
            <div class={`alert`} classList={{ hide: hide() }}>
                <div class='head'>
                    <div class='icon'>{ALERT_ICON[P.a.type]()}</div>
                    <div class='content description'>
                        <h3>{P.a.subject}</h3>
                    </div>
                </div>
                {/* <Show when={P.a.content}>
                    <div class='body description'>
                        <p>{P.a.content}</p>
                    </div>
                </Show> */}

                <div class='alert-dot-container'>
                    <div
                        class='alert-dot'
                        onanimationend={() => {
                            if (hide()) return
                            setHide(true)
                            interval = setTimeout(() => P.onDel(), 500)
                        }}
                        style={{ 'animation-duration': `${P.a.timeout}s` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
