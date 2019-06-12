export default ({ props }: any) => {
  const showRocks = (childs) => {
    const rocks :any[] = []

    for (const [i, value] of childs.entries()) {
      rocks.push(<div class={`rock rock-${i + 1}`}>
          <h3>{value}</h3>
          <span class='stars'>
            <i class='fas fa-star'/>
            <i class='fas fa-star'/>
            <i class='fas fa-star'/>
            <i class='fas fa-star'/>
            <i class='fas fa-star'/>
          </span>
        </div>
      )
    }
    return rocks
  }
  const divisions = () => {
    const divisionsArray: any[] = []

    for (let i: number = 0; i < 5; i++) {
      divisionsArray.push(<span class='divisions' />)
    }
    return divisionsArray
  }
  return (
    <main class='section'>
      <section class='parallax-background -skill'>
        <transition-group tag='div' name={props.transitionName} class='background background-1 slides-group'>
          { props.show && (
            <span
              key={props.current}
              class={`divisions slide -skills`}
            >
              {showRocks(props.skills[props.current].techs)}
              <h2 class='game-title -skill -general'>{props.skills[props.current].title}</h2>
            </span>
          )}
        </transition-group>
        <article class='background background-2'>
          {divisions()}
        </article>
        <article ref='moveSand' class={`background background-3 ${props.transitionName}-enter-bg ${props.transitionName}-enter-active-bg`}>
          {divisions()}
        </article>
        <article class='background background-4'>
          {divisions()}
        </article>
        <article class='background background-5'>
          {divisions()}
        </article>
        <article class='layerBottom'/>
        <a href={props.nextUrl.url} class='button -next'>
          {props.nextUrl.text}
          <i class='fas fa-angle-right' />
        </a>
        <a href={props.prevUrl} class='button -prev'>
          <i class='fas fa-angle-left' />
          {props.prevUrl.text}
        </a>
        <div class='btn btn-prev' aria-label='Previous slide' onClick={() => props.slide(-1)}>
          &#10094;
        </div>
        <div class='btn btn-next' aria-label='Next slide' onClick={() => props.slide(1)}>
          &#10095;
        </div>
      </section>
    </main>
  )
}
