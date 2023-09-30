function speak(message) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'ru-RU'; // Указываем язык
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Web Speech API не поддерживается вашим браузером');
    }
}

function checkBatteryStatus() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            let batteryStatus = `Уровень заряда батареи: ${Math.round(battery.level * 100)}%`;

            if (battery.charging) {
                batteryStatus += ' (батарея заряжается)';
            } else {
                batteryStatus += ' (батарея не заряжается)';
            }

            // Отображаем текстовое оповещение
            document.querySelector('.battery-status').textContent = batteryStatus;
            document.querySelector('.battery-info').style.display = 'block';
            
            // Голосовое оповещение
            speak(batteryStatus);
        });
    } else {
        alert('Battery Status API не поддерживается вашим браузером');
    }
}