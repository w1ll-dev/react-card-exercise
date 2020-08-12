import React, { useState, useEffect } from 'react'

const circleConfig = {
    viewBox: '0 0 38 38',
    size: 100,
    x: '19',
    y: '19',
    radio: '15.91549430918954'
    // radio: `${raio}`
    // radio: '20'
};

const CircularProgressBarBase = ({
    trailStrokeColor,
    strokeColor,
    percentage,
    innerText
}) => {
    const [progressBar, setProgressBar] = useState(0);
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, 5);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    const returnColorWithPercent = percent => {
        if(percent < 75)
            return "green"
        else if(percent < 100)    
            return "yellow"
        else    
            return "red"
    }
    const returnPercent = percent => {
        if(percent > 100)
            return `${(progressBar - 100)} ${100 - (progressBar - 100)}`
        else   
            return `${progressBar} ${100 - progressBar}`
    }
    return <figure>
        <svg viewBox={circleConfig.viewBox} width={circleConfig.size} height={circleConfig.size}>
            <circle
                className="ring"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke={percentage > 100 ? "#ff726f" : "#eeeeee"}
                // stroke={"#eeeeee"}
                strokeWidth={4}
            />

            <circle
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke={returnColorWithPercent(percentage)}
                strokeDasharray={returnPercent(percentage)}
                strokeDashoffset="25"
                strokeWidth={4}
            />
        </svg>
        <g className="circle-label">
            <text x="80%" y="50%" className="circle-percent">
                {percentage}
    </text>
            <text x="50%" y="50%" className="circle-text">
                complete
    </text>
        </g>
    </figure>
}

export default CircularProgressBarBase