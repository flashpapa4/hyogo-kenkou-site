/* global React, HData */
const { CATEGORIES: CATS_T, COURSES: COURSES_T } = window.HData;

function CoursesTable() {
  const [filter, setFilter] = React.useState("all");
  const [lightbox, setLightbox] = React.useState(null);
  const list = filter === "all" ? COURSES_T : COURSES_T.filter(c => c.cat === filter);
  const catBy = (id) => CATS_T.find(c => c.id === id);

  React.useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

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
            すべて <span style={{ opacity: 0.6, marginLeft: 4 }}>({COURSES_T.length})</span>
          </button>
          {CATS_T.map(c => {
            const n = COURSES_T.filter(x => x.cat === c.id).length;
            return (
              <button key={c.id} className={"course-filter" + (filter === c.id ? " active" : "")} onClick={() => setFilter(c.id)}>
                {c.code}．{c.label} <span style={{ opacity: 0.6, marginLeft: 4 }}>({n})</span>
              </button>
            );
          })}
        </div>

        <div className="ctable-wrap">
          <table className="ctable">
            <thead>
              <tr>
                <th className="th-no">No</th>
                <th className="th-cat">区分</th>
                <th className="th-title">講座タイトル</th>
                <th className="th-format">時間・形式</th>
                <th className="th-detail">対象・構成・成果物</th>
              </tr>
            </thead>
            <tbody>
              {list.map(c => {
                const cat = catBy(c.cat);
                const isOnlineOnly = c.format.includes("オンライン限定");
                const isOfflineOnly = c.format.includes("対面のみ");
                return (
                  <tr key={c.no} data-cat={c.cat}>
                    <td className="td-no">
                      <span className="td-no-num">{String(c.no).padStart(2, "0")}</span>
                    </td>
                    <td className="td-cat">
                      <span className={"cat-chip cat-chip-" + c.cat}>
                        <span className="cat-chip-code">{cat.code}</span>
                        <span className="cat-chip-label">{cat.label}</span>
                      </span>
                    </td>
                    <td className="td-title">
                      <div className="td-title-stack">
                        <button
                          type="button"
                          className="td-title-thumb-btn"
                          onClick={() => setLightbox({ src: `assets/course-${String(c.no).padStart(2, "0")}.png`, alt: c.title, title: c.title, sub: c.sub })}
                          aria-label={`${c.title} の画像を拡大表示`}
                        >
                          <img
                            src={`assets/course-${String(c.no).padStart(2, "0")}.png`}
                            alt={c.title}
                            className="td-title-thumb"
                            loading="lazy"
                          />
                          <span className="td-title-zoom" aria-hidden="true">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="7" />
                              <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                            </svg>
                          </span>
                        </button>
                        <div className="td-title-text">
                          <div className="td-title-main">{c.title}</div>
                          <div className="td-title-sub">{c.sub}</div>
                        </div>
                      </div>
                    </td>
                    <td className="td-format">
                      <div className="td-duration">{c.duration}</div>
                      <div className="td-format-tags">
                        {isOnlineOnly && <span className="ft online">オンライン限定</span>}
                        {isOfflineOnly && <span className="ft offline">対面のみ</span>}
                        {!isOnlineOnly && !isOfflineOnly && <span className="ft both">対面・オンライン</span>}
                      </div>
                      <div className="td-capacity">{c.capacity}</div>
                    </td>
                    <td className="td-detail">
                      <div className="td-detail-row">
                        <span className="td-detail-label">対象</span>
                        <span className="td-detail-body">{c.target}</span>
                      </div>
                      <div className="td-detail-row">
                        <span className="td-detail-label">構成</span>
                        <span className="td-detail-body">
                          {c.structure.map((row, i) => (
                            <span key={i} className="td-structure-item">
                              <b>{row[0]}</b>{row[1]}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="td-detail-row">
                        <span className="td-detail-label gold">成果物</span>
                        <span className="td-detail-body">{c.deliverable}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            気になる講座について相談する
            <span className="btn-arrow" />
          </a>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="閉じる">✕</button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
            <figcaption className="lightbox-caption">
              <div className="lightbox-title">{lightbox.title}</div>
              <div className="lightbox-sub">{lightbox.sub}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

window.HCT = { CoursesTable };
