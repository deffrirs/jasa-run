exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}haruka
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│
├ *Store*
│ • ${prefix}pulsa
│ • ${prefix}ampremium
│ • ${prefix}jpm
│ • ${prefix}nokos
│ • ${prefix}jasashare
│ • ${prefix}sewabot
│ • ${prefix}edit
│ • ${prefix}payment
│
├ *Game*
│ • ${prefix}tebakgambar 
│
├ *Info*
│ • ${prefix}owner
│ • ${prefix}daftar
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}
	exports.pulsa = (prefix, salam, pushname) =>{
	return`ꏍ࣪ ֢ 🥝𝗟𝗶𝘀𝘁 𝗽𝘂𝗹𝘀𝗮 𝗗𝗼𝗺𝗶𝗻𝗼 𝗦𝘁𝗼𝗿𝗲 ꏍ࣪ ֢ 🍓

 ꏍ࣪ ֢ ݁ 🌾𝙏𝙚𝙡𝙠𝙤𝙢𝙨𝙚𝙡 
 ꏍ࣪ ֢ ݁ 🌾𝟱.𝟬𝟬𝟬 : 𝟲.𝟬𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟭𝟬.𝟬𝟬𝟬 : 𝟭𝟬.𝟵𝟵𝟵
 ꏍ࣪ ֢ ݁ 🌾𝟭𝟱.𝟬𝟬𝟬 : 𝟭𝟱.𝟵𝟭𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟮𝟬.𝟬𝟬𝟬 : 𝟮𝟬.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟮𝟱.𝟬𝟬𝟬 : 𝟮𝟱.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟯𝟬.𝟬𝟬𝟬 : 𝟯𝟬.𝟴𝟳𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟯𝟱.𝟬𝟬𝟬 : 𝟯𝟱.𝟴𝟵𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟰𝟬.𝟬𝟬𝟬 : 𝟰𝟬.𝟳𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟱𝟬.𝟬𝟬𝟬 : 𝟱𝟬.𝟴𝟵𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟲𝟬.𝟬𝟬𝟬 : 𝟲𝟬.𝟴𝟵𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟴𝟬.𝟬𝟬𝟬 : 𝟴𝟬.𝟵𝟵𝟬
 ꏍ࣪ ֢ ݁ 🌾𝟭𝟬𝟬.𝟬𝟬𝟬 : 𝟭𝟬𝟬.𝟵𝟬𝟬

 ꏍ࣪ ֢ ݁ 🌤️𝙄𝙣𝙙𝙤𝙨𝙖𝙩
 ꏍ࣪ ֢ ݁ 🌤️𝟱.𝟬𝟬𝟬 : 𝟲.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟭𝟬.𝟬𝟬𝟬 : 𝟭𝟭.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟭𝟱.𝟬𝟬𝟬 : 𝟭𝟱.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟮𝟬.𝟬𝟬𝟬 : 𝟮𝟬.𝟵𝟵𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟮𝟱.𝟬𝟬𝟬 : 𝟮𝟱.𝟲𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟯𝟬.𝟬𝟬𝟬 : 𝟯𝟬.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟰𝟬.𝟬𝟬𝟬 : 𝟰𝟬.𝟳𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟱𝟬.𝟬𝟬𝟬 : 𝟱𝟬.𝟮𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟲𝟬.𝟬𝟬𝟬 : 𝟲𝟬.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟴𝟬.𝟬𝟬𝟬 : 𝟴𝟬.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🌤️𝟭𝟬𝟬.𝟬𝟬𝟬 : 𝟭𝟬𝟬.𝟭𝟱𝟬

 ꏍ࣪ ֢ ݁ 🥣𝙓𝙇 𝘼𝙭𝙞𝙖𝙩𝙖
 ꏍ࣪ ֢ ݁ 🥣𝟱.𝟬𝟬𝟬 : 𝟲.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟭𝟬.𝟬𝟬𝟬 : 𝟭𝟭.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟭𝟱.𝟬𝟬𝟬 : 𝟭𝟱.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟮𝟱.𝟬𝟬𝟬 : 𝟮𝟱.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟯𝟬.𝟬𝟬𝟬 : 𝟯𝟬.𝟳𝟲𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟱𝟬.𝟬𝟬𝟬 : 𝟱𝟬.𝟱𝟬𝟬
 ꏍ࣪ ֢ ݁ 🥣𝟭𝟬𝟬.𝟬𝟬𝟬 : 𝟭𝟬𝟬.𝟱𝟬𝟬

 ꏍ࣪ ֢ ݁ 💐𝙏𝙧𝙞
 ꏍ࣪ ֢ ݁ 💐𝟮.𝟬𝟬𝟬 : 𝟯.𝟲𝟵𝟮
 ꏍ࣪ ֢ ݁ 💐𝟯.𝟬𝟬𝟬 : 𝟰.𝟬𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟰.𝟬𝟬𝟬 : 𝟰.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟱.𝟬𝟬𝟬 : 𝟱.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟳.𝟬𝟬𝟬 : 𝟳.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟴.𝟬𝟬𝟬 :𝟴.𝟵𝟵𝟬
 ꏍ࣪ ֢ ݁ 💐𝟵.𝟬𝟬𝟬 :𝟭𝟬.𝟬𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟭𝟬.𝟬𝟬𝟬 : 𝟭𝟬.𝟵𝟵𝟬
 ꏍ࣪ ֢ ݁ 💐𝟭𝟱.𝟬𝟬𝟬 : 𝟭𝟱.𝟮𝟱𝟬
 ꏍ࣪ ֢ ݁ 💐𝟮𝟬.𝟬𝟬𝟬 : 𝟮𝟬.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟯𝟬.𝟬𝟬𝟬 : 𝟯𝟬.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟰𝟬.𝟬𝟬𝟬 : 𝟰𝟬.𝟭𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟱𝟬.𝟬𝟬𝟬 : 𝟱𝟬.𝟭𝟬𝟬
 ꏍ࣪ ֢ ݁ 💐𝟭𝟬𝟬.𝟬𝟬𝟬 : 𝟭𝟬𝟬.𝟭𝟱𝟬

 ꏍ࣪ ֢ ݁🥥𝙎𝙢𝙖𝙧𝙩𝙛𝙧𝙚𝙣
 ꏍ࣪ ֢ ݁🥥𝟱.𝟬𝟬𝟬 : 𝟱.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁🥥𝟭𝟬.𝟬𝟬𝟬 : 𝟭𝟬.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁🥥𝟭𝟱.𝟬𝟬𝟬 : 𝟭𝟰.𝟵𝟵𝟬
 ꏍ࣪ ֢ ݁🥥𝟮𝟬.𝟬𝟬𝟬 : 𝟮𝟬.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁🥥𝟮𝟱.𝟬𝟬𝟬 : 𝟮𝟱.𝟵𝟬𝟬
 ꏍ࣪ ֢ ݁🥥𝟯𝟬.𝟬𝟬𝟬 : 𝟯𝟬.𝟴𝟬𝟬
 ꏍ࣪ ֢ ݁🥥𝟱𝟬.𝟬𝟬𝟬:𝟱𝟬.8rb
`
	}
	exports.jpm = (prefix, salam, pushname) =>{
	return`*𓏲̈́🍫ֹ֢֢⭑.Lιst jρm Domιᥒo Storᥱ 𓏲̈́🥥⭑.*

⭒🧋ˑ𝅄ִׂ.5 mᥱm : 400ρ
⭒🧋ˑ𝅄ִׂ.10 mᥱm : 800ρ
⭒🧋ˑ𝅄ִׂ.15 mᥱm : 1.200
⭒🧋ˑ𝅄ִׂ.20 mᥱm : 1.400
⭒🧋ˑ𝅄ִׂ.25 mᥱm : 1.700
⭒🧋ˑ𝅄ִׂ.30 mᥱm : 2.000
⭒🧋ˑ𝅄ִׂ.50 mᥱm : 5.000

⸼˙››🚧Notᥱ 🚧⸼˙››
𖠗ֺ֢🍻.Ordᥱr jρm hᥲrᥙs sᥲbᥲr
𖠗ֺ֢🍻.Prosᥱs 1-4 hᥲrι tᥱrgᥲᥒtᥙᥒg ᥣιst kᥲmᥙ jᥙgᥲ
𖠗ֺ֢🍻.No ordᥱr jρm dι tᥱmρᥲt ᥣᥲιᥒ sᥱbᥱᥣᥙm jρm ιᥒι kᥱᥣᥲr
𖠗ֺ֢🍻.Aᥣᥣ trᥲx ᥒo rᥱff
`
	}
	exports.nokos = (prefix, salam, pushname) =>{
	return`˖⸃⸃ *Lιst Nokos Domιᥒo Storᥱ* 🌤️

*Vᥱrιk ᥣᥱbιh 2jᥲm hᥲᥒgᥙs*

˖⸃⸃🍣♡̷̷۫۫ᥒokos ᥕᥲ(SMS) : 600-700ρ
˖⸃⸃🍣♡̷̷۫۫ᥒokos ᥕᥲ(tᥣρᥒ) : 300-500ρ

˖⸃⸃🍣♡̷̷۫۫ᥒokos tᥱᥣᥱ 300ρ-800ρ

˖⸃⸃🍣♡̷̷۫۫ᥒokos ᥱ-ᥕᥲᥣᥱt : 500ρ
˖⸃⸃🍣♡̷̷۫۫ᥒokos Aρᥣιkᥲsι : 500ρ

˖⸃⸃🚧ᥒotᥱ˖🚧ོ
🚘⃞꒷̶Vᥱrιk ᥙᥣᥲᥒg +250ρ
🚘⃞꒷̶ tᥙᥒggᥙ ρrosᥱs 1-15 mᥱᥒιt sᥙᥒg vᥱrιk
🚘⃞꒷̶Kᥲrtᥙ frᥱsh jᥲᥒgᥲᥒ dᥙᥣᥙ ρᥙsh GC/shᥲrᥱ dᥙᥣᥙ
🚘⃞꒷̶No kᥱ bᥣok sᥱtᥱᥣᥲh doᥒᥱ Dιᥣᥙᥲr tᥲᥒggᥙᥒg jᥲᥕᥲb Admιᥒ
🚘⃞꒷̶Aᥣᥣ trᥲx ᥒo rᥱff
`
	}
	exports.edit = (prefix, salam, pushname) =>{
	return`ˑ☘️˖‌𓏔ׂׂLιst Edιt ᥣιst ᥲᥱstι ᥲᥒd PLP ๋֢ˑ☘️˖‌𓏔ׂׂ

،🍼֢𝆔𓂃็Pᥣρ
،💐֢𝆔𓂃็Pᥣρ rᥱq 300ρ-600ρ
،💐֢𝆔𓂃็Pᥣρ sᥱtᥙρ 
،💐֢𝆔𓂃็500ρ-900ρ
،💐֢𝆔𓂃็Pᥣρ tιkᥱᥣ 20ρ-100ρ

،🚧֢𝆔𓂃็(Nᥲᥒtι dιgrᥙρ ᥲkᥲᥒ dιkιrιm hᥲrgᥲ dᥲᥒ ριᥴtᥒყᥲ)،🚧֢𝆔𓂃็

،🍏𝆔𓂃็Edιt ᥣιst
،🍼֢𝆔𓂃็Loᥒg:800ρ
،🍼֢𝆔𓂃็Short:600ρ
،🍼֢𝆔𓂃็Wιdᥱ:400ρ

𓂃🌽𖥧¡!Edιt ᥣιst dᥱsk 100ρ-400ρ

𓂃🚧𖥧¡!Notᥱ𓂃🚧𖥧¡!
،🍼֢𝆔𓂃็Ordᥱr sᥲbᥲr ρrosᥱs 1-25 mᥱᥒιt
،🍼֢𝆔𓂃็Aᥣᥣ trᥲx ᥒo rᥱff
`
	}
	exports.payment = (prefix, salam, pushname) =>{
	return`*「 PAYMENT 」*

• *Gopay : 082146594775*
• *Dana : 082146594775*
• *Scan Qris Di Atas !!*
`
	}
exports.jasher = (prefix, salam, pushname) =>{
	return`𖧵ֹֺֽ໋໋݊ 𓄹𓈒🎸 𝅄Lιst jᥲsᥲ shᥲrᥱ Domιᥒo Storᥱ 𖧵ֹֺֽ໋໋݊ 𓄹𓈒🎸 𝅄

Ꮚ°˳🍜´ªJᥲsᥲ shᥲrᥱ kᥱ 250 Grᥙρ
Ꮚ°˳´📘ª2× shᥲrᥱ 500ρ
Ꮚ°˳´📘ª4× shᥲrᥱ 900ρ
Ꮚ°˳´📘ª6× shᥲrᥱ 1.2k
*(Bᥱrᥣᥲkᥙ kᥱᥣιρᥲtᥲᥒ)*

›𓂃🌽𖥧¡!Jᥲsᥲ shᥲrᥱ  kᥱ 500 grᥙρ
›𓂃🍜𖥧¡!2× shᥲrᥱ 900ρ
›𓂃🍜𖥧¡!4× shᥲrᥱ 1.8k
›𓂃🍜𖥧¡!6× shᥲrᥱ 2.6k
*(Bᥱrᥣᥲkᥙ kᥱᥣιρᥲtᥲᥒ)*

›𓂃🥥𖥧¡!Jᥲsᥲ shᥲrᥱ ρᥱrmᥱᥒιt
›𓂃🥧𖥧¡!10 mᥱᥒιt 750ρ
›𓂃🥧𖥧¡!20 mᥱᥒιt 1.4k
›𓂃🥧𖥧¡!30 mᥱᥒιt 2k
*(Bᥱrᥣᥲkᥙ kᥱᥣιρᥲtᥲᥒ)*

𓄹🫒⸼˙››Jᥲsᥲ shᥲrᥱ ρᥱrjᥲm
𓄹🫒⸼˙››1 jᥲm 3.5k
𓄹🫒⸼˙››2 jᥲm 6.6k
𓄹🫒⸼˙››3 jᥲm 9.5k
*(Bᥱrᥣᥲkᥙ kᥱᥣιρᥲtᥲᥒ)*

𓄹🧂⸼˙››Jᥲsᥲ shᥲrᥱ ρᥱrsᥣot
𓄹🧂⸼˙››1 sᥣot 1.2k
𓄹🧂⸼˙››2 sᥣot 1.9k
3 sᥣot 2.8k
*(›Bᥱrᥣᥲkᥙ kᥱᥣιρᥲtᥲᥒ)*

𓄹🚧⸼˙›› *Notᥱ* 𓄹🚧⸼˙››
• *Ordᥱr Hᥲrᥙs sᥲbᥲr*
• *Gᥲ sᥲbᥲrᥲᥒ Jᥲᥒ ordᥱr*
• *Sᥲᥣᥲh tf bᥙkᥲᥒ sᥲᥣᥲh admin*
• *Aᥣᥣ trᥲx ᥒo rᥱff*
`
	}
	exports.allplp = (prefix, salam, pushname) =>{
	return`ˑ☘️˖‌𓏔ׂׂLιst Edιt ᥣιst ᥲᥱstι ᥲᥒd PLP ๋֢ˑ☘️˖‌𓏔ׂׂ

،🍼֢𝆔𓂃็Pᥣρ
،💐֢𝆔𓂃็Pᥣρ rᥱq 300ρ-600ρ
،💐֢𝆔𓂃็Pᥣρ sᥱtᥙρ 
،💐֢𝆔𓂃็500ρ-900ρ
،💐֢𝆔𓂃็Pᥣρ tιkᥱᥣ 20ρ-100ρ

،🚧֢𝆔𓂃็(Nᥲᥒtι dιgrᥙρ ᥲkᥲᥒ dιkιrιm hᥲrgᥲ dᥲᥒ ριᥴtᥒყᥲ)،🚧֢𝆔𓂃็

،🍏𝆔𓂃็Edιt ᥣιst
،🍼֢𝆔𓂃็Loᥒg:800ρ
،🍼֢𝆔𓂃็Short:600ρ
،🍼֢𝆔𓂃็Wιdᥱ:400ρ

𓂃🌽𖥧¡!Edιt ᥣιst dᥱsk 100ρ-400ρ

𓂃🚧𖥧¡!Notᥱ𓂃🚧𖥧¡!
،🍼֢𝆔𓂃็Ordᥱr sᥲbᥲr ρrosᥱs 1-25 mᥱᥒιt
،🍼֢𝆔𓂃็Aᥣᥣ trᥲx ᥒo rᥱff
`
	}
exports.payment = (prefix, salam, pushname) =>{
	return`Hallo Kak ${pushname} mau berlanggan Alight Motion?*

*~ OPEN JASA AM Premium ~*

*˒ ࣪ ꉂᥐʾ ֛RamaStoreᏪ ָ࣪۰*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈

*_🕊️ALIGHTMOTION PREMIUM
🧚‍♀️MANFAAT:🧚‍♀️
•WARTEMAK HILANG
•UNFFCLOK ALLEFEK
•BISA IMPOR EKSPOR PRESET DI BAWAH DANDIATAS 5MB
•SUPPORT ANDROID/IOS

Harga
Private
1 bulan 30-35k
1 tahun 125-150k

Sharing
1 bulan 8k
1 tahun 10k
Selamanya 15k

Garansi am premium
1 Bulan garansinya 30hari
1 tahun garasinya 6 bulan
Selamanya garansinya 1/1,5tahun_*

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- PAYMENT -*
ぬ ࣪▸ˑ ִֶָ 🥧 Dana
ぬ ࣪▸ˑ ִֶָ 🥧 Gopay

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

minat Chatt Ke Owner Yah kk

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
*OWNER*
wa.me/6283171252216

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
`
	}
	exports.swa = (prefix, salam, pushname) =>{
	return`*Hallo Kak ${pushname} mau sewa bot?*

*~ OPEN JASA SEWA BOT ~*

*˒ ࣪ ꉂᥐʾ ֛RamaStoreᏪ ָ࣪۰*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈


*- Harga sewa -*
ぬ ࣪▸ˑ ִֶָ 🍨 1 minggu : 800p
ぬ ࣪▸ˑ ִֶָ 🍨 1 Bulan : 1k
ぬ ࣪▸ˑ ִֶָ 🍨 Permanen : 2,1k

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

ぬ ࣪▸ˑ ִֶָ 🍿 Bot antidelay
ぬ ࣪▸ˑ ִֶָ 🍿 Bot aktif 24 jam
ぬ ࣪▸ˑ ִֶָ 🍿 Bot tidak pasaran
ぬ ࣪▸ˑ ִֶָ 🍿 Bukan wibusoft
ぬ ࣪▸ˑ ִֶָ 🍿 Bot run menggunakan rdp

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- FITUR BOT -*
ぬ ࣪▸ˑ ִֶָ 🍥 Antilink grup
ぬ ࣪▸ˑ ִֶָ 🍥 Welcome image
ぬ ࣪▸ˑ ִֶָ 🍥 Antivirtex
ぬ ࣪▸ˑ ִֶָ 🍥 Kick otomatis
ぬ ࣪▸ˑ ִֶָ 🍥 Game menu
ぬ ࣪▸ˑ ִֶָ 🍥 Nulis 
ぬ ࣪▸ˑ ִֶָ 🍥 Button menu
ぬ ࣪▸ˑ ִֶָ 🍥 Asupan menu
*Dan masih banyak lagi fitur lainnya yang lebih seru🔥🤤*

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- PAYMENT -*
ぬ ࣪▸ˑ ִֶָ 🥧 Dana
ぬ ࣪▸ˑ ִֶָ 🥧 Gopay

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- Sistem sewa bot -*
𝟷. Masukin bot ke grup
𝟸. Transfer
𝟹. Done

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
*OWNER*
wa.me/6283171252216

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
`
	}
	exports.apps = (prefix, salam, pushname) =>{
	return`*Hallo Kak ${pushname}*

https://wa.me/p/4693847094027239/6283171252216

Untuk melihat harga Apps Premium klik link diatas☝🏻
`
	}
	
	