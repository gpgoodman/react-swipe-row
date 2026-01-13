import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import SwipeRow from './SwipeRow';

afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
});

let scrollByMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
    scrollByMock = vi.fn();

    // SwipeRow calls scrollBy() on the scroller element
    Object.defineProperty(HTMLElement.prototype, 'scrollBy', {
        configurable: true,
        value: scrollByMock,
    });

    // SwipeRow uses clientWidth to compute paging step
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
        configurable: true,
        get() {
            return 1000;
        },
    });

    // SwipeRow uses scrollWidth/clientWidth/scrollLeft to decide if arrows are enabled.
    // happy-dom (and jsdom) do not compute real layout, so we mock overflow explicitly.
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        get() {
            return 2000; // > clientWidth, so there is horizontal overflow
        },
    });

    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
        configurable: true,
        writable: true,
        value: 0,
    });
});

describe('SwipeRow', () => {
    it('renders children', () => {
        render(
            <SwipeRow showControls="never" ariaLabel="Row">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        expect(screen.getByText('One')).toBeInTheDocument();
        expect(screen.getByText('Two')).toBeInTheDocument();
    });

    it('renders controls when showControls="always"', async () => {
        render(
            <SwipeRow showControls="always">
                <div>One</div>
            </SwipeRow>
        );

        expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
        expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();

        // With our scroll metrics mocks, right control should eventually be enabled
        const right = screen.getByLabelText('Scroll right');
        await waitFor(() => expect(right).not.toBeDisabled());
    });

    it('does not render controls when showControls="never"', () => {
        render(
            <SwipeRow showControls="never">
                <div>One</div>
            </SwipeRow>
        );

        expect(screen.queryByLabelText('Scroll left')).toBeNull();
        expect(screen.queryByLabelText('Scroll right')).toBeNull();
    });

    it('pages right when clicking the right control', async () => {
        render(
            <SwipeRow showControls="always">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        const right = screen.getByLabelText('Scroll right');

        // Wait for the effect that computes canRight to run (enables the button)
        await waitFor(() => expect(right).not.toBeDisabled());

        fireEvent.click(right);
        expect(scrollByMock).toHaveBeenCalled();
    });

    it('disables left control initially and enables right when overflow exists', async () => {
        render(
            <SwipeRow showControls="always">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        const left = screen.getByLabelText('Scroll left');
        const right = screen.getByLabelText('Scroll right');

        // left is disabled at start (scrollLeft = 0)
        expect(left).toBeDisabled();

        // right becomes enabled once the effect runs and sees overflow
        await waitFor(() => expect(right).not.toBeDisabled());
    });

    it('does not page left while the left control is disabled', () => {
        render(
            <SwipeRow showControls="always">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        const left = screen.getByLabelText('Scroll left');
        expect(left).toBeDisabled();

        fireEvent.click(left);
        expect(scrollByMock).not.toHaveBeenCalled();
    });


    it('pages via keyboard arrows when focused', () => {
        render(
            <SwipeRow showControls="never" ariaLabel="Row">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        const scroller = screen.getByRole('region', { name: 'Row' });
        scroller.focus();

        fireEvent.keyDown(scroller, { key: 'ArrowRight' });
        expect(scrollByMock).toHaveBeenCalled();
    });

    it('shows controls in auto mode on desktop-like pointers', async () => {
        const addEventListener = vi.fn();
        const removeEventListener = vi.fn();

        vi.stubGlobal('matchMedia', (query: string) => ({
            matches: query.includes('(hover: hover)') && query.includes('(pointer: fine)'),
            media: query,
            onchange: null,
            addEventListener,
            removeEventListener,
            addListener: vi.fn(), // legacy
            removeListener: vi.fn(), // legacy
            dispatchEvent: vi.fn(),
        }));

        render(
            <SwipeRow showControls="auto">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        // Effect runs after render
        await waitFor(() => {
            expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
            expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
        });
    });

    it('hides controls in auto mode on non-desktop pointers', async () => {
        vi.stubGlobal('matchMedia', (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));

        render(
            <SwipeRow showControls="auto">
                <div>One</div>
                <div>Two</div>
            </SwipeRow>
        );

        // Give effects a tick, then assert not present
        await waitFor(() => {
            expect(screen.queryByLabelText('Scroll left')).toBeNull();
            expect(screen.queryByLabelText('Scroll right')).toBeNull();
        });
    });
});


