import javascript from 'simple-icons/icons/javascript'
import vue from 'simple-icons/icons/vue-dot-js'
import php from 'simple-icons/icons/php'
import sass from 'simple-icons/icons/sass'
import react from 'simple-icons/icons/react'
import node from 'simple-icons/icons/node-dot-js'
import nginx from 'simple-icons/icons/nginx'
import wordpress from 'simple-icons/icons/wordpress'
import drupal from 'simple-icons/icons/drupal'
import gitHub from 'simple-icons/icons/github'
import gitLab from 'simple-icons/icons/gitlab'
import git from 'simple-icons/icons/git'
import css from 'simple-icons/icons/css3'
import nuxt from 'simple-icons/icons/nuxt-dot-js'
import html from 'simple-icons/icons/html5'
import roots from 'simple-icons/icons/roots'
import tailwindcss from 'simple-icons/icons/tailwindcss'
import graphql from 'simple-icons/icons/graphql'
import ember from 'simple-icons/icons/ember-dot-js'
import linux from 'simple-icons/icons/linux'

export default function Icons(tech) {
  return tech.reduce((acc, name) => {
    switch (name) {
      case 'Javascript':
        acc.push({
          name,
          icon: javascript.svg,
        })
        return acc

      case 'Vue':
        acc.push({
          name,
          icon: vue.svg,
        })
        return acc

      case 'PHP':
        acc.push({
          name,
          icon: php.svg,
        })
        return acc

      case 'SCSS':
        acc.push({
          name,
          icon: sass.svg,
        })
        return acc

      case 'React':
        acc.push({
          name,
          icon: react.svg,
        })
        return acc

      case 'Node':
        acc.push({
          name,
          icon: node.svg,
        })
        return acc

      case 'NGINX':
        acc.push({
          name,
          icon: nginx.svg,
        })
        return acc

      case 'WordPress':
        acc.push({
          name,
          icon: wordpress.svg,
        })
        return acc

      case 'Drupal':
        acc.push({
          name,
          icon: drupal.svg,
        })
        return acc

      case 'GitHub':
        acc.push({
          name,
          icon: gitHub.svg,
        })
        return acc

      case 'GitLab':
        acc.push({
          name,
          icon: gitLab.svg,
        })
        return acc

      case 'Git':
        acc.push({
          name,
          icon: git.svg,
        })
        return acc

      case 'CSS':
        acc.push({
          name,
          icon: css.svg,
        })
        return acc

      case 'Nuxt':
        acc.push({
          name,
          icon: nuxt.svg,
        })
        return acc

      case 'HTML5':
        acc.push({
          name,
          icon: html.svg,
        })
        return acc

      case 'Roots':
        acc.push({
          name,
          icon: roots.svg,
        })
        return acc

      case 'Tailwind':
        acc.push({
          name,
          icon: tailwindcss.svg,
        })
        return acc

      case 'GraphQL':
        acc.push({
          name,
          icon: graphql.svg,
        })
        return acc

      case 'Ember':
        acc.push({
          name,
          icon: ember.svg,
        })
        return acc

      case 'Linux':
      case 'Debian':
        acc.push({
          name,
          icon: linux.svg,
        })
        return acc

      default:
        acc.push({
          name,
          icon: '',
        })
        return acc
    }
  }, [])
}
