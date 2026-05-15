/* global React, ReactDOM, HC1, HC2, HCT */
const { Header, Hero, TrustBar, About, Target, Categories, Features } = window.HC1;
const { Flow, FAQList, Contact, Footer, FloatCTA } = window.HC2;
const { CoursesTable } = window.HCT;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "default",
  "showFloatingCta": true,
  "courseLayout": "table"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero heroVariant={t.heroVariant} />
        <TrustBar />
        <About />
        <Target />
        <Categories />
        <Features />
        {t.courseLayout === "table"
          ? <CoursesTable />
          : <window.HC2Courses layout={t.courseLayout} />
        }
        <Flow />
        <FAQList />
        <Contact />
      </main>
      <Footer />
      {t.showFloatingCta && <FloatCTA />}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="ヒーロー">
          <window.TweakRadio
            label="レイアウト"
            value={t.heroVariant}
            options={[
              { value: "default", label: "標準" },
              { value: "split", label: "2分割" },
              { value: "minimal", label: "中央寄せ" },
            ]}
            onChange={(v) => setTweak("heroVariant", v)}
          />
        </window.TweakSection>

        <window.TweakSection label="講座一覧">
          <window.TweakRadio
            label="表示形式"
            value={t.courseLayout}
            options={[
              { value: "table", label: "テーブル" },
              { value: "grid", label: "カード" },
              { value: "list", label: "リスト" },
            ]}
            onChange={(v) => setTweak("courseLayout", v)}
          />
        </window.TweakSection>

        <window.TweakSection label="その他">
          <window.TweakToggle
            label="フローティング申込ボタン"
            value={t.showFloatingCta}
            onChange={(v) => setTweak("showFloatingCta", v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </React.Fragment>
  );
}

// Need Courses from components-b for non-table layouts
window.HC2Courses = window.HC2.Courses;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
