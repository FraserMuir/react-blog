export const onRouteUpdate = ({ location, prevLocation }) => {
  registerPageView();
}

const registerPageView = () => {
  window.posthog.capture("$pageview");
}