// src/data/projects.js
import copsImg from "../assets/cops.png";
import lomImg from "../assets/lom.png";
import onepageImg from "../assets/onepage.png";
import FPSImg from "../assets/FPS.png";
import pongImg from "../assets/pang.png";
import jImg from "../assets/3d.png";

export const projects = [
  {
    id: "cops",
    title: "COPS",
    image: copsImg,
    shortDesc: "실시간 군중 재난 예측·대응 서비스",
    term: "2025.09 - 2025.11",
    work: "아이디어 도출, 디지털 피드백, 웹사이트 제작",
    detailDesc:
      "‘COPS’는 군중이 몰릴 장소를 사전에 예측하고, 현장에서 신속한 대피를 유도하는 군중 안전 서비스입니다. 이태원 압사 사고처럼 예방과 대응 실패로 인한 참사를 막기 위해, 경찰과 시민 모두가 쉽게 사용할 수 있도록 개발되었으며, 졸업작품 학과 우수작으로 선정되었습니다.",
    siteUrl: "https://example.com/cops" // 👉 진짜 배포 주소로 바꾸기
  },
  {
    id: "lom",
    title: "LOM",
    image: lomImg,
    shortDesc: "글로 쓴 정보와 영화가 남긴 말들",
    term: "2025.03 - 2025.06",
    work: "기획, 디자인, 프론트엔드 개발",
    detailDesc:
      "‘LOM’은 책 속 문장을 기반으로 장면을 재해석하고, 이를 영화·드라마 같은 시각적 미디어로 확장하는 프로젝트입니다. 텍스트가 가진 감정과 분위기를 시각적 언어로 옮겨 담아, 글에서 장면으로 이어지는 경험을 누구나 쉽게 이해할 수 있도록 구성했습니다.",
    siteUrl: "https://example.com/lom"
  },
  {
    id: "onepage",
    title: "ONE PAGE",
    image: onepageImg,
    shortDesc: "책을 소개하는 사이트",
    term: "2024.09 - 2024.11",
    work: "프론트엔드 개발, UI 디자인",
    detailDesc:
      "‘ONE PAGE’는 한 페이지에서 책의 핵심 장면과 문장을 직관적으로 탐색할 수 있는 웹사이트입니다.",
    siteUrl: "https://example.com/onepage"
  },
  {
    id: "fps",
    title: "Apocalypse FPS Game",
    image: FPSImg,
    shortDesc: "아포칼립스 슈팅 게임",
    term: "2024.06 - 2024.08",
    work: "게임 기획, 3D 맵 구성",
    detailDesc: "3D 환경에서 생존을 목표로 진행되는 1인칭 슈팅 게임입니다.",
    siteUrl: "https://example.com/fps"
  },
  {
    id: "mushpang",
    title: "머쉬팡",
    image: pongImg,
    shortDesc: "버섯 포자 슈팅 게임",
    term: "2024.03 - 2024.06",
    work: "게임 기획, UI 연출",
    detailDesc:
      "버섯 포자를 발사해 적을 제거하고 스테이지를 클리어하는 캐주얼 슈팅 게임입니다.",
    siteUrl: "https://example.com/mushpong"
  },
  {
    id: "hotnight",
    title: "따뜻한 밤의 초대",
    image: jImg,
    shortDesc: "료칸 및 온천을 주제로 3D 영상 제작",
    term: "2023.11 - 2023.12",
    work: "3D 모델링, 라이팅, 영상 편집",
    detailDesc:
      "일본식 료칸과 온천을 모티브로 한 3D 공간을 제작하고, 따뜻한 밤의 분위기를 영상으로 연출한 작업입니다.",
    siteUrl: "https://example.com/hotnight"
  }
];
