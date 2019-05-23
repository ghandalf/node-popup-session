export declare class Timer {
    private counter;
    private sessionTimeout;
    private threshold;
    private warning;
    constructor();
    getSessionTimeout(): number;
    setSessionTimeout(value: number): void;
    getThreshold(): number;
    setThreshold(value: number): void;
    getWarning(): number;
    startSessionTimer(sessionTimeout: number, threshold: number): void;
    resetCounter(value?: number): void;
    getCounter(): number;
}
//# sourceMappingURL=Timer.d.ts.map