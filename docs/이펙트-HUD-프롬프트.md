# 이펙트·전투 HUD 원화 프롬프트 (전수 감사분)

게임을 전수 조사해 원화가 없는 부분만 추린 것. **모두 투명 배경 512×512 PNG**
(가로 판 종류는 512×160 안내 참조). **다운로드 폴더에 아래 이름 그대로** 저장하면 제가 옮겨 반영한다.

- 기술 이펙트 11장: 새 스킬(8번 이후)은 발동 이펙트 원화가 없어 아무것도 안 터진다.
  옛 8종(k0~k7)은 있다. 패시브 기술은 시전이 없어 불필요.
- 전투 HUD 6장: 냥 동전·옥(CSS 도형), 스테이지 현판·출정 버튼·HOT TIME·알림 띠(CSS 박스).

파일을 넣으면 자동 감지된다 (이펙트는 assets/ui/fx/, 나머지는 assets/ui/·cur/로 내가 이동).


## 이펙트

### `fxk8.png` — 불티 베기 이펙트

기술 발동

```
a small fierce ember slash burst, orange sparks scattering along a short cutting arc, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk9.png` — 물결 베기 이펙트

기술 발동

```
a curling blue water slash, a wave crest breaking along a cutting arc with droplets, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk10.png` — 돌팔매 이펙트

기술 발동

```
a rocky impact burst, cracked stone chunks and dust flying outward, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk14.png` — 섬광행보 이펙트

기술 발동

```
a horizontal lightning dash streak, electric white-blue speed lines with crackling arcs, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk18.png` — 적벽뇌우 이펙트

기술 발동

```
a cluster of crimson lightning bolts striking downward together, red storm glow, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk19.png` — 월영참 이펙트

기술 발동

```
a huge silver crescent moon slash arc, cold moonlight glow with drifting light petals, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk20.png` — 축지신행 이펙트

기술 발동

```
multiple overlapping teal dash after-image streaks piercing forward, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk21.png` — 백설한풍 이펙트

기술 발동

```
a swirling blizzard burst, sharp ice shards and snow spiraling outward, deep blue cold light, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk22.png` — 요수사냥 이펙트

기술 발동

```
a feral triple claw strike burst, savage white-grey slash marks with fang-like energy, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk23.png` — 화룡승천 이펙트

기술 발동

```
a rising pillar of flame shaped like a coiling fire dragon, embers spiraling upward, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```

### `fxk25.png` — 뇌옥나찰 이펙트

기술 발동

```
a dark crimson demonic explosion with black smoke and hellfire sparks, glowing magical spell effect only, no character, no person, no hands, painted game VFX, bright luminous colors, strong silhouette readable when small, centered burst composition, no text, no border, no background, transparent background
```


## 전투 HUD

### `coin.png` — 냥 동전

헤더·전장·버튼 어디에나 나오는 기본 재화 — 지금은 CSS 도형

```
a single brass Korean yeopjeon coin with a square hole in the center, engraved rim, softly gleaming, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```

### `jade.png` — 옥 보석

과금 재화 — 지금은 CSS 마름모

```
a single polished green jade gem cut in a lozenge shape, inner glow, gold light glints, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```

### `stage_banner.png` — 스테이지 현판

전장 위 STAGE·지명 판 (512×160 · 9분할 상10/우26/하12/좌26 비율)

```
a small horizontal Korean wooden stage signboard, dark lacquered plank with thin gold trim and tiny cloud motifs at both ends, empty flat center for text, compact and light, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```

### `btn_start.png` — 출정하기 버튼

타이틀 화면의 큰 빨간 버튼 (512×160)

```
a wide rounded capsule game button of deep vermilion red lacquer with a bright gold rim, subtle dragon-scale texture, gentle top light, empty center for text, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```

### `hot_banner.png` — HOT TIME 배너

전장 왼쪽에 붙는 작은 띠 (256×128 · 왼쪽 평평, 오른쪽 둥긂)

```
a small event ribbon banner attached to the left edge, deep red to orange gradient lacquer with a thin gold border, right side rounded, left side flat cut, empty center for text, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```

### `toast_plate.png` — 알림 띠

화면 위에 뜨는 짧은 알림 판 (512×128 · 9분할)

```
a slim horizontal ebony wood notification plate with rounded ends, thin brass edge line, subtle hanji texture in the dark center, understated, Korean Joseon dynasty dark fantasy game UI asset, dancheong ornament palette (deep vermilion, jade green, indigo, gold leaf), carved ebony wood and brass, painterly hand-drawn, crisp edges, flat front view, no text, no letters, no drop shadow outside the shape, transparent background, PNG
```
