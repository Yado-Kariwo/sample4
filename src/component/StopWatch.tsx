import { useStopwatch } from "react-timer-hook";

function StopWatch() {

    const { seconds, minutes, isRunning, start, pause, reset } =
useStopwatch({ autoStart: true });
    return (
        <div>
            <h1>countUp Timer</h1>
            <div style={styles.countString}>
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <p>{isRunning ? "Running..." : "Not running..."}</p>
            <button
            onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                Reset
            </button>
            <button
            onClick={start as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                start
            </button>
            <button
            onClick={pause as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                pause
            </button>
        </div>
    );
};

const styles : {[key: string]: React.CSSProperties} = {
    countString:{
        fontSize: 100,
    },
}
export default StopWatch;