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

# 매향 달리기 그림 (4장)

지금 동료에게는 **대기 / 시위 당김 / 발사 / 마무리** 4장만 있고 **달리는 그림이 없다.**
그래서 주인공이 이동할 때 대기 자세 그대로 위아래로만 흔들려 공중에 떠 보인다.
(코드로 앞으로 기울이기·흔들림을 넣어 완화해 두었지만, 근본 해결은 그림이다.)

## 받을 것

**매향 달리기 4장.** 주인공은 6장을 쓰지만 동료는 뒤쪽에 작게 나오므로 4장이면 충분하다.

| 항목 | 값 |
|------|-----|
| 장수 | **4장** (2장만 만들어도 붙일 수는 있으나 뚝뚝 끊겨 보인다) |
| 크기 | 세로 **400px 이상**, 가로 자유 · **투명 배경 PNG** (제가 맞춰 줄입니다) |
| 파일명 | `run1.png` `run2.png` `run3.png` `run4.png` |
| 방향 | **오른쪽을 보게** — 기존 그림과 같은 방향 |
| 기준 | 네 장 모두 **키·머리 위치·화풍**이 같아야 한다. 발 높이만 달라야 함 |

> 다운로드 폴더에 넣어주시면 기존 아틀라스(`comps.png` + `comps.json`)에 이어 붙이고
> 달릴 때 네 장이 순환하도록 연결하겠습니다.

## 인물 고정 문구 (네 장 모두 공통)

아래 문장을 **네 프롬프트 앞에 똑같이** 두면 인물이 흔들리지 않는다.

```
2D game side-view sprite of the same young Korean female archer character, black hair tied back with a teal-green ribbon streaming behind, cream white jeogori jacket, long layered dark-green hanbok skirt, dark boots, a wooden bow held down in her left hand, painterly semi-realistic anime game art, clean crisp edges, full body, facing right, consistent height and proportions, no text, no background, transparent background
```

## 네 장의 자세

**run1.png — 오른발이 땅에 닿는 순간**
```
running to the right, right foot planted forward on the ground, left leg trailing far behind, torso leaned slightly forward, skirt swept backward
```

**run2.png — 몸이 가장 낮게 눌리는 순간**
```
running to the right, body at its lowest point with the supporting knee bent deeply, other leg starting to swing forward, skirt pressed down, shoulders low
```

**run3.png — 두 발이 모여 몸이 떠오른 순간**
```
running to the right, airborne mid-stride with both legs gathered under the body and neither foot touching the ground, skirt billowing upward, hair ribbon lifted
```

**run4.png — 왼발이 땅에 닿는 순간**
```
running to the right, left foot planted forward on the ground, right leg trailing far behind, torso leaned slightly forward, skirt swept backward
```

> 붙이는 법: 인물 고정 문구 + 자세 문장 하나를 이어 붙여 한 번에 넣으면 된다.
> 예) `2D game side-view sprite of the same young Korean female archer ... transparent background, running to the right, right foot planted forward ...`

## 확인할 점

- 네 장을 나란히 놓았을 때 **머리 높이가 들쭉날쭉하면 안 된다** (run3만 조금 높으면 정상)
- 활은 **쏘는 자세가 아니라 손에 들고 달리는** 모습이어야 한다
- 배경은 완전 투명. 흰 배경으로 나오면 지우고 저장할 것

## 다른 동료도 만들 때

인물 고정 문구의 사람 묘사만 바꾸면 된다.

| 동료 | 바꿔 넣을 묘사 |
|------|----------------|
| 역사(力士) | a burly Korean strongman, bare muscular arms, wide dark trousers, a heavy club resting on his shoulder |
| 장사치 | a Korean merchant man, bundled pack on his back, coin pouch at his waist, straw hat |
| 도인 | an old Korean taoist sage, long grey beard, flowing pale robe, wooden staff in hand |
