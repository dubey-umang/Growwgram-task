import ContentLoader from 'react-content-loader'

const UserInfoLoader = () => (
  <ContentLoader
    height={200}
    width={500}
    viewBox="0 0 500 200"
    foregroundColor="#d3d3d3"
    backgroundColor="#ecebeb"
  >
    <circle cx="70" cy="73" r="50" />
    <rect x="129" y="30" width="125.5" height="17" />
    <rect x="129" y="64" width="296" height="17" />
    <rect x="129" y="110" width="253.5" height="17" />
  </ContentLoader>
)

export default UserInfoLoader;