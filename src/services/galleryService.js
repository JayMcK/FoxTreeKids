import a1 from "../assets/gallery/1.jpg";
import a2 from "../assets/gallery/2.jpg";
import a3 from "../assets/gallery/3.jpg";
import a4 from "../assets/gallery/4.jpg";
import a5 from "../assets/gallery/5.jpg";
import a6 from "../assets/gallery/6.jpg";
import a7 from "../assets/gallery/7.jpg";
import a8 from "../assets/gallery/8.jpg";
import a9 from "../assets/gallery/9.jpg";
import a10 from "../assets/gallery/10.jpg";
import a11 from "../assets/gallery/11.jpg";
import a12 from "../assets/gallery/12.jpg";
import a13 from "../assets/gallery/13.jpg";
import a14 from "../assets/gallery/14.jpg";
import a15 from "../assets/gallery/15.jpg";
import a16 from "../assets/gallery/16.jpg";
import a17 from "../assets/gallery/17.jpg";
import a18 from "../assets/gallery/18.jpg";
import a19 from "../assets/gallery/19.jpg";
import a20 from "../assets/gallery/20.jpg";
import a21 from "../assets/gallery/21.jpg";
import a22 from "../assets/gallery/22.jpg";
import a23 from "../assets/gallery/23.jpg";
import a24 from "../assets/gallery/24.jpg";
import a25 from "../assets/gallery/25.jpg";
import a26 from "../assets/gallery/26.jpg";
import a27 from "../assets/gallery/27.jpg";
import a28 from "../assets/gallery/28.jpg";
import a29 from "../assets/gallery/29.jpg";
import a30 from "../assets/gallery/30.jpg";
import a31 from "../assets/gallery/31.jpg";
import a32 from "../assets/gallery/32.jpg";
import a33 from "../assets/gallery/33.jpg";
import a34 from "../assets/gallery/34.jpg";
import a35 from "../assets/gallery/35.jpg";
import a36 from "../assets/gallery/36.jpg";
import a37 from "../assets/gallery/37.jpg";
import a38 from "../assets/gallery/38.jpg";
import a39 from "../assets/gallery/39.jpg";
import a40 from "../assets/gallery/40.jpg";
import a41 from "../assets/gallery/41.jpg";
import a42 from "../assets/gallery/42.jpg";
import a43 from "../assets/gallery/43.jpg";
import a44 from "../assets/gallery/44.jpg";
import a45 from "../assets/gallery/45.jpg";
import a46 from "../assets/gallery/46.jpg";
import a47 from "../assets/gallery/47.jpg";
import a48 from "../assets/gallery/48.jpg";
import a49 from "../assets/gallery/49.jpg";
import a50 from "../assets/gallery/50.jpg";
import a51 from "../assets/gallery/51.jpg";
import a52 from "../assets/gallery/52.jpg";
import a53 from "../assets/gallery/53.jpg";
import a54 from "../assets/gallery/54.jpg";
import a55 from "../assets/gallery/55.jpg";
import a56 from "../assets/gallery/56.jpg";
import a57 from "../assets/gallery/57.jpg";
import a58 from "../assets/gallery/58.jpg";
import a59 from "../assets/gallery/59.jpg";
import a60 from "../assets/gallery/60.jpg";
import a61 from "../assets/gallery/61.jpg";
import a62 from "../assets/gallery/62.jpg";
import a63 from "../assets/gallery/63.jpg";
import a64 from "../assets/gallery/64.jpg";
import a65 from "../assets/gallery/65.jpg";
import a66 from "../assets/gallery/66.jpg";
import a67 from "../assets/gallery/67.jpg";
import a68 from "../assets/gallery/68.jpg";
import a69 from "../assets/gallery/69.jpg";
import a70 from "../assets/gallery/70.jpg";
import a71 from "../assets/gallery/71.jpg";
import a72 from "../assets/gallery/72.jpg";
import a73 from "../assets/gallery/73.jpg";
import a74 from "../assets/gallery/74.jpg";
import a75 from "../assets/gallery/75.jpg";
import a76 from "../assets/gallery/76.jpg";

const images = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
  a32,
  a33,
  a34,
  a35,
  a36,
  a37,
  a38,
  a39,
  a40,
  a41,
  a42,
  a43,
  a44,
  a45,
  a46,
  a47,
  a48,
  a49,
  a50,
  a51,
  a52,
  a53,
  a54,
  a55,
  a56,
  a57,
  a58,
  a59,
  a60,
  a61,
  a62,
  a63,
  a64,
  a65,
  a66,
  a67,
  a68,
  a69,
  a70,
  a71,
  a72,
  a73,
  a74,
  a75,
  a76,
];

const horizontalImages = [
  a2,
  a3,
  a4,
  a5,
  a6,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a15,
  a16,
  a17,
  a18,
  a20,
  a21,
  a23,
  a27,
  a28,
  a29,
  a30,
  a35,
  a36,
  a37,
  a38,
  a41,
  a42,
  a45,
  a46,
  a49,
  a50,
  a51,
  a52,
  a53,
  a54,
  a57,
  a60,
  a61,
  a63,
  a65,
  a68,
  a69,
  a70,
  a71,
  a72,
  a73,
  a74,
  a75,
  a76,
];

const verticalImages = [
  a1,
  a7,
  a14,
  a19,
  a24,
  a25,
  a26,
  a31,
  a32,
  a33,
  a34,
  a39,
  a43,
  a44,
  a48,
  a55,
  a56,
  a58,
  a59,
  a62,
  a64,
  a66,
];

export function getImages(total) {
  const newImages = images.slice(0, total);
  return newImages;
}

export function getHorizontalImages() {
  return horizontalImages;
}
export function getVerticalImages() {
  return verticalImages;
}
