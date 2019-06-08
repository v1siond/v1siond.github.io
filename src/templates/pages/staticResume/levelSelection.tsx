export default ({ props }: any) => {
  return (
    <main class='section -intro'>
      <iframe src='./beep.wav' allow='autoplay' id='audio' style='display:none'></iframe>
      <section class='parallax-background -levelSelection'>
        <article class='levels-selection'>
          <a
            href='/static-resume/about'
            class='level'
            onmouseenter={() => props.methods.levelSelected('About')}
          >
            level 1
          </a>
          <a
            href='/static-resume/skills'
            class='level'
            onmouseenter={() => props.methods.levelSelected('Skills')}
          >
            level 2
          </a>
          <a
            href='/static-resume/experience'
            class='level'
            onmouseenter={() => props.methods.levelSelected('Experience')}
          >
            level 3
          </a>
          <a
            href='/static-resume/publications'
            class='level'
            onmouseenter={() => props.methods.levelSelected('Pubacations')}
          >
            level 4
          </a>
        </article>
        <article class='background background-1'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-2'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-3'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-4'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          </article>
        <article class='background background-5'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-6'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='layerBottom'/>
      </section>
    </main>
  )
}
