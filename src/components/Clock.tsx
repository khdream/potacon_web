import React, { useEffect, useState } from 'react';

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Month is zero-based
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}.${month}.${day}`;
};

const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
}

const Clock: React.FC = () => {

    const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], timeOptions));
    const [date, setDate] = useState<string>(formatDate(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], timeOptions));
            setDate(formatDate(new Date()))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-[0.75rem] w-[58%]">
            <div className='text-white text-[50px] tracking-[3px] font-bold'>{time}</div>
            <div className='ml-[7px] text-white text-[34px] tracking-[2px] text-left'>{date}</div>
        </div>
    )
}

export default Clock;