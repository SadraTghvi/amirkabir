import { render } from 'solid-js/web'

import { Route, Router } from '@solidjs/router'

import Alerts from 'comps/alert'
import Login from 'pages/login'
import { Component, lazy, Show } from 'solid-js'
import { self } from 'store/user'

import 'style/base.scss'
import 'style/config.scss'
import 'style/theme.scss'

const Root = () => <App />

const App = () => {
    return (
        <>
            <Show when={self.logged_in} fallback={<Login />}>
                <Router base='/'>
                    <DashRoutes />
                </Router>
            </Show>
            <Alerts />
        </>
    )
}

const DashRoutes = () => (
    <Route path='/' component={lazy(() => import('pages/dash'))}>
        <Route path='/' component={lazy(() => import('pages/profile'))} />

        <Route
            path='/karname'
            component={lazy(() => import('pages/courses'))}
        />

        <Route path='*path' component={NotAvaiable} />
    </Route>
)

const NotAvaiable: Component = () => {
    return <>404</>
}

render(Root, document.getElementById('root')!)
