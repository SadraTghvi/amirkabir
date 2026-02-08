import { createUniqueId } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { deepcopy } from 'utils/tools'

export type SelfModel = {
    logged_in: boolean
}

export const SELF_DEFAULT: SelfModel = {
    logged_in: false,
}

const [self, setSelf] = createStore<SelfModel>(deepcopy(SELF_DEFAULT))

export function logoutUser() {
    setSelf('logged_in', false)
}

export { self, setSelf }

type AlertModel = {
    type: 'info' | 'error' | 'success'
    id: string
    subject: string
    // content?: string
    timeout: number
}

type AlertState = {
    alerts: AlertModel[]
}

const [alert_state, setAlertState] = createStore<AlertState>({
    alerts: [],
})

export function addAlert(props: Omit<AlertModel, 'id'>) {
    if (alert_state.alerts.length >= 3) return

    const id = createUniqueId()
    setAlertState(
        produce(s => {
            s.alerts.unshift({ ...props, id })
        })
    )
}

export function delAlert(id: string) {
    const index = alert_state.alerts.findIndex(a => a.id === id)

    if (index === -1) return

    setAlertState(
        produce(s => {
            s.alerts.splice(index, 1)
        })
    )
}

export { type AlertModel, alert_state }
