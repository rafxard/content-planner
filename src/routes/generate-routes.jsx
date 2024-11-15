import { flattenDeep } from "lodash"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

const generateFlattenRoutes = (routes) => {
    if (!routes) return []

    return flattenDeep(routes?.map(({ routes: subRoutes, ...rest }) => [rest, generateFlattenRoutes(subRoutes)]))
}

export const renderRoutes = (mainRoutes) => {
    const Routes = () => {
        const layouts = mainRoutes?.map(({ layout: Layout, routes }, index) => {
            const subRoutes = generateFlattenRoutes(routes)

            return (
                <Route key={`layout-${index}`} element={<Layout />} >
                    <Route element={<ProtectedRoute isPublic={true} isAuthorized={true} />}>
                        {subRoutes.map(({ component: Component, path, name }) => {
                            return (
                                Component && path && (<Route key={name} element={<Component />} path={path} />)
                            )
                        })}
                    </Route>
                </Route>
            )
        });

        return <ReactRoutes>{layouts}</ReactRoutes>;
    }

    return Routes;
}