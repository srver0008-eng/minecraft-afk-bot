const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'apex53563.progamer.me',
    port: 25565,                  // تأكد من البورت الخاص بك
    username: 'AFK_Bot_247',
    version: '26.3'               // تعيين الإصدار الجديد الذي يطلبه السيرفر مباشرة
  });

  bot.on('spawn', () => {
    console.log('دخل البوت إلى السيرفر بنجاح!');
  });

  bot.on('end', () => {
    console.log('تم قطع الاتصال، جاري إعادة المحاولة خلال 5 ثوانٍ...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('حدث خطأ:', err));

  setInterval(() => {
    if (bot.entity) {
      bot.look(bot.entity.yaw + 0.1, bot.entity.pitch, true);
    }
  }, 180000);
}

createBot();
  }, 180000);
}

createBot();
