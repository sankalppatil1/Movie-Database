import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ResetScroll = ({ children }: { children: any }) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return <>{children}</>
}
