export const App = () => {
  const ideas = [
    { name: 'Idea 1', description: 'Description 1', nick: 'cool-idea-nick-1' },
    { name: 'Idea 2', description: 'Description 2', nick: 'cool-idea-nick-2' },
    { name: 'Idea 3', description: 'Description 3', nick: 'cool-idea-nick-3' },
  ]

  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((idea) => {
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
