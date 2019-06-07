export default ({ children }: any) => {
  return (
    <main class='section -intro'>
      {children}
      <section class='parallax-background -about'>
        <header class='game-options-text'>
          <h1 class='game-title'>About</h1>
        </header>
      </section>
    </main>
  )
}
