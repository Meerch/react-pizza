import React from 'react'
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="396" y="489" rx="0" ry="0" width="343" height="149" />
            <rect x="2" y="250" rx="6" ry="6" width="274" height="33" />
            <rect x="2" y="290" rx="6" ry="6" width="274" height="84" />
            <rect x="8" y="393" rx="6" ry="6" width="77" height="32" />
            <circle cx="138" cy="115" r="113" />
            <rect x="148" y="389" rx="20" ry="20" width="126" height="43" />
        </ContentLoader>
    )
}

export default LoadingBlock