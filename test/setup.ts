import '@testing-library/jest-dom/vitest';

// MatchMedia mock (SwipeRow uses it when showControls="auto")
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
        return {
            matches: false,
            media: query,
            onchange: null,
            addEventListener: () => {},
            removeEventListener: () => {},
            addListener: () => {}, // legacy
            removeListener: () => {}, // legacy
            dispatchEvent: () => false,
        };
    },
});
