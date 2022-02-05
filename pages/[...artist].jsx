import { useRouter } from 'next/router'
import PageContainer from '../components/PageContainer'

export default function Artist() {
  const router = useRouter()
  const artist = router.query.artist || []

  return (
    <>
      <PageContainer title="Artist">
        <h1>Artist: {artist.join('/')}</h1>
      </PageContainer>
    </>
  )
}
