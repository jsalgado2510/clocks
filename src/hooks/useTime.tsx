'use client';
import { useEffect, useState } from "react";

export default function useTime() {
    const [timestamp, setTimestamp] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimestamp(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return timestamp;
}