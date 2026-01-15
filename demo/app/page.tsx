"use client";

import SwipeRow from "@goodmanlabs/react-swipe-row";

function Card({
                  title,
                  subtitle,
              }: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div
            className="w-[240px] h-[140px] rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-5 shadow-sm flex flex-col justify-center">
            <div className="text-lg font-semibold text-zinc-50">{title}</div>
            {subtitle ? (
                <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
            ) : null}
        </div>
    );
}

function CodeBlock({code}: { code: string }) {
    return (
        <pre
            className="mt-3 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-[12px] leading-5 text-zinc-100">
      <code>{code}</code>
    </pre>
    );
}

function DemoSection({
                         number,
                         title,
                         description,
                         children,
                     }: {
    number: string;
    title: string;
    description?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <section id={`section-${number}`} className="mt-10 min-w-0">
            <div className="flex items-start justify-between gap-6 min-w-0">
                <div className="min-w-0">
                    <div className="flex items-center gap-3">
                        <div
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-xs font-semibold text-zinc-200">
                            {number}
                        </div>
                        <h2 className="text-lg font-semibold text-zinc-50">{title}</h2>
                    </div>
                    {description ? (
                        <div className="mt-2 text-sm leading-6 text-zinc-300">{description}</div>
                    ) : null}
                </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4 shadow-sm max-w-full min-w-0">
                {children}
            </div>
        </section>
    );
}

function SubExample({
                        label,
                        hint,
                        demo,
                        code,
                    }: {
    label: string;
    hint?: React.ReactNode;
    demo: React.ReactNode;
    code: string;
}) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 max-w-full min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <div className="text-sm font-semibold text-zinc-100">{label}</div>
                {hint ? <div className="text-xs text-zinc-400">{hint}</div> : null}
            </div>
            <div className="mt-3">{demo}</div>
            <CodeBlock code={code}/>
        </div>
    );
}

export default function Home() {
    const defaultItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="Default spacing"/>
    ));

    const gapItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="With gapClassName"/>
    ));

    const controlsItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="Controls demo"/>
    ));

    const pageFactorItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="pageFactor demo"/>
    ));

    const snapItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="snap demo"/>
    ));

    const scrollerStyleItems = Array.from({length: 12}, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="scrollerStyle demo"/>
    ));

    const classNamesItems = Array.from({ length: 12 }, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="classNames demo" />
    ));

    const a11yItems = Array.from({ length: 12 }, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="a11y demo" />
    ));

    const rootClassNameItems = Array.from({ length: 12 }, (_, i) => (
        <Card key={i} title={`Card ${i + 1}`} subtitle="className demo" />
    ));


    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
            {/* subtle “docs” background (forced behind everything) */}
            <div
                aria-hidden="true"
                className="fixed inset-0 -z-10 opacity-[0.18]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative mx-auto w-full max-w-5xl px-6 py-10 min-w-0">
                {/* Header */}
                <header className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-300">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"/>
                            @goodmanlabs/react-swipe-row
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <a
                                className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-900"
                                href="https://github.com/gpgoodman/react-swipe-row"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-900"
                                href="https://www.npmjs.com/package/@goodmanlabs/react-swipe-row"
                                target="_blank"
                                rel="noreferrer"
                            >
                                npm
                            </a>
                            <a
                                className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-900"
                                href="https://campvue.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Campvue (Hompage Examples)
                            </a>
                            <a
                                className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-900"
                                href="https://campvue.com/campgrounds/wishon-point"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Campvue Campsites Rail (Example)
                            </a>
                        </div>
                    </div>

                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
                        SwipeRow — native-feeling horizontal card rail
                    </h1>

                    <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
                        Scroll-snap rail with trackpad/mouse wheel, touch momentum, keyboard paging (←/→),
                        and optional desktop controls. Styling is intentionally minimal and customizable.
                    </p>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">Be sure to check out the links at the top right to real production examples from{" "}
                    <a href="https://campvue.com" target="_blank" rel="noreferrer" className="font-medium text-zinc-200 hover:bg-zinc-900">Campvue.com</a>, both the home page and another production usage, where you can see great examples
                    of button styling customization!
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-200">
                            <div className="font-semibold text-zinc-50">Required stylesheet</div>
                            <div className="mt-2 leading-6 text-zinc-300">
                                Import the package stylesheet once:
                                <span
                                    className="ml-2 rounded bg-zinc-900 px-2 py-0.5 font-mono text-[12px] text-zinc-100">
                  import &quot;@goodmanlabs/react-swipe-row/style.css&quot;
                </span>
                                <div className="mt-1 text-zinc-400">
                                    (Next.js App Router: import this in{" "}
                                    <span className="font-mono">app/layout</span>.)
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-200">
                            <div className="font-semibold text-zinc-50">Styling model</div>
                            <div className="mt-2 leading-6 text-zinc-400">
                                Demos use Tailwind utility classes, but{" "}
                                <span className="text-zinc-200">gapClassName</span> and{" "}
                                <span className="text-zinc-200">classNames</span> are plain class hooks. Use Tailwind,
                                CSS Modules, vanilla CSS, styled-components, etc.
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                    <div className="text-sm font-semibold text-zinc-100">Props overview (quick links to each section)</div>

                    <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                        <a href="#section-1" className="text-zinc-300 hover:text-zinc-50">
                            Default usage
                        </a>
                        <a href="#section-2" className="text-zinc-300 hover:text-zinc-50">
                            gapClassName
                        </a>
                        <a href="#section-3" className="text-zinc-300 hover:text-zinc-50">
                            showControls
                        </a>
                        <a href="#section-4" className="text-zinc-300 hover:text-zinc-50">
                            pageFactor
                        </a>
                        <a href="#section-5" className="text-zinc-300 hover:text-zinc-50">
                            snap
                        </a>
                        <a href="#section-6" className="text-zinc-300 hover:text-zinc-50">
                            scrollerStyle
                        </a>
                        <a href="#section-7" className="text-zinc-300 hover:text-zinc-50">
                            classNames
                        </a>
                        <a href="#section-8" className="text-zinc-300 hover:text-zinc-50">
                            ariaLabel / id
                        </a>
                        <a href="#section-9" className="text-zinc-300 hover:text-zinc-50">
                            className
                        </a>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
                    <h2 className="text-lg font-semibold text-zinc-50">
                        Quick start
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                        SwipeRow works in any React app. For Next.js (App Router), follow these steps:
                    </p>

                    <div className="mt-4 space-y-4">
                        <div>
                            <div className="text-xs font-semibold text-zinc-400">1) Install</div>
                            <pre className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs text-zinc-100">
        <code>npm install @goodmanlabs/react-swipe-row</code>
      </pre>
                        </div>

                        <div>
                            <div className="text-xs font-semibold text-zinc-400">
                                2) Import the stylesheet (once)
                            </div>
                            <pre className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs text-zinc-100">
        <code>{`// app/layout.tsx
import "@goodmanlabs/react-swipe-row/style.css";`}</code>
      </pre>
                        </div>

                        <div>
                            <div className="text-xs font-semibold text-zinc-400">
                                3) Use the component
                            </div>
                            <pre className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs text-zinc-100">
        <code>{`"use client";

import SwipeRow from "@goodmanlabs/react-swipe-row";

export function Example() {
  return (
    <SwipeRow ariaLabel="Featured items">
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </SwipeRow>
  );
}`}</code>
      </pre>
                        </div>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-zinc-400">
                        Note: SwipeRow is a client component because it relies on DOM APIs
                        (scroll position, resize observers, media queries).
                    </p>
                </div>


                {/* Sections */}
                <DemoSection
                    number="1"
                    title="Default usage"
                    description={
                        <>
                            You can render content either as{" "}
                            <span className="font-mono text-zinc-100">children</span> or via the{" "}
                            <span className="font-mono text-zinc-100">items</span> prop. Both produce the same UI.
                            <div className="mt-2 text-zinc-400">
                                Tip: click/focus the row, then use ←/→ to page.
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) Children"
                            hint="Often the simplest in JSX"
                            demo={
                                <SwipeRow ariaLabel="Default SwipeRow (children)">
                                    {defaultItems}
                                </SwipeRow>
                            }
                            code={`import SwipeRow from "@goodmanlabs/react-swipe-row";

<SwipeRow ariaLabel="Default">
  {items}
</SwipeRow>`}
                        />

                        <SubExample
                            label="B) items prop"
                            hint="Useful when you already have an array"
                            demo={<SwipeRow ariaLabel="Default SwipeRow (items)" items={defaultItems}/>}
                            code={`<SwipeRow ariaLabel="Default" items={items}  />`}
                        />
                    </div>
                </DemoSection>

                <DemoSection
                    number="2"
                    title="gapClassName"
                    description={
                        <>
                            Adds spacing between items. This is just a class hook. Here we use Tailwind’s{" "}
                            <span className="font-mono text-zinc-100">gap-4</span>.
                        </>
                    }
                >
                    <SwipeRow ariaLabel="SwipeRow with gap" items={gapItems} gapClassName="gap-4"/>
                    <CodeBlock code={`<SwipeRow items={items} gapClassName="gap-4" />`}/>
                </DemoSection>

                <DemoSection
                    number="3"
                    title="showControls"
                    description={
                        <>
                            Controls can be <span className="font-mono text-zinc-100">auto</span> (default),
                            <span className="font-mono text-zinc-100"> always</span>, or
                            <span className="font-mono text-zinc-100"> never</span>.
                            <div className="mt-2 text-zinc-400">
                                <span className="font-semibold text-zinc-300">Auto</span> uses a “desktop-ish” media
                                query:
                                <span className="ml-2 font-mono text-zinc-300">(hover: hover) and (pointer: fine)</span>.
                                On touch devices, arrows are hidden by default.
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label='A) auto (default)'
                            hint="Shows controls on desktop-ish devices"
                            demo={<SwipeRow ariaLabel="Controls auto" items={controlsItems} gapClassName="gap-4"/>}
                            code={`<SwipeRow items={items} showControls="auto" gapClassName="gap-4" />  // default`}
                        />

                        <SubExample
                            label='B) always'
                            hint="Forces arrows on all devices (including touch)"
                            demo={
                                <SwipeRow
                                    ariaLabel="Controls always"
                                    items={controlsItems}
                                    showControls="always"
                                    gapClassName="gap-4"
                                />
                            }
                            code={`<SwipeRow items={items} showControls="always" gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label='C) never'
                            hint="Swipe/scroll only (no arrows)"
                            demo={
                                <SwipeRow
                                    ariaLabel="Controls never"
                                    items={controlsItems}
                                    showControls="never"
                                    gapClassName="gap-4"
                                />
                            }
                            code={`<SwipeRow items={items} showControls="never" gapClassName="gap-4" />`}
                        />
                    </div>
                </DemoSection>

                <DemoSection
                    number="4"
                    title="pageFactor"
                    description={
                        <>
                            Controls and keyboard paging scroll by a fraction of the visible width.
                            Lower values make smaller steps; higher values “page” farther.
                            <div className="mt-2 text-zinc-400">
                                Tip: focus the row and use ←/→ to feel the difference.
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) pageFactor = 0.5"
                            hint="Smaller hops"
                            demo={
                                <SwipeRow
                                    ariaLabel="pageFactor 0.5"
                                    items={pageFactorItems}
                                    pageFactor={0.5}
                                    gapClassName="gap-4"
                                />
                            }
                            code={`<SwipeRow items={items} pageFactor={0.5} gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label="B) pageFactor = 0.9 (default)"
                            hint="Good balance"
                            demo={<SwipeRow ariaLabel="pageFactor 0.9" items={pageFactorItems} gapClassName="gap-4"/>}
                            code={`<SwipeRow items={items} pageFactor={0.9} gapClassName="gap-4" />  // default`}
                        />

                        <SubExample
                            label="C) pageFactor = 1.0"
                            hint="Full-page steps"
                            demo={
                                <SwipeRow
                                    ariaLabel="pageFactor 1.0"
                                    items={pageFactorItems}
                                    pageFactor={1.0}
                                    gapClassName="gap-4"
                                />
                            }
                            code={`<SwipeRow items={items} pageFactor={1.0} gapClassName="gap-4" />`}
                        />
                    </div>
                </DemoSection>

                <DemoSection
                    number="5"
                    title="snap"
                    description={
                        <>
                            Enables CSS scroll-snap (default). With snap on, items settle into alignment.
                            With snap off, the rail scrolls freely.
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) snap = true (default)"
                            hint="Items snap into alignment"
                            demo={<SwipeRow ariaLabel="snap true" items={snapItems} gapClassName="gap-4"/>}
                            code={`<SwipeRow items={items} snap gapClassName="gap-4" />  // default`}
                        />

                        <SubExample
                            label="B) snap = false"
                            hint="Free scrolling (no snapping)"
                            demo={<SwipeRow ariaLabel="snap false" items={snapItems} snap={false} gapClassName="gap-4"/>}
                            code={`<SwipeRow items={items} snap={false} gapClassName="gap-4" />`}
                        />
                    </div>
                </DemoSection>

                <DemoSection
                    number="6"
                    title="scrollerStyle"
                    description={
                        <>
                            Optional inline style passthrough for the scroller element. Useful for one-off tweaks
                            like <span className="font-mono text-zinc-100">scrollbarGutter</span>, padding, etc.
                            <div className="mt-2 text-zinc-400">
                                (This prop styles the <span className="font-mono">scroller</span> div — not the outer
                                wrapper.)
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) Default"
                            hint="No scrollerStyle"
                            demo={<SwipeRow ariaLabel="scrollerStyle default" items={scrollerStyleItems} gapClassName="gap-4"/>}
                            code={`<SwipeRow items={items} gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label="B) With scrollerStyle"
                            hint="Adds padding + subtle tint on the scroller"
                            demo={
                                <SwipeRow
                                    ariaLabel="scrollerStyle custom"
                                    items={scrollerStyleItems}
                                    gapClassName="gap-4"
                                    scrollerStyle={{
                                        paddingTop: 12,
                                        paddingBottom: 12,
                                        borderRadius: 12,
                                        background: "rgba(255,255,255,0.03)",
                                    }}
                                />
                            }
                            code={`<SwipeRow
  items={items}
  gapClassName="gap-4"
  scrollerStyle={{
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)",
  }}
/>`}
                        />
                    </div>
                </DemoSection>

                <DemoSection
                    number="7"
                    title="classNames"
                    description={
                        <>
                            Fine-grained class hooks for styling the wrapper, scroller, items, and controls.
                            <div className="mt-2 text-zinc-400">
                                These are plain class names — Tailwind is used here for convenience, but any CSS
                                approach works.
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) Default"
                            hint="No classNames"
                            demo={<SwipeRow ariaLabel="classNames default" items={classNamesItems} gapClassName="gap-4" />}
                            code={`<SwipeRow items={items} gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label="B) Custom classNames"
                            hint="Styled scroller + item padding + custom arrow buttons"
                            demo={
                                <SwipeRow
                                    ariaLabel="classNames custom"
                                    items={classNamesItems}
                                    gapClassName="gap-4"
                                    classNames={{
                                        root: "relative",
                                        scroller:
                                            "rounded-xl border border-zinc-800 bg-zinc-950/40 ring-1 ring-white/5",
                                        item: "px-2", // padding around each snap target wrapper
                                        controlButton:
                                            "backdrop-blur-md bg-zinc-900/80 border border-zinc-700 text-zinc-100 shadow-sm hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed",
                                        prevButton:
                                            "left-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10",
                                        nextButton:
                                            "right-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10",
                                    }}
                                />
                            }
                            code={`<SwipeRow
  items={items}
  gapClassName="gap-4"
  classNames={{
    root: "relative",
    scroller: "rounded-xl border border-zinc-800 bg-zinc-950/40 ring-1 ring-white/5",
    item: "px-2",
    controlButton: "backdrop-blur-md bg-zinc-900/80 border border-zinc-700 text-zinc-100 shadow-sm hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed",
    prevButton: "left-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10",
    nextButton: "right-3 top-1/2 -translate-y-1/2 rounded-full w-10 h-10",
  }}
/>`}
                        />
                    </div>

                    <div className="mt-4 text-xs leading-5 text-zinc-400">
                        Note: On touch devices, controls are hidden by default. To ensure your custom buttons
                        appear everywhere, combine this with{" "}
                        <span className="font-mono text-zinc-200">showControls=&quot;always&quot;</span>.
                    </div>
                </DemoSection>

                <DemoSection
                    number="8"
                    title="ariaLabel + id"
                    description={
                        <>
                            SwipeRow renders a focusable scroll region for keyboard paging.{" "}
                            <span className="font-mono text-zinc-100">ariaLabel</span> names that region for screen readers.
                            <span className="font-mono text-zinc-100"> id</span> provides a stable identifier so the
                            control buttons can set <span className="font-mono text-zinc-100">aria-controls</span>.
                            <div className="mt-2 text-zinc-400">
                                Tip: click/focus the row, then use ←/→ to page. You can also Tab to the buttons.
                            </div>
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) ariaLabel only (recommended minimum)"
                            hint="Names the scroll region"
                            demo={<SwipeRow ariaLabel="Featured campsites" items={a11yItems} gapClassName="gap-4" />}
                            code={`<SwipeRow ariaLabel="Featured campsites" items={items} gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label="B) ariaLabel + id (stable aria-controls)"
                            hint="Useful for deterministic DOM hooks and a11y tooling"
                            demo={
                                <SwipeRow
                                    ariaLabel="Featured campsites"
                                    id="demo-featured-campsites"
                                    items={a11yItems}
                                    gapClassName="gap-4"
                                    showControls="always"
                                />
                            }
                            code={`<SwipeRow
  ariaLabel="Featured campsites"
  id="demo-featured-campsites"
  items={items}
  gapClassName="gap-4"
  showControls="always"
/>`}
                        />
                    </div>

                    <div className="mt-4 text-xs leading-5 text-zinc-400">
                        Note:{" "}
                        <span className="font-mono text-zinc-200">id</span> is optional. If omitted, SwipeRow uses a stable
                        React-generated id internally. Provide your own if you want the same{" "}
                        <span className="font-mono text-zinc-200">aria-controls</span> value across renders/environments.
                    </div>
                </DemoSection>

                <DemoSection
                    number="9"
                    title="className (root wrapper)"
                    description={
                        <>
                            Adds a class to the outer wrapper that contains the scroller + (optional) controls.
                            Useful for layout styling, spacing, and positioning in your app.
                        </>
                    }
                >
                    <div className="grid gap-4 min-w-0">
                        <SubExample
                            label="A) Default"
                            hint="No root wrapper class"
                            demo={<SwipeRow ariaLabel="className default" items={rootClassNameItems} gapClassName="gap-4" />}
                            code={`<SwipeRow items={items} gapClassName="gap-4" />`}
                        />

                        <SubExample
                            label="B) With className"
                            hint="Wrapper gets padding + border + rounded corners"
                            demo={
                                <SwipeRow
                                    ariaLabel="className custom"
                                    items={rootClassNameItems}
                                    gapClassName="gap-4"
                                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3"
                                />
                            }
                            code={`<SwipeRow
  items={items}
  gapClassName="gap-4"
  className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3"
/>`}
                        />
                    </div>
                </DemoSection>

                {/* Footer */}
                <footer className="mt-14 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
                    Built by Goodman Labs. Extracted from Campvue and used in production.
                </footer>
            </div>
        </main>
    );
}
