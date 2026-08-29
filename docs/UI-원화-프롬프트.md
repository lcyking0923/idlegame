# 조선검객 UI 원화 프롬프트 — 창·버튼

게임은 **9분할(9-slice)** 방식으로 UI 원화를 늘려 쓴다. 모서리 장식은 그대로 두고 가운데만
늘어나므로, **모서리에 장식을 몰고 가운데는 단순하게** 그려야 어떤 크기에서도 안 깨진다.

파일을 `assets/ui/`에 넣기만 하면 게임이 자동으로 감지해 교체한다 (없으면 지금 모습 유지).

## 공통 스타일 접미사 (모든 프롬프트 끝에 붙이기)

```
Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), aged hanji paper texture, carved ebony wood and brass frame, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no characters, no drop shadow outside the frame, transparent background, PNG
```

> **중요**: `no text, no letters` 를 꼭 넣어야 한다. 안 넣으면 이미지 안에 엉뚱한 글자가 그려진다.

---

## ① 창(모달) 테두리 — `modal_frame.png`

우편함·메뉴·임무·설정 등 **모든 팝업 창**의 배경이 된다. 지금은 밋밋한 베이지 사각형이라
"AI가 만든 티"가 나는 부분.

| 항목 | 값 |
|------|-----|
| 크기 | **512×512 PNG, 투명 배경** |
| 9분할 여백 | 상 **56** / 우 **48** / 하 **56** / 좌 **48** px |
| 가운데 | 한지 질감만 — 무늬·그림 넣지 말 것 (세로로 늘어남) |
| 모서리 | 네 귀퉁이에 단청 문양 / 놋쇠 장석(경첩) |

```
ornate Korean palace window frame panel for a game popup, thick carved ebony wood border with brass corner fittings and dancheong painted patterns at the four corners, aged warm hanji paper filling the center completely flat and plain, symmetrical, seamless tileable center, viewed straight on
```

**세로로 긴 창(임무 목록)에서도 자연스러우려면**: 가운데를 반드시 균일한 한지 톤으로.

---

## ② 창 제목 현판 — `modal_title.png` (선택)

창 위쪽 제목("우편함", "메뉴")이 올라갈 나무 현판.

| 항목 | 값 |
|------|-----|
| 크기 | **512×160 PNG, 투명 배경** |
| 9분할 여백 | 상 34 / 우 **64** / 하 34 / 좌 **64** px |
| 가운데 | 글자 자리 — 어두운 나무 판만, 비워둘 것 |

```
horizontal Korean temple signboard plaque (hyeonpan), dark lacquered wood plank with gold beveled edge molding, small dancheong floral motif carved at the left and right ends only, empty flat dark wood in the middle for text, brass nail heads at corners
```

---

## ③ 메뉴 창의 가로 버튼 — `btn_menu.png` / `btn_menu_press.png`

메뉴 창의 "랭킹 · 절전모드 · 출석 체크 · 우편함 · 설정 · 닫기" 같은 **가로로 긴 버튼**.

| 항목 | 값 |
|------|-----|
| 크기 | **384×128 PNG, 투명 배경** (2장: 평상시 / 눌림) |
| 9분할 여백 | 상 32 / 우 **56** / 하 36 / 좌 **56** px |
| 가운데 | 글자 자리 — 무늬 없이 |

평상시:
```
wide horizontal game button, polished brass and dark walnut wood plate with a raised gold bevel rim, subtle dancheong cloud motif engraved at both ends, plain warm gradient surface in the middle, gentle top light
```

눌림(같은 모양, 눌린 느낌):
```
wide horizontal game button in pressed state, same brass and dark walnut plate but recessed and darker, inner shadow at the top edge, dimmer gold rim
```

> 두 장의 **테두리 두께·모양이 정확히 같아야** 눌렀을 때 버튼이 흔들리지 않는다.

---

## ④ 전장 위 동그란 버튼 — `hud_btn.png`

전장 오른쪽의 👑(임무) · 📬(우편) 동그란 버튼 판.

| 항목 | 값 |
|------|-----|
| 크기 | **256×256 PNG, 투명 배경** |
| 9분할 | 쓰지 않음 — 원형 그대로 |
| 가운데 | **비워둘 것** (아이콘이 위에 얹힘) |

```
circular game HUD button base, dark bronze medallion ring with braided rope texture on the rim and small gold studs, deep translucent dark center left completely empty, soft inner glow, top-down front view
```

---

## ⑤ 창 바깥 어둠 (선택) — 그대로 두어도 무방

지금은 반투명 검정. 원화로 바꾸고 싶다면 `overlay_vignette.png` (1024×1024, 가장자리만 어두운
비네트, 가운데 투명)를 만들면 된다.

---

## 넣는 법

만든 파일을 `D:\apps\idlegame\assets\ui\` 에 위 파일명 그대로 넣으면 끝이다.
게임이 시작할 때 파일 존재를 확인해 자동으로 원화 UI로 전환한다 (없으면 현재 디자인 유지).

## 미리 확인할 점

- **512px 원본을 40px로 줄여도** 형태가 뭉개지지 않아야 한다 (특히 ④ 동그란 버튼)
- 배경은 **완전 투명**(알파)이어야 한다. 흰 배경으로 나오면 지워서 저장할 것
- 그림자를 그림 바깥에 넣지 말 것 — 9분할로 늘리면 그림자가 이상하게 늘어난다

---

# 동료 달리기 자세 (추가 요청분)

동료 4명은 지금 **대기 / 시위 당김 / 발사 / 마무리** 4장만 있고 **달리는 자세가 없다.**
그래서 주인공이 이동할 때 대기 자세 그대로 위아래로만 흔들려 "떠다니는" 느낌이 난다.
(코드에서 앞으로 기울이기·흔들림을 넣어 완화해 두었지만, 제대로 고치려면 달리는 그림이 필요하다.)

## 받을 것

동료 4명 × **달리기 2장**(발이 엇갈린 두 순간) = 8장.
한 명분만 먼저 만들어 보내주셔도 됩니다.

| 항목 | 값 |
|------|-----|
| 크기 | 세로 **220px** 정도, 가로는 자유 · **투명 배경 PNG** |
| 파일명 | `run_매향_1.png`, `run_매향_2.png` (다른 동료도 이름만 바꿔서) |
| 방향 | **오른쪽을 보게** — 기존 그림과 같은 방향 |
| 화풍 | 기존 `comps.png` 와 같은 화풍·같은 몸 비율·같은 옷 |

> 보내주시면 제가 기존 아틀라스(`comps.png` + `comps.json`)에 이어 붙이고
> 달릴 때 두 장을 번갈아 쓰도록 연결하겠습니다.

## 매향 (신궁 · 초록 저고리에 흰 치마, 활을 든 여인)

**1번 — 발을 앞으로 뻗은 순간**
```
2D game side-view sprite of a young Korean archer woman running to the right, mid-stride with her front leg extended forward and back leg pushed off the ground, long white hanbok skirt and green jeogori jacket flowing backward from the speed, bow held low in her left hand, hair ribbon streaming behind, determined expression, painterly semi-realistic anime style, clean crisp edges, full body, facing right, no text, no background, transparent background
```

**2번 — 발이 모이며 몸이 떠오른 순간**
```
2D game side-view sprite of a young Korean archer woman running to the right, at the airborne moment of the stride with both legs gathered under her body, white hanbok skirt billowing upward, green jeogori jacket, bow held low in her left hand, hair ribbon streaming behind, painterly semi-realistic anime style, clean crisp edges, full body, facing right, no text, no background, transparent background
```

다른 동료 3명은 위 문장에서 **인물 설명만 바꾸면** 됩니다:

| 동료 | 바꿔 넣을 설명 |
|------|----------------|
| 역사(力士) | a burly Korean strongman warrior running to the right, bare muscular arms, wide trousers, heavy club on his shoulder |
| 장사치 | a Korean merchant man running to the right, carrying a bundled pack on his back, coin pouch swinging at his waist |
| 도인 | an old Korean taoist sage running to the right, long grey beard and flowing robe, wooden staff in hand |

