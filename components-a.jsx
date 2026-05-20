/* global React, ReactDOM, HData */
const { useState, useEffect, useMemo } = React;
const { CATEGORIES, COURSES, FLOW, FAQ, PROGRAM_FEATURES } = window.HData;

const APPLY_URL = "https://form.run/@hyogo-kensyu";

/* -------- Header -------- */
function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-top-inner">
          <span>兵庫県委託事業 ／ 健康づくり研修会支援事業</span>
          <span className="header-top-limited">★ 先着100社限定 ／ 令和8年度</span>
        </div>
      </div>
      <div className="header-main">
        <a href="#top" className="brand">
          <img src="assets/hyogo-logo.png" alt="兵庫県" className="brand-logo" />
          <span className="brand-sep" />
          <div className="brand-meta">
            <div className="brand-pretitle">HYOGO PREFECTURE × GUNZE SPORTS</div>
            <div className="brand-title">健康づくり研修会支援事業</div>
          </div>
        </a>
        <nav className="nav">
          <a href="#about">事業概要</a>
          <a href="#target">対象企業</a>
          <a href="#courses">講座一覧</a>
          <a href="#flow">お申込みの流れ</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

/* -------- Hero -------- */
function Hero({ heroVariant }) {
  if (heroVariant === "minimal") return <HeroMinimal />;
  if (heroVariant === "split") return <HeroSplit />;
  return <HeroDefault />;
}

function HeroDefault() {
  return (
    <section className="hero hero-fullbleed" id="top">
      <div className="hero-media">
        <img src="assets/hero.png?v=14" alt="兵庫県内企業向け 健康づくり研修プログラム" className="hero-bg" />
        <div className="hero-overlay-text">
          <p className="hero-eyebrow">企業の健康課題を、研修から。</p>
          <h1 className="hero-h1">社員の健康課題に、<br />10の処方箋を。</h1>
          <p className="hero-lead">
            従業員の健康づくりに取り組みたい皆さまへ。<br />
            運動・食事・健康意識の3領域から選べる<br />
            全10講座を、対面またはオンラインで<br />
            無料提供します。
          </p>
        </div>
      </div>
      <div className="hero-fb-inner">
        <div className="hero-limited-ribbon" aria-label="先着100社限定">
          <span className="hero-limited-ribbon-eyebrow">FIRST-COME</span>
          <span className="hero-limited-ribbon-main">先着<b>100</b>社限定</span>
        </div>
        <div className="hero-fb-cta">
          <a href="#courses" className="btn btn-outline btn-xl">
            講座一覧を見る
          </a>
        </div>

        <div className="hero-stats-card">
          <div className="hero-stat">
            <div className="hero-stat-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="14" rx="1" />
                <path d="M8 20h8M12 18v2" />
              </svg>
            </div>
            <div className="hero-stat-num">10<span className="unit">講座</span></div>
            <div className="hero-stat-label">PROGRAMS</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="9" r="3" />
                <circle cx="17" cy="11" r="2.5" />
                <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M14 19c0-2 1.5-3.5 3.5-3.5S21 17 21 19" />
              </svg>
            </div>
            <div className="hero-stat-num">3<span className="unit">領域</span></div>
            <div className="hero-stat-label">CATEGORIES</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 4l5 7 5-7M7 13h10M7 17h10M12 11v9" />
              </svg>
            </div>
            <div className="hero-stat-num">¥0</div>
            <div className="hero-stat-label">無料</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMinimal() {
  return (
    <section className="hero" id="top" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div className="hero-badge-row" style={{ justifyContent: "center", marginBottom: 32 }}>
          <span className="hero-badge"><span className="dot" />兵庫県委託事業</span>
          <span className="hero-badge green"><span className="dot" />受講料 無料</span>
        </div>
        <h1 style={{ maxWidth: 880, margin: "0 auto 32px" }}>
          <span className="small">企業の健康づくりを、研修から。</span>
          働く人の健康を、<br />
          <span className="stripe">企業の力</span>に変える。
        </h1>
        <p className="hero-lead" style={{ margin: "0 auto 40px", textAlign: "center" }}>
          兵庫県内企業を対象に、運動・食事・健康意識の3領域から選べる全10講座を、対面またはオンラインで無料提供。
        </p>
        <div className="hero-cta-row" style={{ justifyContent: "center" }}>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">無料で申込む<span className="btn-arrow" /></a>
          <a href="#courses" className="btn btn-outline btn-lg">講座一覧を見る</a>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="hero" id="top" style={{ padding: 0, background: "white" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 560 }}>
        <div style={{ padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--c-paper)" }}>
          <div className="hero-badge-row">
            <span className="hero-badge"><span className="dot" />兵庫県委託事業</span>
            <span className="hero-badge green"><span className="dot" />全10講座・無料</span>
          </div>
          <h1>
            <span className="small">FOR CORPORATE HEALTH MANAGERS</span>
            社員の健康を、<br />
            <span className="stripe">仕組み</span>で変える。
          </h1>
          <p className="hero-lead">
            運動・食事・健康意識の3領域、全10講座。<br />
            兵庫県内企業の健康づくりをグンゼスポーツが伴走支援します。
          </p>
          <div className="hero-cta-row">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">無料で申込む<span className="btn-arrow" /></a>
            <a href="#courses" className="btn btn-outline btn-lg">講座一覧</a>
          </div>
        </div>
        <div style={{ background: "var(--c-navy-deep)", color: "white", padding: 0, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: 560 }}>
          <div className="hero-photo" style={{ position: "absolute", inset: 0 }}>
            <img src="assets/hero.png" alt="兵庫県内企業の健康づくり研修" className="hero-photo-img" />
          </div>
          <div style={{ position: "relative", padding: "56px 56px", background: "linear-gradient(180deg, transparent 0%, rgba(15,37,71,0.92) 60%, rgba(15,37,71,1) 100%)", marginTop: "auto" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#98c5ad", marginBottom: 16 }}>PROGRAM 2026</div>
            <div style={{ fontFamily: "var(--f-serif)", fontSize: 36, lineHeight: 1.6, marginBottom: 40 }}>
              働く人の<br />明日を、整える。
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 28 }}>
              {[["10", "講座", "PROGRAMS"], ["3", "領域", "CATEGORIES"], ["0", "円", "FEE"]].map(([n, u, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--f-serif)", fontSize: 36, fontWeight: 600 }}>{n}<span style={{ fontSize: 14, marginLeft: 4, opacity: 0.7 }}>{u}</span></div>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", color: "rgba(255,255,255,0.5)", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Trust Bar -------- */
function TrustBar() {
  const items = [
    { icon: "shield", t: "行政の信頼", s: "兵庫県委託事業として実施" },
    { icon: "ribbon", t: "実績", s: "グンゼスポーツが研修運営" },
    { icon: "yen", t: "受講料", s: "対象企業は全講座無料" },
    { icon: "device", t: "実施形態", s: "対面・オンライン選択可" },
  ];
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map((it, i) => (
          <div className="trust-item" key={i}>
            <div className="trust-icon"><TrustIcon name={it.icon} /></div>
            <div className="trust-text">
              <strong>{it.t}</strong>
              {it.s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function TrustIcon({ name }) {
  const props = { width: 18, height: 18, fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "shield") return <svg viewBox="0 0 24 24" {...props}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>;
  if (name === "ribbon") return <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="9" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg>;
  if (name === "yen") return <svg viewBox="0 0 24 24" {...props}><path d="M7 4l5 7 5-7M7 13h10M7 17h10M12 11v9" /></svg>;
  return <svg viewBox="0 0 24 24" {...props}><rect x="3" y="5" width="14" height="10" rx="1" /><rect x="14" y="9" width="7" height="11" rx="1" /></svg>;
}

/* -------- About / 事業概要 -------- */
function About() {
  return (
    <section className="section section-tight" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow">ABOUT</div>
            <h2 className="h-section">働き盛り世代の<br />健康づくりを支援するための研修事業</h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: "var(--c-text)", marginTop: 24, textWrap: "pretty" }}>
              兵庫県では、働き盛り世代の健康づくりを支援するため、
              健康づくりに関する研修会に専門家（講師）を派遣しています。
              本事業はグンゼスポーツ株式会社が運営し、運動・食事・健康意識の
              3領域・全10講座から、貴社の課題に合わせてお選びいただけます。
            </p>
            <ul className="about-points">
              <li><span>全講座共通で、受講後に「明日から実行する行動」を1つ決める行動変容フレームを採用しています。</span></li>
            </ul>
          </div>
          <div className="about-visual">
            <h3 className="about-visual-title">事業実施体制</h3>
            <div className="relation-diagram">
              <div className="rd-box">
                <strong>兵庫県</strong>
                委託元 ／ 健康づくり研修会支援事業
              </div>
              <div className="rd-arrow" />
              <div className="rd-box green">
                <strong>グンゼスポーツ株式会社</strong>
                委託先 ／ 研修運営・講師派遣
              </div>
              <div className="rd-arrow" />
              <div className="rd-box">
                <strong>兵庫県内企業</strong>
                対象 ／ 健康づくりチャレンジ企業 等
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Target / 対象企業 -------- */
function Target() {
  return (
    <section className="section section-paper" id="target">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>FOR</div>
          <h2 className="h-section">こんな企業の課題に<span className="accent">お応えします</span></h2>
        </div>
        <div className="target-card">
          <div className="target-grid">
            <div>
              <span className="target-tag">対象企業</span>
              <h3 className="target-h">兵庫県内に事業所をもつ<br />「健康づくりチャレンジ企業」</h3>
              <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.85, marginTop: 16 }}>
                総務・人事ご担当者の皆さまからのお申込みを受付しています。登録予定の企業様もまずはお問合せください。
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.14em", color: "var(--c-navy-deep)", fontWeight: 600, marginBottom: 16 }}>
                こんなお悩みはありませんか？
              </div>
              <ul className="target-list">
                {[
                  "健康診断でC判定の社員が増えてきたが、改善策が打てていない",
                  "PC作業による肩こり・腰痛で生産性が落ちている部署がある",
                  "メンタル・ストレス対策を運動や食事からも進めたい",
                  "管理職と女性社員の健康課題に対するギャップを埋めたい",
                  "拠点が分散していて、オンラインでも実施できる研修を探している",
                ].map((t, i) => (
                  <li key={i}>
                    <span className="target-check">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Categories (3 区分) -------- */
function Categories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">3 CATEGORIES</div>
          <h2 className="h-section">3つの研修区分から<br />貴社の課題に合わせて選択</h2>
          <p className="section-sub">
            運動・食事・健康意識という3つの切り口で、企業の健康課題に対応します。
            各区分には複数の講座が用意されており、組合せて受講することも可能です。
          </p>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <div className="cat-card" key={c.id}>
              <div className="cat-card-num">CATEGORY {String(i + 1).padStart(2, "0")}</div>
              <div className="cat-card-code">{c.code}</div>
              <div className="cat-card-en">{c.en}</div>
              <h3 className="cat-card-title">{c.label}</h3>
              <p className="cat-card-desc">{c.desc}</p>

              <div className="cat-card-sublabel">解決できる課題</div>
              <ul className="cat-issues">
                {c.issues.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
              <div className="cat-card-divider" />
              <div className="cat-card-sublabel" style={{ color: "var(--c-green)" }}>期待される効果</div>
              <ul className="cat-effects">
                {c.effects.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Program Features (navy) -------- */
function Features() {
  return (
    <section className="section section-navy">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">PROGRAM FEATURES</div>
          <h2 className="h-section">本プログラムの3つの特長</h2>
        </div>
        <div className="features-grid">
          {PROGRAM_FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-num">{f.num}</div>
              <h3 className="feature-h">{f.title}</h3>
              <p className="feature-b">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HC1 = { Header, Hero, TrustBar, About, Target, Categories, Features };
