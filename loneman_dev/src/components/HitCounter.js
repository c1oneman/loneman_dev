import React from "react";
import RetroHitCounter from "react-retro-hit-counter";
function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(0);
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    var hasHitRegistered = localStorage.getItem("hasHitRegistered");

    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(
      `https://loneman.dev/.netlify/functions/${
        hasHitRegistered ? "register" : "get"
      }-hit?slug=${slug}`
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
