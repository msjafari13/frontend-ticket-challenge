import React, { useEffect, useState } from 'react';
import style from './stadium.module.scss';

import courtImg from "../../assets/court.jpg"

const Stadium = (props) =>{
    const [stadiumStage , setStadiumStage] = useState({top: [],right: [],left: [],bottom: []});

    const createStadium = (capacity) =>{
        let divider = Math.floor(capacity / 20);
        const stages = {
            top: 6*divider,
            right: 4*divider,
            left: 4*divider,
            bottom: 6*divider + (capacity - 20*divider)
        }
        console.log("salimmm",stages);
        Object.keys(stages).forEach((stage)=>{
            if(stage === "top" || stage === "bottom"){
                rowGenerator(7,stages[stage],stage)
            }else{
                rowGenerator(5,stages[stage],stage)
            }
        })
        
    }
    const marginCalculator = (capacity,stage) => {
        let divider = Math.floor(capacity / 20);
        const stages = {
            top: 6*divider,
            right: 4*divider,
            left: 4*divider,
            bottom: 6*divider + (capacity - 20*divider)
        }
        switch (stage) {
            case 'top':
                return 0;
            case 'right':
                return stages.top;
            case 'bottom':
                return stages.top + stages.right;
            case 'left':
                return stages.top + stages.right + stages.bottom;
            default:
                return 0;
        }
    }
    const rowGenerator = (startSeatsCount, count , stage) =>{
        console.log("salim rowGenerator",stage);
        let rowArray = [];
        let counter = 1;
        let i=0 
        while(counter <= count){
            let temp = []
            for(let j=0 ; j<i+startSeatsCount ; j++){
                temp.push(counter + marginCalculator(props.data.length,stage));
                counter++;
                if(counter > count){
                    break;
                }
            }
            rowArray.push(temp)
            i = i+2;
        }
        let stageSections = []
            {rowArray.map((row)=>
                stageSections.push(<div className={style.rowConatiner}>
                    {row.map((item)=>
                        <span className={style.section}>{item}</span>
                    )}
                </div>)
            )}
        let stadiumStageTemp = {...stadiumStage};
        if(stage === "top" || stage === "right"){
            Object.assign(stadiumStageTemp[stage], stageSections.reverse())
        }else{
            Object.assign(stadiumStageTemp[stage], stageSections)
        }
        setStadiumStage(stadiumStageTemp);
    }
    useEffect(()=>{
        if(props.data){
            createStadium(props.data.length);
        }
    },[props.data])
    console.log("salim sss",props);
    return(
        <div className={style.stadiumContainer}>
            <div className={style.topStageContainer}>
                {stadiumStage.top.map((row)=>row)}
            </div>
            <div className={style.leftAndRightStageContainer}>
                <div className={style.rightStageContainer}>
                    {stadiumStage.right.map((row)=>row)}
                    {/* {rowGenerator(8,45,"top").map((row)=>row)} */}
                </div>
                <div className={style.courtContainer}>
                    <img src={courtImg} alt="court image" />
                </div>
                <div className={style.leftStageContainer}>
                {stadiumStage.left.map((row)=>row)}
                    {/* {rowGenerator(8,45,"bottom").map((row)=>row)} */}
                </div>
            </div>
            <div className={style.bottomStageContainer}>
                {stadiumStage.bottom.map((row)=>row)}
            </div>
        </div>
    )
}

export default Stadium;