import Menu from '../../components/Menu'

export default ({ props }: any) => {
  if (props.data.blog) {
    return (
      <nav class={`menu-top`}>
        <section class='container'>
          <article class='links'>
            {props.data.getBack && (
              <a onClick={props.methods.backHandler} class='link'>
                <i class='fas fa-arrow-left' />
              </a>
            )}
            <p class='game-title -small'>{props.data.getTitle}</p>
          </article>
          {props.data.getLogin ? (
            <a
              class='link'
              onClick={props.methods.logoutHandler}
              title='Logout'
            >
              <i class='fas fa-user' />
            </a>
          ) : (
            <routerLink class='link' to='/login' title='Login'>
              <i class='fas fa-user' />
            </routerLink>
          )}
        </section>
      </nav>
    )
  } else {
    return (
      <nav class={`menu-top -game`}>
        {props.showMenu && (<Menu openMenu={props.methods.openMenu}/>)}
        {props.showMenu === false && (
          <section class='container'>
            <ul class='stats-list'>
              <li class='stat'>
                <h3>Alex</h3>
              </li>
              { props.mobile && (
                <li class='stat'>
                  <h3>World</h3>
                  { props.getLevelNumber !== '_' && (
                    <p>{ props.getLevelNumber }: { props.getLevelName }</p>
                  )}
                </li>
              )}
              { props.mobile && (
                <li class='stat'>
                  <h3>Time</h3>
                  <p>{props.data.getTime}</p>
                </li>
              )}
              <li class='stat' onClick={() => props.methods.openMenu()}>
                <a><i class='fa fa-bars '/></a>
              </li>
            </ul>
          </section>
        )}
      </nav>
    )
  }
}
