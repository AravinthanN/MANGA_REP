import IloDetailsComponent from './IloDetails';

const texts = [
  { border: 'shadowBorder.png', text: `Light` },
  { border: 'shadowBorder.png', type: 'img', path: `Intro.png` },
  { border: 'shadowBorder.png', type: 'img', path: `Intro2.png` },
  {
    border: 'shadowBorder.png',
    text: ` it was not a song, it was someone's laugh`,
  },
  {
    border: 'shadowBorder.png',
    text: ` someone who illuminated everything with her bright smile, so bright it could outshine our sun. Legend has it that it was her presence that brightens the ilo`,
  },
  {
    border: 'shadowBorder.png',
    text: ` Ilo, A planet , more like a STAR but habitable, couldnt express its beauty in words ,cant even draw`,
  },
  { border: 'shadowBorder.png', component: <IloDetailsComponent /> },
  // `shadowBorder.png#ilo_day.png`,
  // `shadowBorder.pngFall on Ilo is like Earth's day but far more mesmerizing. Everywhere you look, trees, flowers, and vibrant birds fill the landscape. In the dense forests, extraordinary creatures thrive. Picture a countryside brimming with farms, gardens, and forests under bright, warm weather, balanced perfectly by a cool, refreshing breeze. Its a harmonious, natural paradise.
  //   `,
  // `shadowBorder.pngIlo in Risen(Night Time in Ilo)`,
  // `shadowBorder.png#ilo_night.png`,
  // `shadowBorder.pngDuring Risen—the equivalent of night—the planet does not just grow dark. It glows with vibrant, aurora-like radiation. Every living being enlarges, except the Iloians (similar to humans on Earth). The wind smells like strawberry ice cream, and you can even see it with the naked eye. Imagine massive trees with colorful, glowing leaves, winds humming like melodies, and butterflies the size of humans. Its like a dreamlike paradise.`,
  // `shadowBorder.pngOne would say its a heaven`,
  {
    border: 'shadowBorder.png',
    text: ` Even this heavenly planet wouldnt be heavenly without this little girl, Cho`,
  },
  {
    border: 'shadowBorder.png',
    text: ` A beautiful black and blue butterfly sat on her head, gently moving its wings ,a glazier flame wings and adding to her joyful look.`,
  },
  {
    border: 'shadowBorder.png',
    text: ` She was happily playing with her small sheep.`,
  },
  { border: 'borderflowers.png', type: 'img', path: `choIntro.png` },

  // `shadowBorder.png She illuminated everything with her bright smile, so bright it could outshine the sun. A beautiful black and blue butterfly sat on her head, gently moving its wings ,a glazier flame wings and adding to her joyful look. She was happily playing with her small sheep.`,

  // `shadowBorder.pngWELCOME to Planet ILO - it is a unique STAR where life thrives. Unlike Earth's sunrise and nightfall, Ilo experiences Risen and Fall.
  //   During Risen—the equivalent of night—the planet does not just grow dark. It glows with vibrant, aurora-like radiation. Every living being enlarges, except the Iloians (similar to humans on Earth). The wind smells like strawberry ice cream, and you can even see it with the naked eye. Imagine massive trees with colorful, glowing leaves, winds humming like melodies, and butterflies the size of humans. Its like a dreamlike paradise.
  //   `,

  // `shadowBorder.pngFall on Ilo is like Earth's day but far more mesmerizing. Everywhere you look, trees, flowers, and vibrant birds fill the landscape. In the dense forests, extraordinary creatures thrive. Picture a countryside brimming with farms, gardens, and forests under bright, warm weather, balanced perfectly by a cool, refreshing breeze. Its a harmonious, natural paradise.
  //   `,

  // `**Glazier flame- like fire made of ice breeze**`,
  // `**The farm exist in between two forest**`,
  { border: 'borderFlowers.png', text: `Twenty feet behind her` },
  {
    border: 'shadowBorder.png',
    text: ` a boy , about fifteen years old, stood in a meadow filled with flowers and butterflies. He watched his sister laugh and play while trying to cut the last log from a pile of fifty trees. Even though he was tired, he felt joy seeing her being happy. 
    But his smile slowly faded as he noticed other kids playing together far from there while his sister was alone.
    `,
  },
  { border: 'shadowBorder.png', type: 'img', path: `TheBoy.png` },
  { border: 'shadowBorder.png', text: ` THE  BOY` },
  {
    border: 'borderFlowers.png',
    type: 'img',
    path: `WholeMapOfCurrentScene.jpg`,
  },
  { border: 'borderFlowers.png', type: 'img', path: `TheFarm.jpg` },
  { border: 'borderFlowers.png', text: `THE  FARM` },
  {
    border: 'borderFlowers.png',
    type: 'img',
    path: `currentLocationMap(TheFarm).jpg`,
  },
  { border: 'borderFlowers.png', text: `CURRENT    LOCATION   TOP  VIEW` },

  {
    border: 'borderFlowers.png',
    text: `**He knows that she wants to play with other kids so badly, but she won’t **`,
  },
  {
    border: 'borderFlowers.png',
    text: `He felt really hurt as he is the reason for  those kids not playing with her`,
  },
  { border: 'borderFlowers.png', text: `He thought for a second and then` },
  { border: 'borderFlowers.png', text: `“Cho,” he called` },
  { border: 'borderFlowers.png', text: `“Aahhnnn?” she asked` },
  { border: 'borderFlowers.png', text: `He pointed at those kids` },
  {
    border: 'borderFlowers.png',
    text: `“why don’t you go there and play with them?”, he said`,
  },
  {
    border: 'borderFlowers.png',
    text: `She looked at them playing cheerfully,
   saddened `,
  },
  {
    border: 'borderFlowers.png',
    text: `Her face literally said  " i want to play with them"`,
  },
  {
    border: 'borderFlowers.png',
    text: `But she suddenly changed her expression as she turned to answer her brother, like she was never saddened`,
  },
  {
    border: 'borderFlowers.png',
    text: `“No, I’m going to play with Kiki,” she replied cheerfully and proceeded to chase her little sheep`,
  },
  {
    border: 'borderFlowers.png',
    text: `He knew she was faking, so he decided to do something stupid. he sensed something behind her, he smirked`,
  },
  {
    border: 'borderFlowers.png',
    text: `He picked a palm-sized piece of wood and threw it in her direction`,
  },
  {
    border: 'borderFlowers.png',
    text: `The palm-sized wood fell on the something`,
  },
  { border: 'borderFlowers.png', text: `thudd!!!` },
  { border: 'borderFlowers.png', text: `“BZZZZZZRRRAAAAHHHHH!”` },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, a bee,green coloured,having moustache and spike on his hair, flew up from where the wood had landed`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Who the fuck decided to terminate me—aiizzzzz?”, the bee enraged`,
  },
  {
    border: 'borderFlowers.png',
    text: `Cho looked at the bee excitedly( she has never seen a bee speak)`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Hey👺… yo mean-looking monster, who sent you?” the bee demanded`,
  },
  { border: 'borderFlowers.png', text: `Cho still looked at him excitedly` },
  { border: 'borderFlowers.png', type: 'img', path: `TheBee.png` },
  {
    border: 'borderFlowers.png',
    text: `Meanwhile, Cho tried to capture the bee`,
  },
  { border: 'borderFlowers.png', text: `The bee dodged her` },
  {
    border: 'borderFlowers.png',
    text: `“Hey👺… so you chose hands, Huh?.......“Alright-iieeezzz, bbzzzz you wish,”,the bee`,
  },
  {
    border: 'borderFlowers.png',
    text: `The bee started preparing its hands, posing like it was going to knock Cho down with a single punch`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Ah… wait… forgot my gloves,..you wait here” the bee said and flew away`,
  },
  { border: 'borderFlowers.png', text: `**Five minutes later.**` },
  {
    border: 'borderFlowers.png',
    text: `The bee returned, hurt, with patches on its body, boxing gloves on, and its sting covered with sharp thing`,
  },
  { border: 'borderFlowers.png', text: `Cho wasn’t there , bee got upset` },
  {
    border: 'borderFlowers.png',
    text: `“Hey, mean-looking monkey, where did you go?” the bee asked`,
  },
  { border: 'borderFlowers.png', text: `“Scared, Huh?” the bee smirked` },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, a figure appeared behind the bee`,
  },
  {
    border: 'borderFlowers.png',
    text: `The bee realized that something was standing behind it`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Triggas strategy, Huh?” the bee smirked`,
  },
  { border: 'borderFlowers.png', text: `(Triggas- Tiger in ilo)` },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, a hand came to catch the bee`,
  },
  {
    border: 'borderFlowers.png',
    text: `The bee dodged it and showed its sting like it was showing a middle finger`,
  },
  { border: 'borderFlowers.png', text: `“Hm… noob,” the bee trolled` },
  {
    border: 'borderFlowers.png',
    text: `“Now you’re gonna pay for this,” the bee said, pointing at its wounds while dodging her`,
  },
  {
    border: 'borderFlowers.png',
    text: `“You probably don’t know how my bee-ly looking face turned to shit,” the bee started blabbering`,
  },
  { border: 'borderFlowers.png', text: `“I’ll tell you,” the bee started ` },
  { border: 'borderFlowers.png', text: `**FLASHBACK – Five minutes before.**` },
  { border: 'borderFlowers.png', text: `The bee reached its home` },
  { border: 'borderFlowers.png', text: `“Honey, I’m home,” the bee said` },
  {
    border: 'borderFlowers.png',
    text: `“Who let you in?” the bee’s wife asked`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Uh…” the bee stood there, unable to utter a word`,
  },
  {
    border: 'borderFlowers.png',
    text: `“What’s the time now?” the bee’s wife asked, cooking utensils in her hands (as weapons)`,
  },
  {
    border: 'borderFlowers.png',
    text: `“I’m here to take equipment, honey. I’m not—” the bee started`,
  },
  {
    border: 'borderFlowers.png',
    text: `“I told you not to come home before sunset, didn’t I?” the bee’s wife yelled while hitting the shit out of the bee`,
  },
  { border: 'borderFlowers.png', text: `**PRESENT.**` },
  {
    border: 'borderFlowers.png',
    text: `“You’re the reason I enraged my beloved honey,” the bee said`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Mmmmmmmm… come here,” Cho said, trying hard to catch the bee`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Now prepare yourself to get hit by my stingy ass!” the bee shouted`,
  },
  { border: 'borderFlowers.png', text: `Cho tried to grab it` },
  { border: 'borderFlowers.png', text: `The bee dodged` },
  {
    border: 'borderFlowers.png',
    text: `The bee spun, did some unnecessary stunts, and "HEE-YAA" finally pinched her nose`,
  },
  { border: 'borderFlowers.png', text: `Cho’s nose swelled up like a tomato` },
  {
    border: 'borderFlowers.png',
    text: `she cried like a baby (she is a baby),she ran toward the boy, and the bee followed her`,
  },
  { border: 'borderFlowers.png', text: `“Hm… kids,” the bee mocked` },
  { border: 'borderFlowers.png', text: `“Big broooooooo!” she cried` },
  {
    border: 'borderFlowers.png',
    text: `Meanwhile, the bee reached him before her , both bee and her brother were started talking like they know each other for years`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Hi, brother, what’s up?” the boy asked`,
  },
  { border: 'borderFlowers.png', text: `“Fine, boy,” the bee replied` },
  {
    border: 'borderFlowers.png',
    text: `Cho got frustrated comically (not really angry)`,
  },
  {
    border: 'borderFlowers.png',
    text: `Cho jumped and kicked the bee and her brother at the same time`,
  },
  { border: 'borderFlowers.png', text: `Both fell, knocked down` },
  {
    border: 'borderFlowers.png',
    text: `The angered bee got up and said, “Now you did it, you little monkey!” The bee started chasing her`,
  },
  {
    border: 'borderFlowers.png',
    text: `Cho started running toward those kids`,
  },
  { border: 'borderFlowers.png', text: `“Raaahhhh!”` },
  { border: 'borderFlowers.png', text: `“Helpppppp!” Cho called` },
  { border: 'borderFlowers.png', text: `she fell right in front of the kids` },
  {
    border: 'borderFlowers.png',
    text: `“Now, you’re done,” the bee said, smiling`,
  },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, a bunch of bees rose from the ground`,
  },
  { border: 'borderFlowers.png', text: `They all screamed` },
  {
    border: 'borderFlowers.png',
    text: `Even the green bee who was fighting cho got scared as he realized he was in the wrong territory`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Catch that green-assed fly!” one of the wrong territory bee ordered`,
  },
  { border: 'borderFlowers.png', text: `They all started running around` },
  {
    border: 'borderFlowers.png',
    text: `the boy watched them as they playing(not exactly)`,
  },
  {
    border: 'borderFlowers.png',
    text: `Now he hears people talking Far away from him.`,
  },
  {
    border: 'borderFlowers.png',
    text: `People worked on their farms,chatting.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Suddenly a woman,who already looked like goddess ,with wearing that jerry colored saree ,damn... she is something that god cant even create,she looks like she is going to crush someone's heart,walked by them farm peoples`,
  },
  // `“Must be that red-assed shithead” the bee muttered, looking down with its hand on its chin like its thinking`,
  {
    border: 'borderFlowers.png',
    text: `One of the farm women (P-1) called out:`,
  },
  { border: 'borderFlowers.png', text: `They all know eachother` },
  { border: 'borderFlowers.png', text: `P-1: “Where did you buy this?”` },
  {
    border: 'borderFlowers.png',
    text: `other women were amazed by her beauty`,
  },
  {
    border: 'borderFlowers.png',
    text: `The bywalker(goddess woman) paused, confused.
    Bywalker: “What, sister?”
    `,
  },
  { border: 'borderFlowers.png', text: `P-1: “Your saree.”` },
  {
    border: 'borderFlowers.png',
    text: `The bywalker smiled shyly.
    Bywalker: “This? My husband bought it. Why, sister? Does it look good?”
    `,
  },
  { border: 'borderFlowers.png', text: `P-1: “It looks gorgeous!”` },
  {
    border: 'borderFlowers.png',
    text: `The bywalker beamed.
    Bywalker: “Really?”
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `Another woman (P-2) joined the conversation.`,
  },
  {
    border: 'borderFlowers.png',
    text: `P-2: “Hey neela,Shall we go to the market later?”`,
  },
  { border: 'borderFlowers.png', text: `Bywalker: “Why, sister?”` },
  {
    border: 'borderFlowers.png',
    text: `P-2: “I haven’t bought anything for the festival yet.”`,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “Oh,.....I dont know. I’ll come if I’m free. `,
  },
  {
    border: 'borderFlowers.png',
    text: `Okay, sisters, my husband’s waiting. See you at the festival!”`,
  },
  {
    border: 'borderFlowers.png',
    text: `With that, she ran off happily, flapping her hands, dancing, and smiling.`,
  },
  {
    border: 'borderFlowers.png',
    text: `p-3(in jealousy tone): "why p-2 , dont we look like a ilo'ian ? `,
  },
  { border: 'borderFlowers.png', text: `p-2: why?` },
  {
    border: 'borderFlowers.png',
    text: `p-3: nothing, just wondering,  we were working together for a being, but you didnt ask any of us for a shopping`,
  },
  {
    border: 'borderFlowers.png',
    text: `p-2: whyyy?.. last time we went for a shopping. you chose a shit colored saree and said it'll  look good on me,.... now... whenever i wear it, my kids close their nose and say " eww..stinks ma "(mimicked)`,
  },
  {
    border: 'borderFlowers.png',
    text: `p-3: oh thats why you didnt wear it for any functions,haa?.....i thought you were saving it for the big occasion`,
  },
  { border: 'borderFlowers.png', text: `they all started laughing` },
  {
    border: 'borderFlowers.png',
    text: `p-2(snapped) : you little  ^$*^%**^** jfsgjsgjs`,
  },
  {
    border: 'borderFlowers.png',
    text: `The two other women watched bywalker go, puzzled.
    P-1: “Who does she call her husband? She is not married, is she?”
    P-2: “Now that you mention it… I do not know.”
    Both stared at her, confused, and said in unison:
    Both: “Mental.”
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy had been watching the scene from that far. He put down his axe and rushed toward the saree woman.`,
  },
  { border: 'borderFlowers.png', text: `Boy: “Hey… hey, red sister!”` },
  {
    border: 'borderFlowers.png',
    text: `She stopped and turned.
    : “What is it, brown boy?”,
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `He caught his breath.
    Boy: “Where did you buy this?” he asked, pointing to her saree.
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “My husband bought it from the city. Why?”`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy’s face fell.
    Boy: “city? ”
    `,
  },
  { border: 'borderFlowers.png', text: `He turned and started walking away.` },
  { border: 'borderFlowers.png', text: `Bywalker: “Wait.”` },
  {
    border: 'borderFlowers.png',
    text: `He stopped.
    Bywalker: “For whom?”
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `Boy: “My sister”, he replied, looking down.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “Do you have money?” she asked, smiling.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Boy: “Not enough to buy something like your dress,” he admitted.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “I’ll help you get what you want,” she said.`,
  },
  {
    border: 'borderFlowers.png',
    text: `His face illuminated.
    Boy: “Really?”
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “Only if you do something for me,” she added with a playful smirk.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Boy: “What do you want me to do? I can cut, I can break, I can… I can do anything!” he said, eagerly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Bywalker: “wait wait!...Tomorrow, by this time, wait here. I’ll tell you then.”`,
  },
  {
    border: 'borderFlowers.png',
    text: `Boy: “Yes!” he shouted, filled with joy.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He flew off like a happy mosquito (not literally flying).`,
  },
  { border: 'borderFlowers.png', text: `Then He realized He didnt thank her` },
  {
    border: 'borderFlowers.png',
    text: `He stopped and called The Red Saree and said "Thank Red Saree sister"`,
  },
  {
    border: 'borderFlowers.png',
    text: `"No..No..No mention",she replied with a polite smile😅`,
  },
  { border: 'borderFlowers.png', text: `Then He flew off` },
  {
    border: 'borderFlowers.png',
    text: `As he ran, a bywalker woman walked along the path. Nearby, three women stood watching the bywalker woman talking to a boy.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Why did you talk to him?” one of the women asked.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Why? Shouldn't I talk to him?” the bywalker woman replied.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“He’s that devil’s kid,” another woman said.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“He?…” The bywalker woman glanced at the boy, who was running happily. “Doesn’t look like it to me,”
  she replied.`,
  },
  { border: 'borderFlowers.png', text: `He was happily running` },
  { border: 'borderFlowers.png', text: `........` },
  {
    border: 'borderFlowers.png',
    text: `......As we look further into the other side of the farm...exist another forest....`,
  },
  {
    border: 'borderFlowers.png',
    text: `At the center of the warm, filled forest, a convoy of vehicles comes like a snake that swims in sewage. They are riding to the Village through The Farm`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Boss, you heard about that asteroid that fell a few days ago?" one of the people seated in
the back of a car asked.`,
  },
  {
    border: 'borderFlowers.png',
    text: ` A man with a styled mustache, around 45, wearing sunglasses and a white shirt with dhotis,scrolling his phone, sitting in the front seat.`,
  },
  { border: 'borderFlowers.png', text: `They call him "Boss."` },
  {
    border: 'borderFlowers.png',
    text: `The Boss  seated in the front, scrolling his mobile, did not notice the back-seater's words.`,
  },
  { border: 'borderFlowers.png', text: `"Boss"` },
  { border: 'borderFlowers.png', text: `"Bosssssss," he repeated.` },
  {
    border: 'borderFlowers.png',
    text: `"What the fuck do you want?" the Boss snapped.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Nothing, Boss," the back-seater backed off.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Looks like Boss is busy doing something important," the back-seater whispered to another back-seater.`,
  },
  { border: 'borderFlowers.png', text: `The Boss noticed.` },
  {
    border: 'borderFlowers.png',
    text: `"What the fuck are you looking at?" the Boss yelled, trying to slap him, but the driver dodged.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Am I flashing my pee pee?" the Boss snapped. 👺`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Hehe, sorry, Boss," the driver stammered. `,
  },
  {
    border: 'borderFlowers.png',
    text: `As we look closer at the Boss's mobile, the Boss is watching some naked dance shit, drooling.`,
  },
  { border: 'borderFlowers.png', text: `… … . … … ..` },
  {
    border: 'borderFlowers.png',
    text: `Meanwhile the boy approached a pile of trees, he notices light glinted off a car emerging from the forest, followed by a convoy of vehicles
    His face changed as he senses like something bad about to happen, 
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `"Cho, come on, it’s time to go. We can come back tomorrow," he called out.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Nooo," she protested, looking at him sweetly anger.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Okay,im going ... they say  wolves love boiling kids in a hot soup and drin..." he joked, trying to scare her.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Before he could finish, she ran towards him.`,
  },
  { border: 'borderFlowers.png', text: `"Haha, scaredy cat," he laughed.` },
  {
    border: 'borderFlowers.png',
    text: `Meanwhile the Boss watching them from the car`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Who is that brat?" the Boss asked his driver.`,
  },
  { border: 'borderFlowers.png', text: `“Who, boss?” the driver replied.` },
  {
    border: 'borderFlowers.png',
    text: `“That brat!, you ^(^(^*#$#”, the Boss snapped.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Him? You do not know him, boss?", the driver said with a hint of sarcasm`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Is he a fucking god ?" the Boss asked, annoyed as he took off his sunglasses and raises his leg.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"No, no, boss, I didn’t mean—" the driver stuttered.`,
  },
  {
    border: 'borderFlowers.png',
    text: `the Boss kicked the driver out of the car.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Go ask that brat what he’s doing on my fucking land," he ordered coldly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The driver stood up, dusting off his shirt, glaring at the boy as if he were to blame. The driver’s eyes were filled with anger as he marched towards the boy. eventhough he looked anger, his body language says otherwise, he is afraid of that boy but he forced himself  not to show it`,
  },
  {
    border: 'borderFlowers.png',
    text: `"What are you doing here?" the driver shouted.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Just collecting wood," the boy answered calmly,looking down.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"who let you here ..Do you know who owns this land?" the driver asked sharply.`,
  },
  { border: 'borderFlowers.png', text: `The boy looked innocently confused.` },
  {
    border: 'borderFlowers.png',
    text: `"Where are you taking this?" the driver,pointing those woods.`,
  },
  { border: 'borderFlowers.png', text: `"To Jehan boss," the boy replied.` },
  { border: 'borderFlowers.png', text: `(Jehan is the rival of THE BOSS) ` },
  {
    border: 'borderFlowers.png',
    text: `"What? Speak up, I didn’t hear you," the driver growled.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"To Jehan boss," the boy repeated, still looking down.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Anger flared in the driver’s eyes. “Bosss?!" he shouted, and then he hit the boy.`,
  },
  { border: 'borderFlowers.png', text: `The boy fell to the ground.` },
  {
    border: 'borderFlowers.png',
    text: `“Boss? That jerk?!" the driver yelled`,
  },
  {
    border: 'borderFlowers.png',
    text: `Then the driver pointing his finger at the Boss in the car and started ,"Look at him" ,"The Boss in the car gave a cold look that said, I’m the one ."..  "He is the only bo—", but was cut off.`,
  },
  {
    border: 'borderFlowers.png',
    text: ` a sharp sound interrupted  him, he  started  yelping in pain and began to stagger around. He saw the cause of his pain: the little girl holding a stick, fury in her eyes.`,
  },
  { border: 'borderFlowers.png', text: `He got hit by cho` },
  {
    border: 'borderFlowers.png',
    text: `"Don’t hurt my brother," she said firmly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"you little brat,.." the driver growled.`,
  },
  {
    border: 'borderFlowers.png',
    text: `She stared back at him with a fierce look.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Who the hell are you? “, the driver growled. `,
  },
  {
    border: 'borderFlowers.png',
    text: `
    As the driver moved toward her, the boy quickly stepped in. "Please, do not hurt my sister!" he pleaded. "You can hit me instead, but do not hurt her!" He held out the stick to the driver, his voice desperate.
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `The driver surprised, hesitated, looking at the stick, and slowly reached out to take it.`,
  },
  {
    border: 'borderFlowers.png',
    text: `But just as he was about to grab it, a sudden loud sound scared him. He thought it was some kind of animal like a boar.`,
  },
  {
    border: 'borderFlowers.png',
    text: `It was not. It was the Boss—standing half inside, half outside the car—laughing at them arrogantly, as if he owned the world.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Come on, we need to meet “that boss”,’" the Boss said sarcastically, mocking the title.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Yes, boss," the driver replied, flustered.`,
  },
  {
    border: 'borderFlowers.png',
    text: `who are you calling "Boss",the Boss asked`,
  },
  {
    border: 'borderFlowers.png',
    text: `"who else boss, its you only",the driver replied as scartching the place where cho hit`,
  },
  { border: 'borderFlowers.png', text: `"GOOD",the Boss smiled ` },
  {
    border: 'borderFlowers.png',
    text: `"If I see you here again, I do not know what I’ll do," the driver threatened, trying to scare the boy before going back into the car.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"If anyone sees them on my land again, cut them both up and feed them to Reema," the Boss ordered coldly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Yes, boss!" his men shouted together.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Start the car, we’ve got work to do," the Boss commanded.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy’s eyes widened in fear, his heart racing. The anger in the little girl began to fade as her brother's tears softened her rage. She dropped the stick and hugged her brother's leg tightly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The cars sped away, their engines roaring, and among them was a truck that stood out. As it moved, the truck trembled ominously, as though some kind of BEAST was caged within. soon the sound of the engines faded into the distance`,
  },
  { border: 'borderFlowers.png', text: `The boy looked at cho ` },
  {
    border: 'borderFlowers.png',
    text: `"sorry, big bro",looking down,cho cried`,
  },
  {
    border: 'borderFlowers.png',
    text: `His sad face brightened as if nothing had happened.(he is trying to cheer her up)`,
  },
  {
    border: 'borderFlowers.png',
    text: `See, Cho? They ran… cowards.Who are they messing with?" he joked, flexing his arms comically.`,
  },
  { border: 'borderFlowers.png', text: `Cho looked at him surprisingly` },
  { border: 'borderFlowers.png', text: `"what?....i was acting...",the boy😆` },
  {
    border: 'borderFlowers.png',
    text: `"You’re so cool, big bro!" she said, her eyes wide with admiration (not knowing he is pretending).`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Well, let's go, before those cowards return,” he said.`,
  },
  { border: 'borderFlowers.png', text: `“Mmm, big bro,” she replied.` },
  {
    border: 'borderFlowers.png',
    text: `With nearly 50kg of wood logs balanced on his head, he began to move.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"they will scold you big bro if we take these wo--",cho stopped `,
  },
  {
    border: 'borderFlowers.png',
    text: `"what cho",the boy asked with a smile on his face`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Nothing Big Bro",cho replied happily`,
  },
  { border: 'borderFlowers.png', text: `Both started walking Happily` },
  {
    border: 'borderFlowers.png',
    text: `The nearby children, once joyful, suddenly fell silent as the boy and his sister walked past. Cho waved at them cheerfully, smiling widely, but they looked scared, as if they had seen a ghost. Their eyes were fixed on the boy.`,
  },
  { border: 'borderFlowers.png', text: `cho noticed that` },
  { border: 'borderFlowers.png', text: `MEANWHILE IN THE CAR` },
  {
    border: 'borderFlowers.png',
    text: `“Well, who was that brat?” the Boss asked the driver while lighting up his cigar.`,
  },
  { border: 'borderFlowers.png', text: `“You…” the driver started again.` },
  {
    border: 'borderFlowers.png',
    text: `“You son of a…” the Boss picked up his gun from his hip pocket and pointed it at the driver.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“I’ll fucking gut you if you start with ‘You do not know, boss?’ again!” the driver snapped.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The driver side-eyed the gun, comically afraid.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“No, no, boss, I didn’t mean… I meant to say he is that devil’s kid. Don’t shoot me, boss!” the driver rushed to say, still fearful (comically).`,
  },
  { border: 'borderFlowers.png', text: `“Oh,” the Boss said.` },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, both the Boss and the driver realized the driver had taken his hands off the wheel as he surrendered  in his panic.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Both looked at each other, shock written on their faces, and then screamed  "aaaaHHHHHHHHH".The car started to tremble, descending into a moment of chaos.`,
  },
  { border: 'borderFlowers.png', text: `SUDDEN FLIP CUT` },
  {
    border: 'borderFlowers.png',
    text: `After a little car-shaking moment, the driver’s face, which had earlier been like a tomato floating in water, now looked like it had been smashed by a punch from pigs.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The Boss wiped the driver’s bloodstains off his gun using a cloth torn from the driver’s clothes while the driver tended to his wounds, still driving.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Mmm… what were you saying?” the Boss asked.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The driver looked at him but could not talk; his mouth was punctured.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“You dare to refuse my question?” the Boss said, glancing at his gun.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Mmshdjsjd… Sjse,” the driver mumbled something unintelligible.`,
  },
  { border: 'borderFlowers.png', text: `“Huhhh?” the Boss replied.` },
  { border: 'borderFlowers.png', text: `The driver looked at him again.` },
  {
    border: 'borderFlowers.png',
    text: `The Boss burst out laughing, almost choking on his amusement.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Look at him, look at his stinky-ass nose!” the Boss exclaimed to the back seaters, still laughing.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Come here, come here!” the Boss called to them. `,
  },
  {
    border: 'borderFlowers.png',
    text: `“See?” he pointed at the driver’s nose.`,
  },
  { border: 'borderFlowers.png', text: `They all laughed at the driver.` },
  { border: 'borderFlowers.png', text: `CAR STOPS` },
  {
    border: 'borderFlowers.png',
    text: `“What, you going to hit us”, the Boss joked. `,
  },
  {
    border: 'borderFlowers.png',
    text: `“We’ve reached, boss,” the driver announced.`,
  },
  { border: 'borderFlowers.png', text: `They all stopped laughing.` },
  { border: 'borderFlowers.png', text: `The Boss smirked.` },
  {
    border: 'borderFlowers.png',
    text: `He get out of his car, "aaahhhh... smells resources",he said`,
  },
  {
    border: 'borderFlowers.png',
    text: `“kK boys, get your ass up,...its been a long time” the Boss shouted.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“It’s money-plucking time,” he murmured, scratching his butt.`,
  },
  { border: 'borderFlowers.png', text: `TRUCK TREMBLES AGAIN` },
  {
    border: 'borderFlowers.png',
    text: `“Feed that goddamn BEAST, you useless sons of sons!” the Boss raged.`,
  },
  { border: 'borderFlowers.png', text: `“Yes, boss,” they replied.` },
  { border: 'borderFlowers.png', text: `"Boss!!"` },
  {
    border: 'borderFlowers.png',
    text: `The Boss thinking about something seriously`,
  },
  { border: 'borderFlowers.png', text: `**Could be That half naked shit**` },
  {
    border: 'borderFlowers.png',
    text: `"Boss,what should we do about that brat?",the driver`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Huh?",the Boss as he didnt hear a word from the driver,he is still busy thinking about something `,
  },
  { border: 'borderFlowers.png', text: `"that brat, Boss"` },
  { border: 'borderFlowers.png', text: `"what about him?"` },
  {
    border: 'borderFlowers.png',
    text: `"what should we do about him",the driver`,
  },
  { border: 'borderFlowers.png', text: `"what should we do?",the Boss asked` },
  {
    border: 'borderFlowers.png',
    text: `"They have no one… why don’t we just sell them in the city? No one will ever know, No one will ever care, and we might even profit a little," the driver suggested quietly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"what do you say boss? there is greater price for the younger souls,Huh",the driver`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boss was staring at the driver like "is he for real? `,
  },
  {
    border: 'borderFlowers.png',
    text: `The boss just smiled wierdly at him and nodded like "okay" `,
  },
  {
    border: 'borderFlowers.png',
    text: `"understood boss",the driver said and left `,
  },

  // {border:'borderFlowers.png',text:`"i dont know boss....i heard people talking...he roams like ghosts around the village at night...people are afraid of him, even i.."`},
  // {border:'borderFlowers.png',text:`"Not only that. He was Your enemy's son as well",the driver added`},
  // {border:'borderFlowers.png',text:`"so?..",the Boss`},
  // {border:'borderFlowers.png',text:`"nothing boss,just saying"`},
  // {border:'borderFlowers.png',text:`"Aahhhh... I know... I know... I know. what... you're... trying to say....... There should be only one person people should be afraid of, right?", The Boss. `,},
  // {border:'borderFlowers.png',text:`The driver confused, his face was like "is he fucking dumb?"`},
  // {border:'borderFlowers.png',text:`"Yes, i am" written in the Boss's face`},
  // {border:'borderFlowers.png',text:`"Did he just ignored  "your enemy's son" ",the driver murmured`},
  // {border:'borderFlowers.png',text:`"what?",the Boss`},
  // {border:'borderFlowers.png',text:`"Nothing Boss, ill take my leave",the driver`},
  // {border:'borderFlowers.png',text:`The driver moved from there`,},
  // {border:'borderFlowers.png',text:`......`},
  {
    border: 'borderFlowers.png',
    text: `“Mmmmm... devil’s son Huh,the one who cheated death, Huh,” the Boss smirked MENACINGLY, as if he was about to do what he had ordered his men to do in the farm(CUT THE BOY AND CHO).`,
  },
  {
    border: 'borderFlowers.png',
    text: `**The look on him was so powerful that it sent us back in time.**`,
  },
  { border: 'borderFlowers.png', text: `YEARS AGO................` },
  { border: 'borderFlowers.png', text: `A palace` },
  {
    border: 'borderFlowers.png',
    text: `A Home like a palace,  with a fountain at its center. Birds roamed freely inside, and a single tree near the fountain teemed with chirping birds. `,
  },
  {
    border: 'borderFlowers.png',
    text: `It was filled with the soothing sounds of nature.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Inside that home, in a room on the first floor, a man, who appears to be a scientist, prayed hard while hearing the sound of his wife crying.`,
  },
  { border: 'borderFlowers.png', text: `He couldnt hear her struggle` },
  {
    border: 'borderFlowers.png',
    text: `The scientist was expecting his FIRST? baby (The Boy, Cho's brother)`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Don't worry, sir, for your good heart, this baby will be....," said one of a palace maid `,
  },
  {
    border: 'borderFlowers.png',
    text: `"please dont!! ..... go help them",he pleaded `,
  },
  {
    border: 'borderFlowers.png',
    text: `Meanwhile other Palace workers at the  down stairs chatted excitedly about the baby’s birth.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 1: “Do you think this baby will live?”`,
  },
  { border: 'borderFlowers.png', text: `Worker 2: “Who knows?”` },
  {
    border: 'borderFlowers.png',
    text: `Worker 3: “Even if it does not, they’re going to breed another one. Ha ha ha!” (cracked a joke).`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 4: “Shut up, idiot!” (bashed).`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 3: “What? Am I wrong?so far How many times? Five, right?”`,
  },
  { border: 'borderFlowers.png', text: `Worker 4: “So?”` },
  { border: 'borderFlowers.png', text: `Worker 3: “Nothing, just saying.”` },
  {
    border: 'borderFlowers.png',
    text: `Worker 4: “Don’t make fun of something like this. You’re a woman; you should be the last person to laugh at something like this.”`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 2: “How can you make fun of their feelings? They fed you.”`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 1: “That too, you making fun of Mr.Rav’s family’s feelings.”`,
  },
  {
    border: 'borderFlowers.png',
    text: `Worker 3: “wait ..wait... hold on a min----—”`,
  },
  {
    border: 'shadowBorder.png',
    text: `A strong cry of a baby interrupted the talk.`,
  },
  {
    border: 'shadowBorder.png',
    text: `Worker 1: “The baby is born!”, excited`,
  },
  { border: 'shadowBorder.png', text: `They ran up the stairs.` },
  {
    border: 'shadowBorder.png',
    text: `worker 3 who was cracking  jokes , froze there like she saw a demon`,
  },
  {
    border: 'shadowBorder.png',
    text: `Inside the room, the scientist comforted his wife. Her face was filled with joy as she leaned against his chest. He held the baby in his arms, both unable to contain their happiness as they have never even heard the sound of their baby,its their first time hearing their baby's cry. The room was filled with warmth and light and birds and flies.`,
  },
  {
    border: 'shadowBorder.png',
    text: `As the room glowed with happiness, the atmosphere outside changed abruptly. Darkness enveloped everything, and a heavy silence fell. Movements slowed, as if time had paused.`,
  },
  { border: 'shadowBorder.png', text: `BLANK… EVERYTHING BLACKED OUT.` },
  {
    border: 'shadowBorder.png',
    text: `Suddenly, a hurricane came, not a normal one, a hurricane of dead souls swept through the house. These souls, with claws, reached out to grab everyone nearby. In the eye of the Hurricane, the baby floated.`,
  },
  {
    border: 'shadowBorder.png',
    text: `Outside the palace, everything appeared normal as if The Hurricane Appeared out of nowhere inside the Home.`,
  },
  {
    border: 'shadowBorder.png',
    text: `Moments later,The hurricane gone so does the Home, the inside of the palace was in ruins—blood splattered on the walls, claw marks everywhere, furniture destroyed, and birds broken and lifeless.`,
  },
  {
    border: 'shadowBorder.png',
    text: `The scientist and his wife, injured and devastated, searched desperately for the baby.`,
  },
  {
    border: 'shadowBorder.png',
    text: `"Did you find my-",the wife asked as she struggling walking downstairs`,
  },
  { border: 'shadowBorder.png', text: `"what are you doing here?", scientist` },
  {
    border: 'shadowBorder.png',
    text: `"shut uppp.... i have to see my baby",the wife cried`,
  },
  {
    border: 'shadowBorder.png',
    text: `"ill find the baby, please dont come down . everything's ruined..you need rest", scientist`,
  },
  {
    border: 'shadowBorder.png',
    text: `"i dont need rest, i just need my baby",the wife `,
  },
  { border: 'shadowBorder.png', text: `she fainted` },
  { border: 'shadowBorder.png', text: `"sita", scientist yelled her name` },
  {
    border: 'shadowBorder.png',
    text: `scientist rushed towards her and caught before she fell and both seated`,
  },
  {
    border: 'shadowBorder.png',
    text: `"what's happening..where is my baby",she (in lower voice as she had no energy in her)`,
  },
  {
    border: 'shadowBorder.png',
    text: `"i dont know...i dont know....im  sorryy...i dont knowww",scientist cried`,
  },
  {
    border: 'shadowBorder.png',
    text: `she wipes his tears with hands,he grabbed her tightly`,
  },
  {
    border: 'shadowBorder.png',
    text: `He suddenly noticed baby like figure near the fountain`,
  },
  {
    border: 'shadowBorder.png',
    text: `"wait here", scientist excitedly rushed towards the fountain`,
  },
  { border: 'shadowBorder.png', text: `The baby is found` },
  {
    border: 'shadowBorder.png',
    text: `But excitement in his face started to fade as the baby doesnt have any movement`,
  },
  { border: 'shadowBorder.png', text: `He just froze there` },
  {
    border: 'shadowBorder.png',
    text: `"what happened... did you find the baby",the wife`,
  },
  { border: 'shadowBorder.png', text: `Ravvv, she called` },
  {
    border: 'shadowBorder.png',
    text: `she got up and rushed towatds them,struggling`,
  },
  { border: 'shadowBorder.png', text: `"what Rav",the wife` },
  { border: 'shadowBorder.png', text: `Then she finally  saw the baby` },
  { border: 'shadowBorder.png', text: `Dead.` },
  {
    border: 'shadowBorder.png',
    text: `Both scientist and his wife broke into pieces.......`,
  },
  {
    border: 'shadowBorder.png',
    text: `They both cried so loudly that the sound of their pain was unbearable ,even the ILO started  crying (ILO  have never had rain)`,
  },
  {
    border: 'shadowBorder.png',
    text: `Before the baby was born, ILO represented absolute peace, goodness, love, life, and every positive thing imaginable.`,
  },
  {
    border: 'shadowBorder.png',
    text: `Even words like "hate," "jealousy," and "greed",,,etc simply did not exist there.`,
  },
  {
    border: 'shadowBorder.png',
    text: `Now, everything is about to change, just as the rain became a part of ILO's weather.`,
  },
  {
    border: 'shadowBorder.png',
    text: `This rain was painful even to ILO itself. In an attempt to extinguish the rain, which was a manifestation of pure pain, ILO emitted a powerful force.
The force was so immense that it sent us hurtling back to the present.`,
  },
  {
    border: 'shadowBorder.png',
    text: `What happened after that will be revealed later.`,
  },
  { border: 'borderFlowers.png', text: ` CUT  TO  PRESENT` },
  {
    border: 'borderFlowers.png',
    text: `PRESENT. 
    Time: around 7:30
    `,
  },
  {
    border: 'borderFlowers.png',
    text: `A strong wind blew through the air. It didn’t smell like just any wind; it smelled sweet, like strawberry ice cream. The wind was so powerful it could lift an adult off the ground. The world around looked bright and colorful, like a beautiful light show.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The entire world transformed into a magnificent light show, like the auroras of the northern pole, but spanning the entire planet. Sweetness filled the air, and the warmth of light rising from the ground was so captivating that even the blind or those without a sense of smell would be entranced. Every bird, tree, and insect—except ILOians—grew into towering giants.`,
  },
  {
    border: 'borderFlowers.png',
    text: `While the world around The boy became brighter and larger, the boy’s own world shrank and dimmed as he returned to his current home. There was nobody else. The house was not lively, but in the middle of a rundown, almost garbage-like house, he was cooking something delicious.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The battle between the scent of the food and the sweet fragrance of the world could shake the whole world.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He then brought food to his little sister, who was sad and petting their sheep. When she smelled the food, her sad face illuminated with joy, and her eyes sparkled with happy tears.`,
  },
  { border: 'borderFlowers.png', text: `"cho here's yo--"` },
  {
    border: 'borderFlowers.png',
    text: `she grabbed the food and started eating even before he finished the sentence`,
  },
  { border: 'borderFlowers.png', text: `He was like "what happened just now"` },
  { border: 'borderFlowers.png', text: `Both were sitting on folding cot` },
  { border: 'borderFlowers.png', text: `"How is it?",he asked` },
  {
    border: 'borderFlowers.png',
    text: `“Areweryoue gmadsaat me, big brother?” she asked(blaffed), her mouth full of food and snorting a little.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Haaaaaaann?” he asked, confused but smiling.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Are you mad at me?” she asked again, still sniffling.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Eat slowly, Cho,” he said, tapping her head gently and giving her water.`,
  },
  {
    border: 'borderFlowers.png',
    text: `While she drank, He gazed up at the sky, where the wind and asteroids drifted so beautifully, like a vast sea shimmering with colorful, glowing fish..`,
  },
  {
    border: 'borderFlowers.png',
    text: `Suddenly, there was "BONKK", and he fell to the ground, dizzy and feeling like he had been knocked out.`,
  },
  {
    border: 'borderFlowers.png',
    text: `His sister stood over him, holding a broomstick and smiling evil'ly. “Are you mad at me, big bro?” she firmly asked.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Uhh…,” he mumbled, still dizzy from the bump.`,
  },
  { border: 'borderFlowers.png', text: `"huuuhhhhhh??????",she screamed` },
  { border: 'borderFlowers.png', text: `He came back to senses` },
  {
    border: 'borderFlowers.png',
    text: `Then he jumped up and said, “I heard there’s going to be a fireworks festival in the village” He started eating like nothing happened.`,
  },
  { border: 'borderFlowers.png', text: `She Realized What he meant` },
  {
    border: 'borderFlowers.png',
    text: `Her face suddenly went from anger to happy like a kitten.`,
  },
  { border: 'borderFlowers.png', text: `She started eating again` },
  {
    border: 'borderFlowers.png',
    text: `"Food is so spicyy🤤 ,big bro",she devoured`,
  },
  {
    border: 'borderFlowers.png',
    text: `"spice,aah??  , its sweet",he confused`,
  },
  { border: 'borderFlowers.png', text: `"ah,,,sorry😅",she ` },
  {
    border: 'borderFlowers.png',
    text: `“Trrk trrk, here take this yian(boy's name)!” she called to her little sheep.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy looked surprised and shocked. “Really?..” ah look`,
  },
  {
    border: 'borderFlowers.png',
    text: `“What? I won’t give it to you! Bleh!” she teased.`,
  },
  { border: 'borderFlowers.png', text: `“Ohh..I see,” he said` },
  {
    border: 'borderFlowers.png',
    text: `Now he started posing like he's going to  pull the sheep from the air magically.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He closed his eyes and—BOOM!—the sheep disappeared.`,
  },
  {
    border: 'borderFlowers.png',
    text: `She isn't surprised. she just opened her arms,closed her eyes waiting for the sheep to come back, bouncing around and excited.(she knows he will undo whatever he just did)`,
  },
  {
    border: 'borderFlowers.png',
    text: `But  Nothing happened. She opened one eye and saw him eating calmly.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Suddenly He began to sweat, feeling hot even in the cold night.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Biggggg... Brother,” she said in a funny, scary voice.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He turned slowly, sensing trouble as she looked at him like a  little monster.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Okay,..okay...ill  bring  kiki back... calm down, Cho. Why so serious?” he said with a confusingly smily face.😅`,
  },
  {
    border: 'borderFlowers.png',
    text: `"Good", She turned back into her sweet self.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Okay..., here we go,” he said, striking a pose again.`,
  },
  {
    border: 'borderFlowers.png',
    text: `BOOM! She opened her eyes and felt the sheep in her hands, but nothing was there—just the memory of it.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He Confused,  wondered what went wrong. `,
  },
  {
    border: 'borderFlowers.png',
    text: `She again tighten her fists to hit him.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Wait,..wait  Cho!” he laughed confusingly, trying to lighten the mood.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He tried another BOOM with his plate, making it disappear and reappear.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“It came back! Then why doesn't Kiki?”, he wondered.`,
  },
  {
    border: 'borderFlowers.png',
    text: `They stared at each other, like heroes and villains in a movie poster, both quiet for three seconds.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Then they noticed a strange white figure between them.`,
  },
  { border: 'borderFlowers.png', text: `They turned to see what it is ` },
  {
    border: 'borderFlowers.png',
    text: `it was their sheep, looking sad at sky as if it had experienced world war and lost everything.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy felt little confused like "when did it come" while his sister rushed to hug the sheep  "kiki..you here?". But as she did, the sheep jumped over her, and she fell on her face, with the sheep stepping lightly on her head.`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy laughed loudly....She got frustrated " what...", She tried to kick him,"laughing?....", but he stood up and walked away, not noticing her. She fell again, `,
  },
  { border: 'borderFlowers.png', text: `the sheep  laughed at her.` },
  {
    border: 'borderFlowers.png',
    text: `“eat fast, cho, we gotta go before they start” he said loudly while he is walking towards the house. `,
  },
  { border: 'borderFlowers.png', text: `“You pig!” she shouted at the sheep.` },
  {
    border: 'borderFlowers.png',
    text: `The sheep stepped one foot on her head and said, 'Ask him, don't you want to know?' — like a threat.`,
  },
  {
    border: 'borderFlowers.png',
    text: `She was surprised like 'did kiki just talk?'`,
  },
  {
    border: 'borderFlowers.png',
    text: `She tried to grab the sheep, it wasnt there, disappeared again`,
  },
  { border: 'borderFlowers.png', text: `She is still in shock` },

  // {border:'borderFlowers.png',text:`Somewhere nearby, a real pig looked confused, as if asking, “What,..what did I do?” while other pigs laughed,punching tomatoes.`},
  { border: 'borderFlowers.png', text: `SOME TIME PASSED` },
  {
    border: 'borderFlowers.png',
    text: `They walked along the edge of the forest,they are going to the village, both shouldering the bag, feeling the cold air. They could see their breath in the crisp, chilly weather.`,
  },
  {
    border: 'borderFlowers.png',
    text: `Both cho and the little sheep were playing`,
  },
  { border: 'borderFlowers.png', text: `“Big bro”, she started.` },
  { border: 'borderFlowers.png', text: ` “Mm”,He looked at her.` },
  { border: 'borderFlowers.png', text: `“Why were those kids scared of you?”` },
  { border: 'borderFlowers.png', text: `Scared?, when` },
  { border: 'borderFlowers.png', text: `Today..when we were leaving the farm` },
  {
    border: 'borderFlowers.png',
    text: `“thattt ....is Because I… am… a demon!” he said, pretending to be scary.`,
  },
  { border: 'borderFlowers.png', text: `“Stop joking, big bro. Tell me.”` },
  { border: 'borderFlowers.png', text: `“I don't know.. ` },
  {
    border: 'borderFlowers.png',
    text: `Let's say What would you do if you see... Like.., an elephant with two legs and a creepy smile?” he asked.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“I’d beat it with my heavenly gifted arms!” she said, flexing her tiny biceps, which is in the size of a sand from a null universe (obviously it doesn't exist) .`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Ooo, I’m scared”, he said sarcastically.`,
  },
  {
    border: 'borderFlowers.png',
    text: `“Good,” she replied , not getting his sarcasm,started  walking proudly.`,
  },
  // {border:'borderFlowers.png',text:`"kids are always afraid of  big guys like me...",the boy ,imitating a monster`},
  // {border:'borderFlowers.png',text:`"i am not afraid of anyone",she gave a evily proud look`},
  // {border:'borderFlowers.png',text:`"See..They are not strong like you,....",the boy`},
  // {border:'borderFlowers.png',text:`"ooo",she exclaimed`},
  {
    border: 'borderFlowers.png',
    text: `"There will be more people today than any other day,..its going to be fun",the boy excited`,
  },
  {
    border: 'borderFlowers.png',
    text: `"yes,yes,fireworks,candies,toys..  cant wait big bro",she excitedly,her eyes filled with fireworks ,candies and toys, drooling`,
  },
  {
    border: 'borderFlowers.png',
    text: `"yeah yeah 😅","she totally forget what she was asking",he thought, `,
  },
  {
    border: 'borderFlowers.png',
    text: `"But",she said in a sad tone( she had a vision of him being hated by people of the village)`,
  },
  { border: 'borderFlowers.png', text: `"what cho",he ` },
  {
    border: 'borderFlowers.png',
    text: `"i...i wanted to ask you something,big bro"`,
  },
  { border: 'borderFlowers.png', text: `"what is it cho"` },
  {
    border: 'borderFlowers.png',
    text: `"aasskkk him" in husky voice,she heard`,
  },
  { border: 'borderFlowers.png', text: `"did you hear that?",she asked` },
  { border: 'borderFlowers.png', text: `" hear what?",he asked` },
  { border: 'borderFlowers.png', text: `"nothing"` },
  { border: 'borderFlowers.png', text: `started walking` },
  {
    border: 'borderFlowers.png',
    text: `“They hate you, right, big bro? The  village people?”`,
  },
  {
    border: 'borderFlowers.png',
    text: `"HATE??", who taught you these words?..`,
  },
  {
    border: 'borderFlowers.png',
    text: `"i dont know,,... i think i heard someone talking...dont change the topic big bro...then ill forget again"`,
  },
  { border: 'borderFlowers.png', text: `"whom did you heard"` },
  {
    border: 'borderFlowers.png',
    text: `"first  you answer me big bro....They hate you, right?",cho`,
  },
  { border: 'borderFlowers.png', text: `“aaaa...mmmm.”` },
  {
    border: 'borderFlowers.png',
    text: `“then why do we go to the village every day?”`,
  },
  { border: 'borderFlowers.png', text: `"Tooo.... Entertain them",the boy ` },
  {
    border: 'borderFlowers.png',
    text: `"i know that but why?,big brooo....i dont understand....they hate you...but you make them laugh...daily",she said,looked at his bag,there is a mask`,
  },
  {
    border: 'borderFlowers.png',
    text: `"thats ONE good question",the boy 😅 but in his mind "why does she talk like grown person"`,
  },
  { border: 'borderFlowers.png', text: `"tell me .big bro"` },
  {
    border: 'borderFlowers.png',
    text: `"That….....Huhh…..Those people... /takes a breath/... they’re working hard,you know, having a tough day. Though they seem joyful, I can see that they feel empty ,maybe i can only see that. They want something to fill their emptiness  and....i think I am that something. I don't mind if they hate me or..or..anything—I just want them to have a really peaceful life, as long as I'm alive.”`,
  },
  { border: 'borderFlowers.png', text: `even that person who hit you today?` },
  { border: 'borderFlowers.png', text: `even that person who hit me today` },
  {
    border: 'borderFlowers.png',
    text: `"you dont want to hurt them",she asked`,
  },
  { border: 'borderFlowers.png', text: `no` },
  {
    border: 'borderFlowers.png',
    text: `"they hurt you, they hate you,but you dont want to hurt them, you  want  them  to be  happy.....you're soo cool, big bro",  she admired her big bro`,
  },
  {
    border: 'borderFlowers.png',
    text: `"not only me ,Cho,you should be like that too.....won't you?",the boy`,
  },
  {
    border: 'borderFlowers.png',
    text: `she gave him a smile that said "I won't"`,
  },
  { border: 'borderFlowers.png', text: `"Chooo",the boy` },
  { border: 'borderFlowers.png', text: `"Fine, fine, I'll try," Cho said.` },
  {
    border: 'borderFlowers.png',
    text: `"Huh?...try?.......that aside ..why did you ask me that in the first place",the boy `,
  },
  {
    border: 'borderFlowers.png',
    text: `"sometimes i feel like someone's talking to me big bro",she said `,
  },
  {
    border: 'borderFlowers.png',
    text: `"BAMMM!" She crashed into him when he suddenly stopped walking`,
  },
  {
    border: 'borderFlowers.png',
    text: `He stopped, looking at a burned-down PALACE(his home) far away, with a skeleton pinned on a post in front of it, he imagined as skeleton is smiling and waving at him.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"its not safe here..dont you think?...she started hating people?...its not safe..hahahaha...",the skeleton`,
  },
  { border: 'borderFlowers.png', text: `"not safe?",the boy` },
  {
    border: 'borderFlowers.png',
    text: `"who said not safe..its totally safe",eerie voice`,
  },
  { border: 'borderFlowers.png', text: `"no its not",another eerie voice` },
  {
    border: 'borderFlowers.png',
    text: `"yes no,, yes its no, no, no its yes,,,,,,hahahaha",multiple eerie voices`,
  },
  {
    border: 'borderFlowers.png',
    text: `The boy started losing control like he is about to break, "stop..no..stop",he screaed in pain`,
  },
  {
    border: 'borderFlowers.png',
    text: `"big bro?...big bro?...",cho called casually`,
  },
  {
    border: 'borderFlowers.png',
    text: `He heard just a fragment of her voice, which echoed in his mind.`,
  },
  { border: 'borderFlowers.png', text: `He came to senses` },
  { border: 'borderFlowers.png', text: `"Thanks cho", he thanked` },
  { border: 'borderFlowers.png', text: `But he didnt get response` },
  // {border:'borderFlowers.png',text:`He turned to see why she didnt response`},
  // {border:'borderFlowers.png',text:`“Big bro, hurry! We’re late!” she urged, noticing he was lost in thought.(she noticed Something off of him)`},
  // {border:'borderFlowers.png',text:`They kept walking, the forest getting colder as they got closer to the village.`},
  // {border:'borderFlowers.png',text:`Both started shaking in the cold breeze, unable to speak clearly.(which is unusual)`},
  // {border:'borderFlowers.png',text: `“Big bro,” Cho started.`},
  // {border:'borderFlowers.png',text:`“Mmmmmmmm?”`},
  // {border:'borderFlowers.png',text:`“When are we going to the city?” Cho asked in a quiet, sad tone.`},
  // {border:'borderFlowers.png',text:`“Soon, Cho.”`},
  // {border:'borderFlowers.png',text:`“How soon?”`},
  // {border:'borderFlowers.png',text:`“Very so--...wait......,whyyyyy?...you  have any friends there?.....is that friend "THAT  SOMEONE" you  eavesdropped  talking?",he asked funnily suspiously🤨`},
  // {border:'borderFlowers.png',text:`"no no...not that........................................i  dont want to be with people who hate my big bro...i hate them"`},
  // {border:'borderFlowers.png',text:`He shocked to hear that`},
  // {border:'borderFlowers.png',text:`"No cho,,..no!!..i told you,,it doesnt matter whether they hate me or u or both of us...we dont hate anyone",he said firmly`},
  // {border:'borderFlowers.png',text:`She looked at him `},
  // {border:'borderFlowers.png',text:`what do we do?",he asked`},
  // {border:'borderFlowers.png',text:`"But i dont like those village people hate you big bro",cho`},
  // {border:'borderFlowers.png',text:`what do we do?",he asked again`},
  // {border:'borderFlowers.png',text:`"What do we do?",she asked him as she dont know what to say`},
  // {border:'borderFlowers.png',text:`"weeee.. help them...okay..we just help them.....got it?",he said`},
  // {border:'borderFlowers.png',text:`"But!!",she hesitated"`},
  // {border:'borderFlowers.png',text:`"No BUT',,you got it?"`},
  // {border:'borderFlowers.png',text:`"Got it ,big bro",she saluted`},
  // {border:'borderFlowers.png',text:`Now she is wondering what she just did (wondering about saluting as she has never seen someone saluting)`},
  // {border:'borderFlowers.png',text:`"Do you know why i want to go to the city cho?",he started ,while walking with serious face`},
  // {border:'borderFlowers.png',text:`"im tired....im tired of thinking..that im the reason you dont have any friends...thats why i want to go to the city..if i can go,i can take you with me and you will find new people,new friends who dont know me there  and you  will have a better life than here......but no matter what happens we dont do things to people what they do to us.....we dont hate people..  ..okay...i knew you fear talk to village peoples but i never knew you hate them.."`},
  // {border:'borderFlowers.png',text:`Cho's eyes literally started spinning as her brain cant handle that much words`},
  // {border:'borderFlowers.png',text:`"i dont want you to hate anyone..for that i'll get you to the city real soon. Even if I can't go, I'll find a way to get you there.”`},
  // {border:'borderFlowers.png',text:`“No... I'll only go with you.”,she firmly said, literally ignored other words`},
  // {border:'borderFlowers.png',text:`The boy looked at her,"she just heard only the last sentence" written on the boy's face, then he smiled, and nodded, realizing he couldn't change her mind`},
  // {border:'borderFlowers.png',text:``},
  // {border:'borderFlowers.png',text:`… `},
  // {border:'borderFlowers.png',text:`They walked some distance`},
  // {border:'borderFlowers.png',text:`As they get closer to the village, the cold starts to freeze them.`},
  // {border:'borderFlowers.png',text:`Suddenly the forest starting fill with smoke `},
  // {border:'borderFlowers.png',text:`“It’s really cold today ,   unsually, right, Cho?” he asked.`},
  // {border:'borderFlowers.png',text:`She didn’t respond.`},
  // {border:'borderFlowers.png',text:`He felt that she Stopped walking`},
  {
    border: 'borderFlowers.png',
    text: `He turned to see why she was quiet. She stood frozen,shaking in fear, staring at a scary figure, `,
  },
  {
    border: 'borderFlowers.png',
    text: `That figure stood behind him,it was right infront of him but he didnt see it, he didnt felt its presence and now only he felt it was close.he got ready to fight it. Suddenly, he turned around and was shocked to see it looked like the creature he had described—"an elephant with two legs and a creepy smile."`,
  },
  {
    border: 'borderFlowers.png',
    text: `He watched as it reached for him,he couldn't move as he is in fear,confused as he dont know what is happening. In its claws, it held a woman half of her body inside its mouth(NOT SPLITTEN) and asking for help.
    ****that  woman was That Red Saree.****`,
  },
  {
    border: 'borderFlowers.png',
    text: `"brow.. boy",The Red Saree Woman struggled`,
  },
  {
    border: 'borderFlowers.png',
    text: `the boy broke as he watched That Red Saree Woman Who Was nice to him getting eaten..... ,“Cho, run!” he yelled.`,
  },
  {
    border: 'borderFlowers.png',
    text: `He was ready to attack, but before he could move, that figure jumped over him, showing its sharp claws and grinning as it flew toward cho.`,
  },
  { border: 'borderFlowers.png', text: `“Chooooo!”` },
  { border: 'borderFlowers.png', text: `THE END` },
  {
    border: 'borderFlowers.png',
    text: `The driver was watching all this while hidden in the bushes from certain meters away,shaking in fear`,
  },
  {
    border: 'borderFlowers.png',
    text: `"whats with these THREE beasts",he feared`,
  },
  { border: 'borderFlowers.png', text: `POST  CREDITS:` },
  { border: 'borderFlowers.png', text: `FUTURE (AFTER FEW  YEARS) ` },
  {
    border: 'borderFlowers.png',
    text: `The city was in ruins and crowded, filled with laughter that seemed crazy compared to the sad reality underneath. On stage, a teen boy(THE  BOY ,cho's brother) knelt with his wrists in chains. He was badly hurt and covered in blood.`,
  },
  {
    border: 'borderFlowers.png',
    text: `"I'm going to kill you... all of you," he said angrily. "I will" while the crowd chanted excitedly “ Kill him.. Kill him.. “`,
  },
];
export default texts;
