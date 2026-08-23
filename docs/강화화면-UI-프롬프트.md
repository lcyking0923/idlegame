# 강화 화면 UI 프롬프트 (캐릭터 탭)

목표 — 지금 조선검객의 강화 화면은 **크림색 납작한 카드**라 밋밋합니다.
참고 게임처럼 **어두운 목재 판 + 입체 베벨 + 금박 테두리**로 바꾸면 단번에 "만든 티"가 납니다.

아이콘(공격력·체력·회복력…)은 **이미 다 있으니 다시 안 만들어도 됩니다.**
필요한 건 **그 아이콘을 감싸는 틀과 버튼, 판때기**입니다.

---

## 0. 모든 프롬프트에 이미 붙어 있는 것

각 프롬프트 맨 아래 두 줄이 제일 중요합니다.

- **마젠타 배경** — "투명 배경으로 해줘"라고 하면 GPT가 흰색으로 뱉습니다. 순수 마젠타(#FF00FF)로 받아야 제가 깨끗하게 잘라냅니다.
- **글자 금지** — 글자는 제가 HTML로 얹습니다. 그림에 박혀 있으면 못 씁니다.

그리고 화풍을 통일하려고 아래 문장이 **모든 프롬프트에 똑같이** 들어가 있습니다. 지우지 마세요.

> Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.

---

## 1. 강화 행 판때기 ★★★ 제일 중요

**무엇** — 공격력·체력·회복력 한 줄 한 줄의 배경판. 지금은 크림색 사각형입니다.
**크기** — PNG 1장, **1200 x 320**

```
A single horizontal UI plate for a mobile RPG stat-upgrade row, empty and unadorned in the center so content can be placed on top. Dark ebony wood surface with a faint vertical grain, framed by a thin antique-gold beaded border. The inner area is slightly recessed with a soft drop shadow along the top inner edge, giving an inset carved look. Rounded corners with a radius about one eighth of the height. A very subtle warm highlight runs along the bottom edge. The plate fills the whole image with a small even margin on all four sides.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

> 가운데는 **비어 있어야** 합니다. 무늬가 가운데 있으면 가로로 늘렸을 때 뭉개집니다.

---

## 2. 아이콘 슬롯 틀

**무엇** — 검·하트·잎사귀 아이콘이 들어앉을 정사각 홈.
**크기** — PNG 1장, **512 x 512**

```
A single empty square icon slot frame for a mobile RPG UI, seen straight on. A deeply recessed dark indigo well in the center, surrounded by a chunky beveled bezel of dark ebony wood with an antique-gold rim on the outer edge and a thin gold inner line. Rounded corners. The recessed center is completely empty and flat dark indigo so an icon can be dropped in later. Soft inner shadow at the top of the well, faint warm bounce light at the bottom.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 3. 금색 비용 버튼 (강화 버튼) ★★★

**무엇** — 오른쪽의 "+1강 / 4,428냥" 버튼.
**크기** — PNG 1장에 3개 세로로, **1200 x 1200**

```
A vertical sheet of three states of the SAME wide rounded rectangular UI button for a mobile RPG, stacked top to bottom with clear magenta gaps between them, all three exactly the same size and shape, each about 2.6 times wider than tall.
Top button: ENABLED state, polished antique-gold face with a warm gradient from bright gold at the top to deeper amber at the bottom, a raised beveled edge, a thin darker gold outline, and a soft glossy highlight sweeping across the upper third.
Middle button: PRESSED state, identical shape but visually pushed in, darker and flatter with the highlight moved to the bottom and a shadow across the top.
Bottom button: DISABLED state, identical shape but desaturated to cool grey-brown, matte with no gloss, no gold.
The button faces are completely empty and unadorned.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 4. LEVEL UP 초록 버튼

**크기** — PNG 1장에 2개 세로로, **900 x 900**

```
A vertical sheet of two states of the SAME rounded rectangular UI button for a mobile RPG, stacked top to bottom with a clear magenta gap between them, both exactly the same size, each about 2.2 times wider than tall.
Top button: ENABLED state, vivid jade-green face with a gradient from bright mint at the top to deep forest green at the bottom, a raised beveled edge, a darker green outline, a glossy highlight across the upper third, and a soft outer glow suggesting it is ready to press.
Bottom button: DISABLED state, identical shape but desaturated to flat cool grey, matte, no glow.
The button faces are completely empty and unadorned.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 5. 서브탭 버튼 (강화 / 성장 / 승급)

**크기** — PNG 1장에 2개 세로로, **900 x 700**

```
A vertical sheet of two states of the SAME wide UI tab button for a mobile RPG, stacked top to bottom with a clear magenta gap between them, both exactly the same size, each about 3.4 times wider than tall, with gently rounded corners.
Top: SELECTED state, rich vermilion red face with a warm gradient, a raised bevel, a thin bright gold outline, and a soft glow.
Bottom: UNSELECTED state, identical shape but dark ebony brown, recessed and flat, with a dull bronze outline and no glow.
The faces are completely empty and unadorned.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 6. 배수 칩 (x1 / x10 / x100 / 최대)

**크기** — PNG 1장에 2개 세로로, **800 x 500**

```
A vertical sheet of two states of the SAME small pill-shaped UI chip for a mobile RPG, stacked top to bottom with a clear magenta gap between them, both exactly the same size, each about 3 times wider than tall, with fully rounded left and right ends.
Top: SELECTED state, warm antique-gold face with a soft gradient, a slim raised bevel and a bright thin outline.
Bottom: UNSELECTED state, identical shape but dark charcoal brown, flat and recessed, with a dull outline.
The faces are completely empty and unadorned.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 7. 경험치 바 (틀 + 채움)

**크기** — PNG 1장에 2개 세로로, **1200 x 500**

```
A vertical sheet of two long horizontal bar pieces for a mobile RPG progress bar, stacked top to bottom with a clear magenta gap between them, both exactly the same length and height, each about 14 times wider than tall, with fully rounded ends.
Top piece: the EMPTY TRACK. A deeply recessed dark slot in near-black indigo with a thin antique-gold rim around it and a soft inner shadow along the top edge.
Bottom piece: the FILL. A solid glossy bar of the same shape but slightly smaller, in a bright cyan-to-azure gradient, with a crisp white specular highlight running along its upper half and a soft glow.
Both pieces are completely empty and unadorned.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

**색만 바꾸면 다른 바도 됩니다.** 위 프롬프트에서 `bright cyan-to-azure` 부분만 갈아끼우세요.

| 어디 | 바꿔 넣을 말 |
|------|-------------|
| 체력바 | `deep crimson-to-scarlet` |
| 내공바 | `royal blue-to-violet` |
| 보스 체력바 | `blood red-to-orange` |
| 무맥·비급 진행바 | `emerald-to-mint green` |

---

## 8. 레벨 줄 판때기 (Lv.38 · EXP · LEVEL UP이 얹히는 판)

**크기** — PNG 1장, **1200 x 420**

```
A single horizontal UI banner plate for a mobile RPG character header, wider than it is tall, empty and unadorned in the center. Warm dark brown leather-and-wood surface, framed by an ornate antique-gold border with small Korean dancheong corner motifs at the four corners only. The inner field is flat and slightly lighter than the frame so text and a progress bar can be placed on top. Rounded corners, a soft outer drop shadow, and a faint warm highlight along the top edge.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 9. 하단 네비게이션 바

**크기** — PNG 1장, **1290 x 340**

```
A single horizontal bottom navigation bar plate for a mobile RPG, very wide and short, completely empty with no icons and no dividers. Dark lacquered ebony wood surface with a thin antique-gold line running along the top edge and a subtle warm gradient from slightly lighter at the top to near-black at the bottom. Flat bottom corners, slightly rounded top corners. A soft upward glow along the top gold line.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

**선택된 탭 표시** — 같이 만드시면 좋습니다. PNG 1장, **400 x 400**

```
A single soft glowing highlight shape for the selected tab of a mobile RPG bottom navigation bar: a vertical rounded-rectangle pool of warm golden light, brightest at the bottom and fading to nothing at the top, with a short bright gold underline bar across the very bottom. Nothing else in the image.
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, dancheong palette (antique gold #D9A441), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

---

## 10. (선택) 강화 아이콘 7종 다시 만들기

아이콘은 **이미 있어서 안 하셔도 됩니다.** 참고 게임처럼 더 두툼하게 바꾸고 싶으실 때만 쓰세요.
**크기** — PNG 1장, **1792 x 512** (가로 7칸)

```
A horizontal sprite sheet of exactly 7 mobile RPG stat icons in a single row, evenly spaced with clear magenta gaps between them, each icon centered in its own imaginary square cell of identical size. All 7 share one style: chunky rounded three-dimensional forms, thick dark outline, strong top-down lighting with a bright rim highlight and a soft drop shadow, saturated colors, and no background plate behind the icons.
From left to right the 7 icons are:
1. two crossed Korean straight swords with gold hilts
2. a glossy deep-red heart
3. a bright green medicinal herb leaf with a dewdrop
4. a golden archery target with an arrow in the bullseye
5. a jagged orange explosion burst
6. a cyan lightning bolt
7. a stack of old Korean brass coins with square center holes
Korean Joseon-dynasty dark hardwood and gold-leaf mobile RPG UI kit, beveled edges with soft inner glow, subtle satin sheen, dancheong palette (deep indigo #1E2A4A, vermilion #B93A2B, antique gold #D9A441, ebony #17120E), clean vector-like rendering, front-facing flat view, no perspective, no pixel art.
Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel outside the object. Do not use white, transparent, checkerboard, or gradient background.
No text, no letters, no numbers, no watermark anywhere in the image.
```

순서는 게임 코드의 강화 항목 순서와 같습니다 — 공격력 · 체력 · 회복력 · 치명 확률 · 치명 피해 · 공격 속도 · 냥 획득량.

---

## 우선순위

한 번에 다 안 만드셔도 됩니다.

1. **1번 행 판때기** — 이거 하나만 바꿔도 화면 인상이 제일 크게 달라집니다
2. **3번 금색 버튼**
3. **2번 아이콘 틀**
4. 4·5·6번 (버튼·탭·칩)
5. 7·8번 (바·헤더)
6. 9·10번

**1 · 2 · 3번만 있어도 "AI가 대충 만든 느낌"은 사라집니다.**

## 파일 주시는 법

폴더에 넣지 마시고 **채팅창에 그대로 올려주세요.** 번호만 알려주시면 됩니다 (예: "1번, 3번, 4번").

받아서 제가 할 일:
- 마젠타 배경 제거 → 투명 PNG
- 9분할(9-slice) 좌표 계산해서 CSS `border-image`로 연결 — 어떤 크기로 늘려도 모서리가 안 뭉개집니다
- 버튼 상태(기본 / 눌림 / 비활성) 분리해서 각각 연결
- 기존 크림색 카드 스타일 걷어내기
