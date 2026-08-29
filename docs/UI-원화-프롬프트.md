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

# 매향 새 디자인 — 한 장에 4컷씩

새로 뽑은 달리기 4컷의 화풍이 기존 매향보다 훨씬 좋아, **매향을 이 화풍으로 새로 통일한다.**

- 이미 받은 **달리기 4컷은 그대로 쓴다** (다시 만들 필요 없음). 이것이 새 기준이다.
- 남은 것은 **활 쏘기 4컷**과 **얼굴 초상 1장**.
- 배경은 계속 **자홍색 #FF00FF** 로 받는다 (제가 깨끗이 지웁니다).

> ⚠️ 매향만 새 화풍이 되면 다른 동료 3명(역사·장사치·도인)과 화풍이 어긋난다.
> 지금은 매향만 해도 되지만, 나중에 나머지도 같은 인물 고정 문구로 다시 뽑는 것을 권한다.

---

## 인물 고정 문구 (모든 시트 앞에 그대로)

받으신 달리기 4컷 이미지를 **참고 이미지로 함께 첨부**하면 더 정확하다.

```
The character is a young Korean female archer, always facing right in side view. Black hair pulled into a high ponytail tied with a teal-green ribbon that streams behind her. Ivory white hanbok blouse with wide sleeves and a dark green collar band. A deep teal-green wrap skirt with gold vine embroidery along the hem, layered over a cream ruffled underskirt. A dark leather quiver of arrows on her back, a green sash at her waist, dark brown leather boots. She carries a wooden recurve bow. Painterly semi-realistic anime game art, detailed fabric folds, soft rim light, clean crisp edges, full body, strong readable silhouette.
```

---

## 시트 A — 활 쏘기 4컷 (`매향_공격.png`)

인물 고정 문구 뒤에 아래를 이어 붙인다.

```
A single wide image containing exactly 4 sprites of this SAME character in one horizontal row, evenly spaced, all at exactly the same scale, feet resting on one shared invisible ground line, heads at the same height. It is a 4-step archery attack sequence read left to right.

Frame 1: standing at rest, weight settled, the bow held down at her side in one hand, calm ready expression.
Frame 2: drawing the bow, both arms raised, bowstring pulled back to her cheek, an arrow nocked and aimed forward to the right, body braced.
Frame 3: the instant of release, bowstring snapped straight, drawing hand flung open behind her cheek, the arrow just leaving the bow flying to the right, bow arm still extended forward.
Frame 4: follow-through, arms lowering, body relaxing back toward the resting stance, arrow already gone.

Background must be SOLID PURE MAGENTA #FF00FF, completely flat, filling every pixel around and between the figures. No panel borders, no dividing lines, no ground shadows, no glowing energy effects, no magic aura. No text, no numbers, no labels, no watermark.
```

> **`no glowing energy effects, no magic aura` 를 꼭 넣을 것.** 기존 매향의 3번째 컷이
> 초록 기운을 크게 흘려서, 게임 크기(50px)로 줄면 칼을 휘두르는 것처럼 보였다.
> 화살은 초록 빛덩이가 아니라 **평범한 화살**이어야 활 쏘는 동작으로 읽힌다.

---

## 시트 B — 얼굴 초상 (`매향_얼굴.png`)

동료 목록과 상세창에 쓰는 얼굴. 한 장이면 된다.

```
A single portrait of this SAME character from the chest up, turned three-quarters toward the viewer, calm confident expression, the top of her bow visible over one shoulder. Same painterly semi-realistic anime game art. Centered, head and shoulders filling the frame.

Background must be SOLID PURE MAGENTA #FF00FF, completely flat. No text, no border, no watermark.
```

---

## 확인할 것

- 활 쏘기 4컷의 **키·머리 높이가 서로 같은가**
- 달리기 시트의 인물과 **같은 사람으로 보이는가** (옷 색·리본·화살통)
- 3번 컷에 **빛나는 초록 기운이 없는가** — 평범한 화살이어야 한다
- 배경이 **균일한 자홍색**인가 (그라데이션이면 지울 때 지저분해진다)

한 컷만 어색해도 **그 컷만 다시 뽑지 말고 시트 전체를 다시 돌릴 것.**

## 넣는 법

다운로드 폴더에 `매향_공격.png`, `매향_얼굴.png` 로 저장해 주시면
자홍색을 지우고 잘라서 아틀라스(`comps.png` + `comps.json`)를 새로 만들고,
달리기 4컷이 이동 중에 순환하도록 연결하겠습니다.
