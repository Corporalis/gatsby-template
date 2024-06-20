import { Layout } from '@/components/Layout'
import Title from '@/components/Title'

export default function Home() {
  return (
    <Layout>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </Layout>
  )
}