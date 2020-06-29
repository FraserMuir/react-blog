export const onRouteUpdate = ({ location, prevLocation }) => {
  registerPageView();
}

const registerPageView = () => {
  if (window.posthog) window.posthog.capture("$pageview");
}