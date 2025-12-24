importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAafXkJwyZ5F7Xuax0VktZ9cpqWD4oCvxU",
    messagingSenderId: "584797187828",
    appId: "1:584797187828:web:4c643f83dfd9b700adb8a1",
    projectId: "tournament-97743"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Sentinel Background Signal:', payload);
    
    const notificationTitle = payload.notification.title || "Intelligence Alert";
    const notificationOptions = {
        body: payload.notification.body || "Something is wrong",
        icon: 'https://cdn-icons-png.flaticon.com/512/1067/1067568.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1067/1067568.png',
        tag: 'sentinel-alert',
        renotify: true,
        data: {
            url: 'manager.html' 
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Open manager.html when notification is clicked
self.onnotificationclick = function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('manager.html')
    );
};