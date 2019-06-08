import Toolbar from '../../components/Toolbar'

export default ({ props, children }: any) => {
  if (props && props.methods) {
    return (
      <main class='section -intro'>
        {children}
        <section class={`parallax-background ${props.animationClass}`}>
          <header class='game-options-text'>
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
                href='/static-resume'
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
          </header>
          <article class='background background-1'/>
          <article class='background background-2'/>
          <article class='background background-3'/>
          <article class='layerBottom'/>
          <article class='character'/>
          <article class='character -jumpDownIntro'/>
        </section>
      </main>
    )
  } else {
    return null
  }
}
