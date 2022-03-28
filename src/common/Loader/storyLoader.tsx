import ContentLoader from 'react-content-loader'

const StoryLoader = () => (
  <ContentLoader
  speed={2}
    width={550}
    height={100}
    viewBox="0 0 550 90"
    backgroundColor="#d3d3d3"
    foregroundColor="#ecebeb"
  >
    <circle cx="46" cy="38" r="34" />
    <rect x="20" y="78" rx="5" ry="5" width="50" height="10" />
    <circle cx="137" cy="38" r="34" />
    <rect x="110" y="78" rx="5" ry="5" width="50" height="10" />
    <circle cx="228" cy="38" r="34" />
    <rect x="201" y="78" rx="5" ry="5" width="50" height="10" />
    <circle cx="320" cy="38" r="34" />
    <rect x="293" y="78" rx="5" ry="5" width="50" height="10" />
    <circle cx="410" cy="38" r="34" />
    <rect x="384" y="78" rx="5" ry="5" width="50" height="10" />
    <circle cx="500" cy="38" r="34" />
    <rect x="476" y="78" rx="5" ry="5" width="50" height="10" />
  </ContentLoader>
)

export default StoryLoader