function speak(message) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'ru-RU'; // Указываем язык
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Web Speech API не поддерживается вашим браузером, поэтому используйте Chrome - браузер.');
    }
}

function checkBatteryStatus() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            let batteryLevel = Math.round(battery.level * 100);
            let chargingStatus = battery.charging ? " (батарея заряжается )" : " (батарея не заряжается )";
            let batteryStatus = `Уровень заряда батареи: ${batteryLevel}%${chargingStatus}.`;
            let recommendation = '';

            if (battery.charging) {
                if (batteryLevel > 90) {
                    recommendation = ' Рекомендация: Возможно, стоит отключить зарядное устройство, чтобы избежать перезарядки.';
                }
            } else {
                if (batteryLevel < 80) {
                    recommendation = ' Рекомендация: Рассмотрите возможность подзарядки устройства.';
                } else {
                    recommendation = ' Рекомендация: Сейчас можно не заряжать.';
                }
            }

            // Отображаем текстовое оповещение
            document.querySelector('.battery-status').textContent = batteryStatus + recommendation;
            document.querySelector('.battery-info').style.display = 'block';
            
            // Голосовое оповещение
            speak(batteryStatus + recommendation);
        });
    } else {
        alert('Battery Status API не поддерживается вашим браузером, поэтому используйте Chrome - браузер.');
    }
}