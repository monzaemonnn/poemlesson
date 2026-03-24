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
}

];
