function log(message: string): void {
    if (typeof window.console !== 'undefined') {
        window.console.log(message);
    }
}

var testLog: string = "Hello world";

log(testLog);
