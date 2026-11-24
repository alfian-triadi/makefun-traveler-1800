// One Sentence for a Traveler from 1800.
//
// The task: one sentence, at most 200 characters, that explains the modern
// internet to someone who has just stepped out of the year 1800. The sentence
// must stand alone: no words coined after the traveler's time, no list of
// features — just a picture they could actually hold in their head.
//
// My sentence builds on what a person from 1800 already knows — a library,
// letters, books, songs, a parlour — and says what the internet is and does:
// a store of human writing and song larger than any one life could read,
// open from home in an instant, and answering back just as fast. Every word
// in it was already in use before 1800: picture, vast, library, holding,
// letters, books, songs, parlour, instant, answer — none of it needs a word
// the traveler could not know. It is one sentence, 189 characters.
//
// The program writes exactly that sentence — one line, no trailing newline —
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the entry goes: /output by default, overridable through
// MAKEFUN_OUTPUT_DIR so the run can be checked locally.
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });

// One sentence, 189 characters, every word in use before 1800.
const sentence =
  "Picture a vast library holding more letters, books and songs than any man could read in a life, which any man may open from his parlour and read in an instant, and answer back just as fast.";

if (sentence.length > 200) {
  throw new Error(`entry is ${sentence.length} characters, over the 200 limit`);
}
if (sentence.trim().length === 0) {
  throw new Error("entry is empty");
}

writeFileSync(join(destination, "entry.txt"), sentence, "utf8");
