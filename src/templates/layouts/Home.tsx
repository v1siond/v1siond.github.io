import Toolbar from '../../components/Toolbar'

export default ({ props, children }: any) => {
  if (props && props.methods) {
    return (
      <main class='section'>
        {children}
        <header class='parallax-background -intro'>
          <article class='game-options-text'>
            <h1 class='game-title'>
              <p>Alexander Pulido</p>
            </h1>
            <span>
              <a
                href='/interactive-resume'
                class={props.interactive ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('interactive')}
              >
                Interactive Resume
              </a>
              <a
                href='/static/-resume'
                class={props.static ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('static')}
              >
                Static Resume
              </a>
              <a
                href='/blog'
                class={props.blog ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('blog')}
              >
                Blog
              </a>
            </span>
          </article>
          <span class='background background-1' />
          <span class='background background-2' />
          <span class='background background-3' />
          <span class='layerBottom' />
          <span class='character' />
        </header>
      </main>
    )
  } else {
    return null
  }
}
