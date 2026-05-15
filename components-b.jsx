/* global React, HData */
const { useState: useStateB } = React;
const { CATEGORIES: CATS_B, COURSES: COURSES_B, FLOW: FLOW_B, FAQ: FAQ_B } = window.HData;

const APPLY_URL_B = "https://form.run/@hyogo-kensyu";

/* -------- Courses -------- */
function Courses({ layout }) {
  const [filter, setFilter] = useStateB("all");
  const list = filter === "all" ? COURSES_B : COURSES_B.filter(c => c.cat === filter);
  const catName = (id) => CATS_B.find(c => c.id === id);
  return (
    <section className="section section-mist" id="courses">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">10 PROGRAMS</div>
          <h2 className="h-section">全10講座一覧</h2>
          <p className="section-sub">
            講座ごとに「対象」「構成」「成果物」を明記しています。
            実施形式（時間・形式）は講座ごとに異なります。複数講座の組合せも可能です。
          </p>
        </div>

        <div className="course-filter-row">
          <span className="course-filter-label">CATEGORY</span>
          <button className={"course-filter" + (filter === "all" ? " active" : "")} onClick={() => setFilter("all")}>
            すべて <span style={{ opacity: 0.6, marginLeft: 4 }}>({COURSES_B.length})</span>
          </button>
          {CATS_B.map(c => {
            const n = COURSES_B.filter(x => x.cat === c.id).length;
            return (
              <button key={c.id} className={"course-filter" + (filter === c.id ? " active" : "")} onClick={() => setFilter(c.id)}>
                {c.code}．{c.label} <span style={{ opacity: 0.6, marginLeft: 4 }}>({n})</span>
              </button>
            );
          })}
        </div>

        <div className={"course-grid " + (layout || "grid")}>
          {list.map(c => {
            const cat = catName(c.cat);
            const isOnlineOnly = c.format.includes("オンライン限定");
            const isOfflineOnly = c.format.includes("対面のみ");
            return (
              <article className="course-card" data-cat={c.cat} key={c.no}>
                <div className="course-no-band">
                  <div className="course-no">
                    No.<b>{String(c.no).padStart(2, "0")}</b>
                  </div>
                  <div className="course-no-cat">{cat.code}．{cat.label}</div>
                </div>
                <div className="course-body">
                  <h3 className="course-title">{c.title}</h3>
                  <div className="course-sub">{c.sub}</div>
                  <div className="course-meta-row">
                    <span className="course-tag duration">{c.duration}</span>
                    {isOnlineOnly && <span className="course-tag online">オンライン限定</span>}
                    {isOfflineOnly && <span className="course-tag offline">対面のみ</span>}
                    {!isOnlineOnly && !isOfflineOnly && <span className="course-tag">対面・オンライン</span>}
                    <span className="course-tag">{c.capacity}</span>
                  </div>
                  <div className="course-target">
                    <b>対象</b>{c.target}
                  </div>
                  <div className="course-structure">
                    <div className="course-structure-h">構成</div>
                    {c.structure.map((row, i) => (
                      <div className="course-structure-row" key={i}>
                        <div className="course-structure-time">{row[0]}</div>
                        <div className="course-structure-body">{row[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="course-deliverable">
                  <b>成果物</b>{c.deliverable}
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            気になる講座について相談する
            <span className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------- Flow -------- */
function Flow() {
  return (
    <section className="section" id="flow">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>HOW IT WORKS</div>
          <h2 className="h-section">お申込みから実施までの流れ</h2>
          <p className="section-sub" style={{ margin: "16px auto 0" }}>
            お問合せから最短2〜3週間で実施可能です。事前ヒアリングで貴社の課題に合わせて内容を調整します。
          </p>
        </div>
        <div className="flow-grid">
          {FLOW_B.map((f, i) => (
            <div className="flow-card" key={f.step}>
              <div className="flow-num">{f.step}</div>
              <div className="flow-step-label">STEP {String(i + 1).padStart(2, "0")}</div>
              <h3 className="flow-title">{f.title}</h3>
              <p className="flow-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FAQ -------- */
function FAQList() {
  const [open, setOpen] = useStateB(0);
  return (
    <section className="section section-paper" id="faq">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>FAQ</div>
          <h2 className="h-section">よくあるご質問</h2>
        </div>
        <div className="faq-list">
          {FAQ_B.map((f, i) => (
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} role="button" tabIndex={0}>
                <span className="qmark">Q</span>
                <span>{f.q}</span>
                <span className="faq-toggle" />
              </div>
              <div className="faq-a">
                <span className="amark">A</span>
                <span>{f.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Contact -------- */
function Contact() {
  return (
    <section className="section section-mist" id="contact">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>CONTACT &amp; APPLY</div>
          <h2 className="h-section">お申込み・お問合せ</h2>
          <p className="section-sub" style={{ margin: "16px auto 0" }}>
            まずはお気軽にお問合せください。担当者が貴社の健康課題を伺い、最適な講座をご提案します。
          </p>
        </div>
        <div className="contact-block">
          <div className="contact-left">
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#98c5ad", fontWeight: 600 }}>STEP 1 — APPLY</div>
            <h3>講座のお申込みはこちらから</h3>
            <p>
              講座名・希望日程・実施形式（対面／オンライン）・想定人数をお知らせください。
              複数講座の組合せもご相談いただけます。
            </p>
            <div className="apply-row">
              <div className="apply-row-main">
                <a href={APPLY_URL_B} target="_blank" rel="noopener noreferrer" className="contact-cta">
                  申込フォームへ進む
                  <span className="btn-arrow" />
                </a>
                <div style={{ marginTop: 20, fontSize: 12, color: "#98c5ad", letterSpacing: "0.06em" }}>
                  ※ お電話・メールでのお問合せも受付しております
                </div>
              </div>
              <div className="apply-qr">
                <div className="apply-qr-label">スマホで読み取る</div>
                <img src="assets/qr.jpg" alt="申込フォームQRコード" />
                <div className="apply-qr-caption">申込フォーム</div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-h-sm">お問合せ先</div>
            <h4 className="contact-org">グンゼスポーツ株式会社</h4>
            <div className="contact-org-en">GUNZE SPORTS Co., Ltd. ／ 営業統括部</div>
            <dl className="contact-info">
              <div className="contact-row">
                <dt>担当</dt>
                <dd>中島・内藤</dd>
              </div>
              <div className="contact-row">
                <dt>TEL</dt>
                <dd><span className="contact-tel">06-6423-4721</span></dd>
              </div>
              <div className="contact-row">
                <dt>MAIL</dt>
                <dd><a className="contact-mail" href="mailto:info@gunzesports.com">info@gunzesports.com</a></dd>
              </div>
              <div className="contact-row">
                <dt>受付時間</dt>
                <dd style={{ fontSize: 13 }}>平日 10:00 〜 18:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Footer -------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4 className="footer-org">兵庫県 健康づくり研修会支援事業</h4>
          <p style={{ margin: 0, lineHeight: 1.85 }}>
            兵庫県委託事業として、グンゼスポーツ株式会社が運営する企業向け健康研修プログラムです。
            兵庫県内企業の健康経営を支援します。
          </p>
        </div>
        <div>
          <h4 className="footer-h">サイトマップ</h4>
          <ul className="footer-list">
            <li><a href="#about">事業概要</a></li>
            <li><a href="#target">対象企業</a></li>
            <li><a href="#courses">講座一覧</a></li>
            <li><a href="#flow">お申込みの流れ</a></li>
            <li><a href="#faq">よくあるご質問</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-h">運営</h4>
          <ul className="footer-list">
            <li>委託元：兵庫県</li>
            <li>運営：グンゼスポーツ株式会社</li>
            <li>TEL：06-6423-4721</li>
            <li>MAIL：info@gunzesports.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Hyogo Prefecture × GUNZE SPORTS Co., Ltd.</span>
        <span>令和8年度 兵庫県 健康づくり研修会支援事業</span>
      </div>
    </footer>
  );
}

/* -------- Floating CTA -------- */
function FloatCTA() {
  return (
    <a href={APPLY_URL_B} target="_blank" rel="noopener noreferrer" className="float-cta">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v12H5l-1 4V4z" />
      </svg>
      無料で申込む
    </a>
  );
}

window.HC2 = { Courses, Flow, FAQList, Contact, Footer, FloatCTA };
