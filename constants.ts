
import { GameData, LevelMetadata } from './types';

export const LEVELS: LevelMetadata[] = [
  { id: 'g1', name: 'Group 1: s, a, t, i, p, n', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g2', name: 'Group 2: ck, e, h, r, m, d', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g3', name: 'Group 3: g, o, u, l, f, b', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g4', name: 'Group 4: ai, j, oa, ie, ee, or', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g5', name: 'Group 5: z, w, ng, v, oo', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g6', name: 'Group 6: y, x, ch, sh, th', category: 'PART 1: THE 7 GROUPS' },
  { id: 'g7', name: 'Group 7: qu, ou, oi, ue, er, ar', category: 'PART 1: THE 7 GROUPS' },
  { id: 'alt1', name: 'Alt 1: ai, ue, oa, oi, ie, or', category: 'PART 2: ALTERNATIVES' },
  { id: 'alt2', name: 'Alt 2: s, ou, j, ee, er, f', category: 'PART 2: ALTERNATIVES' },
  { id: 'trick1', name: 'Tricky 1: I, the, he, she...', category: 'PART 3: TRICKY WORDS', color: 'bg-orange-500' },
  { id: 'trick2', name: 'Tricky 2: you, your, come...', category: 'PART 3: TRICKY WORDS', color: 'bg-orange-500' },
];

export const PHONICS_DATA: GameData = {
  g1: [
    { t: "s", g: "/s/ (Sun)", r: "☀️", ex: "Sun, Snake", audio: "Sss... S is for Sun" },
    { t: "a", g: "/æ/ (Ant)", r: "🐜", ex: "Ant, Apple", audio: "Ah... A is for Ant" },
    { t: "t", g: "/t/ (Tap)", r: "🚰", ex: "Tap, Tennis", audio: "Tuh... T is for Tap" },
    { t: "i", g: "/i/ (Ink)", r: "✒️", ex: "Ink, Igloo", audio: "Ih... I is for Ink" },
    { t: "p", g: "/p/ (Pan)", r: "🍳", ex: "Pan, Puff", audio: "Puh... P is for Pan" },
    { t: "n", g: "/n/ (Net)", r: "🥅", ex: "Net, Neck", audio: "Nnn... N is for Net" }
  ],
  g2: [
    { t: "ck", g: "/k/ (Duck)", r: "🦆", ex: "Duck, Kick", audio: "Kuh... C K says Kuh" },
    { t: "e", g: "/e/ (Egg)", r: "🥚", ex: "Egg, Elbow", audio: "Eh... E is for Egg" },
    { t: "h", g: "/h/ (Hat)", r: "🎩", ex: "Hat, Hop", audio: "Huh... H is for Hat" },
    { t: "r", g: "/r/ (Run)", r: "🏃", ex: "Run, Rat", audio: "Rrr... R is for Run" },
    { t: "m", g: "/m/ (Man)", r: "👨", ex: "Man, Map", audio: "Mmm... M is for Man" },
    { t: "d", g: "/d/ (Dog)", r: "🐶", ex: "Dog, Dig", audio: "Duh... D is for Dog" }
  ],
  g3: [
    { t: "g", g: "/g/ (Goat)", r: "🐐", ex: "Goat, Gap", audio: "Guh... G is for Goat" },
    { t: "o", g: "/o/ (On)", r: "🔛", ex: "On, Orange", audio: "Ah... O is for On" },
    { t: "u", g: "/u/ (Up)", r: "⬆️", ex: "Up, Umbrella", audio: "Uh... U is for Up" },
    { t: "l", g: "/l/ (Log)", r: "🪵", ex: "Log, Lollipop", audio: "Lll... L is for Log" },
    { t: "f", g: "/f/ (Fish)", r: "🐟", ex: "Fish, Fan", audio: "Fff... F is for Fish" },
    { t: "b", g: "/b/ (Bat)", r: "🦇", ex: "Bat, Ball", audio: "Buh... B is for Bat" }
  ],
  g4: [
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ai</span>", g: "/ai/ (Rain)", r: "🌧️", ex: "Rain, Snail", audio: "Ay... A I says Ay... like Rain" },
    { t: "j", g: "/j/ (Jelly)", r: "🍮", ex: "Jelly, Jump", audio: "Juh... J is for Jelly" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>oa</span>", g: "/oa/ (Boat)", r: "⛵", ex: "Boat, Goat", audio: "Oh... O A says Oh... like Boat" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ie</span>", g: "/ie/ (Tie)", r: "👔", ex: "Tie, Pie", audio: "Eye... I E says Eye... like Tie" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ee</span>", g: "/ee/ (Tree)", r: "🌳", ex: "Tree, Bee", audio: "Ee... E E says Ee... like Tree" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>or</span>", g: "/or/ (Fork)", r: "🍴", ex: "Fork, Corn", audio: "Or... O R says Or... like Fork" }
  ],
  g5: [
    { t: "z", g: "/z/ (Zip)", r: "🤐", ex: "Zip, Zebra", audio: "Zzz... Z is for Zip" },
    { t: "w", g: "/w/ (Wind)", r: "🌬️", ex: "Wind, Web", audio: "Wuh... W is for Wind" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ng</span>", g: "/ng/ (Ring)", r: "💍", ex: "Ring, Strong", audio: "Ng... N G says Ng... like Ring" },
    { t: "v", g: "/v/ (Van)", r: "🚐", ex: "Van, Vest", audio: "Vvv... V is for Van" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>oo</span>", g: "Short /oo/ (Book)", r: "📖", ex: "Book, Look", audio: "Uh... short O O says Uh... like Book" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>oo</span>", g: "Long /oo/ (Moon)", r: "🌙", ex: "Moon, Zoo", audio: "Ooo... long O O says Ooo... like Moon" }
  ],
  g6: [
    { t: "y", g: "/y/ (Yo-yo)", r: "🪀", ex: "Yo-yo, Yes", audio: "Yuh... Y is for Yo-yo" },
    { t: "x", g: "/ks/ (Box)", r: "📦", ex: "Box, Fox", audio: "Kss... X is for Box" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ch</span>", g: "/ch/ (Chip)", r: "🍟", ex: "Chip, Chop", audio: "Ch... C H says Ch... like Chip" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>sh</span>", g: "/sh/ (Ship)", r: "🚢", ex: "Ship, Shop", audio: "Sh... S H says Sh... like Ship" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>th</span>", g: "Voiced /th/ (This)", r: "👉", ex: "This, That", audio: "Th... voiced T H... like This" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>th</span>", g: "Unvoiced /th/ (Thumb)", r: "👍", ex: "Thumb, Thin", audio: "Th... unvoiced T H... like Thumb" }
  ],
  g7: [
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>qu</span>", g: "/kw/ (Queen)", r: "👑", ex: "Queen, Quack", audio: "Kw... Q U says Kw... like Queen" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ou</span>", g: "/ou/ (Cloud)", r: "☁️", ex: "Cloud, Out", audio: "Ow... O U says Ow... like Cloud" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>oi</span>", g: "/oi/ (Oil)", r: "🛢️", ex: "Oil, Boil", audio: "Oi... O I says Oi... like Oil" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ue</span>", g: "/ue/ (Blue)", r: "🔵", ex: "Blue, Glue", audio: "Oo... U E says Oo... like Blue" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>er</span>", g: "/er/ (Mixer)", r: "🥣", ex: "Mixer, Sister", audio: "Er... E R says Er... like Mixer" },
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ar</span>", g: "/ar/ (Car)", r: "🚗", ex: "Car, Star", audio: "Ar... A R says Ar... like Car" }
  ],
  alt1: [
    { t: "r<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ai</span>n", g: "/ai/ (in middle)", r: "🌧️", ex: "Main sound: /ai/", audio: "Rain" },
    { t: "d<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ay</span>", g: "/ai/ (at end)", r: "☀️", ex: "Alternative: ay", audio: "Day" },
    { t: "bl<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ue</span>", g: "/ue/ (oo sound)", r: "🔵", ex: "Main sound: /oo/", audio: "Blue" },
    { t: "n<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ew</span>", g: "/ew/ (oo sound)", r: "🆕", ex: "Alternative: ew", audio: "New" },
    { t: "b<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>oa</span>t", g: "/oa/ (in middle)", r: "⛵", ex: "Main sound: /oa/", audio: "Boat" },
    { t: "h<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>o</span>m<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>e</span>", g: "o-e (Magic E)", r: "🏠", ex: "Alternative: o-e", audio: "Home" }
  ],
  alt2: [
    { t: "<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ph</span>one", g: "/f/ sound (ph)", r: "📱", ex: "ph says /f/", audio: "Phone" },
    { t: "gi<span class='text-red-600 underline underline-offset-4 decoration-red-600 decoration-4'>ant</span>", g: "Soft G (/j/)", r: "👹", ex: "Soft G says /j/", audio: "Giant" },
    { t: "ea", g: "/ea/ like Head", r: "🤕", ex: "Alternative e sound", audio: "Head" }
  ],
  trick1: [
    { t: "I", g: "Tricky Word!", r: "🙋‍♂️", ex: "Just say: I", audio: "The word is... I" },
    { t: "the", g: "Tricky Word!", r: "👉", ex: "Just say: The", audio: "The word is... The" },
    { t: "he", g: "Tricky Word!", r: "👦", ex: "Just say: He", audio: "The word is... He" },
    { t: "she", g: "Tricky Word!", r: "👧", ex: "Just say: She", audio: "The word is... She" },
    { t: "me", g: "Tricky Word!", r: "😀", ex: "Just say: Me", audio: "The word is... Me" },
    { t: "we", g: "Tricky Word!", r: "👨‍👩‍👧", ex: "Just say: We", audio: "The word is... We" },
    { t: "be", g: "Tricky Word!", r: "🐝", ex: "Just say: Be", audio: "The word is... Be" },
    { t: "was", g: "Tricky Word!", r: "🔙", ex: "Just say: Was", audio: "The word is... Was" },
    { t: "to", g: "Tricky Word!", r: "➡", ex: "Just say: To", audio: "The word is... To" },
    { t: "do", g: "Tricky Word!", r: "📝", ex: "Just say: Do", audio: "The word is... Do" },
    { t: "are", g: "Tricky Word!", r: "❓", ex: "Just say: Are", audio: "The word is... Are" },
    { t: "all", g: "Tricky Word!", r: "👐", ex: "Just say: All", audio: "The word is... All" }
  ],
  trick2: [
    { t: "you", g: "Tricky Word!", r: "🫵", ex: "Just say: You", audio: "The word is... You" },
    { t: "your", g: "Tricky Word!", r: "🎒", ex: "Just say: Your", audio: "The word is... Your" },
    { t: "come", g: "Tricky Word!", r: "👋", ex: "Just say: Come", audio: "The word is... Come" },
    { t: "some", g: "Tricky Word!", r: "🍰", ex: "Just say: Some", audio: "The word is... Some" },
    { t: "said", g: "Tricky Word!", r: "🗣️", ex: "Just say: Said", audio: "The word is... Said" },
    { t: "here", g: "Tricky Word!", r: "👇", ex: "Just say: Here", audio: "The word is... Here" },
    { t: "there", g: "Tricky Word!", r: "👉", ex: "Just say: There", audio: "The word is... There" },
    { t: "they", g: "Tricky Word!", r: "👥", ex: "Just say: They", audio: "The word is... They" }
  ]
};
