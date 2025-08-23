(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [451],
  {
    5058: (e, r, o) => {
      Promise.resolve().then(o.bind(o, 6414));
    },
    6414: (e, r, o) => {
      'use strict';
      o.d(r, { default: () => f });
      var t = o(7993),
        d = o(8333),
        s = o(9776);
      let a = (e) => {
          let { isOpen: r, onClose: o, children: d } = e;
          return r
            ? (0, s.createPortal)(
                (0, t.jsx)('div', {
                  className:
                    'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60',
                  children: (0, t.jsxs)('div', {
                    className:
                      'bg-white rounded-md shadow-xl max-w-2xl w-[90%] md:w-auto p-4 relative',
                    children: [
                      (0, t.jsx)('button', {
                        onClick: o,
                        className:
                          'absolute top-2 right-2 text-black text-lg font-bold hover:text-red-500',
                        children: '\xd7',
                      }),
                      d,
                    ],
                  }),
                }),
                document.body,
              )
            : null;
        },
        n = [
          {
            border: 'shadowBorder.png',
            text: 'Light',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            type: 'img',
            path: 'Intro.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            type: 'img',
            path: 'Intro2.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: " it was not a song, it was someone's laugh",
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'someone who illuminated everything with her bright smile, so bright it could outshine our sun. Legend has it that it was her presence that brightens the ilo',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: ' Ilo, A planet , more like a STAR but habitable, couldnt express its beauty in words ,cant even draw',
          },
          {
            border: 'shadowBorder.png',
            component: (0, t.jsx)(() => {
              let [e, r] = (0, d.useState)(!1);
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)('button', {
                    onClick: () => r(!0),
                    className:
                      'mx-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-semibold shadow-lg hover:shadow-pink-500/50  transform hover:-translate-y-0.5 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-pink-300 mb-2',
                    children: 'Open Ilo Preview',
                  }),
                  (0, t.jsx)(a, {
                    isOpen: e,
                    onClose: () => r(!1),
                    children: (0, t.jsx)('div', {
                      className: 'space-y-6',
                      children: [
                        {
                          title: 'Ilo in Fall (Day Time in Ilo)',
                          img: '/images/ilo_day.png',
                          desc: "Fall on Ilo is like Earth's day but far more mesmerizing. Everywhere you look, trees, flowers, and vibrant birds fill the landscape. In the dense forests, extraordinary creatures thrive. Picture a countryside brimming with farms, gardens, and forests under bright, warm weather, balanced perfectly by a cool, refreshing breeze. It's a harmonious, natural paradise.",
                        },
                        {
                          title: 'Ilo in Risen (Night Time in Ilo)',
                          img: '/images/ilo_night.png',
                          desc: 'During Risen—the equivalent of night—the planet does not just grow dark. It glows with vibrant, aurora-like radiation. Every living being enlarges, except the Iloians (similar to humans on Earth). The wind smells like strawberry ice cream, and you can even see it with the naked eye. Imagine massive trees with colorful, glowing leaves, winds humming like melodies, and butterflies the size of humans.',
                        },
                      ].map((e, r) =>
                        (0, t.jsxs)(
                          'div',
                          {
                            children: [
                              (0, t.jsx)('h2', {
                                className: 'text-lg font-semibold mb-2',
                                children: e.title,
                              }),
                              (0, t.jsxs)('div', {
                                className:
                                  'relative overflow-hidden rounded-md cursor-pointer group',
                                children: [
                                  (0, t.jsx)('img', {
                                    src: e.img,
                                    alt: e.title,
                                    className:
                                      'w-full h-64 object-cover rounded-md',
                                  }),
                                  (0, t.jsx)('div', {
                                    className:
                                      'absolute bottom-0 left-0 w-full translate-y-full opacity-0 bg-black bg-opacity-60 text-white text-sm text-center p-4 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100',
                                    children: e.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  }),
                ],
              });
            }, {}),
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: ' Even this heavenly planet wouldnt be heavenly without this little girl, Cho',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: ' A beautiful black and blue butterfly sat on her head, gently moving its wings ,a glazier flame wings and adding to her joyful look.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: ' She was happily playing with her small sheep.',
          },
          { border: 'borderflowers.png', type: 'img', path: 'choIntro.png' },
          { border: 'borderflowers.png', text: 'Twenty feet behind her' },
          {
            border: 'borderflowers.png',
            text: ' a boy , about fifteen years old, stood in a meadow filled with flowers and butterflies. He watched his sister laugh and play while trying to cut the last log from a pile of fifty trees. Even though he was tired, he felt joy seeing her being happy. \n    But his smile slowly faded as he noticed other kids playing together far from there while his sister was alone.\n    ',
          },
          { border: 'borderflowers.png', type: 'img', path: 'TheBoy.png' },
          { border: 'borderflowers.png', text: ' THE  BOY' },
          {
            border: 'borderflowers.png',
            type: 'img',
            path: 'WholeMapOfCurrentScene.jpg',
          },
          { border: 'borderflowers.png', type: 'img', path: 'TheFarm.jpg' },
          { border: 'borderflowers.png', text: 'THE  FARM' },
          {
            border: 'borderflowers.png',
            type: 'img',
            path: 'currentLocationMap(TheFarm).jpg',
          },
          {
            border: 'borderflowers.png',
            text: 'CURRENT    LOCATION   TOP  VIEW',
          },
          {
            border: 'borderflowers.png',
            text: '**He knows that she wants to play with other kids so badly, but she won’t **',
          },
          {
            border: 'borderflowers.png',
            text: 'He felt really hurt as he is the reason for  those kids not playing with her',
          },
          {
            border: 'borderflowers.png',
            text: 'He thought for a second and then',
          },
          { border: 'borderflowers.png', text: '“Cho,” he called' },
          { border: 'borderflowers.png', text: '“Aahhnnn?” she asked' },
          { border: 'borderflowers.png', text: 'He pointed at those kids' },
          {
            border: 'borderflowers.png',
            text: '“why don’t you go there and play with them?”, he said',
          },
          {
            border: 'borderflowers.png',
            text: 'She looked at them playing cheerfully,\n   saddened ',
          },
          {
            border: 'borderflowers.png',
            text: 'Her face literally said  " i want to play with them"',
          },
          {
            border: 'borderflowers.png',
            text: 'But she suddenly changed her expression as she turned to answer her brother, like she was never saddened',
          },
          {
            border: 'borderflowers.png',
            text: '“No, I’m going to play with Kiki,” she replied cheerfully and proceeded to chase her little sheep',
          },
          {
            border: 'borderflowers.png',
            text: 'He knew she was faking, so he decided to do something stupid. he sensed something behind her, he smirked',
          },
          {
            border: 'borderflowers.png',
            text: 'He picked a palm-sized piece of wood and threw it in her direction',
          },
          {
            border: 'borderflowers.png',
            text: 'The palm-sized wood fell on the something',
          },
          { border: 'borderflowers.png', text: 'thudd!!!' },
          { border: 'borderflowers.png', text: '“BZZZZZZRRRAAAAHHHHH!”' },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, a bee,green coloured,having moustache and spike on his hair, flew up from where the wood had landed',
          },
          {
            border: 'borderflowers.png',
            text: '“Who the fuck decided to terminate me—aiizzzzz?”, the bee enraged',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho looked at the bee excitedly( she has never seen a bee speak)',
          },
          {
            border: 'borderflowers.png',
            text: '“Hey\uD83D\uDC7A… yo mean-looking monster, who sent you?” the bee demanded',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho still looked at him excitedly',
          },
          { border: 'borderflowers.png', type: 'img', path: 'TheBee.png' },
          {
            border: 'borderflowers.png',
            text: 'Meanwhile, Cho tried to capture the bee',
          },
          { border: 'borderflowers.png', text: 'The bee dodged her' },
          {
            border: 'borderflowers.png',
            text: '“Hey\uD83D\uDC7A… so you chose hands, Huh?.......“Alright-iieeezzz, bbzzzz you wish,”,the bee',
          },
          {
            border: 'borderflowers.png',
            text: 'The bee started preparing its hands, posing like it was going to knock Cho down with a single punch',
          },
          {
            border: 'borderflowers.png',
            text: '“Ah… wait… forgot my gloves,..you wait here” the bee said and flew away',
          },
          { border: 'borderflowers.png', text: '**Five minutes later.**' },
          {
            border: 'borderflowers.png',
            text: 'The bee returned, hurt, with patches on its body, boxing gloves on, and its sting covered with sharp thing',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho wasn’t there , bee got upset',
          },
          {
            border: 'borderflowers.png',
            text: '“Hey, mean-looking monkey, where did you go?” the bee asked',
          },
          {
            border: 'borderflowers.png',
            text: '“Scared, Huh?” the bee smirked',
          },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, a figure appeared behind the bee',
          },
          {
            border: 'borderflowers.png',
            text: 'The bee realized that something was standing behind it',
          },
          {
            border: 'borderflowers.png',
            text: '“Triggas strategy, Huh?” the bee smirked',
          },
          { border: 'borderflowers.png', text: '(Triggas- Tiger in ilo)' },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, a hand came to catch the bee',
          },
          {
            border: 'borderflowers.png',
            text: 'The bee dodged it and showed its sting like it was showing a middle finger',
          },
          { border: 'borderflowers.png', text: '“Hm… noob,” the bee trolled' },
          {
            border: 'borderflowers.png',
            text: '“Now you’re gonna pay for this,” the bee said, pointing at its wounds while dodging her',
          },
          {
            border: 'borderflowers.png',
            text: '“You probably don’t know how my bee-ly looking face turned to shit,” the bee started blabbering',
          },
          {
            border: 'borderflowers.png',
            text: '“I’ll tell you,” the bee started ',
          },
          {
            border: 'borderflowers.png',
            text: '**FLASHBACK – Five minutes before.**',
          },
          { border: 'borderflowers.png', text: 'The bee reached its home' },
          {
            border: 'borderflowers.png',
            text: '“Honey, I’m home,” the bee said',
          },
          {
            border: 'borderflowers.png',
            text: '“Who let you in?” the bee’s wife asked',
          },
          {
            border: 'borderflowers.png',
            text: '“Uh…” the bee stood there, unable to utter a word',
          },
          {
            border: 'borderflowers.png',
            text: '“What’s the time now?” the bee’s wife asked, cooking utensils in her hands (as weapons)',
          },
          {
            border: 'borderflowers.png',
            text: '“I’m here to take equipment, honey. I’m not—” the bee started',
          },
          {
            border: 'borderflowers.png',
            text: '“I told you not to come home before sunset, didn’t I?” the bee’s wife yelled while hitting the shit out of the bee',
          },
          { border: 'borderflowers.png', text: '**PRESENT.**' },
          {
            border: 'borderflowers.png',
            text: '“You’re the reason I enraged my beloved honey,” the bee said',
          },
          {
            border: 'borderflowers.png',
            text: '“Mmmmmmmm… come here,” Cho said, trying hard to catch the bee',
          },
          {
            border: 'borderflowers.png',
            text: '“Now prepare yourself to get hit by my stingy ass!” the bee shouted',
          },
          { border: 'borderflowers.png', text: 'Cho tried to grab it' },
          { border: 'borderflowers.png', text: 'The bee dodged' },
          {
            border: 'borderflowers.png',
            text: 'The bee spun, did some unnecessary stunts, and "HEE-YAA" finally pinched her nose',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho’s nose swelled up like a tomato',
          },
          {
            border: 'borderflowers.png',
            text: 'she cried like a baby (she is a baby),she ran toward the boy, and the bee followed her',
          },
          { border: 'borderflowers.png', text: '“Hm… kids,” the bee mocked' },
          { border: 'borderflowers.png', text: '“Big broooooooo!” she cried' },
          {
            border: 'borderflowers.png',
            text: 'Meanwhile, the bee reached him before her , both bee and her brother were started talking like they know each other for years',
          },
          {
            border: 'borderflowers.png',
            text: '“Hi, brother, what’s up?” the boy asked',
          },
          { border: 'borderflowers.png', text: '“Fine, boy,” the bee replied' },
          {
            border: 'borderflowers.png',
            text: 'Cho got frustrated comically (not really angry)',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho jumped and kicked the bee and her brother at the same time',
          },
          { border: 'borderflowers.png', text: 'Both fell, knocked down' },
          {
            border: 'borderflowers.png',
            text: 'The angered bee got up and said, “Now you did it, you little monkey!” The bee started chasing her',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho started running toward those kids',
          },
          { border: 'borderflowers.png', text: '“Raaahhhh!”' },
          { border: 'borderflowers.png', text: '“Helpppppp!” Cho called' },
          {
            border: 'borderflowers.png',
            text: 'she fell right in front of the kids',
          },
          {
            border: 'borderflowers.png',
            text: '“Now, you’re done,” the bee said, smiling',
          },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, a bunch of bees rose from the ground',
          },
          { border: 'borderflowers.png', text: 'They all screamed' },
          {
            border: 'borderflowers.png',
            text: 'Even the green bee who was fighting cho got scared as he realized he was in the wrong territory',
          },
          {
            border: 'borderflowers.png',
            text: '“Catch that green-assed fly!” one of the wrong territory bee ordered',
          },
          {
            border: 'borderflowers.png',
            text: 'They all started running around',
          },
          {
            border: 'borderflowers.png',
            text: 'the boy watched them as they playing(not exactly)',
          },
          {
            border: 'borderflowers.png',
            text: 'Now he hears people talking Far away from him.',
          },
          {
            border: 'borderflowers.png',
            text: 'People worked on their farms,chatting.',
          },
          {
            border: 'borderflowers.png',
            text: "Suddenly a woman,who already looked like goddess ,with wearing that jerry colored saree ,damn... she is something that god cant even create,she looks like she is going to crush someone's heart,walked by them farm peoples",
          },
          {
            border: 'borderflowers.png',
            text: 'One of the farm women (P-1) called out:',
          },
          { border: 'borderflowers.png', text: 'They all know eachother' },
          {
            border: 'borderflowers.png',
            text: 'P-1: “Where did you buy this?”',
          },
          {
            border: 'borderflowers.png',
            text: 'other women were amazed by her beauty',
          },
          {
            border: 'borderflowers.png',
            text: 'The bywalker(goddess woman) paused, confused.\n    Bywalker: “What, sister?”\n    ',
          },
          { border: 'borderflowers.png', text: 'P-1: “Your saree.”' },
          {
            border: 'borderflowers.png',
            text: 'The bywalker smiled shyly.\n    Bywalker: “This? My husband bought it. Why, sister? Does it look good?”\n    ',
          },
          { border: 'borderflowers.png', text: 'P-1: “It looks gorgeous!”' },
          {
            border: 'borderflowers.png',
            text: 'The bywalker beamed.\n    Bywalker: “Really?”\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'Another woman (P-2) joined the conversation.',
          },
          {
            border: 'borderflowers.png',
            text: 'P-2: “Hey neela,Shall we go to the market later?”',
          },
          { border: 'borderflowers.png', text: 'Bywalker: “Why, sister?”' },
          {
            border: 'borderflowers.png',
            text: 'P-2: “I haven’t bought anything for the festival yet.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “Oh,.....I dont know. I’ll come if I’m free. ',
          },
          {
            border: 'borderflowers.png',
            text: 'Okay, sisters, my husband’s waiting. See you at the festival!”',
          },
          {
            border: 'borderflowers.png',
            text: 'With that, she ran off happily, flapping her hands, dancing, and smiling.',
          },
          {
            border: 'borderflowers.png',
            text: 'p-3(in jealousy tone): "why p-2 , dont we look like a ilo\'ian ? ',
          },
          { border: 'borderflowers.png', text: 'p-2: why?' },
          {
            border: 'borderflowers.png',
            text: 'p-3: nothing, just wondering,  we were working together for a being, but you didnt ask any of us for a shopping',
          },
          {
            border: 'borderflowers.png',
            text: 'p-2: whyyy?.. last time we went for a shopping. you chose a shit colored saree and said it\'ll  look good on me,.... now... whenever i wear it, my kids close their nose and say " eww..stinks ma "(mimicked)',
          },
          {
            border: 'borderflowers.png',
            text: 'p-3: oh thats why you didnt wear it for any functions,haa?.....i thought you were saving it for the big occasion',
          },
          { border: 'borderflowers.png', text: 'they all started laughing' },
          {
            border: 'borderflowers.png',
            text: 'p-2(snapped) : you little  ^$*^%**^** jfsgjsgjs',
          },
          {
            border: 'borderflowers.png',
            text: 'The two other women watched bywalker go, puzzled.\n    P-1: “Who does she call her husband? She is not married, is she?”\n    P-2: “Now that you mention it… I do not know.”\n    Both stared at her, confused, and said in unison:\n    Both: “Mental.”\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy had been watching the scene from that far. He put down his axe and rushed toward the saree woman.',
          },
          { border: 'borderflowers.png', text: 'Boy: “Hey… hey, red sister!”' },
          {
            border: 'borderflowers.png',
            text: 'She stopped and turned.\n    : “What is it, brown boy?”,\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'He caught his breath.\n    Boy: “Where did you buy this?” he asked, pointing to her saree.\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “My husband bought it from the city. Why?”',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy’s face fell.\n    Boy: “city? ”\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'He turned and started walking away.',
          },
          { border: 'borderflowers.png', text: 'Bywalker: “Wait.”' },
          {
            border: 'borderflowers.png',
            text: 'He stopped.\n    Bywalker: “For whom?”\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'Boy: “My sister”, he replied, looking down.',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “Do you have money?” she asked, smiling.',
          },
          {
            border: 'borderflowers.png',
            text: 'Boy: “Not enough to buy something like your dress,” he admitted.',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “I’ll help you get what you want,” she said.',
          },
          {
            border: 'borderflowers.png',
            text: 'His face illuminated.\n    Boy: “Really?”\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “Only if you do something for me,” she added with a playful smirk.',
          },
          {
            border: 'borderflowers.png',
            text: 'Boy: “What do you want me to do? I can cut, I can break, I can… I can do anything!” he said, eagerly.',
          },
          {
            border: 'borderflowers.png',
            text: 'Bywalker: “wait wait!...Tomorrow, by this time, wait here. I’ll tell you then.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Boy: “Yes!” he shouted, filled with joy.',
          },
          {
            border: 'borderflowers.png',
            text: 'He flew off like a happy mosquito (not literally flying).',
          },
          {
            border: 'borderflowers.png',
            text: 'Then He realized He didnt thank her',
          },
          {
            border: 'borderflowers.png',
            text: 'He stopped and called The Red Saree and said "Thank Red Saree sister"',
          },
          {
            border: 'borderflowers.png',
            text: '"No..No..No mention",she replied with a polite smile\uD83D\uDE05',
          },
          { border: 'borderflowers.png', text: 'Then He flew off' },
          {
            border: 'borderflowers.png',
            text: 'As he ran, a bywalker woman walked along the path. Nearby, three women stood watching the bywalker woman talking to a boy.',
          },
          {
            border: 'borderflowers.png',
            text: '“Why did you talk to him?” one of the women asked.',
          },
          {
            border: 'borderflowers.png',
            text: "“Why? Shouldn't I talk to him?” the bywalker woman replied.",
          },
          {
            border: 'borderflowers.png',
            text: '“He’s that devil’s kid,” another woman said.',
          },
          {
            border: 'borderflowers.png',
            text: '“He?…” The bywalker woman glanced at the boy, who was running happily. “Doesn’t look like it to me,”\n  she replied.',
          },
          { border: 'borderflowers.png', text: 'He was happily running' },
          { border: 'borderflowers.png', text: '........' },
          {
            border: 'borderflowers.png',
            text: '......As we look further into the other side of the farm...exist another forest....',
          },
          {
            border: 'borderflowers.png',
            text: 'At the center of the warm, filled forest, a convoy of vehicles comes like a snake that swims in sewage. They are riding to the Village through The Farm',
          },
          {
            border: 'borderflowers.png',
            text: '"Boss, you heard about that asteroid that fell a few days ago?" one of the people seated in\nthe back of a car asked.',
          },
          {
            border: 'borderflowers.png',
            text: ' A man with a styled mustache, around 45, wearing sunglasses and a white shirt with dhotis,scrolling his phone, sitting in the front seat.',
          },
          { border: 'borderflowers.png', text: 'They call him "Boss."' },
          {
            border: 'borderflowers.png',
            text: "The Boss  seated in the front, scrolling his mobile, did not notice the back-seater's words.",
          },
          { border: 'borderflowers.png', text: '"Boss"' },
          { border: 'borderflowers.png', text: '"Bosssssss," he repeated.' },
          {
            border: 'borderflowers.png',
            text: '"What the fuck do you want?" the Boss snapped.',
          },
          {
            border: 'borderflowers.png',
            text: '"Nothing, Boss," the back-seater backed off.',
          },
          {
            border: 'borderflowers.png',
            text: '"Looks like Boss is busy doing something important," the back-seater whispered to another back-seater.',
          },
          { border: 'borderflowers.png', text: 'The Boss noticed.' },
          {
            border: 'borderflowers.png',
            text: '"What the fuck are you looking at?" the Boss yelled, trying to slap him, but the driver dodged.',
          },
          {
            border: 'borderflowers.png',
            text: '"Am I flashing my pee pee?" the Boss snapped. \uD83D\uDC7A',
          },
          {
            border: 'borderflowers.png',
            text: '"Hehe, sorry, Boss," the driver stammered. ',
          },
          {
            border: 'borderflowers.png',
            text: "As we look closer at the Boss's mobile, the Boss is watching some naked dance shit, drooling.",
          },
          { border: 'borderflowers.png', text: '… … . … … ..' },
          {
            border: 'borderflowers.png',
            text: 'Meanwhile the boy approached a pile of trees, he notices light glinted off a car emerging from the forest, followed by a convoy of vehicles\n    His face changed as he senses like something bad about to happen, \n    ',
          },
          {
            border: 'borderflowers.png',
            text: '"Cho, come on, it’s time to go. We can come back tomorrow," he called out.',
          },
          {
            border: 'borderflowers.png',
            text: '"Nooo," she protested, looking at him sweetly anger.',
          },
          {
            border: 'borderflowers.png',
            text: '"Okay,im going ... they say  wolves love boiling kids in a hot soup and drin..." he joked, trying to scare her.',
          },
          {
            border: 'borderflowers.png',
            text: 'Before he could finish, she ran towards him.',
          },
          {
            border: 'borderflowers.png',
            text: '"Haha, scaredy cat," he laughed.',
          },
          {
            border: 'borderflowers.png',
            text: 'Meanwhile the Boss watching them from the car',
          },
          {
            border: 'borderflowers.png',
            text: '"Who is that brat?" the Boss asked his driver.',
          },
          {
            border: 'borderflowers.png',
            text: '“Who, boss?” the driver replied.',
          },
          {
            border: 'borderflowers.png',
            text: '“That brat!, you ^(^(^*#$#”, the Boss snapped.',
          },
          {
            border: 'borderflowers.png',
            text: '"Him? You do not know him, boss?", the driver said with a hint of sarcasm',
          },
          {
            border: 'borderflowers.png',
            text: '"Is he a fucking god ?" the Boss asked, annoyed as he took off his sunglasses and raises his leg.',
          },
          {
            border: 'borderflowers.png',
            text: '"No, no, boss, I didn’t mean—" the driver stuttered.',
          },
          {
            border: 'borderflowers.png',
            text: 'the Boss kicked the driver out of the car.',
          },
          {
            border: 'borderflowers.png',
            text: '"Go ask that brat what he’s doing on my fucking land," he ordered coldly.',
          },
          {
            border: 'borderflowers.png',
            text: 'The driver stood up, dusting off his shirt, glaring at the boy as if he were to blame. The driver’s eyes were filled with anger as he marched towards the boy. eventhough he looked anger, his body language says otherwise, he is afraid of that boy but he forced himself  not to show it',
          },
          {
            border: 'borderflowers.png',
            text: '"What are you doing here?" the driver shouted.',
          },
          {
            border: 'borderflowers.png',
            text: '"Just collecting wood," the boy answered calmly,looking down.',
          },
          {
            border: 'borderflowers.png',
            text: '"who let you here ..Do you know who owns this land?" the driver asked sharply.',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy looked innocently confused.',
          },
          {
            border: 'borderflowers.png',
            text: '"Where are you taking this?" the driver,pointing those woods.',
          },
          {
            border: 'borderflowers.png',
            text: '"To Jehan boss," the boy replied.',
          },
          {
            border: 'borderflowers.png',
            text: '(Jehan is the rival of THE BOSS) ',
          },
          {
            border: 'borderflowers.png',
            text: '"What? Speak up, I didn’t hear you," the driver growled.',
          },
          {
            border: 'borderflowers.png',
            text: '"To Jehan boss," the boy repeated, still looking down.',
          },
          {
            border: 'borderflowers.png',
            text: 'Anger flared in the driver’s eyes. “Bosss?!" he shouted, and then he hit the boy.',
          },
          { border: 'borderflowers.png', text: 'The boy fell to the ground.' },
          {
            border: 'borderflowers.png',
            text: '“Boss? That jerk?!" the driver yelled',
          },
          {
            border: 'borderflowers.png',
            text: 'Then the driver pointing his finger at the Boss in the car and started ,"Look at him" ,"The Boss in the car gave a cold look that said, I’m the one ."..  "He is the only bo—", but was cut off.',
          },
          {
            border: 'borderflowers.png',
            text: ' a sharp sound interrupted  him, he  started  yelping in pain and began to stagger around. He saw the cause of his pain: the little girl holding a stick, fury in her eyes.',
          },
          { border: 'borderflowers.png', text: 'He got hit by cho' },
          {
            border: 'borderflowers.png',
            text: '"Don’t hurt my brother," she said firmly.',
          },
          {
            border: 'borderflowers.png',
            text: '"you little brat,.." the driver growled.',
          },
          {
            border: 'borderflowers.png',
            text: 'She stared back at him with a fierce look.',
          },
          {
            border: 'borderflowers.png',
            text: '“Who the hell are you? “, the driver growled. ',
          },
          {
            border: 'borderflowers.png',
            text: '\n    As the driver moved toward her, the boy quickly stepped in. "Please, do not hurt my sister!" he pleaded. "You can hit me instead, but do not hurt her!" He held out the stick to the driver, his voice desperate.\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'The driver surprised, hesitated, looking at the stick, and slowly reached out to take it.',
          },
          {
            border: 'borderflowers.png',
            text: 'But just as he was about to grab it, a sudden loud sound scared him. He thought it was some kind of animal like a boar.',
          },
          {
            border: 'borderflowers.png',
            text: 'It was not. It was the Boss—standing half inside, half outside the car—laughing at them arrogantly, as if he owned the world.',
          },
          {
            border: 'borderflowers.png',
            text: '"Come on, we need to meet “that boss”,’" the Boss said sarcastically, mocking the title.',
          },
          {
            border: 'borderflowers.png',
            text: '"Yes, boss," the driver replied, flustered.',
          },
          {
            border: 'borderflowers.png',
            text: 'who are you calling "Boss",the Boss asked',
          },
          {
            border: 'borderflowers.png',
            text: '"who else boss, its you only",the driver replied as scartching the place where cho hit',
          },
          { border: 'borderflowers.png', text: '"GOOD",the Boss smiled ' },
          {
            border: 'borderflowers.png',
            text: '"If I see you here again, I do not know what I’ll do," the driver threatened, trying to scare the boy before going back into the car.',
          },
          {
            border: 'borderflowers.png',
            text: '"If anyone sees them on my land again, cut them both up and feed them to Reema," the Boss ordered coldly.',
          },
          {
            border: 'borderflowers.png',
            text: '"Yes, boss!" his men shouted together.',
          },
          {
            border: 'borderflowers.png',
            text: '"Start the car, we’ve got work to do," the Boss commanded.',
          },
          {
            border: 'borderflowers.png',
            text: "The boy’s eyes widened in fear, his heart racing. The anger in the little girl began to fade as her brother's tears softened her rage. She dropped the stick and hugged her brother's leg tightly.",
          },
          {
            border: 'borderflowers.png',
            text: 'The cars sped away, their engines roaring, and among them was a truck that stood out. As it moved, the truck trembled ominously, as though some kind of BEAST was caged within. soon the sound of the engines faded into the distance',
          },
          { border: 'borderflowers.png', text: 'The boy looked at cho ' },
          {
            border: 'borderflowers.png',
            text: '"sorry, big bro",looking down,cho cried',
          },
          {
            border: 'borderflowers.png',
            text: 'His sad face brightened as if nothing had happened.(he is trying to cheer her up)',
          },
          {
            border: 'borderflowers.png',
            text: 'See, Cho? They ran… cowards.Who are they messing with?" he joked, flexing his arms comically.',
          },
          {
            border: 'borderflowers.png',
            text: 'Cho looked at him surprisingly',
          },
          {
            border: 'borderflowers.png',
            text: '"what?....i was acting...",the boy\uD83D\uDE06',
          },
          {
            border: 'borderflowers.png',
            text: '"You’re so cool, big bro!" she said, her eyes wide with admiration (not knowing he is pretending).',
          },
          {
            border: 'borderflowers.png',
            text: "“Well, let's go, before those cowards return,” he said.",
          },
          { border: 'borderflowers.png', text: '“Mmm, big bro,” she replied.' },
          {
            border: 'borderflowers.png',
            text: 'With nearly 50kg of wood logs balanced on his head, he began to move.',
          },
          {
            border: 'borderflowers.png',
            text: '"they will scold you big bro if we take these wo--",cho stopped ',
          },
          {
            border: 'borderflowers.png',
            text: '"what cho",the boy asked with a smile on his face',
          },
          {
            border: 'borderflowers.png',
            text: '"Nothing Big Bro",cho replied happily',
          },
          { border: 'borderflowers.png', text: 'Both started walking Happily' },
          {
            border: 'borderflowers.png',
            text: 'The nearby children, once joyful, suddenly fell silent as the boy and his sister walked past. Cho waved at them cheerfully, smiling widely, but they looked scared, as if they had seen a ghost. Their eyes were fixed on the boy.',
          },
          { border: 'borderflowers.png', text: 'cho noticed that' },
          { border: 'borderflowers.png', text: 'MEANWHILE IN THE CAR' },
          {
            border: 'borderflowers.png',
            text: '“Well, who was that brat?” the Boss asked the driver while lighting up his cigar.',
          },
          {
            border: 'borderflowers.png',
            text: '“You…” the driver started again.',
          },
          {
            border: 'borderflowers.png',
            text: '“You son of a…” the Boss picked up his gun from his hip pocket and pointed it at the driver.',
          },
          {
            border: 'borderflowers.png',
            text: '“I’ll fucking gut you if you start with ‘You do not know, boss?’ again!” the driver snapped.',
          },
          {
            border: 'borderflowers.png',
            text: 'The driver side-eyed the gun, comically afraid.',
          },
          {
            border: 'borderflowers.png',
            text: '“No, no, boss, I didn’t mean… I meant to say he is that devil’s kid. Don’t shoot me, boss!” the driver rushed to say, still fearful (comically).',
          },
          { border: 'borderflowers.png', text: '“Oh,” the Boss said.' },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, both the Boss and the driver realized the driver had taken his hands off the wheel as he surrendered  in his panic.',
          },
          {
            border: 'borderflowers.png',
            text: 'Both looked at each other, shock written on their faces, and then screamed  "aaaaHHHHHHHHH".The car started to tremble, descending into a moment of chaos.',
          },
          { border: 'borderflowers.png', text: 'SUDDEN FLIP CUT' },
          {
            border: 'borderflowers.png',
            text: 'After a little car-shaking moment, the driver’s face, which had earlier been like a tomato floating in water, now looked like it had been smashed by a punch from pigs.',
          },
          {
            border: 'borderflowers.png',
            text: 'The Boss wiped the driver’s bloodstains off his gun using a cloth torn from the driver’s clothes while the driver tended to his wounds, still driving.',
          },
          {
            border: 'borderflowers.png',
            text: '“Mmm… what were you saying?” the Boss asked.',
          },
          {
            border: 'borderflowers.png',
            text: 'The driver looked at him but could not talk; his mouth was punctured.',
          },
          {
            border: 'borderflowers.png',
            text: '“You dare to refuse my question?” the Boss said, glancing at his gun.',
          },
          {
            border: 'borderflowers.png',
            text: '“Mmshdjsjd… Sjse,” the driver mumbled something unintelligible.',
          },
          { border: 'borderflowers.png', text: '“Huhhh?” the Boss replied.' },
          {
            border: 'borderflowers.png',
            text: 'The driver looked at him again.',
          },
          {
            border: 'borderflowers.png',
            text: 'The Boss burst out laughing, almost choking on his amusement.',
          },
          {
            border: 'borderflowers.png',
            text: '“Look at him, look at his stinky-ass nose!” the Boss exclaimed to the back seaters, still laughing.',
          },
          {
            border: 'borderflowers.png',
            text: '“Come here, come here!” the Boss called to them. ',
          },
          {
            border: 'borderflowers.png',
            text: '“See?” he pointed at the driver’s nose.',
          },
          {
            border: 'borderflowers.png',
            text: 'They all laughed at the driver.',
          },
          { border: 'borderflowers.png', text: 'CAR STOPS' },
          {
            border: 'borderflowers.png',
            text: '“What, you going to hit us”, the Boss joked. ',
          },
          {
            border: 'borderflowers.png',
            text: '“We’ve reached, boss,” the driver announced.',
          },
          { border: 'borderflowers.png', text: 'They all stopped laughing.' },
          { border: 'borderflowers.png', text: 'The Boss smirked.' },
          {
            border: 'borderflowers.png',
            text: 'He get out of his car, "aaahhhh... smells resources",he said',
          },
          {
            border: 'borderflowers.png',
            text: '“kK boys, get your ass up,...its been a long time” the Boss shouted.',
          },
          {
            border: 'borderflowers.png',
            text: '“It’s money-plucking time,” he murmured, scratching his butt.',
          },
          { border: 'borderflowers.png', text: 'TRUCK TREMBLES AGAIN' },
          {
            border: 'borderflowers.png',
            text: '“Feed that goddamn BEAST, you useless sons of sons!” the Boss raged.',
          },
          { border: 'borderflowers.png', text: '“Yes, boss,” they replied.' },
          { border: 'borderflowers.png', text: '"Boss!!"' },
          {
            border: 'borderflowers.png',
            text: 'The Boss thinking about something seriously',
          },
          {
            border: 'borderflowers.png',
            text: '**Could be That half naked shit**',
          },
          {
            border: 'borderflowers.png',
            text: '"Boss,what should we do about that brat?",the driver',
          },
          {
            border: 'borderflowers.png',
            text: '"Huh?",the Boss as he didnt hear a word from the driver,he is still busy thinking about something ',
          },
          { border: 'borderflowers.png', text: '"that brat, Boss"' },
          { border: 'borderflowers.png', text: '"what about him?"' },
          {
            border: 'borderflowers.png',
            text: '"what should we do about him",the driver',
          },
          {
            border: 'borderflowers.png',
            text: '"what should we do?",the Boss asked',
          },
          {
            border: 'borderflowers.png',
            text: '"They have no one… why don’t we just sell them in the city? No one will ever know, No one will ever care, and we might even profit a little," the driver suggested quietly.',
          },
          {
            border: 'borderflowers.png',
            text: '"what do you say boss? there is greater price for the younger souls,Huh",the driver',
          },
          {
            border: 'borderflowers.png',
            text: 'The boss was staring at the driver like "is he for real? ',
          },
          {
            border: 'borderflowers.png',
            text: 'The boss just smiled wierdly at him and nodded like "okay" ',
          },
          {
            border: 'borderflowers.png',
            text: '"understood boss",the driver said and left ',
          },
          {
            border: 'borderflowers.png',
            text: '“Mmmmm... devil’s son Huh,the one who cheated death, Huh,” the Boss smirked MENACINGLY, as if he was about to do what he had ordered his men to do in the farm(CUT THE BOY AND CHO).',
          },
          {
            border: 'borderflowers.png',
            text: '**The look on him was so powerful that it sent us back in time.**',
          },
          { border: 'borderflowers.png', text: 'YEARS AGO................' },
          { border: 'borderflowers.png', text: 'A palace' },
          {
            border: 'borderflowers.png',
            text: 'A Home like a palace,  with a fountain at its center. Birds roamed freely inside, and a single tree near the fountain teemed with chirping birds. ',
          },
          {
            border: 'borderflowers.png',
            text: 'It was filled with the soothing sounds of nature.',
          },
          {
            border: 'borderflowers.png',
            text: 'Inside that home, in a room on the first floor, a man, who appears to be a scientist, prayed hard while hearing the sound of his wife crying.',
          },
          { border: 'borderflowers.png', text: 'He couldnt hear her struggle' },
          {
            border: 'borderflowers.png',
            text: "The scientist was expecting his FIRST? baby (The Boy, Cho's brother)",
          },
          {
            border: 'borderflowers.png',
            text: '"Don\'t worry, sir, for your good heart, this baby will be....," said one of a palace maid ',
          },
          {
            border: 'borderflowers.png',
            text: '"please dont!! ..... go help them",he pleaded ',
          },
          {
            border: 'borderflowers.png',
            text: 'Meanwhile other Palace workers at the  down stairs chatted excitedly about the baby’s birth.',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 1: “Do you think this baby will live?”',
          },
          { border: 'borderflowers.png', text: 'Worker 2: “Who knows?”' },
          {
            border: 'borderflowers.png',
            text: 'Worker 3: “Even if it does not, they’re going to breed another one. Ha ha ha!” (cracked a joke).',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 4: “Shut up, idiot!” (bashed).',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 3: “What? Am I wrong?so far How many times? Five, right?”',
          },
          { border: 'borderflowers.png', text: 'Worker 4: “So?”' },
          {
            border: 'borderflowers.png',
            text: 'Worker 3: “Nothing, just saying.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 4: “Don’t make fun of something like this. You’re a woman; you should be the last person to laugh at something like this.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 2: “How can you make fun of their feelings? They fed you.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 1: “That too, you making fun of Mr.Rav’s family’s feelings.”',
          },
          {
            border: 'borderflowers.png',
            text: 'Worker 3: “wait ..wait... hold on a min----—”',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'A strong cry of a baby interrupted the talk.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Worker 1: “The baby is born!”, excited',
          },
          {
            border: 'shadowBorder.png',
            text: 'They ran up the stairs.',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'worker 3 who was cracking  jokes , froze there like she saw a demon',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: "Inside the room, the scientist comforted his wife. Her face was filled with joy as she leaned against his chest. He held the baby in his arms, both unable to contain their happiness as they have never even heard the sound of their baby,its their first time hearing their baby's cry. The room was filled with warmth and light and birds and flies.",
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'As the room glowed with happiness, the atmosphere outside changed abruptly. Darkness enveloped everything, and a heavy silence fell. Movements slowed, as if time had paused.',
          },
          {
            border: 'shadowBorder.png',
            text: 'BLANK… EVERYTHING BLACKED OUT.',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Suddenly, a hurricane came, not a normal one, a hurricane of dead souls swept through the house. These souls, with claws, reached out to grab everyone nearby. In the eye of the Hurricane, the baby floated.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Outside the palace, everything appeared normal as if The Hurricane Appeared out of nowhere inside the Home.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Moments later,The hurricane gone so does the Home, the inside of the palace was in ruins—blood splattered on the walls, claw marks everywhere, furniture destroyed, and birds broken and lifeless.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'The scientist and his wife, injured and devastated, searched desperately for the baby.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"Did you find my-",the wife asked as she struggling walking downstairs',
          },
          {
            border: 'shadowBorder.png',
            text: '"what are you doing here?", scientist',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"shut uppp.... i have to see my baby",the wife cried',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"ill find the baby, please dont come down . everything\'s ruined..you need rest", scientist',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"i dont need rest, i just need my baby",the wife ',
          },
          {
            border: 'shadowBorder.png',
            text: 'she fainted',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: '"sita", scientist yelled her name',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'scientist rushed towards her and caught before she fell and both seated',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"what\'s happening..where is my baby",she (in lower voice as she had no energy in her)',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"i dont know...i dont know....im  sorryy...i dont knowww",scientist cried',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'she wipes his tears with hands,he grabbed her tightly',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'He suddenly noticed baby like figure near the fountain',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"wait here", scientist excitedly rushed towards the fountain',
          },
          {
            border: 'shadowBorder.png',
            text: 'The baby is found',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'But excitement in his face started to fade as the baby doesnt have any movement',
          },
          {
            border: 'shadowBorder.png',
            text: 'He just froze there',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"what happened... did you find the baby",the wife',
          },
          {
            border: 'shadowBorder.png',
            text: 'Ravvv, she called',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'she got up and rushed towatds them,struggling',
          },
          {
            border: 'shadowBorder.png',
            text: '"what Rav",the wife',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: 'Then she finally  saw the baby',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: 'Dead.',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Both scientist and his wife broke into pieces.......',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'They both cried so loudly that the sound of their pain was unbearable ,even the ILO started  crying (ILO  have never had rain)',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Before the baby was born, ILO represented absolute peace, goodness, love, life, and every positive thing imaginable.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'Even words like "hate," "jealousy," and "greed",,,etc simply did not exist there.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: "Now, everything is about to change, just as the rain became a part of ILO's weather.",
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'This rain was painful even to ILO itself. In an attempt to extinguish the rain, which was a manifestation of pure pain, ILO emitted a powerful force.\nThe force was so immense that it sent us hurtling back to the present.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'What happened after that will be revealed later.',
          },
          { border: 'borderflowers.png', text: ' CUT  TO  PRESENT' },
          {
            border: 'borderflowers.png',
            text: 'PRESENT. \n    Time: around 7:30\n    ',
          },
          {
            border: 'borderflowers.png',
            text: 'A strong wind blew through the air. It didn’t smell like just any wind; it smelled sweet, like strawberry ice cream. The wind was so powerful it could lift an adult off the ground. The world around looked bright and colorful, like a beautiful light show.',
          },
          {
            border: 'borderflowers.png',
            text: 'The entire world transformed into a magnificent light show, like the auroras of the northern pole, but spanning the entire planet. Sweetness filled the air, and the warmth of light rising from the ground was so captivating that even the blind or those without a sense of smell would be entranced. Every bird, tree, and insect—except ILOians—grew into towering giants.',
          },
          {
            border: 'borderflowers.png',
            text: 'While the world around The boy became brighter and larger, the boy’s own world shrank and dimmed as he returned to his current home. There was nobody else. The house was not lively, but in the middle of a rundown, almost garbage-like house, he was cooking something delicious.',
          },
          {
            border: 'borderflowers.png',
            text: 'The battle between the scent of the food and the sweet fragrance of the world could shake the whole world.',
          },
          {
            border: 'borderflowers.png',
            text: 'He then brought food to his little sister, who was sad and petting their sheep. When she smelled the food, her sad face illuminated with joy, and her eyes sparkled with happy tears.',
          },
          { border: 'borderflowers.png', text: '"cho here\'s yo--"' },
          {
            border: 'borderflowers.png',
            text: 'she grabbed the food and started eating even before he finished the sentence',
          },
          {
            border: 'borderflowers.png',
            text: 'He was like "what happened just now"',
          },
          {
            border: 'borderflowers.png',
            text: 'Both were sitting on folding cot',
          },
          { border: 'borderflowers.png', text: '"How is it?",he asked' },
          {
            border: 'borderflowers.png',
            text: '“Areweryoue gmadsaat me, big brother?” she asked(blaffed), her mouth full of food and snorting a little.',
          },
          {
            border: 'borderflowers.png',
            text: '“Haaaaaaann?” he asked, confused but smiling.',
          },
          {
            border: 'borderflowers.png',
            text: '“Are you mad at me?” she asked again, still sniffling.',
          },
          {
            border: 'borderflowers.png',
            text: '“Eat slowly, Cho,” he said, tapping her head gently and giving her water.',
          },
          {
            border: 'borderflowers.png',
            text: 'While she drank, He gazed up at the sky, where the wind and asteroids drifted so beautifully, like a vast sea shimmering with colorful, glowing fish..',
          },
          {
            border: 'borderflowers.png',
            text: 'Suddenly, there was "BONKK", and he fell to the ground, dizzy and feeling like he had been knocked out.',
          },
          {
            border: 'borderflowers.png',
            text: "His sister stood over him, holding a broomstick and smiling evil'ly. “Are you mad at me, big bro?” she firmly asked.",
          },
          {
            border: 'borderflowers.png',
            text: '“Uhh…,” he mumbled, still dizzy from the bump.',
          },
          {
            border: 'borderflowers.png',
            text: '"huuuhhhhhh??????",she screamed',
          },
          { border: 'borderflowers.png', text: 'He came back to senses' },
          {
            border: 'borderflowers.png',
            text: 'Then he jumped up and said, “I heard there’s going to be a fireworks festival in the village” He started eating like nothing happened.',
          },
          { border: 'borderflowers.png', text: 'She Realized What he meant' },
          {
            border: 'borderflowers.png',
            text: 'Her face suddenly went from anger to happy like a kitten.',
          },
          { border: 'borderflowers.png', text: 'She started eating again' },
          {
            border: 'borderflowers.png',
            text: '"Food is so spicyy\uD83E\uDD24 ,big bro",she devoured',
          },
          {
            border: 'borderflowers.png',
            text: '"spice,aah??  , its sweet",he confused',
          },
          {
            border: 'borderflowers.png',
            text: '"ah,,,sorry\uD83D\uDE05",she ',
          },
          {
            border: 'borderflowers.png',
            text: "“Trrk trrk, here take this yian(boy's name)!” she called to her little sheep.",
          },
          {
            border: 'borderflowers.png',
            text: 'The boy looked surprised and shocked. “Really?..” ah look',
          },
          {
            border: 'borderflowers.png',
            text: '“What? I won’t give it to you! Bleh!” she teased.',
          },
          { border: 'borderflowers.png', text: '“Ohh..I see,” he said' },
          {
            border: 'borderflowers.png',
            text: "Now he started posing like he's going to  pull the sheep from the air magically.",
          },
          {
            border: 'borderflowers.png',
            text: 'He closed his eyes and—BOOM!—the sheep disappeared.',
          },
          {
            border: 'borderflowers.png',
            text: "She isn't surprised. she just opened her arms,closed her eyes waiting for the sheep to come back, bouncing around and excited.(she knows he will undo whatever he just did)",
          },
          {
            border: 'borderflowers.png',
            text: 'But  Nothing happened. She opened one eye and saw him eating calmly.',
          },
          {
            border: 'borderflowers.png',
            text: 'Suddenly He began to sweat, feeling hot even in the cold night.',
          },
          {
            border: 'borderflowers.png',
            text: '“Biggggg... Brother,” she said in a funny, scary voice.',
          },
          {
            border: 'borderflowers.png',
            text: 'He turned slowly, sensing trouble as she looked at him like a  little monster.',
          },
          {
            border: 'borderflowers.png',
            text: '“Okay,..okay...ill  bring  kiki back... calm down, Cho. Why so serious?” he said with a confusingly smily face.\uD83D\uDE05',
          },
          {
            border: 'borderflowers.png',
            text: '"Good", She turned back into her sweet self.',
          },
          {
            border: 'borderflowers.png',
            text: '“Okay..., here we go,” he said, striking a pose again.',
          },
          {
            border: 'borderflowers.png',
            text: 'BOOM! She opened her eyes and felt the sheep in her hands, but nothing was there—just the memory of it.',
          },
          {
            border: 'borderflowers.png',
            text: 'He Confused,  wondered what went wrong. ',
          },
          {
            border: 'borderflowers.png',
            text: 'She again tighten her fists to hit him.',
          },
          {
            border: 'borderflowers.png',
            text: '“Wait,..wait  Cho!” he laughed confusingly, trying to lighten the mood.',
          },
          {
            border: 'borderflowers.png',
            text: 'He tried another BOOM with his plate, making it disappear and reappear.',
          },
          {
            border: 'borderflowers.png',
            text: "“It came back! Then why doesn't Kiki?”, he wondered.",
          },
          {
            border: 'borderflowers.png',
            text: 'They stared at each other, like heroes and villains in a movie poster, both quiet for three seconds.',
          },
          {
            border: 'borderflowers.png',
            text: 'Then they noticed a strange white figure between them.',
          },
          {
            border: 'borderflowers.png',
            text: 'They turned to see what it is ',
          },
          {
            border: 'borderflowers.png',
            text: 'it was their sheep, looking sad at sky as if it had experienced world war and lost everything.',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy felt little confused like "when did it come" while his sister rushed to hug the sheep  "kiki..you here?". But as she did, the sheep jumped over her, and she fell on her face, with the sheep stepping lightly on her head.',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy laughed loudly....She got frustrated " what...", She tried to kick him,"laughing?....", but he stood up and walked away, not noticing her. She fell again, ',
          },
          { border: 'borderflowers.png', text: 'the sheep  laughed at her.' },
          {
            border: 'borderflowers.png',
            text: '“eat fast, cho, we gotta go before they start” he said loudly while he is walking towards the house. ',
          },
          {
            border: 'borderflowers.png',
            text: '“You pig!” she shouted at the sheep.',
          },
          {
            border: 'borderflowers.png',
            text: "The sheep stepped one foot on her head and said, 'Ask him, don't you want to know?' — like a threat.",
          },
          {
            border: 'borderflowers.png',
            text: "She was surprised like 'did kiki just talk?'",
          },
          {
            border: 'borderflowers.png',
            text: 'She tried to grab the sheep, it wasnt there, disappeared again',
          },
          { border: 'borderflowers.png', text: 'She is still in shock' },
          { border: 'borderflowers.png', text: 'SOME TIME PASSED' },
          {
            border: 'borderflowers.png',
            text: 'They walked along the edge of the forest,they are going to the village, both shouldering the bag, feeling the cold air. They could see their breath in the crisp, chilly weather.',
          },
          {
            border: 'borderflowers.png',
            text: 'Both cho and the little sheep were playing',
          },
          { border: 'borderflowers.png', text: '“Big bro”, she started.' },
          { border: 'borderflowers.png', text: ' “Mm”,He looked at her.' },
          {
            border: 'borderflowers.png',
            text: '“Why were those kids scared of you?”',
          },
          { border: 'borderflowers.png', text: 'Scared?, when' },
          {
            border: 'borderflowers.png',
            text: 'Today..when we were leaving the farm',
          },
          {
            border: 'borderflowers.png',
            text: '“thattt ....is Because I… am… a demon!” he said, pretending to be scary.',
          },
          {
            border: 'borderflowers.png',
            text: '“Stop joking, big bro. Tell me.”',
          },
          { border: 'borderflowers.png', text: "“I don't know.. " },
          {
            border: 'borderflowers.png',
            text: "Let's say What would you do if you see... Like.., an elephant with two legs and a creepy smile?” he asked.",
          },
          {
            border: 'borderflowers.png',
            text: "“I’d beat it with my heavenly gifted arms!” she said, flexing her tiny biceps, which is in the size of a sand from a null universe (obviously it doesn't exist) .",
          },
          {
            border: 'borderflowers.png',
            text: '“Ooo, I’m scared”, he said sarcastically.',
          },
          {
            border: 'borderflowers.png',
            text: '“Good,” she replied , not getting his sarcasm,started  walking proudly.',
          },
          {
            border: 'borderflowers.png',
            text: '"There will be more people today than any other day,..its going to be fun",the boy excited',
          },
          {
            border: 'borderflowers.png',
            text: '"yes,yes,fireworks,candies,toys..  cant wait big bro",she excitedly,her eyes filled with fireworks ,candies and toys, drooling',
          },
          {
            border: 'borderflowers.png',
            text: '"yeah yeah \uD83D\uDE05","she totally forget what she was asking",he thought, ',
          },
          {
            border: 'borderflowers.png',
            text: '"But",she said in a sad tone( she had a vision of him being hated by people of the village)',
          },
          { border: 'borderflowers.png', text: '"what cho",he ' },
          {
            border: 'borderflowers.png',
            text: '"i...i wanted to ask you something,big bro"',
          },
          { border: 'borderflowers.png', text: '"what is it cho"' },
          {
            border: 'borderflowers.png',
            text: '"aasskkk him" in husky voice,she heard',
          },
          {
            border: 'borderflowers.png',
            text: '"did you hear that?",she asked',
          },
          { border: 'borderflowers.png', text: '" hear what?",he asked' },
          { border: 'borderflowers.png', text: '"nothing"' },
          { border: 'borderflowers.png', text: 'started walking' },
          {
            border: 'borderflowers.png',
            text: '“They hate you, right, big bro? The  village people?”',
          },
          {
            border: 'borderflowers.png',
            text: '"HATE??", who taught you these words?..',
          },
          {
            border: 'borderflowers.png',
            text: '"i dont know,,... i think i heard someone talking...dont change the topic big bro...then ill forget again"',
          },
          { border: 'borderflowers.png', text: '"whom did you heard"' },
          {
            border: 'borderflowers.png',
            text: '"first  you answer me big bro....They hate you, right?",cho',
          },
          { border: 'borderflowers.png', text: '“aaaa...mmmm.”' },
          {
            border: 'borderflowers.png',
            text: '“then why do we go to the village every day?”',
          },
          {
            border: 'borderflowers.png',
            text: '"Tooo.... Entertain them",the boy ',
          },
          {
            border: 'borderflowers.png',
            text: '"i know that but why?,big brooo....i dont understand....they hate you...but you make them laugh...daily",she said,looked at his bag,there is a mask',
          },
          {
            border: 'borderflowers.png',
            text: '"thats ONE good question",the boy \uD83D\uDE05 but in his mind "why does she talk like grown person"',
          },
          { border: 'borderflowers.png', text: '"tell me .big bro"' },
          {
            border: 'borderflowers.png',
            text: "\"That….....Huhh…..Those people... /takes a breath/... they’re working hard,you know, having a tough day. Though they seem joyful, I can see that they feel empty ,maybe i can only see that. They want something to fill their emptiness  and....i think I am that something. I don't mind if they hate me or..or..anything—I just want them to have a really peaceful life, as long as I'm alive.”",
          },
          {
            border: 'borderflowers.png',
            text: 'even that person who hit you today?',
          },
          {
            border: 'borderflowers.png',
            text: 'even that person who hit me today',
          },
          {
            border: 'borderflowers.png',
            text: '"you dont want to hurt them",she asked',
          },
          { border: 'borderflowers.png', text: 'no' },
          {
            border: 'borderflowers.png',
            text: '"they hurt you, they hate you,but you dont want to hurt them, you  want  them  to be  happy.....you\'re soo cool, big bro",  she admired her big bro',
          },
          {
            border: 'borderflowers.png',
            text: '"not only me ,Cho,you should be like that too.....won\'t you?",the boy',
          },
          {
            border: 'borderflowers.png',
            text: 'she gave him a smile that said "I won\'t"',
          },
          { border: 'borderflowers.png', text: '"Chooo",the boy' },
          {
            border: 'borderflowers.png',
            text: '"Fine, fine, I\'ll try," Cho said.',
          },
          {
            border: 'borderflowers.png',
            text: '"Huh?...try?.......that aside ..why did you ask me that in the first place",the boy ',
          },
          {
            border: 'borderflowers.png',
            text: '"sometimes i feel like someone\'s talking to me big bro",she said ',
          },
          {
            border: 'borderflowers.png',
            text: '"BAMMM!" She crashed into him when he suddenly stopped walking',
          },
          {
            border: 'borderflowers.png',
            text: 'He stopped, looking at a burned-down PALACE(his home) far away, with a skeleton pinned on a post in front of it, he imagined as skeleton is smiling and waving at him.',
          },
          {
            border: 'borderflowers.png',
            text: '"its not safe here..dont you think?...she started hating people?...its not safe..hahahaha...",the skeleton',
          },
          { border: 'borderflowers.png', text: '"not safe?",the boy' },
          {
            border: 'borderflowers.png',
            text: '"who said not safe..its totally safe",eerie voice',
          },
          {
            border: 'borderflowers.png',
            text: '"no its not",another eerie voice',
          },
          {
            border: 'borderflowers.png',
            text: '"yes no,, yes its no, no, no its yes,,,,,,hahahaha run runnnn",multiple eerie voices',
          },
          {
            border: 'borderflowers.png',
            text: 'The boy started losing control like he is about to break, "stop..no..stop",he screaed in pain',
          },
          {
            border: 'borderflowers.png',
            text: '"big bro?...big bro?...",cho called casually',
          },
          {
            border: 'borderflowers.png',
            text: 'He heard just a fragment of her voice, which echoed in his mind.',
          },
          { border: 'borderflowers.png', text: 'He came back to senses' },
          { border: 'borderflowers.png', text: '"Thanks cho", he thanked' },
          {
            border: 'borderflowers.png',
            text: 'But he didnt get the response',
          },
          {
            border: 'borderflowers.png',
            text: 'He turned to see why she was quiet. She stood frozen,shaking in fear, staring at a scary figure, ',
          },
          {
            border: 'shadowBorder.png',
            type: 'img',
            path: 'creepyElephant.jpg',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'That figure stood behind him,it was right infront of him but he didnt see it, he didnt felt its presence and now only he felt it was close.he got ready to fight it. Suddenly, he turned around and was shocked to see it looked like the creature he had described—"an elephant with two legs and a creepy smile."',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: "He watched as it reached for him,he couldn't move as he is in fear,confused as he dont know what is happening. In its claws, it held a woman half of her body inside its mouth(not splitten) and asking for help.\n    ****that  woman was That Red Saree Woman.****",
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"brow.. boy",The Red Saree Woman struggled',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'the boy broke as he watched That Red Saree Woman Who Was nice to him getting eaten..... ,“Cho, run!” he yelled.',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'He was ready to attack, but before he could move, that figure jumped over him, showing its sharp claws and grinning as it flew toward cho.',
          },
          {
            border: 'shadowBorder.png',
            text: '“Chooooo!”',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: 'THE END',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: 'The driver was watching all this while hidden in the bushes from certain meters away,shaking in fear',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"whats with these THREE beasts",he feared',
          },
          {
            border: 'shadowBorder.png',
            text: 'POST  CREDITS:',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            text: 'FUTURE (AFTER FEW  YEARS) ',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: "The city was in ruins and crowded, filled with laughter that seemed crazy compared to the sad reality underneath. On stage, a teen boy(THE  BOY ,cho's brother) knelt with his wrists in chains. He was badly hurt and covered in blood.",
          },
          {
            border: 'shadowBorder.png',
            borderStyle: 'scale-y-[1.30] scale-x-[1.30]',
            text: '"I\'m going to kill you... all of you," he said angrily. "I will" while the crowd chanted excitedly “ Kill him.. Kill him.. “',
          },
        ];
      var h = o(1182),
        i = o.n(h),
        l = o(3621),
        b = o(830),
        g = o(7698);
      let w = (e) => {
          let { content: r } = e;
          return r
            ? (0, t.jsx)('div', {
                className:
                  'w-full font-serif text-base leading-relaxed text-gray-800',
                children: [r].map((e, r) => {
                  let o = /<\/?[a-z][\s\S]*>/i.test(e),
                    d = e.startsWith('#'),
                    s = d ? e.slice(1) : null;
                  return o
                    ? (0, g.Ay)(e)
                    : d && s
                      ? (0, t.jsx)(
                          'div',
                          {
                            className: 'w-full flex justify-center my-4',
                            children: (0, t.jsx)('img', {
                              src: '/images/'.concat(s),
                              alt: 'Dynamic',
                              className:
                                'max-w-full max-h-[400px] object-contain',
                            }),
                          },
                          r,
                        )
                      : (0, t.jsx)('p', { children: e }, r);
                }),
              })
            : null;
        },
        p = (e) => {
          let { texts: r, ChapterNo: o, NoFrameKeyword: s } = e,
            a = (0, d.useRef)(null),
            n = (0, d.useRef)([]),
            [h, g] = (0, d.useState)(''),
            [p, f] = (0, d.useState)('');
          return (
            (0, d.useEffect)(() => {
              let e = new IntersectionObserver(
                (e) => {
                  let o = e.find((e) => e.isIntersecting);
                  if (o) {
                    var t;
                    let e = r[Number(o.target.getAttribute('data-index'))];
                    null == e ||
                    !e.border ||
                    (null == e
                      ? void 0
                      : null === (t = e.text) || void 0 === t
                        ? void 0
                        : t.includes(s || ''))
                      ? g('')
                      : (g(e.border),
                        (null == e ? void 0 : e.borderStyle)
                          ? f(null == e ? void 0 : e.borderStyle)
                          : f(''));
                  }
                },
                { threshold: 0.6 },
              );
              return (
                n.current.forEach((r) => {
                  r && e.observe(r);
                }),
                () => {
                  e.disconnect();
                }
              );
            }, [r, s]),
            (0, t.jsxs)('div', {
              className: 'relative py-10 px-10',
              children: [
                (0, t.jsx)(l.N, {
                  mode: 'wait',
                  children:
                    h &&
                    (0, t.jsx)(
                      b.P.img,
                      {
                        className:
                          'fixed inset-0 w-full h-full pointer-events-none select-none z-50 scale-y-[1.25] scale-x-[1.20] '.concat(
                            p,
                          ),
                        src: '/images/'.concat(h),
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 1.2 },
                      },
                      h,
                    ),
                }),
                (0, t.jsxs)('div', {
                  ref: a,
                  className:
                    'jsx-434e0b340e449c49 relative z-10 w-full md:w-[70%] px-4 py-6 border border-[#8f8a8a] rounded-xl prose prose-lg prose-slate dark:prose-invert bg-[#f7edd2] font-serif text-[#a2680e] backdrop-blur-lg transition-all duration-500 h-screen overflow-y-auto ',
                  children: [
                    o &&
                      (0, t.jsxs)('h1', {
                        className:
                          'jsx-434e0b340e449c49 text-4xl font-bold mb-4 text-center font-serif text-[#9c597c]',
                        children: ['Chapter ', o],
                      }),
                    null == r
                      ? void 0
                      : r.map((e, r) =>
                          (0, t.jsx)(
                            d.Fragment,
                            {
                              children: (null == e ? void 0 : e.component)
                                ? e.component
                                : (null == e ? void 0 : e.type) === 'img'
                                  ? (0, t.jsx)('div', {
                                      ref: (e) => {
                                        n.current[r] = e;
                                      },
                                      'data-index': r,
                                      className:
                                        'jsx-434e0b340e449c49 w-full flex justify-center my-4',
                                      children: (0, t.jsx)('img', {
                                        src: '/images/'.concat(e.path),
                                        alt: 'img-'.concat(r),
                                        className:
                                          'jsx-434e0b340e449c49 max-w-full max-h-[400px] object-contain',
                                      }),
                                    })
                                  : (0, t.jsx)('div', {
                                      ref: (e) => {
                                        n.current[r] = e;
                                      },
                                      'data-index': r,
                                      className:
                                        'jsx-434e0b340e449c49 ' +
                                        'text-justify mb-4 text-lg leading-relaxed font-serif '.concat(
                                          0 === r
                                            ? 'first-paragraph'
                                            : 'indent-8',
                                        ),
                                      children: (0, t.jsx)(w, {
                                        content: e.text,
                                      }),
                                    }),
                            },
                            r,
                          ),
                        ),
                    (0, t.jsx)(i(), {
                      id: '434e0b340e449c49',
                      children:
                        '.first-paragraph.jsx-434e0b340e449c49::first-line{float:left;font-size:2rem;line-height:1;padding-right:.2em;font-weight:bold;font-family:Georgia,serif;color:#8b5e3c}',
                    }),
                  ],
                }),
              ],
            })
          );
        },
        f = () =>
          (0, t.jsx)(p, {
            texts: null != n ? n : [],
            NoFrameKeyword: 'no-frame',
            ChapterNo: 1,
          });
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [952, 70, 299, 358], () => r(5058)), (_N_E = e.O()));
  },
]);
