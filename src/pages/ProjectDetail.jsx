// src/pages/ProjectDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./Home.jsx";
import CursorSmoke from "../components/CursorSmoke.jsx";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ 디테일 페이지 진입할 때마다 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 1) project 찾기
  const project = projects.find((p) => p.id === Number(id));

  // 2) 코드 존재 여부
  const hasCode = Boolean(
    project &&
      project.code &&
      (project.code.html ||
        project.code.css ||
        (Array.isArray(project.code.js) && project.code.js.length > 0))
  );

  // 3) 처음 열릴 탭
  const [activeTab, setActiveTab] = useState(() => {
    if (!project || !project.code) return "html";
    if (project.code.html) return "html";
    if (project.code.css) return "css";
    if (Array.isArray(project.code.js) && project.code.js.length > 0) {
      return "js-0";
    }
    return "html";
  });

  // 4) 코드 모달 열림/닫힘
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  // 5) project 못 찾았을 때
  if (!project) {
    return (
      <main className="project-detail-wrap">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <p>프로젝트를 찾을 수 없습니다.</p>
      </main>
    );
  }

  return (
    <div className="project-detail-wrap">
      {/* 왼쪽 상단 Back 버튼 */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      <section className="project-detail">
        {/* 왼쪽: 큰 이미지 */}
        <div className="project-detail-visual">
          <img src={project.image} alt={project.title} />
        </div>

        {/* 오른쪽: 텍스트 */}
        <div className="project-detail-content">
          <h1 className="project-detail-title">{project.title}</h1>

          <p className="project-detail-desc">
            {project.detailDesc || project.desc}
          </p>

          <div className="project-type">{project.type}</div>

          <div className="project-detail-meta">
            <div className="meta-block">
              <h3>TERM.</h3>
              <p>{project.term || "-"}</p>
            </div>
            <div className="meta-block">
              <h3>WORK.</h3>
              <p>{project.work || "-"}</p>
            </div>
          </div>

          {/* 오른쪽 아래 버튼들 */}
          <div className="project-detail-footer">
            {hasCode && (
              <button
                type="button"
                className="project-code-btn"
                onClick={() => setIsCodeOpen(true)}
              >
                CODE
              </button>
            )}

            {(project.siteUrl || project.pdfUrl) && (
              <a
                href={project.pdfUrl || project.siteUrl}
                target={project.pdfUrl ? "_self" : "_blank"}
                rel="noreferrer"
                className="project-link-btn"
                download={project.pdfUrl ? "" : undefined}
              >
                <button type="button" className="project-code-btn">
                  Web link
                </button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 코드 모달 */}
      {isCodeOpen && hasCode && (
        <div
          className="code-modal-backdrop"
          onClick={() => setIsCodeOpen(false)}
        >
          <div
            className="code-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="code-modal-header">
              <div className="code-tabs">
                {project.code?.html && (
                  <button
                    className={`code-tab ${
                      activeTab === "html" ? "is-active" : ""
                    }`}
                    onClick={() => setActiveTab("html")}
                  >
                    HTML
                  </button>
                )}
                {project.code?.css && (
                  <button
                    className={`code-tab ${
                      activeTab === "css" ? "is-active" : ""
                    }`}
                    onClick={() => setActiveTab("css")}
                  >
                    CSS
                  </button>
                )}
                {Array.isArray(project.code?.js) &&
                  project.code.js.map((item, i) => (
                    <button
                      key={i}
                      className={`code-tab ${
                        activeTab === `js-${i}` ? "is-active" : ""
                      }`}
                      onClick={() => setActiveTab(`js-${i}`)}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>
              <button
                className="code-close-btn"
                onClick={() => setIsCodeOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="code-modal-body">
              <pre className="code-block">
                <code>
                  {activeTab === "html" && project.code?.html}
                  {activeTab === "css" && project.code?.css}
                  {Array.isArray(project.code?.js) &&
                    project.code.js.map((item, i) =>
                      activeTab === `js-${i}` ? item.content : ""
                    )}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}

      <CursorSmoke />
    </div>
  );
}
