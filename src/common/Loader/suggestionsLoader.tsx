import ContentLoader from 'react-content-loader'

const SuggestionsLoader = () => {
  const dummy = [1, 2, 3, 4, 5]
  return (
    <>
      {
        dummy.map(item => (
          <ContentLoader
            key={item}
            height={50}
            width={250}
            foregroundColor="#d3d3d3"
            backgroundColor="#ecebeb"
          >
            <circle cx="25" cy="25" r="24" />
            <rect x="60" y="20" rx="3" ry="3" width="130" height="7" />
            <rect x="60" y="30" rx="3" ry="3" width="100" height="6" />
          </ContentLoader>
        ))
      }
    </>
  )
}

export const SuggestionsUserCardLoader = () => {
  return (
    <ContentLoader
      height={100}
      width={250}
      foregroundColor="#d3d3d3"
      backgroundColor="#ecebeb"
    >
      <circle cx="40" cy="40" r="35" />
      <rect x="90" y="30" rx="3" ry="3" width="130" height="10" />
      <rect x="90" y="50" rx="3" ry="3" width="100" height="8" />
    </ContentLoader>
  )
}

export default SuggestionsLoader;