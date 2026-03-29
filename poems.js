/**
 * Poem data for ESL Pronunciation Lesson
 *
 * Line segment types:
 *   { t: 'word' }           – normal text
 *   { t: 'word', s: 1 }    – stressed content word
 *   { t: 'word', l: 'IPA' } – linked group (shows bridge + phonetic hint)
 *   { p: 1 }               – pause mark between thought groups
 *   { br: 1 }              – line break within a poem-line
 */

const POEMS = [

// ═══════════════════════ 1 ═══════════════════════
{
  id: 'this-is-just-to-say',
  title: 'This Is Just To Say',
  author: 'William Carlos Williams',
  year: 1934,
  level: 'Beginner',
  context: 'A casual note left on a kitchen counter — someone ate the plums their roommate was saving and feels a little guilty, but not really. It sounds exactly like everyday speech.',
  stanzas: [
    [
      [{ t: 'I ' },{ t: 'have', s:1 },{ t: ' ' },{ t: 'eaten', s:1 },{ p:1 }],
      [{ t: 'the', l:'thee‿y' },{ t: ' ' },{ t: 'plums', s:1 },{ p:1 }],
      [{ t: 'that were ' },{ t: 'in', l:'i·nthe' },{ t: ' the' }],
      [{ t: 'icebox', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'and which' }],
      [{ t: 'you were ' },{ t: 'probably', s:1 }],
      [{ t: 'saving', s:1 },{ p:1 }],
      [{ t: 'for', l:'fer' },{ t: ' ' },{ t: 'breakfast', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Forgive', l:'fer·giv·me' },{ t: ' me' },{ p:1 }],
      [{ t: 'they were ' },{ t: 'delicious', s:1 },{ p:1 }],
      [{ t: 'so ' },{ t: 'sweet', s:1 },{ p:1 }],
      [{ t: 'and', l:'an·dso' },{ t: ' so ' },{ t: 'cold', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["I have eaten", "the plums", "that were in", "the icebox"],
      explanation: "The speaker confesses to eating the fruit. The tone is incredibly casual and direct, mimicking a rushed note left on a kitchen counter.",
      vocab: ["icebox: an old-fashioned term for a refrigerator"]
    },
    {
      lines: ["and which", "you were probably", "saving", "for breakfast"],
      explanation: "The speaker acknowledges that they knew the plums were being saved, adding a layer of mild, almost playful guilt to the confession."
    },
    {
      lines: ["Forgive me", "they were delicious", "so sweet", "and so cold"],
      explanation: "The final apology is undercut by how much the speaker enjoyed the plums. The sensory details ('sweet', 'cold') make the temptation understandable."
    }
  ],
  deepDive: [
    {
      phrase: '"the icebox"',
      tag: 'Intrusive /j/ Sound',
      what: 'When "the" (ending in /iː/) meets "icebox" (starting with a vowel), speakers naturally insert a tiny <strong>/j/</strong> sound — the "y" in "yes" — to bridge the gap.',
      phonetic: 'the‿<strong>y</strong>icebox → /ðə <strong>j</strong>aɪsbɒks/',
      practice: 'Say "thee" and hold the /iː/ sound. Without stopping your voice, slide into "icebox." Your tongue rises slightly, creating the /j/ automatically.',
      tip: 'Try saying "the apple" slowly. Hear a tiny "y" appear? Same principle: "thee-yapple." This happens all the time in English.'
    },
    {
      phrase: '"forgive me"',
      tag: 'Vowel Reduction + Linking',
      what: 'The "for-" reduces to a quick /fər/ instead of a full "FOR" — this is <strong>vowel reduction</strong>. Then the /v/ at the end of "forgive" flows directly into the /m/ of "me" in one smooth motion.',
      phonetic: 'forgive me → /fər<strong>gɪv·m</strong>iː/',
      practice: 'Say "give me" quickly — notice how /v/ transitions to /m/ without a break? Now add "fer-" in front: "fer-GIV-me." The whole phrase should feel like one word.',
      tip: 'Many Chinese learners say each syllable with equal weight. In English, unstressed "for-" almost disappears. Think: "fr·GIV·me."'
    },
    {
      phrase: '"so sweet and so cold"',
      tag: 'Consonant → Vowel Linking',
      what: 'When "sweet" ends with /t/ and "and" starts with /æ/, the /t/ attaches to the next word: "swee-<strong>tand</strong>." Then "and" reduces to just /ən/.',
      phonetic: 'so sweet‿and so cold → /soʊ swiː<strong>tən</strong> soʊ koʊld/',
      practice: 'Break it into two chunks: "so SWEET-and" (one breath) then "so COLD." Let the /t/ become the beginning of the next syllable.',
      tip: 'Record yourself saying this line. If you hear four distinct words, try again — aim for two smooth chunks.'
    }
  ]
},

// ═══════════════════════ 2 ═══════════════════════
{
  id: 'the-red-wheelbarrow',
  title: 'The Red Wheelbarrow',
  author: 'William Carlos Williams',
  year: 1923,
  level: 'Beginner',
  context: 'A single sentence broken into tiny, precise pieces — like a photograph in slow motion. Everything depends on paying attention to ordinary things.',
  stanzas: [
    [
      [{ t: 'so ' },{ t: 'much', s:1 },{ t: ' ' },{ t: 'depends', s:1 },{ p:1 }],
      [{ t: 'upon', l:'uh·pon' },{ p:1 }]
    ],
    [
      [{ t: 'a ' },{ t: 'red', s:1 },{ t: ' ' },{ t: 'wheel', s:1 }],
      [{ t: 'barrow', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'glazed', s:1 },{ t: ' with ' },{ t: 'rain', s:1 }],
      [{ t: 'water', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'beside', l:'bih·zide' },{ t: ' the ' },{ t: 'white', s:1 }],
      [{ t: 'chickens', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["so much depends", "upon"],
      explanation: "The opening creates immediate suspense. It tells us that the ordinary object we are about to see is somehow vitally important."
    },
    {
      lines: ["a red wheel", "barrow"],
      explanation: "The central image is presented. Breaking 'wheelbarrow' across two lines forces us to look at its component parts (the wheel, the barrow) rather than just the whole.",
      vocab: ["wheelbarrow: a small cart with a single wheel at the front, used for carrying loads"]
    },
    {
      lines: ["glazed with rain", "water"],
      explanation: "The visual details make the object vivid. 'Glazed' implies a shiny, almost artistic surface, elevating a simple farm tool to a beautiful object.",
      vocab: ["glazed: covered with a smooth, shiny coating or finish"]
    },
    {
      lines: ["beside the white", "chickens"],
      explanation: "The final detail adds color contrast (red, white) and life (chickens) to the still life, grounding it in a working farm setting."
    }
  ],
  deepDive: [
    {
      phrase: '"so much depends"',
      tag: 'Stress Timing',
      what: '"So" and "much" carry stress, but "depends" has the <strong>primary stress on the second syllable</strong>: de-<strong>PENDS</strong>. The phrase flows as one thought group.',
      phonetic: 'so much depends → /soʊ mʌtʃ dɪ<strong>pɛndz</strong>/',
      practice: 'Say "so-MUCH-de-PENDS" tapping the table on MUCH and PENDS. Feel the rhythm: da-DUM-da-DUM.',
      tip: 'English has a "stress-timed" rhythm — the stressed words come at regular intervals, and unstressed syllables get squeezed between them.'
    },
    {
      phrase: '"glazed with rain / water"',
      tag: 'Consonant Cluster + Linking',
      what: 'The /zd/ cluster at the end of "glazed" links into "with" — the /d/ nearly disappears. Then "rain" links to "water" across the line break: "rain-water" sounds like one compound word.',
      phonetic: 'glazed with → /gleɪz<strong>wɪð</strong>/',
      practice: 'Say "glazed" and let the final /d/ fade. Jump straight to "with rain" as one chunk: "glayz-with-RAIN."',
      tip: 'When a word ends in two consonants and the next word starts with a consonant, English speakers often drop the middle one.'
    }
  ]
},

// ═══════════════════════ 3 ═══════════════════════
{
  id: 'fog',
  title: 'Fog',
  author: 'Carl Sandburg',
  year: 1916,
  level: 'Beginner',
  context: 'A tiny, perfect poem comparing fog rolling in over a harbor to a cat silently sitting and watching. Just six lines of pure imagery.',
  stanzas: [
    [
      [{ t: 'The ' },{ t: 'fog', s:1 },{ t: ' ' },{ t: 'comes', s:1 },{ p:1 }],
      [{ t: 'on', l:'on·lit' },{ t: ' little ' },{ t: 'cat', s:1 },{ t: ' ' },{ t: 'feet', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'It ' },{ t: 'sits', s:1 },{ t: ' ' },{ t: 'looking', s:1 },{ p:1 }],
      [{ t: 'over', l:'oh·ver' },{ t: ' ' },{ t: 'harbor', s:1 },{ t: ' and ' },{ t: 'city', s:1 },{ p:1 }],
      [{ t: 'on ' },{ t: 'silent', s:1 },{ t: ' ' },{ t: 'haunches', s:1 },{ p:1 }],
      [{ t: 'and then ' },{ t: 'moves', s:1 },{ t: ' ' },{ t: 'on', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["The fog comes", "on little cat feet"],
      explanation: "The poem immediately establishes its central metaphor: the fog is like a cat. It arrives silently, softly, and without warning."
    },
    {
      lines: ["It sits looking", "over harbor and city", "on silent haunches", "and then moves on"],
      explanation: "The fog lingers temporarily, quietly observing the city, and then leaves as mysteriously as it arrived, completing the cat metaphor.",
      vocab: ["haunches: an animal's hindquarters (buttocks and thighs)"]
    }
  ],
  deepDive: [
    {
      phrase: '"on little cat feet"',
      tag: 'Flap /t/ + Linking',
      what: 'The "t" in "little" becomes a quick <strong>flap /ɾ/</strong> (sounds like a fast "d") — this is standard American English. Then "cat feet" links: the /t/ of "cat" merges with "feet."',
      phonetic: 'little → /lɪ<strong>ɾ</strong>əl/ · cat‿feet → /kæ<strong>t·f</strong>iːt/',
      practice: 'For "little," say "lid-dle" quickly. For "cat feet," don\'t release the /t/ separately — go straight from the /t/ position into /f/.',
      tip: 'The flap /ɾ/ is one of the most common sounds in American English. "water," "better," "butter" — all use it.'
    },
    {
      phrase: '"and then moves on"',
      tag: 'Reduction + Rhythm',
      what: '"And then" reduces to /ən ðɛn/ — the "d" nearly vanishes. The whole line has a calm, slow rhythm that mirrors the fog quietly leaving.',
      phonetic: 'and then → /ən <strong>ðɛn</strong>/',
      practice: 'Say "un-THEN-MOOVZ-on" as one smooth phrase. Stress "moves" and "on" — they carry the meaning.',
      tip: 'The word "and" is almost never pronounced fully in casual English. It\'s usually /ən/ or even just /n/.'
    }
  ]
},

// ═══════════════════════ 4 ═══════════════════════
{
  id: 'nothing-gold-can-stay',
  title: 'Nothing Gold Can Stay',
  author: 'Robert Frost',
  year: 1923,
  level: 'Intermediate',
  context: 'A meditation on how all beautiful, precious things are temporary. The first green of spring, the Garden of Eden, dawn — nothing golden lasts. Eight perfect lines.',
  stanzas: [
    [
      [{ t: 'Nature\'s ' },{ t: 'first', s:1 },{ t: ' ' },{ t: 'green', s:1 },{ t: ' is ' },{ t: 'gold', s:1 },{ p:1 }],
      [{ t: 'Her ' },{ t: 'hardest', s:1 },{ t: ' ' },{ t: 'hue', s:1 },{ t: ' to ' },{ t: 'hold', s:1 },{ p:1 }],
      [{ t: 'Her ', l:'her·ear' },{ t: ' ' },{ t: 'early', s:1 },{ t: ' ' },{ t: 'leaf\'s', s:1 },{ t: ' a ' },{ t: 'flower', s:1 },{ p:1 }],
      [{ t: 'But ' },{ t: 'only', s:1 },{ t: ' so an ' },{ t: 'hour', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Then ' },{ t: 'leaf', s:1 },{ t: ' subsides to ' },{ t: 'leaf', s:1 },{ p:1 }],
      [{ t: 'So ' },{ t: 'Eden', s:1 },{ t: ' ' },{ t: 'sank', s:1 },{ t: ' to ' },{ t: 'grief', s:1 },{ p:1 }],
      [{ t: 'So ' },{ t: 'dawn', s:1 },{ t: ' goes ' },{ t: 'down', s:1 },{ t: ' to ' },{ t: 'day', s:1 },{ p:1 }],
      [{ t: 'Nothing', s:1 },{ t: ' ' },{ t: 'gold', s:1 },{ t: ' can ' },{ t: 'stay', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Nature's first green is gold,", "Her hardest hue to hold."],
      explanation: "The first buds of spring are often beautifully yellow-green (gold), but this early stage is fleeting and doesn't last long.",
      vocab: ["hue: a color or shade"]
    },
    {
      lines: ["Her early leaf's a flower;", "But only so an hour."],
      explanation: "Spring blossoms are technically the first 'leaves' of the trees, but they quickly fall away and turn into actual leaves."
    },
    {
      lines: ["Then leaf subsides to leaf.", "So Eden sank to grief,"],
      explanation: "The vibrant flowers become ordinary green leaves. The speaker compares this loss of early perfection to humanity's fall from the Garden of Eden.",
      vocab: ["subsides: becomes less intense, sinks to a lower level"]
    },
    {
      lines: ["So dawn goes down to day.", "Nothing gold can stay."],
      explanation: "Just as a spectacular sunrise eventually becomes an ordinary day, no beautiful or pure moment can last forever."
    }
  ],
  deepDive: [
    {
      phrase: '"Nature\'s first green"',
      tag: 'Possessive /z/ + Cluster',
      what: 'The possessive "\'s" in "Nature\'s" adds a /z/ sound, creating the cluster /rz/ which links into "first." Three consonants in a row: /rz·f/.',
      phonetic: 'Nature\'s first → /neɪtʃərz <strong>fɜːrst</strong>/',
      practice: 'Say "nay-cherz" then add "first" without any pause. Let your mouth flow from /z/ to /f/ — the voicing just switches off.',
      tip: 'Possessive \'s after voiced sounds becomes /z/, not /s/. "Dog\'s" = /dɔɡz/, "cat\'s" = /kæts/.'
    },
    {
      phrase: '"Nothing gold can stay"',
      tag: 'Ng Sound + Rhythm',
      what: 'The /ŋ/ at the end of "nothing" is a common challenge for Chinese learners. It\'s the same sound as the "ng" in the Mandarin final "-ng" (鼻音). This final line has a powerful, punchy rhythm: three stressed monosyllables in a row.',
      phonetic: 'Nothing gold can stay → /<strong>nʌθ</strong>ɪŋ <strong>goʊld</strong> kən <strong>steɪ</strong>/',
      practice: 'Tap the table on NOTH-, GOLD, STAY. "Can" is reduced to /kən/ — don\'t stress it.',
      tip: 'The three stressed words at the end (gold, can\'t, stay) create a feeling of finality. Let each one land with weight.'
    }
  ]
},

// ═══════════════════════ 5 ═══════════════════════
{
  id: 'fire-and-ice',
  title: 'Fire and Ice',
  author: 'Robert Frost',
  year: 1920,
  level: 'Intermediate',
  context: 'A deceptively simple poem about how the world might end — through the fire of desire or the ice of hatred. Casual tone, but devastatingly precise.',
  stanzas: [
    [
      [{ t: 'Some ' },{ t: 'say', s:1 },{ t: ' the ' },{ t: 'world', s:1 },{ t: ' will ' },{ t: 'end', s:1 },{ t: ' in ' },{ t: 'fire', s:1 },{ p:1 }],
      [{ t: 'Some ' },{ t: 'say', s:1 },{ t: ' in ' },{ t: 'ice', s:1 },{ p:1 }],
      [{ t: 'From ', l:'frum' },{ t: ' what I\'ve ' },{ t: 'tasted', s:1 },{ t: ' of ' },{ t: 'desire', s:1 },{ p:1 }],
      [{ t: 'I ' },{ t: 'hold', s:1 },{ t: ' with ' },{ t: 'those', s:1 },{ t: ' who ' },{ t: 'favor', s:1 },{ t: ' ' },{ t: 'fire', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'But ' },{ t: 'if', s:1 },{ t: ' it ', l:'i·thad' },{ t: ' had to ' },{ t: 'perish', s:1 },{ t: ' ' },{ t: 'twice', s:1 },{ p:1 }],
      [{ t: 'I ' },{ t: 'think', s:1 },{ t: ' I ' },{ t: 'know', s:1 },{ t: ' enough of ' },{ t: 'hate', s:1 },{ p:1 }],
      [{ t: 'To ' },{ t: 'say', s:1 },{ t: ' that for de- ' }],
      [{ t: 'struction', s:1 },{ t: ' ' },{ t: 'ice', s:1 },{ p:1 }],
      [{ t: 'Is ' },{ t: 'also', s:1 },{ t: ' ' },{ t: 'great', s:1 },{ p:1 }],
      [{ t: 'And would suf- ' }],
      [{ t: 'fice', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Some say the world will end in fire,", "Some say in ice."],
      explanation: "The speaker presents two popular theories about how the world will eventually be destroyed."
    },
    {
      lines: ["From what I've tasted of desire", "I hold with those who favor fire."],
      explanation: "Based on personal experience with passionate desire and greed (fire), the speaker agrees that these intense emotions are destructive enough to end the world."
    },
    {
      lines: ["But if it had to perish twice,", "I think I know enough of hate", "To say that for destruction ice", "Is also great", "And would suffice."],
      explanation: "However, the speaker also notes that cold, calculated hatred (ice) is equally potent. If the world had to be destroyed again, hatred would definitely do the job.",
      vocab: ["perish: to suffer complete ruin or destruction", "suffice: be enough or adequate"]
    }
  ],
  deepDive: [
    {
      phrase: '"From what I\'ve tasted"',
      tag: 'Reduction of "From"',
      what: '"From" almost always reduces to /frʌm/ or even /frəm/ in natural speech. The vowel gets swallowed. "What I\'ve" flows together: /wʌɾaɪv/.',
      phonetic: 'From what I\'ve → /<strong>frəm</strong> wʌɾ<strong>aɪv</strong>/',
      practice: 'Say "frum-wuh-DIVE" as one smooth chunk. The "t" in "what" becomes a flap before "I\'ve."',
      tip: 'Function words like "from," "for," "to" are almost always reduced. Stressing them sounds unnatural.'
    },
    {
      phrase: '"And would suffice"',
      tag: 'Understatement + Rhythm',
      what: 'This ending is masterfully understated. "Suffice" carries the weight. "Would" reduces to /wʊd/ or even /wəd/. The casual tone makes the dark meaning even more powerful.',
      phonetic: 'And would suffice → /ən wəd sə<strong>faɪs</strong>/',
      practice: 'Let "and would" flow quickly as "un-wud," then land firmly on "suh-FICE." The stress pattern mirrors the poem\'s ironic control.',
      tip: '"Suffice" rhymes with "ice" — Frost is using the rhyme to drive home the point. Make sure both words end with the same crisp /s/ sound.'
    }
  ]
},

// ═══════════════════════ 6 ═══════════════════════
{
  id: 'dreams',
  title: 'Dreams',
  author: 'Langston Hughes',
  year: 1922,
  level: 'Beginner',
  context: 'A short, urgent poem about holding onto your dreams. Without dreams, life is a broken-winged bird or a barren frozen field. Simple words, powerful imagery.',
  stanzas: [
    [
      [{ t: 'Hold', s:1 },{ t: ' ' },{ t: 'fast', s:1 },{ t: ' to ' },{ t: 'dreams', s:1 },{ p:1 }],
      [{ t: 'For if ' },{ t: 'dreams', s:1 },{ t: ' ' },{ t: 'die', s:1 },{ p:1 }],
      [{ t: 'Life', s:1 },{ t: ' is a ' },{ t: 'broken', s:1 },{ t: '-winged ' },{ t: 'bird', s:1 },{ p:1 }],
      [{ t: 'That ' },{ t: 'cannot', s:1 },{ t: ' ' },{ t: 'fly', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Hold', s:1 },{ t: ' ' },{ t: 'fast', s:1 },{ t: ' to ' },{ t: 'dreams', s:1 },{ p:1 }],
      [{ t: 'For when ' },{ t: 'dreams', s:1 },{ t: ' ' },{ t: 'go', s:1 },{ p:1 }],
      [{ t: 'Life', s:1 },{ t: ' is a ' },{ t: 'barren', s:1 },{ t: ' ' },{ t: 'field', s:1 },{ p:1 }],
      [{ t: 'Frozen', s:1 },{ t: ' with ' },{ t: 'snow', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Hold fast to dreams", "For if dreams die", "Life is a broken-winged bird", "That cannot fly"],
      explanation: "Without dreams and goals, life becomes damaged and unable to reach its potential, much like a bird that has lost its ability to soar."
    },
    {
      lines: ["Hold fast to dreams", "For when dreams go", "Life is a barren field", "Frozen with snow"],
      explanation: "The second metaphor is even starker. Without dreams, life becomes empty and cold, incapable of growing anything new or beautiful.",
      vocab: ["barren: too poor to produce much or any vegetation; bleak and lifeless"]
    }
  ],
  deepDive: [
    {
      phrase: '"Hold fast to dreams"',
      tag: 'Consonant Cluster /ld·f/',
      what: '"Hold fast" has a challenging consonant cluster where /ld/ meets /f/. The /d/ gets barely pronounced — it\'s more of a brief stop before jumping to /f/.',
      phonetic: 'Hold fast → /hoʊl<strong>d·f</strong>æst/',
      practice: 'Say "hole" then add a quick /d/ before launching into "fast." Don\'t insert a vowel between them — no "hold-uh-fast."',
      tip: 'The phrase "hold fast" is an old English expression meaning "grip tightly." The sounds themselves feel tight and urgent — that\'s intentional.'
    },
    {
      phrase: '"broken-winged bird"',
      tag: 'Three Stressed Syllables',
      what: 'Three strong stresses in a row: <strong>BRO</strong>-ken-<strong>WINGD</strong>-<strong>BIRD</strong>. The consecutive stresses slow you down, making you feel the heaviness of the image.',
      phonetic: 'broken-winged bird → /<strong>broʊ</strong>kən <strong>wɪŋd</strong> <strong>bɜːrd</strong>/',
      practice: 'Clap on the stressed syllables: BRO-ken-WINGD-BIRD. Let the unstressed "ken" pass quickly.',
      tip: 'The /ŋd/ in "winged" (one syllable here, not "wing-ed") is the same nasal sound as Mandarin "-ng" plus a /d/.'
    }
  ]
},

// ═══════════════════════ 7 ═══════════════════════
{
  id: 'the-road-not-taken',
  title: 'The Road Not Taken',
  author: 'Robert Frost',
  year: 1916,
  level: 'Intermediate',
  context: 'The most famous poem about choices — a traveler at a fork in a yellow wood. Often misread as inspirational, it\'s actually more wistful and ironic: both roads were really about the same.',
  stanzas: [
    [
      [{ t: 'Two ', s:1 },{ t: 'roads', s:1 },{ t: ' ' },{ t: 'diverged', s:1 },{ t: ' in a ' },{ t: 'yellow', s:1 },{ t: ' ' },{ t: 'wood', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'sorry', s:1 },{ t: ' I could not ' },{ t: 'travel', s:1 },{ t: ' ' },{ t: 'both', s:1 },{ p:1 }],
      [{ t: 'And be one ' },{ t: 'traveler', s:1 },{ p:1 },{ t: ' ' },{ t: 'long', s:1 },{ t: ' I ' },{ t: 'stood', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'looked', s:1 },{ t: ' ' },{ t: 'down', s:1 },{ t: ' one ' }],
      [{ t: 'as ' },{ t: 'far', s:1 },{ t: ' as I could' },{ p:1 }],
      [{ t: 'To where it ' },{ t: 'bent', s:1 },{ t: ' in the ' },{ t: 'undergrowth', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Then ' },{ t: 'took', s:1 },{ t: ' the ' },{ t: 'other', s:1 },{ p:1 },{ t: ' as ' },{ t: 'just', s:1 },{ t: ' as ' },{ t: 'fair', s:1 },{ p:1 }],
      [{ t: 'And having per- ' },{ t: 'haps', s:1 },{ t: ' the ' },{ t: 'better', s:1 },{ t: ' ' },{ t: 'claim', s:1 },{ p:1 }],
      [{ t: 'Because it was ' },{ t: 'grassy', s:1 },{ t: ' and ' },{ t: 'wanted', s:1 },{ t: ' ' },{ t: 'wear', s:1 },{ p:1 }],
      [{ t: 'Though as for ' },{ t: 'that', s:1 },{ p:1 },{ t: ' the ' },{ t: 'passing', s:1 },{ t: ' ' },{ t: 'there', s:1 },{ p:1 }],
      [{ t: 'Had ' },{ t: 'worn', s:1 },{ t: ' them really about the ' },{ t: 'same', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'And ' },{ t: 'both', s:1 },{ t: ' that ' },{ t: 'morning', s:1 },{ t: ' ' },{ t: 'equally', s:1 },{ t: ' ' },{ t: 'lay', s:1 },{ p:1 }],
      [{ t: 'In ' },{ t: 'leaves', s:1 },{ t: ' no step had ' },{ t: 'trodden', s:1 },{ t: ' ' },{ t: 'black', s:1 },{ p:1 }],
      [{ t: 'Oh, I ' },{ t: 'kept', s:1 },{ t: ' the ' },{ t: 'first', s:1 },{ t: ' for an- ' },{ t: 'other', s:1 },{ t: ' ' },{ t: 'day', s:1 },{ p:1 }],
      [{ t: 'Yet ' },{ t: 'knowing', s:1 },{ t: ' how ' },{ t: 'way', s:1 },{ t: ' leads on to ' },{ t: 'way', s:1 },{ p:1 }],
      [{ t: 'I ' },{ t: 'doubted', s:1 },{ t: ' if I should ever come ' },{ t: 'back', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'I shall be ' },{ t: 'telling', s:1 },{ t: ' this with a ' },{ t: 'sigh', s:1 },{ p:1 }],
      [{ t: 'Somewhere ' },{ t: 'ages', s:1 },{ t: ' and ' },{ t: 'ages', s:1 },{ t: ' ' },{ t: 'hence', s:1 },{ p:1 }],
      [{ t: 'Two ', s:1 },{ t: 'roads', s:1 },{ t: ' ' },{ t: 'diverged', s:1 },{ t: ' in a ' },{ t: 'wood', s:1 },{ p:1 },{ t: ' and ' },{ t: 'I', s:1 },{ p:1 }],
      [{ t: 'I ' },{ t: 'took', s:1 },{ t: ' the one ' },{ t: 'less', s:1 },{ t: ' ' },{ t: 'traveled', s:1 },{ t: ' ' },{ t: 'by', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'that', s:1 },{ t: ' has made ' },{ t: 'all', s:1 },{ t: ' the ' },{ t: 'difference', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Two roads diverged in a yellow wood,", "And sorry I could not travel both", "And be one traveler, long I stood", "And looked down one as far as I could", "To where it bent in the undergrowth;"],
      explanation: "The speaker faces a choice between two paths in an autumn forest. They regret that as one person, they can only choose one life path, so they carefully examine the first option until they can't see any further."
    },
    {
      lines: ["Then took the other, as just as fair,", "And having perhaps the better claim,", "Because it was grassy and wanted wear;", "Though as for that the passing there", "Had worn them really about the same,"],
      explanation: "They choose the second path, initially thinking it's better because fewer people have walked it. But immediately, they admit that actually, both paths had been walked about the same amount.",
      vocab: ["fair: beautiful or attractive", "wanted wear: needed to be walked on (it looked unused)"]
    },
    {
      lines: ["And both that morning equally lay", "In leaves no step had trodden black.", "Oh, I kept the first for another day!", "Yet knowing how way leads on to way,", "I doubted if I should ever come back."],
      explanation: "That morning, both paths were covered in fresh, unstepped-on leaves. The speaker hopes to return and take the first path someday, but realistically knows that one choice leads to another, making a return impossible.",
      vocab: ["trodden: walked on or crushed by feet"]
    },
    {
      lines: ["I shall be telling this with a sigh", "Somewhere ages and ages hence:", "Two roads diverged in a wood, and I—", "I took the one less traveled by,", "And that has made all the difference."],
      explanation: "The speaker imagines themselves far in the future, telling this story with a sigh. They predict they will claim they took the 'less traveled' road and that it changed everything, even though they already admitted (in stanza 2) that both roads were actually the same. It's a poem about how we justify our choices later in life."
    }
  ],
  deepDive: [
    {
      phrase: '"Two roads diverged"',
      tag: '/dʒ/ vs /d/ Sounds',
      what: '"Diverged" ends with /dʒd/ — a challenging cluster. The /dʒ/ is the "j" sound in "judge." Don\'t confuse it with a simple /d/.',
      phonetic: 'diverged → /daɪ<strong>vɜːrdʒd</strong>/',
      practice: 'Say "verge" + "d": "di-VURJD." The final /d/ after /dʒ/ is very light — almost silent.',
      tip: 'Many Chinese learners struggle with the "j" sound /dʒ/. It\'s like "zh" in Mandarin but with more voice. Practice: "judge," "age," "diverged."'
    },
    {
      phrase: '"And that has made all the difference"',
      tag: 'Emphatic Stress Pattern',
      what: 'This famous last line uses <strong>contrastive stress</strong>. "THAT" and "ALL" and "DIFF-" get extra emphasis. Function words "has," "made," "the" shrink.',
      phonetic: '/ən <strong>ðæt</strong> əz meɪd <strong>ɔːl</strong> ðə <strong>dɪf</strong>rəns/',
      practice: 'Try saying it while gently tapping: "un-THAT-uz-MADE — ALL-the-DIFF-rence." Feel how the stressed words create peaks and the rest flows between.',
      tip: 'This is a perfect example of English stress-timing. The stressed words come at roughly equal intervals no matter how many unstressed syllables are squeezed between them.'
    }
  ]
},

// ═══════════════════════ 8 ═══════════════════════
{
  id: 'stopping-by-woods',
  title: 'Stopping by Woods on a Snowy Evening',
  author: 'Robert Frost',
  year: 1923,
  level: 'Intermediate',
  context: 'A traveler pauses to watch snow fill the dark woods — it\'s beautiful and tempting to stay, but he has "miles to go before I sleep." A poem about duty, beauty, and maybe something darker.',
  stanzas: [
    [
      [{ t: 'Whose ' },{ t: 'woods', s:1 },{ t: ' these ' },{ t: 'are', s:1 },{ t: ' I ' },{ t: 'think', s:1 },{ t: ' I ' },{ t: 'know', s:1 },{ p:1 }],
      [{ t: 'His ' },{ t: 'house', s:1 },{ t: ' is in the ' },{ t: 'village', s:1 },{ t: ' ' },{ t: 'though', s:1 },{ p:1 }],
      [{ t: 'He will not ' },{ t: 'see', s:1 },{ t: ' me ' },{ t: 'stopping', s:1 },{ t: ' ' },{ t: 'here', s:1 },{ p:1 }],
      [{ t: 'To ' },{ t: 'watch', s:1 },{ t: ' his ' },{ t: 'woods', s:1 },{ t: ' fill up with ' },{ t: 'snow', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'My ' },{ t: 'little', s:1 },{ t: ' ' },{ t: 'horse', s:1 },{ t: ' must ' },{ t: 'think', s:1 },{ t: ' it ' },{ t: 'queer', s:1 },{ p:1 }],
      [{ t: 'To ' },{ t: 'stop', s:1 },{ t: ' without a ' },{ t: 'farmhouse', s:1 },{ t: ' ' },{ t: 'near', s:1 },{ p:1 }],
      [{ t: 'Between the ' },{ t: 'woods', s:1 },{ t: ' and ' },{ t: 'frozen', s:1 },{ t: ' ' },{ t: 'lake', s:1 },{ p:1 }],
      [{ t: 'The ' },{ t: 'darkest', s:1 },{ t: ' ' },{ t: 'evening', s:1 },{ t: ' of the ' },{ t: 'year', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'He gives his ' },{ t: 'harness', s:1 },{ t: ' ' },{ t: 'bells', s:1 },{ t: ' a ' },{ t: 'shake', s:1 },{ p:1 }],
      [{ t: 'To ' },{ t: 'ask', s:1 },{ t: ' if ' },{ t: 'there', s:1 },{ t: ' is some mi- ' },{ t: 'stake', s:1 },{ p:1 }],
      [{ t: 'The ' },{ t: 'only', s:1 },{ t: ' other ' },{ t: 'sound\'s', s:1 },{ t: ' the ' },{ t: 'sweep', s:1 },{ p:1 }],
      [{ t: 'Of ' },{ t: 'easy', s:1 },{ t: ' ' },{ t: 'wind', s:1 },{ t: ' and ' },{ t: 'downy', s:1 },{ t: ' ' },{ t: 'flake', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'The ' },{ t: 'woods', s:1 },{ t: ' are ' },{ t: 'lovely', s:1 },{ p:1 },{ t: ' ' },{ t: 'dark', s:1 },{ t: ' and ' },{ t: 'deep', s:1 },{ p:1 }],
      [{ t: 'But I have ' },{ t: 'promises', s:1 },{ t: ' to ' },{ t: 'keep', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'miles', s:1 },{ t: ' to ' },{ t: 'go', s:1 },{ t: ' before I ' },{ t: 'sleep', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'miles', s:1 },{ t: ' to ' },{ t: 'go', s:1 },{ t: ' before I ' },{ t: 'sleep', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Whose woods these are I think I know.", "His house is in the village though;", "He will not see me stopping here", "To watch his woods fill up with snow."],
      explanation: "The speaker pauses in a beautiful snowy forest. They know the owner lives far away in the village, so they feel safe stopping to simply watch the snow fall without being caught trespassing."
    },
    {
      lines: ["My little horse must think it queer", "To stop without a farmhouse near", "Between the woods and frozen lake", "The darkest evening of the year."],
      explanation: "The speaker projects their own sense of isolation onto the horse. Stopping in the middle of nowhere on the longest, darkest night of the year feels strange and slightly dangerous.",
      vocab: ["queer: strange or unusual"]
    },
    {
      lines: ["He gives his harness bells a shake", "To ask if there is some mistake.", "The only other sound's the sweep", "Of easy wind and downy flake."],
      explanation: "The sudden, sharp sound of the horse's bells contrasts with the deep, soft silence of the wind and falling snow. The bells represent the demands of the real world calling the speaker back.",
      vocab: ["downy: covered with fine, soft hair or feathers; very soft"]
    },
    {
      lines: ["The woods are lovely, dark and deep,", "But I have promises to keep,", "And miles to go before I sleep,", "And miles to go before I sleep."],
      explanation: "The dark woods are peaceful and incredibly tempting, perhaps even representing the peace of death or giving up. However, the speaker remembers their responsibilities ('promises') and forces themselves to keep going. The repetition makes the remaining journey feel long and exhausting."
    }
  ],
  deepDive: [
    {
      phrase: '"lovely, dark and deep"',
      tag: 'List Intonation',
      what: 'English lists have a distinct melody: each item <strong>rises</strong> until the last, which <strong>falls</strong>. "LOVE-ly ↗, DARK ↗ and DEEP ↘." The comma creates a micro-pause.',
      phonetic: '/ˈlʌvli ↗ · dɑːrk ↗ · ən ˈdiːp ↘/',
      practice: 'Say the three adjectives like you\'re listing items: voice goes up on "lovely," up on "dark," then down on "deep." This signals "the list is done."',
      tip: 'This rising-then-falling pattern for lists is universal in English. Practice with any list: "red, blue, and green."'
    },
    {
      phrase: '"miles to go before I sleep"',
      tag: 'Iambic Rhythm',
      what: 'This line has perfect iambic rhythm: da-DUM-da-DUM-da-DUM-da-DUM. Unstressed-stressed pairs. This is the heartbeat of English poetry.',
      phonetic: '/maɪlz tə goʊ bɪfɔːr aɪ sliːp/',
      practice: 'March in place while saying the line. Step on: MILES, GO, -FORE, SLEEP. The line should feel like walking.',
      tip: 'The repetition of this line is hypnotic by design. The second time, say it slightly slower and quieter — it adds emotional weight.'
    }
  ]
},

// ═══════════════════════ 9 ═══════════════════════
{
  id: 'i-too',
  title: 'I, Too',
  author: 'Langston Hughes',
  year: 1926,
  level: 'Beginner',
  context: 'A response to Walt Whitman\'s "I Hear America Singing." Hughes declares that he, too, is American — despite being sent to eat in the kitchen when company comes. Defiant, dignified, and forward-looking.',
  stanzas: [
    [
      [{ t: 'I', s:1 },{ t: ', ' },{ t: 'too', s:1 },{ p:1 },{ t: ' ' },{ t: 'sing', s:1 },{ t: ' A- ' },{ t: 'merica', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'I am the ' },{ t: 'darker', s:1 },{ t: ' ' },{ t: 'brother', s:1 },{ p:1 }],
      [{ t: 'They ' },{ t: 'send', s:1 },{ t: ' me to ' },{ t: 'eat', s:1 },{ t: ' in the ' },{ t: 'kitchen', s:1 },{ p:1 }],
      [{ t: 'When ' },{ t: 'company', s:1 },{ t: ' ' },{ t: 'comes', s:1 },{ p:1 }],
      [{ t: 'But I ' },{ t: 'laugh', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'eat', s:1 },{ t: ' ' },{ t: 'well', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'grow', s:1 },{ t: ' ' },{ t: 'strong', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'To- ' },{ t: 'morrow', s:1 },{ p:1 }],
      [{ t: 'I\'ll be at the ' },{ t: 'table', s:1 },{ p:1 }],
      [{ t: 'When ' },{ t: 'company', s:1 },{ t: ' ' },{ t: 'comes', s:1 },{ p:1 }],
      [{ t: 'No- ' },{ t: 'body\'ll', s:1 },{ t: ' ' },{ t: 'dare', s:1 },{ p:1 }],
      [{ t: 'Say to me ' },{ p:1 }],
      [{ t: '"Eat', s:1 },{ t: ' in the ' },{ t: 'kitchen', s:1 },{ t: ',"' },{ p:1 }],
      [{ t: 'Then', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Be- ' },{ t: 'sides', s:1 },{ p:1 }],
      [{ t: 'They\'ll ' },{ t: 'see', s:1 },{ t: ' how ' },{ t: 'beautiful', s:1 },{ t: ' I ' },{ t: 'am', s:1 },{ p:1 }],
      [{ t: 'And be a- ' },{ t: 'shamed', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'I', s:1 },{ t: ', ' },{ t: 'too', s:1 },{ p:1 },{ t: ' am A- ' },{ t: 'merica', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["I, too, sing America."],
      explanation: "A direct confident assertion: the speaker claims their rightful place as part of the American chorus, responding to older poems that celebrated America but ignored Black Americans."
    },
    {
      lines: ["I am the darker brother.", "They send me to eat in the kitchen", "When company comes,", "But I laugh,", "And eat well,", "And grow strong."],
      explanation: "The speaker addresses the reality of segregation and racism, framed as a family ('brother') that hides him away. Instead of despairing, he uses this isolation to nourish himself and build his power."
    },
    {
      lines: ["Tomorrow,", "I'll be at the table", "When company comes.", "Nobody'll dare", "Say to me,", "\"Eat in the kitchen,\"", "Then."],
      explanation: "A prophetic vision of the future. The speaker predicts a time of equality where they will refuse to be hidden, and their strength will demand respect."
    },
    {
      lines: ["Besides,", "They'll see how beautiful I am", "And be ashamed—"],
      explanation: "The shift here is crucial: the respect won't just come from fear or strength, but from the dominant culture finally recognizing the beauty and value of the speaker, causing them to feel guilt for their past actions."
    },
    {
      lines: ["I, too, am America."],
      explanation: "The ultimate conclusion. He doesn't just 'sing' America anymore; he *is* America. His identity is inseparable from the nation's identity."
    }
  ],
  deepDive: [
    {
      phrase: '"I, too, sing America"',
      tag: 'Comma Pauses + Emphasis',
      what: 'The commas around "too" create <strong>two micro-pauses</strong> that give the word enormous weight. "I" is also stressed — both pronouncing identity. This isn\'t just "also" — it\'s defiance.',
      phonetic: '/<strong>aɪ</strong> · <strong>tuː</strong> · <strong>sɪŋ</strong> ə<strong>mɛr</strong>ɪkə/',
      practice: 'Pause slightly after "I" and after "too." Give each of those three words — I, TOO, SING — its own space and weight.',
      tip: 'In English, pauses can be as meaningful as words. The pause after "too" tells the listener: this matters.'
    },
    {
      phrase: '"Nobody\'ll dare"',
      tag: 'Contraction + Dark L',
      what: '"Nobody\'ll" is a double contraction: nobody + will. The /l/ at the end is a <strong>dark L</strong> — the tongue pulls back slightly. "Dare" lands with force.',
      phonetic: 'Nobody\'ll dare → /<strong>noʊ</strong>bɑɾiːəɫ <strong>dɛr</strong>/',
      practice: 'Say "nobody-ul" quickly, then "DARE" with emphasis. The /ɫ/ is just the tongue touching the ridge behind your teeth while the back of the tongue is raised.',
      tip: 'Dark L appears at the end of syllables in English: "feel," "call," "will." It sounds thicker than the "light L" at the start of words like "love."'
    }
  ]
},

// ═══════════════════════ 10 ═══════════════════════
{
  id: 'harlem',
  title: 'Harlem (A Dream Deferred)',
  author: 'Langston Hughes',
  year: 1951,
  level: 'Intermediate',
  context: 'What happens to a dream you have to postpone? Does it dry up? Rot? Explode? A poem made of questions that hits like a gut punch. One of the most quoted poems in American literature.',
  stanzas: [
    [
      [{ t: 'What ' },{ t: 'happens', s:1 },{ t: ' to a ' },{ t: 'dream', s:1 },{ t: ' de- ' },{ t: 'ferred', s:1 },{ t: '?' },{ p:1 }]
    ],
    [
      [{ t: 'Does it ' },{ t: 'dry', s:1 },{ t: ' ' },{ t: 'up', s:1 },{ p:1 }],
      [{ t: 'like a ' },{ t: 'raisin', s:1 },{ t: ' in the ' },{ t: 'sun', s:1 },{ t: '?' },{ p:1 }],
      [{ t: 'Or ' },{ t: 'fester', s:1 },{ t: ' like a ' },{ t: 'sore', s:1 },{ p:1 }],
      [{ t: 'And then ' },{ t: 'run', s:1 },{ t: '?' },{ p:1 }],
      [{ t: 'Does it ' },{ t: 'stink', s:1 },{ t: ' like ' },{ t: 'rotten', s:1 },{ t: ' ' },{ t: 'meat', s:1 },{ t: '?' },{ p:1 }],
      [{ t: 'Or ' },{ t: 'crust', s:1 },{ t: ' and ' },{ t: 'sugar', s:1 },{ t: ' ' },{ t: 'over', s:1 },{ p:1 }],
      [{ t: 'like a ' },{ t: 'syrupy', s:1 },{ t: ' ' },{ t: 'sweet', s:1 },{ t: '?' },{ p:1 }]
    ],
    [
      [{ t: 'Maybe it just ' },{ t: 'sags', s:1 },{ p:1 }],
      [{ t: 'like a ' },{ t: 'heavy', s:1 },{ t: ' ' },{ t: 'load', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Or does it ' },{ t: 'ex', s:1 },{ t: '- ' },{ t: 'plode', s:1 },{ t: '?' }]
    ]
  ],
  meaning: [
    {
      lines: ["What happens to a dream deferred?"],
      explanation: "The poem opens with its central, haunting question. When a community's hopes for equality and opportunity are constantly delayed ('deferred'), what is the consequence?",
      vocab: ["deferred: put off to a later time; postponed"]
    },
    {
      lines: ["Does it dry up", "like a raisin in the sun?", "Or fester like a sore—", "And then run?", "Does it stink like rotten meat?", "Or crust and sugar over—", "like a syrupy sweet?"],
      explanation: "Hughes offers several possibilities, almost all of them involving rot and decay. The dream might lose its life and shrink (raisin), become a painful, infected wound (sore), spoil and go bad (meat), or become falsely sweet but hardened (syrupy sweet).",
      vocab: ["fester: (of a wound or sore) become infected, emitting pus"]
    },
    {
      lines: ["Maybe it just sags", "like a heavy load."],
      explanation: "If it doesn't rot, maybe the unfulfilled dream just becomes a crushing, exhausting psychological burden that the dreamer has to carry forever."
    },
    {
      lines: ["Or does it explode?"],
      explanation: "The final, isolated line shifts from slow decay to sudden, violent destruction. The suggestion is that constantly denying people their dreams will eventually lead to an explosive, desperate reaction."
    }
  ],
  deepDive: [
    {
      phrase: '"a dream deferred"',
      tag: '/dr/ Cluster + Stress',
      what: 'Both "dream" and "deferred" start with /dr/ — practice this cluster. "Deferred" has stress on the <strong>second</strong> syllable: de-<strong>FURRED</strong>.',
      phonetic: 'a dream deferred → /ə <strong>driːm</strong> dɪ<strong>fɜːrd</strong>/',
      practice: 'Say "duh-FURD" — the first syllable is very fast and light. The /r/ in "furred" is an American rhotic R — tongue curls back slightly.',
      tip: 'Chinese learners often confuse /dr/ with /dʒr/ or /tr/. Practice: "drive," "dream," "dress" — the /d/ and /r/ should blend, not separate.'
    },
    {
      phrase: '"Or does it explode?"',
      tag: 'Italicized Emphasis',
      what: 'This final line is traditionally set in <em>italics</em> — it\'s set apart from the rest. The stress falls hard on "ex-<strong>PLODE</strong>" and the question mark adds rising intonation. It\'s the climax.',
      phonetic: '/ɔːr dʌz ɪt ɪk<strong>sploʊd</strong> ↗/',
      practice: 'Build energy through the line: "or-does-it" are quick and light, then "ex-PLODE" gets maximum force. Let your voice rise at the end — it\'s a question, but also a warning.',
      tip: 'The explosive /pl/ cluster in "explode" mirrors the meaning. Make the /p/ sharp and let the word burst out.'
    }
  ]
},

// ═══════════════════════ 11 ═══════════════════════
{
  id: 'do-not-go-gentle',
  title: 'Do Not Go Gentle into That Good Night',
  author: 'Dylan Thomas',
  year: 1951,
  level: 'Advanced',
  context: 'Written as Thomas\'s father was dying. A fierce villanelle demanding that we fight against death — rage against the dying of the light. One of the most powerful poems in the English language.',
  stanzas: [
    [
      [{ t: 'Do ' },{ t: 'not', s:1 },{ t: ' go ' },{ t: 'gentle', s:1 },{ t: ' into ' },{ t: 'that', s:1 },{ t: ' good ' },{ t: 'night', s:1 },{ p:1 }],
      [{ t: 'Old', s:1 },{ t: ' ' },{ t: 'age', s:1 },{ t: ' should ' },{ t: 'burn', s:1 },{ t: ' and ' },{ t: 'rave', s:1 },{ t: ' at ' },{ t: 'close', s:1 },{ t: ' of ' },{ t: 'day', s:1 },{ p:1 }],
      [{ t: 'Rage', s:1 },{ p:1 },{ t: ' ' },{ t: 'rage', s:1 },{ t: ' against the ' },{ t: 'dying', s:1 },{ t: ' of the ' },{ t: 'light', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Though ' },{ t: 'wise', s:1 },{ t: ' ' },{ t: 'men', s:1 },{ t: ' at their ' },{ t: 'end', s:1 },{ t: ' know ' },{ t: 'dark', s:1 },{ t: ' is ' },{ t: 'right', s:1 },{ p:1 }],
      [{ t: 'Because their ' },{ t: 'words', s:1 },{ t: ' had ' },{ t: 'forked', s:1 },{ t: ' no ' },{ t: 'lightning', s:1 },{ t: ' they' },{ p:1 }],
      [{ t: 'Do ' },{ t: 'not', s:1 },{ t: ' go ' },{ t: 'gentle', s:1 },{ t: ' into ' },{ t: 'that', s:1 },{ t: ' good ' },{ t: 'night', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Good', s:1 },{ t: ' ' },{ t: 'men', s:1 },{ p:1 },{ t: ' the ' },{ t: 'last', s:1 },{ t: ' ' },{ t: 'wave', s:1 },{ t: ' ' },{ t: 'by', s:1 },{ p:1 },{ t: ' ' },{ t: 'crying', s:1 },{ t: ' how ' },{ t: 'bright', s:1 },{ p:1 }],
      [{ t: 'Their ' },{ t: 'frail', s:1 },{ t: ' ' },{ t: 'deeds', s:1 },{ t: ' might have ' },{ t: 'danced', s:1 },{ t: ' in a ' },{ t: 'green', s:1 },{ t: ' ' },{ t: 'bay', s:1 },{ p:1 }],
      [{ t: 'Rage', s:1 },{ p:1 },{ t: ' ' },{ t: 'rage', s:1 },{ t: ' against the ' },{ t: 'dying', s:1 },{ t: ' of the ' },{ t: 'light', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Wild', s:1 },{ t: ' ' },{ t: 'men', s:1 },{ t: ' who ' },{ t: 'caught', s:1 },{ t: ' and ' },{ t: 'sang', s:1 },{ t: ' the ' },{ t: 'sun', s:1 },{ t: ' in ' },{ t: 'flight', s:1 },{ p:1 }],
      [{ t: 'And ' },{ t: 'learn', s:1 },{ p:1 },{ t: ' too ' },{ t: 'late', s:1 },{ p:1 },{ t: ' they ' },{ t: 'grieved', s:1 },{ t: ' it on its ' },{ t: 'way', s:1 },{ p:1 }],
      [{ t: 'Do ' },{ t: 'not', s:1 },{ t: ' go ' },{ t: 'gentle', s:1 },{ t: ' into ' },{ t: 'that', s:1 },{ t: ' good ' },{ t: 'night', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Grave', s:1 },{ t: ' ' },{ t: 'men', s:1 },{ p:1 },{ t: ' near ' },{ t: 'death', s:1 },{ p:1 },{ t: ' who ' },{ t: 'see', s:1 },{ t: ' with ' },{ t: 'blinding', s:1 },{ t: ' ' },{ t: 'sight', s:1 },{ p:1 }],
      [{ t: 'Blind', s:1 },{ t: ' ' },{ t: 'eyes', s:1 },{ t: ' could ' },{ t: 'blaze', s:1 },{ t: ' like ' },{ t: 'meteors', s:1 },{ t: ' and be ' },{ t: 'gay', s:1 },{ p:1 }],
      [{ t: 'Rage', s:1 },{ p:1 },{ t: ' ' },{ t: 'rage', s:1 },{ t: ' against the ' },{ t: 'dying', s:1 },{ t: ' of the ' },{ t: 'light', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'And ' },{ t: 'you', s:1 },{ p:1 },{ t: ' my ' },{ t: 'father', s:1 },{ p:1 },{ t: ' there on the ' },{ t: 'sad', s:1 },{ t: ' ' },{ t: 'height', s:1 },{ p:1 }],
      [{ t: 'Curse', s:1 },{ p:1 },{ t: ' ' },{ t: 'bless', s:1 },{ p:1 },{ t: ' me now with your ' },{ t: 'fierce', s:1 },{ t: ' ' },{ t: 'tears', s:1 },{ p:1 },{ t: ' I ' },{ t: 'pray', s:1 },{ p:1 }],
      [{ t: 'Do ' },{ t: 'not', s:1 },{ t: ' go ' },{ t: 'gentle', s:1 },{ t: ' into ' },{ t: 'that', s:1 },{ t: ' good ' },{ t: 'night', s:1 },{ p:1 }],
      [{ t: 'Rage', s:1 },{ p:1 },{ t: ' ' },{ t: 'rage', s:1 },{ t: ' against the ' },{ t: 'dying', s:1 },{ t: ' of the ' },{ t: 'light', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Do not go gentle into that good night,", "Old age should burn and rave at close of day;", "Rage, rage against the dying of the light."],
      explanation: "The core command of the poem: do not accept death peacefully ('gentle'). Even in old age, one should fight furiously with passion ('burn and rave') to stay alive.",
      vocab: ["rave: talk wildly or incoherently, as if one were delirious", "dying of the light: a metaphor for death"]
    },
    {
      lines: ["Though wise men at their end know dark is right,", "Because their words had forked no lightning they", "Do not go gentle into that good night."],
      explanation: "Wise men understand intellectually that death ('dark') is natural and inevitable. However, because they feel they haven't made a big enough impact ('forked no lightning') with their wisdom, they refuse to die peacefully."
    },
    {
      lines: ["Good men, the last wave by, crying how bright", "Their frail deeds might have danced in a green bay,", "Rage, rage against the dying of the light."],
      explanation: "Good men, nearing the end, realize their small acts ('frail deeds') could have been beautiful and vibrant ('danced in a green bay') if they had more time, so they too fight against death."
    },
    {
      lines: ["Wild men who caught and sang the sun in flight,", "And learn, too late, they grieved it on its way,", "Do not go gentle into that good night."],
      explanation: "Adventurous, passionate men who lived intensely ('caught and sang the sun') eventually realize that time flew by too quickly and their actions hastened their end. They refuse to accept it easily."
    },
    {
      lines: ["Grave men, near death, who see with blinding sight", "Blind eyes could blaze like meteors and be gay,", "Rage, rage against the dying of the light."],
      explanation: "Serious men facing death ('grave' is a pun here) suddenly see clearly ('blinding sight') that even fading, failing bodies ('blind eyes') can still have moments of fierce, spectacular joy ('blaze like meteors').",
      vocab: ["grave: very serious; also a place of burial"]
    },
    {
      lines: ["And you, my father, there on the sad height,", "Curse, bless, me now with your fierce tears, I pray.", "Do not go gentle into that good night.", "Rage, rage against the dying of the light."],
      explanation: "The poem suddenly becomes intensely personal. The speaker addresses their dying father, begging him to show any emotion—even anger or cursing—just to prove he is still fighting for life."
    }
  ],
  deepDive: [
    {
      phrase: '"Rage, rage against"',
      tag: 'Repetition + Hard G',
      what: 'The repeated "rage" uses a hard /dʒ/ at the end. The comma between them creates a <strong>dramatic pause</strong> — the speaker catches their breath before raging again. The /r/ in "rage" is forceful.',
      phonetic: 'Rage, rage → /<strong>reɪdʒ</strong> · <strong>reɪdʒ</strong> ə<strong>gɛnst</strong>/',
      practice: 'Say "RAGE" — pause — "RAGE." Make the /r/ strong and the /dʒ/ crisp. Then flow into "against": "RAGE-uh-GENST."',
      tip: 'This /dʒ/ is the same sound as in "judge" and "age." It\'s voiced — your throat vibrates. Compare with /tʃ/ in "church" (unvoiced).'
    },
    {
      phrase: '"the dying of the light"',
      tag: 'Metaphor + Rhythm',
      what: 'Five iambic beats building to the crucial word "light." "Dying" and "light" carry the meaning — everything else is connective tissue. The /aɪ/ vowel in both words creates an internal echo.',
      phonetic: '/ðə <strong>daɪ</strong>ɪŋ əv ðə <strong>laɪt</strong>/',
      practice: 'The words "the," "of," "the" are all reduced to /ðə/. Glide through them quickly and land firmly on "DY-ing" and "LIGHT."',
      tip: 'The shared /aɪ/ vowel in "dying" and "light" is intentional — it binds the two key words together sonically. Make that vowel ring both times.'
    }
  ]
},

// ═══════════════════════ 12 ═══════════════════════
{
  id: 'hope-is-the-thing',
  title: '"Hope" is the thing with feathers',
  author: 'Emily Dickinson',
  year: 1891,
  level: 'Beginner',
  context: 'A beautiful poem comparing hope to a bird that sings eternally in the soul, asking for nothing in return, even in the coldest storms.',
  stanzas: [
    [
      [{ t: '"Hope" ', s:1 },{ t: 'is the ' },{ t: 'thing ', s:1 },{ t: 'with ' },{ t: 'feathers', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'That ' },{ t: 'perches ', s:1 },{ t: 'in the ' },{ t: 'soul', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'And ' },{ t: 'sings ', s:1 },{ t: 'the ' },{ t: 'tune ', s:1 },{ t: 'without the ' },{ t: 'words', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'And ' },{ t: 'never ', s:1 },{ t: 'stops', s:1 },{ t: '—' },{ t: ' at ', l:'a·tall' },{ t: 'all', s:1 },{ t: '—' },{ p:1 }]
    ],
    [
      [{ t: 'And ' },{ t: 'sweetest ', s:1 },{ t: '—in the ' },{ t: 'Gale', s:1 },{ t: '—' },{ t: 'is ' },{ t: 'heard', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'And ' },{ t: 'sore ', s:1 },{ t: 'must be the ' },{ t: 'storm', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'That could a- ' },{ t: 'bash ', s:1 },{ t: 'the little ' },{ t: 'Bird', s:1 },{ p:1 }],
      [{ t: 'That ' },{ t: 'kept ', s:1 },{ t: 'so many ' },{ t: 'warm', s:1 },{ t: '—' },{ p:1 }]
    ],
    [
      [{ t: 'I\'ve ' },{ t: 'heard ', s:1 },{ t: 'it in the ' },{ t: 'chillest ', s:1 },{ t: 'land', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'And on the ' },{ t: 'strangest ', s:1 },{ t: 'Sea', s:1 },{ t: '—' },{ p:1 }],
      [{ t: 'Yet, ' },{ t: 'never', s:1 },{ t: ', in Ex- ' },{ t: 'tremity', s:1 },{ t: ',' },{ p:1 }],
      [{ t: 'It ' },{ t: 'asked ', s:1 },{ t: 'a ' },{ t: 'crumb', s:1 },{ t: '—' },{ t: 'of ', l:'uh·vme' },{ t: 'Me.', s:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["\"Hope\" is the thing with feathers—", "That perches in the soul—"],
      explanation: "Hope is personified as a small bird that lives unconditionally inside the human spirit."
    },
    {
      lines: ["And sings the tune without the words—", "And never stops— at all—"],
      explanation: "This feeling of hope doesn't rely on logic or reasons ('without the words') and is a constant, unending presence."
    },
    {
      lines: ["And sweetest—in the Gale—is heard—", "And sore must be the storm—", "That could abash the little Bird", "That kept so many warm—"],
      explanation: "Hope feels the most beautiful and necessary during terrible storms (hard times). Only overwhelming disaster could possibly silence ('abash') this comforting inner bird.",
      vocab: ["Gale: a very strong wind", "abash: to destroy the self-confidence of; to silence or make ashamed"]
    },
    {
      lines: ["I've heard it in the chillest land—", "And on the strangest Sea—", "Yet, never, in Extremity,", "It asked a crumb—of Me."],
      explanation: "Even in the coldest, most isolated, and completely extreme situations, this inner hope continues to give support without ever demanding anything in return.",
      vocab: ["Extremity: the furthest point or limit; extreme hardship"]
    }
  ],
  deepDive: [
    {
      phrase: '"stops— at all—"',
      tag: 'Linking into Vowel',
      what: 'The /s/ at the end of "stops" attaches to "at", making "stop-sat". Then the /t/ of "at" links to "all", creating a flap-t: "a-tall".',
      phonetic: 'stops at all → /stɑp <strong>səɾ</strong>ɔl/',
      practice: 'Say it as one smooth word without breaking the breath: stop-suh-tall.',
      tip: 'This is why English speakers sound so fast! They rarely separate words that end in a consonant and start with a vowel.'
    }
  ]
},

// ═══════════════════════ 13 ═══════════════════════
{
  id: 'the-tyger',
  title: 'The Tyger',
  author: 'William Blake',
  year: 1794,
  level: 'Beginner',
  context: 'A thumping, hypnotic poem asking a profound question: what kind of terrifying creator could have made a creature as fierce and beautiful as a tiger?',
  stanzas: [
    [
      [{ t: 'Tyger ', s:1 },{ t: 'Tyger, ', s:1 },{ t: 'burning ', s:1 },{ t: 'bright', s:1 },{ p:1 }],
      [{ t: 'In the ' },{ t: 'forests ', s:1 },{ t: 'of the ' },{ t: 'night', s:1 },{ t: ';' },{ p:1 }],
      [{ t: 'What im- ' },{ t: 'mortal ', s:1 },{ t: 'hand ', s:1 },{ t: 'or ' },{ t: 'eye', s:1 },{ t: ',' },{ p:1 }],
      [{ t: 'Could ' },{ t: 'frame ', s:1 },{ t: 'thy ' },{ t: 'fearful ', s:1 },{ t: 'sym- ', s:1 },{ t: 'metry?', s:1 },{ p:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Tyger Tyger, burning bright", "In the forests of the night;"],
      explanation: "The tiger is pictured as incredibly radiant and powerful, glowing ('burning') dangerously in the middle of a dark, wild forest."
    },
    {
      lines: ["What immortal hand or eye,", "Could frame thy fearful symmetry?"],
      explanation: "The central question: What kind of god ('immortal hand') could create something that is so perfectly designed ('symmetry') yet so terrifying ('fearful')?",
      vocab: ["immortal: living forever; divine", "symmetry: perfect proportion and balance"]
    }
  ],
  deepDive: [
    {
      phrase: '"Tyger Tyger"',
      tag: 'Trochaic Meter',
      what: 'Unlike the common iambic (da-DUM) rhythm, this relies on trochees: DUM-da DUM-da DUM-da DUM. It gives the poem a heavy, hammering, chant-like beat.',
      phonetic: '/<strong>taɪ</strong>gər <strong>taɪ</strong>gər/',
      practice: 'Emphasize the first syllable heavily. TY-ger, TY-ger, BURN-ing BRIGHT. It should almost sound like a drumbeat.',
      tip: 'Try walking to the beat of this line. Your foot should hit the ground hard on "TY-", "TY-", "BURN-", and "BRIGHT".'
    }
  ]
},

// ═══════════════════════ 14 ═══════════════════════
{
  id: 'ozymandias',
  title: 'Ozymandias',
  author: 'Percy Bysshe Shelley',
  year: 1818,
  level: 'Intermediate',
  context: 'A traveler tells the speaker about a shattered, colossal statue of an ancient king buried in the sand. It is a famous meditation on the temporary nature of power and human pride.',
  stanzas: [
    [
      [{ t: 'I ' },{ t: 'met ', s:1 },{ t: 'a ' },{ t: 'traveller ', s:1 },{ t: 'from an ' },{ t: 'antique ', s:1 },{ t: 'land', s:1 },{ p:1 }],
      [{ t: 'Who ' },{ t: 'said', s:1 },{ t: '—' },{ t: 'Two ' },{ t: 'vast ', s:1 },{ t: 'and ' },{ t: 'trunkless ', s:1 },{ t: 'legs ', s:1 },{ t: 'of ' },{ t: 'stone', s:1 },{ p:1 }],
      [{ t: 'Stand ', s:1 },{ t: 'in the ' },{ t: 'desert', s:1 },{ t: '...', p:1 },{ t: ' ' },{ t: 'Near ', s:1 },{ t: 'them', s:1 },{ t: ', on the ' },{ t: 'sand', s:1 },{ t: ',', p:1 }],
      [{ t: 'Half ' },{ t: 'sunk', s:1 },{ t: ' a ' },{ t: 'shattered ', s:1 },{ t: 'visage ', s:1 },{ t: 'lies', s:1 },{ t: ', whose ' },{ t: 'frown', s:1 },{ t: ',', p:1 }],
      [{ t: 'And ' },{ t: 'wrinkled ', s:1 },{ t: 'lip', s:1 },{ t: ', and ' },{ t: 'sneer ', s:1 },{ t: 'of ' },{ t: 'cold ', s:1 },{ t: 'command', s:1 },{ t: ',', p:1 }]
    ],
    [
      [{ t: 'Tell ', s:1 },{ t: 'that its ' },{ t: 'sculptor ', s:1 },{ t: 'well ', s:1 },{ t: 'those ' },{ t: 'passions ', s:1 },{ t: 'read', s:1 },{ p:1 }],
      [{ t: 'Which yet sur- ', l:'sur·vive' },{ t: 'vive', s:1 },{ t: ', ', p:1 },{ t: 'stamped ', s:1 },{ t: 'on these ' },{ t: 'lifeless ', s:1 },{ t: 'things', s:1 },{ t: ',', p:1 }],
      [{ t: 'The ' },{ t: 'hand ', s:1 },{ t: 'that ' },{ t: 'mocked ', s:1 },{ t: 'them, and the ' },{ t: 'heart ', s:1 },{ t: 'that ' },{ t: 'fed', s:1 },{ t: ';', p:1 }]
    ],
    [
      [{ t: 'And on the ' },{ t: 'pedestal ', s:1 },{ t: 'these ' },{ t: 'words ', s:1 },{ t: 'ap- ' },{ t: 'pear', s:1 },{ t: ':', p:1 }],
      [{ t: 'My ' },{ t: 'name ', s:1 },{ t: 'is ' },{ t: 'Ozy- ', s:1 },{ t: 'mandias', s:1 },{ t: ', ' },{ t: 'King ', s:1 },{ t: 'of ' },{ t: 'Kings', s:1 },{ t: ';', p:1 }],
      [{ t: 'Look ', s:1 },{ t: 'on my ' },{ t: 'Works', s:1 },{ t: ', ye ' },{ t: 'Mighty', s:1 },{ t: ', and de- ' },{ t: 'spair!', s:1 },{ p:1 }]
    ],
    [
      [{ t: 'Nothing ', s:1 },{ t: 'beside ', s:1 },{ t: 're- ' },{ t: 'mains', s:1 },{ t: '. ', p:1 },{ t: 'Round the de- ' },{ t: 'cay', s:1 },{ p:1 }],
      [{ t: 'Of that ' },{ t: 'colossal ', s:1 },{ t: 'Wreck', s:1 },{ t: ', ', p:1 },{ t: 'boundless ', s:1 },{ t: 'and ' },{ t: 'bare', s:1 },{ p:1 }],
      [{ t: 'The ' },{ t: 'lone ', s:1 },{ t: 'and ' },{ t: 'level ', s:1 },{ t: 'sands ', s:1 },{ t: 'stretch ', s:1 },{ t: 'far ', s:1 },{ t: 'a- ' },{ t: 'way', s:1 },{ t: '.', p:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["I met a traveller from an antique land", "Who said—Two vast and trunkless legs of stone", "Stand in the desert... Near them, on the sand,", "Half sunk a shattered visage lies"],
      explanation: "A traveler describes ruins in the desert. Only the legs of the giant statue remain standing, while the broken face ('shattered visage') lies half-buried in the sand."
    },
    {
      lines: ["whose frown,", "And wrinkled lip, and sneer of cold command,", "Tell that its sculptor well those passions read"],
      explanation: "The statue's face still shows a cruel, arrogant sneer. The sculptor accurately captured the king's harsh personality in the stone."
    },
    {
      lines: ["And on the pedestal these words appear:", "My name is Ozymandias, King of Kings;", "Look on my Works, ye Mighty, and despair!"],
      explanation: "The inscription on the base boasts of Ozymandias' supreme power, warning other great rulers to look at his vast empire and feel hopeless beside his greatness."
    },
    {
      lines: ["Nothing beside remains. Round the decay", "Of that colossal Wreck, boundless and bare", "The lone and level sands stretch far away."],
      explanation: "The ultimate irony: despite the arrogant boast, absolutely nothing is left of the 'Works'. There is only endless, empty sand around a broken statue, proving that time destroys all human power."
    }
  ],
  deepDive: [
    {
      phrase: '"lone and level sands stretch"',
      tag: 'Alliteration + Cluster Focus',
      what: 'The repeated "L" and "S" sounds mimic the endless, whispering quality of the blowing sand. "Sands stretch" forces you to articulate /ndz·str/ — a massive consonant cluster that slows the ending down.',
      phonetic: '/sændz strɛtʃ/',
      practice: 'Take it slow. Say "sands" — hold the Z sound — then blast into "stretch." The effort required makes the line feel as long and heavy as the desert itself.'
    }
  ]
},

// ═══════════════════════ 15 ═══════════════════════
{
  id: 'invictus',
  title: 'Invictus',
  author: 'William Ernest Henley',
  year: 1888,
  level: 'Intermediate',
  context: 'A deeply stoic poem about retaining control over your own soul, even when suffering through severe physical and emotional pain. Written while the author was suffering from severe tuberculosis.',
  stanzas: [
    [
      [{ t: 'Out of the ' },{ t: 'night ', s:1 },{ t: 'that ' },{ t: 'covers ', s:1 },{ t: 'me', s:1 },{ t: ',', p:1 }],
      [{ t: 'Black ', s:1 },{ t: 'as the ' },{ t: 'pit ', s:1 },{ t: 'from ' },{ t: 'pole ', s:1 },{ t: 'to ' },{ t: 'pole', s:1 },{ t: ',', p:1 }],
      [{ t: 'I ' },{ t: 'thank ', s:1 },{ t: 'what- ' },{ t: 'ever ', s:1 },{ t: 'gods ', s:1 },{ t: 'may ' },{ t: 'be', s:1 },{ p:1 }],
      [{ t: 'For my un- ' },{ t: 'conquerable ', s:1 },{ t: 'soul', s:1 },{ t: '.', p:1 }]
    ],
    [
      [{ t: 'In the fell ' },{ t: 'clutch ', s:1 },{ t: 'of ' },{ t: 'circumstance', s:1 },{ p:1 }],
      [{ t: 'I have not ' },{ t: 'winced ', s:1 },{ t: 'nor ' },{ t: 'cried ', s:1 },{ t: 'a- ' },{ t: 'loud', s:1 },{ t: '.', p:1 }],
      [{ t: 'Under the ' },{ t: 'bludgeonings ', s:1 },{ t: 'of ' },{ t: 'chance', s:1 },{ p:1 }],
      [{ t: 'My ' },{ t: 'head ', s:1 },{ t: 'is ' },{ t: 'bloody', s:1 },{ t: ', but un- ' },{ t: 'bowed', s:1 },{ t: '.', p:1 }]
    ],
    [
      [{ t: 'It ' },{ t: 'matters ', s:1 },{ t: 'not ', s:1 },{ t: 'how ' },{ t: 'strait ', s:1 },{ t: 'the ' },{ t: 'gate', s:1 },{ t: ',', p:1 }],
      [{ t: 'How ' },{ t: 'charged ', s:1 },{ t: 'with ' },{ t: 'punishments ', s:1 },{ t: 'the ' },{ t: 'scroll', s:1 },{ t: ',', p:1 }],
      [{ t: 'I ', s:1 },{ t: 'am the ' },{ t: 'master ', s:1 },{ t: 'of my ' },{ t: 'fate', s:1 },{ t: ',', p:1 }],
      [{ t: 'I ', s:1 },{ t: 'am the ' },{ t: 'captain ', s:1 },{ t: 'of my ' },{ t: 'soul', s:1 },{ t: '.', p:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Out of the night that covers me,", "Black as the pit from pole to pole,", "I thank whatever gods may be", "For my unconquerable soul."],
      explanation: "Surrounded by a darkness (suffering/pain) that feels absolute and worldwide, the speaker is grateful for having a spirit that refuses to be defeated."
    },
    {
      lines: ["In the fell clutch of circumstance", "I have not winced nor cried aloud.", "Under the bludgeonings of chance", "My head is bloody, but unbowed."],
      explanation: "Despite being beaten down randomly by fate ('circumstance' and 'chance'), the speaker takes the punishment without crying out or surrendering."
    },
    {
      lines: ["It matters not how strait the gate,", "How charged with punishments the scroll,", "I am the master of my fate,", "I am the captain of my soul."],
      explanation: "No matter how many difficulties or 'punishments' lie in the future, the speaker claims ultimate inner freedom. They alone control their destiny and their inner self."
    }
  ],
  deepDive: [
    {
      phrase: '"unconquerable"',
      tag: 'Polysyllabic Stress',
      what: 'This is a long word with the stress falling clearly on the SECOND syllable: un-CON-ker-a-ble. The surrounding unstressed syllables flow quickly around it.',
      phonetic: '/ʌnˈkɑŋkərəbəl/',
      practice: 'Do not stress the "un-". Say it fast: un-CON-ker-uh-bul. Making it rapid emphasizes how solid the core "CON" syllable is, just like the meaning of the word.'
    }
  ]
},

// ═══════════════════════ 16 ═══════════════════════
{
  id: 'sonnet-18',
  title: 'Sonnet 18: Shall I compare thee...',
  author: 'William Shakespeare',
  year: 1609,
  level: 'Advanced',
  context: 'The most famous sonnet in English literature. The speaker considers comparing their loved one to a summer day, but realizes the loved one is far more perfect, and will be made immortal through the poem itself.',
  stanzas: [
    [
      [{ t: 'Shall I com- ' },{ t: 'pare ', s:1 },{ t: 'thee ', s:1 },{ t: 'to a ' },{ t: 'summer\'s ', s:1 },{ t: 'day?', s:1 },{ p:1 }],
      [{ t: 'Thou ', s:1 },{ t: 'art more ' },{ t: 'lovely ', s:1 },{ t: 'and more ' },{ t: 'temperate', s:1 },{ t: ':', p:1 }],
      [{ t: 'Rough ', s:1 },{ t: 'winds ', s:1 },{ t: 'do ' },{ t: 'shake ', s:1 },{ t: 'the ' },{ t: 'darling ', s:1 },{ t: 'buds ', s:1 },{ t: 'of ' },{ t: 'May', s:1 },{ t: ',', p:1 }],
      [{ t: 'And ' },{ t: 'summer\'s ', s:1 },{ t: 'lease ', s:1 },{ t: 'hath ' },{ t: 'all too ' },{ t: 'short ', s:1 },{ t: 'a ' },{ t: 'date', s:1 },{ t: ';', p:1 }]
    ],
    [
      [{ t: 'Sometime ', s:1 },{ t: 'too ' },{ t: 'hot ', s:1 },{ t: 'the ' },{ t: 'eye ', s:1 },{ t: 'of ' },{ t: 'heaven ', s:1 },{ t: 'shines', s:1 },{ t: ',', p:1 }],
      [{ t: 'And ' },{ t: 'often ', s:1 },{ t: 'is his ' },{ t: 'gold ', s:1 },{ t: 'com- ' },{ t: 'plexion ', s:1 },{ t: 'dimmed', s:1 },{ t: ';', p:1 }],
      [{ t: 'And ' },{ t: 'every ', s:1 },{ t: 'fair ', s:1 },{ t: 'from ' },{ t: 'fair ', s:1 },{ t: 'sometime ', s:1 },{ t: 'de- ' },{ t: 'clines', s:1 },{ t: ',', p:1 }],
      [{ t: 'By ' },{ t: 'chance ', s:1 },{ t: 'or ' },{ t: 'nature\'s ', s:1 },{ t: 'changing ', s:1 },{ t: 'course ', s:1 },{ t: 'un- ' },{ t: 'trimmed', s:1 },{ t: ';', p:1 }]
    ],
    [
      [{ t: 'But ' },{ t: 'thy ', s:1 },{ t: 'e- ' },{ t: 'ternal ', s:1 },{ t: 'summer ', s:1 },{ t: 'shall not ' },{ t: 'fade', s:1 },{ t: ',', p:1 }],
      [{ t: 'Nor ' },{ t: 'lose ', s:1 },{ t: 'pos- ' },{ t: 'session ', s:1 },{ t: 'of that ' },{ t: 'fair ', s:1 },{ t: 'thou ' },{ t: 'ow\'st', s:1 },{ t: ';', p:1 }],
      [{ t: 'Nor shall ' },{ t: 'Death ', s:1 },{ t: 'brag ', s:1 },{ t: 'thou ' },{ t: 'wander\'st ', s:1 },{ t: 'in his ' },{ t: 'shade', s:1 },{ t: ',', p:1 }],
      [{ t: 'When in e- ' },{ t: 'ternal ', s:1 },{ t: 'lines ', s:1 },{ t: 'to ' },{ t: 'time ', s:1 },{ t: 'thou ' },{ t: 'grow\'st', s:1 },{ t: ':', p:1 }]
    ],
    [
      [{ t: 'So ' },{ t: 'long ', s:1 },{ t: 'as ' },{ t: 'men ', s:1 },{ t: 'can ' },{ t: 'breathe ', s:1 },{ t: 'or ' },{ t: 'eyes ', s:1 },{ t: 'can ' },{ t: 'see', s:1 },{ t: ',', p:1 }],
      [{ t: 'So ' },{ t: 'long ', s:1 },{ t: 'lives ' },{ t: 'this', s:1 },{ t: ', and ' },{ t: 'this ', s:1 },{ t: 'gives ' },{ t: 'life ', s:1 },{ t: 'to ' },{ t: 'thee', s:1 },{ t: '.', p:1 }]
    ]
  ],
  meaning: [
    {
      lines: ["Shall I compare thee to a summer's day?", "Thou art more lovely and more temperate:"],
      explanation: "The speaker debates comparing their love to a summer day, but decides against it because summer is flawed, whereas the beloved is mild, even-tempered, and more beautiful."
    },
    {
      lines: ["Rough winds do shake the darling buds of May,", "And summer's lease hath all too short a date;"],
      explanation: "Summer is often too rough (winds destroying spring buds) and it never lasts long enough ('short a date')."
    },
    {
      lines: ["Sometime too hot the eye of heaven shines,", "And often is his gold complexion dimmed;", "And every fair from fair sometime declines,"],
      explanation: "The sun ('eye of heaven') is sometimes too hot, or covered by clouds. All beautiful things in nature eventually lose their beauty as time passes."
    },
    {
      lines: ["But thy eternal summer shall not fade,", "Nor lose possession of that fair thou ow'st;", "Nor shall Death brag thou wander'st in his shade,"],
      explanation: "However, the beloved's beauty and youth will essentially be eternal. Even Death won't be able to claim them.",
      vocab: ["ow'st: ownest or possest (you own that beauty)"]
    },
    {
      lines: ["So long as men can breathe or eyes can see,", "So long lives this, and this gives life to thee."],
      explanation: "The beloved becomes immortal because they are written about in this poem. As long as humans exist to read the poem ('this'), the beloved will also continue to 'live'."
    }
  ],
  deepDive: [
    {
      phrase: '"complexion dimmed / course untrimmed"',
      tag: 'Poetic Metrics & Dropped Vowels',
      what: 'The "-ed" at the end of many words in Shakespearean English is only pronounced as a separate syllable if absolutely necessary for the beat. "Dimmed" and "untrimmed" are single syllables: /dɪmd/ and /ʌnˈtrɪmd/.',
      phonetic: '/kəmˈplɛkʃən dɪmd/',
      practice: 'Don\'t say "dim-med". Treat these exactly like modern English past tense words. The metric beat requires it to flow smoothly.'
    }
  ]
}

];
