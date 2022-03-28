import ContentLoader from 'react-content-loader'

const ThreeDots = () => (
  <ContentLoader
    viewBox="0 0 200 100"
    height={100}
    width={200}
    backgroundColor="transparent"
  >
    <circle cx="10" cy="50" r="8" />
    <circle cx="80" cy="50" r="8" />
    <circle cx="150" cy="50" r="8" />
  </ContentLoader>
)

export default ThreeDots;