import React, { useEffect } from 'react'

import PageInfo from '../../UI/PageInfo/PageInfo'

function Terms() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])


    return (
        <>
            <PageInfo>
                TERMS & CONDITIONS
            </PageInfo>
        </>
    )
}

export default Terms