import ContentLoader from 'react-content-loader'

const PostLoader = () => {
  const dummy = [1, 2, 3, 4, 5];

  return (
    <>
      {
        dummy.map(item => (
          <ContentLoader
            key={item}
            width={600}
            height={500}
            viewBox="0 0 600 500"
            backgroundColor="#d3d3d3"
            foregroundColor="#ecebeb"
          >
            <circle cx="31" cy="31" r="15" />
            <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
            <rect x="0" y="60" rx="2" ry="2" width="600" height="400" />
          </ContentLoader>
        ))
      }
    </>
  )
}

export default PostLoader;