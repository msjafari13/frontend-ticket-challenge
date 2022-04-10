import React, { useEffect, useState } from 'react';
import { getMapData, getMaps } from '../../helpers/apicall';
import style from './Stadium.module.scss';
import StadiumComponent from '../../components/stadium/stadium';

const Stadium = () =>{
    const [data,setData] = useState({mapData: [],mapIndex: 0});
    useEffect( async ()=>{
        const map_ids = await getMaps();
        const randomMapIndex = map_ids.map_ids[Math.floor(Math.random() * 10)];
        const mapData = await getMapData(randomMapIndex);
        setData({mapData: mapData.data, mapIndex: map_ids.map_ids.indexOf(randomMapIndex)});
    },[]);
    return(
        <div className={style.stadiumPage}>
            <div className={style.container}>
                <div className={style.header}>
                    <h2 className={style.title}> ورزشگاه {data.mapIndex}</h2>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.ticketListContainer}>
                    {/*todo: add ticket list */}
                </div>
                <div className={style.mapContainer}>
                    <StadiumComponent 
                        data={data.mapData} />
                </div>
            </div>
        </div>
    )
}

export default Stadium;