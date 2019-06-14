export default ({ props }: any) => {
  const getFeatures = (projectFeatures) => {
    const features: any[] = []
    console.log(projectFeatures)
    projectFeatures.map((feature, index) => {
      features.push(
        <li class={`feature f-${index}`}>
          {feature}
        </li>
      )
    })
    return features
  }
  const getProjects = (workProjects) => {
    const projects: any[] = []
    workProjects.map((project, index) => {
      const projectFeatures: any = project.features && project.features.length > 0 ? getFeatures(project.features) : null
      projects.push(
        <li class={`project p-${index}`}>
          <h3><a href={project.url}>{project.name}</a></h3>
          { projectFeatures && (
            <ul class='features'>
              {projectFeatures}
            </ul>
            )
          }
        </li>
      )
    })
    return projects
  }
  const getJobs = (workJobs) => {
    const jobs: any[] = []

    workJobs.map((job, index) => {
      const jobProjects: any = job.projects && job.projects.length > 0 ? getProjects(job.projects) : null
      jobs.push(
        <li class={`job j-${index}`}>
          <h3>{job.description}</h3>
          { jobProjects && (
            <ul class='projects'>
              {jobProjects}
            </ul>
          )}
        </li>
      )
    })
    return jobs
  }
  const getWorks = (works) => {
    const worksArray: any[] = []

    if (works && works.length > 0) {
      works.map((work, index) => {
        const jobs: any = work.jobs && work.jobs.length > 0 ? getJobs(work.jobs) : null
        worksArray.push(
          <article class={`experience exp-${index}`}>
            <div class='experience-title'>
              <h2>{work.organization}: {work.from} - {work.to}</h2>
              { props.activeHovers[work.organization] && (
                <span>{work.description}</span>
                )
              }
            </div>
            { jobs && (
              <ul class='jobs'>
                {jobs}
              </ul>
              )
            }
          </article>
        )
      })
    }
    return worksArray
  }

  return (
    <main class='section'>
      <section class='parallax-background -experience'>
        <section class='background background-1' ref='movingBg1'>
          <article class='divisions d-1'>
            <div class='lava-container'>
              <span class='background-element -lava-fall child-0' />
              <span class='background-element -lava-fall child-1' />
              <span class='background-element -lava-fall child-2' />
              <span class='background-element -lava-fall child-3' />
              <span class='background-element -lava-fall child-4' />
              <span class='background-element -lava-fall child-5' />
              <span class='background-element -lava-fall child-6' />
              <span class='background-element -lava-fall child-7' />
              <span class='background-element -lava-fall child-8' />
            </div>
            <span class='background-element -lava l-1'>
              <h1 class='game-title -cartel -experience'>Work Experience</h1>
            </span>
          </article>
          <article class='divisions'>
            <span class='background-element -lava l-2'/>
            <span class='background-element -waterfall child-0' />
            <span class='background-element -waterfall child-1' />
            <span class='background-element -waterfall child-2' />
            <span class='background-element -waterfall child-3' />
            <span class='background-element -waterfall child-4' />
            <span class='background-element -waterfall child-5' />
            <span class='background-element -waterfall child-6' />
            <span class='background-element -waterfall child-7' />
            <span class='background-element -waterfall child-8' />
            <span class='background-element -waterfall child-9' />
            <span class='background-element -water' />
          </article>
          <article class='divisions'>
            <span class='background-element -torch t-1' />
          </article>
          <article class='divisions'>
            <span class='background-element -torch t-2' />
            <span class='background-element -torch t-3' />
          </article>
        </section>
        <section class='layerBottom' ref='movingBg'>
          <span ref='character' class='character -experience' />
          <button class='exp-btn b-1' onClick={() => props.moveBackground(-100, 'experienceTwoNext')}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-2' onClick={() => props.moveBackground(0, 'experienceOnePrev')}>
            <i class='fas fa-angle-left'></i>
          </button>
          <button class='exp-btn b-3' onClick={() => props.moveBackground(-200, 'experienceThreeNext')}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-4' onClick={() => props.moveBackground(-100, 'experienceTwoPrev')}>
            <i class='fas fa-angle-left'></i>
          </button>
          <button class='exp-btn b-5' onClick={() => props.moveBackground(-300, 'experienceFourNext')}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-6' onClick={() => props.moveBackground(-200, 'experienceThreePrev')}>
            <i class='fas fa-angle-left'></i>
          </button>
          {getWorks(props.works)}
        </section>
      </section>
      <section class='user-panel'>
        <a href='/static-resume/skills/backend' class='button -prev'>
          <i class='fas fa-angle-left' />
          Level 2.2
        </a>
        <a href='/static-resume/' class='button -next'>
          Credits
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
