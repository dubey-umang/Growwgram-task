import ContentLoader from "react-content-loader";

const UserGridLoader = () => {
  const dummy = [0, 1];

  return (
    <ContentLoader
    
      width={800}
      height={500}
      viewBox="0 0 800 500"
      backgroundColor="#d3d3d3"
      foregroundColor="#ecebeb"
    >
      {dummy.map((item) => (
        <>
          <rect
            key={1 + item * 3}
            x="90"
            y={60 + item * 220}
            rx="2"
            ry="2"
            width="210"
            height="210"
          />
          <rect
            key={2 + item * 3}
            x="315"
            y={60 + item * 220}
            rx="2"
            ry="2"
            width="210"
            height="210"
          />
          <rect
            key={3 + item * 3}
            x="540"
            y={60 + item * 220}
            rx="2"
            ry="2"
            width="210"
            height="210"
          />
        </>
      ))}
    </ContentLoader>
  );
};

export default UserGridLoader;
