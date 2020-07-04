export const onRouteUpdate = ({ location, prevLocation }) => {
  registerPageView();
}

const registerPageView = () => {
  if (window.posthog) window.posthog.capture("$pageview");
}

export const onServiceWorkerUpdateReady = () => {
  console.log("Recieved content update. Refreshing page");
  window.location.reload(true)
}