import React from "react";
import RetroHitCounter from "react-retro-hit-counter";
function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined);
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`https://loneman.dev/.netlify/functions/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === "number") {
          setHits(json.hits);
        }
      });
  }, [slug]);
  if (typeof hits === "undefined") {
    return null;
  }
  return <RetroHitCounter hits={hits} withBorder={false}
    withGlow={false} segmentActiveColor="#c5c5c5" backgroundColor="#000" segmentInactiveColor="#242424" />;
}
export default HitCounter;
