import AnimatedCursor from "react-animated-cursor";

function CustomAnimatedCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "var(--white)",
      }}
      outerStyle={{
        border: "3px solid var(--white)",
      }}
      clickables={[
        ".moon-icon",
      ]}
    />
  );
}

export default CustomAnimatedCursor;
