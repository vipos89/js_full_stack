import { trpc } from '../../lib/trpc'
export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()
  console.log(data)

  if (isLoading) return <span>Loading...</span>
  
  if (isError) return <span>Error: {error.message}</span>

  if (!data) return null

  return (
    <div>
      <h1>Ideanick</h1>
      {data.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
