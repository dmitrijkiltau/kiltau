import * as React from 'react'
import { useTranslation, Link, useI18next } from 'gatsby-plugin-react-i18next'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Footer = () => {
  const { t } = useTranslation()
  const { language, languages, originalPath } = useI18next()
  const { mainMenu, footerMenu, social } = useSiteMetadata()

  const date = new Date();
  const year = date.getFullYear();

  return <footer>
    <div className="container">
      <div id="back-to-top">
        <Link to="#hero" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </Link>
      </div>

      <div id="footer-sitemap">
        <h3>{t('footer.sitemap.title')}</h3>

        <nav>
          {mainMenu.map((item, index) => <Link key={`menu-${index}`} to={`/#${item}`}>{t(`footer.sitemap.${item}`)}</Link>)}
        </nav>
      </div>

      <div id="footer-social">
        <h3>{t('footer.socialMedia.title')}</h3>

        <nav className="grid grid-cols-1 md:grid-cols-2 items-start">
          {Object.values(social).map((item, index) => <a key={`social-${index}`} href={item.url + item.name} target="_blank" rel="noreferrer">{item.title}</a>)}
        </nav>
      </div>

      <div id="footer-apps">
        <h3 className="mb-4">{t('footer.apps.title')}</h3>

        <p className="hidden md:block mb-4">{t('footer.apps.description')}</p>

        <a href="https://play.google.com/store/apps/dev?id=4827793113950227625" target="_blank" rel="noreferrer" aria-label="Google Play">
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="53.333">
            <path d="M173.33 53.333H6.67c-3.667 0-6.666-3-6.666-6.667V6.669C.004 3 3.004 0 6.67 0h166.66c3.667 0 6.667 3 6.667 6.666v40c0 3.666-3 6.666-6.667 6.666" fill="#100f0d" /><path d="M173.33.001H6.67c-3.667 0-6.666 3-6.666 6.667v39.998c0 3.667 3 6.667 6.666 6.667h166.66c3.667 0 6.667-3 6.667-6.667V6.669c0-3.667-3-6.667-6.667-6.667zm0 1.066c3.088 0 5.6 2.513 5.6 5.6v40c0 3.087-2.512 5.6-5.6 5.6H6.67a5.606 5.606 0 0 1-5.6-5.6v-40c0-3.087 2.512-5.6 5.6-5.6h166.66" fill="#a2a2a1" /><path d="M142.58 40h2.488V23.331h-2.488zm22.409-10.664-2.852 7.226h-.085l-2.96-7.226h-2.68l4.44 10.1-2.532 5.619h2.595l6.84-15.719zm-14.11 8.77c-.813 0-1.95-.407-1.95-1.415 0-1.286 1.415-1.78 2.637-1.78 1.093 0 1.609.236 2.273.558a3.016 3.016 0 0 1-2.96 2.638zm.301-9.135c-1.801 0-3.666.794-4.438 2.553l2.208.921c.472-.921 1.35-1.221 2.273-1.221 1.287 0 2.595.77 2.616 2.144v.171c-.45-.257-1.416-.643-2.595-.643-2.381 0-4.804 1.308-4.804 3.752 0 2.23 1.952 3.667 4.139 3.667 1.672 0 2.596-.75 3.173-1.63h.087v1.288h2.403v-6.391c0-2.96-2.211-4.61-5.062-4.61zm-15.376 2.394h-3.538v-5.713h3.538c1.86 0 2.916 1.54 2.916 2.856 0 1.292-1.056 2.857-2.916 2.857zm-.064-8.034h-5.961v16.67h2.487v-6.315h3.474c2.758 0 5.468-1.996 5.468-5.177 0-3.18-2.71-5.177-5.468-5.177zM103.233 38.11c-1.718 0-3.157-1.44-3.157-3.415 0-1.998 1.439-3.458 3.157-3.458 1.697 0 3.029 1.46 3.029 3.458 0 1.976-1.332 3.415-3.029 3.415zm2.857-7.84h-.086c-.558-.666-1.633-1.267-2.985-1.267-2.836 0-5.435 2.492-5.435 5.692 0 3.179 2.599 5.65 5.435 5.65 1.352 0 2.427-.602 2.985-1.29h.086v.816c0 2.17-1.16 3.33-3.029 3.33-1.524 0-2.47-1.095-2.856-2.019l-2.17.902c.623 1.503 2.277 3.351 5.027 3.351 2.921 0 5.392-1.719 5.392-5.908v-10.18h-2.364zm4.082 9.73h2.49V23.33h-2.49zm6.164-5.498c-.064-2.191 1.698-3.308 2.965-3.308.988 0 1.825.494 2.105 1.202zm7.733-1.89c-.473-1.268-1.912-3.61-4.854-3.61-2.922 0-5.35 2.3-5.35 5.672 0 3.179 2.407 5.67 5.628 5.67 2.6 0 4.104-1.589 4.727-2.513l-1.933-1.289c-.645.946-1.525 1.569-2.794 1.569-1.266 0-2.169-.58-2.748-1.72l7.582-3.135zm-60.41-1.87v2.407h5.757c-.172 1.353-.623 2.34-1.31 3.028-.838.838-2.148 1.762-4.446 1.762-3.545 0-6.315-2.857-6.315-6.401s2.77-6.402 6.315-6.402c1.912 0 3.307.752 4.339 1.719l1.697-1.697c-1.44-1.375-3.351-2.427-6.036-2.427-4.855 0-8.937 3.952-8.937 8.807 0 4.854 4.082 8.806 8.937 8.806 2.62 0 4.596-.859 6.143-2.47 1.59-1.59 2.084-3.823 2.084-5.628 0-.558-.044-1.073-.13-1.503zm14.773 7.368c-1.719 0-3.201-1.417-3.201-3.436 0-2.041 1.482-3.437 3.2-3.437 1.719 0 3.201 1.396 3.201 3.437 0 2.019-1.482 3.436-3.2 3.436zm0-9.107c-3.137 0-5.693 2.384-5.693 5.67 0 3.266 2.556 5.671 5.693 5.671 3.136 0 5.692-2.405 5.692-5.67 0-3.287-2.556-5.671-5.692-5.671zm12.417 9.107c-1.718 0-3.2-1.417-3.2-3.436 0-2.041 1.482-3.437 3.2-3.437 1.719 0 3.2 1.396 3.2 3.437 0 2.019-1.481 3.436-3.2 3.436zm0-9.107c-3.136 0-5.692 2.384-5.692 5.67 0 3.266 2.556 5.671 5.692 5.671 3.137 0 5.693-2.405 5.693-5.67 0-3.287-2.556-5.671-5.693-5.671" fill="#fff" /><path d="M27.622 25.899 13.428 40.965l.002.009a3.833 3.833 0 0 0 5.648 2.312l.046-.026 15.978-9.22-7.48-8.141" fill="#eb3131" /><path d="m41.983 23.334-.014-.01-6.898-3.998L27.3 26.24l7.8 7.798 6.861-3.96a3.836 3.836 0 0 0 .023-6.745" fill="#f6b60b" /><path d="M13.426 12.37c-.085.315-.13.644-.13.987V39.98c0 .341.044.672.13.985l14.685-14.68L13.427 12.37" fill="#5778c5" /><path d="m27.727 26.668 7.347-7.345-15.96-9.254a3.843 3.843 0 0 0-5.687 2.297v.004l14.3 14.298" fill="#3bad49" /><path d="M63.193 13.042h-3.89v.963h2.915c-.08.785-.392 1.402-.919 1.85-.527.447-1.2.672-1.995.672-.873 0-1.613-.304-2.22-.908-.593-.616-.895-1.379-.895-2.298 0-.918.302-1.68.896-2.298.606-.604 1.346-.906 2.219-.906.448 0 .875.077 1.266.246.392.169.706.404.952.706l.74-.74a3.33 3.33 0 0 0-1.288-.885 4.396 4.396 0 0 0-1.67-.314c-1.165 0-2.152.404-2.959 1.21-.806.808-1.21 1.804-1.21 2.981 0 1.177.404 2.175 1.21 2.982.806.806 1.794 1.21 2.958 1.21 1.223 0 2.198-.392 2.948-1.188.66-.662.998-1.558.998-2.679 0-.19-.023-.391-.056-.604zM64.7 9.309v8.025h4.685v-.986h-3.654v-2.545h3.296v-.963H65.73v-2.544h3.654V9.31zm11.255.987V9.31H70.44v.987h2.242v7.038h1.031v-7.038zm4.992-.987h-1.03v8.025h1.03zm6.807.987V9.31h-5.515v.987h2.242v7.038h1.031v-7.038zm10.406.057c-.796-.82-1.77-1.223-2.936-1.223s-2.141.404-2.937 1.21c-.796.796-1.187 1.794-1.187 2.981s.391 2.186 1.187 2.982c.796.806 1.77 1.21 2.937 1.21 1.155 0 2.14-.404 2.936-1.21.796-.796 1.187-1.794 1.187-2.982 0-1.177-.391-2.173-1.187-2.968zm-5.133.67c.593-.604 1.323-.906 2.197-.906.873 0 1.603.302 2.186.906.594.594.885 1.369.885 2.298 0 .932-.291 1.704-.885 2.298-.583.604-1.313.908-2.186.908-.874 0-1.604-.304-2.197-.908-.582-.606-.873-1.366-.873-2.298 0-.929.291-1.691.873-2.298zm8.77 1.313-.043-1.548h.043l4.08 6.546h1.076V9.309h-1.03v4.695l.043 1.548h-.044l-3.9-6.243h-1.256v8.025h1.031z" fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth=".267" />
          </svg>
        </a>
      </div>
    </div>

    <div id="footer-languages">
      {languages.map((lng) => (lng !== language && <Link to={originalPath} language={lng} key={lng}>{lng}</Link>))}
    </div>

    <div id="footer-bar">
      <div className="container">
        <small>&copy; {year} <Link to="/">Dmitrij Kiltau</Link>.</small>

        <nav id="footer-privacy">
          {footerMenu.map((item, index) => <Link key={`footer-menu-${index}`} to={`/${item}`}>{t(`footer.legal.${item}`)}</Link>)}
        </nav>
      </div>
    </div>
  </footer>
}