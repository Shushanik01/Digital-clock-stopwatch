import React, {useState, useEffect, Fragment} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);

        return ()=>{
            clearInterval(intervalId)
        }

    }, []);

    const formateTime = ()=>{
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        return `${PadZero(hour)}:${PadZero(minutes)}:${PadZero(seconds)}`
    }

    function PadZero(number){
        return(number < 10 ? "0" : "" ) + number
    }

    return(
        <Fragment>
            <div className='clock-container'>
                <div className='clock'>
                    <span>{formateTime()}</span>
                </div>
            </div>
        </Fragment>
    )
}
export default DigitalClock