'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';

export type ShowControlsMode = 'auto' | 'always' | 'never';

export type SwipeRowClassNames = {
    /** Outer wrapper around the scroller + controls */
    root?: string;
    /** The horizontal scroller element */
    scroller?: string;
    /** Wrapper around each item (the snap target) */
    item?: string;
    /** Shared class applied to both buttons */
    controlButton?: string;
    /** Prev button */
    prevButton?: string;
    /** Next button */
    nextButton?: string;
};

export type SwipeRowProps = {
    /** Optional array of React nodes (alternative to children) */
    items?: React.ReactNode[];
    children?: React.ReactNode;

    ariaLabel?: string;

    /** Enable CSS scroll-snap */
    snap?: boolean;

    /** How far arrows / keyboard page (fraction of visible width) */
    pageFactor?: number;

    /** When to show left/right controls */
    showControls?: ShowControlsMode;

    /** Optional stable id for aria-controls */
    id?: string;

    /** Extra class on outer wrapper */
    className?: string;

    /**
     * Spacing between items.
     * This is a class hook (NOT Tailwind-specific). For non-Tailwind consumers,
     * they'll typically use the provided default CSS and ignore this.
     */
    gapClassName?: string;

    /** More granular class hooks */
    classNames?: SwipeRowClassNames;

    /**
     * Optional inline style passthrough for the scroller.
     * Useful for consumers that want scrollbarGutter, etc.
     */
    scrollerStyle?: React.CSSProperties;
};

function cx(...parts: Array<string | undefined | false | null>) {
    return parts.filter(Boolean).join(' ');
}

export default function SwipeRow({
                                     items,
                                     children,
                                     ariaLabel = 'Scrollable content',
                                     className,
                                     gapClassName,
                                     snap = true,
                                     pageFactor = 0.9,
                                     showControls = 'auto',
                                     id,
                                     classNames,
                                     scrollerStyle,
                                 }: SwipeRowProps) {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);
    const [controlsOn, setControlsOn] = useState(showControls === 'always');

    const autoId = useId();
    const regionId = id ?? autoId;

    const content = useMemo(() => {
        if (items) return items;
        return React.Children.toArray(children);
    }, [items, children]);

    const hasCustomControls =
        !!classNames?.controlButton || !!classNames?.prevButton || !!classNames?.nextButton;

    // Enable/disable arrows based on scroll position
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const update = () => {
            // tolerance: helps avoid off-by-1 due to subpixel rounding
            const max = el.scrollWidth - el.clientWidth - 1;
            setCanLeft(el.scrollLeft > 0);
            setCanRight(el.scrollLeft < max);
        };

        update();
        el.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            el.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    // Decide when to show controls (desktop-ish)
    useEffect(() => {
        if (showControls !== 'auto') {
            setControlsOn(showControls === 'always');
            return;
        }

        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        const set = () => setControlsOn(mq.matches);

        set();

        // Safari fallback
        if (mq.addEventListener) mq.addEventListener('change', set);
        // eslint-disable-next-line deprecation/deprecation
        else mq.addListener?.(set);

        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', set);
            // eslint-disable-next-line deprecation/deprecation
            else mq.removeListener?.(set);
        };
    }, [showControls]);

    const page = (dir: -1 | 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const step = Math.round(el.clientWidth * pageFactor);
        el.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    // Keyboard paging (a11y)
    const onKeyDown = (e: React.KeyboardEvent) => {
        const el = scrollerRef.current;
        if (!el) return;
        const step = Math.round(el.clientWidth * pageFactor);

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            el.scrollBy({ left: step, behavior: 'smooth' });
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            el.scrollBy({ left: -step, behavior: 'smooth' });
        }
    };

    return (
        <div className={cx('rsr-root', className, classNames?.root)}>
            <div
                ref={scrollerRef}
                role="region"
                aria-label={ariaLabel}
                tabIndex={0}
                onKeyDown={onKeyDown}
                className={cx(
                    'rsr-scroller',
                    snap && 'rsr-snap',
                    gapClassName,
                    classNames?.scroller
                )}
                style={{
                    WebkitOverflowScrolling: 'touch',
                    // matches your original (optional, but harmless)
                    scrollbarGutter: 'stable both-edges',
                    ...scrollerStyle,
                }}
                id={regionId}
            >
                {content.map((node, i) => (
                    <div
                        key={i}
                        className={cx('rsr-item', snap && 'rsr-snap-item', classNames?.item)}
                    >
                        {node}
                    </div>
                ))}
            </div>

            {controlsOn && (
                <>
                    <button
                        type="button"
                        onClick={() => page(-1)}
                        disabled={!canLeft}
                        aria-controls={regionId}
                        aria-label="Scroll left"
                        className={cx(
                            'rsr-control',
                            hasCustomControls && 'rsr-control--custom',
                            'rsr-prev',
                            classNames?.controlButton,
                            classNames?.prevButton
                        )}
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={() => page(1)}
                        disabled={!canRight}
                        aria-controls={regionId}
                        aria-label="Scroll right"
                        className={cx(
                            'rsr-control',
                            hasCustomControls && 'rsr-control--custom',
                            'rsr-next',
                            classNames?.controlButton,
                            classNames?.nextButton
                        )}
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
}
