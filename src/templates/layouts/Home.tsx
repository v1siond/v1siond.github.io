import Toolbar from '../../components/Toolbar'

export default ({ props, data, children }: any) => {
  console.log(props)
  return (
    <main class='section'>
      {children}
      <Toolbar title='Alexander Pulido' />
      <h1 class='top-title '>Alexander Resume</h1>
    </main>
  )
}
