import './App.css'
import 'node-telegram-bot-api'

export default function App() {
  return (
  	
		const TelegramBot = require("node-telegram-bot-api");
		const token = "853908338:AAFHNbIxTUH2yT8R41jqblnQXdde43iv780";
		const bot = new TelegramBot(
			  token, {
			  poiling: true
			}
		);
		
		var keybrdMnu = [
		  [
		    { text: "menu" }
		  ]
		]
		
		var bayar = [
		  [
		    { text: "keranjang" },
		    { text: "tambah item lagi" }
		  ],
		  [
		    { text: "metode bayar" },
		    { text: "pengiriman" }
		  ],
		  [
		    { text: "kembali" }
		  ]
		]
		
		var hide = [
		  [
		    { text: "sembunyikan" }
		  ]
		]
		
		var hideKeybord = [
		  { hide_keyboard: true }
		]
		
		bot.onText(
		  /\/echo.+/, (msg, match) => {
		    const chatId = msg.chat.id;
		    const resp = match[1];
		
		    bot.sendMessage(chatId, resp);
		  }
		);
		
		bot.on(
		  'message', (msg) => {
		    const chatId = msg.chat.id;
		    const konten = msg.text;
		
		    if (konten == 'Halo') {
		      bot.sendMessage(chatId, "hai kak");
		    } else if (konten == 'Menu') {
		      bot.sendMessage(chatId, "berikut menu yang dapat ditampilkan", {
		        reply_markup: {
		          resize_keyboard: true,
		          keyboard: bayar
		        }
		      });
		    } else {
		      bot.sendMessage(chatId, "loading data...");
		    }
		  }
		);
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
    </main>
  )
}
