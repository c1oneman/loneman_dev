import React from "react";
import RetroHitCounter from "react-retro-hit-counter";
function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(0);
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    // Don't count hits if user already hit
    var hasHitRegistered = localStorage.getItem("hasHitRegistered") || false;

    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    // Cors headers are required for this to work.
    fetch(
      `https://loneman.dev/.netlify/functions/${
        hasHitRegistered ? "get" : "register"
      }-hit?slug=${slug}/`,
      { headers }
    )
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === "number") {
          setHits(json.hits);
          localStorage.setItem("hasHitRegistered", true);
        }
      });
  }, [slug]);
  if (typeof hits === "undefined") {
    return null;
  }
  return (
    <RetroHitCounter
      hits={hits}
      withBorder={false}
      withGlow={false}
      segmentActiveColor="#c5c5c5"
      backgroundColor="#141414"
      segmentInactiveColor="#000"
      size={20}
      segmentThickness={2}
      segmentSpacing={0.25}
    />
  );
}
export default HitCounter;
