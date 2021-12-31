import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './approutes'

const RouteGenerator = () => {
    return (
        <Routes>
            {
                appRoutes.map(
                    r => {
                        return <Route key={r.id} path={r.routePath} element={<r.component />} />
                    })
            }
        </Routes>
    )
}

export default RouteGenerator
