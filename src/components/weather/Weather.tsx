import React, { FC } from 'react';
import { WeatherData } from '../../store/types';

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    return(
        <div>
            {data.name} - {data.sys.country}
        </div>
    )
}

export default Weather;