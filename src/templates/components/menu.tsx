export default ({ props }: any) => {
  console.log(props)
  return (
    <main class='mobile-menu'>
      <ul class='stats-list -menu'>
        <li class='stat'>
          <h3>Alex</h3>
        </li>
        <li class='stat'>
          <h3>World</h3>
          { props.data.getLevelName !== '_' && props.data.getLevelName !== 'Credits' ? (
            <p>{ props.data.getLevelNumber }: { props.data.getLevelName }</p>
          ) : null}
        </li>
        <li class='stat'>
          <h3>Time</h3>
          <p>{props.data.getTime}</p>
        </li>
      </ul>
      <ul class='presentation-lvl-indicador'>
        <li class='link'>
          <a href='/'>Start Menu</a>
        </li>
        <li class='link' onClick={() => props.methods.showLevels()}>
          <span class='carousel'><a href='/static-resume'>Static Resume Levels</a><i class={props.data.opened ? 'fas fa-angle-up' : 'fas fa-angle-down'}></i></span>
          <ul class={`sub-levels ${props.data.opened && 'opened'}`}>
            <li class='level'>
              <a href='/static-resume/about/ '>About</a>
              <ul>
                <li>
                  <a href='/static-resume/about/abilities '>Abilities</a>
                </li>
                <li>
                  <a href='/static-resume/about/born-in'>Born In</a>
                </li>
                <li>
                  <a href='/static-resume/about/live-and-work'>Live And Work</a>
                </li>
                <li>
                  <a href='/static-resume/about/hobbies'>Hobbies</a>
                </li>
              </ul>
            </li>
            <li class='level'>
              <a href='/static-resume/skills'>Skills</a>
            </li>
            <li class='level'>
              <a href='/static-resume/experience'>Experience</a>
            </li>
          </ul>
        </li>
        <li class='link'>
          <a href='/interactive-resume'>Interactive-resume</a>
        </li>
        <li class='link'>
          <a href='/blog'>Blog</a>
        </li>
        <li class='link'>
          <a href='/credits'>Credits</a>
        </li>
        <li class='link' onClick={() => props.methods.openMenu()}>
          <a>Exit Menu</a>
        </li>
      </ul>
    </main>
  )
}
