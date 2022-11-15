import { useState } from "react";

const UseNmb = (len: number) => {
    const [nmb, setNmb] = useState<number>(0);
    const increment = () => {
        if (nmb >= len-1) {
        }
        else {
            setNmb((prevNmb) => prevNmb + 1);
        }
    };

    const decrement = () => {
        if (nmb <= 0) {
        }
        else {
            setNmb((prevNmb) => prevNmb - 1);
        }
    }
    return { nmb: nmb, increment: increment, decrement: decrement }
};

export default UseNmb;