const openAppButton = document.getElementById('openApp');

openAppButton.addEventListener('click', () => {
  const userAgent = navigator.userAgent;

  // Check for iOS devices
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    const appStoreLink = 'https://apps.apple.com/no/app/thon-hotels/id1308171406'; // Replace with your actual App Store link

    // Try opening the app using the custom URL scheme
    const openAppUrl = 'thonhotels://'; 
    const openInApp = window.location.href = openAppUrl;

    // If app is not installed, fallback to App Store
    if (!openInApp) {
      window.location.href = appStoreLink;
    }
  } else if (/android/i.test(userAgent)) {
    const playStoreLink = 'https://play.google.com/store/apps/details?id=otg.thonhotel&hl=en'; // Replace with your actual Play Store link

    // Try opening the app using the custom URL scheme
    const openAppUrl = 'intent://thonhotels/#Intent;scheme=thonhotels;package=com.yourapppackage;end;'; 
    const openInApp = window.location.href = openAppUrl;

    // If app is not installed, fallback to Play Store
    if (!openInApp) {
      window.location.href = playStoreLink;
    }
  } else {
    // Handle non-mobile devices (optional)
    alert('This feature is currently only available on mobile devices.');
  }
});
