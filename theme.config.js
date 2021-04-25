import Link from 'next/link'

export default {
  repository: 'https://github.com/alfonsocv12/mmp', // project repo
  docsRepository: 'https://github.com/alfonsocv12/mmpDocs', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © Alfonso Villalobos',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <span>Module manager Py</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nextra: the next docs builder" />
    <meta name="og:title" content="Nextra: the next docs builder" />
  </>
}
