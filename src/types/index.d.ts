export {};

declare global {
    interface Window {
        marked: any;
    }

    interface HTMLElement {
        _custom: Record<string, object>
    }
}