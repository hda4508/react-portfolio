import React from "react";
import Header from "../components/Header.jsx";
import kooImg from "../assets/koo.jpg";
import copsImg from "../assets/cops.png";
import lomImg from "../assets/lom.png";
import onepageImg from "../assets/onepage.png";
import FPSImg from "../assets/FPS.png";
import pongImg from "../assets/pang.png";
import jImg from "../assets/3d.png";
import CursorSmoke from "../components/CursorSmoke.jsx";
import { useNavigate } from "react-router-dom";
import pdf from "../assets/로켓프레시_리뉴얼.pdf";
import pImg from "../assets/p.png";
import ppImg from "../assets/pp.png";
import pdf1 from "../assets/계원예술대학교_메인리뉴얼.pdf";
import resumePDF from "../assets/이력서.pdf";


const skillCategories = [
  {
    id: "development",
    label: "development",
    columns: [
      [
        {
          name: "HTML",
          desc: "시맨틱 태그와 접근성을 고려한 구조 설계, 반응형 레이아웃 구성, 웹 표준 기반 마크업",
        },
        {
          name: "JavaScript",
          desc: "사용자 조작 제어, 상태 기반 UI 구현, DOM 조작 및 이벤트 중심 인터랙션 개발",
        },
        {
          name: "Node.js",
          desc: "백엔드 서비스, API 서버 구축 및 간단한 인증/데이터 처리",
        },
      ],
      [
        {
          name: "CSS",
          desc: "Flex/Grid 기반 레이아웃 구성, 미세한 인터랙션 조정, 반응형 스타일링 및 애니메이션 제작",
        },
        {
          name: "React",
          desc: "컴포넌트 구조 설계, 라우팅, 훅 기반 상태 제어, 데이터 흐름에 따른 UI 렌더링",
        },
        {
          name: "GitHub",
          desc: "Git 브랜치 전략 사용, 변경 이력 관리, GitHub Pages를 통한 배포 경험",
        },
      ],
    ],
  },
  {
    id: "design",
    label: "Design",
    columns: [
      [
        {
          name: "Figma",
          desc: "와이어프레임/프로토타입 제작, 인터랙션 플로우 구성, 협업 기반 디자인 시스템 활용",
        },
        {
          name: "Photoshop",
          desc: "이미지 보정 및 합성, 그래픽 요소 제작, 포트폴리오용 시각 자료 디자인",
        },
      ],
      [
        {
          name: "Illustrator",
          desc: "벡터 기반 그래픽 제작, 아이콘·심볼 디자인, 로고·포트폴리오용 시각 요소 제작",
        },
      ],
    ],
  },
  {
    id: "Planning",
    label: "Planning",
    columns: [
      [
        {
          name: "Powerpoint",
          desc: "슬라이드 구성·정보 구조화, 발표용 시각 자료 디자인, 프레젠테이션 스토리라인 제작",
        },
        {
          name: "한글 (HWP)",
          desc: "기획서·보고서 작성, 핵심 내용 정리 및 문서 구조화, 표·도형·이미지를 활용한 시각적 문서 편집",
        },
      ],
      [
        {
          name: "Word",
          desc: "문서 작성 및 편집, 정보 정리와 문서 구조화, 표·도형·이미지를 활용한 시각적 자료 구성",
        },
      ],
    ],
  },
];


function SkillItem({ name, desc }) {
  return (
    <div className="skill-item">
      <div className="skill-item-head">
        <h4 className="skill-item-name">{name}</h4>
        <div className="skill-item-bar" />
      </div>
      <p className="skill-item-desc">{desc}</p>
    </div>
  );
}

export const projects = [
  {
    id: 1,
    title: "COPS",
    category: "development",
    image: copsImg,
    desc: "실시간 군중 재난 예측·대응 서비스",

    type: "TEAM PROJECT",
    term: "2025.09 - 2025.11",
    work: "아이디어 도출, 디지털 피드백, 웹사이트 제작",
    detailDesc:
      "‘COPS’는 군중이 몰릴 장소를 사전에 예측하고, 현장에서 신속한 대피를 유도하는 군중 안전 서비스입니다. 이태원 압사 사고처럼 예방과 대응 실패로 인한 참사를 막기 위해, 경찰과 시민 모두가 쉽게 사용할 수 있도록 개발되었으며, 졸업작품 학과 우수작으로 선정되었습니다.",
    siteUrl: "https://hda4508.github.io/COPS",

    skills: ["HTML", "CSS", "JavaScript", "Figma", "GitHub"],

    // 
    //
    //
    ///
    ////
    //////
    /////////
    ////
    // 코드 부분

    code: {
      js: [
        {
          label: "dot 부분 js",
          content: `(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const root = document.querySelector('.main-dot');
  if (!root) return;

  const dots = root.querySelectorAll('[class^="m-dot"]');

  dots.forEach(dot => {
    const svg = dot.querySelector('svg');
    let glow = '115,255,0';
    if (svg) {
      const redCircle = svg.querySelector('circle[fill="#FF0000"]');
      const yellowCircle = svg.querySelector('circle[fill="#FFD24B"]');
      if (redCircle) glow = '255,0,0';
      else if (yellowCircle) glow = '255,210,75';
    }
    dot.style.setProperty('--glow', glow);
    const baseScale = 0.98 + Math.random() * 0.06;
    dot.style.setProperty('--base-scale', baseScale.toFixed(3));
  });

  function twinkleOnce(el) {
    if (!el || el.classList.contains('twinkling')) return;
    const dur = 520 + Math.random() * 480;
    el.style.setProperty('--twinkle-dur', \`\${Math.round(dur)}ms\`);
    el.classList.add('twinkling');
    setTimeout(() => el.classList.remove('twinkling'), dur);
  }

  let alive = false;
  let timerId = null;

  function loop() {
    if (!alive) return;
    const burst = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < burst; i++) {
      const pick = dots[Math.floor(Math.random() * dots.length)];
      twinkleOnce(pick);
    }
    const next = 120 + Math.random() * 420;
    timerId = setTimeout(loop, next);
  }

  function start() {
    if (!alive) {
      alive = true;
      loop();
    }
  }

  function stop() {
    alive = false;
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) start();
      else stop();
    });
  }, { root: null, threshold: 0.1 });

  io.observe(root);

  root.addEventListener('pointerover', (e) => {
    const wrapper = e.target.closest('[class^="m-dot"]');
    if (wrapper) twinkleOnce(wrapper);
  });

  // Top 버튼 등으로 재진입했을 때 재초기화
  document.addEventListener('app:reinit', () => {
    root.querySelectorAll('.twinkling').forEach(el =>
      el.classList.remove('twinkling')
    );
    stop();
    try {
      io.unobserve(root);
    } catch {}
    requestAnimationFrame(() => {
      try {
        io.observe(root);
      } catch {}
    });
  });
})();`
        },
        {
          label: "그래프 부분 js",
          content: `document.addEventListener("DOMContentLoaded", () => {
  const scope = document.querySelector(".servey-first[data-replay-scope]");
  if (!scope) return;

  const graph = scope.querySelector("#graph-1");
  const list  = scope.querySelector("#graph-1-list");
  if (!graph && !list) return;

  let io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el === graph) graph.classList.add("is-active");
      if (el === list)  list.classList.add("show");
    });
  }, { root: null, threshold: 0.3 });

  if (graph) io.observe(graph);
  if (list)  io.observe(list);

  document.addEventListener('app:reinit', () => {
    graph && graph.classList.remove('is-active');
    list && list.classList.remove('show');
    try { io.disconnect(); } catch {}
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el === graph) graph.classList.add("is-active");
        if (el === list)  list.classList.add("show");
      });
    }, { root: null, threshold: 0.3 });
    if (graph) io.observe(graph);
    if (list)  io.observe(list);
  });
});`
        },
        {
          label: "온보딩 부분 js",
          content: `document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#Service");
  if (!section) return;

  const lineBoxes = [
    section.querySelector(".onboarding-line1"),
    section.querySelector(".onboarding-line2"),
    section.querySelector(".onboarding-line3"),
  ].filter(Boolean);

  const stepTexts = Array.from(
    section.querySelectorAll(".onboarding-step .step")
  );
  const videos = Array.from(
    section.querySelectorAll(".onboarding-content-sub video")
  );

  const rateMap = new Map([
    [".onboarding-sub1", 3.0],
    [".onboarding-sub2", 7.0],
    [".onboarding-sub3", 1.7],
  ]);

  (function ensureLineCSS() {
    const css = \`
      .onboarding-line1,
      .onboarding-line2,
      .onboarding-line3 {
        width: 0;
        height: 2px;
        overflow: hidden;
        transition: width 700ms ease;
        will-change: width;
      }
      .onboarding-line1 svg,
      .onboarding-line2 svg,
      .onboarding-line3 svg {
        display: block;
        width: 100%;
        height: 2px;
      }
      .onboarding-step .step {
        opacity: 0;
        transform: translateY(8px);
        transition: 0.42s ease;
      }
      .onboarding-step .step.show {
        opacity: 1;
        transform: none;
      }
    \`;
    if (!document.querySelector('style[data-onboarding-style]')) {
      const tag = document.createElement("style");
      tag.setAttribute("data-onboarding-style", "true");
      tag.textContent = css;
      document.head.appendChild(tag);
    }
  })();

  const initState = () => {
    stepTexts.forEach((s) => s.classList.remove("show"));
    videos.forEach((v) => {
      v.classList.remove("active", "playing");
      try {
        v.pause();
      } catch {}
      try {
        v.currentTime = 0;
      } catch {}
      v.muted = true;
      v.setAttribute("muted", "");
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("autoplay", "");
      v.preload = "auto";
      for (const [sel, r] of rateMap) {
        if (v.matches(sel)) {
          v.playbackRate = r;
          break;
        }
      }
    });
    lineBoxes.forEach((b) => {
      if (b) b.style.width = "0px";
    });
  };
  initState();

  const getTargetWidth = (box) => {
    const dw = parseFloat(box?.dataset?.width);
    if (!Number.isNaN(dw) && dw > 0) return dw;

    const svg = box?.querySelector("svg");
    const wAttr = parseFloat(svg?.getAttribute("width"));
    if (!Number.isNaN(wAttr) && wAttr > 0) return wAttr;

    const vb = svg?.getAttribute("viewBox");
    if (vb) {
      const p = vb.split(/\\s+/).map(Number);
      if (p.length === 4 && p[2] > 0) return p[2];
    }
    return Math.max(0, Math.round(box?.scrollWidth || 0));
  };

  let targetWidths = [];
  const measureTargets = () => {
    targetWidths = lineBoxes.map(getTargetWidth);
  };
  measureTargets();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(measureTargets);
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      const before = targetWidths.join(",");
      measureTargets();
      if (targetWidths.join(",") !== before && !running) {
        lineBoxes.forEach((b) => {
          if (b) b.style.width = "0px";
        });
      }
    }, 120)
  );

  window.addEventListener("orientationchange", () =>
    setTimeout(() => {
      measureTargets();
      lineBoxes.forEach((b) => {
        if (b) b.style.width = "0px";
      });
    }, 150)
  );

  function debounce(fn, wait) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), wait);
    };
  }

  const drawLine = (i) =>
    new Promise((res) => {
      const box = lineBoxes[i],
        w = targetWidths[i];
      if (!box || !w) return res();
      requestAnimationFrame(() => {
        box.style.width = w + "px";
        setTimeout(res, 750);
      });
    });

  const revealStep = (i) =>
    new Promise((res) => {
      const s = stepTexts[i];
      if (!s) return res();
      s.classList.add("show");
      setTimeout(res, 420);
    });

  const playVideo = (i) =>
    new Promise(async (res) => {
      const v = videos[i];
      if (!v) return res();

      v.classList.add("active");

      if (v.readyState < 1)
        await new Promise((r) => {
          const onMeta = () => {
            v.removeEventListener("loadedmetadata", onMeta);
            r();
          };
          v.addEventListener("loadedmetadata", onMeta);
          setTimeout(() => {
            v.removeEventListener("loadedmetadata", onMeta);
            r();
          }, 1500);
        });

      if (v.readyState < 2)
        await new Promise((r) => {
          const onReady = () => {
            v.removeEventListener("loadeddata", onReady);
            r();
          };
          v.addEventListener("loadeddata", onReady);
          setTimeout(() => {
            v.removeEventListener("loadeddata", onReady);
            r();
          }, 1500);
        });

      for (const [sel, r] of rateMap) {
        if (v.matches(sel)) {
          v.playbackRate = r;
          break;
        }
      }

      try {
        v.currentTime = 0;
      } catch {}
      v.classList.add("playing");

      const tryPlay = () => v.play();

      let endedListener;
      const endedP = new Promise((r) => {
        endedListener = () => {
          v.classList.remove("playing");
          r("ended");
        };
        v.addEventListener("ended", endedListener, { once: true });
      });

      const expected =
        v.duration && isFinite(v.duration)
          ? v.duration / (v.playbackRate || 1)
          : 6;
      const timeoutMs = Math.max(
        1200,
        Math.floor(expected * 1000) + 400
      );
      const timeoutP = new Promise((r) =>
        setTimeout(() => r("timeout"), timeoutMs)
      );

      let kicked = false;
      const kick = (e) => {
        if (!section.contains(e.target)) return;
        if (kicked) return;
        kicked = true;
        tryPlay()
          .catch(() => {})
          .finally(() => {
            section.removeEventListener("click", kick, true);
          });
      };
      section.addEventListener("click", kick, true);

      try {
        await tryPlay();
      } catch {}

      const result = await Promise.race([endedP, timeoutP]);
      section.removeEventListener("click", kick, true);

      if (result === "timeout" && endedListener) {
        v.classList.remove("playing");
        v.removeEventListener("ended", endedListener);
      }

      res();
    });

  let running = false;
  let finished = false;
  const resetAll = () => {
    running = false;
    finished = false;
    initState();
  };

  const run = async () => {
    if (running || finished) return;
    running = true;
    try {
      await drawLine(0);
      await revealStep(0);
      await playVideo(0);

      await drawLine(1);
      await revealStep(1);
      await playVideo(1);

      await drawLine(2);
      await revealStep(2);
      await playVideo(2);

      finished = true;
    } finally {
      running = false;
    }
  };

  const getIOOptions = () => {
    const vm = Math.round(window.innerHeight * 0.25);
    return {
      root: null,
      threshold: 0.2,
      rootMargin: \`-\${vm}px 0px -\${vm}px 0px\`,
    };
  };

  function handleIO(entries) {
    entries.forEach((e) => {
      if (e.target !== section) return;
      if (e.isIntersecting) run();
      else resetAll();
    });
  }

  let io = new IntersectionObserver(handleIO, getIOOptions());
  io.observe(section);

  window.addEventListener(
    "resize",
    debounce(() => {
      const newOpts = getIOOptions();
      io.disconnect();
      io = new IntersectionObserver(handleIO, newOpts);
      io.observe(section);
    }, 150)
  );

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !finished) {
      run();
    }
  });

  // reinit
  document.addEventListener("app:reinit", () => {
    resetAll();
    // io는 살아있으므로 필요 시 재측정만 수행
  });
});
`
        },
        {
          label: "디자인 시스템 부분 js",
          content: `document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".line-box");
  if (!box) return;

  const svgWrap = box.querySelector(".line-box-line");
  const imgWrap = box.querySelector(".line-box-img");
  const linesAll = Array.from(svgWrap.querySelectorAll("line"));
  const horizontals = [];
  const verticals = [];

  const systemText = document.querySelector(".system-text");
  const designImgBox = document.querySelector(".design-img-box");

  [systemText, designImgBox].forEach((el) => {
    if (el) el.classList.add("reveal-init");
  });

  linesAll.forEach((line) => {
    const y1 = parseFloat(line.getAttribute("y1"));
    const y2 = parseFloat(line.getAttribute("y2"));
    const len = line.getTotalLength();

    line._len = len;
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;

    if (!Number.isNaN(y1) && !Number.isNaN(y2) && y1 === y2) {
      horizontals.push(line);
    } else {
      verticals.push(line);
    }
  });

  const drawGroup = (lines, duration = 900) =>
    new Promise((resolve) => {
      requestAnimationFrame(() => {
        lines.forEach((l) => {
          l.style.strokeDashoffset = 0;
        });
        setTimeout(resolve, duration + 50);
      });
    });

  const revealLogo = () =>
    new Promise((resolve) => {
      imgWrap.classList.add("show");
      setTimeout(resolve, 700);
    });

  const revealSystemText = () =>
    new Promise((resolve) => {
      if (systemText) systemText.classList.add("reveal-in");
      setTimeout(resolve, 500);
    });

  const revealDesignBox = () =>
    new Promise((resolve) => {
      if (designImgBox) designImgBox.classList.add("reveal-in");
      setTimeout(resolve, 500);
    });

  const runSequence = async () => {
    await drawGroup(horizontals, 900);
    await drawGroup(verticals, 900);
    await revealLogo();
    await revealSystemText();
    await revealDesignBox();
  };

  let played = false;
  let io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !played) {
          played = true;
          runSequence().finally(() => obs.unobserve(entry.target));
        }
      });
    },
    { threshold: 0.7 }
  );

  io.observe(box);

  // reinit
  document.addEventListener("app:reinit", () => {
    linesAll.forEach((l) => {
      if (typeof l._len === "number") {
        l.style.strokeDasharray = l._len;
        l.style.strokeDashoffset = l._len;
      }
    });

    if (imgWrap) imgWrap.classList.remove("show");
    if (systemText) systemText.classList.remove("reveal-in");
    if (designImgBox) designImgBox.classList.remove("reveal-in");

    [systemText, designImgBox].forEach((el) => {
      if (el && !el.classList.contains("reveal-init")) {
        el.classList.add("reveal-init");
      }
    });

    document
      .querySelectorAll(".reveal-in")
      .forEach((el) => el.classList.remove("reveal-in"));

    played = false;

    try {
      io.disconnect();
    } catch {}

    io.observe(box);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fontSystem = document.querySelector(".font-system");
  if (!fontSystem) return;

  // 촤르륵 대상들 수집
  const targets = [];

  const leftTitle = document.querySelector(".font-color");
  const leftSub = document.querySelector(".system-subtext");
  const leftMain = document.querySelector(".system-main");

  if (leftTitle) targets.push(leftTitle);
  if (leftSub) targets.push(leftSub);
  if (leftMain) targets.push(leftMain);

  targets.push(
    ...document.querySelectorAll(
      ".font-content1 .system-content1, .font-content1 .system-content2, .font-content1 .system-content3, .font-content1 .system-content4, .font-content1 .system-content5"
    )
  );
  targets.push(
    ...document.querySelectorAll(
      ".font-content2 .system-content6, .font-content2 .system-content7, .font-content2 .system-content8, .font-content2 .system-content9, .font-content2 .system-content10"
    )
  );

  const colorTitle = document.querySelector(".font-color2");
  if (colorTitle) targets.push(colorTitle);

  targets.push(
    ...document.querySelectorAll(
      ".cops-color1, .cops-color2, .cops-color3, .cops-color4"
    )
  );
  targets.push(
    ...document.querySelectorAll(
      ".color7-1, .color7-2, .color7-3, .color7-4, .color7-5, .color7-6, .color7-7"
    )
  );

  const setInit = () => {
    targets.forEach((el) => {
      el.classList.remove("reveal-in");
      el.classList.add("reveal-init");
      el.style.transitionDelay = "";
    });
  };
  setInit();

  const staggerIn = (elements, baseDelay = 80) => {
    elements.forEach((el, i) => {
      el.style.transitionDelay = \`\${i * baseDelay}ms\`;
      el.classList.add("reveal-in");
    });
  };

  const makeObserver = () =>
    new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          staggerIn(targets, 80);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );

  let io = makeObserver();
  io.observe(fontSystem);

  // Top 클릭 후 재시동
  document.addEventListener("app:reinit", () => {
    setInit();
    try {
      io.disconnect();
    } catch {}
    io = makeObserver();
    io.observe(fontSystem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#source-btn .source-btn");
  const urlBox = document.querySelector("#source-url");
  if (!btn || !urlBox) return;

  btn.addEventListener("click", () => {
    urlBox.classList.toggle("show");
  });
});
`
        },

      ]
    },
  },
  {
    id: 2,
    title: "LOM",
    category: "development",
    image: lomImg,
    desc: "글로 쓴 정보와 영화가 남긴 말들",

    type: "PERSONAL PROJECT",
    term: "2025.05 - 2025.06",
    work: "기획, 디자인, 개발 총괄",
    detailDesc: "‘LOM’은 책 속 문장을 기반으로 장면을 재해석하고, 이를 영화·드라마 같은 시각적 미디어로 확장하는 프로젝트입니다. 텍스트가 가진 감정과 분위기를 시각적 언어로 옮겨 담아, 글에서 장면으로 이어지는 경험을 누구나 쉽게 이해할 수 있도록 구성했으며, 기획·디자인·구현 모두 직접 수행했습니다.",
    siteUrl: "https://hda4508.github.io/LOM/",

    skills: ["HTML", "CSS", "React", "Figma", "GitHub"],

    code: {
      js: [
        {
          label: "메인 물결 js",
          content: `import React, { useEffect, useRef, useState } from "react";
import "../styles/ScrollIndicator.css";

function ScrollIndicator() {
  const [offset, setOffset] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => prev + 0.02);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="scroll-container">
      <div className="dot-group">
        {[...Array(7)].map((_, i) => {
          const y = Math.sin(i * 0.9 + offset) * 7;              // 부드러운 위아래 곡선
          const opacity = 0.4 + Math.sin(i * 0.9 + offset) * 0.6; // 깜빡이듯 밝기 변화

          return (
            <span
              key={i}
              className="dot"
              style={{
                transform: \`translateY(\${y}px)\`,
                opacity: opacity.toFixed(2), // 0 ~ 1 사이의 부드러운 깜빡임
              }}
            />
          );
        })}
      </div>
      <div className="scroll-arrow">↓</div>
    </div>
  );
}

export default ScrollIndicator;
`
        },
        {
          label: "아카이빙 jsx",
          content: `export default function Archive() {
  const [books, setBooks] = useState([]);
  const [quoteIds, setQuoteIds] = useState([]);

  /* ── 처음 로드할 때 localStorage에서 꺼냄 ── */
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
    const savedIds   = JSON.parse(localStorage.getItem('likedQuotes')) || [];
    setBooks(savedBooks);
    setQuoteIds(savedIds);
  }, []);

  /* ── 언라이크 ── */
  const unlikeBook = (id) => {
    const updated = books.filter((b) => b.id !== id);
    setBooks(updated);
    localStorage.setItem('likedBooks', JSON.stringify(updated));
  };

  const unlikeQuote = (id) => {
    const updatedIds = quoteIds.filter((q) => q !== id);
    setQuoteIds(updatedIds);
    localStorage.setItem('likedQuotes', JSON.stringify(updatedIds));
  };

  const likedQuotes = quotes.filter((q) => quoteIds.includes(q.id));

  return (
    <section className="archive-wrapper">
      <h2 className="archive-title">My Archive</h2>

      {/* === 하나도 없을 시 안내 === */}
      {books.length === 0 && likedQuotes.length === 0 ? (
        <p className="empty-text">아직 좋아요한 콘텐츠가 없습니다.</p>
      ) : (
        <>
          {/* ───────── 책 카드 리스트 ───────── */}
          {books.length > 0 && (
            <>
              <h3 className="section-heading">Books</h3>
              <div className="archive-grid">
                {books.map((book) => (
                  <div key={book.id} className="archive-card">
                    <img src={book.image} alt={book.title} />
                    <div className="card-info">
                      <p className="card-title">{book.title}</p>
                      <p className="card-author">{book.author}</p>
                    </div>
                    <button
                      className="unlike-btn"
                      onClick={() => unlikeBook(book.id)}
                    >
                      ♥
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ───────── 명대사 카드 리스트 ───────── */}
          {likedQuotes.length > 0 && (
            <>
              <h3 className="section-heading">Scenes / Quotes</h3>
              <div className="archive-grid quotes">
                {likedQuotes.map((q) => (
                  <div key={q.id} className="quote-card">
                    <p className="quote-text">“{q.text}”</p>
                    <p className="quote-source">— {q.source}, {q.year}</p>
                    <button
                      className="unlike-btn"
                      onClick={() => unlikeQuote(q.id)}
                    >
                      ♥
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

`
        }

      ]
    },
  },
  {
    id: 3,
    title: "ONE PAGE",
    category: "development",
    image: onepageImg,
    desc: "책을 소개하는 사이트",

    type: "PERSONAL PROJECT",
    term: "2025.03 - 2025.04",
    work: "기획, 디자인, 개발 총괄",
    detailDesc: "‘onepage’는 책 속 장면을 한 페이지로 정리해 보여주는 아카이브 프로젝트입니다. 각 장면의 핵심 내용을 직관적으로 전달할 수 있도록 구성했으며, 텍스트와 이미지를 조합해 사용자가 책의 분위기와 흐름을 한눈에 이해할 수 있게 설계했습니다. 기획·디자인·구현 과정까지 모두 직접 수행했습니다.",
    siteUrl: "https://hda4508.github.io/onepage/",

    skills: ["HTML", "CSS", "React", "Figma", "GitHub"],

    code: {
      js: [
        {
          label: "이미지 슬라이더 jsx",
          content: `function QuoteSlider({
  imageSrc,     // O: 이미지 주소
  imageAlt,     // E: 이미지 대체 텍스트
  overlayText,  // y: 이미지 위에 깔리는 문장
  onPrev,       // v: 왼쪽 화살표 클릭 핸들러
  onNext,       // h: 오른쪽 화살표 클릭 핸들러
  onClickSlide, // x: 슬라이드 전체 클릭 시 실행
}) {
  return (
    <div className="slider-container">
      {/* 왼쪽 화살표 */}
      <button className="arrow left" onClick={onPrev}>
        ‹
      </button>

      {/* 가운데 슬라이드 한 장 */}
      <div
        className="slide"
        onClick={onClickSlide}
        style={{ cursor: "pointer" }}
      >
        <div className="image-container">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="overlay">
          <p>{overlayText}</p>
        </div>
      </div>

      {/* 오른쪽 화살표 */}
      <button className="arrow right" onClick={onNext}>
        ›
      </button>
    </div>
  );
}

`
        },
        {
          label: "데이터 정렬",
          content: `const yp = "/onepage/assets/Book2-CDy9plMk.jpg"
  , vp = "/onepage/assets/Book3-BYStXW1u.jpg"
  , pp = "/onepage/assets/Book4-CsuJK5mh.jpg"
  , bp = {
    1: {
        id: 1,
        title: "이제야 언니에게",
        author: "최진영",
        genre: "소설",
        image: Bm,
        quote: “끔찍한 오늘을 찢어버리고 싶다.”
2008년 7월 14일, 그날 이후로 제아의 모든 세상이 부서졌다.,
        description: ["소외된 자들을 끈기 있게 소설의 자리로 초청하는 작가 최진영.", "이제야 말할 수 있는, 끝낼 수 없고 끝내서는 안 되는 이야기."],
        note: "소설가 최진영은 ‘우리’ 라는 단어를 ‘불행의 연대로 이루어진 무리’ 라는 뜻으로 해석하는 작가다. 삶이 무서워서 얼어붙은 사람에게 서슴없이 다가가서 짧은 칼날로 얼음을 깨뜨리는 작가다. 아마 최진영은 끝까지 우리 삶의 전부를 써낼 것이다. 그렇게 쓰는 사람으로서의 자신을 증명할 것이다. 이 모든 불행의 연대를 일인칭의 노래로 외우고 있을 것이다.",
        tag: "황현진 소설가"
    },
    2: {
        id: 2,
        title: "혁명가 붓다",
        author: "법륜",
        genre: "에세이",
        image: Lm,
        quote: "“진정한 자유는, 나를 벗어나는 데서 시작된다.”",
        description: ["진리를 깨우친 존재 붓다를 통해 바라보는 오늘의 삶.", "혁명가 붓다는 관념이 아닌 실천을 말한다."],
        note: "이 책은 고요한 사유의 공간이 아니라, 뜨겁고 치열한 삶의 현장 한가운데에서 붓다를 다시 불러낸다. 그가 말한 고통의 원인, 그가 택한 출가 그리고 해탈에 이르는 길까지 법륜 스님은 붓다의 가르침을 현대인의 언어로 번역해낸다. 우리가 집착하고 있는 ‘나’라는 감옥에서 어떻게 벗어나야 하는지를 붓다는 이미 2600년 전 말해줬다. 그 가르침은 단순한 철학이 아닌, 실천 가능한 삶의 기술이다.",
        tag: "김응철 교수"
    },
    3: {
        id: 3,
        title: "소년이 온다",
        author: "한강",
        genre: "소설",
        image: kf,
        quote: "“네가 죽은 뒤에도 네 몸에서 빠져나온 목소리는 너를 기억하는 사람들의 몸 안에서 살아갈 것이다.”",
        description: ["1980년 5월, 광주. 한 소년은 진실을 보기 위해, 그 안으로 걸어 들어간다.", "『소년이 온다』는 광주의 참상을 정면으로 응시한 한강 작가의 슬프고도 조용한 절규다."],
        note: "소년은 단지 시신을 옮기고, 부상자를 돕고, 기록을 남길 뿐이다. 그러나 그 단순한 행위 안에 깃든 윤리와 용기, 그리고 그가 끝내 맞이해야 하는 말할 수 없는 죽음은 우리 모두에게 질문을 던진다. “당신은 지금 어떤 세계에 살고 있는가.” 이 책은 단순한 역사 소설이 아니다. 억눌린 진실, 짓밟힌 생명, 살아남은 자들의 죄의식과 고통이 가슴 깊은 곳에서 서서히 퍼져나간다.",
        tag: "박혜진 문학평론가"
    },
    4: {
        id: 4,
        title: "모순",
        author: "양귀자",
        genre: "소설",
        image: $f,
        quote: "“인생은 모순 덩어리야. 그 모순을 껴안고 살아가는 게 성숙이지.”",
        description: ["평범한 20대 여성 ‘안진진’의 시선으로 본 가족, 사랑, 결혼, 자아의 이야기.", "‘모순’ 속에 숨겨진 감정의 흐름을 따라가다 보면 어느새 나의 삶을 돌아보게 된다."],
        note: "모순』은 사랑, 가족, 자존심, 결혼과 같은 일상적인 주제를 다루면서도 ‘진짜 어른이 된다는 것’이 무엇인지 깊이 있게 묻는 작품이다. 갈등과 화해, 이해와 거리 두기 사이를 오가는 안진진의 성장 과정은 그 자체로 모순이지만, 그 안에 삶의 온기가 녹아 있다. 양귀자의 문장은 유려하면서도 섬세하고, 누구에게나 닿을 수 있는 일상의 진심을 품고 있다.",
        tag: "강유정 문학평론가"
    },
    5: {
        id: 5,
        title: "급류",
        author: "정대건",
        genre: "소설",
        image: Wf,
        quote: "“세상은 너무 빠르게 흘러가고, 나는 그 속에서 점점 작아진다.”",
        description: ["멈추지 않는 흐름 속에서 자신의 방향을 잃어가는 청춘의 이야기.", "급류』는 불확실한 미래 속에서 흔들리는 오늘의 젊음을 직시하는 소설이다."],
        note: "소년은 단지 시신을 옮기고, 부상자를 돕고, 기록을 남길 뿐이다. 그러나 그 단순한 행위 안에 깃든 윤리와 용기, 그리고 그가 끝내 맞이해야 하는 말할 수 없는 죽음은 우리 모두에게 질문을 던진다. “당신은 지금 어떤 세계에 살고 있는가.” 이 책은 단순한 역사 소설이 아니다. 억눌린 진실, 짓밟힌 생명, 살아남은 자들의 죄의식과 고통이 가슴 깊은 곳에서 서서히 퍼져나간다.",
        tag: "박혜진 평론가"
    },
    6: {
        id: 6,
        title: "마중도 배웅도 없이",
        author: "박준",
        genre: "시집",
        image: Ym,
        quote: "“사랑이 끝난 자리에 무언가 피어나고 있었다. 그건 끝내 말할 수 없는 것.”",
        description: ["떠나온 사람과 남겨진 사람 사이, 말하지 못한 마음과 흘러간 시간에 대한 시.", "『마중도 배웅도 없이』는 이별 이후의 정적과 감정을 정제된 언어로 그려낸 박준 시인의 시집이다."],
        note: "박준의 시는 한없이 조용하다. 하지만 그 조용함 속에는 말하지 못한 수많은 마음들이 웅크리고 있다. 『마중도 배웅도 없이』는 우리가 누구를 보내고, 누구를 잊지 못한 채 살아간다는 것의 의미를 묻는다. 시인은 담담하게 말하지만, 그 말에는 깊은 슬픔과 동시에 다정한 위로가 깃들어 있다. 이 책은 이별에 대해 말하지만, 동시에 그 이별 너머의 삶과 온기를 이야기한다.",
        tag: "김소연 시인"
    },
    7: {
        id: 7,
        title: "채식주의자",
        author: "한강",
        genre: "소설",
        image: Ff,
        quote: "“나는 더 이상 고기를 먹지 않기로 했다.”",
        description: ["어느 날 갑자기 채식을 선언한 여성, 그리고 그녀를 둘러싼 가족의 붕괴.", "『채식주의자』는 육체와 폭력, 자유와 저항의 문제를 감각적으로 풀어낸 한강의 대표작이다."],
        note: "『채식주의자』는 단순한 식습관의 변화에서 시작해, 사회가 요구하는 여성성과 억압, 육체의 거부와 해방이라는 주제로까지 확장되는 작품이다. 주인공 ‘영혜’는 채식을 통해 거부하고자 했던 것이 단지 고기가 아니라, 세상이 그녀의 몸에 덧씌운 모든 질서였음을 독자는 점차 깨닫게 된다. 이 작품은 한강 특유의 냉정하면서도 섬세한 문체로, 인간의 본성과 그 내면의 광기를 탐색한다.",
        tag: "정홍수 문학평론가"
    },
    8: {
        id: 8,
        title: "한국이란 무엇인가",
        author: "김영민",
        genre: "에세이",
        image: Gm,
        quote: "“우리는 한국이라는 질문 속에 살고 있다.”",
        description: ["‘한국’이라는 이름의 역사, 제도, 기억, 감정을 해부하고 되묻는 지적 에세이.", "『한국이란 무엇인가』는 익숙한 질문을 낯설게, 낯선 질문을 깊게 바라보게 만든다."],
        note: "김영민의 글은 종종 ‘재치 있다’는 말로 표현되지만, 그 언어는 단순한 농담이 아니다. 『한국이란 무엇인가』는 질문을 질문으로 던지며 독자를 사유하게 만드는 책이다. 한국이라는 공간에서 우리가 어떤 시간을 살고 있는지, 그 정체성과 허상을 해체하고 조명한다. 날카롭지만 무례하지 않고, 냉소적이지만 지적이다. 이 책은 독자를 불편하게 하되, 끝내 더 깊은 성찰로 이끈다.",
        tag: "이택광 문화평론가"
    },
    9: {
        id: 9,
        title: "손자병법",
        author: "손무",
        genre: "고전",
        image: Xm,
        quote: "“싸우지 않고 이기는 것이 최상이다.”",
        description: ["2500년 전 쓰인 전쟁의 지혜, 그러나 지금도 유효한 통찰.", "『손자병법』은 전략의 기술을 넘어서, 삶을 관통하는 사고의 방식이다."],
        note: "『손자병법』은 단순한 병법서가 아니다. 그것은 적과 싸우기 이전에 나를 아는 일, 승리를 위해서가 아니라 무모한 싸움을 피하는 지혜를 이야기한다. 손무는 전쟁을 필연으로 받아들이는 것이 아니라, 최후의 수단으로써 철저히 계산하고 제어하라고 말한다. 이 책은 조직, 인간관계, 심지어 일상 속 선택에도 적용할 수 있는 **지속 가능한 전략의 미학**을 담고 있다.",
        tag: "정혜윤 작가"
    },
    10: {
        id: 10,
        title: "어떤 행동은 나라를 바꾼다",
        author: "김우호",
        genre: "사회·정치",
        image: Qm,
        quote: "“작은 행동이 세상을 바꾸는 시작이었다.”",
        description: ["정치적 무력감과 냉소 속에서도, 실천을 멈추지 않았던 사람들의 이야기.", "『어떤 행동은 나라를 바꾼다』는 실제 사례를 통해 시민의 힘과 가능성을 증명한다."],
        note: "이 책은 ‘행동은 힘이 없다’는 통념에 반기를 든다. 저자는 거리에서, 마을에서, 작은 청원과 집회에서 벌어진 진짜 변화를 이야기하며, 우리 모두가 ‘정치하는 존재’임을 상기시킨다. 거창하지 않아도 괜찮다. 중요한 건 **불의에 반응하고, 불합리에 저항했던 마음**이다. 이 책은 사회 변화의 원동력이 ‘위대한 영웅’이 아닌, **평범한 사람들의 연대와 의지**라는 점을 조용히 증명한다.",
        tag: "정진우 사회학자"
    },
    11: {
        id: 11,
        title: "계엄과 내란을 넘어",
        author: "한인섭",
        genre: "사회·역사",
        image: Zm,
        quote: "“국가는 왜, 누구를 위해 총을 들었는가.”",
        description: ["5·18 광주와 전두환 정권, 계엄령과 내란 음모의 진실을 파헤친 기록.", "『계엄과 내란을 넘어』는 국가폭력의 실체와 그 법적·역사적 책임을 묻는 책이다."],
        note: "이 책은 국가폭력의 역사에 대한 냉철한 재구성이다. 한인섭 교수는 법학자의 시선으로 1980년의 광주와 그 전후 상황을 조망하며, ‘계엄’이라는 이름으로 자행된 **불법적 권력 장악과 시민 탄압의 전 과정을 고발**한다. 동시에 그는 단지 과거를 기록하는 것이 아니라, **지금 우리가 무엇을 잊지 말아야 하는지를 묻는다.** 정의는 뒤늦게라도 작동해야 하며, 책임은 권력의 크기만큼 무거워야 한다는 메시지가 이 책을 관통한다.",
        tag: "조국 교수"
    },
    12: {
        id: 12,
        title: "어린왕자",
        author: "앙투안 드 생텍쥐페리",
        genre: "소설",
        image: Vm,
        quote: "“가장 중요한 것은 눈에 보이지 않아.”",
        description: ["한 어린 왕자가 여러 별을 여행하며 어른들의 세계를 바라보는 이야기.", "『어린 왕자』는 사랑, 책임, 존재의 본질을 시처럼 말하는 철학적 우화다."],
        note: "『어린 왕자』는 아이의 말투를 빌렸지만 결코 아이만을 위한 책이 아니다. 생텍쥐페리는 이 짧은 이야기 속에 **사랑과 상실, 인간관계와 책임, 본질과 외형**에 대한 깊은 철학을 담았다. 어린 왕자가 떠난 별은 하나의 우주이고, 그 여정은 **어른이 되어가는 모든 이의 내면 여행**이기도 하다. 여우가 말한 '길들인다'는 의미, 장미와의 오해, 사막의 고요 속 대화는 지금도 수많은 독자들의 가슴에 남아 있다.",
        tag: "이현우(로쟈) 문학평론가"
    },
    13: {
        id: 13,
        title: "오늘은 아무래도 덮밥",
        author: "이마이 료",
        genre: "에세이",
        image: Km,
        quote: "“오늘은 뭔가 거창한 게 아니라, 그저 덮밥이면 될 것 같아.”",
        description: ["바쁜 일상 속 소박한 한 끼가 건네는 마음의 위로.", "『오늘은 아무래도 덮밥』은 평범한 하루의 소중함을 되새기게 하는 에세이다."],
        note: "이 책은 거창한 삶이 아닌, **평범한 오늘이 주는 위로**에 대해 말한다. 덮밥이라는 단어가 반복되지만, 실제로 그려지는 건 음식 이상의 감정이다. 이마이 료는 일상의 구석구석에서 마주하는 **작은 불안과 조용한 기쁨**을 투명한 문장으로 담아낸다. 바쁘고 지친 하루 끝에, 나를 위해 덮밥을 고르는 행위는 결국 **나 자신을 돌보는 다정한 선택**이라는 걸 이 책은 말한다.",
        tag: "요시다 슈이치 소설가"
    },
    14: {
        id: 14,
        title: "데미안",
        author: "헤르만 헤세",
        genre: "고전소설",
        image: wm,
        quote: "“새는 알에서 나오려고 투쟁한다. 알은 세계다.”",
        description: ["선과 악, 자아와 사회, 내면의 목소리 사이에서 갈등하는 청년의 이야기.", "『데미안』은 삶의 진실을 향해 나아가는 정신의 성장소설이다."],
        note: "『데미안』은 인간 내면의 빛과 어둠을 응시하며, **진정한 자기 발견의 여정**을 시작하게 하는 책이다. 주인공 싱클레어는 데미안이라는 인물을 통해, 세상이 규정한 선악의 이분법을 넘어, 자신의 내면과 마주한다. 헤르만 헤세는 이 작품에서 청춘의 고독, 사회적 위선, 영혼의 불안을 **심오한 상징과 시적인 언어**로 풀어낸다. 이 소설은 단순한 이야기가 아니라, **한 인간이 ‘어른’이 되어가는 통과의례 그 자체**다.",
        tag: "정여울 작가"
    },
    15: {
        id: 15,
        title: "인간실격",
        author: "디자이 오사무",
        genre: "에세이",
        image: Jm,
        quote: "“나는 인간으로서 실격이다.”",
        description: ["삶을 견디는 것만으로도 버거웠던 한 남자의 철저한 고백.", "『인간실격』은 인간 존재와 위선, 소외, 절망을 끝까지 밀어붙인 소설이다."],
        note: "인간실격』은 다자이 오사무 자신의 자전적 고백에 가깝다. 주인공 요조는 타인의 시선을 견디기 위해 '익살'을 무기로 삼지만, 그마저도 부서진 뒤에 찾아온 것은 **철저한 소외감과 자아 붕괴**였다.  이 작품은 누군가에게는 너무 어둡고 아프지만, 누군가에게는 처음으로 '이해받는 기분'을 안겨주는 문장들로 가득하다. 다자이의 문장은 절망을 가르치는 것이 아니라, **절망을 살아낸 자만이 말할 수 있는 방식으로 쓰여진 생의 기록**이다.",
        tag: "김연수 소설가"
    },
    16: {
        id: 16,
        title: "수키와 니니",
        author: "박서연",
        genre: "소설",
        image: sh,
        quote: "“단 한 가지 확신할 수 있었던 건 그 순간 내 인생의 흐름이 바뀌었고, 그렇게 만든 저 사람을 영원히 잊지 못하리라는 것뿐이었다.”",
        description: ["서로 다른 방향으로 흘러가던 두 소녀의 마음이 교차하던 찰나의 순간.", "『수키와 니니』는 성장과 상실, 존재의 흔적에 대해 말하는 감성적인 소설이다."],
        note: "『수키와 니니』는 우리가 어린 시절에 지나쳐버린 감정, 말로 다 표현되지 않았던 감정의 흔적을 되짚는다. 수키와 니니, 두 인물은 단순한 우정이나 사랑의 구조로 묘사되지 않는다. 그들은 서로의 기억 속에 깊이 박혀 있는 ‘변곡점’ 그 자체다. 박서연의 문장은 차분하지만 날카롭고, 독자의 마음을 오랜 여운 속에 머물게 한다. 이 소설은 **잊지 못할 누군가를 떠올리게 만드는 책**이다.",
        tag: "이슬아 작가"
    },
    17: {
        id: 17,
        title: "베니스의 상인",
        author: "윌리엄 셰익스피어",
        genre: "희곡",
        image: yp,
        quote: "“헤라클레스만큼이나 위엄 있게, 그러나, 사랑은 더 많이 품고서.”",
        description: ["정의와 자비, 복수와 사랑이 얽힌 인간 군상의 이야기.", "『베니스의 상인』은 고전 희곡이지만, 지금도 여전히 뜨겁게 살아 있는 인간 드라마다."],
        note: "『베니스의 상인』은 법과 감정, 정의와 자비 사이의 균열을 날카롭게 드러낸다. 안토니오와 샤일록, 그리고 포셔라는 세 인물의 대립을 통해 셰익스피어는 인간 본성의 이중성과 사회적 위선을 꼬집는다. 특히 '자비는 강요되어서는 안 되며, 하늘에서 내리는 이슬처럼 부드럽게 스며야 한다'는 명대사는 지금도 많은 독자들에게 울림을 준다. 이 작품은 **사랑의 승리만이 아니라, 인간의 모순을 직시하는 고전**으로 남아 있다.",
        tag: "김상윤 영문학자"
    },
    18: {
        id: 18,
        title: "느린 걸음",
        author: "김병훈",
        genre: "에세이",
        image: vp,
        quote: "“아 좋은 대화…… 그만한 것이 없지요, 그렇지 않습니까?”",
        description: ["정의와 자비, 복수와 사랑이 얽힌 인간 군상의 이야기.", "빠르게 흘러가는 세상 속, 잠시 멈춰 나를 바라보게 하는 문장들."],
        note: "『느린 걸음』은 말이 줄어든 시대에 '말이 가진 온기'를 되새기는 책이다. 이수진 작가는 짧은 산책처럼 흘러가는 문장 속에서 **우리가 놓치고 있는 감정과 생각을 아주 조용히 불러낸다. 때로는 혼잣말처럼, 때로는 오래 알고 지낸 친구와의 느린 대화처럼 펼쳐지는 글은, 독자에게 위로와 정서적 환기를 선물한다.이 책은 바쁘고 빠른 삶에 지친 사람들에게 **‘말 걸기’를 허락하는 다정한 쉼표** 같은 존재다.",
        tag: "장은진 작가"
    },
    19: {
        id: 19,
        title: "어떤 물질의 사랑",
        author: "천선란",
        genre: "소설",
        image: pp,
        quote: "“그곳에 아직 별이 뜬 사막이 있을까. 당신은 여전히 사막을 꿈꿀까.”",
        description: ["인간과 기계, 생명과 비생명 사이에서 피어난 낯선 감정의 기록.", "『어떤 물질의 사랑』은 존재의 본질과 외로움을 탐구하는 아름다운 SF 소설집이다."],
        note: "『어떤 물질의 사랑』은 천선란 특유의 시적 언어로, 인간 아닌 존재들이 겪는 감정과 상실, 그리움의 감도를 섬세하게 그린다. 로봇과 인간, AI와 기억, 사막과 별빛, 익숙하지 않은 조합 속에서 사랑이라는 가장 인간적인 감정이 피어난다. 이 책은 정체성이 모호한 존재들이 서로를 바라보고, 마침내 이해하려는 과정을 통해 우리가 인간임을 확인하는 방식**을 묻는다. 천선란의 세계는 낯설지만 놀랍도록 따뜻하며, **경계에서 피어나는 감정의 가능성**을 조용히 이야기한다.",
        tag: "김초엽 작가"
    },
    20: {
        id: 20,
        title: "내가 아직 쓰지 않은 것",
        author: "최승호",
        genre: "시집",
        image: Wm,
        quote: "“꽃은 자신이 왜 피는지 모른다. 모르고 핀다.”",
        description: ["일상과 존재의 경계를 허물며, 언어로 감각을 되짚는 시집.", "『내가 아직 쓰지 않은 것』은 아직 쓰지 않은 말들, 피어나지 않은 감정들을 향해 나아가는 시인의 사유를 담는다."],
        note: "최승호 시인의 언어는 단순하면서도 깊다. 그의 시는 대상을 명확히 설명하지 않으면서도, 독자의 감각 속에 강하게 새겨진다. 『내가 아직 쓰지 않은 것』은 존재의 본질을 ‘아직’이라는 시간 속에 남겨두며, 쓰지 않은 말들과 마주하는 일의 의미를 환기한다. 이 시집은 말보다는 침묵에 가까운 언어로, 독자의 내면과 조용히 대화한다.",
        tag: "문학동네 평론"
    },
    21: {
        id: 21,
        title: "토마토 컵라면",
        author: "차정은",
        genre: "에세이",
        image: If,
        quote: "“사랑은 여름의 햇살처럼 따뜻한 감정과 비슷하니까요.”",
        description: ["소소한 일상 속에서 발견한 감정의 결, 따뜻한 여름날의 기억을 떠올리게 하는 에세이.", "『토마토 컵라면』은 평범한 하루와 사소한 대화 속에서 피어나는 사랑의 순간들을 그려낸다."],
        note: "차정은 작가는 사소한 풍경 속에서도 마음의 움직임을 섬세하게 포착한다. 『토마토 컵라면』은 특별할 것 없는 일상과 그 안의 감정들을 한 편의 시처럼 써내려간 에세이다. 컵라면처럼 간단하지만 오래도록 기억에 남는 감정, 토마토처럼 다정하고 조금은 시큼한 사랑이 담긴 이 책은, 지친 하루 끝에 작은 위로가 되어준다.",
        tag: "BOOKK(부크크)"
    },
    22: {
        id: 22,
        title: "꽃을 보듯 너를 본다",
        author: "나태주",
        genre: "시집",
        image: Fm,
        quote: "“너를 좋아하는 마음은 오롯이 나의 것이오.”",
        description: ["일상의 언어로 전하는 사랑과 따뜻한 시선, 마음을 울리는 나태주 시인의 대표 시집.", "『꽃을 보듯 너를 본다』는 평범한 날들의 소중함과 존재에 대한 깊은 애정을 담고 있다."],
        note: "나태주 시인은 우리 곁에 있는 사람과 풍경을 가장 다정하게 바라보는 시인이다. 『꽃을 보듯 너를 본다』는 그의 대표작으로, 짧고 단순한 문장 속에 진심을 꾹 눌러 담았다. ‘시’가 우리를 위로할 수 있다면, 그것은 이런 말투일 것이다. 사랑하는 사람에게 건네는 시 한 줄처럼, 이 책은 읽는 내내 마음이 따뜻해지는 경험을 선사한다.",
        tag: "지혜"
    },
    23: {
        id: 23,
        title: "심장보다 단단한 토마토 한 알",
        author: "고선경",
        genre: "시집",
        image: Im,
        quote: "“투명한 잔이 더욱 투명해지도록 따라 부을 마음이 있다는 거.”",
        description: ["삶의 미묘한 감정과 일상의 틈을 섬세하게 포착하는 시집.", "『심장보다 단단한 토마토 한 알』은 감정을 통과해 전해지는 진심의 기록이다."],
        note: "고선경 시인의 언어는 맑고 투명하다. 『심장보다 단단한 토마토 한 알』은 우리가 흘려보낸 마음의 결을 되짚으며, 감정의 속살을 조심스럽게 꺼내 보여준다. 시인은 작은 사물과 순간 속에 존재의 본질을 비추며, 우리 삶이 결코 가볍지 않음을 말한다. 이 책은 당신의 하루에 ‘멈춤’을 선물하는 시집이 될 것이다.",
        tag: "열림원"
    },
    24: {
        id: 24,
        title: "우리가 빛의 속도로 갈 수 없다면",
        author: "김초엽",
        genre: "소설",
        image: Pm,
        quote: "“당신이 사라졌다는 사실이 가장 느리게 전달되었다.”",
        description: ["다양한 미래를 배경으로 한 휴머니즘 SF 단편집.", "『우리가 빛의 속도로 갈 수 없다면』은 과학의 경계를 넘어 마음의 거리를 탐구한다."],
        note: "김초엽 작가는 과학과 감성을 잇는 새로운 목소리다. 이 책은 외로움, 상실, 이해와 같은 감정들을 SF적 상상력 안에서 섬세하게 그려낸다. 우주와 미래를 배경으로 펼쳐지지만, 궁극적으로는 인간의 마음과 연결되는 이야기들. 이 책은 과학보다 더 인간적인 이야기로, 우리가 아직 도달하지 못한 관계의 속도를 되짚게 만든다.",
        tag: "허블"
    },
    25: {
        id: 25,
        title: "보건교사 안은영",
        author: "정세랑",
        genre: "소설",
        image: th,
        quote: "“친절한 사람들이 나쁜 사람들을 어떻게 이겨요.”",
        description: ["보건교사이자 유령 퇴치 능력을 가진 ‘안은영’의 활약을 그린 판타지 소설.", "일상의 균열 속에서 벌어지는 기묘하고도 다정한 이야기."],
        note: "정세랑 작가의 『보건교사 안은영』은 초현실적 사건과 따뜻한 인간애가 절묘하게 어우러진 작품이다. 귀신이 보이는 보건교사 안은영은, 학교라는 작고 폐쇄적인 공간에서 마주한 불가사의한 존재들을 향해 ‘진심’과 ‘연대’로 맞선다. 장르적 재미에만 머무르지 않고, 우리가 살아가는 세계의 어둠과 상처를 밝히는 빛 같은 소설이다.",
        tag: "민음사"
    },
    26: {
        id: 26,
        title: "봄밤의 모든 것",
        author: "백수린",
        genre: "소설",
        image: eh,
        quote: "“아직 어렸던 우리를 향해 희망을 속삭이는 듯했던 그 햇빛.”",
        description: ["과거와 현재를 오가며 펼쳐지는 감정의 결들, 상실과 회복의 서사를 담은 소설.", "『봄밤의 모든 것』은 백수린 특유의 섬세한 감정 묘사가 돋보이는 작품이다."],
        note: "『봄밤의 모든 것』은 이별과 그리움, 치유와 성찰이 교차하는 계절의 기억을 담아낸다. 백수린의 문장은 조용하고 부드럽지만, 그 안에는 삶을 꿰뚫는 깊은 통찰이 녹아 있다. 이 소설은 봄밤처럼 짧고 아름다우며, 누구에게나 있었을 법한 사랑과 상실의 순간을 떠올리게 한다.",
        tag: "문학과지성사"
    },
    27: {
        id: 27,
        title: "불편한 편의점",
        author: "김호연",
        genre: "소설",
        image: lh,
        quote: "“사는 건 원래 불편한 거야.”",
        description: ["서울역 노숙인이 편의점 야간 알바생이 되면서 벌어지는 따뜻하고 유쾌한 이야기.", "『불편한 편의점』은 작은 공간에서 피어나는 연대와 이해의 서사를 담은 소설이다."],
        note: "『불편한 편의점』은 우리 곁의 평범한 공간을 특별하게 만드는 사람들의 이야기다. 웃음과 눈물이 함께하고, 그 속에 녹아 있는 인간적인 정과 삶의 고단함이 깊은 울림을 준다. 김호연 작가는 유쾌한 문장 속에 삶의 본질적인 질문을 던지며, 따뜻한 시선으로 일상의 의미를 되짚는다.",
        tag: "나무옆의자"
    },
    28: {
        id: 28,
        title: "두 번째는 해피엔딩",
        author: "조현선",
        genre: "소설",
        image: ah,
        quote: "“네 안의 나쁜 기억과 감정, 모두 가져갈게.”",
        description: ["상처받은 인물들이 서로의 아픔을 어루만지며 다시 사랑을 배워가는 이야기.", "『두 번째는 해피엔딩』은 위로와 회복, 그리고 새로운 시작을 그리는 따뜻한 로맨스 소설이다."],
        note: "『두 번째는 해피엔딩』은 첫사랑처럼 아릿하고, 성장처럼 단단한 이야기다. 조현선 작가는 사람 사이의 틈을 섬세하게 채우며, 현실적인 인물들 속에서 독자 스스로를 발견하게 만든다. 해피엔딩은 '두 번째'일 수 있다는 믿음을 이 책은 조용히 전한다.",
        tag: "북로망스"
    },
    29: {
        id: 29,
        title: "하늘을 봐, 바람이 불고 있어",
        author: "고윤",
        genre: "에세이",
        image: nh,
        quote: "“내 방식의 '진심'이라면 얘기가 다르다.”",
        description: ["무심한 하늘과 바람, 그리고 일상의 순간 속에서 진심을 발견해 가는 이야기.", "『하늘을 봐, 바람이 불고 있어』는 감정을 솔직하게 바라보는 섬세한 에세이다."],
        note: "고윤 작가의 문장은 단순하지만 진실하다. 바람이 지나가는 감각, 그 안에 담긴 나만의 생각과 진심을 마주하는 책이다. 자기 자신에게 솔직해지는 연습, 그 첫 걸음이 될 수 있는 글들이 따뜻하게 다가온다.",
        tag: "스노우폭스북스"
    },
    30: {
        id: 30,
        title: "말 더더더듬는 사람",
        author: "정두현",
        genre: "에세이",
        image: uh,
        quote: "“서로를 궁금해하면 서로에게 더 친절해질 수 있다.”",
        description: ["말이 쉽게 나오지 않는 순간들, 그 안에 숨겨진 감정과 사유를 되짚는 이야기.", "『말 더더더듬는 사람』은 더듬거리는 말 너머의 진심에 대해 고요하게 질문을 던진다."],
        note: "정두현 작가는 말이 막힐 때마다 그 안에 있는 마음을 오래 들여다본다. 말의 실패에서 시작해, 관계와 공감, 기다림에 대한 철학으로 이어지는 이 책은 말이 전부가 아니었음을 깨닫게 한다. 더듬는다는 것은 머뭇거림이 아니라, 더 깊이 듣고 말하기 위한 방식이라는 것을.",
        tag: "어떤책"
    },
    31: {
        id: 31,
        title: "매일 행복할 일만 가득할 당신에게",
        author: "김태환",
        genre: "에세이",
        image: ih,
        quote: "“매일 행복할 일만 가득할 당신에게 이 책을 전합니다.”",
        description: ["지친 하루 끝, 따뜻한 문장 한 줄이 건네는 위로.", "『매일 행복할 일만 가득할 당신에게』는 소소하지만 확실한 행복에 대해 이야기하는 에세이집이다."],
        note: "김태환 작가는 평범한 날들의 특별함을 기록한다. 이 책은 거창한 성공이나 화려한 순간이 아닌, 작은 웃음과 진심 어린 말 한마디가 얼마나 큰 힘이 되는지를 조용히 증명한다. 매일 읽어도 질리지 않는 글들 속에서, 독자는 스스로의 하루를 다정하게 바라보게 된다.",
        tag: "새벽녘"
    },
    32: {
        id: 32,
        title: "별자리들",
        author: "이주원",
        genre: "에세이",
        image: ch,
        quote: "“별들은 조용히 죽지 않는다.”",
        description: ["밤하늘의 별처럼, 사라졌지만 남겨진 감정들에 대해 이야기하는 산문집.", "『별자리들』은 기억의 조각들을 잇는 다정하고 은은한 사유의 기록이다."],
        note: "이주원의 글은 별처럼 반짝이며, 동시에 고요하게 스며든다. 누군가와의 추억, 잊힌 감정, 그리운 이름들을 하나의 별자리에 놓듯 엮어내는 그의 문장은 독자의 마음을 오래도록 맴돈다. 『별자리들』은 잊지 않아도 괜찮다고, 그리고 가끔은 기억하는 게 더 용기라고 말해주는 책이다.",
        tag: "꿈꾸는인생"
    },
    33: {
        id: 33,
        title: "물고기는 존재하지 않는다",
        author: "룰루 밀러",
        genre: "에세이",
        image: fh,
        quote: "“그 시련 속에서 가끔 우리는 우연한 승리를 거두기도 한다.”",
        description: ["질서와 혼돈 사이에서 삶의 의미를 탐색하는 과학 저널리스트의 감동 실화.", "『물고기는 존재하지 않는다』는 과학, 상실, 희망을 엮은 독특한 에세이이자 지적 모험기다."],
        note: "룰루 밀러는 과학과 감정을 엮어내는 보기 드문 작가다. 물고기를 분류하던 과학자 데이비드 스타 조던의 생애를 따라가며, 그녀는 자신만의 혼란과 상실, 그리고 회복의 이야기를 쌓아 올린다. ‘물고기’라는 허구의 질서에서 출발한 이야기는 결국 독자에게 질문을 던진다. 우리는 혼돈 속에서 어떻게 살아가야 하는가? 이 책은 아름답고 명확한 대답이 되어준다.",
        tag: "곰출판"
    }
};
`
        }

      ]
    },
  },
  {
    id: 4,
    title: "Apocalypse FPS Game",
    category: "development",
    image: FPSImg,
    desc: "아포칼립스 슈팅 게임",

    type: "PERSONAL PROJECT",
    term: "2025.05 - 2025.05",
    work: "기획, 디자인, 개발 총괄",
    detailDesc: "‘Apocalypse FPS Game’은 아포칼립스 세계관을 배경으로 한 1인칭 슈팅 게임입니다. 플레이어가 폐허가 된 도시를 탐험하며 적을 물리치는 과정에서 몰입감 있는 전투 경험을 제공하도록 구성했습니다. 조작, 타격감, 맵 구성 등 핵심 요소들이 직관적으로 느껴지도록 설계했으며, 기획·그래픽·구현까지 전 과정을 직접 제작했습니다.",
    siteUrl: "https://youtu.be/DcKGyM5ROkc",
    skills: ["Unity", "Premiere Pro"],
    code: {
      js: [
        {
          label: "X",
          content: `해당 코드는 유튜브를 통해 설명과 확인하실 수 있습니다.
https://youtu.be/DcKGyM5ROkc?si=9ViOiN9CCJqBbfkb`
        }
      ]
    },

  },
  {
    id: 5,
    title: "머쉬팡",
    category: "development",
    image: pongImg,
    desc: "버섯 포자 슈팅 게임",

    type: "PERSONAL PROJECT",
    term: "2025.03 - 2025.04",
    work: "기획, 디자인, 개발 총괄",
    detailDesc: "‘머쉬팡(MushPang)’은 버섯 세계관을 배경으로 한 캐주얼 슈팅 게임입니다. 플레이어가 다양한 버섯 포자를 발사하며 스테이지를 클리어하는 방식으로, 부담 없이 즐길 수 있는 빠른 플레이 흐름을 중심으로 구성했습니다. 캐릭터 콘셉트, 그래픽 요소, 게임 로직 등 전체 요소가 직관적으로 전달되도록 설계했으며, 기획·디자인·구현 과정까지 모두 직접 제작했습니다.",
    siteUrl: "https://youtu.be/HkyySFWHTC0",
    skills: ["Unity", "Premiere Pro"],
    code: {
      js: [
        {
          label: "X",
          content: `해당 코드는 유튜브를 통해 설명과 확인하실 수 있습니다.
https://youtu.be/HkyySFWHTC0?si=-USMypdTw1tiTNM7`
        }
      ]
    },
  },
  {
    id: 6,
    title: "따뜻한 밤의 초대",
    category: "design",
    image: jImg,
    desc: "료칸 및 온천을 주제로 3D 영상 제작",

    type: "TEAM PROJECT",
    term: "2024.10 - 2024.12",
    work: "기획, 3D 제작 및 렌더링",
    detailDesc: "‘따뜻한 밤의 초대’ 는 일본의 료칸과 온천 문화를 모티브로 따스한 밤의 온기를 3D 영상으로 담아낸 쓰리디 프로젝트입니다. 고요한 복도, 은은한 조명, 온천의 증기 같은 요소들을 시각적으로 재구성해 컨셉 설정부터 디자인, 모델링, 텍스처, 애니메이션·렌더링까지 모든 과정을 직접 수행하며, 따뜻한 휴식의 순간을 화면 안에서 부드럽게 흐르도록 구현했습니다.",
    siteUrl: "https://youtu.be/EbN9ChaSQT8",
    skills: ["3ds Max", "After Effects"],
  },
  {
    id: 7,
    title: "쿠팡 로켓프레시 리뉴얼",
    category: "planning",
    image: pImg,
    desc: "쿠팡 로켓프레시 리뉴얼",

    type: "TEAM PROJECT",
    term: "2024.10 - 2024.12",
    work: "정보 수집, 정보 구조 재정의, 플로우 설계, 화면 개편",
    detailDesc: "로켓프레시의 기존 구조에서 발견된 주요 페인포인트를 분석하고, 정보 구조(IA) 재정리·사용자 플로우 개선·메인 화면 개편을 중심으로 리뉴얼 방향을 기획했습니다. 상품 탐색 과정의 복잡함을 줄이고, 배송 정보·신선식품 신뢰도 등 핵심 정보를 빠르게 파악할 수 있도록 UI 흐름을 재설계했으며, 와이어프레임부터 프로토타입 제작, 사용자 피드백 기반 수정까지 전체 기획 과정을 직접 수행했습니다.",

    pdfUrl: pdf,
    skills: ["PowerPoint", "Figma"],
  },
  {
    id: 8,
    title: "계원예술대학교 사이트 리뉴얼",
    category: "planning",
    image: ppImg,
    desc: "계원예술대학교 사이트 리뉴얼",

    type: "TEAM PROJECT",
    term: "2024.9 - 2024.10",
    work: "정보 수집, 정보 구조 재정의, 플로우 설계, 화면 개편",
    detailDesc: "계원예술대학교 공식 홈페이지의 기존 정보 구조에서 발견된 주요 문제점을 분석하고, 내비게이션 체계 재정리·사용자 플로우 개선·메인 화면 구성 개편을 중심으로 리뉴얼 방향을 기획했습니다. 학과 소개·입시 정보·공지사항 등 핵심 콘텐츠에 보다 빠르게 접근할 수 있도록 UI 흐름을 재설계했으며, 와이어프레임 제작부터 프로토타입 구성, 사용자 피드백 기반 수정까지 전체 기획 과정을 직접 수행했습니다.",

    pdfUrl: pdf1,
    skills: ["PowerPoint", "Figma"],
  },
];



export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="wrap">
      {/* 메인 히어로 */}
      <main className="site is-visible">
        <Header />

        <section id="hero-section" className="hero" aria-label="메인 히어로">

          {/* ▼ 배경 SVG */}
          <div className="hero-bg">
            {/* 너가 준 SVG 그대로 삽입 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1121" height="999" viewBox="0 0 1121 999" fill="none">
              <g filter="url(#filter0_g_2181_12)">
                <circle cx="697.5" cy="423.5" r="323.5" fill="url(#paint0_radial_2181_12)" fillOpacity="0.55" />
              </g>
              <g filter="url(#filter1_g_2181_12)">
                <circle cx="325" cy="674" r="225" fill="url(#paint1_radial_2181_12)" fillOpacity="0.55" />
              </g>
              <defs>
                <filter id="filter0_g_2181_12" x="274" y="0" width="847" height="847" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feTurbulence type="fractalNoise" baseFrequency="1.6666666269302368 1.6666666269302368" numOctaves="3" seed="6290" />
                  <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                  <feMerge result="effect1_texture_2181_12">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
                <filter id="filter1_g_2181_12" x="0" y="349" width="650" height="650" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feTurbulence type="fractalNoise" baseFrequency="1.6666666269302368 1.6666666269302368" numOctaves="3" seed="6290" />
                  <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                  <feMerge result="effect1_texture_2181_12">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
                <radialGradient id="paint0_radial_2181_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(698 424) rotate(90.0887) scale(323)">
                  <stop stopColor="#D7F3F6" />
                  <stop offset="1" stopColor="#1E1E1E" />
                </radialGradient>
                <radialGradient id="paint1_radial_2181_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(325.348 674.348) rotate(90.0887) scale(224.653)">
                  <stop stopColor="#D7F3F6" />
                  <stop offset="1" stopColor="#1E1E1E" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* ▼ 텍스트 */}
          <h1>
            Hello<br />
            <span className="main-color">KOO Portfolio</span>
          </h1>
          <h2>Designing Flow for Better Experience</h2>
          <h2>A Developer Who Designs Flow</h2>
        </section>
      </main>


      {/* 스크롤 인디케이터 */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="line"></div>
        <div className="dot"></div>
      </div>

      {/* ===== PROFILE 섹션 (ABOUT) ===== */}
      <section
        id="profile-section"
        className="profile-section"
        aria-label="소개 및 기본 정보"
      >
        <div className="profile-inner">
          <div className="profile-media">
            <img src={kooImg} alt="profile" className="profile-image" />
          </div>



          <div className="profile-content">
            <div className="profile-header">
              <h2 className="profile-name">KOO DAHYE</h2>
              <h2 className="profile-name1">Frontend Developer</h2>
              <p className="profile-tagline">
                사용자의 흐름을 이해하고, 더 나은 사용감을 설계하는 개발자
                구다혜입니다.
              </p>
            </div>

            <div className="profile-grid">
              <div className="profile-block">
                <h3 className="profile-label">ADDRESS</h3>
                <p className="profile-text">
                  Anyang, gyeonggi-do
                  <br />
                  경기도 안양시
                </p>
              </div>

              <div className="profile-block">
                <h3 className="profile-label">EDUCATION</h3>
                <p className="profile-text">
                  KAYWON ART DESIGN
                  <br />
                  계원예술대학교 디지털미디어디자인학과
                </p>
              </div>

              <div className="profile-block">
                <h3 className="profile-label">CONTACT</h3>
                <p className="profile-text">
                  hda4508@gmail.com
                  <br />
                  (+82) 10 9263 6581
                </p>
              </div>

              <div className="profile-block">
                <h3 className="profile-label">CAMPUS ACTIVITIES</h3>
                <ul className="profile-list">
                  <li>2025.11&nbsp;&nbsp; 졸업작품 학과 우수상</li>
                  <li>2025.03&nbsp;&nbsp; 2학년 2학기 부반대표</li>
                  <li>2024.12&nbsp;&nbsp; 3D 디지털 연합 PT</li>
                  <li>2024.09&nbsp;&nbsp; 1학년 2학기 반대표</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS 섹션 ===== */}
      <section
        id="skills-section"
        className="skills-section"
        aria-label="보유 기술"
      >
        <div className="skill-title">SKILLS</div>
        <div className="skill-subtitle">
          저의 능력치를 볼 수 있습니다.
        </div>

        {skillCategories.map((cat, idx) => (
          <div key={`${cat.id} - ${idx}`} className="skill-category">
            <div className="skill-chip">{cat.label}</div>

            <div className="skill-rows">
              {/* 왼쪽 컬럼 */}
              <div className="skill-column">
                {cat.columns[0].map((item) => (
                  <SkillItem
                    key={item.name}
                    name={item.name}
                    desc={item.desc}
                  />
                ))}
              </div>

              {/* 오른쪽 컬럼 */}
              <div className="skill-column">
                {cat.columns[1]?.map((item) => (
                  <SkillItem
                    key={item.name}
                    name={item.name}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section
        id="work-section"
        className="work-section"
        aria-label="작업 포트폴리오"
      >
        <div className="skill-title">PROJECT</div>
        <div className="skill-subtitle">
          기획·디자인·개발 프로젝트를 한눈에 볼 수 있는 공간입니다.
        </div>

        <div className="project-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="project-card"
              onClick={() => navigate(`/project/ ${proj.id}`)}
            >
              <div className="project-thumb">
                <img src={proj.image} alt={proj.title} />
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>

              {/* 여기! 스킬 칩들 */}
              <div className="project-skill-chips">
                {proj.skills.map((skill, idx) => (
                  <span
                    key={`${proj.id} - ${skill} - ${idx}`}
                    className="project-skill-chip"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-title">KOO</div>
          <p className="footer-desc">
            본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다.
            <br />
            © 2025 KOO DAHYE. All Rights Reserved.
          </p>
        </div>

        <div className="footer-right">
          <a href={resumePDF} download className="resume-btn">
            이력서<br />다운로드
          </a>
        </div>


      </footer>

      <CursorSmoke />
    </div>
  );
}
