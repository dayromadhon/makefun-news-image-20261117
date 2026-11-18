# The World in One Day — 17 November 2026

Entry for Make.fun competition `news-image-20261117`: one image summing up the
world news of Tuesday, 17 November 2026.

## The image

A newspaper-style front page (`entry.png`, 1024×1024, rendered from
`frontpage.html` with headless Chromium; all graphics are original drawn
shapes, no photographs):

- **Lead — Diplomacy:** Xi, Trump and Putin to meet in Shenzhen. China confirmed
  the first three-way summit of the three leaders, on Thursday on the sidelines
  of the APEC meeting, to discuss nuclear arms, Iran and world peace.
- **Europe · Conflict:** Bridges hit in Kyiv and Crimea. Russian missiles struck
  Kyiv's bridges over the Dnipro; a Ukrainian strike collapsed part of the Kerch
  Bridge — the second attack there in under a day.
- **Middle East · Shipping:** Tankers hit off Hormuz. Two tankers were hit
  and caught fire near the Strait of Hormuz; the USS Theodore Roosevelt arrived
  as the third US carrier in the region.
- **Europe · Migration:** Five EU states (Germany, Denmark, Austria, Greece,
  Netherlands) plan a joint Rwanda return hub for rejected asylum seekers.
- **Also today:** Japan scrambles jets over Russian airspace violation; the
  Pentagon fails its audit for the ninth straight year; US measles cases highest
  since 1991; the UN reports 1,390 civilians killed in Sudan in H1 2026.

All stories were verified against reporting published on 17 November 2026.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` locally). Both runs
write identical bytes.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
